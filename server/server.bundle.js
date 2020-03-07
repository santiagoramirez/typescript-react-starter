/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './server/src/server.tsx')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './server/src/server.tsx':
      /*!*******************************!*\
  !*** ./server/src/server.tsx ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function(mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        var __importStar =
          (this && this.__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result['default'] = mod;
            return result;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        __webpack_require__(/*! babel-polyfill */ 'babel-polyfill');
        const cookie_parser_1 = __importDefault(
          __webpack_require__(/*! cookie-parser */ 'cookie-parser')
        );
        const express_1 = __importDefault(
          __webpack_require__(/*! express */ 'express')
        );
        const express_manifest_helpers_1 = __importDefault(
          __webpack_require__(
            /*! express-manifest-helpers */ 'express-manifest-helpers'
          )
        );
        const http_errors_1 = __importDefault(
          __webpack_require__(/*! http-errors */ 'http-errors')
        );
        const path_1 = __importDefault(__webpack_require__(/*! path */ 'path'));
        const react_1 = __importStar(__webpack_require__(/*! react */ 'react'));
        const render_page_1 = __importDefault(
          __webpack_require__(
            /*! @server/utils/render-page */ './server/src/utils/render-page.ts'
          )
        );
        const Home = react_1.lazy(() =>
          Promise.resolve().then(() =>
            __importStar(
              __webpack_require__(
                /*! @server/views/pages/home */ './server/src/views/pages/home/index.tsx'
              )
            )
          )
        );
        const app = express_1.default();
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.use(cookie_parser_1.default());
        app.use(
          express_manifest_helpers_1.default({
            manifestPath: path_1.default.join(
              __dirname,
              'public/dist/manifest.json'
            ),
            prependPath: '/public/dist/'
          })
        );
        app.use(
          '/public',
          express_1.default.static(
            path_1.default.resolve(__dirname, './public')
          )
        );
        app.get('/', (req, res) => {
          res.send(
            render_page_1.default(react_1.default.createElement(Home, null))
          );
        });
        app.use((req, res, next) => {
          next(http_errors_1.default(404));
        });
        app.listen({ port: '3000' }, () => {
          // tslint:disable-next-line:no-console
          console.log(`Server ready at http://localhost:${'3000'}`);
        });

        /***/
      },

    /***/ './server/src/utils/render-page.ts':
      /*!*****************************************!*\
  !*** ./server/src/utils/render-page.ts ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', { value: true });
        const express_manifest_helpers_1 = __webpack_require__(
          /*! express-manifest-helpers */ 'express-manifest-helpers'
        );
        const server_1 = __webpack_require__(
          /*! react-dom/server */ 'react-dom/server'
        );
        const react_helmet_1 = __webpack_require__(
          /*! react-helmet */ 'react-helmet'
        );
        function renderPage(component) {
          const helmet = react_helmet_1.Helmet.renderStatic();
          return `
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        ${server_1.renderToString(component)}
        <script src=${express_manifest_helpers_1.assetPath('app.js')}></script>
      </body>
    </html>
  `;
        }
        exports.default = renderPage;

        /***/
      },

    /***/ './server/src/views/layouts/default.layout.tsx':
      /*!*****************************************************!*\
  !*** ./server/src/views/layouts/default.layout.tsx ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var __importStar =
          (this && this.__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result['default'] = mod;
            return result;
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        const react_1 = __importStar(__webpack_require__(/*! react */ 'react'));
        class DefaultLayout extends react_1.Component {
          render() {
            return react_1.default.createElement(
              react_1.default.Fragment,
              null,
              react_1.default.createElement(
                'header',
                { className: 'header' },
                'Header content goes here...'
              ),
              react_1.default.createElement(
                'div',
                { className: 'main' },
                this.props.children
              ),
              react_1.default.createElement(
                'footer',
                { className: 'footer' },
                'Footer content goes here...'
              )
            );
          }
        }
        exports.default = DefaultLayout;

        /***/
      },

    /***/ './server/src/views/pages/home/index.tsx':
      /*!***********************************************!*\
  !*** ./server/src/views/pages/home/index.tsx ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var __importStar =
          (this && this.__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result['default'] = mod;
            return result;
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function(mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        const react_1 = __importStar(__webpack_require__(/*! react */ 'react'));
        const default_layout_1 = __importDefault(
          __webpack_require__(
            /*! @server/views/layouts/default.layout */ './server/src/views/layouts/default.layout.tsx'
          )
        );
        const react_helmet_1 = __importDefault(
          __webpack_require__(/*! react-helmet */ 'react-helmet')
        );
        class Home extends react_1.Component {
          render() {
            return react_1.default.createElement(
              default_layout_1.default,
              null,
              react_1.default.createElement(
                react_helmet_1.default,
                null,
                react_1.default.createElement('title', null, 'Homepage Here!')
              ),
              react_1.default.createElement(
                'span',
                null,
                'This is a React server-side rendered homepage!'
              )
            );
          }
        }
        exports.default = Home;

        /***/
      },

    /***/ 'babel-polyfill':
      /*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('babel-polyfill');

        /***/
      },

    /***/ 'cookie-parser':
      /*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('cookie-parser');

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('express');

        /***/
      },

    /***/ 'express-manifest-helpers':
      /*!*******************************************!*\
  !*** external "express-manifest-helpers" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('express-manifest-helpers');

        /***/
      },

    /***/ 'http-errors':
      /*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('http-errors');

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('path');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react');

        /***/
      },

    /***/ 'react-dom/server':
      /*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react-dom/server');

        /***/
      },

    /***/ 'react-helmet':
      /*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react-helmet');

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9zZXJ2ZXIudHN4Iiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvdXRpbHMvcmVuZGVyLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy92aWV3cy9sYXlvdXRzL2RlZmF1bHQubGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3ZpZXdzL3BhZ2VzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLW1hbmlmZXN0LWhlbHBlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLWVycm9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFPLENBQUMsc0NBQWdCO0FBQ3hCLHdDQUF3QyxtQkFBTyxDQUFDLG9DQUFlO0FBQy9ELGtDQUFrQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ25ELG1EQUFtRCxtQkFBTyxDQUFDLDBEQUEwQjtBQUNyRixzQ0FBc0MsbUJBQU8sQ0FBQyxnQ0FBYTtBQUMzRCwrQkFBK0IsbUJBQU8sQ0FBQyxrQkFBTTtBQUM3Qyw2QkFBNkIsbUJBQU8sQ0FBQyxvQkFBTztBQUM1QyxzQ0FBc0MsbUJBQU8sQ0FBQyxvRUFBMkI7QUFDekUsMEVBQTBFLG1CQUFPLENBQUMseUVBQTBCO0FBQzVHO0FBQ0E7QUFDQSxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNELFlBQVksT0FBTyxNQUFnQixFQUFFO0FBQ3JDO0FBQ0Esb0RBQW9ELE1BQWdCLENBQUM7QUFDckUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZDWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1DQUFtQyxtQkFBTyxDQUFDLDBEQUEwQjtBQUNyRSxpQkFBaUIsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDM0MsdUJBQXVCLG1CQUFPLENBQUMsa0NBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNCQUFzQiwrQ0FBK0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNkJBQTZCLG1CQUFPLENBQUMsb0JBQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0EscURBQXFELHNCQUFzQjtBQUMzRSxrREFBa0Qsb0JBQW9CO0FBQ3RFLHFEQUFxRCxzQkFBc0I7QUFDM0U7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDZCQUE2QixtQkFBTyxDQUFDLG9CQUFPO0FBQzVDLHlDQUF5QyxtQkFBTyxDQUFDLDJGQUFzQztBQUN2Rix1Q0FBdUMsbUJBQU8sQ0FBQyxrQ0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvc3JjL3NlcnZlci50c3hcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcbmNvbnN0IGNvb2tpZV9wYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29va2llLXBhcnNlclwiKSk7XG5jb25zdCBleHByZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xuY29uc3QgZXhwcmVzc19tYW5pZmVzdF9oZWxwZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3MtbWFuaWZlc3QtaGVscGVyc1wiKSk7XG5jb25zdCBodHRwX2Vycm9yc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJodHRwLWVycm9yc1wiKSk7XG5jb25zdCBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGhcIikpO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVuZGVyX3BhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQHNlcnZlci91dGlscy9yZW5kZXItcGFnZVwiKSk7XG5jb25zdCBIb21lID0gcmVhY3RfMS5sYXp5KCgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJ0BzZXJ2ZXIvdmlld3MvcGFnZXMvaG9tZScpKSkpO1xuY29uc3QgYXBwID0gZXhwcmVzc18xLmRlZmF1bHQoKTtcbmFwcC51c2UoZXhwcmVzc18xLmRlZmF1bHQuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzc18xLmRlZmF1bHQudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKGNvb2tpZV9wYXJzZXJfMS5kZWZhdWx0KCkpO1xuYXBwLnVzZShleHByZXNzX21hbmlmZXN0X2hlbHBlcnNfMS5kZWZhdWx0KHtcbiAgICBtYW5pZmVzdFBhdGg6IHBhdGhfMS5kZWZhdWx0LmpvaW4oX19kaXJuYW1lLCAncHVibGljL2Rpc3QvbWFuaWZlc3QuanNvbicpLFxuICAgIHByZXBlbmRQYXRoOiAnL3B1YmxpYy9kaXN0Lydcbn0pKTtcbmFwcC51c2UoJy9wdWJsaWMnLCBleHByZXNzXzEuZGVmYXVsdC5zdGF0aWMocGF0aF8xLmRlZmF1bHQucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYycpKSk7XG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmQocmVuZGVyX3BhZ2VfMS5kZWZhdWx0KHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhvbWUsIG51bGwpKSk7XG59KTtcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgbmV4dChodHRwX2Vycm9yc18xLmRlZmF1bHQoNDA0KSk7XG59KTtcbmFwcC5saXN0ZW4oeyBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIH0sICgpID0+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlR9YCk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXhwcmVzc19tYW5pZmVzdF9oZWxwZXJzXzEgPSByZXF1aXJlKFwiZXhwcmVzcy1tYW5pZmVzdC1oZWxwZXJzXCIpO1xuY29uc3Qgc2VydmVyXzEgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcbmNvbnN0IHJlYWN0X2hlbG1ldF8xID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcbmZ1bmN0aW9uIHJlbmRlclBhZ2UoY29tcG9uZW50KSB7XG4gICAgY29uc3QgaGVsbWV0ID0gcmVhY3RfaGVsbWV0XzEuSGVsbWV0LnJlbmRlclN0YXRpYygpO1xuICAgIHJldHVybiBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cbiAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgICR7c2VydmVyXzEucmVuZGVyVG9TdHJpbmcoY29tcG9uZW50KX1cbiAgICAgICAgPHNjcmlwdCBzcmM9JHtleHByZXNzX21hbmlmZXN0X2hlbHBlcnNfMS5hc3NldFBhdGgoJ2FwcC5qcycpfT48L3NjcmlwdD5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIGA7XG59XG5leHBvcnRzLmRlZmF1bHQgPSByZW5kZXJQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jbGFzcyBEZWZhdWx0TGF5b3V0IGV4dGVuZHMgcmVhY3RfMS5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7IGNsYXNzTmFtZTogXCJoZWFkZXJcIiB9LCBcIkhlYWRlciBjb250ZW50IGdvZXMgaGVyZS4uLlwiKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1haW5cIiB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIHsgY2xhc3NOYW1lOiBcImZvb3RlclwiIH0sIFwiRm9vdGVyIGNvbnRlbnQgZ29lcyBoZXJlLi4uXCIpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRGVmYXVsdExheW91dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgZGVmYXVsdF9sYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQHNlcnZlci92aWV3cy9sYXlvdXRzL2RlZmF1bHQubGF5b3V0XCIpKTtcbmNvbnN0IHJlYWN0X2hlbG1ldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIikpO1xuY2xhc3MgSG9tZSBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZGVmYXVsdF9sYXlvdXRfMS5kZWZhdWx0LCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfaGVsbWV0XzEuZGVmYXVsdCwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIFwiSG9tZXBhZ2UgSGVyZSFcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiVGhpcyBpcyBhIFJlYWN0IHNlcnZlci1zaWRlIHJlbmRlcmVkIGhvbWVwYWdlIVwiKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1tYW5pZmVzdC1oZWxwZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
