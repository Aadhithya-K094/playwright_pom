(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvntabs_tnvntabs_module_ts"], {
    /***/
    82120:
    /*!***********************************************************!*\
      !*** ./src/app/pages/tnvntabs/tnvntabs-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TnvntabsPageRoutingModule": function TnvntabsPageRoutingModule() {
          return (
            /* binding */
            _TnvntabsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tnvntabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tnvntabs.page */
      4137);

      var routes = [{
        path: '',
        component: _tnvntabs_page__WEBPACK_IMPORTED_MODULE_0__.TnvntabsPage,
        children: [{
          path: 'page-route/dashboardc',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_dashboardc_dashboardc_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/dashboardc/dashboardc.module */
            19649)).then(function (m) {
              return m.DashboardcPageModule;
            });
          }
        }, {
          path: 'page-route/questions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_observation-data_questions_questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/questions/questions.module */
            25292)).then(function (m) {
              return m.QuestionsPageModule;
            });
          }
        }, {
          path: 'page-route/classroom-data',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_classroom-data_classroom-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/classroom-data/classroom-data.module */
            60128)).then(function (m) {
              return m.ClassroomDataPageModule;
            });
          }
        }, {
          path: 'page-route/classroom-type',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_classroom-type_classroom-type_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/classroom-type/classroom-type.module */
            33230)).then(function (m) {
              return m.ClassroomTypePageModule;
            });
          }
        }, {
          path: 'page-route/dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_tnvn_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/dashboard/dashboard.module */
            88701)).then(function (m) {
              return m.DashboardPageModule;
            });
          }
        }, {
          path: 'page-route/emiverify/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_dom-to-image_src_dom-to-image_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_emiverify_emiverify_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/emiverify/emiverify.module */
            92397)).then(function (m) {
              return m.EmiverifyModule;
            });
          }
        }, {
          path: 'page-route/emidata/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_emidata_emidata_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/emidata/emidata.module */
            31326)).then(function (m) {
              return m.EmidataModule;
            });
          }
        }, {
          path: 'page-route/emiselection/:i',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_emiselection_emiselection_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/emiselection/emiselection.module */
            24680)).then(function (m) {
              return m.EmiSelectionModule;
            });
          }
        }, {
          path: 'page-route/classroom',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_tnvn_classroom_classroom_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/classroom/classroom.module */
            23631)).then(function (m) {
              return m.ClassroomModule;
            });
          }
        }, {
          path: 'page-route/methodology',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("src_app_pages_tnvn_methodology_methodology_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/methodology/methodology.module */
            55873)).then(function (m) {
              return m.MethodologyModule;
            });
          }
        }, {
          path: 'page-route/flhmethodology',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("src_app_pages_tnvn_flhmethodology_flhmethodology_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/flhmethodology/flhmethodology.module */
            3015)).then(function (m) {
              return m.FlhMethodologyModule;
            });
          }
        }, {
          path: 'page-route/student-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_observation-data_student-list_student-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/student-list/student-list.module */
            6256)).then(function (m) {
              return m.StudentListPageModule;
            });
          }
        }, {
          path: 'page-route/student-assesment',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_tnvn_observation-data_student-assesment_student-assesment_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/student-assesment/student-assesment.module */
            19496)).then(function (m) {
              return m.StudentAssesmentPageModule;
            });
          }
        }, {
          path: 'page-route/class-sec-info',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_tnvn_class-sec-info_class-sec-info_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/class-sec-info/class-sec-info.module */
            18600)).then(function (m) {
              return m.ClassSecInfoPageModule;
            });
          }
        }, {
          path: 'page-route/pedagogy-info',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_observation-data_pedagogy-info_pedagogy-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/pedagogy-info/pedagogy-info.module */
            94714)).then(function (m) {
              return m.PedagogyInfoPageModule;
            });
          }
        }, {
          path: 'page-route/attendance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("src_app_pages_tnvn_attendance_attendance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/attendance/attendance.module */
            14145)).then(function (m) {
              return m.AttendancePageModule;
            });
          }
        }, {
          path: 'page-route/learning-outcome',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_observation-data_learning-outcome_learning-outcome_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/learning-outcome/learning-outcome.module */
            96348)).then(function (m) {
              return m.LearningOutcomePageModule;
            });
          }
        }, {
          path: 'page-route/tntp-content',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_observation-data_tntp-content_tntp-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/tntp-content/tntp-content.module */
            37386)).then(function (m) {
              return m.TntpContentPageModule;
            });
          }
        }, {
          path: 'page-route/record-verification',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_observation-data_record-verification_record-verification_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/record-verification/record-verification.module */
            20496)).then(function (m) {
              return m.RecordVerificationPageModule;
            });
          }
        }, {
          path: 'page-route/observation',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_dom-to-image_src_dom-to-image_js"), __webpack_require__.e("src_app_pages_tnvn_observation_observation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation/observation.module */
            54181)).then(function (m) {
              return m.ObservationModule;
            });
          }
        }, // {
        //   path: 'page-route/observation-another-class',
        //   loadChildren: () => import('../tnvn/observation/observation-anotherclass/observation-anotherclass.module').then( m => m.ObservationAnotherModule)
        // },
        {
          path: 'page-route/observation-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_tnvn_observation-list_observation-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-list/observation-list.module */
            49642)).then(function (m) {
              return m.ObservationListPageModule;
            });
          }
        }, {
          path: 'page-route/question-template-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_observation-data_question-template-list_question-template-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/observation-data/question-template-list/question-template-list.module */
            51828)).then(function (m) {
              return m.QuestionTemplateListPageModule;
            });
          }
        }, {
          path: 'page-route/assessment',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_assessment_assessment_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/assessment/assessment.module */
            3425)).then(function (m) {
              return m.AssessmentPageModule;
            });
          }
        }, {
          path: 'page-route/notebook',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_tnvn_assessment_notebook-verification_notebook_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/assessment/notebook-verification/notebook.module */
            8471)).then(function (m) {
              return m.NotebokkVerificationModule;
            });
          }
        }, {
          path: 'page-route/omr-random-student',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_tnvn_assessment_omr-random-student_omr-random-student_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/assessment/omr-random-student/omr-random-student.module */
            53247)).then(function (m) {
              return m.OmrRandomStudentModule;
            });
          }
        }, // {
        //   path: 'page-route/google-read-assessment',
        //   loadChildren: () => import('../tnvn/assessment/google-read-assessment/google-read-assessment.module').then( m => m.GoogleReadAssessmentModule)
        // },
        {
          path: 'page-route/pre-observation-question',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("src_app_pages_tnvn_pre-observation-question_pre-observation-question_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/pre-observation-question/pre-observation-question.module */
            57026)).then(function (m) {
              return m.PreObservationQuestionModule;
            });
          }
        }, {
          path: 'page-route/hodinspection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("src_app_pages_tnvn_assessment_hod-inspection_hodinpection_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/assessment/hod-inspection/hodinpection.module */
            5184)).then(function (m) {
              return m.HodInspectionModule;
            });
          }
        }, {
          path: 'page-route/teacher-selection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_teacher-selection_teacher-selection_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/teacher-selection/teacher-selection.module */
            12872)).then(function (m) {
              return m.TeacherSelectionPageModule;
            });
          }
        }, {
          path: 'page-route/omrscanner',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("src_app_pages_tnvn_assessment_omr-student_omr-student_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/assessment/omr-student/omr-student.module */
            44217)).then(function (m) {
              return m.OmrStudentModule;
            });
          }
        }, {
          path: 'page-route/omr-scanner',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_dom-to-image_src_dom-to-image_js"), __webpack_require__.e("src_app_pages_tnvn_assessment_omr-scanner_omr-scanner_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/assessment/omr-scanner/omr-scanner.module */
            80011)).then(function (m) {
              return m.OmrScannerModule;
            });
          }
        }, {
          path: 'page-route/index',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tnvn_index_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/index/index.module */
            10744)).then(function (m) {
              return m.IndexPageModule;
            });
          }
        }, {
          path: 'page-route/kgbv-nsbav-inspection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js-src_app_services_tnvn_services_loading_service_ts"), __webpack_require__.e("src_app_pages_tnvn_kgbv-nsbav_kgbv-nsbav_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvn/kgbv-nsbav/kgbv-nsbav.module */
            25170)).then(function (m) {
              return m.KgbvNsbavPageModule;
            });
          }
        }]
      }];

      var _TnvntabsPageRoutingModule = /*#__PURE__*/_createClass(function TnvntabsPageRoutingModule() {
        _classCallCheck(this, TnvntabsPageRoutingModule);
      });

      _TnvntabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TnvntabsPageRoutingModule);
      /***/
    },

    /***/
    20756:
    /*!***************************************************!*\
      !*** ./src/app/pages/tnvntabs/tnvntabs.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TnvntabsPageModule": function TnvntabsPageModule() {
          return (
            /* binding */
            _TnvntabsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _tnvntabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tnvntabs-routing.module */
      82120);
      /* harmony import */


      var _tnvntabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tnvntabs.page */
      4137);

      var _TnvntabsPageModule = /*#__PURE__*/_createClass(function TnvntabsPageModule() {
        _classCallCheck(this, TnvntabsPageModule);
      });

      _TnvntabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tnvntabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TnvntabsPageRoutingModule],
        declarations: [_tnvntabs_page__WEBPACK_IMPORTED_MODULE_1__.TnvntabsPage]
      })], _TnvntabsPageModule);
      /***/
    },

    /***/
    4137:
    /*!*************************************************!*\
      !*** ./src/app/pages/tnvntabs/tnvntabs.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TnvntabsPage": function TnvntabsPage() {
          return (
            /* binding */
            _TnvntabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_tnvntabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tnvntabs.page.html */
      20689);
      /* harmony import */


      var _tnvntabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tnvntabs.page.scss */
      48207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      38605);

      var _TnvntabsPage = /*#__PURE__*/function () {
        function TnvntabsPage(actionSheetController, userSessionService, router, activeRoute, ionicStorage) {
          _classCallCheck(this, TnvntabsPage);

          this.actionSheetController = actionSheetController;
          this.userSessionService = userSessionService;
          this.router = router;
          this.activeRoute = activeRoute;
          this.ionicStorage = ionicStorage;
          this.fabMenuIsOpened = false;
          this.fabButtonOpened = false;
        }

        return _createClass(TnvntabsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "fabParent",
          value: function fabParent() {
            this.fabMenuIsOpened = !this.fabMenuIsOpened;
            this.fabList.activated = this.fabMenuIsOpened;
          }
        }, {
          key: "appLogout",
          value: function appLogout() {
            var _this = this;

            var userName = window.localStorage.getItem('username');
            var password = window.localStorage.getItem('password');
            window.localStorage.clear();
            this.userSessionService.destroy();
            window.localStorage.setItem('username', userName);
            window.localStorage.setItem('password', password);
            this.router.navigate(['/login']);
            this.ionicStorage.forEach(function (value, key, index) {
              if (key != "studentListBy_school_id" && key != "teacherListBy_school_id" && key != "currentSchool_id" && key != "learning_outcome" && key != 'store_observation' && key != 'learningOutcomeQues' && key != 'schoolListBy_District_id' && key != 'observation_list') {
                _this.ionicStorage.remove(key);
              }
            });
          }
        }, {
          key: "getOverlayStyle",
          value: function getOverlayStyle() {
            var myStyles = {
              width: '100%',
              height: '100%',
              'background-color': 'rgba(0, 0, 0, 0.7)',
              bottom: '0px !important',
              right: '0px !important'
            };
            var styleClosed = {
              bottom: '0px !important',
              right: '0px !important'
            };
            return this.fabMenuIsOpened ? myStyles : styleClosed;
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['tabs/home']);
          }
        }, {
          key: "goToNotifications",
          value: function goToNotifications() {
            this.router.navigate(['tab/coomingsoon']);
          }
        }, {
          key: "goToSearch",
          value: function goToSearch() {
            this.router.navigate(['tab/school']);
          }
        }, {
          key: "goToChangePassword",
          value: function goToChangePassword() {
            this.router.navigate(['changepassword']);
          }
        }, {
          key: "goToSettings",
          value: function goToSettings() {
            this.router.navigate(['settings']);
          }
        }, {
          key: "goToHelp",
          value: function goToHelp() {}
        }]);
      }();

      _TnvntabsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
        }];
      };

      _TnvntabsPage.propDecorators = {
        fab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: ['fab']
        }],
        fabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: ['fabList']
        }]
      };
      _TnvntabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tnvntabs',
        template: _raw_loader_tnvntabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tnvntabs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TnvntabsPage);
      /***/
    },

    /***/
    48207:
    /*!***************************************************!*\
      !*** ./src/app/pages/tnvntabs/tnvntabs.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-bar {\n  border-top: 1px solid rgba(0, 0, 0, 0.13);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.13) !important;\n}\n\n.fab-bt {\n  bottom: 0 !important;\n  right: 0;\n}\n\n.lbl {\n  text-align: right;\n  margin: auto;\n}\n\n.icon {\n  zoom: 1;\n}\n\n.text {\n  margin-bottom: 0px;\n}\n\nion-icon {\n  zoom: 1.5;\n}\n\nion-content {\n  --background-repeat: no-repeat;\n  --background-size: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n}\n\n.fab-row {\n  width: 100%;\n  margin-left: auto;\n  padding-right: 2%;\n}\n\n.fab-label {\n  text-align: right;\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  color: white;\n}\n\nbutton[ion-fab] {\n  overflow: visible;\n  position: relative;\n}\n\nbutton[ion-fab] ion-label {\n  position: absolute;\n  top: -8px;\n  left: 45px;\n  color: white;\n  background-color: rgba(70, 70, 70, 0.7);\n  line-height: 24px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.fab {\n  contain: layout;\n}\n\nion-fab-button {\n  --background: darkslategray;\n  margin-left: auto;\n}\n\nion-fab-button ion-icon {\n  color: white;\n}\n\n.fab {\n  contain: layout;\n}\n\nbutton[ion-fab] {\n  overflow: visible;\n  position: relative;\n  text-align: center !important;\n  float: center !important;\n}\n\nbutton[ion-fab] ion-label {\n  position: absolute;\n  top: -8px !important;\n  right: 40px;\n  color: #ffffff;\n  background-color: transparent;\n  line-height: 24px;\n  border-radius: 4px;\n}\n\nion-fab[bottom] {\n  bottom: 0px !important;\n  padding-bottom: 1% !important;\n}\n\nion-fab[right] {\n  right: 0px !important;\n  padding-right: 15px !important;\n}\n\n.fab-open {\n  background: blue !important;\n  opacity: 0.8;\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  bottom: 0px;\n  right: 0px;\n}\n\n.fab-close {\n  background: transparent;\n  opacity: 1;\n  width: 100%;\n  position: absolute;\n  height: unset;\n  bottom: 0px;\n  right: 0px;\n}\n\n#ListBackdrop {\n  background-color: white !important;\n  position: fixed !important;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  opacity: 0.8;\n}\n\n.logout_btn {\n  width: 56px;\n  height: 56px;\n  line-height: 72px;\n  text-align: center;\n  /* background: red; */\n  background: var(--ion-color-primary);\n  margin-left: auto;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 0px 3px 9px #333333;\n}\n\nion-tab-button {\n  --background: #fff;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRudm50YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBR0Esb0RBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxPQUFBO0FBRUo7O0FBQ0U7RUFFQSxrQkFBQTtBQUNGOztBQUVFO0VBQ0UsU0FBQTtBQUNKOztBQUNFO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSx1QkFBQTtLQUFBLG9CQUFBO0FBRU47O0FBQ0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVOOztBQUNJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRU47O0FBQ0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRU47O0FBQU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUlJO0VBQ0UsZUFBQTtBQUROOztBQUdJO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUFOOztBQUNNO0VBQ0UsWUFBQTtBQUNSOztBQUdJO0VBQ0UsZUFBQTtBQUFOOztBQUlJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7QUFETjs7QUFHTTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFHQSxrQkFBQTtBQUhSOztBQU9JO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQUpOOztBQU9JO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtBQUpOOztBQU9JO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSk47O0FBT0k7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFKTjs7QUFRSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTE47O0FBU0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSwrQkFBQTtBQVBOOztBQWVJO0VBRUMsa0JBQUE7RUFDQSwrQkFBQTtBQWJMIiwiZmlsZSI6InRudm50YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYmFyIHtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAxcHggMXB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEzKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZmFiLWJ0IHtcclxuICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmwge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIHpvb206IDEuMDtcclxuICAgIFxyXG4gIH1cclxuICAudGV4dCB7XHJcbiAvLyBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pY29uIHtcclxuICAgIHpvb206MS41O1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgLS1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZhYi1yb3cge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmFiLWxhYmVsIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvbltpb24tZmFiXSB7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzAsIDcwLCA3MCwgMC43KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIFxyXG4gICAgLmZhYiB7XHJcbiAgICAgIGNvbnRhaW46IGxheW91dDtcclxuICAgIH1cclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBkYXJrc2xhdGVncmF5O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmFiIHtcclxuICAgICAgY29udGFpbjogbGF5b3V0O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9uW2lvbi1mYWJdIHtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsb2F0OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC04cHggIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAvLyBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1mYWJbYm90dG9tXSB7XHJcbiAgICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICBcclxuICAgIGlvbi1mYWJbcmlnaHRdIHtcclxuICAgICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mYWItb3BlbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmFiLWNsb3NlIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICAjTGlzdEJhY2tkcm9wIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIC5sb2dvdXRfYnRue1xyXG4gICAgICB3aWR0aDogNTZweDtcclxuICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNzJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIC8vIG9wYWNpdHk6IDAuNTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA5cHggIzMzMzMzMztcclxuICAgIH1cclxuICBcclxuICAgIC8vIGlvbi10YWItYmFyIHtcclxuICAgIC8vICAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gICBtYXJnaW46IDlweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgIC8vLS1iYWNrZ3JvdW5kOiAjMjM5NTY5ICFpbXBvcnRhbnQ7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH0iXX0= */";
      /***/
    },

    /***/
    20689:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvntabs/tnvntabs.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar justify-content-center slot=\"bottom\">\r\n      <ion-tab-button justify-content-center (click)=\"goToHome()\">\r\n        <ion-icon name=\"home\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\" (click)=\"goToHome()\">Home</ion-label>\r\n        <ion-router-outlet name=\"home\" (click)=\"goToHome()\"></ion-router-outlet>\r\n      </ion-tab-button>\r\n      <!-- <ion-tab-button justify-content-center>\r\n        <ion-icon name=\"notifications\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\" (click)=\"goToNotifications()\">Inbox</ion-label>\r\n        <ion-router-outlet name=\"notification\" (click)=\"goToNotifications()\"></ion-router-outlet>\r\n      </ion-tab-button> -->\r\n      <ion-tab-button justify-content-center (click)=\"fabParent()\">\r\n        <ion-icon name=\"ellipsis-vertical-outline\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\">More</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n  <ion-fab class=\"fab-bg-color fab-bt\" #fab [ngStyle]=\"getOverlayStyle()\" (click)=\"fabParent()\" vertical=\"bottom\"\r\n    horizontal=\"end\">\r\n    <ion-fab-list #fabList style=\"width: 100%;\" side=\"top\">\r\n\r\n      <ion-row class=\"fab-row\">\r\n        <ion-col class=\"flex-container lbl\">\r\n          <ion-label class=\"fab-label\">Logout</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <div class=\"logout_btn\">\r\n            <ion-icon name=\"log-out\" (click)=\"appLogout()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- <ion-row class=\"fab-row\">\r\n        <ion-col class=\"flex-container lbl\">\r\n          <ion-label class=\"fab-label\">Change Password</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <div class=\"logout_btn\">\r\n            <ion-icon name=\"key\" (click)=\"goToChangePassword()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"fab-row\">\r\n        <ion-col class=\"flex-container lbl\">\r\n          <ion-label class=\"fab-label\">Settings</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <div class=\"logout_btn\">\r\n            <ion-icon name=\"key\" (click)=\"goToSettings()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvntabs_tnvntabs_module_ts-es5.js.map