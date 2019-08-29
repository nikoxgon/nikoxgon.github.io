(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-historial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aprobador/historial/historial.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aprobador/historial/historial.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-toolbar color=\"primary\">\n    <ion-title>Historial de Revision</ion-title>\n    <ion-buttons slot=\"end\" mode=\"ios\">\n      <ion-button tooltip=\"Filtrar\" container=\"body\" mode=\"ios\">\n        <ion-ripple-effect></ion-ripple-effect>\n        Julio 2019\n        <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-list >\n    <ion-item detail lines=\"full\" *ngFor=\"let i of list\">\n        <ion-chip slot=\"start\" outline *ngIf=\"i.estado === 1\" color=\"success\">\n             &nbsp;  Abierto &nbsp; &nbsp;\n        </ion-chip> \n        <ion-chip slot=\"start\" outline *ngIf=\"i.estado === 2\" color=\"warning\">\n          Pendiente &nbsp;\n        </ion-chip> \n        <ion-chip slot=\"start\" outline *ngIf=\"i.estado === 3\" color=\"danger\">\n          Rechazado \n        </ion-chip> \n      <ion-label>\n        <h2> {{ i.documento }}</h2>\n        <p> {{ i.fecha }} </p>\n        <h6> <b>Monto dco &nbsp;:</b> {{ i.aprobado }}/{{ i.total }} </h6>\n      </ion-label>\n      <ion-chip slot=\"end\" outline >\n        {{ i.aprobado}} / {{ i.total }} CLP\n      </ion-chip> \n    </ion-item>\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/aprobador/historial/historial.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/aprobador/historial/historial.module.ts ***!
  \*********************************************************/
/*! exports provided: HistorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historial.page */ "./src/app/aprobador/historial/historial.page.ts");







const routes = [
    {
        path: '',
        component: _historial_page__WEBPACK_IMPORTED_MODULE_6__["HistorialPage"]
    }
];
let HistorialPageModule = class HistorialPageModule {
};
HistorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_6__["HistorialPage"]]
    })
], HistorialPageModule);



/***/ }),

/***/ "./src/app/aprobador/historial/historial.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/aprobador/historial/historial.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fwcm9iYWRvci9oaXN0b3JpYWwvaGlzdG9yaWFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/aprobador/historial/historial.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/aprobador/historial/historial.page.ts ***!
  \*******************************************************/
/*! exports provided: HistorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPage", function() { return HistorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/platform.service */ "./src/app/services/platform.service.ts");



let HistorialPage = class HistorialPage {
    constructor(plt) {
        this.plt = plt;
        this.list = [
            {
                estado: 3,
                documento: '10000',
                fecha: '01/01/2019',
                total: '10000',
                aprobado: '10000'
            },
            {
                estado: 2,
                documento: '10001',
                fecha: '01/01/2019',
                total: '10000',
                aprobado: '10000'
            },
            {
                estado: 1,
                documento: '10002',
                fecha: '01/01/2019',
                total: '10000',
                aprobado: '10000'
            }
        ];
    }
    ngOnInit() {
        this.platform = this.plt.getPlatform();
    }
};
HistorialPage.ctorParameters = () => [
    { type: src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"] }
];
HistorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./historial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aprobador/historial/historial.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./historial.page.scss */ "./src/app/aprobador/historial/historial.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"]])
], HistorialPage);



/***/ })

}]);
//# sourceMappingURL=historial-historial-module-es2015.js.map