"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function mergeTap(project) {
    return operators_1.mergeMap(function (outerValue) { return rxjs_1.from(project(outerValue)).pipe(operators_1.mapTo(outerValue)); });
}
exports.mergeTap = mergeTap;
//# sourceMappingURL=mergeTap.js.map