webpackJsonp([1,5],{

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handle = function (error) {
        var message;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json();
            var payload = body.error || JSON.stringify(body);
            message = error.status + " - " + (error.statusText || '') + " " + payload;
        }
        else {
            message = error.message
                ? error.message + " (" + (error.stack || 'no stack') + ")"
                : error + " (no stack)";
        }
        console.warn(message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(message);
    };
    return ErrorHandler;
}());
ErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ErrorHandler);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/error.handler.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeersService = (function () {
    function BeersService(httpHandler, errorHandler) {
        this.httpHandler = httpHandler;
        this.errorHandler = errorHandler;
    }
    BeersService.prototype.load = function () {
        return this.httpHandler
            .get('../../assets/json/beers.json')
            .map(function (response) {
            var body = response.json();
            return body.data || {};
        })
            .catch(this.errorHandler.handle);
    };
    BeersService.prototype.search = function (term) {
        return this.httpHandler
            .get('../../assets/json/beers.json')
            .map(function (response) {
            var body = response.json();
            var results = body.data;
            return results.filter(function (p) { return p.name.includes(term); });
        })
            .catch(this.errorHandler.handle);
    };
    return BeersService;
}());
BeersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__["a" /* ErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__["a" /* ErrorHandler */]) === "function" && _b || Object])
], BeersService);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beers.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreweriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreweriesService = (function () {
    function BreweriesService(httpHandler, errorHandler) {
        this.httpHandler = httpHandler;
        this.errorHandler = errorHandler;
        // Cors not supported by design by brewerydb, fallback to local files for now 
        //this.searchUrl = " http://api.brewerydb.com/v2/search?type=brewery&q=orval rochefort duvel chimay westvleteren achouffe&key=7a194532948c7877bd1815276dd7d070";
        //this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }
    BreweriesService.prototype.load = function () {
        return this.httpHandler
            .get('../../assets/json/breweries.json')
            .map(function (response) {
            var body = response.json();
            return body.data || {};
        })
            .catch(this.errorHandler.handle);
    };
    return BreweriesService;
}());
BreweriesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__["a" /* ErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__["a" /* ErrorHandler */]) === "function" && _b || Object])
], BreweriesService);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/breweries.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerListComponent = (function () {
    function BeerListComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.beers = [];
    }
    BeerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            _this.term = p["q"] || "";
            var beers = _this.service.load()
                .subscribe(function (beers) {
                if (_this.term && _this.term.length > 0)
                    _this.beers = beers
                        .filter(function (p) { return p.name.toLowerCase().includes(_this.term.toLowerCase()); })
                        .sort(function (a, b) { return a.name.localeCompare(b.name); });
                else
                    _this.beers = beers.sort(function (a, b) { return a.name.localeCompare(b.name); });
            }, function (error) {
                console.error(error);
            });
        });
    };
    return BeerListComponent;
}());
BeerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'beer-list',
        template: __webpack_require__(711),
        styles: [__webpack_require__(698)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__["a" /* BeersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__["a" /* BeersService */]) === "function" && _c || Object])
], BeerListComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beer-list.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_breweries_service__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreweriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreweriesComponent = (function () {
    function BreweriesComponent(service) {
        this.service = service;
    }
    BreweriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var breweries = this.service.load().subscribe(function (breweries) {
            _this.breweries = breweries.filter(function (p) { return p.established; });
        }, function (error) {
            console.error(error);
        });
    };
    return BreweriesComponent;
}());
BreweriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-breweries',
        template: __webpack_require__(712)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_breweries_service__["a" /* BreweriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_breweries_service__["a" /* BreweriesService */]) === "function" && _a || Object])
], BreweriesComponent);

var _a;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/breweries.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(713),
        styles: [__webpack_require__(699)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/about.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlossaryComponent = (function () {
    function GlossaryComponent() {
    }
    GlossaryComponent.prototype.ngOnInit = function () {
    };
    return GlossaryComponent;
}());
GlossaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-glossary',
        template: __webpack_require__(715),
        styles: [__webpack_require__(701)]
    }),
    __metadata("design:paramtypes", [])
], GlossaryComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/glossary.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title = "Home";
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(717),
        styles: [__webpack_require__(703)]
    })
], HomeComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/home.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LostComponent = (function () {
    function LostComponent() {
    }
    LostComponent.prototype.ngOnInit = function () {
    };
    return LostComponent;
}());
LostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-lost',
        template: __webpack_require__(718)
    }),
    __metadata("design:paramtypes", [])
], LostComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/lost.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_options__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mason_grid_options__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_colcade__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_colcade___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_colcade__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MasonGridComponent = (function () {
    function MasonGridComponent(element) {
        this.element = element;
        this.colcade = null;
    }
    MasonGridComponent.prototype.ngOnInit = function () {
        if (!this.options) {
            this.options = {};
        }
        if (!this.options.columns) {
            this.options.columns = '[colcade-grid-col], colcade-grid-col';
        }
        if (!this.options.items) {
            this.options.items = '[colcade-grid-item], colcade-grid-item';
        }
        this.colcade = new __WEBPACK_IMPORTED_MODULE_2_colcade__(this.element.nativeElement, this.options);
    };
    MasonGridComponent.prototype.ngAfterViewInit = function () {
        console.log('afterviewinit');
    };
    MasonGridComponent.prototype.ngOnDestroy = function () {
        if (this.colcade) {
            this.colcade.destroy();
        }
    };
    MasonGridComponent.prototype.append = function (element) {
        console.log('append');
        this.colcade.append(element);
    };
    return MasonGridComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mason_grid_options__["MasonGridOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mason_grid_options__["MasonGridOptions"]) === "function" && _a || Object)
], MasonGridComponent.prototype, "options", void 0);
MasonGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: '[colcade-grid], colcade-grid',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object])
], MasonGridComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/mason-grid.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TermSearched */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerSearched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BrewerySearched; });
var TermSearched = (function () {
    function TermSearched(term) {
        this.term = term;
    }
    return TermSearched;
}());

var BeerSearched = (function () {
    function BeerSearched(term) {
        this.term = term;
    }
    return BeerSearched;
}());

var BrewerySearched = (function () {
    function BrewerySearched(term) {
        this.term = term;
    }
    return BrewerySearched;
}());

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search.events.js.map

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beers.models.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(527);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/main.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_events_search_events__ = __webpack_require__(348);
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
    function AppComponent(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("app is initialized");
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_2__shared_events_search_events__["a" /* BeerSearched */], function (response) {
            console.info("BeerSearched: " + response.term);
        });
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_2__shared_events_search_events__["b" /* BrewerySearched */], function (response) {
            console.info("BrewerySearched: " + response.term);
        });
        this.eventAggregator.subscribe("termSearched", function (response) {
            console.info("TermSearched: " + response.term);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(708)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__breweries_breweries_module__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__beers_beers_module__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_exceptions_error_handler__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_beers_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_aurelia_event_aggregator__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_breweries_service__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__breweries_breweries_module__["a" /* BreweriesModule */],
            __WEBPACK_IMPORTED_MODULE_9__beers_beers_module__["a" /* BeersModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__shared_exceptions_error_handler__["a" /* ErrorHandler */],
            __WEBPACK_IMPORTED_MODULE_13__shared_services_breweries_service__["a" /* BreweriesService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_beers_service__["a" /* BeersService */],
            __WEBPACK_IMPORTED_MODULE_12_aurelia_event_aggregator__["EventAggregator"]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_lost_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_about_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breweries_breweries_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beers_beer_list_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_glossary_component__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });






var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__layout_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__layout_about_component__["a" /* AboutComponent */] },
    { path: 'glossary', component: __WEBPACK_IMPORTED_MODULE_5__layout_glossary_component__["a" /* GlossaryComponent */] },
    { path: 'breweries', component: __WEBPACK_IMPORTED_MODULE_3__breweries_breweries_component__["a" /* BreweriesComponent */] },
    { path: 'beers', component: __WEBPACK_IMPORTED_MODULE_4__beers_beer_list_component__["a" /* BeerListComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__layout_lost_component__["a" /* LostComponent */] }
];
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app.routes.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerCardComponent = (function () {
    function BeerCardComponent() {
    }
    BeerCardComponent.prototype.ngOnInit = function () {
    };
    return BeerCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__["BeerData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__["BeerData"]) === "function" && _a || Object)
], BeerCardComponent.prototype, "beer", void 0);
BeerCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'beer-card',
        template: __webpack_require__(709),
        styles: [__webpack_require__(696)],
    }),
    __metadata("design:paramtypes", [])
], BeerCardComponent);

var _a;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beer-card.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_colcade__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_colcade___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_colcade__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerCardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeerCardsComponent = (function () {
    function BeerCardsComponent(element) {
        this.element = element;
        this.colcade = null;
    }
    BeerCardsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log('ngOnChanges');
        this.hidden = true;
        setTimeout(function (p) {
            _this.arrange();
            _this.hidden = false;
        }, 0);
    };
    BeerCardsComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    BeerCardsComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
    };
    BeerCardsComponent.prototype.arrange = function () {
        if (!this.colcade) {
            var options = {
                columns: ".grid-col",
                items: ".grid-item",
            };
            //var grid = this.mygrid.nativeElement;
            var grid = this.element.nativeElement.querySelector('.grid');
            this.colcade = new __WEBPACK_IMPORTED_MODULE_2_colcade__(grid, options);
        }
        else {
            this.colcade.reload();
        }
    };
    return BeerCardsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__["BeerData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_beers_models__["BeerData"]) === "function" && _a || Object)
], BeerCardsComponent.prototype, "beers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewChild */])('myGrid'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object)
], BeerCardsComponent.prototype, "mygrid", void 0);
BeerCardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'beer-cards',
        template: __webpack_require__(710),
        styles: [__webpack_require__(697)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _c || Object])
], BeerCardsComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beer-cards.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_mason_mason_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_cards_cards_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beer_list_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beer_cards_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beer_card_component__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BeersModule = (function () {
    function BeersModule() {
    }
    return BeersModule;
}());
BeersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_components_mason_mason_module__["a" /* MasonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_components_cards_cards_module__["a" /* CardsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__beer_list_component__["a" /* BeerListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__beer_cards_component__["a" /* BeerCardsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__beer_card_component__["a" /* BeerCardComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__beer_list_component__["a" /* BeerListComponent */]
        ],
        providers: []
    })
], BeersModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beers.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breweries_component__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreweriesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BreweriesModule = (function () {
    function BreweriesModule() {
    }
    return BreweriesModule;
}());
BreweriesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__breweries_component__["a" /* BreweriesComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__breweries_component__["a" /* BreweriesComponent */]
        ],
        providers: []
    })
], BreweriesModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/breweries.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.lastUpdate = new Date();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(714),
        styles: [__webpack_require__(700)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/footer.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(716),
        styles: [__webpack_require__(702)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/header.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_module__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lost_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__glossary_component__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__search_search_module__["a" /* SearchModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lost_component__["a" /* LostComponent */],
            __WEBPACK_IMPORTED_MODULE_9__glossary_component__["a" /* GlossaryComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lost_component__["a" /* LostComponent */],
            __WEBPACK_IMPORTED_MODULE_9__glossary_component__["a" /* GlossaryComponent */],
        ]
    })
], LayoutModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/layout.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_breweries_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_beers_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_events_search_events__ = __webpack_require__(348);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SearchComponent = (function () {
    function SearchComponent(router, eventAggregator, breweriesService, beersService) {
        this.router = router;
        this.eventAggregator = eventAggregator;
        this.breweriesService = breweriesService;
        this.beersService = beersService;
        this.terms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.terms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) {
            var temp = term
                ? _this.beersService.search(term)
                : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
            return temp;
        })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        })
            .subscribe(function (results) {
            console.log("Found: " + results.length);
            _this.results = results;
        });
    };
    SearchComponent.prototype.search = function (term) {
        this.terms.next(term);
        this.eventAggregator.publish(new __WEBPACK_IMPORTED_MODULE_12__shared_events_search_events__["a" /* BeerSearched */](term));
        this.eventAggregator.publish(new __WEBPACK_IMPORTED_MODULE_12__shared_events_search_events__["b" /* BrewerySearched */](term));
        this.eventAggregator.publish("termSearched", {
            term: term
        });
        var options = {
            queryParams: {
                q: term
            }
        };
        this.router.navigate(["/beers"], options);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(719)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__["EventAggregator"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_breweries_service__["a" /* BreweriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_breweries_service__["a" /* BreweriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_beers_service__["a" /* BeersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_services_beers_service__["a" /* BeersService */]) === "function" && _d || Object])
], SearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_component__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__search_component__["a" /* SearchComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__search_component__["a" /* SearchComponent */]
        ],
        providers: []
    })
], SearchModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_colcade__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_colcade___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_colcade__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardsComponent = (function () {
    function CardsComponent(element) {
        this.element = element;
        this.colcade = null;
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.hidden = true;
        setTimeout(function (p) {
            _this.arrange();
            _this.hidden = false;
        }, 0);
    };
    CardsComponent.prototype.arrange = function () {
        if (!this.colcade) {
            var options = {
                columns: ".grid-col",
                items: ".grid-item",
            };
            //var grid = this.mygrid.nativeElement;
            var grid = this.element.nativeElement.querySelector('.grid');
            this.colcade = new __WEBPACK_IMPORTED_MODULE_1_colcade__(grid, options);
        }
        else {
            this.colcade.reload();
        }
    };
    return CardsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Object)
], CardsComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */]) === "function" && _a || Object)
], CardsComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewChild */])('myGrid'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object)
], CardsComponent.prototype, "mygrid", void 0);
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-cards',
        template: __webpack_require__(720),
        styles: [__webpack_require__(704)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _c || Object])
], CardsComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/cards.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_component__ = __webpack_require__(538);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsModule = (function () {
    function CardsModule() {
    }
    return CardsModule;
}());
CardsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cards_component__["a" /* CardsComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cards_component__["a" /* CardsComponent */]
        ],
        providers: [],
    })
], CardsModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/cards.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonBrickDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MasonBrickDirective = (function () {
    function MasonBrickDirective(parent, element) {
        this.parent = parent;
        this.element = element;
    }
    MasonBrickDirective.prototype.ngAfterViewInit = function () {
        this.parent.append(this.element.nativeElement);
    };
    return MasonBrickDirective;
}());
MasonBrickDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
        selector: '[colcade-grid-item], colcade-grid-item'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object])
], MasonBrickDirective);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/mason-brick.directive.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonColumnDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MasonColumnDirective = (function () {
    function MasonColumnDirective() {
    }
    return MasonColumnDirective;
}());
MasonColumnDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
        selector: '[colcade-grid-col], colcade-grid-col'
    })
], MasonColumnDirective);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/mason-column.directive.js.map

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/mason-grid.options.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mason_column_directive__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mason_brick_directive__ = __webpack_require__(540);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MasonModule = (function () {
    function MasonModule() {
    }
    return MasonModule;
}());
MasonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */],
            __WEBPACK_IMPORTED_MODULE_2__mason_column_directive__["a" /* MasonColumnDirective */],
            __WEBPACK_IMPORTED_MODULE_3__mason_brick_directive__["a" /* MasonBrickDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */],
            __WEBPACK_IMPORTED_MODULE_2__mason_column_directive__["a" /* MasonColumnDirective */],
            __WEBPACK_IMPORTED_MODULE_3__mason_brick_directive__["a" /* MasonBrickDirective */]
        ]
    })
], MasonModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/mason.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/environment.js.map

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, ".card {\r\n    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    border: 1px rgba(0,0,0,0.1) solid;\r\n}\r\n\r\n.card:hover {\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    cursor: pointer;\r\n    background: rgba(0,0,0,0.1);\r\n    border: 1px rgba(0,0,0,0.1) solid;\r\n}\r\n\r\n.card .content {\r\n    padding: 2px 16px;\r\n}", "", {"version":3,"sources":["C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app/beers/beer-card.component.css"],"names":[],"mappings":"AAAA;IACI,4CAA4C;IAC5C,yBAAiB;IAAjB,iBAAiB;IACjB,kCAAkC;CACrC;;AAED;IACI,6CAA6C;IAC7C,gBAAgB;IAChB,4BAA4B;IAC5B,kCAAkC;CACrC;;AAED;IACI,kBAAkB;CACrB","file":"beer-card.component.css","sourcesContent":[".card {\r\n    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    border: 1px rgba(0,0,0,0.1) solid;\r\n}\r\n\r\n.card:hover {\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    cursor: pointer;\r\n    background: rgba(0,0,0,0.1);\r\n    border: 1px rgba(0,0,0,0.1) solid;\r\n}\r\n\r\n.card .content {\r\n    padding: 2px 16px;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "/* Add shadows to create the \"card\" effect */\r\n.card {\r\n    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.2);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    border: 1px rgba(0,0,0,0.1) solid;\r\n    padding: 2px 16px;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow */\r\n.card:hover {\r\n    box-shadow: 2px 8px 16px 2px rgba(0,0,0,0.2);\r\n    cursor: pointer;\r\n    background: rgba(0,0,0,0.1) \r\n}\r\n\r\n/* Add some padding inside the card container */\r\n.container {\r\n    padding: 2px 16px;\r\n}", "", {"version":3,"sources":["C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app/beers/beer-cards.component.css"],"names":[],"mappings":"AAAA,6CAA6C;AAC7C;IACI,4CAA4C;IAC5C,yBAAiB;IAAjB,iBAAiB;IACjB,kCAAkC;IAClC,kBAAkB;CACrB;;AAED,wCAAwC;AACxC;IACI,6CAA6C;IAC7C,gBAAgB;IAChB,2BAA2B;CAC9B;;AAED,gDAAgD;AAChD;IACI,kBAAkB;CACrB","file":"beer-cards.component.css","sourcesContent":["/* Add shadows to create the \"card\" effect */\r\n.card {\r\n    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    border: 1px rgba(0,0,0,0.1) solid;\r\n    padding: 2px 16px;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow */\r\n.card:hover {\r\n    box-shadow: 2px 8px 16px 2px rgba(0,0,0,0.2);\r\n    cursor: pointer;\r\n    background: rgba(0,0,0,0.1) \r\n}\r\n\r\n/* Add some padding inside the card container */\r\n.container {\r\n    padding: 2px 16px;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "\r\nimg.full {\r\n   max-width:100%;\r\n   max-height:100%;\r\n}\r\n\r\nimg.half {\r\n   max-width:50%;\r\n   max-height:50%;\r\n}\r\n\r\nimg.quorter {\r\n   max-width:25%;\r\n   max-height:25%;\r\n}", "", {"version":3,"sources":["C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app/beers/beer-list.component.css"],"names":[],"mappings":";AACA;GACG,eAAe;GACf,gBAAgB;CAClB;;AAED;GACG,cAAc;GACd,eAAe;CACjB;;AAED;GACG,cAAc;GACd,eAAe;CACjB","file":"beer-list.component.css","sourcesContent":["\r\nimg.full {\r\n   max-width:100%;\r\n   max-height:100%;\r\n}\r\n\r\nimg.half {\r\n   max-width:50%;\r\n   max-height:50%;\r\n}\r\n\r\nimg.quorter {\r\n   max-width:25%;\r\n   max-height:25%;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"about.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, ".navbar {\r\n    margin-bottom: 5px;\r\n    min-height: 20px;\r\n    border: 1px solid transparent;\r\n}", "", {"version":3,"sources":["C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app/layout/footer.component.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,8BAA8B;CACjC","file":"footer.component.css","sourcesContent":[".navbar {\r\n    margin-bottom: 5px;\r\n    min-height: 20px;\r\n    border: 1px solid transparent;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"glossary.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, ".app-hdr {\r\n    padding:1rem 0rem 0rem;\r\n}\r\n\r\n.app-hdr .brand {\r\n\r\n}\r\n\r\n.app-hdr h2 {\r\n    margin:0; padding:0;\r\n}\r\n\r\n.app-hdr .brand i {\r\n    font-size:24px; \r\n    cursor:pointer;\r\n}", "", {"version":3,"sources":["C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app/layout/header.component.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;CAC1B;;AAED;;CAEC;;AAED;IACI,SAAS,CAAC,UAAU;CACvB;;AAED;IACI,eAAe;IACf,eAAe;CAClB","file":"header.component.css","sourcesContent":[".app-hdr {\r\n    padding:1rem 0rem 0rem;\r\n}\r\n\r\n.app-hdr .brand {\r\n\r\n}\r\n\r\n.app-hdr h2 {\r\n    margin:0; padding:0;\r\n}\r\n\r\n.app-hdr .brand i {\r\n    font-size:24px; \r\n    cursor:pointer;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cards.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-sm-12\" class=\"box\">\r\n    {{beer.nameDisplay}}\r\n    <small>ABV: {{beer.abv}}</small>\r\n    <small>IBU: {{beer.ibu}}</small>\r\n    <small>Type: {{beer.style.name}}</small> \r\n    <small *ngIf=\"beer.description\">\r\n      {{beer.description}}\r\n    </small>\r\n</div>\r\n\r\n<!--<div class=\"col-sm-12\">\r\n  <h3>\r\n    <small>ABV: {{beer.abv}}</small>\r\n    <small>IBU: {{beer.ibu}}</small>\r\n    <small>Type: {{beer.style.name}}</small> {{beer.nameDisplay}}\r\n  </h3>\r\n</div>\r\n\r\n<div class=\"col-sm-4 col-xs-4\">\r\n  <p *ngIf=\"beer.labels\">\r\n    <img class=\"img-responsive center-block\" src=\"{{beer.labels.medium}}\" />\r\n  </p>\r\n  <p *ngIf=\"!beer.labels\">\r\n    <img class=\"img-responsive center-block\" src=\"../../assets/img/place_holder.png\" />\r\n  </p>\r\n</div>\r\n\r\n<div class=\"col-sm-8 col-xs-8\">\r\n  <p *ngIf=\"beer.description\">\r\n    {{beer.description}}\r\n  </p>\r\n  <p *ngIf=\"!beer.description\">\r\n    no description is provided\r\n  </p>\r\n  <div>\r\n    <div><small>Glass:</small> {{beer.glass?.name}}</div>\r\n    <div><small>Available:</small>{{beer.available?.description}}</div>\r\n    <div><small>Style Name</small>{{beer.style?.name}}</div>\r\n    <div><small>Style Short:</small>{{beer.style?.shortName}}</div>\r\n    <div><small>Style Category:</small>{{beer.style?.category?.name}}</div>\r\n    <div><small>Style Description:</small><i>{{beer.style?.description}}</i></div>\r\n\r\n    <div *ngFor=\"let brewery of beer.breweries\">\r\n      <div><small>Brewery Established:</small>{{brewery.established}}</div>\r\n      <div><small>Brewery Name:</small>{{brewery.name}}</div>\r\n      <div><small>Brewery Url:</small>{{brewery.website}}</div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n\r\n<!--\r\n    Name: {{beer.nameDisplay}} |\r\n    Type: {{beer.style.name}} |\r\n    ABV: {{beer.abv}} |\r\n    IBU: {{beer.ibu}} |\r\n    IBU Min: {{beer.style?.ibuMin}} |\r\n    IBU Max: {{beer.style?.ibuMax}} |\r\n    ABV Min: {{beer.style?.abvMin}} |\r\n    SRM Min: {{beer.style?.srmMin}} |\r\n    SRM Max: {{beer.style?.srmMax}} |\r\n    OG Min: {{beer.style?.ogMin}} |\r\n    FG Min: {{beer.style?.fgMin}} |\r\n    FG Max: {{beer.style?.fgMax}} |\r\n    Glass: {{beer.glass?.name}} |\r\n    Description: {{beer.description}} |\r\n    Availability: {{beer.available?.description}} |\r\n    Style Name: {{beer.style?.name}} |\r\n    Style Short: {{beer.style?.shortName}} |\r\n    Style Category: {{beer.style?.category?.name}} |\r\n    Style Description: {{beer.style?.description}}\r\n-->"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<!--<colcade-grid class=\"grid\">\r\n\r\n    <div colcade-grid-col class=\"grid-col grid-col--1\"></div>\r\n    <div colcade-grid-col class=\"grid-col grid-col--2\"></div>\r\n    <div colcade-grid-col class=\"grid-col grid-col--3\"></div>\r\n    <div colcade-grid-col class=\"grid-col grid-col--4\"></div>\r\n\r\n    <div colcade-grid-item class=\"grid-item\" *ngFor=\"let beer of beers\">\r\n        <beer-card [beer]=\"beer\"></beer-card>\r\n    </div>\r\n\r\n  </colcade-grid>-->\r\n\r\n<div #myGrid class=\"grid\">\r\n\r\n  <div class=\"grid-col grid-col--1\"></div>\r\n  <div class=\"grid-col grid-col--2\"></div>\r\n  <div class=\"grid-col grid-col--3\"></div>\r\n  <div class=\"grid-col grid-col--4\"></div>\r\n\r\n  <div class=\"grid-item card\" *ngFor=\"let beer of beers\" [style.display]=\"hidden ? 'none' : ''\">\r\n    <beer-card [beer]=\"beer\"></beer-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    Found: {{beers.length}}\r\n  </div>\r\n\r\n  <!--<beer-cards [beers]=\"beers\"></beer-cards>-->\r\n\r\n  <app-cards [items]=\"beers\">\r\n    <template let-item=\"item\">\r\n      <beer-card [beer]=\"item\"></beer-card>\r\n    </template>\r\n  </app-cards>\r\n\r\n</div>"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" *ngFor=\"let brewery of breweries\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-12\">\r\n      <h3>\r\n        <small>({{brewery.established}})</small>\r\n        <a href={{brewery.website}}>{{brewery.name}}</a>\r\n      </h3>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <p *ngIf=\"brewery.images\">\r\n        <img class=\"img-responsive center-block\" src=\"{{brewery.images.medium}}\" />\r\n      </p>\r\n      <p *ngIf=\"!brewery.images\">\r\n        <img class=\"img-responsive center-block\" src=\"../../assets/img/place_holder.png\" />\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <p *ngIf=\"brewery.description\">\r\n        {{brewery.description}}\r\n      </p>\r\n      <p *ngIf=\"!brewery.description\">\r\n        no description is provided\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4 text-center\">\r\n        <br><br>\r\n        <img alt=\"logo kiklos\" src=\"assets/img/beer_logo.png\">\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <h2>A better way to discover craft beer</h2>\r\n\r\n        <h3>Tag lines</h3>\r\n        <p>\r\n            BreweryDB is your database of breweries, beers, beer events and guilds! \r\n            Our service is just about the facts.\r\n        </p>\r\n        <p>\r\n            All of our data is curated by our administrators, so you can be sure that the information you get is timely and accurate\r\n            We are proud to be a small part of the Craft Beer revolution!\r\n        </p>\r\n\r\n        <h3>Built for Developers</h3>\r\n        <p>\r\n            BreweryDB was made by developers, for developers. \r\n        </p>\r\n        <p>\r\n            Our vast collection of data can be accessed via our free API. \r\n        </p>\r\n\r\n        <h3>What people are saying</h3>\r\n        <p>\r\n            A great project that aims to build an open database of breweries and beers \r\n            <small>(ProgrammableWeb)</small>\r\n        </p>\r\n        <p>\r\n            The IMDB of Breweries <small>(Tech Cocktail)</small>\r\n        </p>\r\n        <p>\r\n            Just discovered @brewerydb had an API #buildbuildbuild \r\n            <small>(@gideonco)</small>\r\n        </p>\r\n\r\n        <h3>Copyright</h3>\r\n        <p>\r\n            For more details <a href=\"http://www.brewerydb.com/\">visit</a>\r\n        </p>\r\n\r\n        <h3>Terms</h3>\r\n        <p>\r\n            For more details <a href=\"http://www.brewerydb.com/index/terms\">visit</a>\r\n        </p>\r\n\r\n        <h3>Disclaimer</h3>\r\n        <p>\r\n            BreweryDB makes every effort to be accurate in our data set. If something is wrong, you can often submit the change yourself\r\n        </p>\r\n        <p>\r\n            2012 Brewers Association Beer Style Guidelines used with permission of Brewers Association.\r\n        </p>\r\n        <p>\r\n            All images of breweries, beers, guilds, or events are properties of those entities. \r\n            If an image you hold the copyright to is on BreweryDB.com and you would like it not to be, we understand. \r\n            Even though it makes our database more complete, and in return provides free marketing and enhanced recognition for your brand, we will remove it\r\n        </p>\r\n        <p>\r\n            The initial set of data was taken from OpenBeerDB (www.openbeerdb.com) in 2010 which was released under the Open Database License (ODbL) \r\n            (http://www.opendatacommons.org/licenses/odbl/1.0/). \r\n            After the initial import of data, user submissions and updates are what make up the current data set.\r\n        </p>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-bottom\" role=\"navigation\">\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n          <p class=\"text-muted\">\r\n            <a routerLink=\"/about\">About</a>\r\n            <a routerLink=\"/glossary\">Glossary</a>\r\n            <a href=\"mailto:john.doe@gmail.com?Subject=Whaddup?\" target=\"_top\">\r\n              Contact us\r\n            </a>\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"hidden-xs col-sm-6 col-md-8 text-right\">\r\n          <p class=\"text-muted text-right\">\r\n            <span>Last update: {{lastUpdate | date}} </span>\r\n            |\r\n            <span class=\"hidden-xs\">Techday &copy;2017</span>\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</nav>"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-sm-12 text-center\">\r\n    <a routerLink=\"/breweries\" style=\"display: block\">\r\n      <img src=\"../../assets/img/beer-sign.jpg\" alt=\"beer ahead\">\r\n    </a>\r\n  </div>"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"row app-hdr\">\r\n\r\n    <!-- Brand -->\r\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-3 brand\">\r\n        <ul class=\"list-inline\">\r\n            <li>\r\n                <h2>\r\n                    <a routerLink=\"/\">Demo</a>\r\n                </h2>\r\n            </li>\r\n            <li>\r\n                <i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- Search -->\r\n    <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-7\">\r\n        <app-search></app-search>\r\n    </div>\r\n\r\n    <!-- Add -->\r\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\" style=\"padding-left:0px;\">\r\n        <ul class=\"list-inline\">\r\n            <li>\r\n                <div class=\"btn-group add-button\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"fa fa-plus\"></span> \r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                        <li><a id=\"addNewBeerLink\" href=\"#\">Beer</a></li>\r\n                        <li><a id=\"addNewBreweryLink\" href=\"#\">Brewery</a></li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<hr style=\"margin-top:0px;\" />"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-3 col-sm-2 col-xs-1\">\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-4 col-xs-5 text-center\">\r\n    <a routerLink=\"/breweries\" style=\"display: block\">\r\n      <img src=\"../../assets/img/beer_factory.png\" alt=\"Breweries\">\r\n    </a>\r\n    <h1>Breweries</h1>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-4 col-xs-5 text-center\">\r\n    <a routerLink=\"/beers\" style=\"display: block\">\r\n      <img src=\"../../assets/img/beer-glass.png\" alt=\"Breweries\">\r\n    </a>\r\n    <h1>Beers</h1>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-2 col-xs-1\">\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<h3>Page not found</h3>"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n\r\n  <!-- Types -->\r\n  <!--<div class=\"input-group-btn\">\r\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span id=\"searchIndexButton\">Beers</span> \r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n      <li><a id=\"beersSearchIndex\" href=\"#\">Beers</a></li>\r\n      <li><a id=\"breweriesSearchIndex\" href=\"#\">Breweries</a></li>\r\n    </ul>\r\n  </div>-->\r\n\r\n  <!-- Term -->\r\n  <input #searchBox id=\"queryField\" type=\"search\" class=\"form-control\" \r\n    placeholder=\"What in the name of Bachus do you need to know?\"\r\n    (keyup.enter)=\"search(searchBox.value)\">\r\n\r\n  <!-- Execute -->\r\n  <div class=\"input-group-btn\">\r\n    <button id=\"searchButton\" type=\"button\" class=\"btn btn-primary\" (click)=\"search(searchBox.value)\">\r\n      <i class=\"fa fa-search\"></i>\r\n      Search\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div #myGrid class=\"grid\">\r\n\r\n    <div class=\"grid-col grid-col--1\"></div>\r\n    <div class=\"grid-col grid-col--2\"></div>\r\n    <div class=\"grid-col grid-col--3\"></div>\r\n    <div class=\"grid-col grid-col--4\"></div>\r\n\r\n    <div class=\"grid-item\" *ngFor=\"let item of items\" [style.display]=\"hidden ? 'none' : ''\">\r\n        <template\r\n            [ngTemplateOutlet]=\"template\" \r\n            [ngOutletContext]=\"{ item: item }\">\r\n        </template>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[752]);
//# sourceMappingURL=main.bundle.js.map