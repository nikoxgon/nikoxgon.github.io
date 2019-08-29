(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aprobador-aprobador-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aprobador/aprobador.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aprobador/aprobador.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs (ionTabsWillChange)=\"changeTab($event)\">\n  <ion-header mode=\"ios\">\n    <ion-toolbar color=\"primary\" mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"popoverPerfil($event)\" container=\"body\" tooltip=\"Cambiar perfil\">\n          <ion-ripple-effect></ion-ripple-effect>\n          Aprobador\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"arrow-dropdown\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <!-- <ion-img src=\"assets/logo.png\"></ion-img> -->\n      <!-- <img src=\"assets/logo.png\" >  -->\n      <ion-title style=\"\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain; \n          background-image: url('assets/logo.png') !important;\">\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button container=\"body\" tooltip=\"Menu\">\n          <ion-ripple-effect></ion-ripple-effect>\n          Nicolas\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"arrow-dropdown\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-tab-bar slot=\"top\" color=\"primary\">\n    <ion-tab-button *ngFor=\"let m of menus\" [tab]=\"m.path\">\n      <ion-icon *ngIf=\"m.iconType === 'custom'\" [src]=\"m.icon\"></ion-icon>\n      <ion-icon *ngIf=\"m.iconType === 'ionic'\" [name]=\"m.icon\"></ion-icon>\n      <ion-label>{{ m.title }}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/aprobador/aprobador.module.ts":
/*!***********************************************!*\
  !*** ./src/app/aprobador/aprobador.module.ts ***!
  \***********************************************/
/*! exports provided: AprobadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprobadorPageModule", function() { return AprobadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _aprobador_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aprobador.router.module */ "./src/app/aprobador/aprobador.router.module.ts");
/* harmony import */ var _aprobador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aprobador.page */ "./src/app/aprobador/aprobador.page.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");








let AprobadorPageModule = class AprobadorPageModule {
};
AprobadorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _aprobador_router_module__WEBPACK_IMPORTED_MODULE_5__["AprobadorPageRoutingModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
        ],
        declarations: [_aprobador_page__WEBPACK_IMPORTED_MODULE_6__["AprobadorPage"]]
    })
], AprobadorPageModule);



/***/ }),

/***/ "./src/app/aprobador/aprobador.page.ts":
/*!*********************************************!*\
  !*** ./src/app/aprobador/aprobador.page.ts ***!
  \*********************************************/
/*! exports provided: ROUTES, AprobadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprobadorPage", function() { return AprobadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");




const ROUTES = [
    {
        path: 'revision',
        title: 'Revisión',
        iconType: 'custom',
        icon: 'assets/icons/file-signature-solid.svg'
    },
    {
        path: 'historial',
        title: 'Historial',
        iconType: 'custom',
        icon: 'assets/icons/history-solid.svg'
    }
];
let AprobadorPage = class AprobadorPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.title = '';
        this.tab = '';
        this.menus = ROUTES;
    }
    changeTab(e) {
        this.tab = e.tab;
        this.title = e.tab.charAt(0).toUpperCase() + e.tab.slice(1);
    }
    popoverPerfil(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPopover"],
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
};
AprobadorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
AprobadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aprobador',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aprobador.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aprobador/aprobador.page.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], AprobadorPage);



/***/ }),

/***/ "./src/app/aprobador/aprobador.router.module.ts":
/*!******************************************************!*\
  !*** ./src/app/aprobador/aprobador.router.module.ts ***!
  \******************************************************/
/*! exports provided: AprobadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprobadorPageRoutingModule", function() { return AprobadorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aprobador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aprobador.page */ "./src/app/aprobador/aprobador.page.ts");




const routes = [
    {
        path: 'aprobador',
        component: _aprobador_page__WEBPACK_IMPORTED_MODULE_3__["AprobadorPage"],
        children: [
            {
                path: 'revision',
                loadChildren: () => __webpack_require__.e(/*! import() | revision-revision-module */ "revision-revision-module").then(__webpack_require__.bind(null, /*! ./revision/revision.module */ "./src/app/aprobador/revision/revision.module.ts")).then(m => m.RevisionPageModule)
            },
            {
                path: 'historial',
                loadChildren: () => Promise.all(/*! import() | historial-historial-module */[__webpack_require__.e("common"), __webpack_require__.e("historial-historial-module")]).then(__webpack_require__.bind(null, /*! ./historial/historial.module */ "./src/app/aprobador/historial/historial.module.ts")).then(m => m.HistorialPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'aprobador/revision',
        pathMatch: 'full'
    }
];
let AprobadorPageRoutingModule = class AprobadorPageRoutingModule {
};
AprobadorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AprobadorPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=aprobador-aprobador-module-es2015.js.map