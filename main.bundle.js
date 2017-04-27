webpackJsonp([1,4],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = (function () {
    function StoreService() {
        this.clls = [];
    }
    StoreService.prototype.addCell = function (cell) {
        this.clls.push(cell);
    };
    StoreService.prototype.loadState = function () {
        var _this = this;
        for (var j = 0; j < 24; j++) {
            var days = [];
            for (var i = 1; i < 32; i++) {
                days.push({ day: {
                        title: 'Oct ' + i,
                        option: j
                    }
                });
            }
            this.clls.push({ days: days, hour: j });
        }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observable) {
            setTimeout(function () {
                observable.next(_this.clls);
                observable.complete();
            }, 1000);
        });
    };
    StoreService.prototype.newStateData = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (o) {
            setTimeout(function () {
                for (var j = 0; j < 24; j++) {
                    for (var i = 0; i < 31; i++) {
                        _this.clls[j].days[i].day.option = Math.floor(Math.random() * 5);
                    }
                }
                o.next(_this.clls);
                o.complete();
            }, 1000);
        });
    };
    StoreService.prototype.searchAllCells = function () {
        for (var i = 0; i < this.clls.length; i++) {
            this.clls[i].cellClicked();
        }
    };
    StoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], StoreService);
    return StoreService;
}());
//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(403);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2 Performance Demo';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(461),
            styles: [__webpack_require__(457)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_calendar_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_cell_calendar_cell_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__calendar_cell_calendar_cell_component__["a" /* CalendarCellComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__store_service__["a" /* StoreService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var CalendarCellComponent = (function () {
    /**
     * Creates an instance of CalendarCellComponent.
     * @param {StoreService} store
     *
     * @memberOf CalendarCellComponent
     */
    function CalendarCellComponent(store) {
        this.store = store;
        /**
         *
         *
         * @private
         * @type {boolean}
         * @memberOf CalendarCellComponent
         */
        this.isPure = true;
        /**
         *
         *
         * @private
         *
         * @memberOf CalendarCellComponent
         */
        this.status = {
            isSearching: false,
            searchResults: {
                options: null
            }
        };
        /**
         *
         *
         * @private
         * @type {boolean}
         * @memberOf CalendarCellComponent
         */
        this.isSearching = false;
        //this.store.addCell({day: this.day, hour: this.hour});
    }
    ;
    CalendarCellComponent.prototype.ngOnInit = function () {
        //  this.store.addCell({day: this.day, hour: this.hour});
    };
    CalendarCellComponent.prototype.ngOnChanges = function (value) {
        // console.log('value', value);
    };
    /**
     *
     *
     *
     * @memberOf CalendarCellComponent
     */
    CalendarCellComponent.prototype.cellClicked = function () {
        var _this = this;
        var alreadySearching = this.status.isSearching;
        this.status.searchResults.options = null;
        this.status.isSearching = !alreadySearching;
        if (!alreadySearching) {
            // Simulate an AJAX request:
            var randomMillis = function () {
                return Math.floor(Math.random() * 500);
            };
            this.isSearching = true;
            setTimeout(function () {
                _this.status.isSearching = false;
                _this.status.searchResults.options = Math.floor(Math.random() * 5);
            }, randomMillis());
        }
        ;
    };
    ;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberOf CalendarCellComponent
     */
    CalendarCellComponent.prototype.showSpinner = function () {
        return this.status.isSearching;
    };
    ;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberOf CalendarCellComponent
     */
    CalendarCellComponent.prototype.hideSpinner = function () {
        return !this.status.isSearching;
    };
    ;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberOf CalendarCellComponent
     */
    CalendarCellComponent.prototype.showTime = function () {
        return !this.status.isSearching && this.status.searchResults.options === null;
    };
    ;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberOf CalendarCellComponent
     */
    CalendarCellComponent.prototype.showSearchResults = function () {
        return !this.status.isSearching && this.status.searchResults.options !== null;
    };
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], CalendarCellComponent.prototype, "hour", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], CalendarCellComponent.prototype, "option", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CalendarCellComponent.prototype, "day", void 0);
    CalendarCellComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'calendar-cell',
            template: __webpack_require__(462),
            styles: [__webpack_require__(458)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === 'function' && _a) || Object])
    ], CalendarCellComponent);
    return CalendarCellComponent;
    var _a;
}());
;
//# sourceMappingURL=calendar-cell.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = (function () {
    function CalendarComponent(store) {
        // this.store.loadState().subscribe(r => {
        //   console.log('constructor: ',r);
        //   // this.cells = r;
        this.store = store;
        this.days = [];
        this.hours = [];
        this.isLoaded = false;
        this.cells = [];
        //   // r.slice(0, 31).forEach(d => this.days.push(d.day));
        //   // for(let j = 0; j < 24; j++) {
        //   //    this.hours.push(j);
        //   // }
        // });
    }
    CalendarComponent.prototype.load = function () {
        var _this = this;
        this.isLoaded = true;
        this.store.loadState().subscribe(function (r) {
            console.log('constructor: ', r);
            _this.cells = r;
            // r.slice(0, 31).forEach(d => this.days.push(d.day));
            // for(let j = 0; j < 24; j++) {
            //    this.hours.push(j);
            // }
        });
    };
    CalendarComponent.prototype.searchAll = function () {
        var _this = this;
        this.store.newStateData().subscribe(function (r) {
            _this.cells = r;
            console.log(r);
        });
        //this.store.searchAllCells();
    };
    CalendarComponent.prototype.dayHeaderClicked = function () {
        alert('dayHeaderClicked()');
    };
    ;
    CalendarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__(463),
            styles: [__webpack_require__(459)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */]) === 'function' && _a) || Object])
    ], CalendarComponent);
    return CalendarComponent;
    var _a;
}());
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)();
// imports


// module
exports.push([module.i, "\r\n  .searching {\r\n    color: blue;\r\n    font-size: 10px;\r\n    padding-top: 6px;\r\n  }\r\n  .goodresults {\r\n    color: #090;\r\n    background: #efffef;\r\n  }\r\n\r\n  .result-label {\r\n    font-size: 8px;\r\n  }\r\n\r\n  .weakresults {\r\n    color: orange;\r\n    background: #ffffef;\r\n  }\r\n\r\n  .badresults {\r\n    color: red;\r\n    background: #ffefef;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)();
// imports


// module
exports.push([module.i, "  table {\r\n    border-right: 2px solid gray;\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n  }\r\n  .day-header {\r\n    border: 1px solid gray;\r\n    white-space: nowrap\r\n  }\r\n\r\n  .day-header:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .hour-cell {\r\n    width: 120px;\r\n    text-align: center;\r\n    border-left: 1px solid gray;\r\n    border-bottom: 1px solid #eee;\r\n    cursor: pointer;\r\n    height: 30px;\r\n    padding: 0;\r\n  }\r\n\r\n  .hour-cell > div {\r\n    height: 100%;\r\n  }\r\n\r\n  .hour-cell .time {\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .hour-cell .searching {\r\n    color: blue;\r\n    font-size: 12px;\r\n    padding-top: 12px;\r\n  }\r\n\r\n  .hour-cell .good-results {\r\n    color: #090;\r\n    background: #efffef;\r\n  }\r\n\r\n  .hour-cell .weak-results {\r\n    color: orange;\r\n    background: #ffffef;\r\n  }\r\n\r\n  .hour-cell .bad-results {\r\n    color: red;\r\n    background: #ffefef;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align:center\">\n  {{title}}\n</h1>\n<app-calendar></app-calendar>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<div\r\n  [class.goodresults]=\"hour!=option && option > 3\"\r\n  [class.weakresults]=\"hour!=option && option >= 1 && option <= 3\"\r\n  [class.badresults]=\"hour!=option && option == 0\"\r\n  [class.searching]=\"status.isSearching\"\r\n  >\r\n  <div *ngIf=\"showSpinner()\">\r\n    ...\r\n  </div>\r\n  <div *ngIf=\"hour==option\" (click)=\"cellClicked()\" class=\"time\">\r\n    {{hour}}:00\r\n  </div>\r\n  <div *ngIf=\"hour!=option\">\r\n    <div>{{option}}</div>\r\n    <div class=\"result-label\">results</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\" class=\"calendar\">\r\n <button class=\"btn\" *ngIf=\"!isLoaded\" (click)=\"load()\">Load</button>\r\n <button class=\"btn\" *ngIf=\"isLoaded\"  (click)=\"searchAll()\">Generate Random Values</button>\r\n <table *ngIf=\"isLoaded\">\r\n  <tr *ngFor=\"let hour of cells\">\r\n   <td *ngFor=\"let day of hour.days\" class=\"hour-cell\">\r\n     <calendar-cell [hour]=\"hour.hour\" [option]=\"day.day.option\" [day]=\"day.day.title\"></calendar-cell>\r\n   </td>\r\n  </tr>\r\n </table>\r\n</div>\r\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[476]);
//# sourceMappingURL=main.bundle.js.map