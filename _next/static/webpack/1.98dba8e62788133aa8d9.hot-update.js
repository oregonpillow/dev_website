webpackHotUpdate_N_E(1,{

/***/ "./components/System/WindowManager/Window.tsx":
/*!****************************************************!*\
  !*** ./components/System/WindowManager/Window.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/WindowManager/Window.module.scss */ \"./styles/System/WindowManager/Window.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_WindowManager_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/WindowManager/TitleBar */ \"./components/System/WindowManager/TitleBar.tsx\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/window */ \"./utils/window.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/dustin/Downloads/x/components/System/WindowManager/Window.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$icon = _ref.icon,\n      icon = _ref$icon === void 0 ? '' : _ref$icon,\n      id = _ref.id,\n      _ref$name = _ref.name,\n      name = _ref$name === void 0 ? '' : _ref$name,\n      bgColor = _ref.bgColor,\n      onMaximize = _ref.onMaximize,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      onDrag = _ref.onDrag,\n      onResize = _ref.onResize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      zIndex = _ref.zIndex,\n      maximized = _ref.maximized,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 0 : _ref$height,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? 0 : _ref$width;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__[\"SessionContext\"]),\n      foregroundId = _useContext.session.foregroundId;\n\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useEffect\"])(function () {\n    Object(_utils_elements__WEBPACK_IMPORTED_MODULE_3__[\"focusResizableElementRef\"])(windowRef);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_5__[\"Rnd\"], {\n    ref: windowRef,\n    enableUserSelectHack: false,\n    className: \"\".concat(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window, \" \").concat(maximized ? _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximized : '', \" \").concat(foregroundId === id ? _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.foreground : ''),\n    dragHandleClassName: \"handle\",\n    resizeHandleClasses: Object(_utils_window__WEBPACK_IMPORTED_MODULE_4__[\"resizeHandleClasses\"])(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a),\n    cancel: \".cancel\",\n    size: {\n      height: maximized ? '100%' : height,\n      width: maximized ? '100%' : width\n    },\n    minHeight: 250,\n    minWidth: 250,\n    tabIndex: -1,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_3__[\"focusOnDrag\"],\n    onDragStop: onDrag,\n    onResizeStop: onResize,\n    enableResizing: !maximized,\n    disableDragging: maximized,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_WindowManager_TitleBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      icon: icon,\n      name: name,\n      onMaximize: onMaximize,\n      onMinimize: onMinimize,\n      onClose: onClose\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n      style: {\n        backgroundColor: bgColor\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Window, \"h6GRU5KzfMKVmKb3m/vfGDOJvqg=\");\n\n_c = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cudHN4PzJhMGQiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJpY29uIiwiaWQiLCJuYW1lIiwiYmdDb2xvciIsIm9uTWF4aW1pemUiLCJvbk1pbmltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkRyYWciLCJvblJlc2l6ZSIsImxvY2tBc3BlY3RSYXRpbyIsInpJbmRleCIsIm1heGltaXplZCIsImhlaWdodCIsIndpZHRoIiwidXNlQ29udGV4dCIsIlNlc3Npb25Db250ZXh0IiwiZm9yZWdyb3VuZElkIiwic2Vzc2lvbiIsIndpbmRvd1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiIsInN0eWxlcyIsIndpbmRvdyIsImZvcmVncm91bmQiLCJyZXNpemVIYW5kbGVDbGFzc2VzIiwiZm9jdXNPbkRyYWciLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUE4QixHQUFHLFNBQWpDQSxNQUFpQyxPQWtCakM7QUFBQTs7QUFBQSxNQWpCSkMsUUFpQkksUUFqQkpBLFFBaUJJO0FBQUEsdUJBaEJKQyxJQWdCSTtBQUFBLE1BaEJKQSxJQWdCSSwwQkFoQkcsRUFnQkg7QUFBQSxNQWZKQyxFQWVJLFFBZkpBLEVBZUk7QUFBQSx1QkFkSkMsSUFjSTtBQUFBLE1BZEpBLElBY0ksMEJBZEcsRUFjSDtBQUFBLE1BYkpDLE9BYUksUUFiSkEsT0FhSTtBQUFBLE1BWkpDLFVBWUksUUFaSkEsVUFZSTtBQUFBLE1BWEpDLFVBV0ksUUFYSkEsVUFXSTtBQUFBLE1BVkpDLE9BVUksUUFWSkEsT0FVSTtBQUFBLE1BVEpDLE9BU0ksUUFUSkEsT0FTSTtBQUFBLE1BUkpDLE1BUUksUUFSSkEsTUFRSTtBQUFBLE1BUEpDLE1BT0ksUUFQSkEsTUFPSTtBQUFBLE1BTkpDLFFBTUksUUFOSkEsUUFNSTtBQUFBLE1BTEpDLGVBS0ksUUFMSkEsZUFLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLHlCQUZKQyxNQUVJO0FBQUEsTUFGSkEsTUFFSSw0QkFGSyxDQUVMO0FBQUEsd0JBREpDLEtBQ0k7QUFBQSxNQURKQSxLQUNJLDJCQURJLENBQ0o7O0FBQUEsb0JBR0FDLHdEQUFVLENBQUNDLHVFQUFELENBSFY7QUFBQSxNQUVTQyxZQUZULGVBRUZDLE9BRkUsQ0FFU0QsWUFGVDs7QUFJSixNQUFNRSxTQUFTLEdBQUdDLG9EQUFNLENBQU0sSUFBTixDQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsb0ZBQXdCLENBQUNILFNBQUQsQ0FBeEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxPQUFHLEVBQUVBLFNBRFA7QUFFRSx3QkFBb0IsRUFBRSxLQUZ4QjtBQUdFLGFBQVMsWUFBS0ksc0ZBQU0sQ0FBQ0MsTUFBWixjQUFzQlosU0FBUyxHQUFHVyxzRkFBTSxDQUFDWCxTQUFWLEdBQXNCLEVBQXJELGNBQ1BLLFlBQVksS0FBS2pCLEVBQWpCLEdBQXNCdUIsc0ZBQU0sQ0FBQ0UsVUFBN0IsR0FBMEMsRUFEbkMsQ0FIWDtBQU1FLHVCQUFtQixFQUFDLFFBTnRCO0FBT0UsdUJBQW1CLEVBQUVDLHlFQUFtQixDQUFDSCxzRkFBRCxDQVAxQztBQVFFLFVBQU0sRUFBQyxTQVJUO0FBU0UsUUFBSSxFQUFFO0FBQ0pWLFlBQU0sRUFBRUQsU0FBUyxHQUFHLE1BQUgsR0FBWUMsTUFEekI7QUFFSkMsV0FBSyxFQUFFRixTQUFTLEdBQUcsTUFBSCxHQUFZRTtBQUZ4QixLQVRSO0FBYUUsYUFBUyxFQUFFLEdBYmI7QUFjRSxZQUFRLEVBQUUsR0FkWjtBQWVFLFlBQVEsRUFBRSxDQUFDLENBZmI7QUFnQkUsV0FBTyxFQUFFUixPQWhCWDtBQWlCRSxVQUFNLEVBQUVDLE1BakJWO0FBa0JFLGVBQVcsRUFBRW9CLDJEQWxCZjtBQW1CRSxjQUFVLEVBQUVuQixNQW5CZDtBQW9CRSxnQkFBWSxFQUFFQyxRQXBCaEI7QUFxQkUsa0JBQWMsRUFBRSxDQUFDRyxTQXJCbkI7QUFzQkUsbUJBQWUsRUFBRUEsU0F0Qm5CO0FBdUJFLG1CQUFlLEVBQUVGLGVBdkJuQjtBQXdCRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFOQTtBQUFGLEtBeEJUO0FBQUEsNEJBMEJFLHFFQUFDLGlGQUFEO0FBQ0UsVUFBSSxFQUFFWixJQURSO0FBRUUsVUFBSSxFQUFFRSxJQUZSO0FBR0UsZ0JBQVUsRUFBRUUsVUFIZDtBQUlFLGdCQUFVLEVBQUVDLFVBSmQ7QUFLRSxhQUFPLEVBQUVDO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixlQWlDRTtBQUFTLGVBQVMsRUFBRWtCLHNGQUFNLENBQUNLLE9BQTNCO0FBQW9DLFdBQUssRUFBRTtBQUFFQyx1QkFBZSxFQUFFM0I7QUFBbkIsT0FBM0M7QUFBQSxnQkFDR0o7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBbkVEOztHQUFNRCxNOztLQUFBQSxNO0FBcUVTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2dyYW1zJztcblxuaW1wb3J0IFRpdGxlQmFyIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9UaXRsZUJhcic7XG5pbXBvcnQgeyBmb2N1c09uRHJhZywgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmLCBpc1Jlc2l6YWJsZUVsZW1lbnRSZWZGb2N1c2VkIH0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5pbXBvcnQgeyByZXNpemVIYW5kbGVDbGFzc2VzIH0gZnJvbSAnQC91dGlscy93aW5kb3cnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2luZG93OiBSZWFjdC5GQzxBcHBDb21wb25lbnQ+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGljb24gPSAnJyxcbiAgaWQsXG4gIG5hbWUgPSAnJyxcbiAgYmdDb2xvcixcbiAgb25NYXhpbWl6ZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25DbG9zZSxcbiAgb25Gb2N1cyxcbiAgb25CbHVyLFxuICBvbkRyYWcsXG4gIG9uUmVzaXplLFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIHpJbmRleCxcbiAgbWF4aW1pemVkLFxuICBoZWlnaHQgPSAwLFxuICB3aWR0aCA9IDBcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIHNlc3Npb246IHsgZm9yZWdyb3VuZElkIH1cbiAgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCB3aW5kb3dSZWYgPSB1c2VSZWY8Um5kPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZih3aW5kb3dSZWYpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um5kXG4gICAgICByZWY9e3dpbmRvd1JlZn1cbiAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrPXtmYWxzZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLndpbmRvd30gJHttYXhpbWl6ZWQgPyBzdHlsZXMubWF4aW1pemVkIDogJyd9ICR7XG4gICAgICAgIGZvcmVncm91bmRJZCA9PT0gaWQgPyBzdHlsZXMuZm9yZWdyb3VuZCA6ICcnXG4gICAgICB9YH1cbiAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJoYW5kbGVcIlxuICAgICAgcmVzaXplSGFuZGxlQ2xhc3Nlcz17cmVzaXplSGFuZGxlQ2xhc3NlcyhzdHlsZXMpfVxuICAgICAgY2FuY2VsPVwiLmNhbmNlbFwiXG4gICAgICBzaXplPXt7XG4gICAgICAgIGhlaWdodDogbWF4aW1pemVkID8gJzEwMCUnIDogaGVpZ2h0LFxuICAgICAgICB3aWR0aDogbWF4aW1pemVkID8gJzEwMCUnIDogd2lkdGhcbiAgICAgIH19XG4gICAgICBtaW5IZWlnaHQ9ezI1MH1cbiAgICAgIG1pbldpZHRoPXsyNTB9XG4gICAgICB0YWJJbmRleD17LTF9XG4gICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBvbkRyYWdTdGFydD17Zm9jdXNPbkRyYWd9XG4gICAgICBvbkRyYWdTdG9wPXtvbkRyYWd9XG4gICAgICBvblJlc2l6ZVN0b3A9e29uUmVzaXplfVxuICAgICAgZW5hYmxlUmVzaXppbmc9eyFtYXhpbWl6ZWR9XG4gICAgICBkaXNhYmxlRHJhZ2dpbmc9e21heGltaXplZH1cbiAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgc3R5bGU9e3sgekluZGV4IH19XG4gICAgPlxuICAgICAgPFRpdGxlQmFyXG4gICAgICAgIGljb249e2ljb259XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uTWF4aW1pemU9e29uTWF4aW1pemV9XG4gICAgICAgIG9uTWluaW1pemU9e29uTWluaW1pemV9XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAvPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/WindowManager/Window.tsx\n");

/***/ })

})