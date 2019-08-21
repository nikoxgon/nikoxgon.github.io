(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["galeria-galeria-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rendidor/galeria/galeria.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rendidor/galeria/galeria.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>galeria</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-item detail button *ngFor=\"let g of galeria\" (click)=\"verDetalle(g)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/images/no_image.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        {{ g.descripcion }}\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button tooltip=\"Tomar Foto\" placement=\"left\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button tooltip=\"Adjuntar\" placement=\"left\">\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/rendidor/galeria/galeria.module.ts":
/*!****************************************************!*\
  !*** ./src/app/rendidor/galeria/galeria.module.ts ***!
  \****************************************************/
/*! exports provided: GaleriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaPageModule", function() { return GaleriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _detalle_detalle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle/detalle.page */ "./src/app/rendidor/galeria/detalle/detalle.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _galeria_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./galeria.page */ "./src/app/rendidor/galeria/galeria.page.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");









var routes = [
    {
        path: '',
        component: _galeria_page__WEBPACK_IMPORTED_MODULE_7__["GaleriaPage"]
    }
];
var GaleriaPageModule = /** @class */ (function () {
    function GaleriaPageModule() {
    }
    GaleriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]
            ],
            entryComponents: [_detalle_detalle_page__WEBPACK_IMPORTED_MODULE_1__["DetallePage"]],
            declarations: [_galeria_page__WEBPACK_IMPORTED_MODULE_7__["GaleriaPage"], _detalle_detalle_page__WEBPACK_IMPORTED_MODULE_1__["DetallePage"]]
        })
    ], GaleriaPageModule);
    return GaleriaPageModule;
}());



/***/ }),

/***/ "./src/app/rendidor/galeria/galeria.page.scss":
/*!****************************************************!*\
  !*** ./src/app/rendidor/galeria/galeria.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmRpZG9yL2dhbGVyaWEvZ2FsZXJpYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rendidor/galeria/galeria.page.ts":
/*!**************************************************!*\
  !*** ./src/app/rendidor/galeria/galeria.page.ts ***!
  \**************************************************/
/*! exports provided: Galerias, GaleriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galerias", function() { return Galerias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaPage", function() { return GaleriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _detalle_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle/detalle.page */ "./src/app/rendidor/galeria/detalle/detalle.page.ts");




var Galerias = [
    {
        image: 'assets/images/no_image.png',
        descripcion: 'Boleta Combustible'
    },
    {
        image: 'assets/images/no_image.png',
        descripcion: 'Boleta Almuerzo Lunes'
    },
];
var GaleriaPage = /** @class */ (function () {
    function GaleriaPage(modalController) {
        this.modalController = modalController;
    }
    GaleriaPage.prototype.ngOnInit = function () {
        this.galeria = Galerias;
    };
    GaleriaPage.prototype.verDetalle = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detalle_detalle_page__WEBPACK_IMPORTED_MODULE_3__["DetallePage"],
                            componentProps: item
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GaleriaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
    ]; };
    GaleriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-galeria',
            template: __webpack_require__(/*! raw-loader!./galeria.page.html */ "./node_modules/raw-loader/index.js!./src/app/rendidor/galeria/galeria.page.html"),
            styles: [__webpack_require__(/*! ./galeria.page.scss */ "./src/app/rendidor/galeria/galeria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], GaleriaPage);
    return GaleriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=galeria-galeria-module-es5.js.map