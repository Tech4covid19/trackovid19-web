function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./screens/home/home.component */
    "./src/app/screens/home/home.component.ts");
    /* harmony import */


    var _screens_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./screens/login/login.component */
    "./src/app/screens/login/login.component.ts");
    /* harmony import */


    var _screens_change_state_change_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./screens/change-state/change-state.component */
    "./src/app/screens/change-state/change-state.component.ts");
    /* harmony import */


    var _screens_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./screens/main/main.component */
    "./src/app/screens/main/main.component.ts");
    /* harmony import */


    var _screens_post_code_post_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./screens/post-code/post-code.component */
    "./src/app/screens/post-code/post-code.component.ts");
    /* harmony import */


    var _screens_change_state_step1_change_state_step1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./screens/change-state-step1/change-state-step1.component */
    "./src/app/screens/change-state-step1/change-state-step1.component.ts");

    var routes = [{
      path: 'login',
      component: _screens_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '',
      // auth guard
      component: _screens_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
      children: [{
        path: '',
        component: _screens_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }]
    }, {
      path: 'change-state',
      component: _screens_change_state_change_state_component__WEBPACK_IMPORTED_MODULE_4__["ChangeStateComponent"]
    }, {
      path: 'change-state-step1',
      component: _screens_change_state_step1_change_state_step1_component__WEBPACK_IMPORTED_MODULE_7__["ChangeStateStep1Component"]
    }, {
      path: 'post-code',
      component: _screens_post_code_post_code_component__WEBPACK_IMPORTED_MODULE_6__["PostCodeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_geolocalization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/services/geolocalization.service */
    "./src/app/shared/services/geolocalization.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(geolocalizationService) {
      _classCallCheck(this, AppComponent);

      this.title = 'Trackovid19-web'; // geolocalizationService.geoFindMe()
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_geolocalization_service__WEBPACK_IMPORTED_MODULE_1__["GeolocalizationService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Nunito\", sans-serif;\n  flex-direction: column;\n  min-height: 100%;\n}\n\nbody[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: inherit;\n  width: 100%;\n  min-height: 100%;\n  max-width: 750px;\n  position: relative;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  z-index: 1;\n}\n\n#bottom-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  height: 80px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 2;\n  width: 100%;\n  background-color: #ffffff;\n  box-shadow: 7px -7px 12px -2px rgba(0, 0, 0, 0.35);\n}\n\n#bottom-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  padding: 8px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUVBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBR0Esa0RBQUE7QUNBRjs7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jYm90dG9tLWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCAtN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogN3B4IC03cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgYm94LXNoYWRvdzogN3B4IC03cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCJodG1sLFxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbmJvZHkgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuI2JvdHRvbS1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogN3B4IC03cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIC1tb3otYm94LXNoYWRvdzogN3B4IC03cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGJveC1zaGFkb3c6IDdweCAtN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuI2JvdHRvbS1iYXIgaW1nIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_geolocalization_service__WEBPACK_IMPORTED_MODULE_1__["GeolocalizationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @datorama/akita-ng-entity-service */
    "./node_modules/@datorama/akita-ng-entity-service/__ivy_ngcc__/fesm2015/datorama-akita-ng-entity-service.js");
    /* harmony import */


    var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @datorama/akita-ng-router-store */
    "./node_modules/@datorama/akita-ng-router-store/__ivy_ngcc__/fesm2015/datorama-akita-ng-router-store.js");
    /* harmony import */


    var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @datorama/akita-ngdevtools */
    "./node_modules/@datorama/akita-ngdevtools/__ivy_ngcc__/fesm2015/datorama-akita-ngdevtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _screens_change_state_change_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./screens/change-state/change-state.component */
    "./src/app/screens/change-state/change-state.component.ts");
    /* harmony import */


    var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./screens/home/home.component */
    "./src/app/screens/home/home.component.ts");
    /* harmony import */


    var _screens_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./screens/login/login.component */
    "./src/app/screens/login/login.component.ts");
    /* harmony import */


    var _screens_main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./screens/main/main.component */
    "./src/app/screens/main/main.component.ts");
    /* harmony import */


    var _screens_post_code_post_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./screens/post-code/post-code.component */
    "./src/app/screens/post-code/post-code.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _screens_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./screens/onboarding/onboarding.module */
    "./src/app/screens/onboarding/onboarding.module.ts");
    /* harmony import */


    var _screens_change_state_step1_change_state_step1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./screens/change-state-step1/change-state-step1.component */
    "./src/app/screens/change-state-step1/change-state-step1.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [// GeolocalizationService,
      {
        provide: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_3__["NG_ENTITY_SERVICE_CONFIG"],
        useValue: {
          baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _screens_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_16__["OnBoardingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? [] : _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_5__["AkitaNgDevtools"].forRoot(), _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_4__["AkitaNgRouterStoreModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _screens_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _screens_change_state_change_state_component__WEBPACK_IMPORTED_MODULE_9__["ChangeStateComponent"], _screens_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _screens_post_code_post_code_component__WEBPACK_IMPORTED_MODULE_13__["PostCodeComponent"], _screens_change_state_step1_change_state_step1_component__WEBPACK_IMPORTED_MODULE_17__["ChangeStateStep1Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _screens_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_16__["OnBoardingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_5__["AkitaNgDevtools"], _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_4__["AkitaNgRouterStoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _screens_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _screens_change_state_change_state_component__WEBPACK_IMPORTED_MODULE_9__["ChangeStateComponent"], _screens_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _screens_post_code_post_code_component__WEBPACK_IMPORTED_MODULE_13__["PostCodeComponent"], _screens_change_state_step1_change_state_step1_component__WEBPACK_IMPORTED_MODULE_17__["ChangeStateStep1Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _screens_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_16__["OnBoardingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? [] : _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_5__["AkitaNgDevtools"].forRoot(), _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_4__["AkitaNgRouterStoreModule"].forRoot()],
          providers: [// GeolocalizationService,
          {
            provide: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_3__["NG_ENTITY_SERVICE_CONFIG"],
            useValue: {
              baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/change-state-step1/change-state-step1.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/screens/change-state-step1/change-state-step1.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ChangeStateStep1Component */

  /***/
  function srcAppScreensChangeStateStep1ChangeStateStep1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeStateStep1Component", function () {
      return ChangeStateStep1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/profile/profile.component */
    "./src/app/shared/profile/profile.component.ts");
    /* harmony import */


    var _shared_profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/profile-status/profile-status.component */
    "./src/app/shared/profile-status/profile-status.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _shared_checkbox_card_checkbox_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/checkbox-card/checkbox-card.component */
    "./src/app/shared/checkbox-card/checkbox-card.component.ts");

    var ChangeStateStep1Component =
    /*#__PURE__*/
    function () {
      function ChangeStateStep1Component() {
        _classCallCheck(this, ChangeStateStep1Component);
      }

      _createClass(ChangeStateStep1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChangeStateStep1Component;
    }();

    ChangeStateStep1Component.ɵfac = function ChangeStateStep1Component_Factory(t) {
      return new (t || ChangeStateStep1Component)();
    };

    ChangeStateStep1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangeStateStep1Component,
      selectors: [["app-chage-state-step1"]],
      decls: 25,
      vars: 6,
      consts: [[1, "profile_status_container"], ["fxFlex", "49"], ["fxFlexOffset", "2", "fxFlex", "49"], [1, "change-state-step1-container"], ["src", "assets/img/illustrations/change-state/step-1-counter.svg", 1, "step-counter"], [1, "step-description-text"], [1, "step-question-text"], [1, "cards"], [1, "card"], [3, "state"]],
      template: function ChangeStateStep1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-status", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-profile-status", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alterar o meu estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Passo 1 - Estado de Sa\xFAde");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Apresenta algum dos sintomas abaixo?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-checkbox-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-checkbox-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-checkbox-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-checkbox-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-checkbox-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-checkbox-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Tosse seca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Espirros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Tosse com expectora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Dores musculares");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Febre (acima de 37.5\xBAC)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Arrepios/calafrios");
        }
      },
      directives: [_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _shared_profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_2__["ProfileStatusComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexOffsetDirective"], _shared_checkbox_card_checkbox_card_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxCardComponent"]],
      styles: [".change-state-step1-container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80%;\n  height: auto;\n  margin: 0 auto;\n  position: relative;\n}\n\n.step-description-text[_ngcontent-%COMP%] {\n  color: #798794;\n  font-size: 28px;\n  font-weight: 400;\n}\n\n.step-question-text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 28px;\n  font-weight: 800;\n}\n\n.step-counter[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 25em;\n}\n\n.cards[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: calc(50% - 50px);\n  margin: 0px 50px 30px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9jaGFuZ2Utc3RhdGUtc3RlcDEvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzY3JlZW5zXFxjaGFuZ2Utc3RhdGUtc3RlcDFcXGNoYW5nZS1zdGF0ZS1zdGVwMS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9jaGFuZ2Utc3RhdGUtc3RlcDEvY2hhbmdlLXN0YXRlLXN0ZXAxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9jaGFuZ2Utc3RhdGUtc3RlcDEvY2hhbmdlLXN0YXRlLXN0ZXAxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZS1zdGF0ZS1zdGVwMS1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RlcC1kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgIGNvbG9yOiAjNzk4Nzk0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn1cclxuXHJcbi5zdGVwLXF1ZXN0aW9uLXRleHQge1xyXG4gICAgY29sb3I6ICAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnN0ZXAtY291bnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDI1ZW07XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgIG1hcmdpbjogMHB4IDUwcHggMzBweCAwO1xyXG59IiwiLmNoYW5nZS1zdGF0ZS1zdGVwMS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0ZXAtZGVzY3JpcHRpb24tdGV4dCB7XG4gIGNvbG9yOiAjNzk4Nzk0O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zdGVwLXF1ZXN0aW9uLXRleHQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3RlcC1jb3VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyNWVtO1xufVxuXG4uY2FyZHMge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xuICBtYXJnaW46IDBweCA1MHB4IDMwcHggMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeStateStep1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chage-state-step1',
          templateUrl: './change-state-step1.component.html',
          styleUrls: ['./change-state-step1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/change-state/change-state.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/screens/change-state/change-state.component.ts ***!
    \****************************************************************/

  /*! exports provided: ChangeStateComponent */

  /***/
  function srcAppScreensChangeStateChangeStateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeStateComponent", function () {
      return ChangeStateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/profile/profile.component */
    "./src/app/shared/profile/profile.component.ts");
    /* harmony import */


    var _shared_profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/profile-status/profile-status.component */
    "./src/app/shared/profile-status/profile-status.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _shared_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/radio-card/radio-card.component */
    "./src/app/shared/radio-card/radio-card.component.ts");
    /* harmony import */


    var _shared_state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/state-confirm-btn/state-confirm-btn.component */
    "./src/app/shared/state-confirm-btn/state-confirm-btn.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ChangeStateComponent =
    /*#__PURE__*/
    function () {
      function ChangeStateComponent() {
        _classCallCheck(this, ChangeStateComponent);
      }

      _createClass(ChangeStateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChangeStateComponent;
    }();

    ChangeStateComponent.ɵfac = function ChangeStateComponent_Factory(t) {
      return new (t || ChangeStateComponent)();
    };

    ChangeStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangeStateComponent,
      selectors: [["app-change-state"]],
      decls: 12,
      vars: 10,
      consts: [[1, "profile_status_container"], ["fxFlex", "49"], ["fxFlexOffset", "2", "fxFlex", "49"], [3, "state", "label"], ["routerLink", "/change-state-step1/"]],
      template: function ChangeStateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-status", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-profile-status", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alterar o meu estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-radio-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-radio-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-radio-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-radio-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-radio-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-state-confirm-btn", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Infectado")("label", "Sou um doente confirmado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Em situa\xE7\xE3o regular")("label", "N\xE3o estive em risco e mantenho a atividade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Em quarentena")("label", "Estive em risco de cont\xE1gio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Recuperado")("label", "Recebi alta hospitalar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", "Em quarentena volunt\xE1ria")("label", "Por op\xE7\xE3o ou precau\xE7\xE3o");
        }
      },
      directives: [_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _shared_profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_2__["ProfileStatusComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexOffsetDirective"], _shared_radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_4__["RadioCardComponent"], _shared_state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_5__["StateConfirmBtnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvY2hhbmdlLXN0YXRlL2NoYW5nZS1zdGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeStateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-state',
          templateUrl: './change-state.component.html',
          styleUrls: ['./change-state.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/screens/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppScreensHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/profile/profile.component */
    "./src/app/shared/profile/profile.component.ts");
    /* harmony import */


    var _shared_profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/profile-status/profile-status.component */
    "./src/app/shared/profile-status/profile-status.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _shared_status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/status-btn/status-btn.component */
    "./src/app/shared/status-btn/status-btn.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/location-status/location-status.component */
    "./src/app/shared/location-status/location-status.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [[1, "profile_status_container"], ["fxFlex", "49"], ["fxFlexOffset", "2", "fxFlex", "49"], [1, "main-page-container"], ["routerLink", "/change-state"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-status", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-profile-status", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-status-btn", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-location-status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _shared_profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_2__["ProfileStatusComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexOffsetDirective"], _shared_status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_4__["StatusBtnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _shared_location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"]],
      styles: [".main-page-container[_ngcontent-%COMP%] {\n  padding: 0 12px;\n}\n\n.profile_status_container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ob21lL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2UtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX3N0YXR1c19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIiwiLm1haW4tcGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5wcm9maWxlX3N0YXR1c19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/screens/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppScreensLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onFacebookLogin",
        value: function onFacebookLogin() {
          this.router.navigate(['/intro-steps'], {
            relativeTo: this.activatedRoute
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 16,
      vars: 0,
      consts: [["fxLayout", "row", "fxLayoutAlign", "center", 1, "h-100"], ["fxFlex", "100", 1, "h-100"], ["fxLayout", "column", 1, "h-100", "wrapper"], [1, "header"], [1, "logo"], ["src", "assets/img/illustrations/login/background.svg", 1, "logo-background"], ["fxLayout", "row", 1, "action"], [1, "login-btn", "button-elevation", "cursor-pointer", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "fb"], ["src", "assets/img/facebook.svg"], [1, "login-text"], [1, "text-grey", "text-center", "terms-and-conditions"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_8_listener() {
            return ctx.onFacebookLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Entrar com o Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Termos e condi\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 100%;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  height: 60%;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-background[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%] {\n  height: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-basis: 26.5rem;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  max-height: 55px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #4267b2;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.25rem;\n  font-weight: 400;\n  margin-right: 2.625rem;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 30px;\n  max-height: 30px;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .fb[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 45px;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .terms-and-conditions[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   .h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9sb2dpbi9DOlxcVXNlcnNcXGtldmluXFxEb2N1bWVudHNcXEdpdEh1YlxcdHJhY2tvdmlkMTktd2ViXFxUcmFja292aWQxOS13ZWIvc3JjXFxhcHBcXHNjcmVlbnNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQU47QURFTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FES0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0UsbUJBQUE7QUNITjtBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0pOO0FETU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSlI7QURPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEUU07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDTlI7QURVSTtFQUNFLGVBQUE7QUNSTjtBRFlFO0VBQ0UsWUFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgLmxvZ28tYmFja2dyb3VuZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI2LjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWJ0biB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDU1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N2IyO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjYyNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZiIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGVybXMtYW5kLWNvbmRpdGlvbnMge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaC0xMDAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmhlYWRlciB7XG4gIGhlaWdodDogNjAlO1xufVxuOmhvc3QgLmhlYWRlciAubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5oZWFkZXIgLmxvZ28gLmxvZ28tYmFja2dyb3VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmFjdGlvbiB7XG4gIGhlaWdodDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5hY3Rpb24gPiBkaXYge1xuICBmbGV4LWJhc2lzOiAyNi41cmVtO1xufVxuOmhvc3QgLmFjdGlvbiAubG9naW4tYnRuIHtcbiAgbWF4LWhlaWdodDogNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG46aG9zdCAuYWN0aW9uIC5sb2dpbi1idG4gcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1yaWdodDogMi42MjVyZW07XG59XG46aG9zdCAuYWN0aW9uIC5sb2dpbi1idG4gaW1nIHtcbiAgbWF4LXdpZHRoOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xufVxuOmhvc3QgLmFjdGlvbiAubG9naW4tYnRuIC5mYiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG59XG46aG9zdCAuYWN0aW9uIC50ZXJtcy1hbmQtY29uZGl0aW9ucyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbjpob3N0IC5oLTEwMCB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/main/main.component.ts":
  /*!************************************************!*\
    !*** ./src/app/screens/main/main.component.ts ***!
    \************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppScreensMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 7,
      vars: 0,
      consts: [[1, "header"], ["src", "assets/img/dgs.png"], ["id", "bottom-bar"], ["src", "assets/img/dash.svg", "routerLink", ""], ["src", "assets/img/contacts.svg", "routerLink", "/profile"], ["src", "assets/img/contacts.svg", "routerLink", "home"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/onboarding/carousel-item.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/screens/onboarding/carousel-item.directive.ts ***!
    \***************************************************************/

  /*! exports provided: CarouselItemDirective */

  /***/
  function srcAppScreensOnboardingCarouselItemDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function () {
      return CarouselItemDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CarouselItemDirective = function CarouselItemDirective(tpl) {
      _classCallCheck(this, CarouselItemDirective);

      this.tpl = tpl;
    };

    CarouselItemDirective.ɵfac = function CarouselItemDirective_Factory(t) {
      return new (t || CarouselItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    CarouselItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CarouselItemDirective,
      selectors: [["", "carouselItem", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[carouselItem]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/onboarding/carousel.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/screens/onboarding/carousel.component.ts ***!
    \**********************************************************/

  /*! exports provided: CarouselItemElement, CarouselComponent */

  /***/
  function srcAppScreensOnboardingCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselItemElement", function () {
      return CarouselItemElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./carousel-item.directive */
    "./src/app/screens/onboarding/carousel-item.directive.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["carousel"];

    function CarouselComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r7.tpl);
      }
    }

    function CarouselComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_5_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seguinte");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CarouselItemElement = function CarouselItemElement() {
      _classCallCheck(this, CarouselItemElement);
    };

    CarouselItemElement.ɵfac = function CarouselItemElement_Factory(t) {
      return new (t || CarouselItemElement)();
    };

    CarouselItemElement.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CarouselItemElement,
      selectors: [["", 8, "carousel-item"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselItemElement, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '.carousel-item'
        }]
      }], null, null);
    })(); //       <button (click)="prev()" class="btn btn-default">Prev</button>


    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent(builder) {
        _classCallCheck(this, CarouselComponent);

        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.currentSlide = 0;
        this.carouselWrapperStyle = {};
      }

      _createClass(CarouselComponent, [{
        key: "next",
        value: function next() {
          if (this.currentSlide + 1 === this.items.length) return;
          this.currentSlide = (this.currentSlide + 1) % this.items.length;
          var offset = this.currentSlide * this.itemWidth;
          var myAnimation = this.buildAnimation(offset);
          this.player = myAnimation.create(this.carousel.nativeElement);
          this.player.play();
        }
      }, {
        key: "buildAnimation",
        value: function buildAnimation(offset) {
          return this.builder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: "translateX(-".concat(offset, "px)")
          }))]);
        }
      }, {
        key: "prev",
        value: function prev() {
          if (this.currentSlide === 0) return;
          this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
          var offset = this.currentSlide * this.itemWidth;
          var myAnimation = this.buildAnimation(offset);
          this.player = myAnimation.create(this.carousel.nativeElement);
          this.player.play();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // For some reason only here I need to add setTimeout, in my local env it's working without this.
          setTimeout(function () {
            _this.itemWidth = _this.itemsElements.first.nativeElement.getBoundingClientRect().width;
            _this.carouselWrapperStyle = {
              width: "".concat(_this.itemWidth, "px")
            };
          });
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["carousel"]],
      contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__["CarouselItemDirective"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
        }
      },
      viewQuery: function CarouselComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](CarouselItemElement, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsElements = _t);
        }
      },
      inputs: {
        timing: "timing",
        showControls: "showControls"
      },
      exportAs: ["carousel"],
      decls: 6,
      vars: 3,
      consts: [[1, "carousel-wrapper", 3, "ngStyle"], [1, "carousel-inner"], ["carousel", ""], ["class", "carousel-item", 4, "ngFor", "ngForOf"], [1, "content-container"], ["class", "next-button-container", 4, "ngIf"], [1, "carousel-item"], [3, "ngTemplateOutlet"], [1, "next-button-container"], [1, "next-button", 3, "click"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_li_3_Template, 2, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_div_5_Template, 3, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.carouselWrapperStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showControls);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], CarouselItemElement, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
      styles: ["ul[_ngcontent-%COMP%] {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        width: 6000px;\n      }\n\n      .carousel-wrapper[_ngcontent-%COMP%] {\n        overflow: hidden;\n      }\n\n      .carousel-inner[_ngcontent-%COMP%] {\n        display: flex;\n      }\n\n      .next-button-container[_ngcontent-%COMP%] {\n        margin-top: 1em;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        *:focus {\n          outline: 0;\n        }\n      }\n\n      .next-button[_ngcontent-%COMP%] {\n        -webkit-box-pack: center;\n        justify-content: center;\n        text-align: center;\n        padding-left: 2.3em;\n        padding-right: 2.3em;\n        padding-bottom: calc(0.85em - 1px);\n        padding-top: calc(0.85em - 1px);\n        display: inline-flex;\n        line-height: 1.5;\n        vertical-align: top;\n        color: rgb(255, 255, 255);\n        font-weight: 700;\n        cursor: pointer;\n        border: none;\n        background: #fa6400;\n        border-radius: 25px;\n        button:focus {\n          border: none;\n        }\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'carousel',
          exportAs: 'carousel',
          template: "\n    <section class=\"carousel-wrapper\" [ngStyle]=\"carouselWrapperStyle\">\n      <ul class=\"carousel-inner\" #carousel>\n        <li *ngFor=\"let item of items\" class=\"carousel-item\">\n          <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\n        </li>\n      </ul>\n    </section>\n    <div class=\"content-container\">\n      <div *ngIf=\"showControls\" class=\"next-button-container\">\n        <div (click)=\"next()\" class=\"next-button\">Seguinte</div>\n      </div>\n    </div>\n  ",
          styles: ["\n      ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        width: 6000px;\n      }\n\n      .carousel-wrapper {\n        overflow: hidden;\n      }\n\n      .carousel-inner {\n        display: flex;\n      }\n\n      .next-button-container {\n        margin-top: 1em;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        *:focus {\n          outline: 0;\n        }\n      }\n\n      .next-button {\n        -webkit-box-pack: center;\n        justify-content: center;\n        text-align: center;\n        padding-left: 2.3em;\n        padding-right: 2.3em;\n        padding-bottom: calc(0.85em - 1px);\n        padding-top: calc(0.85em - 1px);\n        display: inline-flex;\n        line-height: 1.5;\n        vertical-align: top;\n        color: rgb(255, 255, 255);\n        font-weight: 700;\n        cursor: pointer;\n        border: none;\n        background: #fa6400;\n        border-radius: 25px;\n        button:focus {\n          border: none;\n        }\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__["CarouselItemDirective"]]
        }],
        itemsElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [CarouselItemElement, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        carousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['carousel']
        }],
        timing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/screens/onboarding/onboarding.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/screens/onboarding/onboarding.component.ts ***!
    \************************************************************/

  /*! exports provided: OnboardingComponent */

  /***/
  function srcAppScreensOnboardingOnboardingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function () {
      return OnboardingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./carousel.component */
    "./src/app/screens/onboarding/carousel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _carousel_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carousel-item.directive */
    "./src/app/screens/onboarding/carousel-item.directive.ts");

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function OnboardingComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var frame_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", frame_r1.slider, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, 1 == frame_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, 2 == frame_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, 3 == frame_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](frame_r1.info.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", frame_r1.info.information, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function OnboardingComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OnboardingComponent_ng_container_3_ng_container_1_Template, 13, 12, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var OnboardingComponent =
    /*#__PURE__*/
    function () {
      function OnboardingComponent() {
        _classCallCheck(this, OnboardingComponent);

        this.items = [{
          title: 'Slide 1'
        }, {
          title: 'Slide 2'
        }, {
          title: 'Slide 3'
        }];
        this.frames = [{
          id: 1,
          logo: 'assets/img/logo/tracovid.svg',
          slider: 'assets/img/illustrations/intro/step1.svg',
          info: {
            title: 'Proteção de Dados',
            information: 'Os seus dados são anónimos e confidenciais.<br/> Os seus contactos não terão acesso a seu estado.'
          }
        }, {
          id: 2,
          logo: 'assets/img/logo/tracovid.svg',
          slider: 'assets/img/illustrations/intro/step2.svg',
          info: {
            title: 'Atualize o seu estado',
            information: 'Reporte o seu estado de saúde e atividade e atualize-o sempre que este se alterar.'
          }
        }, {
          id: 3,
          logo: 'assets/img/logo/tracovid.svg',
          slider: 'assets/img/illustrations/intro/step3.svg',
          info: {
            title: 'Consulte a situação da sua área',
            information: 'Saiba qual é o potencial de infeção na sua área geográfica.'
          }
        }];
      }

      _createClass(OnboardingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OnboardingComponent;
    }();

    OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) {
      return new (t || OnboardingComponent)();
    };

    OnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OnboardingComponent,
      selectors: [["app-onboarding"]],
      decls: 4,
      vars: 2,
      consts: [[1, "onboarding-container"], [3, "src"], [4, "ngFor", "ngForOf"], [4, "carouselItem"], [1, "frame-container"], [1, "content-container"], [2, "width", "300px", "height", "10px", "flex-direction", "row", "display", "flex", "justify-content", "center", "align-items", "center"], [1, "dot", 3, "ngClass"], [3, "innerHtml"]],
      template: function OnboardingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OnboardingComponent_ng_container_3_Template, 2, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.frames[0].logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.frames);
        }
      },
      directives: [_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _carousel_item_directive__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".onboarding-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.onboarding-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 491px;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 26px;\n  text-align: center;\n  color: #1e2933;\n}\nspan[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 24px;\n  \n  text-align: center;\n  color: #798794;\n}\n.item[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 300px;\n  height: 300px;\n  background-color: crimson;\n  color: #fff;\n  font-size: 50px;\n  line-height: 300px;\n  text-align: center;\n}\n.frame-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: auto;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: #f4ecff;\n  margin-left: 17px;\n  border-radius: 10px;\n}\n.dot.active[_ngcontent-%COMP%] {\n  width: 26px;\n  background: #6a00ff;\n  border-radius: 3.5px;\n}\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9vbmJvYXJkaW5nL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcb25ib2FyZGluZ1xcb25ib2FyZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNFSjtBRENBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDQ0Y7QURDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUNBRjtBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREtBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREdFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNESjtBREtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25ib2FyZGluZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDQ5MXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuICB9XHJcbn1cclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBjb2xvcjogIzFlMjkzMztcclxufVxyXG5zcGFuIHtcclxuICBmb250LWZhbWlseTogQXJjaGl2bztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgLyogb3IgMTYwJSAqL1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiAjNzk4Nzk0O1xyXG59XHJcbi5pdGVtIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mcmFtZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgLy8gYm9yZGVyOiBzb2xpZCAxcHggZ3JleVxyXG59XHJcbi5kb3Qge1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZWNmZjtcclxuICBtYXJnaW4tbGVmdDogMTdweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICYuYWN0aXZlIHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzZhMDBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iLCIub25ib2FyZGluZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vbmJvYXJkaW5nLWNvbnRhaW5lciBpbWcge1xuICBtYXgtaGVpZ2h0OiA0OTFweDtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWUyOTMzO1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IEFyY2hpdm87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgLyogb3IgMTYwJSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzk4Nzk0O1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mcmFtZS1jb250YWluZXIge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2Y0ZWNmZjtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZG90LmFjdGl2ZSB7XG4gIHdpZHRoOiAyNnB4O1xuICBiYWNrZ3JvdW5kOiAjNmEwMGZmO1xuICBib3JkZXItcmFkaXVzOiAzLjVweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-onboarding',
          templateUrl: './onboarding.component.html',
          styleUrls: ['./onboarding.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/onboarding/onboarding.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/screens/onboarding/onboarding.module.ts ***!
    \*********************************************************/

  /*! exports provided: OnBoardingModule */

  /***/
  function srcAppScreensOnboardingOnboardingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnBoardingModule", function () {
      return OnBoardingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _onboarding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./onboarding.component */
    "./src/app/screens/onboarding/onboarding.component.ts");
    /* harmony import */


    var _carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carousel.component */
    "./src/app/screens/onboarding/carousel.component.ts");
    /* harmony import */


    var _carousel_item_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./carousel-item.directive */
    "./src/app/screens/onboarding/carousel-item.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var OnBoardingModule = function OnBoardingModule() {
      _classCallCheck(this, OnBoardingModule);
    };

    OnBoardingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OnBoardingModule
    });
    OnBoardingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OnBoardingModule_Factory(t) {
        return new (t || OnBoardingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnBoardingModule, {
        declarations: [_onboarding_component__WEBPACK_IMPORTED_MODULE_2__["OnboardingComponent"], _carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselItemElement"], _carousel_item_directive__WEBPACK_IMPORTED_MODULE_4__["CarouselItemDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnBoardingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
          declarations: [_onboarding_component__WEBPACK_IMPORTED_MODULE_2__["OnboardingComponent"], _carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselItemElement"], _carousel_item_directive__WEBPACK_IMPORTED_MODULE_4__["CarouselItemDirective"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/screens/post-code/post-code.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/screens/post-code/post-code.component.ts ***!
    \**********************************************************/

  /*! exports provided: PostCodeComponent */

  /***/
  function srcAppScreensPostCodePostCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCodeComponent", function () {
      return PostCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var PostCodeComponent =
    /*#__PURE__*/
    function () {
      function PostCodeComponent() {
        _classCallCheck(this, PostCodeComponent);

        this.opened = true;
        this.closing = false;
      }

      _createClass(PostCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open() {
          var _this2 = this;

          setTimeout(function () {
            _this2.opened = true;
          }, 500);
        }
      }, {
        key: "close",
        value: function close() {
          var _this3 = this;

          // TODO: Emit event
          this.closing = true;
          setTimeout(function () {
            _this3.opened = false;
            _this3.closing = false;
          }, 500);
        }
      }]);

      return PostCodeComponent;
    }();

    PostCodeComponent.ɵfac = function PostCodeComponent_Factory(t) {
      return new (t || PostCodeComponent)();
    };

    PostCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostCodeComponent,
      selectors: [["app-post-code"]],
      decls: 15,
      vars: 4,
      consts: [["id", "myModal", 1, "modal"], ["fxLayout", "column", 1, "modal-content"], ["fxLayout", "row", 1, "row"], ["alt", "marker", "src", "assets/img/icons/marker.svg"], ["fxLayout", "row", 1, "row", "post-code"], ["type", "number", "ngModel", "", "maxlength", "4", "name", "frist-four-digits", "onKeyPress", "if(this.value.length==4) return false;", 1, "frist-type-number"], ["src", "assets/img/icons/post-code-divider.svg", "alt", "post-code-divider"], ["type", "number", "ngModel", "", "maxlength", "3", "name", "second-three-digits", "onKeyPress", "if(this.value.length==3) return false;", 1, "second-type-number"], ["fxLayout", "row", 1, "row", "btns"], [1, "btn-back", 3, "click"], [1, "btn-go-foward"]],
      template: function PostCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Insira o seu c\xF3digo postal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCodeComponent_Template_button_click_11_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Avan\xE7ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("closing", ctx.closing);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"]],
      styles: [".modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(153, 149, 149, 0.53);\n  \n  \n}\n.modal.open[_ngcontent-%COMP%] {\n  display: block;\n}\n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  max-width: 489px;\n  height: 292px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 25px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 20px;\n  text-align: center;\n  color: #1e2933;\n}\n.modal[_ngcontent-%COMP%]   .row.post-code[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  display: flex;\n  align-items: center;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 26px;\n  text-align: center;\n  color: #000000;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .frist-type-number[_ngcontent-%COMP%] {\n  width: 155px;\n  height: 60px;\n  border: 1px solid #dcd7d7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .second-type-number[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 61.25px;\n  border: 1px solid #dcd7d7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0px 8px;\n}\n.modal[_ngcontent-%COMP%]   .row.btns[_ngcontent-%COMP%] {\n  margin-top: 39.75px;\n}\n.modal[_ngcontent-%COMP%]   .row.btns[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 186px;\n  height: 50px;\n  border: 1px solid #fa6400;\n  border-radius: 25px;\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 14px;\n  text-align: center;\n  color: #fa6400;\n  background-color: white;\n  margin-right: 16px;\n}\n.modal[_ngcontent-%COMP%]   .row.btns[_ngcontent-%COMP%]   .btn-go-foward[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 183px;\n  height: 50px;\n  background: #fa6400;\n  border: none;\n  border-radius: 25px;\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 14px;\n  text-align: center;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9wb3N0LWNvZGUvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzY3JlZW5zXFxwb3N0LWNvZGVcXHBvc3QtY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9wb3N0LWNvZGUvcG9zdC1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0VBTUEsZ0NBQUE7RUFPQSxZQUFBO0FDVkY7QURERTtFQUNFLGNBQUE7QUNHSjtBRENFOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NKO0FER0U7RUFDRSwwQkFBQTtBQ0RKO0FESUU7O0VBRUUsYUFBQTtBQ0ZKO0FESUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNISjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNITjtBRE1JO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0FDTE47QURRSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTk47QURTSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDUE47QURVSTtFQUNFLGVBQUE7QUNSTjtBRFdJO0VBQ0UsbUJBQUE7QUNUTjtBRFVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvcG9zdC1jb2RlL3Bvc3QtY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNDksIDE0OSwgMC41Myk7XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC8qIEZpcmVmb3ggKi9cclxuICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzLFxyXG4gIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWF4LXdpZHRoOiA0ODlweDtcclxuICAgIGhlaWdodDogMjkycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBmb250LWZhbWlseTogQXJjaGl2bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMWUyOTMzO1xyXG5cclxuICAgICYucG9zdC1jb2RlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZyaXN0LXR5cGUtbnVtYmVyIHtcclxuICAgICAgd2lkdGg6IDE1NXB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2Q3ZDc7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kLXR5cGUtbnVtYmVyIHtcclxuICAgICAgd2lkdGg6IDk4cHg7XHJcbiAgICAgIGhlaWdodDogNjEuMjVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZDdkNztcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmJ0bnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzOS43NXB4O1xyXG4gICAgICAuYnRuLWJhY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxODZweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZhNjQwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmE2NDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0bi1nby1mb3dhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhNjQwMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogQXJjaGl2bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTQ5LCAxNDksIDAuNTMpO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbiAgLyogRmlyZWZveCAqL1xufVxuLm1vZGFsLm9wZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tb2RhbCBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi5tb2RhbCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLm1vZGFsIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLm1vZGFsIGlucHV0OmZvY3VzLFxuLm1vZGFsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXgtd2lkdGg6IDQ4OXB4O1xuICBoZWlnaHQ6IDI5MnB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb2RhbCAucm93IHtcbiAgZm9udC1mYW1pbHk6IEFyY2hpdm87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFlMjkzMztcbn1cbi5tb2RhbCAucm93LnBvc3QtY29kZSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9kYWwgLnJvdyBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubW9kYWwgLnJvdyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5tb2RhbCAucm93IC5mcmlzdC10eXBlLW51bWJlciB7XG4gIHdpZHRoOiAxNTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkN2Q3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubW9kYWwgLnJvdyAuc2Vjb25kLXR5cGUtbnVtYmVyIHtcbiAgd2lkdGg6IDk4cHg7XG4gIGhlaWdodDogNjEuMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZDdkNztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm1vZGFsIC5yb3cgaW1nIHtcbiAgbWFyZ2luOiAwcHggOHB4O1xufVxuLm1vZGFsIC5yb3cuYnRucyB7XG4gIG1hcmdpbi10b3A6IDM5Ljc1cHg7XG59XG4ubW9kYWwgLnJvdy5idG5zIC5idG4tYmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTg2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhNjQwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1mYW1pbHk6IEFyY2hpdm87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmYTY0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubW9kYWwgLnJvdy5idG5zIC5idG4tZ28tZm93YXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxODNweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmE2NDAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-code',
          templateUrl: './post-code.component.html',
          styleUrls: ['./post-code.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/card/card.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/card/card.component.ts ***!
    \***********************************************/

  /*! exports provided: CardColor, CardComponent */

  /***/
  function srcAppSharedCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardColor", function () {
      return CardColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
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


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    var CardColor;

    (function (CardColor) {
      CardColor["Orange"] = "orange";
      CardColor["Red"] = "red";
      CardColor["Green"] = "green";
      CardColor["purple"] = "purple";
    })(CardColor || (CardColor = {}));

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        counter: "counter",
        label: "label",
        icon: "icon",
        color: "color"
      },
      decls: 9,
      vars: 4,
      consts: [[1, "card", 3, "ngClass"], [1, "card-body"], [1, "counter"], [1, "label"], [3, "src"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]],
      styles: [".card[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  margin: 8px 0;\n  background: linear-gradient(0deg, rgba(48, 195, 215, 0.09), rgba(48, 195, 215, 0.09)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n  border-radius: 16px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 28px;\n}\n.orange[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(250, 100, 0, 0.07), rgba(250, 100, 0, 0.07)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n.red[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(250, 0, 0, 0.05), rgba(250, 0, 0, 0.05)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n.green[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(86, 214, 27, 0.07), rgba(86, 214, 27, 0.07)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n.purple[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(107, 104, 252, 0.09), rgba(107, 104, 252, 0.09)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1SUFBQTtFQUVBLG1CQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FER0k7RUFDRSxlQUFBO0FDRE47QURJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRk47QURPQTtFQUNFLHFJQUFBO0FDSkY7QURRQTtFQUNFLGlJQUFBO0FDTEY7QURTQTtFQUNFLHFJQUFBO0FDTkY7QURVQTtFQUNFLHlJQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDQ4LCAxOTUsIDIxNSwgMC4wOSksIHJnYmEoNDgsIDE5NSwgMjE1LCAwLjA5KSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZGZiZmIgMCUsICNlYmVkZWUgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgLmNvdW50ZXIge1xyXG4gICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTAsIDEwMCwgMCwgMC4wNyksIHJnYmEoMjUwLCAxMDAsIDAsIDAuMDcpKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjUwLCAwLCAwLCAwLjA1KSwgcmdiYSgyNTAsIDAsIDAsIDAuMDUpKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg4NiwgMjE0LCAyNywgMC4wNyksIHJnYmEoODYsIDIxNCwgMjcsIDAuMDcpKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcclxufVxyXG5cclxuLnB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTA3LCAxMDQsIDI1MiwgMC4wOSksIHJnYmEoMTA3LCAxMDQsIDI1MiwgMC4wOSkpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xyXG59XHJcbiIsIi5jYXJkIHtcbiAgcGFkZGluZzogMjRweCAxNnB4O1xuICBtYXJnaW46IDhweCAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0OCwgMTk1LCAyMTUsIDAuMDkpLCByZ2JhKDQ4LCAxOTUsIDIxNSwgMC4wOSkpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZGZiZmIgMCUsICNlYmVkZWUgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhcmQgLmNhcmQtYm9keSAuY291bnRlciB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSBpbWcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4ub3JhbmdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjUwLCAxMDAsIDAsIDAuMDcpLCByZ2JhKDI1MCwgMTAwLCAwLCAwLjA3KSksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1MCwgMCwgMCwgMC4wNSksIHJnYmEoMjUwLCAwLCAwLCAwLjA1KSksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoODYsIDIxNCwgMjcsIDAuMDcpLCByZ2JhKDg2LCAyMTQsIDI3LCAwLjA3KSksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcbn1cblxuLnB1cnBsZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEwNywgMTA0LCAyNTIsIDAuMDkpLCByZ2JhKDEwNywgMTA0LCAyNTIsIDAuMDkpKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/checkbox-card/checkbox-card.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/checkbox-card/checkbox-card.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CheckboxCardComponent */

  /***/
  function srcAppSharedCheckboxCardCheckboxCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxCardComponent", function () {
      return CheckboxCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var CheckboxCardComponent =
    /*#__PURE__*/
    function () {
      function CheckboxCardComponent() {
        _classCallCheck(this, CheckboxCardComponent);
      }

      _createClass(CheckboxCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckboxCardComponent;
    }();

    CheckboxCardComponent.ɵfac = function CheckboxCardComponent_Factory(t) {
      return new (t || CheckboxCardComponent)();
    };

    CheckboxCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckboxCardComponent,
      selectors: [["app-checkbox-card"]],
      inputs: {
        state: "state"
      },
      decls: 10,
      vars: 1,
      consts: [[1, "card-container"], ["fxLayout", "row", "fxFlex", "grow", 1, "card-body"], [1, "checkbox-btn"], ["type", "checkbox", 1, "quiz-checkbox"], ["src", "assets/img/icons/checkbox-unchecked.svg"], [1, "state-description"], [1, "state-title"]],
      template: function CheckboxCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]],
      styles: [".card-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #ffffff;\n  border-radius: 30px;\n  padding: 30px;\n  box-shadow: -7px 7px 12px -2px rgba(0, 0, 0, 0.35);\n  \n}\n.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 32px;\n  max-height: 26px;\n  margin-left: auto;\n  align-self: end;\n}\n.card-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1e2933;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 0.7;\n}\n.card-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0px;\n  border: 1px solid #979797;\n}\n.card-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #798794;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 0;\n}\n.card-container[_ngcontent-%COMP%]   .state-description[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.card-container[_ngcontent-%COMP%]   .quiz-checkbox[_ngcontent-%COMP%] {\n  \n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.card-container[_ngcontent-%COMP%]   .quiz-checkbox[_ngcontent-%COMP%]    + img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .quiz-checkbox[_ngcontent-%COMP%]:hover    + img[_ngcontent-%COMP%] {\n  content: url('checkbox-checked.svg');\n}\n.card-container[_ngcontent-%COMP%]   .quiz-checkbox[_ngcontent-%COMP%]:checked    + img[_ngcontent-%COMP%] {\n  content: url('checkbox-checked.svg');\n}\n.card-container[_ngcontent-%COMP%]   .state-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoZWNrYm94LWNhcmQvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNoZWNrYm94LWNhcmRcXGNoZWNrYm94LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jaGVja2JveC1jYXJkL2NoZWNrYm94LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFHQSxrREFBQTtFQXFDQSwyQkFBQTtBQ25DSjtBREFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRU47QURDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NOO0FEQ0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNDTjtBRENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDTjtBREVJO0VBQ0UsZ0JBQUE7QUNBTjtBREdJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRE47QURJSTtFQUNJLGVBQUE7QUNGUjtBRElJO0VBQ0ksb0NBQUE7QUNGUjtBRElJO0VBQ0ksb0NBQUE7QUNGUjtBRElJO0VBQ0UsY0FBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NoZWNrYm94LWNhcmQvY2hlY2tib3gtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTdweCA3cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC03cHggN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gICAgYm94LXNoYWRvdzogLTdweCA3cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDMycHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICMxZTI5MzM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDAuNztcclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM3OTg3OTQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgIC5zdGF0ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucXVpei1jaGVja2JveHtcclxuICAgICAgLyogSGlkZSAqL1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAvKiBDaGFuZ2UgY3Vyc29yIG9uIGltYWdlICovXHJcbiAgICAucXVpei1jaGVja2JveCArIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnF1aXotY2hlY2tib3g6aG92ZXIgKyBpbWcge1xyXG4gICAgICAgIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvY2hlY2tib3gtY2hlY2tlZC5zdmdcIik7XHJcbiAgICB9XHJcbiAgICAucXVpei1jaGVja2JveDpjaGVja2VkICsgaW1nIHtcclxuICAgICAgICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL2NoZWNrYm94LWNoZWNrZWQuc3ZnXCIpO1xyXG4gICAgfVxyXG4gICAgLnN0YXRlLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICIsIi5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC03cHggN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAtbW96LWJveC1zaGFkb3c6IC03cHggN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBib3gtc2hhZG93OiAtN3B4IDdweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgLyogQ2hhbmdlIGN1cnNvciBvbiBpbWFnZSAqL1xufVxuLmNhcmQtY29udGFpbmVyIGltZyB7XG4gIG1heC13aWR0aDogMzJweDtcbiAgbWF4LWhlaWdodDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5jYXJkLWNvbnRhaW5lciBzcGFuIHtcbiAgY29sb3I6ICMxZTI5MzM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDAuNztcbn1cbi5jYXJkLWNvbnRhaW5lciBociB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xufVxuLmNhcmQtY29udGFpbmVyIHAge1xuICBjb2xvcjogIzc5ODc5NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5jYXJkLWNvbnRhaW5lciAuc3RhdGUtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmNhcmQtY29udGFpbmVyIC5xdWl6LWNoZWNrYm94IHtcbiAgLyogSGlkZSAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG4uY2FyZC1jb250YWluZXIgLnF1aXotY2hlY2tib3ggKyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC1jb250YWluZXIgLnF1aXotY2hlY2tib3g6aG92ZXIgKyBpbWcge1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL2NoZWNrYm94LWNoZWNrZWQuc3ZnXCIpO1xufVxuLmNhcmQtY29udGFpbmVyIC5xdWl6LWNoZWNrYm94OmNoZWNrZWQgKyBpbWcge1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL2NoZWNrYm94LWNoZWNrZWQuc3ZnXCIpO1xufVxuLmNhcmQtY29udGFpbmVyIC5zdGF0ZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-checkbox-card',
          templateUrl: './checkbox-card.component.html',
          styleUrls: ['./checkbox-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/location-status/location-status.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/location-status/location-status.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LocationStatusComponent */

  /***/
  function srcAppSharedLocationStatusLocationStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationStatusComponent", function () {
      return LocationStatusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/shared/card/card.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var LocationStatusComponent =
    /*#__PURE__*/
    function () {
      function LocationStatusComponent() {
        _classCallCheck(this, LocationStatusComponent);
      }

      _createClass(LocationStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LocationStatusComponent;
    }();

    LocationStatusComponent.ɵfac = function LocationStatusComponent_Factory(t) {
      return new (t || LocationStatusComponent)();
    };

    LocationStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LocationStatusComponent,
      selectors: [["app-location-status"]],
      decls: 8,
      vars: 19,
      consts: [[1, "location-status"], ["fxFlex", "100", 3, "counter", "label", "icon"], ["fxLayoutAlign", "space-between center"], ["fxFlex", "48", 3, "counter", "label", "color", "icon"]],
      template: function LocationStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", 1)("label", "Infetados")("icon", "assets/img/heart.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", 1)("label", "Infetados")("color", "orange")("icon", "assets/img/heart.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", 2)("label", "Infetados")("color", "red")("icon", "assets/img/heart.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", 3)("label", "Infetados")("color", "green")("icon", "assets/img/heart.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", 4)("label", "Infetados")("color", "purple")("icon", "assets/img/heart.svg");
        }
      },
      directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]],
      styles: [".location-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvY2F0aW9uLXN0YXR1cy9DOlxcVXNlcnNcXGtldmluXFxEb2N1bWVudHNcXEdpdEh1YlxcdHJhY2tvdmlkMTktd2ViXFxUcmFja292aWQxOS13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcbG9jYXRpb24tc3RhdHVzXFxsb2NhdGlvbi1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2NhdGlvbi1zdGF0dXMvbG9jYXRpb24tc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9jYXRpb24tc3RhdHVzL2xvY2F0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbi1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iLCIubG9jYXRpb24tc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-location-status',
          templateUrl: './location-status.component.html',
          styleUrls: ['./location-status.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/profile-status/profile-status.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/profile-status/profile-status.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfileStatusComponent */

  /***/
  function srcAppSharedProfileStatusProfileStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileStatusComponent", function () {
      return ProfileStatusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileStatusComponent =
    /*#__PURE__*/
    function () {
      function ProfileStatusComponent() {
        _classCallCheck(this, ProfileStatusComponent);
      }

      _createClass(ProfileStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileStatusComponent;
    }();

    ProfileStatusComponent.ɵfac = function ProfileStatusComponent_Factory(t) {
      return new (t || ProfileStatusComponent)();
    };

    ProfileStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileStatusComponent,
      selectors: [["app-profile-status"]],
      decls: 4,
      vars: 0,
      consts: [[1, "profile_status"], [1, "profile_status_indicator"]],
      template: function ProfileStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Quarentena volunt\xE1ria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".profile_status[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 18px 0;\n  font-size: 12px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.profile_status_indicator[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #5bee73;\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUtc3RhdHVzL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2hhcmVkXFxwcm9maWxlLXN0YXR1c1xccHJvZmlsZS1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9maWxlLXN0YXR1cy9wcm9maWxlLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9maWxlLXN0YXR1cy9wcm9maWxlLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX3N0YXR1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBwYWRkaW5nOiAxOHB4IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGVfc3RhdHVzX2luZGljYXRvciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlZTczO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbiIsIi5wcm9maWxlX3N0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDE4cHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZV9zdGF0dXNfaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlZTczO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-status',
          templateUrl: './profile-status.component.html',
          styleUrls: ['./profile-status.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/profile/profile.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/profile/profile.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppSharedProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 4,
      vars: 0,
      consts: [[1, "profile"], ["src", "assets/img/avatar.svg", 1, "profile_picture"], ["src", "assets/img/tracovid.svg", 1, "profile_dgs_logo"], ["src", "assets/img/settings.svg"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px;\n}\n\n.profile_picture[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.profile_dgs_logo[_ngcontent-%COMP%] {\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLnByb2ZpbGVfcGljdHVyZSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9kZ3NfbG9nbyB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbiIsIi5wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ucHJvZmlsZV9waWN0dXJlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnByb2ZpbGVfZGdzX2xvZ28ge1xuICBoZWlnaHQ6IDMycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/radio-card/radio-card.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/radio-card/radio-card.component.ts ***!
    \***********************************************************/

  /*! exports provided: RadioCardComponent */

  /***/
  function srcAppSharedRadioCardRadioCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioCardComponent", function () {
      return RadioCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var RadioCardComponent =
    /*#__PURE__*/
    function () {
      function RadioCardComponent() {
        _classCallCheck(this, RadioCardComponent);
      }

      _createClass(RadioCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RadioCardComponent;
    }();

    RadioCardComponent.ɵfac = function RadioCardComponent_Factory(t) {
      return new (t || RadioCardComponent)();
    };

    RadioCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RadioCardComponent,
      selectors: [["app-radio-card"]],
      inputs: {
        state: "state",
        label: "label"
      },
      decls: 10,
      vars: 1,
      consts: [[1, "card-container"], ["fxLayout", "row", "fxFlex", "grow", 1, "card-body"], [1, "radio-btn"], ["type", "radio", 1, "quiz-radio"], ["src", "assets/img/icons/radio-unchecked.svg"], [1, "state-description"], [1, "state-title"]],
      template: function RadioCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]],
      styles: [".card-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #ffffff;\n  border-radius: 30px;\n  padding: 30px;\n  box-shadow: -7px 7px 12px -2px rgba(0, 0, 0, 0.35);\n  \n}\n.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 32px;\n  max-height: 26px;\n  margin-left: auto;\n  align-self: end;\n}\n.card-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1e2933;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 0.7;\n}\n.card-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0px;\n  border: 1px solid #979797;\n}\n.card-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #798794;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 0;\n}\n.card-container[_ngcontent-%COMP%]   .state-description[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.card-container[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%] {\n  \n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.card-container[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%]    + img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%]:hover    + img[_ngcontent-%COMP%] {\n  content: url('radio-checked.svg');\n}\n.card-container[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%]:checked    + img[_ngcontent-%COMP%] {\n  content: url('radio-checked.svg');\n}\n.card-container[_ngcontent-%COMP%]   .state-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhZGlvLWNhcmQvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXHJhZGlvLWNhcmRcXHJhZGlvLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yYWRpby1jYXJkL3JhZGlvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFHQSxrREFBQTtFQXFDQSwyQkFBQTtBQ25DRjtBREFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUo7QURDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNDSjtBRENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBREdFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDREo7QURJRTtFQUNJLGVBQUE7QUNGTjtBRElFO0VBQ0ksaUNBQUE7QUNGTjtBRElFO0VBQ0ksaUNBQUE7QUNGTjtBRElFO0VBQ0UsY0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JhZGlvLWNhcmQvcmFkaW8tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtN3B4IDdweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IC03cHggN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIGJveC1zaGFkb3c6IC03cHggN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAzMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogIzFlMjkzMztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMC43O1xyXG4gIH1cclxuICBociB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM3OTg3OTQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gIC5zdGF0ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIH1cclxuXHJcbiAgLnF1aXotcmFkaW97XHJcbiAgICAvKiBIaWRlICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIC8qIENoYW5nZSBjdXJzb3Igb24gaW1hZ2UgKi9cclxuICAucXVpei1yYWRpbyArIGltZyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnF1aXotcmFkaW86aG92ZXIgKyBpbWcge1xyXG4gICAgICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ljb25zL3JhZGlvLWNoZWNrZWQuc3ZnXCIpO1xyXG4gIH1cclxuICAucXVpei1yYWRpbzpjaGVja2VkICsgaW1nIHtcclxuICAgICAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9yYWRpby1jaGVja2VkLnN2Z1wiKTtcclxuICB9XHJcbiAgLnN0YXRlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCIuY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtN3B4IDdweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAtN3B4IDdweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgYm94LXNoYWRvdzogLTdweCA3cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIC8qIENoYW5nZSBjdXJzb3Igb24gaW1hZ2UgKi9cbn1cbi5jYXJkLWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDMycHg7XG4gIG1heC1oZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG4uY2FyZC1jb250YWluZXIgc3BhbiB7XG4gIGNvbG9yOiAjMWUyOTMzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjc7XG59XG4uY2FyZC1jb250YWluZXIgaHIge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5Nztcbn1cbi5jYXJkLWNvbnRhaW5lciBwIHtcbiAgY29sb3I6ICM3OTg3OTQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4uY2FyZC1jb250YWluZXIgLnN0YXRlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5jYXJkLWNvbnRhaW5lciAucXVpei1yYWRpbyB7XG4gIC8qIEhpZGUgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLmNhcmQtY29udGFpbmVyIC5xdWl6LXJhZGlvICsgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQtY29udGFpbmVyIC5xdWl6LXJhZGlvOmhvdmVyICsgaW1nIHtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9yYWRpby1jaGVja2VkLnN2Z1wiKTtcbn1cbi5jYXJkLWNvbnRhaW5lciAucXVpei1yYWRpbzpjaGVja2VkICsgaW1nIHtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9yYWRpby1jaGVja2VkLnN2Z1wiKTtcbn1cbi5jYXJkLWNvbnRhaW5lciAuc3RhdGUtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-radio-card',
          templateUrl: './radio-card.component.html',
          styleUrls: ['./radio-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/geolocalization.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/geolocalization.service.ts ***!
    \************************************************************/

  /*! exports provided: GeolocalizationService */

  /***/
  function srcAppSharedServicesGeolocalizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocalizationService", function () {
      return GeolocalizationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_state_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/state/users.service */
    "./src/app/state/users.service.ts");

    var GeolocalizationService =
    /*#__PURE__*/
    function () {
      function GeolocalizationService(usersService) {
        _classCallCheck(this, GeolocalizationService);

        this.usersService = usersService;
        this.target = {
          latitude: 0,
          longitude: 0
        };
        this.options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0
        };
      }

      _createClass(GeolocalizationService, [{
        key: "geoFindMe",
        value: function geoFindMe() {
          if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
          } else {
            console.log('Locating…');
            navigator.geolocation.getCurrentPosition(this.success, this.error); //navigator.geolocation.watchPosition(this.success, this.error, this.options);
          }
        }
      }, {
        key: "success",
        value: function success(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          var geolocation = {
            geo: {
              lat: latitude,
              lon: longitude
            }
          };
          alert("Latitude: ".concat(latitude, " \xB0, Longitude: ").concat(longitude, " \xB0"));
          this.usersService.updateUserLocation(geolocation);
        }
      }, {
        key: "error",
        value: function error() {
          alert('Unable to retrieve your location');
        }
      }]);

      return GeolocalizationService;
    }();

    GeolocalizationService.ɵfac = function GeolocalizationService_Factory(t) {
      return new (t || GeolocalizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_state_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]));
    };

    GeolocalizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GeolocalizationService,
      factory: GeolocalizationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeolocalizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_state_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/shared/card/card.component.ts");
    /* harmony import */


    var _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./status-btn/status-btn.component */
    "./src/app/shared/status-btn/status-btn.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/shared/profile/profile.component.ts");
    /* harmony import */


    var _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-status/profile-status.component */
    "./src/app/shared/profile-status/profile-status.component.ts");
    /* harmony import */


    var _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./location-status/location-status.component */
    "./src/app/shared/location-status/location-status.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./radio-card/radio-card.component */
    "./src/app/shared/radio-card/radio-card.component.ts");
    /* harmony import */


    var _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./state-confirm-btn/state-confirm-btn.component */
    "./src/app/shared/state-confirm-btn/state-confirm-btn.component.ts");
    /* harmony import */


    var _checkbox_card_checkbox_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./checkbox-card/checkbox-card.component */
    "./src/app/shared/checkbox-card/checkbox-card.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_8__["RadioCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"], _checkbox_card_checkbox_card_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxCardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
        exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_8__["RadioCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"], _checkbox_card_checkbox_card_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxCardComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_8__["RadioCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"], _checkbox_card_checkbox_card_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxCardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
          exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _radio_card_radio_card_component__WEBPACK_IMPORTED_MODULE_8__["RadioCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"], _checkbox_card_checkbox_card_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxCardComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/state-confirm-btn/state-confirm-btn.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/state-confirm-btn/state-confirm-btn.component.ts ***!
    \*************************************************************************/

  /*! exports provided: StateConfirmBtnComponent */

  /***/
  function srcAppSharedStateConfirmBtnStateConfirmBtnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateConfirmBtnComponent", function () {
      return StateConfirmBtnComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StateConfirmBtnComponent =
    /*#__PURE__*/
    function () {
      function StateConfirmBtnComponent() {
        _classCallCheck(this, StateConfirmBtnComponent);
      }

      _createClass(StateConfirmBtnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StateConfirmBtnComponent;
    }();

    StateConfirmBtnComponent.ɵfac = function StateConfirmBtnComponent_Factory(t) {
      return new (t || StateConfirmBtnComponent)();
    };

    StateConfirmBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateConfirmBtnComponent,
      selectors: [["app-state-confirm-btn"]],
      decls: 2,
      vars: 0,
      consts: [[1, "state_confirm_btn"]],
      template: function StateConfirmBtnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmar o meu estado\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]   .state_confirm_btn[_ngcontent-%COMP%] {\n  background-color: #FA6400;\n  border-radius: 10px;\n  width: 100%;\n  margin: 13px 0;\n  border: none;\n  outline: none;\n  padding: 18px 0;\n  font-weight: bold;\n  color: #FFF;\n  font-size: 13px;\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXRlLWNvbmZpcm0tYnRuL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2hhcmVkXFxzdGF0ZS1jb25maXJtLWJ0blxcc3RhdGUtY29uZmlybS1idG4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdGF0ZS1jb25maXJtLWJ0bi9zdGF0ZS1jb25maXJtLWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDSCxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N0YXRlLWNvbmZpcm0tYnRuL3N0YXRlLWNvbmZpcm0tYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgLnN0YXRlX2NvbmZpcm1fYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTY0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMTNweCAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHBhZGRpbmc6IDE4cHggMDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogI0ZGRjtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcbn0iLCI6aG9zdCAuc3RhdGVfY29uZmlybV9idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxM3B4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMThweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateConfirmBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-state-confirm-btn',
          templateUrl: './state-confirm-btn.component.html',
          styleUrls: ['./state-confirm-btn.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/status-btn/status-btn.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/status-btn/status-btn.component.ts ***!
    \***********************************************************/

  /*! exports provided: StatusBtnComponent */

  /***/
  function srcAppSharedStatusBtnStatusBtnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBtnComponent", function () {
      return StatusBtnComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StatusBtnComponent =
    /*#__PURE__*/
    function () {
      function StatusBtnComponent() {
        _classCallCheck(this, StatusBtnComponent);
      }

      _createClass(StatusBtnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatusBtnComponent;
    }();

    StatusBtnComponent.ɵfac = function StatusBtnComponent_Factory(t) {
      return new (t || StatusBtnComponent)();
    };

    StatusBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatusBtnComponent,
      selectors: [["app-status-btn"]],
      decls: 2,
      vars: 0,
      consts: [[1, "status_btn"]],
      template: function StatusBtnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Atualizar o meu estado\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]   .status_btn[_ngcontent-%COMP%] {\n  background-color: #fa6400;\n  border-radius: 10px;\n  width: 100%;\n  margin: 13px 0;\n  border: none;\n  outline: none;\n  padding: 18px 0;\n  font-weight: bold;\n  color: #fff;\n  font-size: 13px;\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXR1cy1idG4vQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXHN0YXR1cy1idG5cXHN0YXR1cy1idG4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdGF0dXMtYnRuL3N0YXR1cy1idG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGF0dXMtYnRuL3N0YXR1cy1idG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAuc3RhdHVzX2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjQwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTNweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDE4cHggMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbn1cclxuIiwiOmhvc3QgLnN0YXR1c19idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2NDAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxM3B4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMThweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-status-btn',
          templateUrl: './status-btn.component.html',
          styleUrls: ['./status-btn.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/state/users.service.ts":
  /*!****************************************!*\
    !*** ./src/app/state/users.service.ts ***!
    \****************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppStateUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @datorama/akita-ng-entity-service */
    "./node_modules/@datorama/akita-ng-entity-service/__ivy_ngcc__/fesm2015/datorama-akita-ng-entity-service.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _users_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./users.store */
    "./src/app/state/users.store.ts");

    var UsersService =
    /*#__PURE__*/
    function (_datorama_akita_ng_en) {
      _inherits(UsersService, _datorama_akita_ng_en);

      function UsersService(store) {
        var _this4;

        _classCallCheck(this, UsersService);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(UsersService).call(this, store));
        _this4.store = store;
        return _this4;
      }

      _createClass(UsersService, [{
        key: "login",
        value: function login() {}
      }, {
        key: "updateUserLocation",
        value: function updateUserLocation(geolocation) {
          var _this5 = this;

          return this.getHttp().post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'user', geolocation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (userData) {
            return _this5.store.updateActive(userData);
          }));
        }
      }]);

      return UsersService;
    }(_datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_1__["NgEntityService"]);

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_users_store__WEBPACK_IMPORTED_MODULE_4__["UsersStore"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _users_store__WEBPACK_IMPORTED_MODULE_4__["UsersStore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/state/users.store.ts":
  /*!**************************************!*\
    !*** ./src/app/state/users.store.ts ***!
    \**************************************/

  /*! exports provided: UsersStore */

  /***/
  function srcAppStateUsersStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersStore", function () {
      return UsersStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");

    var UsersStore =
    /*#__PURE__*/
    function (_datorama_akita__WEBP) {
      _inherits(UsersStore, _datorama_akita__WEBP);

      function UsersStore() {
        _classCallCheck(this, UsersStore);

        return _possibleConstructorReturn(this, _getPrototypeOf(UsersStore).call(this));
      }

      return UsersStore;
    }(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]);

    UsersStore.ɵfac = function UsersStore_Factory(t) {
      return new (t || UsersStore)();
    };

    UsersStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UsersStore,
      factory: UsersStore.ɵfac,
      providedIn: 'root'
    });
    UsersStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
      name: 'users'
    })], UsersStore);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://trackcovid.pt/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kevin\Documents\GitHub\trackovid19-web\Trackovid19-web\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map