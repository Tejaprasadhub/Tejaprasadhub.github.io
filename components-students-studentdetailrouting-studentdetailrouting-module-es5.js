function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-students-studentdetailrouting-studentdetailrouting-module"], {
  /***/
  "./src/app/cts/home/components/students/studentdetailrouting/studentdetailrouting.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/cts/home/components/students/studentdetailrouting/studentdetailrouting.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: StudentdetailroutingModule */

  /***/
  function srcAppCtsHomeComponentsStudentsStudentdetailroutingStudentdetailroutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentdetailroutingModule", function () {
      return StudentdetailroutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _studentprofile_studentprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../studentprofile/studentprofile.component */
    "./src/app/cts/home/components/students/studentprofile/studentprofile.component.ts");
    /* harmony import */


    var _studentedit_studentedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../studentedit/studentedit.component */
    "./src/app/cts/home/components/students/studentedit/studentedit.component.ts");
    /* harmony import */


    var _studentreports_studentreports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../studentreports/studentreports.component */
    "./src/app/cts/home/components/students/studentreports/studentreports.component.ts");
    /* harmony import */


    var _studentmarks_studentmarks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../studentmarks/studentmarks.component */
    "./src/app/cts/home/components/students/studentmarks/studentmarks.component.ts");
    /* harmony import */


    var _studentmore_studentmore_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../studentmore/studentmore.component */
    "./src/app/cts/home/components/students/studentmore/studentmore.component.ts");
    /* harmony import */


    var src_app_core_security_authentication_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/core/security/authentication-guard.service */
    "./src/app/core/security/authentication-guard.service.ts");
    /* harmony import */


    var src_app_core_security_authorization_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/core/security/authorization-guard */
    "./src/app/core/security/authorization-guard.ts");

    var studentDetailsRoutes = [{
      path: 'student-profile',
      component: _studentprofile_studentprofile_component__WEBPACK_IMPORTED_MODULE_3__["StudentprofileComponent"],
      canActivate: [src_app_core_security_authentication_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuardService"], src_app_core_security_authorization_guard__WEBPACK_IMPORTED_MODULE_9__["AuthorizationGuard"]],
      outlet: 'detail'
    }, {
      path: 'student-edit',
      component: _studentedit_studentedit_component__WEBPACK_IMPORTED_MODULE_4__["StudenteditComponent"],
      canActivate: [src_app_core_security_authentication_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuardService"], src_app_core_security_authorization_guard__WEBPACK_IMPORTED_MODULE_9__["AuthorizationGuard"]],
      outlet: 'detail'
    }, {
      path: 'student-reports',
      component: _studentreports_studentreports_component__WEBPACK_IMPORTED_MODULE_5__["StudentreportsComponent"],
      canActivate: [src_app_core_security_authentication_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuardService"], src_app_core_security_authorization_guard__WEBPACK_IMPORTED_MODULE_9__["AuthorizationGuard"]],
      outlet: 'detail'
    }, {
      path: 'student-marks',
      component: _studentmarks_studentmarks_component__WEBPACK_IMPORTED_MODULE_6__["StudentmarksComponent"],
      canActivate: [src_app_core_security_authentication_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuardService"], src_app_core_security_authorization_guard__WEBPACK_IMPORTED_MODULE_9__["AuthorizationGuard"]],
      outlet: 'detail'
    }, {
      path: 'student-more',
      component: _studentmore_studentmore_component__WEBPACK_IMPORTED_MODULE_7__["StudentmoreComponent"],
      canActivate: [src_app_core_security_authentication_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuardService"], src_app_core_security_authorization_guard__WEBPACK_IMPORTED_MODULE_9__["AuthorizationGuard"]],
      outlet: 'detail'
    }];

    var StudentdetailroutingModule = function StudentdetailroutingModule() {
      _classCallCheck(this, StudentdetailroutingModule);
    };

    StudentdetailroutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentdetailroutingModule
    });
    StudentdetailroutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentdetailroutingModule_Factory(t) {
        return new (t || StudentdetailroutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(studentDetailsRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentdetailroutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentdetailroutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(studentDetailsRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-students-studentdetailrouting-studentdetailrouting-module-es5.js.map