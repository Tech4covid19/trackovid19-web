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
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Nunito\", sans-serif;\n  flex-direction: column;\n  min-height: 100%;\n}\n\nbody[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: inherit;\n  width: 100%;\n  min-height: 100%;\n  max-width: 750px;\n  position: relative;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  z-index: 1;\n}\n\n#bottom-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  height: 80px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 2;\n  width: 100%;\n  background-color: #ffffff;\n  box-shadow: 7px -7px 12px -2px rgba(0, 0, 0, 0.35);\n}\n\n#bottom-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  padding: 8px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBRUEsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQWUsNkJBQUE7RUFBK0IsbUJBQUE7RUFDOUMsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUdBLGtEQUFBO0FDQ0o7O0FEQUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMVxyXG59XHJcblxyXG5cclxuI2JvdHRvbS1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggLTdweCAxMnB4IC0ycHggcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogN3B4IC03cHggMTJweCAtMnB4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICBib3gtc2hhZG93OiA3cHggLTdweCAxMnB4IC0ycHggcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiaHRtbCwgYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbmJvZHkgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuI2JvdHRvbS1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogN3B4IC03cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIC1tb3otYm94LXNoYWRvdzogN3B4IC03cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGJveC1zaGFkb3c6IDdweCAtN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuI2JvdHRvbS1iYXIgaW1nIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
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


    var _screens_chage_state_step1_chage_state_step1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./screens/chage-state-step1/chage-state-step1.component */
    "./src/app/screens/chage-state-step1/chage-state-step1.component.ts");

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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _screens_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _screens_change_state_change_state_component__WEBPACK_IMPORTED_MODULE_9__["ChangeStateComponent"], _screens_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _screens_post_code_post_code_component__WEBPACK_IMPORTED_MODULE_13__["PostCodeComponent"], _screens_chage_state_step1_chage_state_step1_component__WEBPACK_IMPORTED_MODULE_17__["ChageStateStep1Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _screens_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_16__["OnBoardingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_5__["AkitaNgDevtools"], _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_4__["AkitaNgRouterStoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _screens_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _screens_change_state_change_state_component__WEBPACK_IMPORTED_MODULE_9__["ChangeStateComponent"], _screens_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _screens_post_code_post_code_component__WEBPACK_IMPORTED_MODULE_13__["PostCodeComponent"], _screens_chage_state_step1_chage_state_step1_component__WEBPACK_IMPORTED_MODULE_17__["ChageStateStep1Component"]],
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
  "./src/app/screens/chage-state-step1/chage-state-step1.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/screens/chage-state-step1/chage-state-step1.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ChageStateStep1Component */

  /***/
  function srcAppScreensChageStateStep1ChageStateStep1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChageStateStep1Component", function () {
      return ChageStateStep1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChageStateStep1Component =
    /*#__PURE__*/
    function () {
      function ChageStateStep1Component() {
        _classCallCheck(this, ChageStateStep1Component);
      }

      _createClass(ChageStateStep1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChageStateStep1Component;
    }();

    ChageStateStep1Component.ɵfac = function ChageStateStep1Component_Factory(t) {
      return new (t || ChageStateStep1Component)();
    };

    ChageStateStep1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChageStateStep1Component,
      selectors: [["app-chage-state-step1"]],
      decls: 2,
      vars: 0,
      template: function ChageStateStep1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chage-state-step1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvY2hhZ2Utc3RhdGUtc3RlcDEvY2hhZ2Utc3RhdGUtc3RlcDEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChageStateStep1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chage-state-step1',
          templateUrl: './chage-state-step1.component.html',
          styleUrls: ['./chage-state-step1.component.scss']
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


    var _shared_state_change_card_state_change_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/state-change-card/state-change-card.component */
    "./src/app/shared/state-change-card/state-change-card.component.ts");
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
      consts: [[1, "profile_status_container"], ["fxFlex", "49"], ["fxFlexOffset", "2", "fxFlex", "49"], [3, "state", "label"], ["routerLink", "/change-state-step1"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-state-change-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-state-change-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-state-change-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-state-change-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-state-change-card", 3);

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
      directives: [_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _shared_profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_2__["ProfileStatusComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexOffsetDirective"], _shared_state_change_card_state_change_card_component__WEBPACK_IMPORTED_MODULE_4__["StateChangeCardComponent"], _shared_state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_5__["StateConfirmBtnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
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
      styles: [".main-page-container[_ngcontent-%COMP%] {\n  padding: 0 12px;\n}\n\n.profile_status_container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ob21lL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxlQUFBO0FDQUQ7O0FER0E7RUFDQyxhQUFBO0FDQUQiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbi1wYWdlLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMCAxMnB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9zdGF0dXNfY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4iLCIubWFpbi1wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLnByb2ZpbGVfc3RhdHVzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"]
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
          this.router.navigate(['/change-state'], {
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
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 100%;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  height: 60%;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-background[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%] {\n  height: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-basis: 26.5rem;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  max-height: 55px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #4267b2;\n  padding: 1rem;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.25rem;\n  font-weight: 400;\n  margin-right: 2.625rem;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 30px;\n  max-height: 30px;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .fb[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 45px;\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%]   .terms-and-conditions[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   .h-100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9sb2dpbi9DOlxcVXNlcnNcXGtldmluXFxEb2N1bWVudHNcXEdpdEh1YlxcdHJhY2tvdmlkMTktd2ViXFxUcmFja292aWQxOS13ZWIvc3JjXFxhcHBcXHNjcmVlbnNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQU47QURFTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FES0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0UsbUJBQUE7QUNITjtBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0pOO0FETU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSlI7QURPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEUU07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDTlI7QURVSTtFQUNFLGVBQUE7QUNSTjtBRFlFO0VBQ0UsWUFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBcclxuICAgICAgLmxvZ28tYmFja2dyb3VuZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI2LjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICBtYXgtaGVpZ2h0OiA1NXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdiMjtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMi42MjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mYiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRlcm1zLWFuZC1jb25kaXRpb25zIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmgtMTAwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5oZWFkZXIge1xuICBoZWlnaHQ6IDYwJTtcbn1cbjpob3N0IC5oZWFkZXIgLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAuaGVhZGVyIC5sb2dvIC5sb2dvLWJhY2tncm91bmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5hY3Rpb24ge1xuICBoZWlnaHQ6IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuYWN0aW9uID4gZGl2IHtcbiAgZmxleC1iYXNpczogMjYuNXJlbTtcbn1cbjpob3N0IC5hY3Rpb24gLmxvZ2luLWJ0biB7XG4gIG1heC1oZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N2IyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuOmhvc3QgLmFjdGlvbiAubG9naW4tYnRuIHAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tcmlnaHQ6IDIuNjI1cmVtO1xufVxuOmhvc3QgLmFjdGlvbiAubG9naW4tYnRuIGltZyB7XG4gIG1heC13aWR0aDogMzBweDtcbiAgbWF4LWhlaWdodDogMzBweDtcbn1cbjpob3N0IC5hY3Rpb24gLmxvZ2luLWJ0biAuZmIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xufVxuOmhvc3QgLmFjdGlvbiAudGVybXMtYW5kLWNvbmRpdGlvbnMge1xuICBmb250LXNpemU6IDFyZW07XG59XG46aG9zdCAuaC0xMDAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
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
      styles: ["ul[_ngcontent-%COMP%] {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      width: 6000px;\n    }\n\n    .carousel-wrapper[_ngcontent-%COMP%] {\n      overflow: hidden;\n    }\n\n    .carousel-inner[_ngcontent-%COMP%] {\n      display: flex;\n    }\n\n    .next-button-container[_ngcontent-%COMP%] {\n      margin-top: 1em; \n      display: flex; \n      justify-content:center; \n      align-items: center;\n\n      *:focus {\n        outline: 0;\n    }\n  }\n\n  .next-button[_ngcontent-%COMP%] {\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 2.3em;\n    padding-right: 2.3em;\n    padding-bottom: calc(0.85em - 1px);\n    padding-top: calc(0.85em - 1px);\n    display: inline-flex;\n    line-height: 1.5;\n    vertical-align: top;\n    color: rgb(255, 255, 255);\n    font-weight: 700;\n    cursor: pointer;\n    border:none;\n    background: #FA6400;\n    border-radius: 25px;\n    button:focus{border:none}\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'carousel',
          exportAs: 'carousel',
          template: "\n    <section class=\"carousel-wrapper\" [ngStyle]=\"carouselWrapperStyle\">\n      <ul class=\"carousel-inner\" #carousel>\n        <li *ngFor=\"let item of items;\" class=\"carousel-item\">\n          <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\n        </li>\n      </ul>\n\n    </section>\n    <div class=\"content-container\">\n    <div *ngIf=\"showControls\" class=\"next-button-container\">\n      <div (click)=\"next()\" class=\"next-button\">Seguinte</div>\n      </div>\n    </div>\n\n  ",
          styles: ["\n    ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      width: 6000px;\n    }\n\n    .carousel-wrapper {\n      overflow: hidden;\n    }\n\n    .carousel-inner {\n      display: flex;\n    }\n\n    .next-button-container {\n      margin-top: 1em; \n      display: flex; \n      justify-content:center; \n      align-items: center;\n\n      *:focus {\n        outline: 0;\n    }\n  }\n\n  .next-button {\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 2.3em;\n    padding-right: 2.3em;\n    padding-bottom: calc(0.85em - 1px);\n    padding-top: calc(0.85em - 1px);\n    display: inline-flex;\n    line-height: 1.5;\n    vertical-align: top;\n    color: rgb(255, 255, 255);\n    font-weight: 700;\n    cursor: pointer;\n    border:none;\n    background: #FA6400;\n    border-radius: 25px;\n    button:focus{border:none}\n  }\n\n  "]
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
        "active": a0
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
      styles: [".onboarding-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.onboarding-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 491px;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 26px;\n  text-align: center;\n  color: #1E2933;\n}\nspan[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 24px;\n  \n  text-align: center;\n  color: #798794;\n}\n.item[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 300px;\n  height: 300px;\n  background-color: crimson;\n  color: #fff;\n  font-size: 50px;\n  line-height: 300px;\n  text-align: center;\n}\n.frame-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: auto;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background: #F4ECFF;\n  margin-left: 17px;\n  border-radius: 10px;\n}\n.dot.active[_ngcontent-%COMP%] {\n  width: 26px;\n  background: #6A00FF;\n  border-radius: 3.5px;\n}\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9vbmJvYXJkaW5nL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2NyZWVuc1xcb25ib2FyZGluZ1xcb25ib2FyZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBUjtBREdBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDREE7QURHQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUNIQTtBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRE1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRFVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNQSjtBRFFJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNOUjtBRFdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25ib2FyZGluZy1jb250YWluZXIge1xyXG4gIFxyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDkxcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbiAgICB9XHJcbn1cclxuaDMge1xyXG5mb250LWZhbWlseTogQXJjaGl2bztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAyNHB4O1xyXG5saW5lLWhlaWdodDogMjZweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuY29sb3I6ICMxRTI5MzM7XHJcbn1cclxuc3BhbiB7XHJcblxyXG5mb250LWZhbWlseTogQXJjaGl2bztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4vKiBvciAxNjAlICovXHJcblxyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5jb2xvcjogIzc5ODc5NDtcclxufVxyXG4uaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIC8vIGJvcmRlcjogc29saWQgMXB4IGdyZXlcclxuXHJcbn1cclxuLmRvdHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNEVDRkY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNkEwMEZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xyXG4gICAgfVxyXG59XHJcbiAgICBcclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59IiwiLm9uYm9hcmRpbmctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub25ib2FyZGluZy1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNDkxcHg7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogQXJjaGl2bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFFMjkzMztcbn1cblxuc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIC8qIG9yIDE2MCUgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzc5ODc5NDtcbn1cblxuLml0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnJhbWUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICNGNEVDRkY7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmRvdC5hY3RpdmUge1xuICB3aWR0aDogMjZweDtcbiAgYmFja2dyb3VuZDogIzZBMDBGRjtcbiAgYm9yZGVyLXJhZGl1czogMy41cHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"]
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
      styles: [".modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(153, 149, 149, 0.53);\n  \n  \n}\n.modal.open[_ngcontent-%COMP%] {\n  display: block;\n}\n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.modal[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  max-width: 489px;\n  height: 292px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 25px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 20px;\n  text-align: center;\n  color: #1e2933;\n}\n.modal[_ngcontent-%COMP%]   .row.post-code[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  display: flex;\n  align-items: center;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 26px;\n  text-align: center;\n  color: #000000;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .frist-type-number[_ngcontent-%COMP%] {\n  width: 155px;\n  height: 60px;\n  border: 1px solid #dcd7d7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .second-type-number[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 61.25px;\n  border: 1px solid #dcd7d7;\n  box-sizing: border-box;\n  border-radius: 6px;\n}\n.modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0px 8px;\n}\n.modal[_ngcontent-%COMP%]   .row.btns[_ngcontent-%COMP%] {\n  margin-top: 39.75px;\n}\n.modal[_ngcontent-%COMP%]   .row.btns[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 186px;\n  height: 50px;\n  border: 1px solid #fa6400;\n  border-radius: 25px;\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 14px;\n  text-align: center;\n  color: #fa6400;\n  background-color: white;\n  margin-right: 16px;\n}\n.modal[_ngcontent-%COMP%]   .row.btns[_ngcontent-%COMP%]   .btn-go-foward[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 183px;\n  height: 50px;\n  background: #fa6400;\n  border: none;\n  border-radius: 25px;\n  font-family: Archivo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 14px;\n  text-align: center;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9wb3N0LWNvZGUvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzY3JlZW5zXFxwb3N0LWNvZGVcXHBvc3QtY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9wb3N0LWNvZGUvcG9zdC1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0VBTUEsZ0NBQUE7RUFPQSxZQUFBO0FDVkY7QURERTtFQUNFLGNBQUE7QUNHSjtBRENFOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NKO0FER0U7RUFDRSwwQkFBQTtBQ0RKO0FESUU7O0VBRUUsYUFBQTtBQ0ZKO0FESUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNISjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNITjtBRE1JO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSk47QURPSTtFQUNFLGdCQUFBO0FDTE47QURRSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDTk47QURTSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDUE47QURVSTtFQUNFLGVBQUE7QUNSTjtBRFdJO0VBQ0UsbUJBQUE7QUNUTjtBRFVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvcG9zdC1jb2RlL3Bvc3QtY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNDksIDE0OSwgMC41Myk7XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC8qIEZpcmVmb3ggKi9cclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMsXHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXgtd2lkdGg6IDQ4OXB4O1xyXG4gICAgaGVpZ2h0OiAyOTJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxZTI5MzM7XHJcblxyXG4gICAgJi5wb3N0LWNvZGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgZm9udC1mYW1pbHk6IEFyY2hpdm87XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZnJpc3QtdHlwZS1udW1iZXIge1xyXG4gICAgICB3aWR0aDogMTU1cHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZDdkNztcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmQtdHlwZS1udW1iZXIge1xyXG4gICAgICB3aWR0aDogOThweDtcclxuICAgICAgaGVpZ2h0OiA2MS4yNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkN2Q3O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuYnRucyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM5Ljc1cHg7XHJcbiAgICAgIC5idG4tYmFjayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDE4NnB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmE2NDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyY2hpdm87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmYTY0MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnRuLWdvLWZvd2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDE4M3B4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmE2NDAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmNoaXZvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNDksIDE0OSwgMC41Myk7XG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuICAvKiBGaXJlZm94ICovXG59XG4ubW9kYWwub3BlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1vZGFsIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuLm1vZGFsIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ubW9kYWwgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4ubW9kYWwgaW5wdXQ6Zm9jdXMsXG4ubW9kYWwgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1heC13aWR0aDogNDg5cHg7XG4gIGhlaWdodDogMjkycHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsIC5yb3cge1xuICBmb250LWZhbWlseTogQXJjaGl2bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWUyOTMzO1xufVxuLm1vZGFsIC5yb3cucG9zdC1jb2RlIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb2RhbCAucm93IGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IEFyY2hpdm87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5tb2RhbCAucm93IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1vZGFsIC5yb3cgLmZyaXN0LXR5cGUtbnVtYmVyIHtcbiAgd2lkdGg6IDE1NXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2Q3ZDc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5tb2RhbCAucm93IC5zZWNvbmQtdHlwZS1udW1iZXIge1xuICB3aWR0aDogOThweDtcbiAgaGVpZ2h0OiA2MS4yNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkN2Q3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubW9kYWwgLnJvdyBpbWcge1xuICBtYXJnaW46IDBweCA4cHg7XG59XG4ubW9kYWwgLnJvdy5idG5zIHtcbiAgbWFyZ2luLXRvcDogMzkuNzVweDtcbn1cbi5tb2RhbCAucm93LmJ0bnMgLmJ0bi1iYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxODZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmE2NDAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LWZhbWlseTogQXJjaGl2bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZhNjQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5tb2RhbCAucm93LmJ0bnMgLmJ0bi1nby1mb3dhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDE4M3B4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmYTY0MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1mYW1pbHk6IEFyY2hpdm87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"]
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
      styles: [".card[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  margin: 8px 0;\n  background: linear-gradient(0deg, rgba(48, 195, 215, 0.09), rgba(48, 195, 215, 0.09)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n  border-radius: 16px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 28px;\n}\n.orange[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(250, 100, 0, 0.07), rgba(250, 100, 0, 0.07)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n.red[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(250, 0, 0, 0.05), rgba(250, 0, 0, 0.05)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n.green[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(86, 214, 27, 0.07), rgba(86, 214, 27, 0.07)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n.purple[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(107, 104, 252, 0.09), rgba(107, 104, 252, 0.09)), linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQyx1SUFBQTtFQU1BLG1CQUFBO0FDSkY7QURNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1JO0VBQ0UsZUFBQTtBQ0pOO0FET0k7RUFDRSxlQUFBO0FDTE47QURRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTk47QURXQTtFQUNFLHFJQUFBO0FDUkY7QURnQkE7RUFDRSxpSUFBQTtBQ2JGO0FEcUJBO0VBQ0UscUlBQUE7QUNsQkY7QUQwQkE7RUFDRSx5SUFBQTtBQ3ZCRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcblx0cGFkZGluZzogMjRweCAxNnB4O1xyXG5cdG1hcmdpbjogOHB4IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAwZGVnLFxyXG4gICAgICByZ2JhKDQ4LCAxOTUsIDIxNSwgMC4wOSksXHJcbiAgICAgIHJnYmEoNDgsIDE5NSwgMjE1LCAwLjA5KVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAuY291bnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMGRlZyxcclxuICAgICAgcmdiYSgyNTAsIDEwMCwgMCwgMC4wNyksXHJcbiAgICAgIHJnYmEoMjUwLCAxMDAsIDAsIDAuMDcpXHJcbiAgICApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDBkZWcsXHJcbiAgICAgIHJnYmEoMjUwLCAwLCAwLCAwLjA1KSxcclxuICAgICAgcmdiYSgyNTAsIDAsIDAsIDAuMDUpXHJcbiAgICApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMGRlZyxcclxuICAgICAgcmdiYSg4NiwgMjE0LCAyNywgMC4wNyksXHJcbiAgICAgIHJnYmEoODYsIDIxNCwgMjcsIDAuMDcpXHJcbiAgICApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xyXG59XHJcblxyXG4ucHVycGxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDBkZWcsXHJcbiAgICAgIHJnYmEoMTA3LCAxMDQsIDI1MiwgMC4wOSksXHJcbiAgICAgIHJnYmEoMTA3LCAxMDQsIDI1MiwgMC4wOSlcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZGZiZmIgMCUsICNlYmVkZWUgMTAwJSk7XHJcbn1cclxuIiwiLmNhcmQge1xuICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDQ4LCAxOTUsIDIxNSwgMC4wOSksIHJnYmEoNDgsIDE5NSwgMjE1LCAwLjA5KSksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jb3VudGVyIHtcbiAgZm9udC1zaXplOiAyOXB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSAubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IGltZyB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTAsIDEwMCwgMCwgMC4wNyksIHJnYmEoMjUwLCAxMDAsIDAsIDAuMDcpKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjUwLCAwLCAwLCAwLjA1KSwgcmdiYSgyNTAsIDAsIDAsIDAuMDUpKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg4NiwgMjE0LCAyNywgMC4wNyksIHJnYmEoODYsIDIxNCwgMjcsIDAuMDcpKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xufVxuXG4ucHVycGxlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTA3LCAxMDQsIDI1MiwgMC4wOSksIHJnYmEoMTA3LCAxMDQsIDI1MiwgMC4wOSkpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZGZiZmIgMCUsICNlYmVkZWUgMTAwJSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-card",
          templateUrl: "./card.component.html",
          styleUrls: ["./card.component.scss"]
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
      styles: [".location-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvY2F0aW9uLXN0YXR1cy9DOlxcVXNlcnNcXGtldmluXFxEb2N1bWVudHNcXEdpdEh1YlxcdHJhY2tvdmlkMTktd2ViXFxUcmFja292aWQxOS13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcbG9jYXRpb24tc3RhdHVzXFxsb2NhdGlvbi1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2NhdGlvbi1zdGF0dXMvbG9jYXRpb24tc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9jYXRpb24tc3RhdHVzL2xvY2F0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbi1zdGF0dXMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iLCIubG9jYXRpb24tc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"]
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
      styles: [".profile_status[_ngcontent-%COMP%] {\n  background-color: #F9F9F9;\n  padding: 18px 0;\n  font-size: 12px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.profile_status_indicator[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #5BEE73;\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUtc3RhdHVzL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2hhcmVkXFxwcm9maWxlLXN0YXR1c1xccHJvZmlsZS1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9maWxlLXN0YXR1cy9wcm9maWxlLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9maWxlLXN0YXR1cy9wcm9maWxlLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX3N0YXR1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuXHRwYWRkaW5nOiAxOHB4IDA7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGVfc3RhdHVzX2luZGljYXRvciB7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNUJFRTczO1xyXG5cdG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbiIsIi5wcm9maWxlX3N0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG4gIHBhZGRpbmc6IDE4cHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZV9zdGF0dXNfaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJFRTczO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn0iXX0= */"]
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
      styles: [".profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px;\n}\n\n.profile_picture[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.profile_dgs_logo[_ngcontent-%COMP%] {\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUvQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0cGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLnByb2ZpbGVfcGljdHVyZSB7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9kZ3NfbG9nbyB7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG59XHJcbiIsIi5wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ucHJvZmlsZV9waWN0dXJlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnByb2ZpbGVfZGdzX2xvZ28ge1xuICBoZWlnaHQ6IDMycHg7XG59Il19 */"]
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


    var _state_change_card_state_change_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./state-change-card/state-change-card.component */
    "./src/app/shared/state-change-card/state-change-card.component.ts");
    /* harmony import */


    var _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./state-confirm-btn/state-confirm-btn.component */
    "./src/app/shared/state-confirm-btn/state-confirm-btn.component.ts");

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
        declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _state_change_card_state_change_card_component__WEBPACK_IMPORTED_MODULE_8__["StateChangeCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
        exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _state_change_card_state_change_card_component__WEBPACK_IMPORTED_MODULE_8__["StateChangeCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _state_change_card_state_change_card_component__WEBPACK_IMPORTED_MODULE_8__["StateChangeCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]],
          exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _status_btn_status_btn_component__WEBPACK_IMPORTED_MODULE_3__["StatusBtnComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_status_profile_status_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStatusComponent"], _location_status_location_status_component__WEBPACK_IMPORTED_MODULE_6__["LocationStatusComponent"], _state_change_card_state_change_card_component__WEBPACK_IMPORTED_MODULE_8__["StateChangeCardComponent"], _state_confirm_btn_state_confirm_btn_component__WEBPACK_IMPORTED_MODULE_9__["StateConfirmBtnComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/state-change-card/state-change-card.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/state-change-card/state-change-card.component.ts ***!
    \*************************************************************************/

  /*! exports provided: StateChangeCardComponent */

  /***/
  function srcAppSharedStateChangeCardStateChangeCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateChangeCardComponent", function () {
      return StateChangeCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var StateChangeCardComponent =
    /*#__PURE__*/
    function () {
      function StateChangeCardComponent() {
        _classCallCheck(this, StateChangeCardComponent);
      }

      _createClass(StateChangeCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StateChangeCardComponent;
    }();

    StateChangeCardComponent.ɵfac = function StateChangeCardComponent_Factory(t) {
      return new (t || StateChangeCardComponent)();
    };

    StateChangeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateChangeCardComponent,
      selectors: [["app-state-change-card"]],
      inputs: {
        state: "state",
        label: "label"
      },
      decls: 12,
      vars: 2,
      consts: [[1, "card"], ["fxLayout", "row", "fxFlex", "100", 1, "card-body"], [1, "radio-btn"], ["type", "radio", 1, "quiz-radio"], ["src", "assets/img/illustrations/change-state/radio-unchecked.png"], [1, "state-description"], [1, "state-title"], [1, "state-label"], [1, "status"]],
      template: function StateChangeCardComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.state, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]],
      styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 26px 32px 26px 32px;\n  background-color: #ffffff;\n  border-radius: 30px;\n  box-shadow: -7px 7px 12px -2px rgba(0, 0, 0, 0.35);\n  margin-bottom: 28px;\n  \n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 30px;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 32px;\n  max-height: 26px;\n  margin-left: auto;\n  display: flex;\n  align-self: end;\n}\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1e2933;\n  font-size: 26px;\n  font-weight: 400;\n  line-height: 0.7;\n}\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0px;\n  border: 1px solid #979797;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #798794;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 0;\n}\n.card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  line-height: 2.4;\n  margin-top: auto;\n  color: #cecece;\n  font-size: 16px;\n  font-weight: 400;\n}\n.card[_ngcontent-%COMP%]   .radio-btn[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n.card[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%] {\n  \n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.card[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%]    + img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%]:hover    + img[_ngcontent-%COMP%] {\n  content: url('radio-checked.png');\n}\n.card[_ngcontent-%COMP%]   .quiz-radio[_ngcontent-%COMP%]:checked    + img[_ngcontent-%COMP%] {\n  content: url('radio-checked.png');\n}\n.card[_ngcontent-%COMP%]   .state-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXRlLWNoYW5nZS1jYXJkL0M6XFxVc2Vyc1xca2V2aW5cXERvY3VtZW50c1xcR2l0SHViXFx0cmFja292aWQxOS13ZWJcXFRyYWNrb3ZpZDE5LXdlYi9zcmNcXGFwcFxcc2hhcmVkXFxzdGF0ZS1jaGFuZ2UtY2FyZFxcc3RhdGUtY2hhbmdlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdGF0ZS1jaGFuZ2UtY2FyZC9zdGF0ZS1jaGFuZ2UtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBR0Esa0RBQUE7RUFDQSxtQkFBQTtFQW9EQSwyQkFBQTtBQ2xESjtBREFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNFUjtBRERRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNHWjtBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDRVI7QURBSTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBSTtFQUNHLGdCQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7QUNFUjtBREFJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRVI7QURDSTtFQUNJLGVBQUE7QUNDUjtBRENJO0VBQ0ksaUNBQUE7QUNDUjtBRENJO0VBQ0ksaUNBQUE7QUNDUjtBRENJO0VBQ0ksY0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N0YXRlLWNoYW5nZS1jYXJkL3N0YXRlLWNoYW5nZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDI2cHggMzJweCAyNnB4IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTdweCA3cHggMTJweCAtMnB4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC03cHggN3B4IDEycHggLTJweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gICAgYm94LXNoYWRvdzogLTdweCA3cHggMTJweCAtMnB4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmNvdW50ZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMycHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMWUyOTMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAuNztcclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICBjb2xvcjogIzc5ODc5NDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIH1cclxuICAgIC5zdGF0dXMge1xyXG4gICAgICAgbGluZS1oZWlnaHQ6IDIuNDtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIGNvbG9yOiAjY2VjZWNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLnJhZGlvLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICB9XHJcbiAgICAucXVpei1yYWRpb3tcclxuICAgICAgICAvKiBIaWRlICovXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLyogQ2hhbmdlIGN1cnNvciBvbiBpbWFnZSAqL1xyXG4gICAgLnF1aXotcmFkaW8gKyBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5xdWl6LXJhZGlvOmhvdmVyICsgaW1nIHtcclxuICAgICAgICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2lsbHVzdHJhdGlvbnMvY2hhbmdlLXN0YXRlL3JhZGlvLWNoZWNrZWQucG5nXCIpO1xyXG4gICAgfVxyXG4gICAgLnF1aXotcmFkaW86Y2hlY2tlZCArIGltZyB7XHJcbiAgICAgICAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9pbGx1c3RyYXRpb25zL2NoYW5nZS1zdGF0ZS9yYWRpby1jaGVja2VkLnBuZ1wiKTtcclxuICAgIH1cclxuICAgIC5zdGF0ZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn0iLCIuY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDI2cHggMzJweCAyNnB4IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTdweCA3cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTdweCA3cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGJveC1zaGFkb3c6IC03cHggN3B4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAvKiBDaGFuZ2UgY3Vyc29yIG9uIGltYWdlICovXG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZCAuY2FyZC1ib2R5IC5jb3VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMzBweDtcbn1cbi5jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMzJweDtcbiAgbWF4LWhlaWdodDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5jYXJkIHNwYW4ge1xuICBjb2xvcjogIzFlMjkzMztcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMC43O1xufVxuLmNhcmQgaHIge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5Nztcbn1cbi5jYXJkIHAge1xuICBjb2xvcjogIzc5ODc5NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5jYXJkIC5zdGF0dXMge1xuICBsaW5lLWhlaWdodDogMi40O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBjb2xvcjogI2NlY2VjZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNhcmQgLnJhZGlvLWJ0biB7XG4gIG1hcmdpbjogMWVtO1xufVxuLmNhcmQgLnF1aXotcmFkaW8ge1xuICAvKiBIaWRlICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5jYXJkIC5xdWl6LXJhZGlvICsgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQgLnF1aXotcmFkaW86aG92ZXIgKyBpbWcge1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2lsbHVzdHJhdGlvbnMvY2hhbmdlLXN0YXRlL3JhZGlvLWNoZWNrZWQucG5nXCIpO1xufVxuLmNhcmQgLnF1aXotcmFkaW86Y2hlY2tlZCArIGltZyB7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvaWxsdXN0cmF0aW9ucy9jaGFuZ2Utc3RhdGUvcmFkaW8tY2hlY2tlZC5wbmdcIik7XG59XG4uY2FyZCAuc3RhdGUtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateChangeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-state-change-card',
          templateUrl: './state-change-card.component.html',
          styleUrls: ['./state-change-card.component.scss']
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
      styles: ["[_nghost-%COMP%]   .status_btn[_ngcontent-%COMP%] {\n  background-color: #FA6400;\n  border-radius: 10px;\n  width: 100%;\n  margin: 13px 0;\n  border: none;\n  outline: none;\n  padding: 18px 0;\n  font-weight: bold;\n  color: #FFF;\n  font-size: 13px;\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXR1cy1idG4vQzpcXFVzZXJzXFxrZXZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXHRyYWNrb3ZpZDE5LXdlYlxcVHJhY2tvdmlkMTktd2ViL3NyY1xcYXBwXFxzaGFyZWRcXHN0YXR1cy1idG5cXHN0YXR1cy1idG4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdGF0dXMtYnRuL3N0YXR1cy1idG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0gsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGF0dXMtYnRuL3N0YXR1cy1idG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAuc3RhdHVzX2J0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IDEzcHggMDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRwYWRkaW5nOiAxOHB4IDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6ICNGRkY7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiIsIjpob3N0IC5zdGF0dXNfYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNjQwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTNweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDE4cHggMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufSJdfQ== */"]
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