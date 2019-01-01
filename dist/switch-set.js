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
function switchSet(key, project) {
    return operators_1.switchMap(function (outerValue, index) { return rxjs_1.from(project(outerValue, index)).pipe(operators_1.map(function (innerValue) {
        var _a;
        return (__assign({}, outerValue, (_a = {}, _a[key] = innerValue, _a)));
    })); });
}
exports.switchSet = switchSet;
//# sourceMappingURL=switch-set.js.map