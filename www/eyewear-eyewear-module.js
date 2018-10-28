(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eyewear-eyewear-module"],{

/***/ "./src/app/eyewear/eyewear.module.ts":
/*!*******************************************!*\
  !*** ./src/app/eyewear/eyewear.module.ts ***!
  \*******************************************/
/*! exports provided: EyewearPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyewearPageModule", function() { return EyewearPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _eyewear_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eyewear.page */ "./src/app/eyewear/eyewear.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EyewearPageModule = /** @class */ (function () {
    function EyewearPageModule() {
    }
    EyewearPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _eyewear_page__WEBPACK_IMPORTED_MODULE_5__["EyewearPage"] }])
            ],
            declarations: [_eyewear_page__WEBPACK_IMPORTED_MODULE_5__["EyewearPage"]],
            providers: []
        })
    ], EyewearPageModule);
    return EyewearPageModule;
}());



/***/ }),

/***/ "./src/app/eyewear/eyewear.page.html":
/*!*******************************************!*\
  !*** ./src/app/eyewear/eyewear.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n          <ion-title text-center justify-content-center><a href=\"\"  class=\"logo\">DITTO</a></ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content >\n    <ion-grid text-center padding margin class=\"container\">\n        <ion-row>\n            <ion-col size=\"12\" sizeSm=\"6\" justify-content-center>\n            <ion-img [src]=\"eyewearList[this.id].images.frontal\" padding></ion-img>\n          </ion-col>\n        <ion-col size=\"12\" sizeSm=\"6\" justify-content-center>\n            <ion-img [src]=\"eyewearList[this.id].images.side\" padding></ion-img>\n          </ion-col>\n      </ion-row>\n\n        <ion-row>\n            <ion-col size=\"12\" size-md justify-content-center>\n                <h1 class=\"hero\" [innerHTML]=\"eyewearList[this.id].brand\"></h1>\n                <p  class=\"subTitle\"  [innerHTML]=\"eyewearList[this.id].name\" no-margin></p>\n                <p  class=\"price\"  [innerHTML]=\"eyewearList[this.id].price | currency:'USD':true:'1.0-1'\" no-margin></p>\n            </ion-col>\n  \n        </ion-row>\n\n        <ion-row>\n            <ion-col text-left size=\"12\" sizeSm=\"6\" justify-content-center padding>\n                <ion-list>\n                    <p  class=\"paragraph\" [innerHTML]=\"eyewearList[this.id].description\"></p>\n                   </ion-list> \n            </ion-col>\n            <ion-col size=\"12\" sizeSm=\"6\" justify-content-center padding>\n                  <ion-list>\n                        \n                <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n                        <ion-item class=\"text\">Select Size</ion-item>      \n\n                        <ion-radio-group formControlName=\"sizes\">\n                            <ion-item *ngFor=\"let entry of eyewearList[this.id].sizes; let i = index\"  >\n                                <ion-radio class=\"radio\" color=\"dark\" value=\"{{entry}}\" required>\n                                </ion-radio> {{entry}}\n                            </ion-item>\n                         </ion-radio-group>\n             \n                            <ion-input formControlName=\"skuid\" type=\"hidden\" [value]=\"eyewearList['sku-id']\"></ion-input>\n                          \n                            <ion-input formControlName=\"price\" type=\"hidden\" [value]=\"eyewearList[this.id].price\"></ion-input>\n\n                        <ion-button size=\"full\" class=\"submit\" type=\"submit\" color=\"dark\" [disabled]=\"!form.valid\">BUY NOW</ion-button>\n                        <div *ngIf=\"form.controls.sizes.errors?.required && form.controls.sizes.touched\" class=\"error\">Please pick a size</div>\n                    </form>\n            </ion-list>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"12\" size-md justify-content-center>\n                <h1 class=\"SmallerHero\">Select Your Eyewear</h1>\n            </ion-col>\n        </ion-row>\n      <ion-row>\n       \n        <ion-col class=\"eyewear\" size=\"6\" size-md *ngFor=\"let eyewear of eyewearList; let i = index;\" (click)=\"onClick(i)\">\n            <div>  \n            <ion-img [src]=\"eyewear.images.frontal\" padding></ion-img>\n       \n            <h4  class=\"title\" [innerHTML]=\"eyewear.brand\" no-margin></h4>\n            <p  class=\"subTitle\"  [innerHTML]=\"eyewear.name\" no-margin></p>\n          </div>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n    \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/eyewear/eyewear.page.scss":
/*!*******************************************!*\
  !*** ./src/app/eyewear/eyewear.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eyewear/eyewear.page.ts":
/*!*****************************************!*\
  !*** ./src/app/eyewear/eyewear.page.ts ***!
  \*****************************************/
/*! exports provided: EyewearPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyewearPage", function() { return EyewearPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_eyewear_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/eyewear.service */ "./src/app/services/eyewear.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EyewearPage = /** @class */ (function () {
    function EyewearPage(router, route, eyewearService, formBuilder) {
        this.router = router;
        this.route = route;
        this.eyewearService = eyewearService;
        this.formBuilder = formBuilder;
        this.isClicked = [];
        this.today = new Date().toISOString();
    }
    EyewearPage.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.form = this.formBuilder.group({
            sizes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            skuid: [''],
            price: [''],
            datetime: [this.today]
        });
        this.eyewearService.getEyewear().subscribe(function (result) {
            _this.eyewear = { id: _this.id,
                skuid: result['eyewear'][_this.id]['sku-id'],
                sizes: result['eyewear'][_this.id].sizes,
                price: result['eyewear'][_this.id].price
            };
            _this.eyewearList = result['eyewear'];
            console.log(_this.eyewearList);
        });
        this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (terms) { _this.eyewearService.getEyewear(); console.log(terms); })).subscribe(function (value) { return value; });
    };
    EyewearPage.prototype.onClick = function (eyewearId) {
        this.isClicked[eyewearId] = (this.isClicked[eyewearId] ? false : true);
        this.router.navigate(['/eyewear/' + eyewearId]);
    };
    EyewearPage.prototype.submit = function () {
        this.form.value.price = this.eyewear.price;
        this.form.value.skuid = this.eyewear.skuid;
        if (this.form.valid) {
            this.eyewearService.postEyewear(this.form.value).subscribe(function (result) {
                console.log("POST Request is successful ", result);
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    EyewearPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eyewear',
            template: __webpack_require__(/*! ./eyewear.page.html */ "./src/app/eyewear/eyewear.page.html"),
            styles: [__webpack_require__(/*! ./eyewear.page.scss */ "./src/app/eyewear/eyewear.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_eyewear_service__WEBPACK_IMPORTED_MODULE_3__["EyewearService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EyewearPage);
    return EyewearPage;
}());



/***/ })

}]);
//# sourceMappingURL=eyewear-eyewear-module.js.map