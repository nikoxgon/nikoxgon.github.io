(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rendidor-rendidor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rendidor/rendidor.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rendidor/rendidor.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs  (ionTabsWillChange)=\"changeTab($event)\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Rinde Rapido  - {{ title }}</ion-title>\r\n      <ion-buttons slot=\"primary\">\r\n        <ion-button (click)=\"popoverPerfil()\" container=\"body\" tooltip=\"Cambiar perfil\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n          Rendidor\r\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n          <ion-icon slot=\"end\" name=\"arrow-dropdown\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button  container=\"body\" tooltip=\"Menu\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n          Nicolas\r\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n          <ion-icon slot=\"end\" name=\"arrow-dropdown\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-tab-bar slot=\"top\" color=\"primary\">\r\n    <ion-tab-button *ngFor=\"let m of menus\" [tab]=\"m.path\" layout=\"icon-start\">\r\n      <ion-icon *ngIf=\"m.iconType === 'custom'\" [src]=\"m.icon\"></ion-icon>\r\n      <ion-icon *ngIf=\"m.iconType === 'ionic'\" [name]=\"m.icon\"></ion-icon>\r\n      <ion-label>{{ m.title }}</ion-label>\r\n      <ion-badge *ngIf=\"m.badge\" color=\"danger\">{{ m.badge }}</ion-badge>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/rendidor/rendidor.module.ts":
/*!*********************************************!*\
  !*** ./src/app/rendidor/rendidor.module.ts ***!
  \*********************************************/
/*! exports provided: RendidorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendidorPageModule", function() { return RendidorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _rendidor_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rendidor.page */ "./src/app/rendidor/rendidor.page.ts");
/* harmony import */ var _rendidor_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rendidor.router.module */ "./src/app/rendidor/rendidor.router.module.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");








let RendidorPageModule = class RendidorPageModule {
};
RendidorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _rendidor_router_module__WEBPACK_IMPORTED_MODULE_6__["RendidorPageRoutingModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
        ],
        declarations: [_rendidor_page__WEBPACK_IMPORTED_MODULE_5__["RendidorPage"]]
    })
], RendidorPageModule);



/***/ }),

/***/ "./src/app/rendidor/rendidor.page.ts":
/*!*******************************************!*\
  !*** ./src/app/rendidor/rendidor.page.ts ***!
  \*******************************************/
/*! exports provided: ROUTESRENDIDOR, RendidorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTESRENDIDOR", function() { return ROUTESRENDIDOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendidorPage", function() { return RendidorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/platform.service */ "./src/app/services/platform.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");





const ROUTESRENDIDOR = [
    {
        path: 'gastos',
        title: 'Gastos',
        iconType: 'custom',
        icon: 'assets/icons/receipt-solid.svg',
        badge: 2
    },
    {
        path: 'informe',
        title: 'Informe de gastos',
        iconType: 'custom',
        icon: 'assets/icons/file-invoice-dollar-solid.svg'
    },
    {
        path: 'galeria',
        title: 'Galeria',
        iconType: 'custom',
        icon: 'assets/icons/images-solid.svg'
    }
];
let RendidorPage = class RendidorPage {
    constructor(pltService, popoverController) {
        this.pltService = pltService;
        this.popoverController = popoverController;
        this.title = '';
        this.tab = '';
        console.log(this.pltService.getPlatformTabs());
        this.placement = this.pltService.getPlatformTabs();
        this.menus = ROUTESRENDIDOR;
    }
    changeTab(e) {
        this.tab = e.tab;
        this.title = e.tab.charAt(0).toUpperCase() + e.tab.slice(1);
    }
    popoverPerfil(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__["PerfilPopover"],
                event: ev,
                translucent: true,
                cssClass: 'custom_popover',
                mode: 'ios'
            });
            return yield popover.present();
        });
    }
};
RendidorPage.ctorParameters = () => [
    { type: _services_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
RendidorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rendidor',
        template: __webpack_require__(/*! raw-loader!./rendidor.page.html */ "./node_modules/raw-loader/index.js!./src/app/rendidor/rendidor.page.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], RendidorPage);



/***/ }),

/***/ "./src/app/rendidor/rendidor.router.module.ts":
/*!****************************************************!*\
  !*** ./src/app/rendidor/rendidor.router.module.ts ***!
  \****************************************************/
/*! exports provided: RendidorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendidorPageRoutingModule", function() { return RendidorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rendidor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rendidor.page */ "./src/app/rendidor/rendidor.page.ts");




const routes = [
    {
        path: 'rendidor',
        component: _rendidor_page__WEBPACK_IMPORTED_MODULE_3__["RendidorPage"],
        children: [
            {
                path: 'gastos',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | gastos-gastos-module */[__webpack_require__.e("default~gastos-gastos-module~usuarios-usuarios-module"), __webpack_require__.e("common"), __webpack_require__.e("gastos-gastos-module")]).then(__webpack_require__.bind(null, /*! ./gastos/gastos.module */ "./src/app/rendidor/gastos/gastos.module.ts")).then(m => m.GastosPageModule)
                    }
                ]
            },
            {
                path: 'informe',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | informe-informe-module */ "informe-informe-module").then(__webpack_require__.bind(null, /*! ./informe/informe.module */ "./src/app/rendidor/informe/informe.module.ts")).then(m => m.InformePageModule)
                    }
                ]
            },
            {
                path: 'galeria',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | galeria-galeria-module */[__webpack_require__.e("common"), __webpack_require__.e("galeria-galeria-module")]).then(__webpack_require__.bind(null, /*! ./galeria/galeria.module */ "./src/app/rendidor/galeria/galeria.module.ts")).then(m => m.GaleriaPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'gastos',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/rendidor/gastos',
        pathMatch: 'full'
    }
];
let RendidorPageRoutingModule = class RendidorPageRoutingModule {
};
RendidorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RendidorPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=rendidor-rendidor-module-es2015.js.map