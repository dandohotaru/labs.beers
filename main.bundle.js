webpackJsonp([1,5],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* unused harmony export SearchData */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.track = function (term) {
        var content = localStorage.getItem("search-history");
        var searches = content
            ? JSON.parse(content)
            : [];
        var search = searches.find(function (p) { return p.term == term; });
        if (search) {
            search.counter++;
        }
        else {
            search = {
                term: term,
                counter: 1,
            };
            searches.push(search);
        }
        localStorage["search-history"] = JSON.stringify(searches);
    };
    SearchService.prototype.query = function (options) {
        var content = localStorage.getItem("search-history");
        var searches = content
            ? JSON.parse(content)
            : [];
        searches = searches
            .sort(function (a, b) {
            return b.counter - a.counter;
        });
        if (options) {
            searches = searches.slice(0, options.size ? options.size : 5);
        }
        return searches;
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SearchService);

var SearchData = (function () {
    function SearchData() {
    }
    return SearchData;
}());

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beers_beers_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breweries_breweries_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_bar_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_results_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_history_component__ = __webpack_require__(562);
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
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__beers_beers_module__["a" /* BeersModule */],
            __WEBPACK_IMPORTED_MODULE_4__breweries_breweries_module__["a" /* BreweriesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_results_component__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__search_history_component__["a" /* SearchHistoryComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_results_component__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__search_history_component__["a" /* SearchHistoryComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__search_service__["a" /* SearchService */]
        ]
    })
], SearchModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search.module.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalService = (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (modal) {
        var index = this.modals.indexOf(modal);
        this.modals.splice(index, 1);
    };
    ModalService.prototype.open = function (modal) {
        modal.open();
    };
    ModalService.prototype.close = function (modal) {
        modal.close();
    };
    ModalService.prototype.submit = function (modal) {
        modal.submit();
    };
    ModalService.prototype.dismiss = function (modal) {
        modal.dismiss();
    };
    return ModalService;
}());
ModalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ModalService);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/modal.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermSearched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BeerSearched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BrewerySearched; });
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(256);
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

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__ = __webpack_require__(228);
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
            .get('./assets/json/beers.json')
            .map(function (response) {
            var body = response.json();
            return body.data || {};
        })
            .catch(this.errorHandler.handle);
    };
    BeersService.prototype.search = function (term) {
        return this.httpHandler
            .get('./assets/json/beers.json')
            .map(function (response) {
            var body = response.json();
            var results = body.data;
            if (term && term.length > 0) {
                var data = results.filter(function (p) {
                    var found = p.name && p.name.toLowerCase().includes(term.toLowerCase())
                        || p.description && p.description.toLowerCase().includes(term.toLowerCase());
                    return found;
                });
                return data;
            }
            return results;
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

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exceptions_error_handler__ = __webpack_require__(228);
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
        var options = {};
        return this.httpHandler
            .get('./assets/json/breweries.json')
            .map(function (response) {
            var body = response.json();
            return body.data || {};
        })
            .catch(this.errorHandler.handle);
    };
    BreweriesService.prototype.search = function (term) {
        return this.httpHandler
            .get('./assets/json/breweries.json')
            .map(function (response) {
            var body = response.json();
            var results = body.data;
            if (term && term.length > 0) {
                return results.filter(function (p) { return p.name.toLowerCase().includes(term.toLowerCase()); });
            }
            return results;
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__ = __webpack_require__(229);
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
        this.chunk = 4;
        this.cache = [];
        this.beers = [];
        this.images = true;
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BeerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            _this.term = p["q"] || "";
            var beers = _this.service
                .search(_this.term)
                .subscribe(function (beers) {
                var models = beers
                    .map(function (p) {
                    var beer = {
                        id: p.id,
                        name: p.nameDisplay,
                        style: p.style ? p.style.name : "N/A",
                        label: p.labels ? p.labels.medium : "./assets/img/beer-generic.jpg",
                        description: p.description ? p.description : "N/A",
                        abv: p.abv,
                        ibu: p.ibu,
                        favorite: false,
                    };
                    return beer;
                })
                    .sort(function (a, b) { return a.name.localeCompare(b.name); });
                _this.cache = models;
                _this.beers = models.slice(0, _this.chunk);
                _this.loaded.next({ found: _this.summary() });
            }, function (error) {
                console.error(error);
            });
        });
    };
    BeerListComponent.prototype.summary = function () {
        return this.beers.length + " / " + this.cache.length;
    };
    BeerListComponent.prototype.select = function (item) {
        this.selection = item;
    };
    BeerListComponent.prototype.scroll = function (event) {
        //console.log(`scrolled: ${event}`);
    };
    BeerListComponent.prototype.onScroll = function (event) {
        console.log(event.source);
        this.more();
    };
    BeerListComponent.prototype.more = function () {
        var start = this.beers.length;
        var end = this.beers.length + this.chunk;
        var slice = this.cache.slice(start, end);
        this.beers = this.beers.concat(slice);
        this.loaded.next({ found: this.summary() });
    };
    return BeerListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Boolean)
], BeerListComponent.prototype, "images", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], BeerListComponent.prototype, "loaded", void 0);
BeerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-beer-list',
        template: __webpack_require__(765),
        styles: [__webpack_require__(739)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__["a" /* BeersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__["a" /* BeersService */]) === "function" && _d || Object])
], BeerListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beer-list.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerModel; });
/* unused harmony export LegendModel */
/* unused harmony export ToggleModel */
var BeerModel = (function () {
    function BeerModel() {
    }
    return BeerModel;
}());

var LegendModel = (function () {
    function LegendModel() {
    }
    return LegendModel;
}());

var ToggleModel = (function () {
    function ToggleModel() {
    }
    return ToggleModel;
}());

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beer.models.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_pipes_pipes_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_components_cards_masonry1_mason_module__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_components_modal_modal_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_components_cards_colcade2_colcade_module__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_directives_scroll_window_scroll_directive__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__beer_list_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beer_card_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__beer_item_component__ = __webpack_require__(555);
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
            __WEBPACK_IMPORTED_MODULE_2_app_shared_pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_components_cards_masonry1_mason_module__["a" /* Masonry1Module */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_components_cards_colcade2_colcade_module__["a" /* ColcadeModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_components_modal_modal_module__["a" /* ModalModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__beer_list_component__["a" /* BeerListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__beer_card_component__["a" /* BeerCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__beer_item_component__["a" /* BeerItemComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_directives_scroll_window_scroll_directive__["a" /* WindowScrollDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__beer_list_component__["a" /* BeerListComponent */]
        ],
        providers: []
    })
], BeersModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beers.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_components_modal_modal_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_cards_colcade3_mason_module__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_cards_colcade1_cards_module__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brewery_list_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__brewery_card_component__ = __webpack_require__(556);
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
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_components_modal_modal_module__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_components_cards_colcade3_mason_module__["a" /* Colcade3Module */],
            __WEBPACK_IMPORTED_MODULE_6__shared_components_cards_colcade1_cards_module__["a" /* CardsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__brewery_list_component__["a" /* BreweryListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__brewery_card_component__["a" /* BreweryCardComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__brewery_list_component__["a" /* BreweryListComponent */]
        ],
        providers: []
    })
], BreweriesModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/breweries.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_breweries_service__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreweryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreweryListComponent = (function () {
    function BreweryListComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.breweries = [];
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BreweryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            _this.term = p["q"] || "";
            var breweries = _this.service
                .search(_this.term)
                .subscribe(function (breweries) {
                _this.breweries = breweries.filter(function (p) { return p.established; });
                _this.loaded.next({ found: _this.breweries.length });
            }, function (error) {
                console.error(error);
            });
        });
    };
    BreweryListComponent.prototype.select = function (item) {
        this.selection = item;
        console.log(this.selection.name);
    };
    return BreweryListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], BreweryListComponent.prototype, "loaded", void 0);
BreweryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-brewery-list',
        template: __webpack_require__(767)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_breweries_service__["a" /* BreweriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_breweries_service__["a" /* BreweriesService */]) === "function" && _d || Object])
], BreweryListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/brewery-list.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_components_modal_modal_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(modalService) {
        this.modalService = modalService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title = "Home";
        this.bodyText = 'This text can be updated in modal 1';
    };
    HomeComponent.prototype.openModal = function (modal) {
        this.modalService.open(modal);
    };
    HomeComponent.prototype.closeModal = function (modal) {
        this.modalService.close(modal);
    };
    HomeComponent.prototype.log = function (message) {
        console.log(message);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(768),
        styles: [__webpack_require__(741)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_components_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_components_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/home.component.js.map

/***/ }),

/***/ 359:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(769),
        styles: [__webpack_require__(742)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/about.component.js.map

/***/ }),

/***/ 360:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-glossary',
        template: __webpack_require__(771),
        styles: [__webpack_require__(744)]
    }),
    __metadata("design:paramtypes", [])
], GlossaryComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/glossary.component.js.map

/***/ }),

/***/ 361:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-lost',
        template: __webpack_require__(773)
    }),
    __metadata("design:paramtypes", [])
], LostComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/lost.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultsComponent = (function () {
    function SearchResultsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
    };
    return SearchResultsComponent;
}());
SearchResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-search-results',
        template: __webpack_require__(776)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], SearchResultsComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search-results.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrickDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrickDirective = (function () {
    function BrickDirective(element) {
        this.element = element;
    }
    return BrickDirective;
}());
BrickDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
        selector: 'app-brick'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _a || Object])
], BrickDirective);

var _a;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/brick.directive.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_masonry_layout__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_masonry_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_masonry_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall_options__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wall_options__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WallComponent = (function () {
    function WallComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.layoutComplete = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]();
        this.removeComplete = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]();
    }
    WallComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.options)
            this.options = {};
        if (!this.options.itemSelector) {
            this.options.itemSelector = 'masonry-brick';
        }
        if (!this.options.transitionDuration) {
            this.options.transitionDuration = '0.5s';
        }
        this.masonry = new __WEBPACK_IMPORTED_MODULE_0_masonry_layout__(this.element.nativeElement, this.options);
        this.masonry.on('layoutComplete', function (items) {
            _this.layoutComplete.emit(items);
        });
        this.masonry.on('removeComplete', function (items) {
            _this.removeComplete.emit(items);
        });
    };
    WallComponent.prototype.ngOnDestroy = function () {
        if (this.masonry) {
            this.masonry.destroy();
        }
    };
    WallComponent.prototype.layout = function () {
        var _this = this;
        setTimeout(function () {
            _this.masonry.layout();
        });
    };
    WallComponent.prototype.add = function (element) {
        var first = false;
        if (this.masonry.items.length == 0) {
            first = true;
        }
        this.masonry.appended(element);
        if (first)
            this.layout();
    };
    WallComponent.prototype.remove = function (element) {
        this.masonry.remove(element);
        this.layout();
    };
    return WallComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__wall_options__["WallOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wall_options__["WallOptions"]) === "function" && _a || Object)
], WallComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]) === "function" && _b || Object)
], WallComponent.prototype, "layoutComplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]) === "function" && _c || Object)
], WallComponent.prototype, "removeComplete", void 0);
WallComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Component */])({
        selector: 'masonry',
        template: __webpack_require__(781),
        styles: [__webpack_require__(750)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Renderer */]) === "function" && _e || Object])
], WallComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/wall.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatcherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WatcherService = (function () {
    function WatcherService() {
    }
    WatcherService.prototype.watch = function (element, handle) {
        // When HTML in brick changes dinamically, observe that and change layout
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            // Watch for any changes to subtree
            var self = this;
            var observer = new MutationObserver(function (mutations, observerFromElement) {
                handle();
            });
            // Define what element should be observed by the observer
            // Define what types of mutations trigger the callback
            observer.observe(element, {
                subtree: true,
                childList: true
            });
        }
    };
    return WatcherService;
}());
WatcherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WatcherService);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/watch.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselConfig = (function () {
    function CarouselConfig() {
        this.interval = 10000;
        this.wrap = true;
        this.keyboard = true;
    }
    return CarouselConfig;
}());
CarouselConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CarouselConfig);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/carousel.config.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var nextId = 0;
var SlideDirective = (function () {
    function SlideDirective(template) {
        this.template = template;
        this.id = "app-carousel-slide-" + nextId++;
    }
    return SlideDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Object)
], SlideDirective.prototype, "id", void 0);
SlideDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({ selector: 'template[app-carousel-slide]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */]) === "function" && _a || Object])
], SlideDirective);

var _a;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/slide.directive.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__modal_component__["a" /* ModalComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__modal_component__["a" /* ModalComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]],
    })
], ModalModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/modal.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truncate_pipe__ = __webpack_require__(370);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__truncate_pipe__["a" /* TruncateCharsPipe */],
            __WEBPACK_IMPORTED_MODULE_1__truncate_pipe__["b" /* TruncateWordsPipe */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__truncate_pipe__["a" /* TruncateCharsPipe */],
            __WEBPACK_IMPORTED_MODULE_1__truncate_pipe__["b" /* TruncateWordsPipe */]
        ],
        providers: [],
    })
], PipesModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/pipes.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateCharsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TruncateWordsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncateCharsPipe = (function () {
    function TruncateCharsPipe() {
    }
    TruncateCharsPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit
                ? trail + value.substring(value.length - limit, value.length)
                : value;
        }
        else {
            return value.length > limit
                ? value.substring(0, limit) + trail
                : value;
        }
    };
    return TruncateCharsPipe;
}());
TruncateCharsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
        name: 'truncate'
    })
], TruncateCharsPipe);

var TruncateWordsPipe = (function () {
    function TruncateWordsPipe() {
    }
    TruncateWordsPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        var result = value;
        if (value) {
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    return TruncateWordsPipe;
}());
TruncateWordsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
        name: 'words'
    })
], TruncateWordsPipe);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/truncate.pipe.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 425;


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(552);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/main.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_events_search_events__ = __webpack_require__(227);
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
    function AppComponent(router, eventAggregator, searchService) {
        this.router = router;
        this.eventAggregator = eventAggregator;
        this.searchService = searchService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("starting up");
        // Scroll
        this.routerSubscription = this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (event) {
            document.body.scrollTop = 0;
        });
        // Events
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_5__shared_events_search_events__["b" /* BeerSearched */], function (response) {
            console.info("BeerSearched: " + response.term);
        });
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_5__shared_events_search_events__["c" /* BrewerySearched */], function (response) {
            console.info("BrewerySearched: " + response.term);
        });
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_5__shared_events_search_events__["a" /* TermSearched */], function (response) {
            console.info("TermSearched: " + response.term);
            _this.searchService.track(response.term);
        });
        this.eventAggregator.subscribe("termSearched", function (response) {
            console.info("TermSearched: " + response.term);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.routerSubscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(762)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_aurelia_event_aggregator__["EventAggregator"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__search_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__search_search_service__["a" /* SearchService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_event_aggregator__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_layout_layout_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_home_home_module__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_search_search_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_breweries_breweries_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_beers_beers_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_exceptions_error_handler__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_shared_services_beers_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_search_search_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_shared_services_breweries_service__ = __webpack_require__(230);
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_8_app_layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_9_app_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_10_app_search_search_module__["a" /* SearchModule */],
            __WEBPACK_IMPORTED_MODULE_11_app_breweries_breweries_module__["a" /* BreweriesModule */],
            __WEBPACK_IMPORTED_MODULE_12_app_beers_beers_module__["a" /* BeersModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13_app_shared_exceptions_error_handler__["a" /* ErrorHandler */],
            __WEBPACK_IMPORTED_MODULE_5_aurelia_event_aggregator__["EventAggregator"],
            __WEBPACK_IMPORTED_MODULE_15_app_search_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_16_app_shared_services_breweries_service__["a" /* BreweriesService */],
            __WEBPACK_IMPORTED_MODULE_14_app_shared_services_beers_service__["a" /* BeersService */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_home_home_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_layout_lost_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_layout_about_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_breweries_brewery_list_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_beers_beer_list_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_layout_glossary_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_search_search_results_component__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });







var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0_app_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2_app_layout_about_component__["a" /* AboutComponent */] },
    { path: 'glossary', component: __WEBPACK_IMPORTED_MODULE_5_app_layout_glossary_component__["a" /* GlossaryComponent */] },
    { path: 'breweries', component: __WEBPACK_IMPORTED_MODULE_3_app_breweries_brewery_list_component__["a" /* BreweryListComponent */] },
    { path: 'beers', component: __WEBPACK_IMPORTED_MODULE_4_app_beers_beer_list_component__["a" /* BeerListComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6_app_search_search_results_component__["a" /* SearchResultsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1_app_layout_lost_component__["a" /* LostComponent */] }
];
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/app.routes.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_beers_beer_models__ = __webpack_require__(354);
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
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BeerCardComponent.prototype.ngOnInit = function () {
        this.legend = {
            abv: "Alcohol By Volume: how much alcohol is in each brew",
            ibu: "International Bitterness Units: the bitterness from hops in a beer on a scale of 0 to 100",
            srm: "Color system used by brewers to specify finished beer and malt color"
        };
    };
    BeerCardComponent.prototype.ngOnChanges = function (changes) {
    };
    BeerCardComponent.prototype.select = function () {
        this.selected.next(this.beer);
    };
    BeerCardComponent.prototype.favorite = function (event) {
        event.preventDefault();
        var value = !this.beer.favorite;
        var text = value ? "favorite" : "not favorite";
        this.beer.favorite = value;
        console.log(this.beer.name + " is marked as " + text);
    };
    return BeerCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Boolean)
], BeerCardComponent.prototype, "images", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_beers_beer_models__["a" /* BeerModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_beers_beer_models__["a" /* BeerModel */]) === "function" && _a || Object)
], BeerCardComponent.prototype, "beer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _b || Object)
], BeerCardComponent.prototype, "selected", void 0);
BeerCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'beer-card',
        template: __webpack_require__(763),
        styles: [__webpack_require__(737)],
    }),
    __metadata("design:paramtypes", [])
], BeerCardComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beer-card.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_beers_beer_models__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerItemComponent = (function () {
    function BeerItemComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BeerItemComponent.prototype.ngOnInit = function () {
    };
    BeerItemComponent.prototype.ngOnChanges = function (changes) {
    };
    BeerItemComponent.prototype.select = function () {
        this.selected.next(this.beer);
    };
    return BeerItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_beers_beer_models__["a" /* BeerModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_beers_beer_models__["a" /* BeerModel */]) === "function" && _a || Object)
], BeerItemComponent.prototype, "beer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _b || Object)
], BeerItemComponent.prototype, "selected", void 0);
BeerItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'beer-item',
        template: __webpack_require__(764),
        styles: [__webpack_require__(738)],
    }),
    __metadata("design:paramtypes", [])
], BeerItemComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/beer-item.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_breweries_models__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_breweries_models___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__shared_services_breweries_models__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreweryCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreweryCardComponent = (function () {
    function BreweryCardComponent() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]();
    }
    BreweryCardComponent.prototype.ngOnInit = function () {
    };
    BreweryCardComponent.prototype.select = function () {
        console.log(this.brewery.name);
        this.selected.next(this.brewery);
    };
    BreweryCardComponent.prototype.favorite = function (event) {
        event.preventDefault();
        // ToDo: Implement feature
    };
    return BreweryCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_breweries_models__["BreweryData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_breweries_models__["BreweryData"]) === "function" && _a || Object)
], BreweryCardComponent.prototype, "brewery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]) === "function" && _b || Object)
], BreweryCardComponent.prototype, "selected", void 0);
BreweryCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Component */])({
        selector: 'brewery-card',
        template: __webpack_require__(766),
        styles: [__webpack_require__(740)]
    }),
    __metadata("design:paramtypes", [])
], BreweryCardComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/brewery-card.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_home_home_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_search_search_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_components_carousel_carousel_module__ = __webpack_require__(573);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_components_carousel_carousel_module__["a" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_search_search_module__["a" /* SearchModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3_app_home_home_component__["a" /* HomeComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3_app_home_home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/home.module.js.map

/***/ }),

/***/ 558:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(770),
        styles: [__webpack_require__(743)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/footer.component.js.map

/***/ }),

/***/ 559:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(772),
        styles: [__webpack_require__(745)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/header.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lost_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__glossary_component__ = __webpack_require__(360);
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
            __WEBPACK_IMPORTED_MODULE_7__lost_component__["a" /* LostComponent */],
            __WEBPACK_IMPORTED_MODULE_8__glossary_component__["a" /* GlossaryComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__lost_component__["a" /* LostComponent */],
            __WEBPACK_IMPORTED_MODULE_8__glossary_component__["a" /* GlossaryComponent */],
        ]
    })
], LayoutModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/layout.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_aurelia_event_aggregator__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_breweries_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_beers_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_events_search_events__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SearchBarComponent = (function () {
    function SearchBarComponent(router, eventAggregator, breweriesService, beersService) {
        this.router = router;
        this.eventAggregator = eventAggregator;
        this.breweriesService = breweriesService;
        this.beersService = beersService;
        this.termsProxy = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.termsProxy
            .debounceTime(300)
            .switchMap(function (term) {
            _this.eventAggregator.publish(new __WEBPACK_IMPORTED_MODULE_11__shared_events_search_events__["a" /* TermSearched */](term));
            var temp = term
                ? __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of([term])
                : __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of([]);
            return temp;
        })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of([]);
        })
            .subscribe(function (term) {
            var options = {
                queryParams: {
                    q: term
                }
            };
            _this.router.navigate(["/search"], options);
        });
    };
    SearchBarComponent.prototype.search = function (term) {
        this.termsProxy.next(term);
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["S" /* Component */])({
        selector: 'app-search-bar',
        template: __webpack_require__(774)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_aurelia_event_aggregator__["EventAggregator"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_breweries_service__["a" /* BreweriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_breweries_service__["a" /* BreweriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_beers_service__["a" /* BeersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_beers_service__["a" /* BeersService */]) === "function" && _d || Object])
], SearchBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search-bar.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_events_search_events__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_search_search_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchHistoryComponent = (function () {
    function SearchHistoryComponent(eventAggregator, searchService) {
        this.eventAggregator = eventAggregator;
        this.searchService = searchService;
        this.subscriptions = [];
        this.searches = [];
    }
    SearchHistoryComponent.prototype.ngOnInit = function () {
        var subscription = this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_2_app_shared_events_search_events__["a" /* TermSearched */], function (response) {
            console.info("TermSearched: " + response.term);
        });
        this.subscriptions.push(subscription);
        this.searches = this.searchService
            .query({ page: 0, size: 6 })
            .map(function (p) {
            return {
                term: p.term,
                counter: p.counter
            };
        });
    };
    SearchHistoryComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.dispose();
        });
    };
    return SearchHistoryComponent;
}());
SearchHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-search-history',
        template: __webpack_require__(775)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_search_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_search_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], SearchHistoryComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/search-history.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_colcade__ = __webpack_require__(233);
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
    function CardsComponent(zone) {
        this.zone = zone;
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.zone.onStable.first().subscribe(function () {
            _this.arrange();
        });
    };
    CardsComponent.prototype.arrange = function () {
        if (this.colcade)
            this.colcade.destroy();
        //if (!this.colcade) {
        this.colcade = new __WEBPACK_IMPORTED_MODULE_1_colcade__(this.grid.nativeElement, {
            columns: ".grid-col",
            items: ".grid-item",
        });
        //}
        this.colcade.reload();
    };
    return CardsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Object)
], CardsComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */]) === "function" && _a || Object)
], CardsComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('grid'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object)
], CardsComponent.prototype, "grid", void 0);
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-cards',
        template: __webpack_require__(777),
        styles: [__webpack_require__(746)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === "function" && _c || Object])
], CardsComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/cards.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_component__ = __webpack_require__(563);
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

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_pipes_pipes_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__colcade__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColcadeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ColcadeModule = (function () {
    function ColcadeModule() {
    }
    return ColcadeModule;
}());
ColcadeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_pipes_pipes_module__["a" /* PipesModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__colcade__["a" /* ColcadeComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__colcade__["a" /* ColcadeComponent */]
        ],
        providers: [],
    })
], ColcadeModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/colcade.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_colcade__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_colcade___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_colcade__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColcadeComponent; });
/* unused harmony export BrickModel */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColcadeComponent = (function () {
    function ColcadeComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this.colcade = null;
    }
    ColcadeComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    ColcadeComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log("ngOnChanges");
        var sizes = ["a", "b", "c"];
        this.bricks = this.data.map(function (p) {
            var index = Math.floor(Math.random() * sizes.length);
            var size = sizes[index];
            var brick = {
                name: p.name,
                description: p.description,
                size: "size-" + size,
            };
            return brick;
        });
        this.zone.onStable.first().subscribe(function () {
            console.log("onStable");
            if (!_this.colcade) {
                var grid = _this.dummy.nativeElement;
                _this.colcade = new __WEBPACK_IMPORTED_MODULE_0_colcade__(grid, {
                    columns: ".grid-col",
                    items: ".grid-item",
                });
            }
            _this.colcade.reload();
        });
    };
    ColcadeComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    return ColcadeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* ViewChild */])("dummy"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */]) === "function" && _a || Object)
], ColcadeComponent.prototype, "dummy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Input */])(),
    __metadata("design:type", Array)
], ColcadeComponent.prototype, "data", void 0);
ColcadeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Component */])({
        selector: 'app-colcade',
        template: __webpack_require__(778),
        styles: [__webpack_require__(747)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgZone */]) === "function" && _c || Object])
], ColcadeComponent);

var BrickModel = (function () {
    function BrickModel() {
    }
    return BrickModel;
}());

var _a, _b, _c;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/colcade.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wall_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brick_directive__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colcade3Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Colcade3Module = (function () {
    function Colcade3Module() {
    }
    return Colcade3Module;
}());
Colcade3Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__brick_directive__["a" /* BrickDirective */],
            __WEBPACK_IMPORTED_MODULE_1__wall_component__["a" /* WallComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__brick_directive__["a" /* BrickDirective */],
            __WEBPACK_IMPORTED_MODULE_1__wall_component__["a" /* WallComponent */],
        ]
    })
], Colcade3Module);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/mason.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_colcade__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_colcade___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_colcade__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brick_directive__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WallComponent = (function () {
    function WallComponent(element, zone, renderer) {
        this.element = element;
        this.zone = zone;
        this.renderer = renderer;
        this.colcade = null;
    }
    WallComponent.prototype.ngOnInit = function () {
    };
    WallComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.descendants.changes.subscribe(function (changes) {
            changes.forEach(function (p) {
                var native = p.element.nativeElement;
                _this.renderer.setElementClass(native, "brick", true);
                _this.append(native);
            });
            _this.init();
        });
    };
    WallComponent.prototype.ngAfterContentInit = function () {
    };
    WallComponent.prototype.ngOnDestroy = function () {
        this.clear();
    };
    WallComponent.prototype.init = function () {
        this.colcade = new __WEBPACK_IMPORTED_MODULE_0_colcade__(".wall", {
            columns: '.column',
            items: '.brick'
        });
    };
    WallComponent.prototype.clear = function () {
        if (this.colcade)
            this.colcade.destroy();
    };
    WallComponent.prototype.reset = function () {
        this.clear();
        this.init();
    };
    WallComponent.prototype.append = function (element) {
        if (this.colcade)
            this.colcade.append(element);
    };
    return WallComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__brick_directive__["a" /* BrickDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["_7" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["_7" /* QueryList */]) === "function" && _a || Object)
], WallComponent.prototype, "descendants", void 0);
WallComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Component */])({
        selector: 'app-wall',
        template: __webpack_require__(779),
        styles: [__webpack_require__(748)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Renderer */]) === "function" && _d || Object])
], WallComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/wall.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wall_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watch_service__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrickComponent; });
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



var BrickComponent = (function () {
    function BrickComponent(parent, element, watcher) {
        this.parent = parent;
        this.element = element;
        this.watcher = watcher;
    }
    BrickComponent.prototype.ngAfterViewInit = function () {
        this.parent.add(this.element.nativeElement);
        //this.watcher.watch(this.element.nativeElement, this.parent.layout);
    };
    BrickComponent.prototype.ngOnDestroy = function () {
        this.parent.remove(this.element.nativeElement);
    };
    return BrickComponent;
}());
BrickComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'masonry-brick',
        template: __webpack_require__(780),
        styles: [__webpack_require__(749)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__wall_component__["a" /* WallComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wall_component__["a" /* WallComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wall_component__["a" /* WallComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__watch_service__["a" /* WatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__watch_service__["a" /* WatcherService */]) === "function" && _c || Object])
], BrickComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/brick.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wall_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brick_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watch_service__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Masonry1Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Masonry1Module = (function () {
    function Masonry1Module() {
    }
    return Masonry1Module;
}());
Masonry1Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__wall_component__["a" /* WallComponent */],
            __WEBPACK_IMPORTED_MODULE_2__brick_component__["a" /* BrickComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__wall_component__["a" /* WallComponent */],
            __WEBPACK_IMPORTED_MODULE_2__brick_component__["a" /* BrickComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__watch_service__["a" /* WatcherService */]
        ]
    })
], Masonry1Module);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/mason.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/wall.options.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_config__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_directive__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarouselComponent = (function () {
    function CarouselComponent(config) {
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    CarouselComponent.prototype.ngAfterContentChecked = function () {
        var activeSlide = this.getSlideById(this.activeId);
        this.activeId = activeSlide
            ? activeSlide.id
            : this.slides.length
                ? this.slides.first.id
                : null;
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerInterval);
    };
    CarouselComponent.prototype.select = function (slideId) {
        this.cycleToSelected(slideId);
        this.restartTimer();
    };
    CarouselComponent.prototype.prev = function () {
        this.cycleToPrev();
        this.restartTimer();
    };
    CarouselComponent.prototype.next = function () {
        this.cycleToNext();
        this.restartTimer();
    };
    CarouselComponent.prototype.pause = function () {
        this.stopTimer();
    };
    CarouselComponent.prototype.cycle = function () {
        this.startTimer();
    };
    CarouselComponent.prototype.cycleToNext = function () {
        this.cycleToSelected(this.getNextSlide(this.activeId));
    };
    CarouselComponent.prototype.cycleToPrev = function () {
        this.cycleToSelected(this.getPrevSlide(this.activeId));
    };
    CarouselComponent.prototype.cycleToSelected = function (slideIdx) {
        var selectedSlide = this.getSlideById(slideIdx);
        if (selectedSlide) {
            this.activeId = selectedSlide.id;
        }
    };
    CarouselComponent.prototype.keyPrev = function () {
        if (this.keyboard) {
            this.prev();
        }
    };
    CarouselComponent.prototype.keyNext = function () {
        if (this.keyboard) {
            this.next();
        }
    };
    CarouselComponent.prototype.restartTimer = function () {
        this.stopTimer();
        this.startTimer();
    };
    CarouselComponent.prototype.startTimer = function () {
        var _this = this;
        if (this.interval > 0) {
            this.timerInterval = setInterval(function () { _this.cycleToNext(); }, this.interval);
        }
    };
    CarouselComponent.prototype.stopTimer = function () {
        clearInterval(this.timerInterval);
    };
    CarouselComponent.prototype.getSlideById = function (slideId) {
        var slideWithId = this.slides.filter(function (slide) { return slide.id === slideId; });
        return slideWithId.length ? slideWithId[0] : null;
    };
    CarouselComponent.prototype.getSlideIndexById = function (slideId) {
        return this.slides.toArray().indexOf(this.getSlideById(slideId));
    };
    CarouselComponent.prototype.getNextSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this.getSlideIndexById(currentSlideId);
        var isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide
            ? this.wrap
                ? slideArr[0].id
                : slideArr[slideArr.length - 1].id
            : slideArr[currentSlideIdx + 1].id;
    };
    CarouselComponent.prototype.getPrevSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this.getSlideIndexById(currentSlideId);
        var isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide
            ? this.wrap
                ? slideArr[slideArr.length - 1].id
                : slideArr[0].id
            : slideArr[currentSlideIdx - 1].id;
    };
    return CarouselComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__slide_directive__["a" /* SlideDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */]) === "function" && _a || Object)
], CarouselComponent.prototype, "slides", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Number)
], CarouselComponent.prototype, "interval", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Boolean)
], CarouselComponent.prototype, "wrap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", Boolean)
], CarouselComponent.prototype, "keyboard", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(),
    __metadata("design:type", String)
], CarouselComponent.prototype, "activeId", void 0);
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
        selector: 'app-carousel',
        exportAs: 'appCarousel',
        host: {
            'class': 'carousel slide',
            '[style.display]': '"block"',
            'tabIndex': '0',
            '(mouseenter)': 'pause()',
            '(mouseleave)': 'cycle()',
            '(keydown.arrowLeft)': 'keyPrev()',
            '(keydown.arrowRight)': 'keyNext()'
        },
        template: __webpack_require__(782)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* CarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* CarouselConfig */]) === "function" && _b || Object])
], CarouselComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/carousel.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_directive__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* Based on
    https://github.com/ng-bootstrap/ng-bootstrap/tree/master/src/carousel
*/
var CarouselModule = (function () {
    function CarouselModule() {
    }
    return CarouselModule;
}());
CarouselModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_3__slide_directive__["a" /* SlideDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_3__slide_directive__["a" /* SlideDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]
        ]
    })
], CarouselModule);

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/carousel.module.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromEvent__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalComponent = (function () {
    function ModalComponent(reference, modalService) {
        this.reference = reference;
        this.modalService = modalService;
        this.opening = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* EventEmitter */]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* EventEmitter */]();
        this.closing = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* EventEmitter */]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* EventEmitter */]();
        this.submitted = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* EventEmitter */]();
        this.dismissed = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* EventEmitter */]();
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modal = $(this.reference.nativeElement).find(".modal").first();
        if (!this.modal) {
            console.warn("The underlying modal element could not be found");
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.modal, "show.bs.modal")
            .subscribe(function (p) {
            _this.opening.next();
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.modal, "shown.bs.modal")
            .subscribe(function (p) {
            _this.opened.next();
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.modal, "hide.bs.modal")
            .subscribe(function (p) {
            _this.closing.next();
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.modal, "hidden.bs.modal")
            .subscribe(function (p) {
            _this.closed.next();
        });
        this.modalService.add(this);
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this);
    };
    ModalComponent.prototype.open = function () {
        var options = {
            backdrop: true,
            keyboard: true,
            show: true,
        };
        this.modal.modal(options);
    };
    ModalComponent.prototype.close = function () {
        this.modal.modal("hide");
    };
    ModalComponent.prototype.submit = function () {
        this.submitted.next();
        this.close();
    };
    ModalComponent.prototype.dismiss = function () {
        this.dismissed.next();
        this.close();
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "opening", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "opened", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "closing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "closed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "submitted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "dismissed", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Component */])({
        selector: 'modal',
        template: __webpack_require__(783)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */]) === "function" && _b || Object])
], ModalComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/modal.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowScrollDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowScrollDirective = (function () {
    function WindowScrollDirective() {
        /**
         * Produces an event having the source trigger
         */
        this.scrolled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    /**
     * Handles scrolling events when there are no scrollbars
     * @param event
     */
    WindowScrollDirective.prototype.wheel = function (event) {
        this.direction = event.deltaY > 0
            ? "down"
            : "up";
        var context = {
            windowHeight: window.innerHeight,
            documentHeight: document.documentElement.clientHeight,
            bodyHeight: document.body.clientHeight,
            scrollTop: this.max(document.body, document.documentElement, function (element) { return element.scrollTop; }),
            scrollHeight: this.max(document.body, document.documentElement, function (element) { return element.scrollHeight; }),
            scrollDelta: event.deltaY,
        };
        var height = context.windowHeight
            || context.documentHeight
            || context.bodyHeight;
        var reach = context.scrollTop + height;
        var limit = context.scrollHeight - 100;
        if (reach >= limit && context.scrollDelta > 0 && context.scrollTop == 0) {
            this.scrolled.next({ source: "wheel" });
        }
    };
    /**
     * Handles scrolling events when there are scrollbars
     * @param event
     */
    WindowScrollDirective.prototype.scroll = function (event) {
        var context = {
            windowHeight: window.innerHeight,
            documentHeight: document.documentElement.clientHeight,
            bodyHeight: document.body.clientHeight,
            scrollTop: this.max(event.target.body, event.target.documentElement, function (element) { return element.scrollTop; }),
            scrollHeight: this.max(event.target.body, event.target.documentElement, function (element) { return element.scrollHeight; }),
        };
        var height = context.windowHeight
            || context.documentHeight
            || context.bodyHeight;
        var reach = context.scrollTop + height;
        var limit = context.scrollHeight - 100;
        if ((reach >= limit && this.direction && this.direction == "down") || (reach >= limit && !this.direction)) {
            this.scrolled.next({ source: "scroll" });
        }
    };
    WindowScrollDirective.prototype.max = function (first, second, selector) {
        var firstSize = selector(first);
        var secondSize = selector(second);
        return Math.max(firstSize, secondSize);
    };
    WindowScrollDirective.prototype.height = function () {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    };
    return WindowScrollDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], WindowScrollDirective.prototype, "scrolled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* HostListener */])("window:wheel", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WindowScrollDirective.prototype, "wheel", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WindowScrollDirective.prototype, "scroll", null);
WindowScrollDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({ selector: '[window-scroll]' }),
    __metadata("design:paramtypes", [])
], WindowScrollDirective);

var _a;
//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/window-scroll.directive.js.map

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

//# sourceMappingURL=C:/Users/dando/Data/Work/Code/hubs/labs.beers/src/breweries.models.js.map

/***/ }),

/***/ 577:
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

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".beer {\r\n}\r\n\r\n.beer .actions {\r\n    margin-top: 1%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n.beer .actions .star {\r\n    color: yellow;\r\n    -webkit-text-stroke-width: 1px;\r\n    -webkit-text-stroke-color: darkorange;\r\n}\r\n\r\n.beer .content {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.beer .image {\r\n}\r\n\r\n.beer .description {\r\n}\r\n\r\n.beer .title {\r\n    font-weight: bold;\r\n}\r\n\r\n.beer .type {\r\n    font-style: italic;\r\n}\r\n\r\n.beer .spec {\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".beer {\r\n}\r\n\r\n.beer .content {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.beer .title {\r\n    font-weight: bold;\r\n}\r\n\r\n.beer .type {\r\n    font-style: italic;\r\n}\r\n\r\n.beer .spec {\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".dialog {\r\n}\r\n\r\n.dialog .title {\r\n    border-bottom: none;\r\n    font: 12px/14px 'Armata', Arial, sans-serif;\r\n    letter-spacing: 0.14em;\r\n    margin: 5px 0;\r\n    padding: 5px 0;\r\n    text-transform: uppercase;\r\n    word-spacing: 0.4em;\r\n}\r\n\r\nbeer-item {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    vertical-align: top;\r\n    border: 0;\r\n    margin: 0px;\r\n    width: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".brewery .actions {\r\n    margin-top: 1%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n.brewery .actions .star {\r\n    color: yellow;\r\n    -webkit-text-stroke-width: 1px;\r\n    -webkit-text-stroke-color: darkorange;\r\n}\r\n\r\n.brewery .label {\r\n}\r\n\r\n.brewery .content {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.brewery .title {\r\n    font-weight: bold;\r\n}\r\n\r\n.brewery .date {\r\n    font-style: italic;\r\n}\r\n\r\n.brewery .spec {\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@media (max-width: 480px) {\r\n    .carousel-caption img {\r\n        max-width:20% !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .carousel-caption img {\r\n        max-width:50% !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .carousel-caption img {\r\n        max-width:100% !important;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "img.center {\r\n    display: block;\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    margin-bottom: 5px;\r\n    min-height: 20px;\r\n    border: 1px solid transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".app-hdr {\r\n    padding:1rem 0rem 0rem;\r\n}\r\n\r\n.app-hdr .brand {\r\n\r\n}\r\n\r\n.app-hdr h2 {\r\n    margin:0; padding:0;\r\n}\r\n\r\n.app-hdr .brand i {\r\n    font-size:24px; \r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/* Wall */\r\n.grid {\r\n}\r\n\r\n.grid:after {\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n}\r\n\r\n@media (min-width: 320px ) {\r\n    .grid-col { \r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 98%; \r\n    }\r\n    .grid-col-1, .grid-col-2, .grid-col-3 { \r\n        display: none; \r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 480px ) {\r\n    .grid-col { \r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 48%; \r\n    }\r\n    .grid-col-1 { \r\n        display: block; \r\n    }\r\n    .grid-col-2, .grid-col-3 { \r\n        display: none; \r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media ( min-width: 768px) {\r\n    .grid-col {\r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 31%;\r\n    }\r\n    .grid-col-2 {\r\n        display: block;\r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media ( min-width: 1200px) {\r\n    .grid-col {\r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 23%;\r\n    }\r\n    .grid-col-2, .grid-col-3 {\r\n        display: block;\r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n/* Brick */\r\n.grid-item {\r\n    margin-bottom: 10px;\r\n    background: transparent;\r\n}\r\n\r\n/* Card */\r\n.card {\r\n  background: transparent;\r\n  border: 1px lightgray solid;\r\n  box-shadow: 0px 2px 4px 0px lightgray;\r\n  transition: 0.3s;\r\n  padding: 5px 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.card:hover {\r\n  border: 1px orange solid;\r\n  box-shadow: 0px 8px 16px 0px orange;\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/* Wall */\r\n.grid {\r\n}\r\n\r\n.grid:after {\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n}\r\n\r\n@media (min-width: 320px ) {\r\n    .grid-col { \r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 98%; \r\n    }\r\n    .grid-col-1, .grid-col-2, .grid-col-3 { \r\n        display: none; \r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 480px ) {\r\n    .grid-col { \r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 48%; \r\n    }\r\n    .grid-col-1 { \r\n        display: block; \r\n    }\r\n    .grid-col-2, .grid-col-3 { \r\n        display: none; \r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media ( min-width: 768px) {\r\n    .grid-col {\r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 31%;\r\n    }\r\n    .grid-col-2 {\r\n        display: block;\r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media ( min-width: 1200px) {\r\n    .grid-col {\r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 23%;\r\n    }\r\n    .grid-col-2, .grid-col-3 {\r\n        display: block;\r\n    }\r\n    .grid-col-4 {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n/* Brick */\r\n.grid-item {\r\n    margin-bottom: 10px;\r\n    background: transparent;\r\n}\r\n\r\n/* Card */\r\n.card {\r\n  background: transparent;\r\n  border: 1px lightgray solid;\r\n  box-shadow: 0px 2px 4px 0px lightgray;\r\n  transition: 0.3s;\r\n  padding: 5px 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.card:hover {\r\n  border: 1px orange solid;\r\n  box-shadow: 0px 8px 16px 0px orange;\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/* Wall */\r\n.wall {\r\n}\r\n\r\n.wall:after {\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n}\r\n\r\n/* Brick */\r\n.brick {\r\n}\r\n\r\n/* Column */\r\n@media (min-width: 320px ) {\r\n    .column { \r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 98%; \r\n    }\r\n    .column-1st { \r\n        display: none; \r\n    }\r\n    .column-2nd { \r\n        display: none; \r\n    }\r\n    .column-3rd { \r\n        display: none; \r\n    }\r\n    .column-4th {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 480px ) {\r\n    .column { \r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 48%; \r\n    }\r\n    .column-1st { \r\n        display: block; \r\n    }\r\n    .column-2nd { \r\n        display: none; \r\n    }\r\n    .column-3rd { \r\n        display: none; \r\n    }\r\n    .column-4th {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media ( min-width: 768px) {\r\n    .column {\r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 31%;\r\n    }\r\n    .column-1st { \r\n        display: block; \r\n    }\r\n    .column-2nd {\r\n        display: block;\r\n    }\r\n    .column-3rd {\r\n        display: none;\r\n    }\r\n    .column-4th {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media ( min-width: 1200px) {\r\n    .column {\r\n        float: left;\r\n        margin-left: 1%;\r\n        margin-right: 1%;\r\n        width: 23%;\r\n    }\r\n    .column-1st { \r\n        display: block; \r\n    }\r\n    .column-2nd {\r\n        display: block;\r\n    }\r\n    .column-3rd {\r\n        display: block;\r\n    }\r\n    .column-4th {\r\n        display: block;\r\n        margin-right: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ":host { \r\n    width: 200px;\r\n    margin-left: 1%;\r\n    margin-right: 1%;\r\n}\r\n\r\n@media (min-width: 320px ) {\r\n    :host { \r\n        width: 98%; \r\n    }\r\n}\r\n\r\n@media (min-width: 480px ) {\r\n    :host { \r\n        width: 48%; \r\n    }\r\n}\r\n\r\n@media ( min-width: 768px) {\r\n    :host {\r\n        width: 31%;\r\n    }\r\n}\r\n\r\n@media ( min-width: 1200px) {\r\n    :host {\r\n        width: 23%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/* Wall */\r\n:host {\r\n  display: block;\r\n}\r\n\r\n:host /deep/ masonry-brick{\r\n    /*background-color: red;*/\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<div class=\"beer card\" *ngIf=\"beer\">\r\n\r\n  <div class=\"actions\">\r\n    <span class=\"fa fa-1x fa-beer\" aria-hidden=\"true\"></span>\r\n    <a href=\"#\" class=\"pull-right\" (click)=\"favorite($event)\">\r\n      <i *ngIf=\"!beer.favorite\" class=\"fa fa fa-2x fa-star-o\" aria-hidden=\"true\"></i>\r\n      <i *ngIf=\"beer.favorite\" class=\"fa fa fa-2x fa-star star\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"content\" (click)=\"select()\">\r\n\r\n    <div class=\"image\" *ngIf=\"images\">\r\n      <img class=\"image img-responsive center-block\" src=\"{{beer.label}}\" />\r\n    </div>\r\n\r\n    <div class=\"description\" *ngIf=\"!images\">\r\n      {{beer.description | words : 20}}\r\n    </div>\r\n    \r\n    <h6 class=\"title\" title=\"{{beer.description}}\">\r\n      {{beer.name}}\r\n    </h6>\r\n\r\n    <div class=\"type\">\r\n      <small>{{beer.style}}</small>\r\n    </div>\r\n\r\n    <div class=\"spec\" title=\"{{legend.abv}}\">\r\n      <small *ngIf=\"beer.abv\">ABV %: {{beer.abv}}</small>\r\n      <small *ngIf=\"!beer.abv\">ABV %: N/A</small>\r\n    </div>\r\n\r\n    <div class=\"spec\" title=\"{{legend.ibu}}\" class=\"pull-right\">\r\n      <small *ngIf=\"beer.ibu\">IBU %: {{beer.ibu}}</small>\r\n      <small *ngIf=\"!beer.ibu\">IBU %: N/A</small>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--\r\n    description: {{beer.description}} |\r\n    Name: {{beer.nameDisplay}} |\r\n    Type: {{beer.style.name}} |\r\n    ABV: {{beer.abv}} |\r\n    IBU: {{beer.ibu}} |\r\n    IBU Min: {{beer.style?.ibuMin}} |\r\n    IBU Max: {{beer.style?.ibuMax}} |\r\n    ABV Min: {{beer.style?.abvMin}} |\r\n    SRM Min: {{beer.style?.srmMin}} |\r\n    SRM Max: {{beer.style?.srmMax}} |\r\n    OG Min: {{beer.style?.ogMin}} |\r\n    FG Min: {{beer.style?.fgMin}} |\r\n    FG Max: {{beer.style?.fgMax}} |\r\n    Glass: {{beer.glass?.name}} |\r\n    Description: {{beer.description}} |\r\n    Availability: {{beer.available?.description}} |\r\n    Style Name: {{beer.style?.name}} |\r\n    Style Short: {{beer.style?.shortName}} |\r\n    Style Category: {{beer.style?.category?.name}} |\r\n    Style Description: {{beer.style?.description}} |\r\n    Brewery Established: {{brewery.established}} |\r\n    Brewery Name: {{brewery.name}} |\r\n    Brewery Url: {{brewery.website}} |\r\n-->"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<div class=\"beer\" *ngIf=\"beer\">\r\n\r\n  <div class=\"content\" (click)=\"select()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <h6 class=\"title\" title=\"{{beer.description}}\">\r\n          {{beer.name}}\r\n        </h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4 type\">\r\n        <small>{{beer.style}}</small>\r\n      </div>\r\n      <div class=\"col-xs-4 spec\">\r\n        <small *ngIf=\"beer.abv\">ABV %: {{beer.abv}}</small>\r\n        <small *ngIf=\"!beer.abv\">ABV %: N/A</small>\r\n      </div>\r\n      <div class=\"col-xs-4 spec\" class=\"pull-right\">\r\n        <small *ngIf=\"beer.ibu\">IBU %: {{beer.ibu}}</small>\r\n        <small *ngIf=\"!beer.ibu\">IBU %: N/A</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<!-- Results -->\r\n<div class=\"container\" (window:scroll)=\"scroll($event)\">\r\n  <br/>\r\n\r\n  <!-- ToDo: Work in progress with colcade1  -->\r\n  <!--<div class=\"row\">\r\n    <app-cards [items]=\"beers\">\r\n      <template let-item=\"item\">\r\n        <beer-card [beer]=\"item\" (selected)=\"select(item);dialog.open();\"></beer-card>\r\n      </template>\r\n    </app-cards>\r\n  </div>-->\r\n\r\n  <!-- ToDo: Work in progress with colcade2  -->\r\n  <!--<div class=\"row\">\r\n    <app-colcade [data]=\"beers\"></app-colcade>\r\n  </div>-->\r\n\r\n  <!-- ToDo: Work in progress with colcade3  -->\r\n  <!--<div class=\"row\">\r\n    <app-wall #wall>\r\n      <app-brick *ngFor=\"let item of beers\">\r\n          <beer-card [beer]=\"item\" [images]=\"images\" (selected)=\"select(item);dialog.open();\"></beer-card>\r\n      </app-brick>\r\n    </app-wall>\r\n  </div>-->\r\n\r\n  <!-- ToDo: Work in progress with masonry1  -->\r\n  <div class=\"row\">\r\n    <div window-scroll (scrolled)=\"onScroll($event)\">\r\n      <masonry>\r\n        <masonry-brick *ngFor=\"let item of beers\">\r\n          <beer-card [beer]=\"item\" [images]=\"false\" (selected)=\"select(item);dialog.open();\"></beer-card>\r\n        </masonry-brick>\r\n      </masonry>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- More -->\r\n  <div class=\"row\">\r\n    <button type=\"button\" class=\"btn btn-info center-block\" (click)=\"more()\">\r\n      Load more ({{summary()}})\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Modal -->\r\n<modal #dialog size=\"large\" class=\"dialog\">\r\n  <div data-section=\"header\" *ngIf=\"selection\">\r\n    <span class=\"title\">\r\n        <span class=\"fa fa-1x fa-beer\" aria-hidden=\"true\"></span> {{selection.name}}\r\n    </span>\r\n  </div>\r\n  <div data-section=\"body\" *ngIf=\"selection\">\r\n    <em>{{selection.description}}</em>\r\n  </div>\r\n  <div data-section=\"footer\" *ngIf=\"selection\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"dialog.close()\">Ok</button>\r\n  </div>\r\n</modal>"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<div class=\"brewery\">\r\n\r\n  <div class=\"actions\">\r\n    <span class=\"fa fa-1x fa-industry\" aria-hidden=\"true\"></span>\r\n    <a href=\"#\" class=\"pull-right\" (click)=\"favorite($event)\">\r\n      <i *ngIf=\"!brewery.favorite\" class=\"fa fa-2x fa-star-o\" aria-hidden=\"true\"></i>\r\n      <i *ngIf=\"brewery.favorite\" class=\"fa fa-2x fa-star star\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"content\" (click)=\"select()\">\r\n    <div class=\"label\">\r\n      <img *ngIf=\"brewery.images\" class=\"img-responsive center-block\" src=\"{{brewery.images.medium}}\" />\r\n      <img *ngIf=\"!brewery.images\" class=\"img-responsive center-block\" src=\"./assets/img/brewery-generic.png\" />\r\n    </div>\r\n\r\n    <h6 class=\"title\" title=\"{{brewery.description ? brewery.description : 'N/A'}}\">\r\n      {{brewery.name}}\r\n    </h6>\r\n\r\n    <div class=\"date\">\r\n      <small>Established: {{brewery.established}}</small>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "  <!-- Results -->\r\n<div class=\"container\">\r\n  <br/>\r\n  <div class=\"row\">\r\n    <app-cards [items]=\"breweries\">\r\n      <template let-item=\"item\">\r\n        <brewery-card [brewery]=\"item\" (selected)=\"select(item);dialog.open();\"></brewery-card>\r\n      </template>\r\n    </app-cards>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Modal -->\r\n<modal #dialog size=\"large\" class=\"dialog\">\r\n  <div data-section=\"header\" *ngIf=\"selection\">\r\n    <span class=\"title\">\r\n        <span class=\"fa fa-1x fa-beer\" aria-hidden=\"true\"></span> \r\n        {{selection.name}}\r\n    </span>\r\n  </div>\r\n  <div data-section=\"body\" *ngIf=\"selection\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <em>{{selection.description}}</em>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-sm-6\">\r\n        <img *ngIf=\"selection.images\" class=\"img-responsive center-block\" src=\"{{selection.images.medium}}\" />\r\n        <img *ngIf=\"!selection.images\" class=\"img-responsive center-block\" src=\"./assets/img/brewery-generic.png\" />\r\n      </div>\r\n      <div class=\"col-sm-3\"></div>\r\n    </div>\r\n  </div>\r\n  <div data-section=\"footer\" *ngIf=\"selection\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"dialog.close()\">Ok</button>\r\n  </div>\r\n</modal>\r\n\r\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3 col-sm-2 hidden-xs\">\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-sm-8 col-xs-12\">\r\n    <app-carousel>\r\n\r\n      <template app-carousel-slide>\r\n        <img src=\"./assets/img/beer-foam-1.jpg\" class=\"img-responsive center-block\" alt=\"foam\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Visit</h3>\r\n          <div class=\"text-center\">\r\n            <a routerLink=\"/breweries\" style=\"display: block\">\r\n              <img src=\"./assets/img/beer_factory.png\" class=\"img-responsive center-block\" alt=\"Breweries\">\r\n            </a>\r\n            <h2>Breweries</h2>\r\n          </div>\r\n        </div>\r\n      </template>\r\n\r\n      <template app-carousel-slide>\r\n        <img src=\"./assets/img/beer-foam-2.jpg\" class=\"img-responsive center-block\" alt=\"foam\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Visit</h3>\r\n          <div class=\"text-center\">\r\n            <a routerLink=\"/beers\" style=\"display: block\">\r\n              <img src=\"./assets/img/beer-glass.png\" class=\"img-responsive center-block\" alt=\"Beers\">\r\n            </a>\r\n            <h2>Beers</h2>\r\n          </div>\r\n        </div>\r\n      </template>\r\n\r\n      <template app-carousel-slide>\r\n        <img src=\"./assets/img/beer-foam-3.jpg\" class=\"img-responsive center-block\" alt=\"foam\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>History</h3>\r\n          <div>\r\n            <app-search-history></app-search-history>\r\n          </div>\r\n        </div>\r\n      </template>\r\n\r\n    </app-carousel>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-2 hidden-xs\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4 text-center\">\r\n        <br><br>\r\n        <img alt=\"logo kiklos\" src=\"./assets/img/beer_logo.png\">\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <h2>A better way to discover craft beer</h2>\r\n\r\n        <h3>Tag lines</h3>\r\n        <p>\r\n            BreweryDB is your database of breweries, beers, beer events and guilds! \r\n            Our service is just about the facts.\r\n        </p>\r\n        <p>\r\n            All of our data is curated by our administrators, so you can be sure that the information you get is timely and accurate\r\n            We are proud to be a small part of the Craft Beer revolution!\r\n        </p>\r\n\r\n        <h3>Built for Developers</h3>\r\n        <p>\r\n            BreweryDB was made by developers, for developers. \r\n        </p>\r\n        <p>\r\n            Our vast collection of data can be accessed via our free API. \r\n        </p>\r\n\r\n        <h3>What people are saying</h3>\r\n        <p>\r\n            A great project that aims to build an open database of breweries and beers \r\n            <small>(ProgrammableWeb)</small>\r\n        </p>\r\n        <p>\r\n            The IMDB of Breweries <small>(Tech Cocktail)</small>\r\n        </p>\r\n        <p>\r\n            Just discovered @brewerydb had an API #buildbuildbuild \r\n            <small>(@gideonco)</small>\r\n        </p>\r\n\r\n        <h3>Copyright</h3>\r\n        <p>\r\n            For more details <a href=\"http://www.brewerydb.com/\">visit</a>\r\n        </p>\r\n\r\n        <h3>Terms</h3>\r\n        <p>\r\n            For more details <a href=\"http://www.brewerydb.com/index/terms\">visit</a>\r\n        </p>\r\n\r\n        <h3>Disclaimer</h3>\r\n        <p>\r\n            BreweryDB makes every effort to be accurate in our data set. If something is wrong, you can often submit the change yourself\r\n        </p>\r\n        <p>\r\n            2012 Brewers Association Beer Style Guidelines used with permission of Brewers Association.\r\n        </p>\r\n        <p>\r\n            All images of breweries, beers, guilds, or events are properties of those entities. \r\n            If an image you hold the copyright to is on BreweryDB.com and you would like it not to be, we understand. \r\n            Even though it makes our database more complete, and in return provides free marketing and enhanced recognition for your brand, we will remove it\r\n        </p>\r\n        <p>\r\n            The initial set of data was taken from OpenBeerDB (www.openbeerdb.com) in 2010 which was released under the Open Database License (ODbL) \r\n            (http://www.opendatacommons.org/licenses/odbl/1.0/). \r\n            After the initial import of data, user submissions and updates are what make up the current data set.\r\n        </p>\r\n\r\n        <h3>Shortcurt</h3>\r\n        <p>\r\n            <img class=\"center\" src=\"./assets/img/app-url.png\" alt=\"https://dandohotaru.github.io/labs.beers/\">\r\n        </p>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n        <p class=\"text-muted\">\r\n          <a routerLink=\"/about\">About</a>\r\n          <a routerLink=\"/glossary\">Glossary</a>\r\n          <a href=\"mailto:john.doe@gmail.com?Subject=Whaddup?\" target=\"_top\">\r\n              Contact us\r\n            </a>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"hidden-xs col-sm-6 col-md-8 text-right\">\r\n        <p class=\"text-muted text-right\">\r\n          <span>Last update: {{lastUpdate | date}} </span> |\r\n          <span class=\"hidden-xs\">Techday &copy;2017</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-sm-12 text-center\">\r\n    <a routerLink=\"/breweries\" style=\"display: block\">\r\n      <img src=\"./assets/img/beer-sign.jpg\" alt=\"beer ahead\">\r\n    </a>\r\n  </div>"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div class=\"row app-hdr\">\r\n\r\n    <!-- Brand -->\r\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-3 brand\">\r\n        <ul class=\"list-inline\">\r\n            <li>\r\n                <h2 >\r\n                    <a routerLink=\"/\">Demo</a>\r\n                </h2>\r\n            </li>\r\n            <li class=\"hidden-xs\">\r\n                <i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- Search -->\r\n    <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-7\">\r\n        <app-search-bar></app-search-bar>\r\n    </div>\r\n\r\n    <!-- Add -->\r\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\" style=\"padding-left:0px;\">\r\n        <ul class=\"list-inline\">\r\n            <li>\r\n                <div class=\"btn-group add-button\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"fa fa-plus\"></span> \r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                        <li><a id=\"addNewBeerLink\" href=\"#\">Beer</a></li>\r\n                        <li><a id=\"addNewBreweryLink\" href=\"#\">Brewery</a></li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<hr style=\"margin-top:0px;\" />"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<h3>Page not found</h3>"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n\r\n  <!-- Term -->\r\n  <input #searchBox id=\"queryField\" type=\"search\" class=\"form-control\" \r\n    placeholder=\"What would Bachus know about?\"\r\n    (keyup.enter)=\"search(searchBox.value)\"/>\r\n\r\n  <!-- Execute -->\r\n  <div class=\"input-group-btn\">\r\n    <button id=\"searchButton\" type=\"button\" class=\"btn btn-primary\" \r\n      (click)=\"search(searchBox.value)\">\r\n      <i class=\"fa fa-search\"></i>\r\n      <span class=\"hidden-xs\">\r\n        Search\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngFor=\"let search of searches\" class=\"col-xs-6 col-sm-12\">\r\n\r\n  <div style=\"padding: 0.25em\">\r\n    <a [routerLink]=\"['/search']\" [queryParams]=\"{q: search.term}\">\r\n      <span class=\"badge\">{{search.counter}}</span>\r\n    </a>\r\n    {{search.term}}\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<div role=\"tabpanel\">\r\n  \r\n  <!-- Tabs -->\r\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n    <li role=\"presentation\" class=\"active\">\r\n      <a href=\"#beers\" aria-controls=\"beers\" role=\"tab\" data-toggle=\"tab\">\r\n        <span class=\"fa fa-th\" aria-hidden=\"true\"></span>\r\n        Beers\r\n        <span class=\"badge\">{{beers}}</span>\r\n      </a>\r\n    </li>\r\n    <li role=\"presentation\">\r\n      <a href=\"#breweries\" aria-controls=\"breweries\" role=\"tab\" data-toggle=\"tab\">\r\n        <span class=\"fa fa-th\" aria-hidden=\"true\"></span>\r\n        Breweries\r\n        <span class=\"badge\">{{breweries}}</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- Panels -->\r\n  <div class=\"tab-content\">\r\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"beers\">\r\n      <app-beer-list [images]=\"false\" (loaded)=\"beers=$event.found\"></app-beer-list>\r\n    </div>\r\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"breweries\">\r\n      <app-brewery-list (loaded)=\"breweries=$event.found\"></app-brewery-list>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div #grid class=\"grid\" [style.display]=\"hidden ? 'none' : ''\">\r\n\r\n    <!-- Columns -->\r\n    <div class=\"grid-col grid-col-1\"></div>\r\n    <div class=\"grid-col grid-col-2\"></div>\r\n    <div class=\"grid-col grid-col-3\"></div>\r\n    <div class=\"grid-col grid-col-4\"></div>\r\n\r\n    <!-- Bricks -->\r\n    <div class=\"grid-item\" *ngFor=\"let item of items\">\r\n        <div class=\"card\">\r\n            <template \r\n                [ngTemplateOutlet]=\"template\" \r\n                [ngOutletContext]=\"{ item: item }\">\r\n            </template>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<div #dummy class=\"grid\">\r\n\r\n    <!-- Columns -->\r\n    <div class=\"grid-col grid-col-1\"></div>\r\n    <div class=\"grid-col grid-col-2\"></div>\r\n    <div class=\"grid-col grid-col-3\"></div>\r\n    <div class=\"grid-col grid-col-4\"></div>\r\n\r\n    <!-- Bricks -->\r\n    <div class=\"grid-item\" *ngFor=\"let brick of bricks\">\r\n        <div class=\"card\">\r\n            <p>{{brick.name}}</p>\r\n            <div>\r\n                {{brick.description | words : 20}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<!-- wall -->\r\n<div class=\"wall\">\r\n\r\n    <!-- columns -->\r\n    <div class=\"column column-1st\"></div>\r\n    <div class=\"column column-2nd\"></div>\r\n    <div class=\"column column-3rd\"></div>\r\n    <div class=\"column column-4th\"></div>\r\n\r\n    <!-- bricks -->\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div>   \r\n    <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-id\" class=\"carousel slide\">\r\n\r\n    <ol class=\"carousel-indicators\">\r\n        <li *ngFor=\"let slide of slides\" \r\n            [id]=\"slide.id\" \r\n            [class.active]=\"slide.id === activeId\" \r\n            (click)=\"cycleToSelected(slide.id)\"></li>\r\n    </ol>\r\n\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let slide of slides\" class=\"item\" \r\n            [class.active]=\"slide.id === activeId\">\r\n            <template [ngTemplateOutlet]=\"slide.template\"></template>\r\n        </div>\r\n    </div>\r\n\r\n    <a class=\"left carousel-control\" role=\"button\" (click)=\"cycleToPrev()\">\r\n        <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" role=\"button\" (click)=\"cycleToNext()\">\r\n        <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\">\r\n    <div class=\"modal-dialog {{size == 'small' ? 'modal-sm' : 'modal-lg'}}\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">\r\n                    <ng-content select=\"[data-section=header]\"></ng-content>\r\n                </h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <ng-content select=\"[data-section=body]\"></ng-content>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <ng-content select=\"[data-section=footer]\"></ng-content>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(426);


/***/ })

},[825]);
//# sourceMappingURL=main.bundle.js.map