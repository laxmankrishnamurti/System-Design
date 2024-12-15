var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player() {
        this.wicket = 2;
        this.six = 6;
    }
    return Player;
}());
var Parent1 = /** @class */ (function () {
    function Parent1() {
        this.initializeNameProperty();
    }
    Parent1.prototype.initializeNameProperty = function () {
        this.name = "Hello World!";
    };
    return Parent1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.initializeNameProperty = function () {
        console.log("Hello world! from derived class");
    };
    return Child1;
}(Parent1));
var instance12 = new Parent1();
console.log("instance12 name", instance12.name);
var instance1 = new Child1();
console.log("instance1 name", instance1.name);
