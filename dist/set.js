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
function set(key, project) {
    return operators_1.map(function (value) {
        var _a;
        return (__assign({}, value, (_a = {}, _a[key] = project(value), _a)));
    });
}
exports.set = set;
//# sourceMappingURL=set.js.map