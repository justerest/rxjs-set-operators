"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
function setAll(key) {
    return operators_1.map(function (data) {
        var _a;
        return (_a = {}, _a[key] = data, _a);
    });
}
exports.setAll = setAll;
//# sourceMappingURL=setAll.js.map