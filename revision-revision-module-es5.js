(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["revision-revision-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/aprobador/revision/revision.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aprobador/revision/revision.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/aprobador/revision/revision.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/aprobador/revision/revision.module.ts ***!
  \*******************************************************/
/*! exports provided: RevisionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionPageModule", function() { return RevisionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _revision_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revision.page */ "./src/app/aprobador/revision/revision.page.ts");







var routes = [
    {
        path: '',
        component: _revision_page__WEBPACK_IMPORTED_MODULE_6__["RevisionPage"]
    }
];
var RevisionPageModule = /** @class */ (function () {
    function RevisionPageModule() {
    }
    RevisionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_revision_page__WEBPACK_IMPORTED_MODULE_6__["RevisionPage"]]
        })
    ], RevisionPageModule);
    return RevisionPageModule;
}());



/***/ }),

/***/ "./src/app/aprobador/revision/revision.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/aprobador/revision/revision.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fwcm9iYWRvci9yZXZpc2lvbi9yZXZpc2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/aprobador/revision/revision.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/aprobador/revision/revision.page.ts ***!
  \*****************************************************/
/*! exports provided: RevisionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionPage", function() { return RevisionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");




var RevisionPage = /** @class */ (function () {
    function RevisionPage(popoverController) {
        this.popoverController = popoverController;
    }
    RevisionPage.prototype.ngOnInit = function () {
    };
    RevisionPage.prototype.popoverPerfil = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilPopover"],
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
    RevisionPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    RevisionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-revision',
            template: __webpack_require__(/*! raw-loader!./revision.page.html */ "./node_modules/raw-loader/index.js!./src/app/aprobador/revision/revision.page.html"),
            styles: [__webpack_require__(/*! ./revision.page.scss */ "./src/app/aprobador/revision/revision.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], RevisionPage);
    return RevisionPage;
}());



/***/ })

}]);
//# sourceMappingURL=revision-revision-module-es5.js.map