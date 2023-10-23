"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let numbers = [1, 2, 3, 4];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(20000);
let employee = { id: 1 };
let employer = { id: 1, name: "Jomo" };
let together = { drag: function () { }, resize: function () { } };
//# sourceMappingURL=index.js.map