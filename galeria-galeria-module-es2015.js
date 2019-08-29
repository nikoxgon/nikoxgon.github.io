(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["galeria-galeria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/galeria/galeria.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/galeria/galeria.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>galeria</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"4\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let g of galeria\">\n\n        <ion-card button (click)=\"verDetalle(g)\" mode=\"ios\">\n\n          <img src=\"assets/images/no_image.png\">\n          <ion-card-header>\n            <ion-card-subtitle style=\"white-space: nowrap; text-overflow: ellipsis;  overflow: hidden;\" tooltip=\"{{ g.descripcion }}\">\n              {{ g.descripcion }}\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button tooltip=\"Tomar Foto\" placement=\"left\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button tooltip=\"Adjuntar\" placement=\"left\">\n        <ion-icon name=\"attach\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _galeria_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./galeria.page */ "./src/app/rendidor/galeria/galeria.page.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");









const routes = [
    {
        path: '',
        component: _galeria_page__WEBPACK_IMPORTED_MODULE_7__["GaleriaPage"]
    }
];
let GaleriaPageModule = class GaleriaPageModule {
};
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



/***/ }),

/***/ "./src/app/rendidor/galeria/galeria.page.scss":
/*!****************************************************!*\
  !*** ./src/app/rendidor/galeria/galeria.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmRpZG9yL2dhbGVyaWEvZ2FsZXJpYS5wYWdlLnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _detalle_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle/detalle.page */ "./src/app/rendidor/galeria/detalle/detalle.page.ts");




const Galerias = [
    {
        image: 'assets/images/no_image.png',
        descripcion: 'Boleta Combustible'
    },
    {
        image: 'assets/images/no_image.png',
        descripcion: 'Boleta Almuerzo Lunes'
    },
    {
        image: 'assets/images/no_image.png',
        descripcion: 'Boleta Almuerzo Lunes Boleta Almuerzo Lunes'
    },
    {
        image: 'assets/images/no_image.png',
        descripcion: 'Boleta Almuerzo Lunes Boleta Almuerzo Lunes Boleta Almuerzo Lunes Boleta Almuerzo Lunes'
    },
];
let GaleriaPage = class GaleriaPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        this.galeria = Galerias;
    }
    verDetalle(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _detalle_detalle_page__WEBPACK_IMPORTED_MODULE_3__["DetallePage"],
                componentProps: item
            });
            return yield modal.present();
        });
    }
};
GaleriaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
];
GaleriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-galeria',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./galeria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rendidor/galeria/galeria.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./galeria.page.scss */ "./src/app/rendidor/galeria/galeria.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
], GaleriaPage);



/***/ })

}]);
//# sourceMappingURL=galeria-galeria-module-es2015.js.map