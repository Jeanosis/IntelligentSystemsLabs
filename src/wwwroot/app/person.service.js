"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var PersonService = (function () {
    function PersonService(_http) {
        this._http = _http;
    }
    PersonService.prototype.loadData = function () {
        var _this = this;
        return this._http.get('/api/persons')
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    PersonService.prototype.extractArray = function (res, showProgress) {
        if (showProgress === void 0) { showProgress = true; }
        var data = res.json();
        console.log(data);
        return data || [];
    };
    PersonService.prototype.handleErrorPromise = function (error) {
        try {
            error = JSON.parse(error._body);
        }
        catch (e) {
        }
        var errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? error.status + " - " + error.statusText
                        : 'unknown server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return PersonService;
}());
PersonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map