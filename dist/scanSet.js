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
var operators_1 = require("rxjs/operators");
function scanSet(key, fn, seed) {
    var _a;
    return operators_1.scan(function (res, data) {
        var _a;
        return (__assign({}, data, (_a = {}, _a[key] = fn(res[key], data), _a)));
    }, (_a = {}, _a[key] = seed, _a));
}
exports.scanSet = scanSet;
//# sourceMappingURL=scanSet.js.map