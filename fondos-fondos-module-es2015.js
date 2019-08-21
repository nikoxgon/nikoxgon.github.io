(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fondos-fondos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/administrador/fondos/fondos.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/administrador/fondos/fondos.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row align-items-center>\r\n      <ion-col size=\"6\" offset=\"3\">\r\n        <ion-card>\r\n          <ion-item lines=\"full\">\r\n            <ion-icon name=\"square\" slot=\"start\" color=\"success\" tooltip=\"Estado\" container=\"body\"></ion-icon>\r\n            <ion-label tooltip=\"Nombre del fondo\" container=\"body\">Fondo Nº1 </ion-label>\r\n            <ion-label slot=\"end\" color=\"success\" tooltip=\"Saldo\" container=\"body\">$100.000</ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\" tooltip=\"Ver/Editar\" container=\"body\">Ver</ion-button>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"full\">\r\n            <ion-icon name=\"square\" slot=\"start\" color=\"warning\"></ion-icon>\r\n            <ion-label>\r\n              <h3>Fondo Nº2</h3>\r\n              <h5>Saldo: 10.000</h5>\r\n            </ion-label>\r\n            <ion-label slot=\"end\" color=\"success\">SALDO</ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\">Ver</ion-button>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"full\">\r\n            <ion-icon name=\"square\" slot=\"start\" color=\"danger\"></ion-icon>\r\n            <ion-label>\r\n              <h3>Fondo Nº3</h3>\r\n              <h5>Saldo: 0</h5>\r\n            </ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\">Ver</ion-button>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFkb3IvZm9uZG9zL2ZvbmRvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administrador/fondos/fondos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/administrador/fondos/fondos.page.ts ***!
  \*****************************************************/
/*! exports provided: FondosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FondosPage", function() { return FondosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FondosPage = class FondosPage {
    constructor() { }
    ngOnInit() {
    }
};
FondosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fondos',
        template: __webpack_require__(/*! raw-loader!./fondos.page.html */ "./node_modules/raw-loader/index.js!./src/app/administrador/fondos/fondos.page.html"),
        styles: [__webpack_require__(/*! ./fondos.page.scss */ "./src/app/administrador/fondos/fondos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FondosPage);



/***/ })

}]);
//# sourceMappingURL=fondos-fondos-module-es2015.js.map