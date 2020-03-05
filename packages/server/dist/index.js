!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = 0));
})([
  function(e, t, r) {
    'use strict';
    (function(e) {
      var n =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 }), r(1);
      const o = n(r(2)),
        u = n(r(3)),
        i = n(r(4)),
        l = n(r(5)),
        f = n(r(6)),
        c = i.default();
      u.default.config(),
        c.use(i.default.json()),
        c.use(i.default.static(f.default.join(e, './public'))),
        c.use(i.default.urlencoded({ extended: !1 })),
        c.use(o.default()),
        c.use((e, t, r) => {
          r(l.default(404));
        }),
        c.listen({ port: '3000' }, () => {
          console.log('Server ready at http://localhost:3000');
        });
    }.call(this, '/'));
  },
  function(e, t) {
    e.exports = require('babel-polyfill');
  },
  function(e, t) {
    e.exports = require('cookie-parser');
  },
  function(e, t) {
    e.exports = require('dotenv');
  },
  function(e, t) {
    e.exports = require('express');
  },
  function(e, t) {
    e.exports = require('http-errors');
  },
  function(e, t) {
    e.exports = require('path');
  }
]);
