/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

eval("const bOpenMenu = document.querySelector('#button-open-menu');\r\nconst bCloseMenu = document.querySelector('#button-close-menu');\r\n\r\nconst nList = document.querySelector('.navlist');\r\n\r\nconst bodyElement = document.body;\r\n\r\nbOpenMenu.addEventListener('click', () => {\r\n    if (nList.classList.contains('off')) {\r\n        nList.classList.remove('off');\r\n        bOpenMenu.classList.add('off');\r\n        bCloseMenu.classList.remove('off');\r\n        bodyElement.classList.add('no-scroll');\r\n    }\r\n});\r\n\r\nbCloseMenu.addEventListener('click', () => {\r\n        nList.classList.add('off');\r\n        bOpenMenu.classList.remove('off');\r\n        bCloseMenu.classList.add('off');\r\n        bodyElement.classList.remove('no-scroll');\r\n});\n\n//# sourceURL=webpack://marvelcollection/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/menu.js"]();
/******/ 	
/******/ })()
;