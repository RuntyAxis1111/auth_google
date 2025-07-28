"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/middleware */ \"(middleware)/./node_modules/next-auth/middleware.js\");\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__);\n\nconst runtime = 'edge';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__.withAuth)(function middleware(req) {\n// Add any custom middleware logic here if needed\n}, {\n    callbacks: {\n        authorized: ({ token })=>!!token\n    }\n}));\nconst config = {\n    matcher: [\n        /*\n     * Match all request paths except for the ones starting with:\n     * - api/auth (authentication routes)\n     * - _next/static (static files)\n     * - _next/image (image optimization files)\n     * - favicon.ico (favicon file)\n     * - signin (login page)\n     */ '/((?!api/auth|_next/static|_next/image|favicon.ico|signin).*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQUV6QyxNQUFNQyxVQUFVLE9BQU87QUFFOUIsaUVBQWVELDhEQUFRQSxDQUNyQixTQUFTRSxXQUFXQyxHQUFHO0FBQ3JCLGlEQUFpRDtBQUNuRCxHQUNBO0lBQ0VDLFdBQVc7UUFDVEMsWUFBWSxDQUFDLEVBQUVDLEtBQUssRUFBRSxHQUFLLENBQUMsQ0FBQ0E7SUFDL0I7QUFDRixJQUNBO0FBRUssTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUNQOzs7Ozs7O0tBT0MsR0FDRDtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsiL2hvbWUvcHJvamVjdC9taWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSBcIm5leHQtYXV0aC9taWRkbGV3YXJlXCI7XG5cbmV4cG9ydCBjb25zdCBydW50aW1lID0gJ2VkZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChcbiAgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgICAvLyBBZGQgYW55IGN1c3RvbSBtaWRkbGV3YXJlIGxvZ2ljIGhlcmUgaWYgbmVlZGVkXG4gIH0sXG4gIHtcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgIGF1dGhvcml6ZWQ6ICh7IHRva2VuIH0pID0+ICEhdG9rZW5cbiAgICB9LFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBcbiAgbWF0Y2hlcjogW1xuICAgIC8qXG4gICAgICogTWF0Y2ggYWxsIHJlcXVlc3QgcGF0aHMgZXhjZXB0IGZvciB0aGUgb25lcyBzdGFydGluZyB3aXRoOlxuICAgICAqIC0gYXBpL2F1dGggKGF1dGhlbnRpY2F0aW9uIHJvdXRlcylcbiAgICAgKiAtIF9uZXh0L3N0YXRpYyAoc3RhdGljIGZpbGVzKVxuICAgICAqIC0gX25leHQvaW1hZ2UgKGltYWdlIG9wdGltaXphdGlvbiBmaWxlcylcbiAgICAgKiAtIGZhdmljb24uaWNvIChmYXZpY29uIGZpbGUpXG4gICAgICogLSBzaWduaW4gKGxvZ2luIHBhZ2UpXG4gICAgICovXG4gICAgJy8oKD8hYXBpL2F1dGh8X25leHQvc3RhdGljfF9uZXh0L2ltYWdlfGZhdmljb24uaWNvfHNpZ25pbikuKiknLFxuICBdXG59OyJdLCJuYW1lcyI6WyJ3aXRoQXV0aCIsInJ1bnRpbWUiLCJtaWRkbGV3YXJlIiwicmVxIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsInRva2VuIiwiY29uZmlnIiwibWF0Y2hlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});