(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["informe-informe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/informe/informe.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/informe/informe.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>informe</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Informe de Gastos</ion-title>\n      <ion-buttons slot=\"end\" mode=\"ios\">\n        <ion-button tooltip=\"Filtrar\" container=\"body\" mode=\"ios\" >\n          <ion-ripple-effect></ion-ripple-effect>\n          Todos\n          <ion-icon name=\"funnel\" slot=\"end\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n  <ion-list>\n    <ion-item detail button *ngFor=\"let i of informes\" (click)=\"modalEditar(i)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/no_image.png\" *ngIf=\"!i.mage\">\n        <img src=\"assets/images/{{i.image}}.png\" *ngIf=\"i.image\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ i.titulo }}</h2>\n        <p>{{ i.nota }}</p>\n      </ion-label>\n      <ion-chip slot=\"end\" outline *ngIf=\"i.estado === 1\" color=\"success\">\n        Listo para Enviar\n      </ion-chip> \n      <ion-chip slot=\"end\" outline *ngIf=\"i.estado === 2\" color=\"danger\">\n        Pendiente \n      </ion-chip> \n      \n      &nbsp;\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" tooltip=\"crear\" placement=\"left\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/rendidor/informe/informe.module.ts":
/*!****************************************************!*\
  !*** ./src/app/rendidor/informe/informe.module.ts ***!
  \****************************************************/
/*! exports provided: InformePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformePageModule", function() { return InformePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _informe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informe.page */ "./src/app/rendidor/informe/informe.page.ts");







const routes = [
    {
        path: '',
        component: _informe_page__WEBPACK_IMPORTED_MODULE_6__["InformePage"]
    }
];
let InformePageModule = class InformePageModule {
};
InformePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_informe_page__WEBPACK_IMPORTED_MODULE_6__["InformePage"]]
    })
], InformePageModule);



/***/ }),

/***/ "./src/app/rendidor/informe/informe.page.scss":
/*!****************************************************!*\
  !*** ./src/app/rendidor/informe/informe.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmRpZG9yL2luZm9ybWUvaW5mb3JtZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/rendidor/informe/informe.page.ts":
/*!**************************************************!*\
  !*** ./src/app/rendidor/informe/informe.page.ts ***!
  \**************************************************/
/*! exports provided: Informes, InformePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Informes", function() { return Informes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformePage", function() { return InformePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const Informes = [{
        titulo: 'Informe 1',
        estado: 1,
        nota: 'Informe Agosto 2019'
    }, {
        titulo: 'Informe 2',
        estado: 2
    }];
let InformePage = class InformePage {
    constructor() { }
    ngOnInit() {
        this.informes = Informes;
    }
};
InformePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./informe.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/informe/informe.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./informe.page.scss */ "./src/app/rendidor/informe/informe.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InformePage);



/***/ })

}]);
//# sourceMappingURL=informe-informe-module-es2015.js.map