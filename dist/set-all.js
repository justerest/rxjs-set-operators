"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
function setAll(key) {
    return operators_1.map(function (value) {
        var _a;
        return (_a = {}, _a[key] = value, _a);
    });
}
exports.setAll = setAll;
//# sourceMappingURL=set-all.js.map