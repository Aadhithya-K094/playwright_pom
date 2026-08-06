/**
 * Module Locators — URLs and selectors for each TN EMIS module.
 *
 * Used by module-specific spec files (Component, Approvals, Search, etc.)
 * Does NOT affect existing locatorsPage.js or any other files.
 *
 * Usage:
 *   import { getModuleLocators } from "../locators/moduleLocators.js";
 *   const modules = getModuleLocators();
 *   await page.goto(modules.component.student.health.url);
 */
import { TEST_ENV, UI_FRAMEWORK } from "../../config/index.js";

const BASE_URLS = {
    staging: {
        angular: "https://tnemis-staging.tnsed.com",
        react: "https://tnemis-react-staging.tnsed.com"
    },
    production: {
        angular: "https://tnemis.tnschools.gov.in",
        react: "https://tnemis-react-prod.tnschools.gov.in"
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// Module paths (same for Angular & React unless specified)
// ═══════════════════════════════════════════════════════════════════════════

const modulePaths = {

    // ─── Common Navigation Locators ────────────────────────────────────
    navigation: {
        angular: {
            topNavbar: '//nav[@class="navbar top-navbar"]',
            bottomNavbar: '//nav[@class="bottom-navbar"]',
            menuList: '//ul[@class="nav page-navigation"]',
            menuItem: '//ul[@class="nav page-navigation"]//li[@class="nav-item"]',
            menuLink: '//a[@class="nav-link"]',
            menuTitle: '//span[@class="menu-title"]',
            megaMenu: '//li[contains(@class,"mega-menu")]',
            submenu: '//div[contains(@class,"submenu")]',
            submenuItem: '//ul[@class="submenu-item"]//li[@class="nav-item"]//a',
            categoryHeading: '//li[@class="category-heading"]',
            logo: '//img[@id="govlogo"]',
            appTitle: '//a[@class="navbar-brand nobleui-logo"]',
            districtName: '//a[@class="navbar-brand nobleui-logo"]//span[@class="name"]',
            profileDropdown: '//a[@id="profileDropdown"]',
            profileImage: '//img[@alt="profile"]',
            userName: '//a[contains(@class,"dropdown-toggle tx-12 fw-bolder")]',
            userStatus: '//p[@class="tx-12 text-muted"]',
            notificationBell: '//i[contains(@class,"pi-bell")]',
            notificationBadge: '//span[contains(@class,"p-badge")]',
            resetPassword: '//span[text()="Reset Password"]',
            switchUser: '//span[text()="Switch User"]',
            logoutButton: '//i[contains(@class,"icon-log-out")]',
            logoutSpan: '//span[text()="Log Out"]'
        },
        react: {
            topNavbar: '//header[contains(@class,"app-header")]',
            menuList: '//div[contains(@class,"emis-navbar")]',
            menuItem: '//li[contains(@class,"nav-item")]',
            menuLink: '//span[contains(@class,"nav-link emis-link")]',
            menuNav: '//ul[contains(@class,"emis-nav")]',
            activeMenu: '//li[contains(@class,"active-menu")]',
            chevronIcon: '//svg[contains(@class,"chevron-icon")]',
            logo: '//img[@alt="Logo"]',
            appTitle: '//h2[contains(@class,"app-title")]',
            districtName: '//span[contains(@class,"location-name")]',
            profileDropdown: '//div[contains(@class,"user-trigger")]',
            userName: '//span[@class="user"]',
            userStatus: '//span[@class="user-status"]',
            userChevron: '//i[contains(@class,"user-chevron")]',
            notificationBell: '//i[contains(@class,"pi-bell")]',
            notificationBadge: '//span[contains(@class,"bell-badge")]',
            logoutButton: '//button[contains(text(),"Log Out")]',
            headerRight: '//div[contains(@class,"header-right")]',
            logoArea: '//div[contains(@class,"logo-area")]'
        }
    },

    home: {
        path: "/dashboard",
        selectors: {
            angular: {
                liveDataRadio: '//input[@id="btnradio1" and @name="btnradio"]',
                liveDataLabel: '//label[@for="btnradio1"]',
                enrolmentRadio: '//input[@id="btnradio2" and @name="btnradio"]',
                enrolmentLabel: '//label[@for="btnradio2"]',
                totalStudents: '//h6[contains(text(),"TOTAL STUDENTS")]',
                totalStudentsCount: '//h6[contains(text(),"TOTAL STUDENTS")]/following-sibling::h4',
                totalSchools: '//h6[contains(text(),"TOTAL SCHOOLS")]',
                totalSchoolsCount: '//h6[contains(text(),"TOTAL SCHOOLS")]/following-sibling::h4',
                totalStaffs: '//h6[contains(text(),"TOTAL STAFFS")]',
                totalStaffsCount: '//h6[contains(text(),"TOTAL STAFFS")]/following-sibling::h4',
                boysCount: '//p[text()="Boys"]/following-sibling::h5',
                girlsCount: '//p[text()="Girls"]/following-sibling::h5',
                govtCount: '//p[text()="Government"]/following-sibling::h5',
                othersCount: '//p[text()="Others"]/following-sibling::h5',
                teachingCount: '//p[text()="Teaching"]/following-sibling::h5',
                nonTeachingCount: '//p[text()="Non Teaching"]/following-sibling::h5',
                lastUpdatedDate: '//div[contains(text(),"Last Updated Date")]',
                attendanceButton: '//button[text()="Attendance"]',
                markingStatusButton: '//button[text()="Marking Status"]',
                attendanceStatusButton: '//button[text()="Attendance Status"]',
                attendanceTable: '//table[contains(@class,"cursor")]',
                schoolStudentsRow: '//td[text()="Schools (Students)"]',
                schoolStaffRow: '//td[text()="School (Staff)"]',
                itkCentreRow: '//td[text()="ITK Centre"]'
            },
            react: {
                liveDataButton: '//button[contains(@class,"btn-primary") and .//b[text()="Live Data"]]',
                enrollmentButton: '//button[contains(@class,"btn-outline-primary") and .//b[text()="Enrollment"]]',
                totalStudents: '//span[contains(@class,"text-uppercase") and contains(text(),"Total Students")]',
                totalStudentsCount: '//span[contains(text(),"Total Students")]/ancestor::div[contains(@class,"card-body")]//h4',
                totalSchools: '//span[contains(@class,"text-uppercase") and contains(text(),"Total Schools")]',
                totalSchoolsCount: '//span[contains(text(),"Total Schools")]/ancestor::div[contains(@class,"card-body")]//h4',
                totalStaff: '//span[contains(@class,"text-uppercase") and contains(text(),"Total Staff")]',
                totalStaffCount: '//span[contains(text(),"Total Staff")]/ancestor::div[contains(@class,"card-body")]//h4',
                totalStudentsImg: '//img[@alt="Total Students"]',
                totalSchoolsImg: '//img[@alt="Total Schools"]',
                totalStaffImg: '//img[@alt="Total Staff"]',
                boysCount: '//span[text()="Boys"]/following-sibling::span',
                girlsCount: '//span[text()="Girls"]/following-sibling::span',
                govtCount: '//span[text()="Government"]/following-sibling::span',
                othersCount: '//span[text()="Others"]/following-sibling::span',
                teachingCount: '//span[text()="Teaching"]/following-sibling::span',
                nonTeachingCount: '//span[text()="Non Teaching"]/following-sibling::span',
                lastUpdatedDate: '//strong[text()="Last Updated Date:"]',
                attendanceButton: '//button[contains(@class,"headingButton") and contains(text(),"Attendance")]',
                markingStatusButton: '//button[contains(@class,"btn-primary") and contains(text(),"Marking Status")]',
                attendanceStatusButton: '//button[contains(@class,"btn-outline-primary") and contains(text(),"Attendance Status")]',
                attendanceTable: '//table[contains(@class,"table-hover")]',
                schoolStudentsRow: '//td[contains(text(),"Schools (Students)")]',
                schoolStaffRow: '//td[contains(text(),"School (Staff)")]',
                itkCentreRow: '//td[contains(text(),"ITK Centre")]',
                progressBar: '//div[contains(@class,"progress-bar")]',
                dashboardContainer: '//div[contains(@class,"dashboard-container")]',
                statsCard: '//div[contains(@class,"card h-100 shadow-sm")]',
                mainContent: '//main[contains(@class,"app-main")]'
            }
        }
    },

    ifhrms: {
        path: "/approval/ifhrms",
        menuName: "IFHRMS / Service Register",
        selectors: {
            angular: {
                menuLink: '//a[@class="nav-link" and @href="/approval/ifhrms"]',
                schoolsListTab: '//input[@id="btnradio1"]',
                schoolsListLabel: '//label[@for="btnradio1"]',
                officersListTab: '//input[@id="btnradio2"]',
                officersListLabel: '//label[@for="btnradio2"]',
                searchInput: '//input[@placeholder="Search keyword"]',
                table: '//table[@role="table"]',
                tableHeader: '//thead[@class="p-datatable-thead"]',
                tableBody: '//tbody[contains(@class,"p-datatable-tbody")]',
                colUdise: '//th[contains(@class,"p-sortable-column") and .//text()="UDISE"]',
                colSchoolName: '//th[contains(@class,"p-sortable-column") and .//text()="School Name"]',
                colSchoolCategory: '//th[contains(@class,"p-sortable-column") and .//text()="School Category"]',
                udiseFilter: '(//input[@placeholder=" Search"])[1]',
                schoolNameFilter: '(//input[@placeholder=" Search"])[2]',
                categoryFilter: '(//input[@placeholder=" Search"])[3]',
                paginatorFirst: '//button[contains(@class,"p-paginator-first")]',
                paginatorPrev: '//button[contains(@class,"p-paginator-prev")]',
                paginatorNext: '//button[contains(@class,"p-paginator-next")]',
                paginatorLast: '//button[contains(@class,"p-paginator-last")]',
                paginatorPages: '//button[contains(@class,"p-paginator-page")]',
                breadcrumb: '//i[@class="pi pi-home"]',
                schoolLink: '//a[@class="" and ancestor::td[contains(@class,"bold")]]'
            },
            react: {
                menuLink: '//div[contains(@class,"menu-item") and contains(text(),"IFHRMS")]',
                schoolsListTab: '//button[contains(text(),"Schools List")]',
                officersListTab: '//button[contains(text(),"Officers List")]',
                searchInput: '//input[@placeholder="Search keyword"]',
                table: '//table',
                tableHeader: '//thead',
                tableBody: '//tbody',
                paginatorNext: '//button[contains(text(),"Next")]',
                paginatorPrev: '//button[contains(text(),"Previous")]'
            }
        }
    },

    mailRequest: {
        path: "/mail-request",
        menuName: "Mail Request",
        selectors: {}
    },

    staffList: {
        path: "/approval/staff_details",
        menuName: "Staff List",
        selectors: {}
    },

    staffServiceGrievance: {
        path: "/approval/staff-grievance",
        menuName: "Staff Service Grievance",
        selectors: {}
    },

    emisTickets: {
        path: "/approval/tickets",
        menuName: "EMIS Tickets",
        selectors: {}
    },

    component: {
        menuName: "Component",
        student: {
            health: { path: "/component/new_health_dashboard", menuName: "Health" },
            cwd: { path: "/dashboard/cwsnDashboard", menuName: "CWD" }
        },
        staff: {
            teacherTraining: { path: "/component/crc-training", menuName: "Teacher Training" },
            grievance: { path: "/component/staff-griev-dashboard", menuName: "Grievance" }
        },
        school: {
            library: { path: "/component/library", menuName: "Library" },
            sids: { path: "/component/newbuilding1", menuName: "SIDS" },
            sports: { path: "/component/sports", menuName: "Sports" },
            regulatoryCompliance: { path: "/component/rc_dashboard", menuName: "Regulatory Compliance" },
            stem: { path: "/component/advanced-stem", menuName: "STEM" },
            smc: { path: "/component/smc", menuName: "SMC" },
            schemes: { path: "/component/schemes", menuName: "Schemes" },
            warehouseTracking: { path: "/component/barcode-scanner", menuName: "Warehouse Tracking" },
            cmBfsInspection: { path: "/dynamic/dynamic-tablelist/193", menuName: "CM BFS Inspection Form" }
        },
        others: {
            g2c: { path: "/component/G2C", menuName: "G2C" },
            hiTechLab: { path: "/component/hi-tech-assessment-dashboard", menuName: "Hi Tech Lab Assessments" },
            itk: { path: "/component/itk", menuName: "ITK" },
            thiranDashboard: { path: "/component/thiran-dashboard", menuName: "Thiran Dashboard" }
        }
    },

    approvals: {
        menuName: "Approvals",
        staff: {
            deputation: { path: "/approval/deputation-transfer", menuName: "Deputation and Admin Transfer" },
            postSanctioned: { path: "/approval/post_santioined_schools", menuName: "Post Sanctioned to Schools" },
            inCharge: { path: "/approval/incharge", menuName: "In-charge" },
            grievanceVerification: { path: "/approval/staff-grivience-verification", menuName: "Staff Grievance Verification" }
        },
        student: {
            studentUpdation: { path: "/approval/student-updation", menuName: "Student Updation Details" },
            dbtBank: { path: "/approval/dbt-bank-verification", menuName: "DBT Bank Verification" }
        },
        staffTransfers: {
            leaveAccount: { path: "/approval/leave-balance", menuName: "Leave Account Approval" },
            seniorityChallenge: { path: "/approval/seniority-challenge", menuName: "Seniority Challenge" }
        },
        school: {
            monthlyReports: { path: "/approval/sclmonthlyreports", menuName: "Monthly Reports" },
            indentEntry: { path: "/approval/indent-entry", menuName: "Indent Entry" },
            internetConnectivity: { path: "/approval/otc_receipt_approval", menuName: "Internet Connectivity" },
            eventRegistration: { path: "/approval/event-registration-approval", menuName: "Event Registration" },
            tourRegistration: { path: "/approval/tours-registration-approval", menuName: "Tour Registration" },
            campRegistration: { path: "/approval/camps-registration-approval", menuName: "Camp Registration" },
            reAdmission: { path: "/approval/re-admission", menuName: "Re-Admission" },
            breadWinning: { path: "/approval/bread-winning", menuName: "Bread Winning" },
            houseSystem: { path: "/approval/house-system", menuName: "House System" },
            indentSupplyEntry: { path: "/approval/indent-supply-entry", menuName: "Indent Supply Entry" }
        }
    },

    search: {
        menuName: "Search",
        student: { path: "/search/student", menuName: "Student" },
        staff: { path: "/search/staff", menuName: "Staff" },
        school: { path: "/search/school", menuName: "School" }
    },

    competition: {
        menuName: "Competition",
        path: "/competition",
        selectors: {}
    },

    reports: {
        menuName: "Reports",
        path: "/component/reports",
        selectors: {
            searchBox: "textbox[placeholder='Search reports...']",
            reviewReports: "text=Review Reports",
            otherReports: "text=Other Reports"
        }
    },

    slasAssessment: {
        menuName: "SLAS Assessment",
        path: "/slas-assessment",
        selectors: {}
    },

    inbox: {
        menuName: "Inbox",
        path: "/inbox",
        selectors: {}
    },

    itkCentreSupport: {
        menuName: "ITK Centre Support",
        path: "/itk-support",
        selectors: {}
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// RESOLVER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get base URL for current environment + framework.
 */
export function getBaseURL() {
    const env = TEST_ENV || "staging";
    const framework = UI_FRAMEWORK || "angular";
    return BASE_URLS[env][framework];
}

/**
 * Get all module paths and locators.
 */
export function getModuleLocators() {
    return modulePaths;
}

/**
 * Get full URL for a module path.
 */
export function getModuleURL(modulePath) {
    return getBaseURL() + modulePath;
}

export { modulePaths, BASE_URLS };
export default getModuleLocators;
