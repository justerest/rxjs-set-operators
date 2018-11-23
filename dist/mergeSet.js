"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function mergeSet(key, fn) {
    return operators_1.mergeMap(function (data) { return rxjs_1.from(fn(data)).pipe(operators_1.map(function (response) {
        var _a;
        return (__assign({}, data, (_a = {}, _a[key] = response, _a)));
    })); });
}
exports.mergeSet = mergeSet;
//# sourceMappingURL=mergeSet.js.map