(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-historial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/aprobador/historial/historial.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aprobador/historial/historial.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <ion-list *ngIf=\"platform === 'mobile'\">\r\n    <ion-item detail lines=\"full\" *ngFor=\"let i of list\">\r\n      <ion-label>\r\n        <h6> <b>Documento:</b>  {{ i.documento }}</h6>\r\n        <h6> <b>Fecha env &nbsp;:</b>  {{ i.fecha }} </h6>\r\n        <h6> <b>Monto dco &nbsp;:</b> {{ i.aprobado }}/{{ i.total }} </h6>\r\n      </ion-label>\r\n      <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"i.estado === 'cerrado'\">Cerrado</ion-badge>\r\n      <ion-badge slot=\"end\" color=\"success\" *ngIf=\"i.estado === 'abierta'\">Abierta</ion-badge>\r\n      <ion-badge slot=\"end\" color=\"warning\" *ngIf=\"i.estado === 'pendiente'\">Pendiente</ion-badge>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n</ion-content>"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fwcm9iYWRvci9oaXN0b3JpYWwvaGlzdG9yaWFsLnBhZ2Uuc2NzcyJ9 */"

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
                estado: 'cerrado',
                documento: '10000',
                fecha: '01/01/2019',
                total: '10000',
                aprobado: '10000'
            },
            {
                estado: 'pendiente',
                documento: '10001',
                fecha: '01/01/2019',
                total: '10000',
                aprobado: '10000'
            },
            {
                estado: 'abierta',
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
        template: __webpack_require__(/*! raw-loader!./historial.page.html */ "./node_modules/raw-loader/index.js!./src/app/aprobador/historial/historial.page.html"),
        styles: [__webpack_require__(/*! ./historial.page.scss */ "./src/app/aprobador/historial/historial.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"]])
], HistorialPage);



/***/ })

}]);
//# sourceMappingURL=historial-historial-module-es2015.js.map