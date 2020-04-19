(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["app.desktop"],{

/***/ "../app-shared/src/components/Navigation/Navigation.tsx":
/*!**************************************************************!*\
  !*** ../app-shared/src/components/Navigation/Navigation.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");

const Navigation = () => react_1.default.createElement("ul", null, react_1.default.createElement("li", null, react_1.default.createElement(react_router_dom_1.Link, {
  to: "/"
}, "Home")), react_1.default.createElement("li", null, react_1.default.createElement(react_router_dom_1.Link, {
  to: "/about"
}, "About")), react_1.default.createElement("li", null, react_1.default.createElement(react_router_dom_1.Link, {
  to: "/app"
}, "App Home")), react_1.default.createElement("li", null, react_1.default.createElement(react_router_dom_1.Link, {
  to: "/app/about"
}, "App About")));

exports.default = Navigation;

/***/ }),

/***/ "../app-shared/src/pages/About/index.tsx":
/*!***********************************************!*\
  !*** ../app-shared/src/pages/About/index.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

const react_helmet_1 = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/lib/Helmet.js");

class About extends react_1.Component {
  render() {
    return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("title", null, "The App About Page")));
  }

}

exports.default = About;

/***/ }),

/***/ "../app-shared/src/pages/Home/index.tsx":
/*!**********************************************!*\
  !*** ../app-shared/src/pages/Home/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

const react_helmet_1 = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/lib/Helmet.js");

class Home extends react_1.Component {
  render() {
    return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("title", null, "The App Homepage")));
  }

}

exports.default = Home;

/***/ }),

/***/ "../app-shared/src/routes.tsx":
/*!************************************!*\
  !*** ../app-shared/src/routes.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const component_1 = __importDefault(__webpack_require__(/*! @loadable/component */ "../node_modules/@loadable/component/dist/loadable.esm.js"));

const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");

const About = component_1.default(
/* #__LOADABLE__ */
() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @app-shared/pages/About */ "../app-shared/src/pages/About/index.tsx"))));
const Home = component_1.default(
/* #__LOADABLE__ */
() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! @app-shared/pages/Home */ "../app-shared/src/pages/Home/index.tsx"))));
const routes = [{
  path: '/app',
  component: Home
}, {
  path: '/app/about',
  component: About
}];
exports.AppRoutes = routes.map(({
  path,
  component
}) => react_1.default.createElement(react_router_dom_1.Route, {
  key: path,
  path: path,
  component: component,
  exact: true
}));
exports.default = routes;

/***/ }),

/***/ "./src/app.desktop.tsx":
/*!*****************************!*\
  !*** ./src/app.desktop.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

const react_dom_1 = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");

const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");

const Navigation_1 = __importDefault(__webpack_require__(/*! @app-shared/components/Navigation/Navigation */ "../app-shared/src/components/Navigation/Navigation.tsx"));

const routes_1 = __webpack_require__(/*! @app-shared/routes */ "../app-shared/src/routes.tsx");

class App extends react_1.Component {
  render() {
    return react_1.default.createElement("div", null, react_1.default.createElement(Navigation_1.default, null), react_1.default.createElement("main", {
      className: "main"
    }, routes_1.AppRoutes));
  }

}

react_dom_1.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null, react_1.default.createElement(App, null)), document.querySelector('#app'));

/***/ })

},[["./src/app.desktop.tsx","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYXBwLXNoYXJlZC9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24udHN4Iiwid2VicGFjazovLy8uLi9hcHAtc2hhcmVkL3NyYy9wYWdlcy9BYm91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4uL2FwcC1zaGFyZWQvc3JjL3BhZ2VzL0hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uLi9hcHAtc2hhcmVkL3NyYy9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAuZGVza3RvcC50c3giXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwicmVhY3RfMSIsInJlcXVpcmUiLCJyZWFjdF9yb3V0ZXJfZG9tXzEiLCJOYXZpZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJMaW5rIiwidG8iLCJfX2ltcG9ydFN0YXIiLCJyZXN1bHQiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVhY3RfaGVsbWV0XzEiLCJBYm91dCIsIkNvbXBvbmVudCIsInJlbmRlciIsIkZyYWdtZW50IiwiSGVsbWV0IiwiSG9tZSIsImNvbXBvbmVudF8xIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIkFwcFJvdXRlcyIsIm1hcCIsIlJvdXRlIiwia2V5IiwiZXhhY3QiLCJyZWFjdF9kb21fMSIsIk5hdmlnYXRpb25fMSIsInJvdXRlc18xIiwiQXBwIiwiY2xhc3NOYW1lIiwiQnJvd3NlclJvdXRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFB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bEM7O0FBQ0EsTUFBTWdDLFlBQVksR0FBR3hDLGVBQWUsQ0FBQ1EsbUJBQU8sQ0FBQyw0R0FBRCxDQUFSLENBQXBDOztBQUNBLE1BQU1pQyxRQUFRLEdBQUdqQyxtQkFBTyxDQUFDLHdEQUFELENBQXhCOztBQUNBLE1BQU1rQyxHQUFOLFNBQWtCbkMsT0FBTyxDQUFDZSxTQUExQixDQUFvQztBQUNoQ0MsUUFBTSxHQUFHO0FBQ0wsV0FBUWhCLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsYUFBaEIsQ0FBOEIsS0FBOUIsRUFBcUMsSUFBckMsRUFDSkwsT0FBTyxDQUFDSSxPQUFSLENBQWdCQyxhQUFoQixDQUE4QjRCLFlBQVksQ0FBQzdCLE9BQTNDLEVBQW9ELElBQXBELENBREksRUFFSkosT0FBTyxDQUFDSSxPQUFSLENBQWdCQyxhQUFoQixDQUE4QixNQUE5QixFQUFzQztBQUFFK0IsZUFBUyxFQUFFO0FBQWIsS0FBdEMsRUFBNkRGLFFBQVEsQ0FBQ1AsU0FBdEUsQ0FGSSxDQUFSO0FBR0g7O0FBTCtCOztBQU9wQ0ssV0FBVyxDQUFDaEIsTUFBWixDQUFtQmhCLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsYUFBaEIsQ0FBOEJILGtCQUFrQixDQUFDbUMsYUFBakQsRUFBZ0UsSUFBaEUsRUFDZnJDLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsYUFBaEIsQ0FBOEI4QixHQUE5QixFQUFtQyxJQUFuQyxDQURlLENBQW5CLEVBQytDRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FEL0MsRSIsImZpbGUiOiJhcHAuZGVza3RvcC5iMzZiMDgyZjg1OTgzZDkwNjk4Ny5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCxcbiAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB7IHRvOiBcIi9cIiB9LCBcIkhvbWVcIikpLFxuICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkxpbmssIHsgdG86IFwiL2Fib3V0XCIgfSwgXCJBYm91dFwiKSksXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgeyB0bzogXCIvYXBwXCIgfSwgXCJBcHAgSG9tZVwiKSksXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgeyB0bzogXCIvYXBwL2Fib3V0XCIgfSwgXCJBcHAgQWJvdXRcIikpKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBOYXZpZ2F0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCByZWFjdF9oZWxtZXRfMSA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7XG5jbGFzcyBBYm91dCBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfaGVsbWV0XzEuSGVsbWV0LCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgXCJUaGUgQXBwIEFib3V0IFBhZ2VcIikpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQWJvdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHJlYWN0X2hlbG1ldF8xID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcbmNsYXNzIEhvbWUgZXh0ZW5kcyByZWFjdF8xLkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X2hlbG1ldF8xLkhlbG1ldCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIFwiVGhlIEFwcCBIb21lcGFnZVwiKSkpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIb21lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbmNvbnN0IEFib3V0ID0gY29tcG9uZW50XzEuZGVmYXVsdChcbi8qICNfX0xPQURBQkxFX18gKi8gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBfX2ltcG9ydFN0YXIocmVxdWlyZSgnQGFwcC1zaGFyZWQvcGFnZXMvQWJvdXQnKSkpKTtcbmNvbnN0IEhvbWUgPSBjb21wb25lbnRfMS5kZWZhdWx0KFxuLyogI19fTE9BREFCTEVfXyAqLyAoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IF9faW1wb3J0U3RhcihyZXF1aXJlKCdAYXBwLXNoYXJlZC9wYWdlcy9Ib21lJykpKSk7XG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnL2FwcCcsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2FwcC9hYm91dCcsXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRcbiAgICB9XG5dO1xuZXhwb3J0cy5BcHBSb3V0ZXMgPSByb3V0ZXMubWFwKCh7IHBhdGgsIGNvbXBvbmVudCB9KSA9PiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IGtleTogcGF0aCwgcGF0aDogcGF0aCwgY29tcG9uZW50OiBjb21wb25lbnQsIGV4YWN0OiB0cnVlIH0pKSk7XG5leHBvcnRzLmRlZmF1bHQgPSByb3V0ZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHJlYWN0X2RvbV8xID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcbmNvbnN0IHJlYWN0X3JvdXRlcl9kb21fMSA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuY29uc3QgTmF2aWdhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAYXBwLXNoYXJlZC9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvblwiKSk7XG5jb25zdCByb3V0ZXNfMSA9IHJlcXVpcmUoXCJAYXBwLXNoYXJlZC9yb3V0ZXNcIik7XG5jbGFzcyBBcHAgZXh0ZW5kcyByZWFjdF8xLkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uXzEuZGVmYXVsdCwgbnVsbCksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1haW5cIiwgeyBjbGFzc05hbWU6IFwibWFpblwiIH0sIHJvdXRlc18xLkFwcFJvdXRlcykpKTtcbiAgICB9XG59XG5yZWFjdF9kb21fMS5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLkJyb3dzZXJSb3V0ZXIsIG51bGwsXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKSksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9