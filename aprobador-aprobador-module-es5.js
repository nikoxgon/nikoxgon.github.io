(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aprobador-aprobador-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/aprobador/aprobador.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aprobador/aprobador.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs (ionTabsWillChange)=\"changeTab($event)\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-title>Rinde Rapido - {{ title }}</ion-title>\r\n        <ion-buttons slot=\"primary\">\r\n          <ion-button [routerLink]=\"['fondos/nuevo']\" container=\"body\" tooltip=\"Nuevo fondo\" placement=\"bottom\" *ngIf=\"tab === 'fondos'\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button [routerLink]=\"['usuarios/nuevo']\" container=\"body\" tooltip=\"Nuevo Usuario\" placement=\"bottom\" *ngIf=\"tab === 'usuarios'\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button (click)=\"popoverPerfil()\" container=\"body\" tooltip=\"Cambiar perfil\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            Administrador\r\n            <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-tab-bar slot=\"top\" color=\"primary\">\r\n      <ion-tab-button *ngFor=\"let m of menus\" [tab]=\"m.path\" >\r\n        <ion-icon *ngIf=\"m.iconType === 'custom'\" [src]=\"m.icon\"></ion-icon>\r\n        <ion-icon *ngIf=\"m.iconType === 'ionic'\" [name]=\"m.icon\"></ion-icon>\r\n        <ion-label>{{ m.title }}</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  \r\n  </ion-tabs>\r\n  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _aprobador_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aprobador.router.module */ "./src/app/aprobador/aprobador.router.module.ts");
/* harmony import */ var _aprobador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aprobador.page */ "./src/app/aprobador/aprobador.page.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");








var AprobadorPageModule = /** @class */ (function () {
    function AprobadorPageModule() {
    }
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
    return AprobadorPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");




var ROUTES = [
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
var AprobadorPage = /** @class */ (function () {
    function AprobadorPage(popoverController) {
        this.popoverController = popoverController;
        this.title = '';
        this.tab = '';
        this.menus = ROUTES;
    }
    AprobadorPage.prototype.changeTab = function (e) {
        this.tab = e.tab;
        this.title = e.tab.charAt(0).toUpperCase() + e.tab.slice(1);
    };
    AprobadorPage.prototype.popoverPerfil = function (ev) {
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
    AprobadorPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    AprobadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aprobador',
            template: __webpack_require__(/*! raw-loader!./aprobador.page.html */ "./node_modules/raw-loader/index.js!./src/app/aprobador/aprobador.page.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], AprobadorPage);
    return AprobadorPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aprobador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aprobador.page */ "./src/app/aprobador/aprobador.page.ts");




var routes = [
    {
        path: 'aprobador',
        component: _aprobador_page__WEBPACK_IMPORTED_MODULE_3__["AprobadorPage"],
        children: [
            {
                path: 'revision',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | revision-revision-module */ "revision-revision-module").then(__webpack_require__.bind(null, /*! ./revision/revision.module */ "./src/app/aprobador/revision/revision.module.ts")).then(function (m) { return m.RevisionPageModule; });
                }
            },
            {
                path: 'historial',
                loadChildren: function () {
                    return Promise.all(/*! import() | historial-historial-module */[__webpack_require__.e("common"), __webpack_require__.e("historial-historial-module")]).then(__webpack_require__.bind(null, /*! ./historial/historial.module */ "./src/app/aprobador/historial/historial.module.ts")).then(function (m) { return m.HistorialPageModule; });
                }
            }
        ]
    },
    {
        path: '',
        redirectTo: 'aprobador/revision',
        pathMatch: 'full'
    }
];
var AprobadorPageRoutingModule = /** @class */ (function () {
    function AprobadorPageRoutingModule() {
    }
    AprobadorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AprobadorPageRoutingModule);
    return AprobadorPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=aprobador-aprobador-module-es5.js.map