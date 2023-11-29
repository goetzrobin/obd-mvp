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

/***/ "./src/worker/index.js":
/*!*****************************!*\
  !*** ./src/worker/index.js ***!
  \*****************************/
/***/ (() => {

eval("self.addEventListener(\"push\", async (event)=>{\n    if (event.data) {\n        const eventData = await event.data.json();\n        void showLocalNotification(eventData.title, eventData.body, self.registration);\n    }\n});\nconst showLocalNotification = async (title, body, swRegistration)=>{\n    await swRegistration.showNotification(title, {\n        body,\n        icon: \"/icons/android-chrome-192x192.png\"\n    });\n};\n\n\n//# sourceURL=webpack://obd-mvp/./src/worker/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker/index.js"]();
/******/ 	
/******/ })()
;