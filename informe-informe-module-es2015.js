(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["informe-informe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rendidor/informe/informe.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rendidor/informe/informe.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>informe</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-item detail button *ngFor=\"let i of informes\" (click)=\"modalEditar(i)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/images/no_image.png\" *ngIf=\"!i.mage\">\r\n        <img src=\"assets/images/{{i.image}}.png\" *ngIf=\"i.image\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{ i.titulo }}</h2>\r\n        <h3 *ngIf=\"!g.image\">\r\n          <ion-badge color=\"warning\">Sin foto</ion-badge>\r\n        </h3>\r\n        <h3 *ngIf=\"g.image\">\r\n          <ion-badge color=\"success\">Listo para informe</ion-badge>\r\n        </h3>\r\n        <p>{{ g.categoria }}</p>\r\n      </ion-label>\r\n      <ion-chip slot=\"end\" outline>\r\n        {{ g.monto }} CLP\r\n      </ion-chip> &nbsp;\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"danger\" tooltip=\"Menu\" placement=\"left\">\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </ion-fab-button>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"success\" tooltip=\"Filtrar\" placement=\"left\">\r\n        <ion-icon name=\"funnel\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button (click)=\"presentModal()\" color=\"success\" tooltip=\"Crear\" placement=\"left\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmRpZG9yL2luZm9ybWUvaW5mb3JtZS5wYWdlLnNjc3MifQ== */"

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
        nota: 'Informe Agosto 2019'
    }, {
        titulo: 'Informe 2',
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
        template: __webpack_require__(/*! raw-loader!./informe.page.html */ "./node_modules/raw-loader/index.js!./src/app/rendidor/informe/informe.page.html"),
        styles: [__webpack_require__(/*! ./informe.page.scss */ "./src/app/rendidor/informe/informe.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InformePage);



/***/ })

}]);
//# sourceMappingURL=informe-informe-module-es2015.js.map