/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("async function getComponent(){\n    const element = document.createElement('div') \n\n    const {default: _} = await __webpack_require__.e(/*! import() */ \"vendors\").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ \"./node_modules/lodash/lodash.js\", 23))\n    element.innerHTML = _.join(['Hello webpcak', 'learning', 'caching'], ' ')\n\n    return element;\n}\n\ngetComponent()\n.then((component) => {\n    document.body.appendChild(component)\n})\n.catch((error) => {\n    console.log(`There was some error while trying to get component ${error}`)\n})\n\n//# sourceURL=webpack://src/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);