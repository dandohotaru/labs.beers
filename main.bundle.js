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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/search.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beers_beers_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breweries_breweries_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_bar_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_results_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_history_component__ = __webpack_require__(551);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/search.module.js.map

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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/modal.service.js.map

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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/search.events.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(250);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/error.handler.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(250);
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
                return results.filter(function (p) { return p.name.toLowerCase().includes(term.toLowerCase()); });
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
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/beers.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(250);
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
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/breweries.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
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
        this.beers = [];
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BeerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            _this.term = p["q"] || "";
            var beers = _this.service
                .search(_this.term)
                .subscribe(function (beers) {
                _this.beers = beers
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
                _this.loaded.next({ found: _this.beers.length });
            }, function (error) {
                console.error(error);
            });
        });
    };
    BeerListComponent.prototype.select = function (item) {
        this.selection = item;
        console.log(this.selection.name);
    };
    return BeerListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], BeerListComponent.prototype, "loaded", void 0);
BeerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-beer-list',
        template: __webpack_require__(737),
        styles: [__webpack_require__(720)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__["a" /* BeersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_beers_service__["a" /* BeersService */]) === "function" && _d || Object])
], BeerListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/beer-list.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_components_modal_modal_module__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_components_mason_mason_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_components_cards_cards_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beer_list_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beer_card_component__ = __webpack_require__(544);
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
            __WEBPACK_IMPORTED_MODULE_3_app_shared_components_mason_mason_module__["a" /* MasonModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_components_cards_cards_module__["a" /* CardsModule */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_components_modal_modal_module__["a" /* ModalModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__beer_list_component__["a" /* BeerListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__beer_card_component__["a" /* BeerCardComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__beer_list_component__["a" /* BeerListComponent */]
        ],
        providers: []
    })
], BeersModule);

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/beers.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_components_modal_modal_module__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_mason_mason_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_cards_cards_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brewery_list_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__brewery_card_component__ = __webpack_require__(545);
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
            __WEBPACK_IMPORTED_MODULE_5__shared_components_mason_mason_module__["a" /* MasonModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_components_cards_cards_module__["a" /* CardsModule */],
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/breweries.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-brewery-list',
        template: __webpack_require__(739)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_breweries_service__["a" /* BreweriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_breweries_service__["a" /* BreweriesService */]) === "function" && _d || Object])
], BreweryListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/brewery-list.component.js.map

/***/ }),

/***/ 350:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(740),
        styles: [__webpack_require__(722)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_components_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_components_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/home.component.js.map

/***/ }),

/***/ 351:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(741),
        styles: [__webpack_require__(723)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/about.component.js.map

/***/ }),

/***/ 352:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-glossary',
        template: __webpack_require__(743),
        styles: [__webpack_require__(725)]
    }),
    __metadata("design:paramtypes", [])
], GlossaryComponent);

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/glossary.component.js.map

/***/ }),

/***/ 353:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-lost',
        template: __webpack_require__(745)
    }),
    __metadata("design:paramtypes", [])
], LostComponent);

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/lost.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-search-results',
        template: __webpack_require__(748)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], SearchResultsComponent);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/search-results.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_component__ = __webpack_require__(552);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/cards.module.js.map

/***/ }),

/***/ 356:
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
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
    }
    return CarouselConfig;
}());
CarouselConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CarouselConfig);

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/carousel.config.js.map

/***/ }),

/***/ 357:
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
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/slide.directive.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_options__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mason_grid_options__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_colcade__ = __webpack_require__(361);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: '[colcade-grid], colcade-grid',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object])
], MasonGridComponent);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/mason-grid.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mason_column_directive__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mason_brick_directive__ = __webpack_require__(555);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/mason.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_component__ = __webpack_require__(558);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/modal.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 415;


/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(542);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/main.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_events_search_events__ = __webpack_require__(227);
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
    function AppComponent(eventAggregator, searchService) {
        this.eventAggregator = eventAggregator;
        this.searchService = searchService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("starting up");
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_3__shared_events_search_events__["b" /* BeerSearched */], function (response) {
            console.info("BeerSearched: " + response.term);
        });
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_3__shared_events_search_events__["c" /* BrewerySearched */], function (response) {
            console.info("BrewerySearched: " + response.term);
        });
        this.eventAggregator.subscribe(__WEBPACK_IMPORTED_MODULE_3__shared_events_search_events__["a" /* TermSearched */], function (response) {
            console.info("TermSearched: " + response.term);
            _this.searchService.track(response.term);
        });
        this.eventAggregator.subscribe("termSearched", function (response) {
            console.info("TermSearched: " + response.term);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(735)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__search_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__search_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/app.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_event_aggregator__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_event_aggregator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_aurelia_event_aggregator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_layout_layout_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_home_home_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_search_search_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_breweries_breweries_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_beers_beers_module__ = __webpack_require__(347);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/app.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_home_home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_layout_lost_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_layout_about_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_breweries_brewery_list_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_beers_beer_list_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_layout_glossary_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_search_search_results_component__ = __webpack_require__(354);
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
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/app.routes.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerCardComponent; });
/* unused harmony export BeerModel */
/* unused harmony export LegendModel */
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
        console.log(this.beer.name);
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
    __metadata("design:type", BeerModel)
], BeerCardComponent.prototype, "beer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], BeerCardComponent.prototype, "selected", void 0);
BeerCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'beer-card',
        template: __webpack_require__(736),
        styles: [__webpack_require__(719)],
    }),
    __metadata("design:paramtypes", [])
], BeerCardComponent);

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

var _a;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/beer-card.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_breweries_models__ = __webpack_require__(559);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Component */])({
        selector: 'brewery-card',
        template: __webpack_require__(738),
        styles: [__webpack_require__(721)]
    }),
    __metadata("design:paramtypes", [])
], BreweryCardComponent);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/brewery-card.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_home_home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_search_search_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_components_carousel_carousel_module__ = __webpack_require__(554);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/home.module.js.map

/***/ }),

/***/ 547:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(742),
        styles: [__webpack_require__(724)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/footer.component.js.map

/***/ }),

/***/ 548:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(744),
        styles: [__webpack_require__(726)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/header.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lost_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__glossary_component__ = __webpack_require__(352);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/layout.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(72);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["R" /* Component */])({
        selector: 'app-search-bar',
        template: __webpack_require__(746)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_aurelia_event_aggregator__["EventAggregator"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_breweries_service__["a" /* BreweriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_breweries_service__["a" /* BreweriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_beers_service__["a" /* BeersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_beers_service__["a" /* BeersService */]) === "function" && _d || Object])
], SearchBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/search-bar.component.js.map

/***/ }),

/***/ 551:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-search-history',
        template: __webpack_require__(747)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["EventAggregator"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_search_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_search_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], SearchHistoryComponent);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/search-history.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_colcade__ = __webpack_require__(361);
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
                items: ".grid-card",
            };
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* TemplateRef */]) === "function" && _a || Object)
], CardsComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('myGrid'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object)
], CardsComponent.prototype, "mygrid", void 0);
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
        selector: 'app-cards',
        template: __webpack_require__(749),
        styles: [__webpack_require__(727)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _c || Object])
], CardsComponent);

var _a, _b, _c;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/cards.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_config__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_directive__ = __webpack_require__(357);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__slide_directive__["a" /* SlideDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */]) === "function" && _a || Object)
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
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
        template: __webpack_require__(750)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* CarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* CarouselConfig */]) === "function" && _b || Object])
], CarouselComponent);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/carousel.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_directive__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__(356);
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/carousel.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__ = __webpack_require__(358);
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
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mason_grid_component__["a" /* MasonGridComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === "function" && _b || Object])
], MasonBrickDirective);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/mason-brick.directive.js.map

/***/ }),

/***/ 556:
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

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/mason-column.directive.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/mason-grid.options.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromEvent__ = __webpack_require__(756);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["R" /* Component */])({
        selector: 'modal',
        template: __webpack_require__(751)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */]) === "function" && _b || Object])
], ModalComponent);

var _a, _b;
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/modal.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/breweries.models.js.map

/***/ }),

/***/ 560:
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
//# sourceMappingURL=D:/Work/Codes/hub/labs.beers/src/environment.js.map

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".beer {\r\n}\r\n\r\n.beer .actions {\r\n    margin-top: 1%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n.beer .actions .star {\r\n    color: yellow;\r\n    -webkit-text-stroke-width: 1px;\r\n    -webkit-text-stroke-color: darkorange;\r\n}\r\n\r\n.beer .label {\r\n}\r\n\r\n.beer .label .image {\r\n}\r\n\r\n.beer .content {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.beer .title {\r\n    font-weight: bold;\r\n}\r\n\r\n.beer .type {\r\n    font-style: italic;\r\n}\r\n\r\n.beer .spec {\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".dialog {\r\n}\r\n\r\n.dialog .title {\r\n    border-bottom: none;\r\n    font: 12px/14px 'Armata', Arial, sans-serif;\r\n    letter-spacing: 0.14em;\r\n    margin: 5px 0;\r\n    padding: 5px 0;\r\n    text-transform: uppercase;\r\n    word-spacing: 0.4em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".brewery .actions {\r\n    margin-top: 1%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n.brewery .actions .star {\r\n    color: yellow;\r\n    -webkit-text-stroke-width: 1px;\r\n    -webkit-text-stroke-color: darkorange;\r\n}\r\n\r\n.brewery .label {\r\n}\r\n\r\n.brewery .content {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.brewery .title {\r\n    font-weight: bold;\r\n}\r\n\r\n.brewery .date {\r\n    font-style: italic;\r\n}\r\n\r\n.brewery .spec {\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "@media (max-width: 480px) {\r\n    .carousel-caption img {\r\n        max-width:20% !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .carousel-caption img {\r\n        max-width:50% !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .carousel-caption img {\r\n        max-width:100% !important;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "img.center {\r\n    display: block;\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".navbar {\r\n    margin-bottom: 5px;\r\n    min-height: 20px;\r\n    border: 1px solid transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".app-hdr {\r\n    padding:1rem 0rem 0rem;\r\n}\r\n\r\n.app-hdr .brand {\r\n\r\n}\r\n\r\n.app-hdr h2 {\r\n    margin:0; padding:0;\r\n}\r\n\r\n.app-hdr .brand i {\r\n    font-size:24px; \r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "\r\n* { \r\n  box-sizing: border-box; \r\n}\r\n\r\n/* Grid */\r\n.grid {\r\n}\r\n\r\n.grid:after {\r\n  display: block;\r\n  content: '';\r\n  clear: both;\r\n}\r\n\r\n.grid-col {\r\n  float: left;\r\n  width: 49%;\r\n  margin-right: 2%;\r\n}\r\n\r\n.grid-col-4 { \r\n  margin-right: 0; \r\n}\r\n\r\n.grid-col-2, .grid-col-3 { \r\n  display: none; \r\n}\r\n\r\n@media (min-width: 320px ) {\r\n  .grid-col { \r\n    width: 99%; \r\n  }\r\n  .grid-col-1, .grid-col-2, .grid-col-3 { \r\n    display: none; \r\n  }\r\n}\r\n\r\n@media (min-width: 480px ) {\r\n  .grid-col { \r\n    width: 49%; \r\n  }\r\n  .grid-col-1 { \r\n    display: block; \r\n  }\r\n  .grid-col-2, .grid-col-3 { \r\n    display: none; \r\n  }\r\n}\r\n\r\n@media (min-width: 768px ) {\r\n  .grid-col { \r\n    width: 32%; \r\n  }\r\n  .grid-col-2 { \r\n    display: block; \r\n  }\r\n}\r\n\r\n@media (min-width: 1200px ) {\r\n  .grid-col { \r\n    width: 23.5%; \r\n  }\r\n  .grid-col-2, .grid-col-3 { \r\n    display: block; \r\n  }\r\n}\r\n\r\n/* Item */\r\n.grid-card {\r\n  background: transparent;\r\n  border: 1px lightgray solid;\r\n  box-shadow: 0px 2px 4px 0px lightgray;\r\n  margin-bottom: 20px;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.grid-card:hover {\r\n  border: 1px orange solid;\r\n  box-shadow: 0px 8px 16px 0px orange;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"beer\" *ngIf=\"beer\">\r\n\r\n  <div class=\"actions\">\r\n    <span class=\"fa fa-1x fa-beer\" aria-hidden=\"true\"></span>\r\n    <a href=\"#\" class=\"pull-right\" (click)=\"favorite($event)\">\r\n      <i *ngIf=\"!beer.favorite\" class=\"fa fa fa-2x fa-star-o\" aria-hidden=\"true\"></i>\r\n      <i *ngIf=\"beer.favorite\" class=\"fa fa fa-2x fa-star star\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"content\" (click)=\"select()\">\r\n\r\n    <div class=\"label\">\r\n      <img class=\"image img-responsive center-block\" src=\"{{beer.label}}\" />\r\n    </div>\r\n\r\n    <h6 class=\"title\" title=\"{{beer.description}}\">\r\n      {{beer.name}}\r\n    </h6>\r\n\r\n    <div class=\"type\">\r\n      <small>{{beer.style}}</small>\r\n    </div>\r\n\r\n    <div class=\"spec\" title=\"{{legend.abv}}\">\r\n      <small *ngIf=\"beer.abv\">ABV %: {{beer.abv}}</small>\r\n      <small *ngIf=\"!beer.abv\">ABV %: N/A</small>\r\n    </div>\r\n\r\n    <div class=\"spec\" title=\"{{legend.ibu}}\" class=\"pull-right\">\r\n      <small *ngIf=\"beer.ibu\">IBU %: {{beer.ibu}}</small>\r\n      <small *ngIf=\"!beer.ibu\">IBU %: N/A</small>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--\r\n    description: {{beer.description}} |\r\n    Name: {{beer.nameDisplay}} |\r\n    Type: {{beer.style.name}} |\r\n    ABV: {{beer.abv}} |\r\n    IBU: {{beer.ibu}} |\r\n    IBU Min: {{beer.style?.ibuMin}} |\r\n    IBU Max: {{beer.style?.ibuMax}} |\r\n    ABV Min: {{beer.style?.abvMin}} |\r\n    SRM Min: {{beer.style?.srmMin}} |\r\n    SRM Max: {{beer.style?.srmMax}} |\r\n    OG Min: {{beer.style?.ogMin}} |\r\n    FG Min: {{beer.style?.fgMin}} |\r\n    FG Max: {{beer.style?.fgMax}} |\r\n    Glass: {{beer.glass?.name}} |\r\n    Description: {{beer.description}} |\r\n    Availability: {{beer.available?.description}} |\r\n    Style Name: {{beer.style?.name}} |\r\n    Style Short: {{beer.style?.shortName}} |\r\n    Style Category: {{beer.style?.category?.name}} |\r\n    Style Description: {{beer.style?.description}} |\r\n    Brewery Established: {{brewery.established}} |\r\n    Brewery Name: {{brewery.name}} |\r\n    Brewery Url: {{brewery.website}} |\r\n-->"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<!-- Results -->\r\n<div class=\"container\">\r\n  <br/>\r\n  <div class=\"row\">\r\n    <app-cards [items]=\"beers\">\r\n      <template let-item=\"item\">\r\n        <beer-card [beer]=\"item\" (selected)=\"select(item);dialog.open();\"></beer-card>\r\n      </template>\r\n    </app-cards>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<modal #dialog size=\"large\" class=\"dialog\">\r\n  <div data-section=\"header\" *ngIf=\"selection\">\r\n    <span class=\"title\">\r\n        <span class=\"fa fa-1x fa-beer\" aria-hidden=\"true\"></span> \r\n        {{selection.name}}\r\n    </span>\r\n  </div>\r\n  <div data-section=\"body\" *ngIf=\"selection\">\r\n    <em>{{selection.description}}</em>\r\n  </div>\r\n  <div data-section=\"footer\" *ngIf=\"selection\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"dialog.close()\">Ok</button>\r\n  </div>\r\n</modal>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div class=\"brewery\">\r\n\r\n  <div class=\"actions\">\r\n    <span class=\"fa fa-1x fa-industry\" aria-hidden=\"true\"></span>\r\n    <a href=\"#\" class=\"pull-right\" (click)=\"favorite($event)\">\r\n      <i *ngIf=\"!brewery.favorite\" class=\"fa fa-2x fa-star-o\" aria-hidden=\"true\"></i>\r\n      <i *ngIf=\"brewery.favorite\" class=\"fa fa-2x fa-star star\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"content\" (click)=\"select()\">\r\n    <div class=\"label\">\r\n      <img *ngIf=\"brewery.images\" class=\"img-responsive center-block\" src=\"{{brewery.images.medium}}\" />\r\n      <img *ngIf=\"!brewery.images\" class=\"img-responsive center-block\" src=\"./assets/img/brewery-generic.png\" />\r\n    </div>\r\n\r\n    <h6 class=\"title\" title=\"{{brewery.description ? brewery.description : 'N/A'}}\">\r\n      {{brewery.name}}\r\n    </h6>\r\n\r\n    <div class=\"date\">\r\n      <small>Established: {{brewery.established}}</small>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "  <!-- Results -->\r\n<div class=\"container\">\r\n  <br/>\r\n  <div class=\"row\">\r\n    <app-cards [items]=\"breweries\">\r\n      <template let-item=\"item\">\r\n        <brewery-card [brewery]=\"item\" (selected)=\"select(item);dialog.open();\"></brewery-card>\r\n      </template>\r\n    </app-cards>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Modal -->\r\n<modal #dialog size=\"large\" class=\"dialog\">\r\n  <div data-section=\"header\" *ngIf=\"selection\">\r\n    <span class=\"title\">\r\n        <span class=\"fa fa-1x fa-beer\" aria-hidden=\"true\"></span> \r\n        {{selection.name}}\r\n    </span>\r\n  </div>\r\n  <div data-section=\"body\" *ngIf=\"selection\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <em>{{selection.description}}</em>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\"></div>\r\n      <div class=\"col-sm-6\">\r\n        <img *ngIf=\"selection.images\" class=\"img-responsive center-block\" src=\"{{selection.images.medium}}\" />\r\n        <img *ngIf=\"!selection.images\" class=\"img-responsive center-block\" src=\"./assets/img/brewery-generic.png\" />\r\n      </div>\r\n      <div class=\"col-sm-3\"></div>\r\n    </div>\r\n  </div>\r\n  <div data-section=\"footer\" *ngIf=\"selection\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"dialog.close()\">Ok</button>\r\n  </div>\r\n</modal>\r\n\r\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3 col-sm-2 hidden-xs\">\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-sm-8 col-xs-12\">\r\n    <app-carousel>\r\n\r\n      <template app-carousel-slide>\r\n        <img src=\"./assets/img/beer-foam-1.jpg\" class=\"img-responsive center-block\" alt=\"foam\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Visit</h3>\r\n          <div class=\"text-center\">\r\n            <a routerLink=\"/breweries\" style=\"display: block\">\r\n              <img src=\"./assets/img/beer_factory.png\" class=\"img-responsive center-block\" alt=\"Breweries\">\r\n            </a>\r\n            <h2>Breweries</h2>\r\n          </div>\r\n        </div>\r\n      </template>\r\n\r\n      <template app-carousel-slide>\r\n        <img src=\"./assets/img/beer-foam-2.jpg\" class=\"img-responsive center-block\" alt=\"foam\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Visit</h3>\r\n          <div class=\"text-center\">\r\n            <a routerLink=\"/beers\" style=\"display: block\">\r\n              <img src=\"./assets/img/beer-glass.png\" class=\"img-responsive center-block\" alt=\"Beers\">\r\n            </a>\r\n            <h2>Beers</h2>\r\n          </div>\r\n        </div>\r\n      </template>\r\n\r\n      <template app-carousel-slide>\r\n        <img src=\"./assets/img/beer-foam-3.jpg\" class=\"img-responsive center-block\" alt=\"foam\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>History</h3>\r\n          <div>\r\n            <app-search-history></app-search-history>\r\n          </div>\r\n        </div>\r\n      </template>\r\n\r\n    </app-carousel>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 col-sm-2 hidden-xs\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4 text-center\">\r\n        <br><br>\r\n        <img alt=\"logo kiklos\" src=\"./assets/img/beer_logo.png\">\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <h2>A better way to discover craft beer</h2>\r\n\r\n        <h3>Tag lines</h3>\r\n        <p>\r\n            BreweryDB is your database of breweries, beers, beer events and guilds! \r\n            Our service is just about the facts.\r\n        </p>\r\n        <p>\r\n            All of our data is curated by our administrators, so you can be sure that the information you get is timely and accurate\r\n            We are proud to be a small part of the Craft Beer revolution!\r\n        </p>\r\n\r\n        <h3>Built for Developers</h3>\r\n        <p>\r\n            BreweryDB was made by developers, for developers. \r\n        </p>\r\n        <p>\r\n            Our vast collection of data can be accessed via our free API. \r\n        </p>\r\n\r\n        <h3>What people are saying</h3>\r\n        <p>\r\n            A great project that aims to build an open database of breweries and beers \r\n            <small>(ProgrammableWeb)</small>\r\n        </p>\r\n        <p>\r\n            The IMDB of Breweries <small>(Tech Cocktail)</small>\r\n        </p>\r\n        <p>\r\n            Just discovered @brewerydb had an API #buildbuildbuild \r\n            <small>(@gideonco)</small>\r\n        </p>\r\n\r\n        <h3>Copyright</h3>\r\n        <p>\r\n            For more details <a href=\"http://www.brewerydb.com/\">visit</a>\r\n        </p>\r\n\r\n        <h3>Terms</h3>\r\n        <p>\r\n            For more details <a href=\"http://www.brewerydb.com/index/terms\">visit</a>\r\n        </p>\r\n\r\n        <h3>Disclaimer</h3>\r\n        <p>\r\n            BreweryDB makes every effort to be accurate in our data set. If something is wrong, you can often submit the change yourself\r\n        </p>\r\n        <p>\r\n            2012 Brewers Association Beer Style Guidelines used with permission of Brewers Association.\r\n        </p>\r\n        <p>\r\n            All images of breweries, beers, guilds, or events are properties of those entities. \r\n            If an image you hold the copyright to is on BreweryDB.com and you would like it not to be, we understand. \r\n            Even though it makes our database more complete, and in return provides free marketing and enhanced recognition for your brand, we will remove it\r\n        </p>\r\n        <p>\r\n            The initial set of data was taken from OpenBeerDB (www.openbeerdb.com) in 2010 which was released under the Open Database License (ODbL) \r\n            (http://www.opendatacommons.org/licenses/odbl/1.0/). \r\n            After the initial import of data, user submissions and updates are what make up the current data set.\r\n        </p>\r\n\r\n        <h3>Shortcurt</h3>\r\n        <p>\r\n            <img class=\"center\" src=\"./assets/img/app-url.png\" alt=\"https://dandohotaru.github.io/labs.beers/\">\r\n        </p>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n        <p class=\"text-muted\">\r\n          <a routerLink=\"/about\">About</a>\r\n          <a routerLink=\"/glossary\">Glossary</a>\r\n          <a href=\"mailto:john.doe@gmail.com?Subject=Whaddup?\" target=\"_top\">\r\n              Contact us\r\n            </a>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"hidden-xs col-sm-6 col-md-8 text-right\">\r\n        <p class=\"text-muted text-right\">\r\n          <span>Last update: {{lastUpdate | date}} </span> |\r\n          <span class=\"hidden-xs\">Techday &copy;2017</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-sm-12 text-center\">\r\n    <a routerLink=\"/breweries\" style=\"display: block\">\r\n      <img src=\"./assets/img/beer-sign.jpg\" alt=\"beer ahead\">\r\n    </a>\r\n  </div>"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"row app-hdr\">\r\n\r\n    <!-- Brand -->\r\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-3 brand\">\r\n        <ul class=\"list-inline\">\r\n            <li>\r\n                <h2 >\r\n                    <a routerLink=\"/\">Demo</a>\r\n                </h2>\r\n            </li>\r\n            <li class=\"hidden-xs\">\r\n                <i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- Search -->\r\n    <div class=\"col-lg-6 col-md-6 col-sm-7 col-xs-7\">\r\n        <app-search-bar></app-search-bar>\r\n    </div>\r\n\r\n    <!-- Add -->\r\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\" style=\"padding-left:0px;\">\r\n        <ul class=\"list-inline\">\r\n            <li>\r\n                <div class=\"btn-group add-button\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span class=\"fa fa-plus\"></span> \r\n                        <span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                        <li><a id=\"addNewBeerLink\" href=\"#\">Beer</a></li>\r\n                        <li><a id=\"addNewBreweryLink\" href=\"#\">Brewery</a></li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<hr style=\"margin-top:0px;\" />"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<h3>Page not found</h3>"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n\r\n  <!-- Term -->\r\n  <input #searchBox id=\"queryField\" type=\"search\" class=\"form-control\" \r\n    placeholder=\"What would Bachus know about?\"\r\n    (keyup.enter)=\"search(searchBox.value)\"/>\r\n\r\n  <!-- Execute -->\r\n  <div class=\"input-group-btn\">\r\n    <button id=\"searchButton\" type=\"button\" class=\"btn btn-primary\" \r\n      (click)=\"search(searchBox.value)\">\r\n      <i class=\"fa fa-search\"></i>\r\n      <span class=\"hidden-xs\">\r\n        Search\r\n      </span>\r\n    </button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let search of searches\" class=\"col-xs-6 col-sm-12\">\n\n  <div style=\"padding: 0.25em\">\n    <a [routerLink]=\"['/search']\" [queryParams]=\"{q: search.term}\">\n      <span class=\"badge\">{{search.counter}}</span>\n    </a>\n    {{search.term}}\n  </div>\n\n</div>"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<div role=\"tabpanel\">\r\n  \r\n  <!-- Tabs -->\r\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n    <li role=\"presentation\" class=\"active\">\r\n      <a href=\"#beers\" aria-controls=\"beers\" role=\"tab\" data-toggle=\"tab\">\r\n        <span class=\"fa fa-th\" aria-hidden=\"true\"></span>\r\n        Beers\r\n        <span class=\"badge\">{{beers}}</span>\r\n      </a>\r\n    </li>\r\n    <li role=\"presentation\">\r\n      <a href=\"#breweries\" aria-controls=\"breweries\" role=\"tab\" data-toggle=\"tab\">\r\n        <span class=\"fa fa-th\" aria-hidden=\"true\"></span>\r\n        Breweries\r\n        <span class=\"badge\">{{breweries}}</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- Panels -->\r\n  <div class=\"tab-content\">\r\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"beers\">\r\n      <app-beer-list (loaded)=\"beers=$event.found\"></app-beer-list>\r\n    </div>\r\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"breweries\">\r\n      <app-brewery-list (loaded)=\"breweries=$event.found\"></app-brewery-list>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<div #myGrid class=\"grid\" [style.display]=\"hidden ? 'none' : ''\">\r\n\r\n    <div class=\"grid-col grid-col-1\"></div>\r\n    <div class=\"grid-col grid-col-2\"></div>\r\n    <div class=\"grid-col grid-col-3\"></div>\r\n    <div class=\"grid-col grid-col-4\"></div>\r\n\r\n    <div class=\"grid-card\" *ngFor=\"let item of items\">\r\n        <template\r\n            [ngTemplateOutlet]=\"template\" \r\n            [ngOutletContext]=\"{ item: item }\">\r\n        </template>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-id\" class=\"carousel slide\">\r\n\r\n    <ol class=\"carousel-indicators\">\r\n        <li *ngFor=\"let slide of slides\" \r\n            [id]=\"slide.id\" \r\n            [class.active]=\"slide.id === activeId\" \r\n            (click)=\"cycleToSelected(slide.id)\"></li>\r\n    </ol>\r\n\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let slide of slides\" class=\"item\" \r\n            [class.active]=\"slide.id === activeId\">\r\n            <template [ngTemplateOutlet]=\"slide.template\"></template>\r\n        </div>\r\n    </div>\r\n\r\n    <a class=\"left carousel-control\" role=\"button\" (click)=\"cycleToPrev()\">\r\n        <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" role=\"button\" (click)=\"cycleToNext()\">\r\n        <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\">\r\n    <div class=\"modal-dialog {{size == 'small' ? 'modal-sm' : 'modal-lg'}}\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">\r\n                    <ng-content select=\"[data-section=header]\"></ng-content>\r\n                </h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <ng-content select=\"[data-section=body]\"></ng-content>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <ng-content select=\"[data-section=footer]\"></ng-content>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(416);


/***/ })

},[792]);
//# sourceMappingURL=main.bundle.js.map