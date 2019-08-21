(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrador-administrador-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/administrador/administrador.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/administrador/administrador.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs (ionTabsWillChange)=\"changeTab($event)\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Rinde Rapido - {{ title }}</ion-title>\r\n      <ion-buttons slot=\"primary\">\r\n        <ion-button [routerLink]=\"['fondos/nuevo']\" container=\"body\" tooltip=\"Nuevo fondo\" placement=\"bottom\" *ngIf=\"tab === 'fondos'\">\r\n          <ion-ripple-effect></ion-ripple-effect>\r\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button [routerLink]=\"['usuarios/nuevo']\" container=\"body\" tooltip=\"Nuevo Usuario\" placement=\"bottom\" *ngIf=\"tab === 'usuarios'\">\r\n          <ion-ripple-effect></ion-ripple-effect>\r\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button (click)=\"popoverPerfil()\" container=\"body\" tooltip=\"Cambiar perfil\">\r\n          <ion-ripple-effect></ion-ripple-effect>\r\n          Administrador\r\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-tab-bar slot=\"top\" color=\"primary\" >\r\n    <ion-tab-button *ngFor=\"let m of menus\" [tab]=\"m.path\" >\r\n      <ion-icon *ngIf=\"m.iconType === 'custom'\" [src]=\"m.icon\"></ion-icon>\r\n      <ion-icon *ngIf=\"m.iconType === 'ionic'\" [name]=\"m.icon\"></ion-icon>\r\n      <ion-label>{{ m.title }}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/administrador/administrador.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/administrador/administrador.module.ts ***!
  \*******************************************************/
/*! exports provided: AdministradorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorPageModule", function() { return AdministradorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _administrador_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrador.router.module */ "./src/app/administrador/administrador.router.module.ts");
/* harmony import */ var _administrador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrador.page */ "./src/app/administrador/administrador.page.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");








var AdministradorPageModule = /** @class */ (function () {
    function AdministradorPageModule() {
    }
    AdministradorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _administrador_router_module__WEBPACK_IMPORTED_MODULE_5__["AdministradorPageRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
            ],
            declarations: [_administrador_page__WEBPACK_IMPORTED_MODULE_6__["AdministradorPage"]]
        })
    ], AdministradorPageModule);
    return AdministradorPageModule;
}());



/***/ }),

/***/ "./src/app/administrador/administrador.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/administrador/administrador.page.ts ***!
  \*****************************************************/
/*! exports provided: ROUTES, AdministradorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorPage", function() { return AdministradorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");




var ROUTES = [
    {
        path: 'usuarios',
        title: 'Usuarios',
        iconType: 'custom',
        icon: 'assets/icons/users-solid.svg'
    },
    {
        path: 'fondos',
        title: 'Fondos',
        iconType: 'custom',
        icon: 'assets/icons/wallet-solid.svg'
    }
];
var AdministradorPage = /** @class */ (function () {
    function AdministradorPage(popoverController) {
        this.popoverController = popoverController;
        this.title = '';
        this.tab = '';
        this.menus = ROUTES;
    }
    AdministradorPage.prototype.changeTab = function (e) {
        this.tab = e.tab;
        this.title = e.tab.charAt(0).toUpperCase() + e.tab.slice(1);
    };
    AdministradorPage.prototype.popoverPerfil = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPopover"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdministradorPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    AdministradorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-administrador',
            template: __webpack_require__(/*! raw-loader!./administrador.page.html */ "./node_modules/raw-loader/index.js!./src/app/administrador/administrador.page.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], AdministradorPage);
    return AdministradorPage;
}());



/***/ }),

/***/ "./src/app/administrador/administrador.router.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/administrador/administrador.router.module.ts ***!
  \**************************************************************/
/*! exports provided: AdministradorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorPageRoutingModule", function() { return AdministradorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _administrador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrador.page */ "./src/app/administrador/administrador.page.ts");




var routes = [
    {
        path: 'administrador',
        component: _administrador_page__WEBPACK_IMPORTED_MODULE_3__["AdministradorPage"],
        children: [
            {
                path: 'usuarios',
                loadChildren: function () {
                    return Promise.all(/*! import() | usuarios-usuarios-module */[__webpack_require__.e("default~gastos-gastos-module~usuarios-usuarios-module"), __webpack_require__.e("usuarios-usuarios-module")]).then(__webpack_require__.bind(null, /*! ./usuarios/usuarios.module */ "./src/app/administrador/usuarios/usuarios.module.ts")).then(function (m) { return m.UsuariosPageModule; });
                }
            },
            {
                path: 'fondos',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | fondos-fondos-module */ "fondos-fondos-module").then(__webpack_require__.bind(null, /*! ./fondos/fondos.module */ "./src/app/administrador/fondos/fondos.module.ts")).then(function (m) { return m.FondosPageModule; });
                }
            }
        ]
    },
    {
        path: '',
        redirectTo: 'administrador/usuarios',
        pathMatch: 'full'
    }
];
var AdministradorPageRoutingModule = /** @class */ (function () {
    function AdministradorPageRoutingModule() {
    }
    AdministradorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdministradorPageRoutingModule);
    return AdministradorPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=administrador-administrador-module-es5.js.map