"use strict";
(self["webpackChunkpractice"] = self["webpackChunkpractice"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/print.js");



(0,_print__WEBPACK_IMPORTED_MODULE_0__.sayHello)("Laxman Krishnamurti")
console.log("This is index.js file")
console.log("This is development guide");
(0,_print__WEBPACK_IMPORTED_MODULE_0__["default"])("index.js")

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print),
/* harmony export */   sayHello: () => (/* binding */ sayHello)
/* harmony export */ });
function print(filename){
    console.log("Print is called from", filename);
}

function sayHello(name){
    window.alert(`Hello! ${name}`)
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ087O0FBRW5DLGdEQUFRO0FBQ1I7QUFDQTtBQUNBLGtEQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUNOVTtBQUNmO0FBQ0E7O0FBRU87QUFDUCwyQkFBMkIsS0FBSztBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWNlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ByYWN0aWNlLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmludCBmcm9tIFwiLi9wcmludFwiO1xuaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9wcmludFwiO1xuXG5zYXlIZWxsbyhcIkxheG1hbiBLcmlzaG5hbXVydGlcIilcbmNvbnNvbGUubG9nKFwiVGhpcyBpcyBpbmRleC5qcyBmaWxlXCIpXG5jb25zb2xlLmxvZyhcIlRoaXMgaXMgZGV2ZWxvcG1lbnQgZ3VpZGVcIik7XG5wcmludChcImluZGV4LmpzXCIpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQoZmlsZW5hbWUpe1xuICAgIGNvbnNvbGUubG9nKFwiUHJpbnQgaXMgY2FsbGVkIGZyb21cIiwgZmlsZW5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZSl7XG4gICAgd2luZG93LmFsZXJ0KGBIZWxsbyEgJHtuYW1lfWApXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9