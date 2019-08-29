(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rendidor-rendidor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/rendidor.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/rendidor.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs  (ionTabsWillChange)=\"changeTab($event)\" mode=\"ios\">\n  <ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\" mode=\"ios\" >\n        <ion-buttons slot=\"start\" >\n          <ion-button (click)=\"popoverPerfil($event)\" container=\"body\" tooltip=\"Cambiar perfil\">\n              <ion-ripple-effect></ion-ripple-effect>\n            Rendidor\n            <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n            <ion-icon slot=\"end\" name=\"arrow-dropdown\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <!-- <ion-img src=\"assets/logo.png\"></ion-img> -->\n        <!-- <img src=\"assets/logo.png\" >  -->\n      <ion-title style=\"\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: contain; \n      background-image: url('assets/logo.png') !important;\"> \n      </ion-title>\n      <ion-buttons slot=\"end\" >\n        <ion-button  container=\"body\" tooltip=\"Menu\">\n            <ion-ripple-effect></ion-ripple-effect>\n          Nicolas\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"arrow-dropdown\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-tab-bar slot=\"top\" color=\"primary\" mode=\"ios\">\n    <ion-tab-button *ngFor=\"let m of menus\" [tab]=\"m.path\" layout=\"icon-start\" mode=\"ios\">\n      <ion-icon *ngIf=\"m.iconType === 'custom'\" [src]=\"m.icon\"></ion-icon>\n      <ion-icon *ngIf=\"m.iconType === 'ionic'\" [name]=\"m.icon\"></ion-icon>\n      <ion-label mode=\"ios\"> \n        &nbsp; {{ m.title }}\n        <ion-badge *ngIf=\"m.badge\" color=\"danger\" mode=\"ios\">{{ m.badge }}</ion-badge>\n      </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

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
        title: 'Informes',
        iconType: 'custom',
        icon: 'assets/icons/file-invoice-dollar-solid.svg',
        badge: 2
    },
    {
        path: 'galeria',
        title: 'Galeria',
        iconType: 'custom',
        icon: 'assets/icons/images-solid.svg',
        badge: 4
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rendidor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/rendidor.page.html")).default
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
                        loadChildren: () => Promise.all(/*! import() | gastos-gastos-module */[__webpack_require__.e("common"), __webpack_require__.e("gastos-gastos-module")]).then(__webpack_require__.bind(null, /*! ./gastos/gastos.module */ "./src/app/rendidor/gastos/gastos.module.ts")).then(m => m.GastosPageModule)
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