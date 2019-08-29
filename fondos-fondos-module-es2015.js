(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fondos-fondos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/administrador/fondos/fondos.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrador/fondos/fondos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-toolbar color=\"primary\">\n    <ion-title>Fondos</ion-title>\n    <ion-buttons slot=\"end\" mode=\"ios\">\n      <ion-button tooltip=\"Filtrar\" container=\"body\" mode=\"ios\">\n        <ion-ripple-effect></ion-ripple-effect>\n        Habilitados\n        <ion-icon name=\"funnel\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-list mode=\"ios\">\n    <ion-item detail button *ngFor=\"let g of fondos\" (click)=\"modalEditar(g)\" mode=\"ios\">\n      <ion-label mode=\"ios\">\n        {{ g.proveedor }}\n      </ion-label>\n      <ion-chip slot=\"end\" outline mode=\"ios\" color=\"success\">\n        {{ g.monto | number: '1.0-2': 'es-CL' }} CLP\n      </ion-chip> &nbsp;\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" tooltip=\"Crear\" placement=\"left\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/administrador/fondos/fondos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/administrador/fondos/fondos.module.ts ***!
  \*******************************************************/
/*! exports provided: FondosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FondosPageModule", function() { return FondosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fondos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fondos.page */ "./src/app/administrador/fondos/fondos.page.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");








const routes = [
    {
        path: '',
        component: _fondos_page__WEBPACK_IMPORTED_MODULE_6__["FondosPage"]
    }
];
let FondosPageModule = class FondosPageModule {
};
FondosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
        ],
        declarations: [_fondos_page__WEBPACK_IMPORTED_MODULE_6__["FondosPage"]]
    })
], FondosPageModule);



/***/ }),

/***/ "./src/app/administrador/fondos/fondos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/administrador/fondos/fondos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFkb3IvZm9uZG9zL2ZvbmRvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/administrador/fondos/fondos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/administrador/fondos/fondos.page.ts ***!
  \*****************************************************/
/*! exports provided: Fondos, FondosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fondos", function() { return Fondos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FondosPage", function() { return FondosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const Fondos = [{
        proveedor: 'Fondo 1',
        fecha: '01/08/2019',
        monto: 10000,
        documento: 100001,
        rut: '11.111.111-1',
        tipodoc: 1,
        categoria_id: 1,
        categoria: 'Alimentacion'
    }, {
        proveedor: 'Fondo 2',
        fecha: '01/08/2019',
        image: 'no_image',
        monto: 20000,
        documento: 100001,
        rut: '11.111.111-1',
        tipodoc: 1,
        categoria: 'Combustible',
        categoria_id: 2
    }];
let FondosPage = class FondosPage {
    constructor() { }
    ngOnInit() {
        this.fondos = Fondos;
    }
};
FondosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fondos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fondos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/administrador/fondos/fondos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fondos.page.scss */ "./src/app/administrador/fondos/fondos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FondosPage);



/***/ })

}]);
//# sourceMappingURL=fondos-fondos-module-es2015.js.map