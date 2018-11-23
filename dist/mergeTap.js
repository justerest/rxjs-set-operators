"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function mergeTap(fn) {
    return operators_1.mergeMap(function (data) { return rxjs_1.from(fn(data)).pipe(operators_1.mapTo(data)); });
}
exports.mergeTap = mergeTap;
//# sourceMappingURL=mergeTap.js.map