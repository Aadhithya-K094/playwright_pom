(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"],{

/***/ 43054:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/services/api.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionStatusEnum": function() { return /* binding */ ConnectionStatusEnum; },
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/network/ngx */ 75592);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);







// import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';



// import { environment } from 'src/environments/environment.prod';




// import * as S3 from 'aws-sdk/clients/s3';
var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
let ApiService = class ApiService {
    constructor(toastController, httpClient, ionicstorage, network, dataService, alertService) {
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.ionicstorage = ionicstorage;
        this.network = network;
        this.dataService = dataService;
        this.alertService = alertService;
        this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.emisApiUrl;
        this.user_name = '10300766';
        this.pass_word = '9442@1969';
        this.token_sample = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWlzX3VzZXJuYW1lIjoiMTAzMDA3NjYiLCJlbWlzX3VzZXJfaWQiOiIzMDA3NjYiLCJlbWlzX3VzZXJ0eXBlIjoiMzgiLCJlbWlzX3VzZXJ0eXBlMSI6IjEiLCJzdGF0dXMiOiJBY3RpdmUiLCJ0ZWFjaGVyX25hbWUiOiJNT0hBTiBSIiwidWRpc2VfY29kZSI6IjMzMDQxMDAwMjMzIiwidGVhY2hlcl90eXBlIjoiMTAxIiwic2Nob29sX2tleV9pZCI6IjkwMDU2IiwidGVhY2hlcl9pZCI6IjEwMzAwNzY2IiwidHlwZV90ZWFjaGVyIjoiRElTVFJJQ1QgRURVQ0FUSU9OQUwgT0ZGSUNFUiAoRWxlbWVudGFyeSkiLCJzdWJqZWN0cyI6IkNoZW1pc3RyeSIsInRlbXBfbG9naW4iOiIwIiwiZGlzdHJpY3RfaWQiOiIzNSIsImJsb2NrX2lkIjpudWxsLCJtb2QxIjoiNjAsMTAsNDEsNDIsNDMsNDQiLCJtb2QyIjoiMTEsMjcsNDksNjksMjgsNzgsNTQsMzUsMzYsMzcsMzgsODEsOCw0MiwzMiIsIm5ld3NjaGwiOm51bGwsImlhdCI6MTY3ODA4NzU2OCwiZXhwIjoxNjc4MDg3ODY4fQ.XLT-jkTVL79Q3uf-9tz3LJCoAGyUJ5PKIVPvwAcIrWE';
        this.mediumOfInstructionsArray = [];
        this.selectclassmultiplechoicearray = [
            { name: 'A', isSelected: false, id: 1 },
            { name: 'B', isSelected: false, id: 2 },
            { name: 'C', isSelected: false, id: 3 },
            { name: 'D', isSelected: false, id: 4 }
        ];
        this.classRadio = "";
        this.subjects = [];
        this.classTypeArray = [];
        this.classTypeSelected = 'multigrade';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api' })
        };
        this.classes = [];
        //////////
        this.showSideBar = false;
        this.usernameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('');
        this.studentAssessedArray = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
        this.totalStudentsAssesedClass1 = this.studentAssessedArray.asObservable();
        this.username = this.usernameSubject.asObservable();
        this.FormativeAssessmentA = [];
        this.studentsListquestionList = [];
        this.classroomDetails = [];
        this.RemainingUser = 0;
        this.showtabs = '';
        this.readingFileApi = 'https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl%22';
        this.class1Students = [
            {
                name: "Anitha P",
                roll: "5674873",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "Rohan S",
                roll: "5674871",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "Ram P",
                roll: "5674872",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "Ram Prasad",
                roll: "5670072",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "Rose S",
                roll: "56748702",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "Kulwinder S",
                roll: "5674874",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "Jeevan P",
                roll: "56748573",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "Reema S",
                roll: "56108573",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "praveen S",
                roll: "00108573",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
            {
                name: "balveera S",
                roll: "00155573",
                score: null,
                isAssessed: false,
                isSkipped: false,
                skippedReason: '',
            },
        ];
        this.Questions = [
            {
                title: "Which of the following ruler of Satavahana Empire composed Gathasaptashati?",
                options: ['Simuka', 'Gautamiputra Satkarni', 'Pulumayi', 'Hala'],
                answer: "Hala",
                type: "textOnly"
            },
            {
                title: "What is being shown below?",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Elephant_Diversity.jpg",
                options: ['Elephant', 'Tiger', 'Dog', 'Cat'],
                answer: "Elephant",
                type: "imageWithText",
            },
            {
                title: "Which of the following is the Australian flag??",
                options: [{
                        answerKey: 0,
                        image: "https://elearning.uq.edu.au/files/10118/multiple-choice-with-images-02.png"
                    }, {
                        answerKey: 1,
                        image: "https://elearning.uq.edu.au/files/10124/multiple-choice-with-images-03.png"
                    }, {
                        answerKey: 2,
                        image: "https://elearning.uq.edu.au/files/10124/multiple-choice-with-images-03.png"
                    }, {
                        answerKey: 3,
                        image: "https://elearning.uq.edu.au/files/10136/multiple-choice-with-images-05.png"
                    },],
                answer: 3,
                type: "textWithImages"
            },
            {
                title: "How does CIrcle look like?",
                options: [{
                        answerKey: 0,
                        image: "data:image/png;base64,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"
                    }, {
                        answerKey: 1,
                        image: "https://www.kidsmathgamesonline.com/images/pictures/shapes/hexagon.jpg"
                    }, {
                        answerKey: 2,
                        image: "data:image/png;base64,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"
                    }, {
                        answerKey: 3,
                        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEX///8AAAA+Pj47OztCQkJgYGDs7OwNDQ2VKtCdAAABdklEQVR4nO3du20EMRQEQe19pPwzlie/DeoGi6oABmyA/vv6AgAAAAAAAAAA4J6+38/Hguf7+1Dh+1rxPlT4/HTYn+ehwsd1/bw+/UUfr5/repwrfB2aLl5HC09NFwefofCfKNycLhRuThcKN6cLhZvThcLN6ULh5nShcHO6ULg5XSjcnC4Ubk4XCjenC4Wb04XCzelC4eZ0oXBzulC4OV0o3JwuFG5OFwo3pwuFm9OFws3pQuHmdKFwc7pQuDldKNycLhRuThcKN6cLhZvThcLN6ULh5nShcHO6ULg5XSjcnC4Ubk4XCjenC4Wb04XCzelC4eZ0oXBzulC4OV0o3JwuFG5OFwo3pwuFm9OFws3pQuHmdKFwc7pQuDldKNycLhRuThcKN6cLhZvThcLN6ULh5nShcHO6ULg5XSjcnC4Ubk4XCjenC4Wb04XCzelC4eZ0oXBzujhbeP8blje/Q3r/W7L3vwd8/5vOAAAAAAAAAAAAfNovofQM/Reo7UkAAAAASUVORK5CYII="
                    },],
                answer: 2,
                type: "textWithImages"
            },
            {
                title: "which color tshirt is in below image",
                questionImage: "https://imgprd19.hobbylobby.com/e/5e/cd/e5ecd22cfe6a229cc51d6b30ef381ad1c6c064b1/700Wx700H-633792-0320.jpg",
                options: [{
                        answerKey: 0,
                        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEUAV9na18308u3p7fsAR9fp5+H+//8ANNSZJcY4AAABH0lEQVR4nO3PCQ2EABAAMX78Oz4IORGzaR10Wadb1nOb7HyG27XPdW3vcL+Pqe79Gx7LVIdhnmGfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYd9/eB9T3d/w2ue63uG5TXY+w+l+h1EihcbqknUAAAAASUVORK5CYII="
                    }, {
                        answerKey: 2,
                        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEX/utLa183y8e7/9/r/tc/p5+H/////scwPyL14AAABH0lEQVR4nO3PCQ2EABAAMX78Oz4IORGzaR10Wadb1nOb7HyG27XPdW3vcL+Pqe79Gx7LVIdhnmGfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYd9/eB9T3d/w2ue63uG5TXY+w+l+h1EihcbqknUAAAAASUVORK5CYII="
                    }, {
                        answerKey: 3,
                        image: "https://www.colorcombos.com/images/colors/000000.png"
                    }, {
                        answerKey: 4,
                        image: "https://www.colorcombos.com/images/colors/5BC236.png"
                    }],
                answer: "0",
                type: "imageWithImage",
            },
            {
                title: "With which among the following branches of Mathematics, Sulva Sutras are related to__?",
                options: ['Algenbra', 'Geometry', 'Calculus', 'Game Theory'],
                answer: "Geometry",
                type: "textonly",
            },
            {
                title: `
      Answer the following questions`,
                questions: [{
                        title: "What is 5+2?",
                        options: ['6', '7', '9', '10'],
                        answer: '7',
                        type: "textOnly"
                    },
                    {
                        title: "What is 10 + 5?",
                        options: ['3', '15', '10', '20'],
                        answer: '15',
                        type: "textOnly"
                    },
                    {
                        title: "What is 12 + 4?",
                        options: ['3', '15', '16', '20'],
                        answer: '16',
                        type: "textOnly"
                    },
                    {
                        title: "What is 13 + 7?",
                        options: ['3', '15', '16', '20'],
                        answer: '20',
                        type: "textOnly"
                    }
                ],
                type: "group",
            },
            {
                title: `
      Below are the list of animal in which you have to collectively select answers for the respective questions:
      A. Tiger
      B. Wolf
      C. Cheeta
      D. Lion
      E. Dog`,
                questions: [{
                        title: "Which are the animals lives in forest?",
                        options: ['A,B,C,D', 'A,B,C', 'A,C', 'B,C'],
                        answer: 'A,B,C,D',
                        type: "textOnly"
                    },
                    {
                        title: "Which belongs to cat family?",
                        options: ['A,C', 'C,D', 'A,C,D', 'A,E'],
                        answer: 'A,C,D',
                        type: "textOnly"
                    },
                    {
                        title: "Which belons to Dog family?",
                        options: ['E', 'B,E', 'A,B,E', 'B,C,E'],
                        answer: 'B,E',
                        type: "textOnly"
                    },
                    {
                        title: "Which can runs very fast?",
                        options: ['B,C', 'C', 'A,B,C', 'D'],
                        answer: 'B,C',
                        type: "textOnly"
                    },
                    {
                        title: "Which are the animals very strong?",
                        options: ['A', 'D', 'A,C,D', 'A,D'],
                        answer: 'A,D',
                        type: "textOnly"
                    }
                ],
                type: "group",
            },
            {
                title: `
      Please answer the following questions and tell, What below images are known as?`,
                questions: [{
                        image: "https://www.kidsmathgamesonline.com/images/pictures/shapes/triangle.jpg",
                        options: ['Rectangle', 'Circle', 'Sqaure', 'Triangle'],
                        answer: 'Triangle',
                        type: "imageWithTextGroup"
                    },
                    {
                        image: "data:image/png;base64,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",
                        options: ['Pentagon', 'Octagon', 'Hexagon', 'Nanagon'],
                        answer: 'Hexagon',
                        type: "imageWithTextGroup"
                    },
                ],
                type: "group",
            }
        ];
        this.previousStatus = ConnectionStatusEnum.Online;
        this.ionicstorage.getData('userInfo').then((dataa) => {
            // this.username = dataa.username;
            // this.token = dataa.token;
            this.username = this.user_name;
            this.token = this.token_sample;
        }, (error) => console.log(error));
        this.ionicstorage
            .insertData_Replace('remainguser', { remainingdata: [] });
    }
    usernameChanged(data) {
        this.usernameSubject.next(data);
    }
    getdata() {
        return this.showtabs;
    }
    setdata(val) {
        this.showtabs = val;
    }
    getdataassessed_typeid() {
        return this.assessedtypeid;
    }
    setdataassessed_typeid(val) {
        this.assessedtypeid = val;
    }
    getdataassessed_typeformativeid() {
        return this.assessedtypeformativeid;
    }
    setdataassessed_typeformativeid(val) {
        this.assessedtypeformativeid = val;
    }
    getdataassessed_typeformativeAid() {
        return this.assessedtypeformativeAid;
    }
    setdataassessed_typeformativeAid(val) {
        this.assessedtypeformativeAid = val;
    }
    getacadamic_yearid() {
        return this.acadamic_year;
    }
    setacadamic_yearid(val) {
        this.acadamic_year = val;
    }
    studentAssessedChanged(data) {
        this.studentAssessedArray.next(data);
    }
    initializeNetworkEvents() {
        this.network.onDisconnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Online) {
                this.displayToast('network:offline', false);
            }
            this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Offline) {
                this.displayToast('network:online', false);
            }
            this.previousStatus = ConnectionStatusEnum.Online;
        });
    }
    ngOnInit() {
    }
    triggerresenduser() {
        this.ionicstorage.getData('remainguser').then((dataa) => {
            this.RemainingUser = dataa.remainingdata;
        });
    }
    checkconnection() {
        this.appIsOnline$.subscribe(online => {
            if (online) {
                this.NetworkConnectionCheck = 'ONLINE';
            }
            else {
                this.NetworkConnectionCheck = 'OFFLINE';
            }
        });
    }
    initConnectivityMonitoring() {
        if (!window || !navigator || !('onLine' in navigator))
            return;
        this.appIsOnline$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(window, 'online'), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(window, 'offline')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => navigator.onLine));
    }
    displayToast(message, error) {
        this.toastController.create({
            header: error ? 'Error!' : 'Success!',
            message: message,
            duration: 3000,
            position: 'top',
            cssClass: error ? 'toast-custom-class-error' : 'toast-custom-class-success',
        }).then((toast) => {
            toast.present();
        });
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.log(error);
            this.displayToast(error.error.msg, true);
            console.log(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(result);
        };
    }
    toggleSideBarHandler() {
        this.showSideBar = !this.showSideBar;
    }
    getQuestions() {
        return this.Questions;
    }
    getAssessedStudentListClass1() {
        return this.totalStudentsAssesedClass1;
    }
    markAssessed(id) {
        let userIndex = this.class1Students.findIndex(el => el.roll == id);
        if (userIndex !== -1) {
            let student = this.class1Students[userIndex];
            student.isAssessed = true;
            this.class1Students.splice(userIndex, 1, student);
        }
        this.studentAssessedChanged(this.class1Students.filter((el) => el.isAssessed != false));
    }
    markSkipped(id, reason) {
        let userIndex = this.class1Students.findIndex(el => el.roll == id);
        if (userIndex !== -1) {
            let student = this.class1Students[userIndex];
            if (reason !== 'Can be assessed later' && reason !== 'Absent today') {
                student.isAssessed = true;
            }
            student.isSkipped = true;
            student.skippedReason = reason;
            this.class1Students.splice(userIndex, 1, student);
        }
        this.studentAssessedChanged(this.class1Students.filter((el) => el.isAssessed != false));
    }
    getStudentList() {
        return this.class1Students;
    }
    getStudetnlistQuestions(value) {
        this.studentsListquestionList = value;
    }
    saveClassRoomDetails(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "saveClassRoom", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    saveBaselineAssessmentDetails(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        let str = JSON.stringify([data]);
        var obj = {
            data: str
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "submit_Assessment", obj, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    saveFromativeAssessmentDetails(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        let str = JSON.stringify([data]);
        var obj = {
            data: str
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "submit_Assessment_weekly", obj, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    saveFromativeAssessment_A_Details(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        let str = JSON.stringify([data]);
        var obj = {
            data: str
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "submit_formativeA_list/", obj, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    saveSummativeAssessmentDetails(data, token) {
        debugger;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        console.log(data.length, 'single record');
        if (data.length == undefined) {
            let str = JSON.stringify([data]);
            var obj = {
                data: str
            };
        }
        else {
            let str = JSON.stringify(data);
            var obj = {
                data: str
            };
        }
        console.log(headers, '');
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "EETAssessmentSubmit", obj, { headers: headers })
            .pipe(
        //catchError(this.handleError('Error occured'))
        );
    }
    pdfSummativeAssessmentDetails(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "summative_pdf_generate", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getClassRoomDetails(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "getClassRoomDetails", data).subscribe(data => {
            if (data['status'] == 200 && data['dataStatus'] == true) {
                this.classTypeArray = data['records'].classtype;
                this.mediumOfInstructionsArray = data['records'].medium_instruction;
                this.mediumOfInstructionsArray.filter(val => val.isSelected = false);
                if (data['records'].academic_year_details.length > 0) {
                    this.setacadamic_yearid(data['records'].academic_year_details[0].id);
                    let givensubject = data['records'].academic_year_details[0].subjects_apply;
                    let seperatesubjectarray = givensubject.split(',');
                    let newsubjectarray = seperatesubjectarray.map(val => {
                        let findinsideidsubject = data['records'].subject.find(s => s.id == val);
                        return findinsideidsubject;
                    });
                    newsubjectarray = newsubjectarray.filter(function (element) {
                        return element !== undefined;
                    });
                    this.subjects = newsubjectarray;
                    let givencalsses = data['records'].academic_year_details[0].classes_apply;
                    let seperatecalssarray = givencalsses.split(',');
                    let newclassarray = seperatecalssarray.map(val => {
                        let findinsideidclass = data['records'].students_count_list.find(s => s.class_id == val);
                        return findinsideidclass;
                    });
                    newclassarray = newclassarray.filter(function (element) {
                        return element !== undefined;
                    });
                    let test = newclassarray.filter((value, index) => {
                        let seperatesection = value.section.split(',');
                        let fintuneseperationsection = seperatesection.map((data, index) => {
                            let obj = { name: data, isSelected: false, id: index + 1 };
                            return obj;
                        });
                        value.section = fintuneseperationsection;
                        value.class = value.class_id;
                        value.class_id = 'Class ' + value.class_id;
                        value.classid = value.class_id.match(/\d+/)[0];
                        value.isSelected = false;
                        value.id = index + 1;
                        return value;
                    });
                    this.classes = test;
                }
                else {
                    this.subjects = [];
                    ['Tamil', 'English', 'Mathematics'].forEach(val => {
                        let getsubject = this.getselectivesubject(data['records'].subject, val);
                        this.subjects.push(getsubject);
                    });
                    let test = data['records'].students_count_list.filter((value, index) => {
                        if (value.class_id == "1" || value.class_id == "2" || value.class_id == "3") {
                            let seperatesection = value.section.split(',');
                            let fintuneseperationsection = seperatesection.map((data, index) => {
                                let obj = { name: data, isSelected: false, id: index + 1 };
                                return obj;
                            });
                            value.section = fintuneseperationsection;
                            value.class = value.class_id;
                            value.class_id = 'Class ' + value.class_id;
                            value.classid = value.class_id.match(/\d+/)[0];
                            value.isSelected = false;
                            value.id = index + 1;
                            return value;
                        }
                    });
                    this.classes = test;
                }
            }
            else {
                this.alertService.error(data['msg']);
            }
        });
    }
    getselectivesubject(array, value) {
        let findeddata = array.find(v => v.subject == value);
        return findeddata;
    }
    // getUploadedFiles(bucketName, fileName, expiry) {
    //       let params = { bcktId: bucketName, filename: fileName, expiry: expiry };
    //       return this.dataService.getDataWithParamsFiles(
    //         this.readingFileApi,
    //         params,
    //         true
    //       );
    //     }
    getClassRoomDetailsAll(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "getClassRoomDetails", data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getMenus(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_menuSettings", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getClassRoomCount(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "check_subjectCount", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getgroupQuestions(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_group_buttons", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getStudentsQuestions(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "getQuestions", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getStudentsList(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_project_studentlist", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getStudentreport(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_students_term_score", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getStudentsinglereport(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_student_report_card", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getassessedStudentsQuestions(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "check_submitAssessment", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getformationterms(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_Appsetting", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getformativeAterms(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_Appsetting_formative", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getformativeAllsubjects(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_allprojects", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    getformativeAlocatedproject(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "get_allocated_projects", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    Saveactivityproject(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "save_allocate_projects", data, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    ////////Classroom details//////////////////
    onMediumOfInstructionSelection(item) {
        let checkAlreadyExistingItemInArray = this.mediumOfInstructionsArray.findIndex((el) => el.medium == item);
        if (checkAlreadyExistingItemInArray !== -1) {
            let element = this.mediumOfInstructionsArray[checkAlreadyExistingItemInArray];
            element.isSelected = !element.isSelected;
            this.mediumOfInstructionsArray.splice(checkAlreadyExistingItemInArray, 1, element);
        }
    }
    selectedClassChoice(item, choice) {
        let findarray = this.classes.find(val => val.class_id == item);
        findarray.section.filter(s => {
            let gets = choice.some(v => v == s.name);
            s.isSelected = gets;
        });
    }
    onSelectedClassRadio(item) {
        this.classRadio = item;
    }
    onClassSelection(item) {
        let checkAlreadyExistingItemInArray = this.classes.findIndex((el) => el.class_id == item);
        if (checkAlreadyExistingItemInArray !== -1) {
            let element = this.classes[checkAlreadyExistingItemInArray];
            element.isSelected = !element.isSelected;
            this.classes.splice(checkAlreadyExistingItemInArray, 1, element);
        }
    }
    onClassSelectionformongrade(item) {
        let checkAlreadyExistingItemInArray = this.classes.findIndex((el) => el.class_id == item);
        if (checkAlreadyExistingItemInArray !== -1) {
            let element = this.classes[checkAlreadyExistingItemInArray];
            element.isSelected = !element.isSelected;
            this.classes.splice(checkAlreadyExistingItemInArray, 1, element);
        }
    }
    onSubjectSelection(item) {
        let checkAlreadyExistingItemInArray = this.subjects.findIndex((el) => el.subject == item);
        if (checkAlreadyExistingItemInArray !== -1) {
            let element = this.subjects[checkAlreadyExistingItemInArray];
            element.isSelected = !element.isSelected;
            this.subjects.splice(checkAlreadyExistingItemInArray, 1, element);
        }
    }
    onClassTypeSelection(item) {
        this.classTypeSelected = item;
    }
    ///////////////////////////////////////////
    toGetStudentList(data) {
        return this.dataService.post(this.emisApiUrl + '/EETStudentList', data).map(res => {
            return res;
        });
    }
    eet_error_log(data) {
        return this.dataService.post(this.emisApiUrl + '/eet_error_log', data).map(res => {
            return res;
        });
    }
    eet_school_observation() {
        // let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.dataService.post(this.emisApiUrl + '/get_eet_schools', true).map(res => {
            return res;
        });
    }
    getUdiseSchool(data) {
        // let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'EMIS_web@2019_api', 'Token': token });
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api_url + "InfoByUDISE?udise=" + data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Error occured')));
    }
    createObservation(data) {
        return this.dataService.post(this.emisApiUrl + '/eet_create_observation', data).map(res => {
            return res;
        });
    }
    eet_updateObservation(data) {
        return this.dataService.post(this.emisApiUrl + '/eet_update_observation', data).map(res => {
            return res;
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_1__.IonicStorageService },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__.Network },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts-es2015.js.map