(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    2002: function(t, e, i) {
      var r, n;
      (r = [
        i(16),
        i(12),
        i(2071),
        i(2249),
        i(2256),
        i(2142),
        i(2055),
        i(2259),
        i(2260),
        i(2261),
        i(2262),
        i(2263),
        i(2106),
        i(2264),
        i(2244),
        i(2109),
        i(2265),
        i(2266),
        i(2110),
        i(2267),
        i(2268),
        i(2269),
        i(2270),
        i(2271),
        i(2272),
        i(2273),
        i(2274)
      ]),
        void 0 ===
          (n = function(t, e, i, r) {
            return (
              t.deprecated(
                "dojox.charting.Chart2D",
                "Use dojox.charting.Chart instead and require all other components explicitly",
                "2.0"
              ),
              e.setObject("dojox.charting.Chart2D", r)
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2003: function(t, e, i) {
      var r, n;
      (r = [
        i(807),
        i(12),
        i(28),
        i(42),
        i(183),
        i(47),
        i(2276),
        i(156),
        i(15),
        i.dj.h("dojo-bidi?2278"),
        i(2013),
        i(2279),
        i(2141)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = function(t, e) {
                var i = t.run && t.run.data && t.run.data[t.index];
                return i && "number" != typeof i && (i.tooltip || i.text)
                  ? i.tooltip || i.text
                  : e.tooltipFunc
                    ? e.tooltipFunc(t)
                    : t.y;
              },
              d = Math.PI / 4,
              f = Math.PI / 2,
              p = i(
                h("dojo-bidi")
                  ? "dojox.charting.action2d.NonBidiTooltip"
                  : "dojox.charting.action2d.Tooltip",
                s,
                {
                  defaultParams: {
                    text: u,
                    mouseOver: !0,
                    defaultPosition: ["after-centered", "before-centered"]
                  },
                  optionalParams: {},
                  constructor: function(t, e, i) {
                    (this.text = i && i.text ? i.text : u),
                      (this.mouseOver =
                        !i || void 0 == i.mouseOver || i.mouseOver),
                      (this.defaultPosition =
                        i && void 0 != i.defaultPosition
                          ? i.defaultPosition
                          : ["after-centered", "before-centered"]),
                      this.connect();
                  },
                  process: function(i) {
                    if ("onplotreset" === i.type || "onmouseout" === i.type)
                      return (
                        t.hide(this.aroundRect),
                        (this.aroundRect = null),
                        void ("onplotreset" === i.type && delete this.angles)
                      );
                    if (
                      !(
                        !i.shape ||
                        (this.mouseOver && "onmouseover" !== i.type) ||
                        (!this.mouseOver && "onclick" !== i.type)
                      )
                    ) {
                      var a = { type: "rect" },
                        s = this.defaultPosition;
                      switch (i.element) {
                        case "marker":
                          (a.x = i.cx), (a.y = i.cy), (a.w = a.h = 1);
                          break;
                        case "circle":
                          (a.x = i.cx - i.cr),
                            (a.y = i.cy - i.cr),
                            (a.w = a.h = 2 * i.cr);
                          break;
                        case "spider_circle":
                          (a.x = i.cx), (a.y = i.cy), (a.w = a.h = 1);
                          break;
                        case "spider_plot":
                          return;
                        case "column":
                          s = ["above-centered", "below-centered"];
                        case "bar":
                          ((a = e.clone(i.shape.getShape())).w = a.width),
                            (a.h = a.height);
                          break;
                        case "candlestick":
                          (a.x = i.x),
                            (a.y = i.y),
                            (a.w = i.width),
                            (a.h = i.height);
                          break;
                        default:
                          if (!this.angles) {
                            var l =
                              "number" == typeof i.run.data[0]
                                ? c.map(i.run.data, "x ? Math.max(x, 0) : 0")
                                : c.map(i.run.data, "x ? Math.max(x.y, 0) : 0");
                            this.angles = c.map(
                              c.scanl(l, "+", 0),
                              "* 2 * Math.PI / this",
                              c.foldl(l, "+", 0)
                            );
                          }
                          var u = o._degToRad(i.plot.opt.startAngle),
                            p =
                              (this.angles[i.index] +
                                this.angles[i.index + 1]) /
                                2 +
                              u;
                          (a.x = i.cx + i.cr * Math.cos(p)),
                            (a.y = i.cy + i.cr * Math.sin(p)),
                            (a.w = a.h = 1),
                            u &&
                              (p < 0 || p > 2 * Math.PI) &&
                              (p = Math.abs(2 * Math.PI - Math.abs(p))),
                            p < d ||
                              (p < f + d
                                ? (s = ["below-centered", "above-centered"])
                                : p < Math.PI + d
                                  ? (s = ["before-centered", "after-centered"])
                                  : p < 2 * Math.PI - d &&
                                    (s = ["above-centered", "below-centered"]));
                      }
                      h("dojo-bidi") && this._recheckPosition(i, a, s);
                      var m = this.chart.getCoords();
                      (a.x += m.x),
                        (a.y += m.y),
                        (a.x = Math.round(a.x)),
                        (a.y = Math.round(a.y)),
                        (a.w = Math.ceil(a.w)),
                        (a.h = Math.ceil(a.h)),
                        (this.aroundRect = a);
                      var x = this.text(i, this.plot);
                      x && t.show(this._format(x), this.aroundRect, s),
                        this.mouseOver ||
                          (this._handle = n.connect(
                            r.doc,
                            "onclick",
                            this,
                            "onClick"
                          ));
                    }
                  },
                  onClick: function() {
                    this.process({ type: "onmouseout" });
                  },
                  _recheckPosition: function(t, e, i) {},
                  _format: function(t) {
                    return t;
                  }
                }
              );
            return h("dojo-bidi")
              ? i("dojox.charting.action2d.Tooltip", [p, l])
              : p;
          }.apply(null, r)) || (t.exports = n);
    },
    2013: function(t, e, i) {
      var r, n;
      (r = [i(2056), i(2246), i(2247)]),
        void 0 ===
          (n = function(t) {
            return t;
          }.apply(null, r)) || (t.exports = n);
    },
    2021: function(t, e, i) {
      var r, n;
      (r = [i(12), i(25), i(182), i(2030), i(2013), i(2139)]),
        void 0 ===
          (n = function(t, e, i, r, n, a) {
            var s = t.getObject("dojox.charting.plot2d.common", !0);
            return t.mixin(s, {
              doIfLoaded: a.doIfLoaded,
              makeStroke: function(t) {
                return t
                  ? (("string" == typeof t || t instanceof i) &&
                      (t = { color: t }),
                    r.makeParameters(r.defaultStroke, t))
                  : t;
              },
              augmentColor: function(t, e) {
                var r = new i(t),
                  n = new i(e);
                return (n.a = r.a), n;
              },
              augmentStroke: function(t, e) {
                var i = s.makeStroke(t);
                return i && (i.color = s.augmentColor(i.color, e)), i;
              },
              augmentFill: function(t, e) {
                new i(e);
                return "string" == typeof t || t instanceof i
                  ? s.augmentColor(t, e)
                  : t;
              },
              defaultStats: {
                vmin: Number.POSITIVE_INFINITY,
                vmax: Number.NEGATIVE_INFINITY,
                hmin: Number.POSITIVE_INFINITY,
                hmax: Number.NEGATIVE_INFINITY
              },
              collectSimpleStats: function(i, r) {
                for (
                  var n = t.delegate(s.defaultStats), a = 0;
                  a < i.length;
                  ++a
                )
                  for (var o = i[a], h = 0; h < o.data.length; h++)
                    if (!r(o.data[h])) {
                      if ("number" == typeof o.data[h]) {
                        var l = n.vmin,
                          c = n.vmax;
                        e.forEach(o.data, function(t, e) {
                          if (!r(t)) {
                            var i = e + 1,
                              a = t;
                            isNaN(a) && (a = 0),
                              (n.hmin = Math.min(n.hmin, i)),
                              (n.hmax = Math.max(n.hmax, i)),
                              (n.vmin = Math.min(n.vmin, a)),
                              (n.vmax = Math.max(n.vmax, a));
                          }
                        }),
                          "ymin" in o && (n.vmin = Math.min(l, o.ymin)),
                          "ymax" in o && (n.vmax = Math.max(c, o.ymax));
                      } else {
                        var u = n.hmin,
                          d = n.hmax;
                        (l = n.vmin), (c = n.vmax);
                        ("xmin" in o &&
                          "xmax" in o &&
                          "ymin" in o &&
                          "ymax" in o) ||
                          e.forEach(o.data, function(t, e) {
                            if (!r(t)) {
                              var i = "x" in t ? t.x : e + 1,
                                a = t.y;
                              isNaN(i) && (i = 0),
                                isNaN(a) && (a = 0),
                                (n.hmin = Math.min(n.hmin, i)),
                                (n.hmax = Math.max(n.hmax, i)),
                                (n.vmin = Math.min(n.vmin, a)),
                                (n.vmax = Math.max(n.vmax, a));
                            }
                          }),
                          "xmin" in o && (n.hmin = Math.min(u, o.xmin)),
                          "xmax" in o && (n.hmax = Math.max(d, o.xmax)),
                          "ymin" in o && (n.vmin = Math.min(l, o.ymin)),
                          "ymax" in o && (n.vmax = Math.max(c, o.ymax));
                      }
                      break;
                    }
                return n;
              },
              calculateBarSize: function(t, e, i) {
                i || (i = 1);
                var r = e.gap,
                  n = (t - 2 * r) / i;
                return (
                  "minBarSize" in e && (n = Math.max(n, e.minBarSize)),
                  "maxBarSize" in e && (n = Math.min(n, e.maxBarSize)),
                  { size: (n = Math.max(n, 1)), gap: (r = (t - n * i) / 2) }
                );
              },
              collectStackedStats: function(e) {
                var i = t.clone(s.defaultStats);
                if (e.length) {
                  (i.hmin = Math.min(i.hmin, 1)),
                    (i.hmax = n.foldl(
                      e,
                      "seed, run -> Math.max(seed, run.data.length)",
                      i.hmax
                    ));
                  for (var r = 0; r < i.hmax; ++r) {
                    var a = e[0].data[r];
                    (a = a && ("number" == typeof a ? a : a.y)),
                      isNaN(a) && (a = 0),
                      (i.vmin = Math.min(i.vmin, a));
                    for (var o = 1; o < e.length; ++o) {
                      var h = e[o].data[r];
                      (h = h && ("number" == typeof h ? h : h.y)),
                        isNaN(h) && (h = 0),
                        (a += h);
                    }
                    i.vmax = Math.max(i.vmax, a);
                  }
                }
                return i;
              },
              curve: function(t, i) {
                var r = t.slice(0);
                return (
                  "x" == i && (r[r.length] = r[0]),
                  e
                    .map(r, function(t, e) {
                      if (0 == e) return "M" + t.x + "," + t.y;
                      if (!isNaN(i)) {
                        var n = t.x - r[e - 1].x,
                          a = r[e - 1].y;
                        return (
                          "C" +
                          (t.x - (n / i) * (i - 1)) +
                          "," +
                          a +
                          " " +
                          (t.x - n / i) +
                          "," +
                          t.y +
                          " " +
                          t.x +
                          "," +
                          t.y
                        );
                      }
                      if ("X" == i || "x" == i || "S" == i) {
                        var s,
                          o,
                          h,
                          l,
                          c,
                          u,
                          d = r[e - 1],
                          f = r[e],
                          p = 1 / 6;
                        1 == e
                          ? ((s = "x" == i ? r[r.length - 2] : d), (p = 1 / 3))
                          : (s = r[e - 2]),
                          e == r.length - 1
                            ? ((o = "x" == i ? r[1] : f), (p = 1 / 3))
                            : (o = r[e + 1]);
                        var m = Math.sqrt(
                            (f.x - d.x) * (f.x - d.x) +
                              (f.y - d.y) * (f.y - d.y)
                          ),
                          x = Math.sqrt(
                            (f.x - s.x) * (f.x - s.x) +
                              (f.y - s.y) * (f.y - s.y)
                          ),
                          g = Math.sqrt(
                            (o.x - d.x) * (o.x - d.x) +
                              (o.y - d.y) * (o.y - d.y)
                          ),
                          v = x * p,
                          y = g * p;
                        v > m / 2 && y > m / 2
                          ? ((v = m / 2), (y = m / 2))
                          : v > m / 2
                            ? ((v = m / 2), (y = ((m / 2) * g) / x))
                            : y > m / 2 &&
                              ((y = m / 2), (v = ((m / 2) * x) / g)),
                          "S" == i && (s == d && (v = 0), f == o && (y = 0)),
                          (h = d.x + (v * (f.x - s.x)) / x),
                          (l = d.y + (v * (f.y - s.y)) / x),
                          (c = f.x - (y * (o.x - d.x)) / g),
                          (u = f.y - (y * (o.y - d.y)) / g);
                      }
                      return (
                        "C" +
                        h +
                        "," +
                        l +
                        " " +
                        c +
                        "," +
                        u +
                        " " +
                        f.x +
                        "," +
                        f.y
                      );
                    })
                    .join(" ")
                );
              },
              getLabel: function(t, e, i) {
                return a.doIfLoaded(
                  "dojo/number",
                  function(r) {
                    return (e ? r.format(t, { places: i }) : r.format(t)) || "";
                  },
                  function() {
                    return e ? t.toFixed(i) : t.toString();
                  }
                );
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2022: function(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      (__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(2071),
        __webpack_require__(12)
      ]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function(dojox, lang) {
          var du = lang.getObject("lang.utils", !0, dojox),
            empty = {},
            opts = Object.prototype.toString,
            clone = function(t) {
              if (t)
                switch (opts.call(t)) {
                  case "[object Array]":
                    return t.slice(0);
                  case "[object Object]":
                    return lang.delegate(t);
                }
              return t;
            };
          return (
            lang.mixin(du, {
              coerceType: function(target, source) {
                switch (typeof target) {
                  case "number":
                    return Number(eval("(" + source + ")"));
                  case "string":
                    return String(source);
                  case "boolean":
                    return Boolean(eval("(" + source + ")"));
                }
                return eval("(" + source + ")");
              },
              updateWithObject: function(t, e, i) {
                if (!e) return t;
                for (var r in t)
                  if (r in e && !(r in empty)) {
                    var n = t[r];
                    n && "object" == typeof n
                      ? du.updateWithObject(n, e[r], i)
                      : (t[r] = i ? du.coerceType(n, e[r]) : clone(e[r]));
                  }
                return t;
              },
              updateWithPattern: function(t, e, i, r) {
                if (!e || !i) return t;
                for (var n in i)
                  n in e &&
                    !(n in empty) &&
                    (t[n] = r ? du.coerceType(i[n], e[n]) : clone(e[n]));
                return t;
              },
              merge: function(t, e) {
                if (e) {
                  var i,
                    r,
                    n,
                    a,
                    s = opts.call(t),
                    o = opts.call(e);
                  switch (o) {
                    case "[object Array]":
                      if (o == s) {
                        for (
                          r = 0,
                            n = (i = new Array(Math.max(t.length, e.length)))
                              .length;
                          r < n;
                          ++r
                        )
                          i[r] = du.merge(t[r], e[r]);
                        return i;
                      }
                      return e.slice(0);
                    case "[object Object]":
                      if (o == s && t) {
                        for (r in ((i = lang.delegate(t)), e))
                          r in t
                            ? ((n = t[r]),
                              (a = e[r]) !== n && (i[r] = du.merge(n, a)))
                            : (i[r] = lang.clone(e[r]));
                        return i;
                      }
                      return lang.clone(e);
                  }
                }
                return e;
              }
            }),
            du
          );
        }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)),
        void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
          (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    },
    2030: function(t, e, i) {
      var r, n;
      (r = [i(12), i(69), i(2245)]),
        void 0 ===
          (n = function(t, e, i) {
            return e.switchTo(i), e;
          }.apply(null, r)) || (t.exports = n);
    },
    2031: function(t, e, i) {
      var r, n;
      (r = [i(12), i(69), i(156), i(182), i(25), i(314), i(183), i(32)]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o) {
            var h = (e.fx = {});
            function l(t, e) {
              (this.start = t), (this.end = e);
            }
            function c(t, e, i) {
              (this.start = t), (this.end = e), (this.units = i);
            }
            function u(t, e) {
              (this.start = t), (this.end = e), (this.temp = new r());
            }
            function d(t) {
              (this.values = t), (this.length = t.length);
            }
            function f(t, e) {
              (this.values = t), (this.def = e || {});
            }
            function p(t, e) {
              (this.stack = t), (this.original = e);
            }
            (l.prototype.getValue = function(t) {
              return (this.end - this.start) * t + this.start;
            }),
              (c.prototype.getValue = function(t) {
                return (this.end - this.start) * t + this.start + this.units;
              }),
              (u.prototype.getValue = function(t) {
                return r.blendColors(this.start, this.end, t, this.temp);
              }),
              (d.prototype.getValue = function(t) {
                return this.values[
                  Math.min(Math.floor(t * this.length), this.length - 1)
                ];
              }),
              (f.prototype.getValue = function(e) {
                var i = t.clone(this.def);
                for (var r in this.values) i[r] = this.values[r].getValue(e);
                return i;
              }),
              (p.prototype.getValue = function(t) {
                var e = [];
                return (
                  n.forEach(
                    this.stack,
                    function(r) {
                      if (r instanceof i.Matrix2D) e.push(r);
                      else if ("original" == r.name && this.original)
                        e.push(this.original);
                      else if ("matrix" != r.name) {
                        if (r.name in i) {
                          var a = i[r.name];
                          if ("function" == typeof a) {
                            var s = n.map(r.start, function(e, i) {
                                return (r.end[i] - e) * t + e;
                              }),
                              o = a.apply(i, s);
                            o instanceof i.Matrix2D && e.push(o);
                          } else e.push(a);
                        }
                      } else if (
                        r.start instanceof i.Matrix2D &&
                        r.end instanceof i.Matrix2D
                      ) {
                        var h = new i.Matrix2D();
                        for (var l in r.start)
                          h[l] = (r.end[l] - r.start[l]) * t + r.start[l];
                        e.push(h);
                      }
                    },
                    this
                  ),
                  e
                );
              });
            var m = new r(0, 0, 0, 0);
            function x(t, i, r, n) {
              return t.values
                ? new d(t.values)
                : ((s = t.start
                    ? e.normalizeColor(t.start)
                    : (a = i ? (r ? i[r] : i) : n)),
                  t.end
                    ? (o = e.normalizeColor(t.end))
                    : (a || (a = i ? (r ? i[r] : i) : n), (o = a)),
                  new u(s, o));
              var a, s, o;
            }
            return (
              (h.animateStroke = function(t) {
                t.easing || (t.easing = a._defaultEasing);
                var e,
                  i = new a.Animation(t),
                  r = t.shape;
                return (
                  s.connect(
                    i,
                    "beforeBegin",
                    i,
                    function() {
                      e = r.getStroke();
                      var i,
                        n,
                        a = t.color,
                        s = {};
                      a && (s.color = x(a, e, "color", m)),
                        (a = t.style) &&
                          a.values &&
                          (s.style = new d(a.values)),
                        (a = t.width) &&
                          (s.width = (function(t, e, i, r) {
                            return t.values
                              ? new d(t.values)
                              : ((a = t.start ? t.start : (n = e ? e[i] : r)),
                                t.end
                                  ? (s = t.end)
                                  : ("number" != typeof n && (n = e ? e[i] : r),
                                    (s = n)),
                                new l(a, s));
                            var n, a, s;
                          })(a, e, "width", 1)),
                        (a = t.cap) && a.values && (s.cap = new d(a.values)),
                        (a = t.join) &&
                          (a.values
                            ? (s.join = new d(a.values))
                            : ((i = a.start ? a.start : (e && e.join) || 0),
                              (n = a.end ? a.end : (e && e.join) || 0),
                              "number" == typeof i &&
                                "number" == typeof n &&
                                (s.join = new l(i, n)))),
                        (this.curve = new f(s, e));
                    }
                  ),
                  s.connect(
                    i,
                    "onAnimate",
                    r,
                    "setStroke"
                  ),
                  i
                );
              }),
              (h.animateFill = function(t) {
                t.easing || (t.easing = a._defaultEasing);
                var e,
                  i = new a.Animation(t),
                  r = t.shape;
                return (
                  s.connect(
                    i,
                    "beforeBegin",
                    i,
                    function() {
                      e = r.getFill();
                      var i = t.color;
                      i && (this.curve = x(i, e, "", m));
                    }
                  ),
                  s.connect(
                    i,
                    "onAnimate",
                    r,
                    "setFill"
                  ),
                  i
                );
              }),
              (h.animateFont = function(t) {
                t.easing || (t.easing = a._defaultEasing);
                var e,
                  i = new a.Animation(t),
                  r = t.shape;
                return (
                  s.connect(
                    i,
                    "beforeBegin",
                    i,
                    function() {
                      e = r.getFont();
                      var i,
                        n,
                        a = t.style,
                        s = {};
                      a && a.values && (s.style = new d(a.values)),
                        (a = t.variant) &&
                          a.values &&
                          (s.variant = new d(a.values)),
                        (a = t.weight) &&
                          a.values &&
                          (s.weight = new d(a.values)),
                        (a = t.family) &&
                          a.values &&
                          (s.family = new d(a.values)),
                        (a = t.size) &&
                          a.units &&
                          ((i = parseFloat(
                            a.start ? a.start : (r.font && r.font.size) || "0"
                          )),
                          (n = parseFloat(
                            a.end ? a.end : (r.font && r.font.size) || "0"
                          )),
                          (s.size = new c(i, n, a.units))),
                        (this.curve = new f(s, e));
                    }
                  ),
                  s.connect(
                    i,
                    "onAnimate",
                    r,
                    "setFont"
                  ),
                  i
                );
              }),
              (h.animateTransform = function(t) {
                t.easing || (t.easing = a._defaultEasing);
                var i,
                  r = new a.Animation(t),
                  h = t.shape;
                if (
                  (s.connect(
                    r,
                    "beforeBegin",
                    r,
                    function() {
                      (i = h.getTransform()),
                        (this.curve = new p(t.transform, i));
                    }
                  ),
                  s.connect(
                    r,
                    "onAnimate",
                    h,
                    "setTransform"
                  ),
                  "svg" === e.renderer && (o("ie") >= 9 || o("ff")))
                )
                  var l = [
                    s.connect(
                      r,
                      "onBegin",
                      r,
                      function() {
                        for (var t = h.getParent(); t && t.getParent; )
                          t = t.getParent();
                        t &&
                          ((h.__svgContainer = t.rawNode.parentNode),
                          (h.__svgRoot = t.rawNode),
                          h.__svgRoot &&
                            h.__svgRoot.getAttribute &&
                            ((h.__svgWidth = parseInt(
                              h.__svgRoot.getAttribute("width"),
                              10
                            )),
                            isNaN(h.__svgWidth) && delete h.__svgWidth));
                      }
                    ),
                    s.connect(
                      r,
                      "onAnimate",
                      r,
                      function() {
                        try {
                          if (h.__svgContainer) {
                            var t = h.__svgContainer.style.visibility;
                            h.__svgContainer.style.visibility = "visible";
                            h.__svgContainer.offsetHeight;
                            h.__svgContainer.style.visibility = t;
                            var e = h.__svgWidth;
                            if (!isNaN(e))
                              try {
                                h.__svgRoot.setAttribute("width", e - 5e-6),
                                  h.__svgRoot.setAttribute("width", e);
                              } catch (t) {}
                          }
                        } catch (t) {}
                      }
                    ),
                    s.connect(
                      r,
                      "onEnd",
                      r,
                      function() {
                        if ((n.forEach(l, s.disconnect), h.__svgContainer)) {
                          var t = h.__svgContainer;
                          if (null == t.getAttribute("__gotVis")) {
                            t.setAttribute("__gotVis", !0);
                            var e = h.__svgContainer.style.visibility,
                              i = h.__svgRoot,
                              r = h.__svgWidth;
                            (t.style.visibility = "visible"),
                              setTimeout(function() {
                                try {
                                  (t.style.visibility = e),
                                    t.removeAttribute("__gotVis"),
                                    (t = null);
                                  try {
                                    isNaN(r) ||
                                      (i.setAttribute("width", r - 5e-6),
                                      i.setAttribute("width", r));
                                  } catch (t) {}
                                } catch (t) {}
                              }, 100);
                          }
                        }
                        delete h.__svgContainer,
                          delete h.__svgRoot,
                          delete h.__svgWidth;
                      }
                    )
                  ];
                return r;
              }),
              h
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2036: function(t, e, i) {
      var r, n;
      (r = [i(12), i(25), i(28), i(183)]),
        void 0 ===
          (n = function(t, e, i, r) {
            return i("dojox.charting.plot2d._PlotEvents", null, {
              constructor: function() {
                (this._shapeEvents = []), (this._eventSeries = {});
              },
              destroy: function() {
                this.resetEvents(), this.inherited(arguments);
              },
              plotEvent: function(t) {},
              raiseEvent: function(i) {
                this.plotEvent(i);
                var r = t.delegate(i);
                (r.originalEvent = i.type),
                  (r.originalPlot = i.plot),
                  (r.type = "onindirect"),
                  e.forEach(
                    this.chart.stack,
                    function(t) {
                      t !== this &&
                        t.plotEvent &&
                        ((r.plot = t), t.plotEvent(r));
                    },
                    this
                  );
              },
              connect: function(t, e) {
                return (
                  (this.dirty = !0),
                  r.connect(
                    this,
                    "plotEvent",
                    t,
                    e
                  )
                );
              },
              events: function() {
                return !!this.plotEvent.after;
              },
              resetEvents: function() {
                this._shapeEvents.length &&
                  (e.forEach(this._shapeEvents, function(t) {
                    t.shape.disconnect(t.handle);
                  }),
                  (this._shapeEvents = [])),
                  this.raiseEvent({ type: "onplotreset", plot: this });
              },
              _connectSingleEvent: function(t, e) {
                this._shapeEvents.push({
                  shape: t.eventMask,
                  handle: t.eventMask.connect(
                    e,
                    this,
                    function(i) {
                      (t.type = e),
                        (t.event = i),
                        this.raiseEvent(t),
                        (t.event = null);
                    }
                  )
                });
              },
              _connectEvents: function(t) {
                t &&
                  ((t.chart = this.chart),
                  (t.plot = this),
                  (t.hAxis = this.hAxis || null),
                  (t.vAxis = this.vAxis || null),
                  (t.eventMask = t.eventMask || t.shape),
                  this._connectSingleEvent(t, "onmouseover"),
                  this._connectSingleEvent(t, "onmouseout"),
                  this._connectSingleEvent(t, "onclick"));
              },
              _reconnectEvents: function(t) {
                var i = this._eventSeries[t];
                i && e.forEach(i, this._connectEvents, this);
              },
              fireEvent: function(t, e, i, r) {
                var n = this._eventSeries[t];
                if (n && n.length && i < n.length) {
                  var a = n[i];
                  (a.type = e),
                    (a.event = r || null),
                    this.raiseEvent(a),
                    (a.event = null);
                }
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2040: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(28),
        i(183),
        i(15),
        i(2107),
        i(2248),
        i(2030),
        i(2031),
        i(2022)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h) {
            var l = function() {
              return !1;
            };
            return e("dojox.charting.plot2d.CartesianBase", n, {
              baseParams: {
                hAxis: "x",
                vAxis: "y",
                labels: !1,
                labelOffset: 10,
                fixed: !0,
                precision: 1,
                labelStyle: "inside",
                htmlLabels: !0,
                omitLabels: !0,
                labelFunc: null
              },
              constructor: function(e, i) {
                (this.axes = ["hAxis", "vAxis"]),
                  (this.zoom = null),
                  (this.zoomQueue = []),
                  (this.lastWindow = {
                    vscale: 1,
                    hscale: 1,
                    xoffset: 0,
                    yoffset: 0
                  }),
                  (this.hAxis = (i && i.hAxis) || "x"),
                  (this.vAxis = (i && i.vAxis) || "y"),
                  (this.series = []),
                  (this.opt = t.clone(this.baseParams)),
                  h.updateWithObject(this.opt, i);
              },
              clear: function() {
                return (
                  this.inherited(arguments),
                  (this._hAxis = null),
                  (this._vAxis = null),
                  this
                );
              },
              cleanGroup: function(t, e) {
                if ((this.inherited(arguments), !e && this.chart._nativeClip)) {
                  var i = this.chart.offsets,
                    r = this.chart.dim,
                    n = Math.max(0, r.width - i.l - i.r),
                    a = Math.max(0, r.height - i.t - i.b);
                  this.group.setClip({ x: i.l, y: i.t, width: n, height: a }),
                    this._clippedGroup ||
                      (this._clippedGroup = this.group.createGroup());
                }
              },
              purgeGroup: function() {
                this.inherited(arguments), (this._clippedGroup = null);
              },
              getGroup: function() {
                return this._clippedGroup || this.group;
              },
              setAxis: function(t) {
                return t && (this[t.vertical ? "_vAxis" : "_hAxis"] = t), this;
              },
              toPage: function(t) {
                var e = this._hAxis,
                  i = this._vAxis,
                  r = e.getScaler(),
                  n = i.getScaler(),
                  a = r.scaler.getTransformerFromModel(r),
                  s = n.scaler.getTransformerFromModel(n),
                  o = this.chart.getCoords(),
                  h = this.chart.offsets,
                  l = this.chart.dim,
                  c = function(t) {
                    var r = {};
                    return (
                      (r.x = a(t[e.name]) + o.x + h.l),
                      (r.y = o.y + l.height - h.b - s(t[i.name])),
                      r
                    );
                  };
                return t ? c(t) : c;
              },
              toData: function(t) {
                var e = this._hAxis,
                  i = this._vAxis,
                  r = e.getScaler(),
                  n = i.getScaler(),
                  a = r.scaler.getTransformerFromPlot(r),
                  s = n.scaler.getTransformerFromPlot(n),
                  o = this.chart.getCoords(),
                  h = this.chart.offsets,
                  l = this.chart.dim,
                  c = function(t) {
                    var r = {};
                    return (
                      (r[e.name] = a(t.x - o.x - h.l)),
                      (r[i.name] = s(o.y + l.height - t.y - h.b)),
                      r
                    );
                  };
                return t ? c(t) : c;
              },
              isDirty: function() {
                return (
                  this.dirty ||
                  (this._hAxis && this._hAxis.dirty) ||
                  (this._vAxis && this._vAxis.dirty)
                );
              },
              createLabel: function(t, e, i, r) {
                if (this.opt.labels) {
                  var n,
                    a,
                    o = this.opt.labelFunc
                      ? this.opt.labelFunc.apply(this, [
                          e,
                          this.opt.fixed,
                          this.opt.precision
                        ])
                      : this._getLabel(isNaN(e.y) ? e : e.y);
                  if ("inside" == this.opt.labelStyle) {
                    var h = s._base._getTextBox(o, { font: r.series.font });
                    if (
                      ((n = i.x + i.width / 2),
                      (a = i.y + i.height / 2 + h.h / 4),
                      h.w > i.width || h.h > i.height)
                    )
                      return;
                  } else
                    (n = i.x + i.width / 2), (a = i.y - this.opt.labelOffset);
                  this.renderLabel(
                    t,
                    n,
                    a,
                    o,
                    r,
                    "inside" == this.opt.labelStyle
                  );
                }
              },
              performZoom: function(e, r) {
                var n = this._vAxis.scale || 1,
                  a = this._hAxis.scale || 1,
                  s = e.height - r.b,
                  h = this._hScaler.bounds,
                  l = (h.from - h.lower) * h.scale,
                  c = this._vScaler.bounds,
                  u = (c.from - c.lower) * c.scale,
                  d = n / this.lastWindow.vscale,
                  f = a / this.lastWindow.hscale,
                  p =
                    (this.lastWindow.xoffset - l) /
                    (1 == this.lastWindow.hscale ? a : this.lastWindow.hscale),
                  m =
                    (u - this.lastWindow.yoffset) /
                    (1 == this.lastWindow.vscale ? n : this.lastWindow.vscale),
                  x = this.getGroup(),
                  g = o.animateTransform(
                    t.delegate(
                      {
                        shape: x,
                        duration: 1200,
                        transform: [
                          {
                            name: "translate",
                            start: [0, 0],
                            end: [r.l * (1 - f), s * (1 - d)]
                          },
                          { name: "scale", start: [1, 1], end: [f, d] },
                          { name: "original" },
                          { name: "translate", start: [0, 0], end: [p, m] }
                        ]
                      },
                      this.zoom
                    )
                  );
                return (
                  t.mixin(this.lastWindow, {
                    vscale: n,
                    hscale: a,
                    xoffset: l,
                    yoffset: u
                  }),
                  this.zoomQueue.push(g),
                  i.connect(
                    g,
                    "onEnd",
                    this,
                    function() {
                      (this.zoom = null),
                        this.zoomQueue.shift(),
                        this.zoomQueue.length > 0 && this.zoomQueue[0].play();
                    }
                  ),
                  1 == this.zoomQueue.length && this.zoomQueue[0].play(),
                  this
                );
              },
              initializeScalers: function(t, e) {
                return (
                  this._hAxis
                    ? (this._hAxis.initialized() ||
                        this._hAxis.calculate(e.hmin, e.hmax, t.width),
                      (this._hScaler = this._hAxis.getScaler()))
                    : (this._hScaler = a.buildScaler(e.hmin, e.hmax, t.width)),
                  this._vAxis
                    ? (this._vAxis.initialized() ||
                        this._vAxis.calculate(e.vmin, e.vmax, t.height),
                      (this._vScaler = this._vAxis.getScaler()))
                    : (this._vScaler = a.buildScaler(e.vmin, e.vmax, t.height)),
                  this
                );
              },
              isNullValue: function(t) {
                if (null === t || void 0 === t) return !0;
                var e = this._hAxis ? this._hAxis.isNullValue : l,
                  i = this._vAxis ? this._vAxis.isNullValue : l;
                return "number" == typeof t
                  ? e(1) || i(t)
                  : e(isNaN(t.x) ? 1 : t.x) || null === t.y || i(t.y);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2041: function(t, e, i) {
      var r, n;
      (r = [i(12), i(16), i(2056)]),
        void 0 ===
          (n = function(t, e, i) {
            return (
              t.mixin(i, {
                filterRev: function(t, r, n) {
                  "string" == typeof t && (t = t.split("")),
                    (n = n || e.global),
                    (r = i.lambda(r));
                  for (var a, s = [], o = t.length - 1; o >= 0; --o)
                    (a = t[o]), r.call(n, a, o, t) && s.push(a);
                  return s;
                },
                forEachRev: function(t, r, n) {
                  "string" == typeof t && (t = t.split("")),
                    (n = n || e.global),
                    (r = i.lambda(r));
                  for (
                    var a = t.length - 1;
                    a >= 0;
                    r.call(n, t[a], a, t), --a
                  );
                },
                mapRev: function(t, r, n) {
                  "string" == typeof t && (t = t.split("")),
                    (n = n || e.global),
                    (r = i.lambda(r));
                  for (
                    var a = t.length, s = new Array(a), o = a - 1, h = 0;
                    o >= 0;
                    s[h++] = r.call(n, t[o], o, t), --o
                  );
                  return s;
                },
                everyRev: function(t, r, n) {
                  "string" == typeof t && (t = t.split("")),
                    (n = n || e.global),
                    (r = i.lambda(r));
                  for (var a = t.length - 1; a >= 0; --a)
                    if (!r.call(n, t[a], a, t)) return !1;
                  return !0;
                },
                someRev: function(t, r, n) {
                  "string" == typeof t && (t = t.split("")),
                    (n = n || e.global),
                    (r = i.lambda(r));
                  for (var a = t.length - 1; a >= 0; --a)
                    if (r.call(n, t[a], a, t)) return !0;
                  return !1;
                }
              }),
              i
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2055: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(28),
        i(25),
        i(15),
        i(2040),
        i(2036),
        i(2021),
        i(2013),
        i(2041),
        i(2022),
        i(2031)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = h.lambda("item.purgeGroup()");
            return e("dojox.charting.plot2d.Default", [n, a], {
              defaultParams: {
                lines: !0,
                areas: !1,
                markers: !1,
                tension: "",
                animate: !1,
                enableCache: !1,
                interpolate: !1
              },
              optionalParams: {
                stroke: {},
                outline: {},
                shadow: {},
                fill: {},
                filter: {},
                styleFunc: null,
                font: "",
                fontColor: "",
                marker: "",
                markerStroke: {},
                markerOutline: {},
                markerShadow: {},
                markerFill: {},
                markerFont: "",
                markerFontColor: "",
                zeroLine: 0
              },
              constructor: function(e, i) {
                (this.opt = t.clone(t.mixin(this.opt, this.defaultParams))),
                  l.updateWithObject(this.opt, i),
                  l.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.animate = this.opt.animate);
              },
              createPath: function(t, e, i) {
                var r;
                return (
                  this.opt.enableCache && t._pathFreePool.length > 0
                    ? ((r = t._pathFreePool.pop()).setShape(i), e.add(r))
                    : (r = e.createPath(i)),
                  this.opt.enableCache && t._pathUsePool.push(r),
                  r
                );
              },
              buildSegments: function(t, e) {
                for (
                  var i = this.series[t],
                    r = e
                      ? Math.max(0, Math.floor(this._hScaler.bounds.from - 1))
                      : 0,
                    n = e
                      ? Math.min(
                          i.data.length,
                          Math.ceil(this._hScaler.bounds.to)
                        )
                      : i.data.length,
                    a = null,
                    s = [],
                    o = r;
                  o < n;
                  o++
                )
                  this.isNullValue(i.data[o])
                    ? (this.opt.interpolate && !e) || (a = null)
                    : (a || ((a = []), s.push({ index: o, rseg: a })),
                      a.push(
                        e && i.data[o].hasOwnProperty("y")
                          ? i.data[o].y
                          : i.data[o]
                      ));
                return s;
              },
              render: function(e, n) {
                if (this.zoom && !this.isDataDirty())
                  return this.performZoom(e, n);
                var a;
                this.resetEvents(),
                  (this.dirty = this.isDirty()),
                  this.dirty &&
                    (i.forEach(this.series, u),
                    (this._eventSeries = {}),
                    this.cleanGroup(),
                    this.getGroup().setTransform(null),
                    (a = this.getGroup()),
                    o.forEachRev(this.series, function(t) {
                      t.cleanGroup(a);
                    }));
                for (
                  var h, l, d = this.chart.theme, f = this.events(), p = 0;
                  p < this.series.length;
                  p++
                ) {
                  var m = this.series[p];
                  if (this.dirty || m.dirty)
                    if (
                      (m.cleanGroup(),
                      this.opt.enableCache &&
                        ((m._pathFreePool = (m._pathFreePool
                          ? m._pathFreePool
                          : []
                        ).concat(m._pathUsePool ? m._pathUsePool : [])),
                        (m._pathUsePool = [])),
                      m.data.length)
                    ) {
                      var x,
                        g = d.next(
                          this.opt.areas ? "area" : "line",
                          [this.opt, m],
                          !0
                        ),
                        v = this._hScaler.scaler.getTransformerFromModel(
                          this._hScaler
                        ),
                        y = this._vScaler.scaler.getTransformerFromModel(
                          this._vScaler
                        ),
                        b = (this._eventSeries[m.name] = new Array(
                          m.data.length
                        ));
                      if (((a = m.group), m.hidden))
                        this.opt.lines && (m.dyn.stroke = g.series.stroke),
                          (m.markers ||
                            (void 0 === m.markers && this.opt.markers)) &&
                            ((m.dyn.markerFill = g.marker.fill),
                            (m.dyn.markerStroke = g.marker.stroke),
                            (m.dyn.marker = g.symbol)),
                          this.opt.areas && (m.dyn.fill = g.series.fill);
                      else {
                        for (
                          var _ = i.some(m.data, function(t) {
                              return (
                                "number" == typeof t ||
                                (t && !t.hasOwnProperty("x"))
                              );
                            }),
                            k = this.buildSegments(p, _),
                            w = 0;
                          w < k.length;
                          w++
                        ) {
                          var S = k[w];
                          if (
                            ((x = _
                              ? i.map(
                                  S.rseg,
                                  function(t, i) {
                                    return {
                                      x: v(i + S.index + 1) + n.l,
                                      y: e.height - n.b - y(t),
                                      data: t
                                    };
                                  },
                                  this
                                )
                              : i.map(
                                  S.rseg,
                                  function(t) {
                                    return {
                                      x: v(t.x) + n.l,
                                      y: e.height - n.b - y(t.y),
                                      data: t
                                    };
                                  },
                                  this
                                )),
                            _ && this.opt.interpolate)
                          )
                            for (; w < k.length; )
                              (S = k[++w]) &&
                                (x = x.concat(
                                  i.map(
                                    S.rseg,
                                    function(t, i) {
                                      return {
                                        x: v(i + S.index + 1) + n.l,
                                        y: e.height - n.b - y(t),
                                        data: t
                                      };
                                    },
                                    this
                                  )
                                ));
                          var M = this.opt.tension
                            ? s.curve(x, this.opt.tension)
                            : "";
                          if (this.opt.areas && x.length > 1) {
                            var P = this._plotFill(g.series.fill, e, n),
                              T = t.clone(x),
                              A = e.height - n.b;
                            if (
                              (isNaN(this.opt.zeroLine) ||
                                (A = Math.max(
                                  n.t,
                                  Math.min(
                                    e.height - n.b - y(this.opt.zeroLine),
                                    A
                                  )
                                )),
                              this.opt.tension)
                            ) {
                              var j =
                                "L" +
                                T[T.length - 1].x +
                                "," +
                                A +
                                " L" +
                                T[0].x +
                                "," +
                                A +
                                " L" +
                                T[0].x +
                                "," +
                                T[0].y;
                              m.dyn.fill = a
                                .createPath(M + " " + j)
                                .setFill(P)
                                .getFill();
                            } else
                              T.push({ x: x[x.length - 1].x, y: A }),
                                T.push({ x: x[0].x, y: A }),
                                T.push(x[0]),
                                (m.dyn.fill = a
                                  .createPolyline(T)
                                  .setFill(P)
                                  .getFill());
                          }
                          (this.opt.lines || this.opt.markers) &&
                            ((h = g.series.stroke),
                            g.series.outline &&
                              ((l = m.dyn.outline = s.makeStroke(
                                g.series.outline
                              )).width =
                                2 * l.width + ((h && h.width) || 0))),
                            this.opt.markers && (m.dyn.marker = g.symbol);
                          var C,
                            N = null,
                            F = null,
                            L = null;
                          if (h && g.series.shadow && x.length > 1) {
                            var E = g.series.shadow,
                              O = i.map(x, function(t) {
                                return { x: t.x + E.dx, y: t.y + E.dy };
                              });
                            this.opt.lines &&
                              (this.opt.tension
                                ? (m.dyn.shadow = a
                                    .createPath(s.curve(O, this.opt.tension))
                                    .setStroke(E)
                                    .getStroke())
                                : (m.dyn.shadow = a
                                    .createPolyline(O)
                                    .setStroke(E)
                                    .getStroke())),
                              this.opt.markers &&
                                g.marker.shadow &&
                                ((E = g.marker.shadow),
                                (L = i.map(
                                  O,
                                  function(t) {
                                    return this.createPath(
                                      m,
                                      a,
                                      "M" + t.x + " " + t.y + " " + g.symbol
                                    )
                                      .setStroke(E)
                                      .setFill(E.color);
                                  },
                                  this
                                )));
                          }
                          if (this.opt.lines && x.length > 1)
                            l &&
                              (this.opt.tension
                                ? (m.dyn.outline = a
                                    .createPath(M)
                                    .setStroke(l)
                                    .getStroke())
                                : (m.dyn.outline = a
                                    .createPolyline(x)
                                    .setStroke(l)
                                    .getStroke())),
                              this.opt.tension
                                ? (m.dyn.stroke = (C = a.createPath(M))
                                    .setStroke(h)
                                    .getStroke())
                                : (m.dyn.stroke = (C = a.createPolyline(x))
                                    .setStroke(h)
                                    .getStroke()),
                              C.setFilter &&
                                g.series.filter &&
                                C.setFilter(g.series.filter);
                          var I = null;
                          if (this.opt.markers) {
                            var R = g;
                            (N = new Array(x.length)),
                              (F = new Array(x.length)),
                              (l = null),
                              R.marker.outline &&
                                ((l = s.makeStroke(R.marker.outline)).width =
                                  2 * l.width +
                                  (R.marker.stroke
                                    ? R.marker.stroke.width
                                    : 0)),
                              i.forEach(
                                x,
                                function(t, e) {
                                  if (
                                    this.opt.styleFunc ||
                                    "number" != typeof t.data
                                  ) {
                                    var i =
                                      "number" != typeof t.data ? [t.data] : [];
                                    this.opt.styleFunc &&
                                      i.push(this.opt.styleFunc(t.data)),
                                      (R = d.addMixin(g, "marker", i, !0));
                                  } else R = d.post(g, "marker");
                                  var r =
                                    "M" + t.x + " " + t.y + " " + R.symbol;
                                  l &&
                                    (F[e] = this.createPath(m, a, r).setStroke(
                                      l
                                    )),
                                    (N[e] = this.createPath(m, a, r)
                                      .setStroke(R.marker.stroke)
                                      .setFill(R.marker.fill));
                                },
                                this
                              ),
                              (m.dyn.markerFill = R.marker.fill),
                              (m.dyn.markerStroke = R.marker.stroke),
                              !I &&
                                this.opt.labels &&
                                (I = N[0].getBoundingBox()),
                              f
                                ? i.forEach(
                                    N,
                                    function(t, e) {
                                      var i = {
                                        element: "marker",
                                        index: e + S.index,
                                        run: m,
                                        shape: t,
                                        outline: F[e] || null,
                                        shadow: (L && L[e]) || null,
                                        cx: x[e].x,
                                        cy: x[e].y
                                      };
                                      _
                                        ? ((i.x = e + S.index + 1),
                                          (i.y = m.data[e + S.index]))
                                        : ((i.x = S.rseg[e].x),
                                          (i.y = m.data[e + S.index].y)),
                                        this._connectEvents(i),
                                        (b[e + S.index] = i);
                                    },
                                    this
                                  )
                                : delete this._eventSeries[m.name];
                          }
                          if (this.opt.labels) {
                            var z = I ? I.width : 2,
                              G = I ? I.height : 2;
                            i.forEach(
                              x,
                              function(t, e) {
                                if (
                                  this.opt.styleFunc ||
                                  "number" != typeof t.data
                                ) {
                                  var i =
                                    "number" != typeof t.data ? [t.data] : [];
                                  this.opt.styleFunc &&
                                    i.push(this.opt.styleFunc(t.data)),
                                    (R = d.addMixin(g, "marker", i, !0));
                                } else R = d.post(g, "marker");
                                this.createLabel(
                                  a,
                                  S.rseg[e],
                                  {
                                    x: t.x - z / 2,
                                    y: t.y - G / 2,
                                    width: z,
                                    height: G
                                  },
                                  R
                                );
                              },
                              this
                            );
                          }
                        }
                        m.dirty = !1;
                      }
                    } else (m.dirty = !1), d.skip();
                  else d.skip(), this._reconnectEvents(m.name);
                }
                if (
                  (r("dojo-bidi") && this._checkOrientation(this.group, e, n),
                  this.animate)
                ) {
                  var B = this.getGroup();
                  c.animateTransform(
                    t.delegate(
                      {
                        shape: B,
                        duration: 1200,
                        transform: [
                          {
                            name: "translate",
                            start: [0, e.height - n.b],
                            end: [0, 0]
                          },
                          { name: "scale", start: [1, 0], end: [1, 1] },
                          { name: "original" }
                        ]
                      },
                      this.animate
                    )
                  ).play();
                }
                return (this.dirty = !1), this;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2056: function(t, e, i) {
      var r, n;
      (r = [i(2071), i(12), i(25)]),
        void 0 ===
          (n = function(t, e, i) {
            var r = e.getObject("lang.functional", !0, t),
              n = {},
              a =
                "ab".split(/a*/).length > 1
                  ? String.prototype.split
                  : function(t) {
                      var e = this.split.call(this, t),
                        i = t.exec(this);
                      return i && 0 == i.index && e.unshift(""), e;
                    },
              s = function(t) {
                var e = [],
                  r = a.call(t, /\s*->\s*/m);
                if (r.length > 1)
                  for (; r.length; )
                    (t = r.pop()),
                      (e = r.pop().split(/\s*,\s*|\s+/m)),
                      r.length &&
                        r.push(
                          "(function(" +
                            e.join(", ") +
                            "){ return (" +
                            t +
                            "); })"
                        );
                else if (t.match(/\b_\b/)) e = ["_"];
                else {
                  var n = t.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),
                    s = t.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);
                  if (n || s)
                    n && (e.push("$1"), (t = "$1" + t)),
                      s && (e.push("$2"), (t += "$2"));
                  else {
                    var o =
                        t
                          .replace(
                            /(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*:|this|true|false|null|undefined|typeof|instanceof|in|delete|new|void|arguments|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|unescape|dojo|dijit|dojox|window|document|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g,
                            ""
                          )
                          .match(/([a-z_$][a-z_$\d]*)/gi) || [],
                      h = {};
                    i.forEach(o, function(t) {
                      h.hasOwnProperty(t) || (e.push(t), (h[t] = 1));
                    });
                  }
                }
                return { args: e, body: t };
              };
            return (
              e.mixin(r, {
                rawLambda: function(t) {
                  return s(t);
                },
                buildLambda: function(t) {
                  var e = s(t);
                  return (
                    "function(" +
                    e.args.join(",") +
                    "){return (" +
                    e.body +
                    ");}"
                  );
                },
                lambda: function(t) {
                  if ("function" == typeof t) return t;
                  if (t instanceof Array)
                    return (function(t) {
                      return t.length
                        ? function() {
                            var e = t.length - 1,
                              i = r.lambda(t[e]).apply(this, arguments);
                            for (--e; e >= 0; --e)
                              i = r.lambda(t[e]).call(this, i);
                            return i;
                          }
                        : function(t) {
                            return t;
                          };
                    })(t);
                  if (n.hasOwnProperty(t)) return n[t];
                  var e = s(t);
                  return (n[t] = new Function(
                    e.args,
                    "return (" + e.body + ");"
                  ));
                },
                clearLambdaCache: function() {
                  n = {};
                }
              }),
              r
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2071: function(t, e, i) {
      var r, n;
      (r = [i(16)]),
        void 0 ===
          (n = function(t) {
            return t.dojox;
          }.apply(null, r)) || (t.exports = n);
    },
    2072: function(t, e, i) {
      var r, n;
      (r = [i(12), i(42), i(62), i(2030), i(15)]),
        void 0 ===
          (n = function(t, e, i, r, n) {
            var a = t.getObject("dojox.charting.axis2d.common", !0),
              s = function(t) {
                (t.marginLeft = "0px"),
                  (t.marginTop = "0px"),
                  (t.marginRight = "0px"),
                  (t.marginBottom = "0px"),
                  (t.paddingLeft = "0px"),
                  (t.paddingTop = "0px"),
                  (t.paddingRight = "0px"),
                  (t.paddingBottom = "0px"),
                  (t.borderLeftWidth = "0px"),
                  (t.borderTopWidth = "0px"),
                  (t.borderRightWidth = "0px"),
                  (t.borderBottomWidth = "0px");
              };
            return t.mixin(a, {
              createText: {
                gfx: function(t, e, i, r, n, a, s, o) {
                  return e
                    .createText({ x: i, y: r, text: a, align: n })
                    .setFont(s)
                    .setFill(o);
                },
                html: function(t, a, o, h, l, c, u, d, f) {
                  var p,
                    m = e.doc.createElement("div"),
                    x = m.style;
                  t.getTextDir && (m.dir = t.getTextDir(c)),
                    s(x),
                    (x.font = u),
                    (m.innerHTML = String(c).replace(/\s/g, "&nbsp;")),
                    (x.color = d),
                    (x.position = "absolute"),
                    (x.left = "-10000px"),
                    e.body().appendChild(m);
                  var g = r.normalizedLength(r.splitFontString(u).size);
                  if (
                    (f ||
                      (p = (function(t) {
                        if (t.getBoundingClientRect) {
                          var e = t.getBoundingClientRect();
                          return e.width || e.right - e.left;
                        }
                        return i.getMarginBox(t).w;
                      })(m)),
                    "rtl" == m.dir && (o += f || p),
                    e.body().removeChild(m),
                    (x.position = "relative"),
                    f)
                  )
                    switch (((x.width = f + "px"), l)) {
                      case "middle":
                        (x.textAlign = "center"), (x.left = o - f / 2 + "px");
                        break;
                      case "end":
                        (x.textAlign = "right"), (x.left = o - f + "px");
                        break;
                      default:
                        (x.left = o + "px"), (x.textAlign = "left");
                    }
                  else
                    switch (l) {
                      case "middle":
                        x.left = Math.floor(o - p / 2) + "px";
                        break;
                      case "end":
                        x.left = Math.floor(o - p) + "px";
                        break;
                      default:
                        x.left = Math.floor(o) + "px";
                    }
                  (x.top = Math.floor(h - g) + "px"), (x.whiteSpace = "nowrap");
                  var v = e.doc.createElement("div"),
                    y = v.style;
                  return (
                    s(y),
                    (y.width = "0px"),
                    (y.height = "0px"),
                    v.appendChild(m),
                    t.node.insertBefore(v, t.node.firstChild),
                    n("dojo-bidi") &&
                      t.htmlElementsRegistry.push([v, o, h, l, c, u, d]),
                    v
                  );
                }
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2080: function(t, e, i) {
      var r, n;
      (r = [i(25), i(57), i(28), i(2030), i(419)]),
        void 0 ===
          (n = function(t, e, i, r, n) {
            return i("dojox.charting.Element", null, {
              chart: null,
              group: null,
              htmlElements: null,
              dirty: !0,
              renderingOptions: null,
              constructor: function(t, e) {
                (this.chart = t),
                  (this.group = null),
                  (this.htmlElements = []),
                  (this.dirty = !0),
                  (this.trailingSymbol = "..."),
                  (this._events = []),
                  e &&
                    e.renderingOptions &&
                    (this.renderingOptions = e.renderingOptions);
              },
              purgeGroup: function() {
                if ((this.destroyHtmlElements(), this.group)) {
                  this.getGroup().removeShape();
                  var i = this.getGroup().children;
                  if (n.dispose)
                    for (var r = 0; r < i.length; ++r) n.dispose(i[r], !0);
                  this.getGroup().rawNode && e.empty(this.getGroup().rawNode),
                    this.getGroup().clear(),
                    n.dispose && n.dispose(this.getGroup(), !0),
                    this.getGroup() != this.group &&
                      (this.group.rawNode && e.empty(this.group.rawNode),
                      this.group.clear(),
                      n.dispose && n.dispose(this.group, !0)),
                    (this.group = null);
                }
                return (
                  (this.dirty = !0),
                  this._events.length &&
                    (t.forEach(this._events, function(t) {
                      t.shape.disconnect(t.handle);
                    }),
                    (this._events = [])),
                  this
                );
              },
              cleanGroup: function(t) {
                if (
                  (this.destroyHtmlElements(),
                  t || (t = this.chart.surface),
                  this.group)
                ) {
                  var i,
                    r = this.getGroup().children;
                  if (n.dispose)
                    for (var a = 0; a < r.length; ++a) n.dispose(r[a], !0);
                  this.getGroup().rawNode &&
                    ((i = this.getGroup().bgNode),
                    e.empty(this.getGroup().rawNode)),
                    this.getGroup().clear(),
                    i && this.getGroup().rawNode.appendChild(i);
                } else if (
                  ((this.group = t.createGroup()),
                  this.renderingOptions &&
                    this.group.rawNode &&
                    "http://www.w3.org/2000/svg" ==
                      this.group.rawNode.namespaceURI)
                )
                  for (var s in this.renderingOptions)
                    this.group.rawNode.setAttribute(
                      s,
                      this.renderingOptions[s]
                    );
                return (this.dirty = !0), this;
              },
              getGroup: function() {
                return this.group;
              },
              destroyHtmlElements: function() {
                this.htmlElements.length &&
                  (t.forEach(this.htmlElements, e.destroy),
                  (this.htmlElements = []));
              },
              destroy: function() {
                this.purgeGroup();
              },
              overrideShape: function(t, e) {},
              getTextWidth: function(t, e) {
                return r._base._getTextBox(t, { font: e }).w || 0;
              },
              getTextWithLimitLength: function(t, e, i, r) {
                if (!t || t.length <= 0)
                  return { text: "", truncated: r || !1 };
                if (!i || i <= 0) return { text: t, truncated: r || !1 };
                var n = t.substring(0, 1) + this.trailingSymbol;
                if (i <= this.getTextWidth(n, e))
                  return { text: n, truncated: !0 };
                if (this.getTextWidth(t, e) <= i)
                  return { text: t, truncated: r || !1 };
                for (var a = 0, s = t.length; a < s; ) {
                  if (s - a <= 2) {
                    for (
                      ;
                      this.getTextWidth(
                        t.substring(0, a) + this.trailingSymbol,
                        e
                      ) > i;

                    )
                      a -= 1;
                    return {
                      text: t.substring(0, a) + this.trailingSymbol,
                      truncated: !0
                    };
                  }
                  var o = a + Math.round(0.618 * (s - a));
                  this.getTextWidth(t.substring(0, o), e) < i
                    ? ((a = o), (s = s))
                    : ((a = a), (s = o));
                }
              },
              getTextWithLimitCharCount: function(t, e, i, r) {
                return !t || t.length <= 0
                  ? { text: "", truncated: r || !1 }
                  : !i || i <= 0 || t.length <= i
                    ? { text: t, truncated: r || !1 }
                    : {
                        text: t.substring(0, i) + this.trailingSymbol,
                        truncated: !0
                      };
              },
              _plotFill: function(t, e, i) {
                if (!t || !t.type || !t.space) return t;
                var n,
                  a = t.space;
                switch (t.type) {
                  case "linear":
                    ("plot" !== a && "shapeX" !== a && "shapeY" !== a) ||
                      (((t = r.makeParameters(
                        r.defaultLinearGradient,
                        t
                      )).space = a),
                      ("plot" !== a && "shapeX" !== a) ||
                        ((n = e.height - i.t - i.b),
                        (t.y1 = i.t + (n * t.y1) / 100),
                        (t.y2 = i.t + (n * t.y2) / 100)),
                      ("plot" !== a && "shapeY" !== a) ||
                        ((n = e.width - i.l - i.r),
                        (t.x1 = i.l + (n * t.x1) / 100),
                        (t.x2 = i.l + (n * t.x2) / 100)));
                    break;
                  case "radial":
                    if ("plot" === a) {
                      (t = r.makeParameters(
                        r.defaultRadialGradient,
                        t
                      )).space = a;
                      var s = e.width - i.l - i.r,
                        o = e.height - i.t - i.b;
                      (t.cx = i.l + (s * t.cx) / 100),
                        (t.cy = i.t + (o * t.cy) / 100),
                        (t.r = (t.r * Math.sqrt(s * s + o * o)) / 200);
                    }
                    break;
                  case "pattern":
                    ("plot" !== a && "shapeX" !== a && "shapeY" !== a) ||
                      (((t = r.makeParameters(r.defaultPattern, t)).space = a),
                      ("plot" !== a && "shapeX" !== a) ||
                        ((n = e.height - i.t - i.b),
                        (t.y = i.t + (n * t.y) / 100),
                        (t.height = (n * t.height) / 100)),
                      ("plot" !== a && "shapeY" !== a) ||
                        ((n = e.width - i.l - i.r),
                        (t.x = i.l + (n * t.x) / 100),
                        (t.width = (n * t.width) / 100)));
                }
                return t;
              },
              _shapeFill: function(t, e) {
                if (!t || !t.space) return t;
                var i,
                  n = t.space;
                switch (t.type) {
                  case "linear":
                    ("shape" !== n && "shapeX" !== n && "shapeY" !== n) ||
                      (((t = r.makeParameters(
                        r.defaultLinearGradient,
                        t
                      )).space = n),
                      ("shape" !== n && "shapeX" !== n) ||
                        ((i = e.width),
                        (t.x1 = e.x + (i * t.x1) / 100),
                        (t.x2 = e.x + (i * t.x2) / 100)),
                      ("shape" !== n && "shapeY" !== n) ||
                        ((i = e.height),
                        (t.y1 = e.y + (i * t.y1) / 100),
                        (t.y2 = e.y + (i * t.y2) / 100)));
                    break;
                  case "radial":
                    "shape" === n &&
                      (((t = r.makeParameters(
                        r.defaultRadialGradient,
                        t
                      )).space = n),
                      (t.cx = e.x + e.width / 2),
                      (t.cy = e.y + e.height / 2),
                      (t.r = (t.r * e.width) / 200));
                    break;
                  case "pattern":
                    ("shape" !== n && "shapeX" !== n && "shapeY" !== n) ||
                      (((t = r.makeParameters(r.defaultPattern, t)).space = n),
                      ("shape" !== n && "shapeX" !== n) ||
                        ((i = e.width),
                        (t.x = e.x + (i * t.x) / 100),
                        (t.width = (i * t.width) / 100)),
                      ("shape" !== n && "shapeY" !== n) ||
                        ((i = e.height),
                        (t.y = e.y + (i * t.y) / 100),
                        (t.height = (i * t.height) / 100)));
                }
                return t;
              },
              _pseudoRadialFill: function(t, e, i, n, a) {
                if (!t || "radial" !== t.type || "shape" !== t.space) return t;
                var s = t.space;
                if (
                  (((t = r.makeParameters(
                    r.defaultRadialGradient,
                    t
                  )).space = s),
                  arguments.length < 4)
                )
                  return (t.cx = e.x), (t.cy = e.y), (t.r = (t.r * i) / 100), t;
                var o = arguments.length < 5 ? n : (a + n) / 2;
                return {
                  type: "linear",
                  x1: e.x,
                  y1: e.y,
                  x2: e.x + (t.r * i * Math.cos(o)) / 100,
                  y2: e.y + (t.r * i * Math.sin(o)) / 100,
                  colors: t.colors
                };
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2106: function(t, e, i) {
      var r, n;
      (r = [i(28), i(12), i(2055), i(2108)]),
        void 0 ===
          (n = function(t, e, i, r) {
            return t("dojox.charting.plot2d.Stacked", i, {
              getSeriesStats: function() {
                return r.collectStats(
                  this.series,
                  e.hitch(this, "isNullValue")
                );
              },
              buildSegments: function(t, i) {
                for (
                  var n = this.series[t],
                    a = i
                      ? Math.max(0, Math.floor(this._hScaler.bounds.from - 1))
                      : 0,
                    s = i
                      ? Math.min(
                          n.data.length - 1,
                          Math.ceil(this._hScaler.bounds.to)
                        )
                      : n.data.length - 1,
                    o = null,
                    h = [],
                    l = e.hitch(this, "isNullValue"),
                    c = a;
                  c <= s;
                  c++
                ) {
                  var u = i
                    ? r.getIndexValue(this.series, t, c, l)
                    : r.getValue(
                        this.series,
                        t,
                        n.data[c] ? n.data[c].x : null,
                        l
                      );
                  l(u[0]) || (!i && null == u[0].y)
                    ? (this.opt.interpolate && !i) || (o = null)
                    : (o || ((o = []), h.push({ index: c, rseg: o })),
                      o.push(u[0]));
                }
                return h;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2107: function(t, e, i) {
      var r, n;
      (r = [i(28), i(25), i(12), i(2030), i(2080), i(2021), i(2072), i(15)]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o) {
            var h = t("dojox.charting.plot2d.Base", n, {
              constructor: function(t, e) {
                e && e.tooltipFunc && (this.tooltipFunc = e.tooltipFunc);
              },
              clear: function() {
                return (this.series = []), (this.dirty = !0), this;
              },
              setAxis: function(t) {
                return this;
              },
              assignAxes: function(t) {
                e.forEach(
                  this.axes,
                  function(e) {
                    this[e] && this.setAxis(t[this[e]]);
                  },
                  this
                );
              },
              addSeries: function(t) {
                return this.series.push(t), this;
              },
              getSeriesStats: function() {
                return a.collectSimpleStats(
                  this.series,
                  i.hitch(this, "isNullValue")
                );
              },
              calculateAxes: function(t) {
                return this.initializeScalers(t, this.getSeriesStats()), this;
              },
              initializeScalers: function() {
                return this;
              },
              isDataDirty: function() {
                return e.some(this.series, function(t) {
                  return t.dirty;
                });
              },
              render: function(t, e) {
                return this;
              },
              renderLabel: function(t, e, i, n, a, o, h) {
                var l = s.createText[
                  this.opt.htmlLabels && "vml" != r.renderer ? "html" : "gfx"
                ](
                  this.chart,
                  t,
                  e,
                  i,
                  h || "middle",
                  n,
                  a.series.font,
                  a.series.fontColor
                );
                return (
                  o &&
                    (this.opt.htmlLabels && "vml" != r.renderer
                      ? (l.style.pointerEvents = "none")
                      : l.rawNode && (l.rawNode.style.pointerEvents = "none")),
                  this.opt.htmlLabels &&
                    "vml" != r.renderer &&
                    this.htmlElements.push(l),
                  l
                );
              },
              getRequiredColors: function() {
                return this.series.length;
              },
              _getLabel: function(t) {
                return a.getLabel(t, this.opt.fixed, this.opt.precision);
              }
            });
            return (
              o("dojo-bidi") &&
                h.extend({
                  _checkOrientation: function(t, e, i) {
                    this.chart.applyMirroring(this.group, e, i);
                  }
                }),
              h
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2108: function(t, e, i) {
      var r, n;
      (r = [i(12), i(2013), i(2021)]),
        void 0 ===
          (n = function(t, e, i) {
            var r = t.getObject("dojox.charting.plot2d.commonStacked", !0);
            return t.mixin(r, {
              collectStats: function(e, n) {
                for (
                  var a = t.delegate(i.defaultStats), s = 0;
                  s < e.length;
                  ++s
                )
                  for (var o = e[s], h = 0; h < o.data.length; h++) {
                    var l, c;
                    null !== o.data[h] &&
                      ("number" != typeof o.data[h] &&
                      o.data[h].hasOwnProperty("x")
                        ? null !== (l = o.data[h].x) &&
                          (c =
                            null != (c = r.getValue(e, s, l, n)[0]) && c.y
                              ? c.y
                              : null)
                        : ((c = r.getIndexValue(e, s, h, n)[0]), (l = h + 1)),
                      (a.hmin = Math.min(a.hmin, l)),
                      (a.hmax = Math.max(a.hmax, l)),
                      (a.vmin = Math.min(a.vmin, c)),
                      (a.vmax = Math.max(a.vmax, c)));
                  }
                return a;
              },
              rearrangeValues: function(t, i, r) {
                var n = e.filter(t, "x"),
                  a = n.length;
                if (!a) return t;
                for (var s = {}, o = 0; o < a; ++o) {
                  for (var h = n[o], l = h.min, c = h.max; l < c; ++l)
                    h[l] = (h[l] || 0) + (s[l] || 0);
                  s = h;
                }
                for (o = 0; o < a; ++o)
                  for (l = (h = n[o]).min, c = h.max; l < c; ++l)
                    h[l] = this.isNullValue(h[l]) ? 0 : i(h[l]) - r;
                if (this.opt.minWidth) {
                  var u = this.opt.minWidth;
                  for (o = a - 1; o; --o)
                    for (
                      h = n[o], s = n[o - 1], l = h.min, c = h.max;
                      l < c;
                      ++l
                    )
                      h[l] = h[l] - s[l];
                  var d = h.min,
                    f = h.max;
                  for (l = d; l < f; ++l) {
                    var p = 0,
                      m = 0;
                    for (o = 0; o < a; ++o) {
                      var x = n[o][l];
                      x > 0 && ((p += x), ++m);
                    }
                    if (p <= m * u)
                      for (o = 0; o < a; ++o)
                        (x = n[o][l]) > 0 && (n[o][l] = u);
                    else {
                      var g = 0;
                      for (o = 0; o < a; ++o)
                        if ((x = (h = n[o])[l]) > 0)
                          if (x < u) (g += u - x), (h[l] = u);
                          else if (g > 0) {
                            var v = h[l] - u;
                            v >= g
                              ? ((h[l] -= g), (g = 0))
                              : v > 0 && ((h[l] = u), (g -= v));
                          }
                      if (g > 0)
                        for (o = a - 1; o >= 0; --o)
                          if ((x = (h = n[o])[l]) > 0) {
                            if ((v = h[l] - u) >= g) {
                              h[l] -= g;
                              break;
                            }
                            v > 0 && ((h[l] = u), (g -= v));
                          }
                    }
                  }
                  for (o = 1; o < a; ++o)
                    for (
                      h = n[o], s = n[o - 1], l = h.min, c = h.max;
                      l < c;
                      ++l
                    )
                      h[l] = h[l] + s[l];
                }
                return t;
              },
              getIndexValue: function(t, e, i, r) {
                var n,
                  a,
                  s,
                  o = 0;
                for (a = 0; a <= e; ++a)
                  t[a].hidden ||
                    ((s = o),
                    r((n = t[a].data[i])) ||
                      (isNaN(n) && (n = n.y || 0), (o += n)));
                return [o, s];
              },
              getValue: function(t, e, i, r) {
                var n,
                  a,
                  s,
                  o,
                  h = null;
                for (n = 0; n <= e; ++n)
                  if (!t[n].hidden)
                    for (a = 0; a < t[n].data.length; a++)
                      if (((o = h), !r((s = t[n].data[a])))) {
                        if (s.x == i) {
                          h || (h = { x: i }),
                            null != s.y &&
                              (null == h.y && (h.y = 0), (h.y += s.y));
                          break;
                        }
                        if (s.x > i) break;
                      }
                return [h, o];
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2109: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(25),
        i(28),
        i(15),
        i(2040),
        i(2036),
        i(2021),
        i(2013),
        i(2041),
        i(2022),
        i(2031)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = h.lambda("item.purgeGroup()"),
              d = function() {
                return !1;
              };
            return i("dojox.charting.plot2d.Columns", [n, a], {
              defaultParams: { gap: 0, animate: null, enableCache: !1 },
              optionalParams: {
                minBarSize: 1,
                maxBarSize: 1,
                stroke: {},
                outline: {},
                shadow: {},
                fill: {},
                filter: {},
                styleFunc: null,
                font: "",
                fontColor: ""
              },
              constructor: function(e, i) {
                (this.opt = t.clone(t.mixin(this.opt, this.defaultParams))),
                  l.updateWithObject(this.opt, i),
                  l.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.animate = this.opt.animate),
                  (this.renderingOptions = { "shape-rendering": "crispEdges" });
              },
              getSeriesStats: function() {
                var e = s.collectSimpleStats(
                  this.series,
                  t.hitch(this, "isNullValue")
                );
                return (e.hmin -= 0.5), (e.hmax += 0.5), e;
              },
              createRect: function(t, e, i) {
                var r;
                return (
                  this.opt.enableCache && t._rectFreePool.length > 0
                    ? ((r = t._rectFreePool.pop()).setShape(i), e.add(r))
                    : (r = e.createRect(i)),
                  this.opt.enableCache && t._rectUsePool.push(r),
                  r
                );
              },
              render: function(i, n) {
                if (this.zoom && !this.isDataDirty())
                  return this.performZoom(i, n);
                var a;
                this.resetEvents(),
                  (this.dirty = this.isDirty()),
                  this.dirty &&
                    (e.forEach(this.series, u),
                    (this._eventSeries = {}),
                    this.cleanGroup(),
                    (a = this.getGroup()),
                    o.forEachRev(this.series, function(t) {
                      t.cleanGroup(a);
                    }));
                var s = this.chart.theme,
                  h = this._hScaler.scaler.getTransformerFromModel(
                    this._hScaler
                  ),
                  l = this._vScaler.scaler.getTransformerFromModel(
                    this._vScaler
                  ),
                  c = Math.max(
                    this._vScaler.bounds.lower,
                    this._vAxis ? this._vAxis.naturalBaseline : 0
                  ),
                  d = l(c),
                  f = this.events(),
                  p = this.getBarProperties(),
                  m = this.series.length;
                e.forEach(this.series, function(t) {
                  t.hidden && m--;
                });
                var x = this.extractValues(this._hScaler);
                x = this.rearrangeValues(x, l, d);
                for (var g = 0; g < this.series.length; g++) {
                  var v = this.series[g];
                  if (this.dirty || v.dirty) {
                    v.cleanGroup(),
                      this.opt.enableCache &&
                        ((v._rectFreePool = (v._rectFreePool
                          ? v._rectFreePool
                          : []
                        ).concat(v._rectUsePool ? v._rectUsePool : [])),
                        (v._rectUsePool = []));
                    var y = s.next("column", [this.opt, v]),
                      b = new Array(v.data.length);
                    if (v.hidden) v.dyn.fill = y.series.fill;
                    else {
                      m--, (a = v.group);
                      for (
                        var _ = e.some(v.data, function(t) {
                            return (
                              "number" == typeof t ||
                              (t && !t.hasOwnProperty("x"))
                            );
                          }),
                          k = _
                            ? Math.max(
                                0,
                                Math.floor(this._hScaler.bounds.from - 1)
                              )
                            : 0,
                          w = _
                            ? Math.min(
                                v.data.length,
                                Math.ceil(this._hScaler.bounds.to)
                              )
                            : v.data.length,
                          S = k;
                        S < w;
                        ++S
                      ) {
                        var M = v.data[S];
                        if (!this.isNullValue(M)) {
                          var P,
                            T,
                            A = this.getValue(M, S, g, _),
                            j = (l(A.y), x[g][S]);
                          if (this.opt.styleFunc || "number" != typeof M) {
                            var C = "number" != typeof M ? [M] : [];
                            this.opt.styleFunc && C.push(this.opt.styleFunc(M)),
                              (P = s.addMixin(y, "column", C, !0));
                          } else P = s.post(y, "column");
                          if (p.width >= 1) {
                            var N = {
                              x: n.l + h(A.x + 0.5) + p.gap + p.thickness * m,
                              y: i.height - n.b - d - Math.max(j, 0),
                              width: p.width,
                              height: Math.abs(j)
                            };
                            if (P.series.shadow) {
                              var F = t.clone(N);
                              (F.x += P.series.shadow.dx),
                                (F.y += P.series.shadow.dy),
                                (T = this.createRect(v, a, F)
                                  .setFill(P.series.shadow.color)
                                  .setStroke(P.series.shadow)),
                                this.animate &&
                                  this._animateColumn(T, i.height - n.b + d, j);
                            }
                            var L = this._plotFill(P.series.fill, i, n);
                            L = this._shapeFill(L, N);
                            var E = this.createRect(v, a, N)
                              .setFill(L)
                              .setStroke(P.series.stroke);
                            if (
                              (this.overrideShape(E, { index: S, value: A }),
                              E.setFilter &&
                                P.series.filter &&
                                E.setFilter(P.series.filter),
                              (v.dyn.fill = E.getFill()),
                              (v.dyn.stroke = E.getStroke()),
                              f)
                            ) {
                              var O = {
                                element: "column",
                                index: S,
                                run: v,
                                shape: E,
                                shadow: T,
                                cx: A.x + 0.5,
                                cy: A.y,
                                x: _ ? S : v.data[S].x,
                                y: _ ? v.data[S] : v.data[S].y
                              };
                              this._connectEvents(O), (b[S] = O);
                            }
                            !isNaN(A.py) &&
                              A.py > c &&
                              (N.height = j - l(A.py)),
                              this.createLabel(a, M, N, P),
                              this.animate &&
                                this._animateColumn(E, i.height - n.b - d, j);
                          }
                        }
                      }
                      (this._eventSeries[v.name] = b), (v.dirty = !1);
                    }
                  } else s.skip(), this._reconnectEvents(v.name);
                }
                return (
                  (this.dirty = !1),
                  r("dojo-bidi") && this._checkOrientation(this.group, i, n),
                  this
                );
              },
              getValue: function(t, e, i, r) {
                var n, a;
                return (
                  r
                    ? ((n = "number" == typeof t ? t : t.y), (a = e))
                    : ((n = t.y), (a = t.x - 1)),
                  { x: a, y: n }
                );
              },
              extractValues: function(t) {
                for (var i = [], r = this.series.length - 1; r >= 0; --r) {
                  var n = this.series[r];
                  if (this.dirty || n.dirty) {
                    var a = e.some(n.data, function(t) {
                        return (
                          "number" == typeof t || (t && !t.hasOwnProperty("x"))
                        );
                      }),
                      s = a ? Math.max(0, Math.floor(t.bounds.from - 1)) : 0,
                      o = a
                        ? Math.min(n.data.length, Math.ceil(t.bounds.to))
                        : n.data.length,
                      h = (i[r] = []);
                    (h.min = s), (h.max = o);
                    for (var l = s; l < o; ++l) {
                      var c = n.data[l];
                      h[l] = this.isNullValue(c)
                        ? 0
                        : "number" == typeof c
                          ? c
                          : c.y;
                    }
                  }
                }
                return i;
              },
              rearrangeValues: function(t, e, i) {
                for (var r = 0, n = t.length; r < n; ++r) {
                  var a = t[r];
                  if (a)
                    for (var s = a.min, o = a.max; s < o; ++s) {
                      var h = a[s];
                      a[s] = this.isNullValue(h) ? 0 : e(h) - i;
                    }
                }
                return t;
              },
              isNullValue: function(t) {
                if (null === t || void 0 === t) return !0;
                var e = this._hAxis ? this._hAxis.isNullValue : d,
                  i = this._vAxis ? this._vAxis.isNullValue : d;
                return "number" == typeof t
                  ? i(0.5) || e(t)
                  : i(isNaN(t.x) ? 0.5 : t.x + 0.5) || null === t.y || e(t.y);
              },
              getBarProperties: function() {
                var t = s.calculateBarSize(
                  this._hScaler.bounds.scale,
                  this.opt
                );
                return { gap: t.gap, width: t.size, thickness: 0 };
              },
              _animateColumn: function(e, i, r) {
                0 === r && (r = 1),
                  c
                    .animateTransform(
                      t.delegate(
                        {
                          shape: e,
                          duration: 1200,
                          transform: [
                            {
                              name: "translate",
                              start: [0, i - i / r],
                              end: [0, 0]
                            },
                            { name: "scale", start: [1, 1 / r], end: [1, 1] },
                            { name: "original" }
                          ]
                        },
                        this.animate
                      )
                    )
                    .play();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2110: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(25),
        i(28),
        i(15),
        i(2040),
        i(2036),
        i(2021),
        i(2031),
        i(2022),
        i(2013),
        i(2041)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = c.lambda("item.purgeGroup()"),
              d = function() {
                return !1;
              };
            return i("dojox.charting.plot2d.Bars", [n, a], {
              defaultParams: { gap: 0, animate: null, enableCache: !1 },
              optionalParams: {
                minBarSize: 1,
                maxBarSize: 1,
                stroke: {},
                outline: {},
                shadow: {},
                fill: {},
                filter: {},
                styleFunc: null,
                font: "",
                fontColor: ""
              },
              constructor: function(e, i) {
                (this.opt = t.clone(t.mixin(this.opt, this.defaultParams))),
                  h.updateWithObject(this.opt, i),
                  h.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.animate = this.opt.animate),
                  (this.renderingOptions = { "shape-rendering": "crispEdges" });
              },
              getSeriesStats: function() {
                var e,
                  i = s.collectSimpleStats(
                    this.series,
                    t.hitch(this, "isNullValue")
                  );
                return (
                  (i.hmin -= 0.5),
                  (i.hmax += 0.5),
                  (e = i.hmin),
                  (i.hmin = i.vmin),
                  (i.vmin = e),
                  (e = i.hmax),
                  (i.hmax = i.vmax),
                  (i.vmax = e),
                  i
                );
              },
              createRect: function(t, e, i) {
                var r;
                return (
                  this.opt.enableCache && t._rectFreePool.length > 0
                    ? ((r = t._rectFreePool.pop()).setShape(i), e.add(r))
                    : (r = e.createRect(i)),
                  this.opt.enableCache && t._rectUsePool.push(r),
                  r
                );
              },
              createLabel: function(t, e, i, r) {
                if (this.opt.labels && "outside" == this.opt.labelStyle) {
                  var n = i.y + i.height / 2,
                    a = i.x + i.width + this.opt.labelOffset;
                  this.renderLabel(
                    t,
                    a,
                    n,
                    this._getLabel(isNaN(e.y) ? e : e.y),
                    r,
                    "start"
                  );
                } else this.inherited(arguments);
              },
              render: function(i, n) {
                if (this.zoom && !this.isDataDirty())
                  return this.performZoom(i, n);
                var a;
                (this.dirty = this.isDirty()),
                  this.resetEvents(),
                  this.dirty &&
                    (e.forEach(this.series, u),
                    (this._eventSeries = {}),
                    this.cleanGroup(),
                    (a = this.getGroup()),
                    l.forEachRev(this.series, function(t) {
                      t.cleanGroup(a);
                    }));
                var s = this.chart.theme,
                  o = this._hScaler.scaler.getTransformerFromModel(
                    this._hScaler
                  ),
                  h = this._vScaler.scaler.getTransformerFromModel(
                    this._vScaler
                  ),
                  c = Math.max(
                    this._hScaler.bounds.lower,
                    this._hAxis ? this._hAxis.naturalBaseline : 0
                  ),
                  d = o(c),
                  f = this.events(),
                  p = this.getBarProperties(),
                  m = this.series.length;
                e.forEach(this.series, function(t) {
                  t.hidden && m--;
                });
                var x = m,
                  g = this.extractValues(this._vScaler);
                g = this.rearrangeValues(g, o, d);
                for (var v = 0; v < this.series.length; v++) {
                  var y = this.series[v];
                  if (this.dirty || y.dirty) {
                    y.cleanGroup(),
                      this.opt.enableCache &&
                        ((y._rectFreePool = (y._rectFreePool
                          ? y._rectFreePool
                          : []
                        ).concat(y._rectUsePool ? y._rectUsePool : [])),
                        (y._rectUsePool = []));
                    var b = s.next("bar", [this.opt, y]);
                    if (y.hidden)
                      (y.dyn.fill = b.series.fill),
                        (y.dyn.stroke = b.series.stroke);
                    else {
                      x--;
                      var _ = new Array(y.data.length);
                      a = y.group;
                      for (
                        var k = e.some(y.data, function(t) {
                            return (
                              "number" == typeof t ||
                              (t && !t.hasOwnProperty("x"))
                            );
                          }),
                          w = k
                            ? Math.max(
                                0,
                                Math.floor(this._vScaler.bounds.from - 1)
                              )
                            : 0,
                          S = k
                            ? Math.min(
                                y.data.length,
                                Math.ceil(this._vScaler.bounds.to)
                              )
                            : y.data.length,
                          M = w;
                        M < S;
                        ++M
                      ) {
                        var P = y.data[M];
                        if (!this.isNullValue(P)) {
                          var T,
                            A,
                            j = this.getValue(P, M, v, k),
                            C = g[v][M];
                          if (this.opt.styleFunc || "number" != typeof P) {
                            var N = "number" != typeof P ? [P] : [];
                            this.opt.styleFunc && N.push(this.opt.styleFunc(P)),
                              (T = s.addMixin(b, "bar", N, !0));
                          } else T = s.post(b, "bar");
                          if (C && p.height >= 1) {
                            var F = {
                              x: n.l + d + Math.min(C, 0),
                              y:
                                i.height -
                                n.b -
                                h(j.x + 1.5) +
                                p.gap +
                                p.thickness * (m - x - 1),
                              width: Math.abs(C),
                              height: p.height
                            };
                            if (T.series.shadow) {
                              var L = t.clone(F);
                              (L.x += T.series.shadow.dx),
                                (L.y += T.series.shadow.dy),
                                (A = this.createRect(y, a, L)
                                  .setFill(T.series.shadow.color)
                                  .setStroke(T.series.shadow)),
                                this.animate &&
                                  this._animateBar(A, n.l + d, -C);
                            }
                            var E = this._plotFill(T.series.fill, i, n);
                            E = this._shapeFill(E, F);
                            var O = this.createRect(y, a, F)
                              .setFill(E)
                              .setStroke(T.series.stroke);
                            if (
                              (O.setFilter &&
                                T.series.filter &&
                                O.setFilter(T.series.filter),
                              (y.dyn.fill = O.getFill()),
                              (y.dyn.stroke = O.getStroke()),
                              f)
                            ) {
                              var I = {
                                element: "bar",
                                index: M,
                                run: y,
                                shape: O,
                                shadow: A,
                                cx: j.y,
                                cy: j.x + 1.5,
                                x: k ? M : y.data[M].x,
                                y: k ? y.data[M] : y.data[M].y
                              };
                              this._connectEvents(I), (_[M] = I);
                            }
                            !isNaN(j.py) &&
                              j.py > c &&
                              ((F.x += o(j.py)), (F.width -= o(j.py))),
                              this.createLabel(a, P, F, T),
                              this.animate &&
                                this._animateBar(O, n.l + d, -Math.abs(C));
                          }
                        }
                      }
                      (this._eventSeries[y.name] = _), (y.dirty = !1);
                    }
                  } else s.skip(), this._reconnectEvents(y.name);
                }
                return (
                  (this.dirty = !1),
                  r("dojo-bidi") && this._checkOrientation(this.group, i, n),
                  this
                );
              },
              getValue: function(t, e, i, r) {
                var n, a;
                return (
                  r
                    ? ((n = "number" == typeof t ? t : t.y), (a = e))
                    : ((n = t.y), (a = t.x - 1)),
                  { y: n, x: a }
                );
              },
              extractValues: function(t) {
                for (var i = [], r = this.series.length - 1; r >= 0; --r) {
                  var n = this.series[r];
                  if (this.dirty || n.dirty) {
                    var a = e.some(n.data, function(t) {
                        return (
                          "number" == typeof t || (t && !t.hasOwnProperty("x"))
                        );
                      }),
                      s = a ? Math.max(0, Math.floor(t.bounds.from - 1)) : 0,
                      o = a
                        ? Math.min(n.data.length, Math.ceil(t.bounds.to))
                        : n.data.length,
                      h = (i[r] = []);
                    (h.min = s), (h.max = o);
                    for (var l = s; l < o; ++l) {
                      var c = n.data[l];
                      h[l] = this.isNullValue(c)
                        ? 0
                        : "number" == typeof c
                          ? c
                          : c.y;
                    }
                  }
                }
                return i;
              },
              rearrangeValues: function(t, e, i) {
                for (var r = 0, n = t.length; r < n; ++r) {
                  var a = t[r];
                  if (a)
                    for (var s = a.min, o = a.max; s < o; ++s) {
                      var h = a[s];
                      a[s] = this.isNullValue(h) ? 0 : e(h) - i;
                    }
                }
                return t;
              },
              isNullValue: function(t) {
                if (null === t || void 0 === t) return !0;
                var e = this._hAxis ? this._hAxis.isNullValue : d,
                  i = this._vAxis ? this._vAxis.isNullValue : d;
                return "number" == typeof t
                  ? i(0.5) || e(t)
                  : i(isNaN(t.x) ? 0.5 : t.x + 0.5) || null === t.y || e(t.y);
              },
              getBarProperties: function() {
                var t = s.calculateBarSize(
                  this._vScaler.bounds.scale,
                  this.opt
                );
                return { gap: t.gap, height: t.size, thickness: 0 };
              },
              _animateBar: function(e, i, r) {
                0 == r && (r = 1),
                  o
                    .animateTransform(
                      t.delegate(
                        {
                          shape: e,
                          duration: 1200,
                          transform: [
                            {
                              name: "translate",
                              start: [i - i / r, 0],
                              end: [0, 0]
                            },
                            { name: "scale", start: [1 / r, 1], end: [1, 1] },
                            { name: "original" }
                          ]
                        },
                        this.animate
                      )
                    )
                    .play();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2139: function(t, e, i) {
      var r, n;
      (r = [i(12)]),
        void 0 ===
          (n = function(t) {
            var e = function(t, e) {
                return Math.abs(t - e) <= 1e-6 * (Math.abs(t) + Math.abs(e));
              },
              i = t.getObject("dojox.charting.scaler.common", !0),
              r = {};
            return t.mixin(i, {
              doIfLoaded: function(t, e, i) {
                if (void 0 === r[t])
                  try {
                    r[t] = require(t);
                  } catch (e) {
                    r[t] = null;
                  }
                return r[t] ? e(r[t]) : i();
              },
              getNumericLabel: function(t, r, n) {
                var a = "";
                if (
                  (i.doIfLoaded(
                    "dojo/number",
                    function(e) {
                      a =
                        (n.fixed
                          ? e.format(t, { places: r < 0 ? -r : 0 })
                          : e.format(t)) || "";
                    },
                    function() {
                      a = n.fixed ? t.toFixed(r < 0 ? -r : 0) : t.toString();
                    }
                  ),
                  n.labelFunc)
                ) {
                  var s = n.labelFunc(a, t, r);
                  if (s) return s;
                }
                if (n.labels) {
                  for (var o = n.labels, h = 0, l = o.length; h < l; ) {
                    var c = Math.floor((h + l) / 2);
                    o[c].value < t ? (h = c + 1) : (l = c);
                  }
                  if (h < o.length && e(o[h].value, t)) return o[h].text;
                  if (--h >= 0 && h < o.length && e(o[h].value, t))
                    return o[h].text;
                  if ((h += 2) < o.length && e(o[h].value, t)) return o[h].text;
                }
                return a;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2140: function(t, e, i) {
      var r, n;
      (r = [i(69), i(12), i(156), i(182)]),
        void 0 ===
          (n = function(t, e, i, r) {
            var n = (t.gradutils = {});
            return (
              (n.getColor = function(t, e) {
                var n;
                if (t) {
                  switch (t.type) {
                    case "linear":
                      var a = Math.atan2(t.y2 - t.y1, t.x2 - t.x1),
                        s = i.rotate(-a),
                        o = i.project(t.x2 - t.x1, t.y2 - t.y1),
                        h = i.multiplyPoint(o, e),
                        l = i.multiplyPoint(o, t.x1, t.y1),
                        c = i.multiplyPoint(o, t.x2, t.y2),
                        u = i.multiplyPoint(s, c.x - l.x, c.y - l.y).x;
                      n = i.multiplyPoint(s, h.x - l.x, h.y - l.y).x / u;
                      break;
                    case "radial":
                      var d = e.x - t.cx,
                        f = e.y - t.cy;
                      n = Math.sqrt(d * d + f * f) / t.r;
                  }
                  return (function(t, e) {
                    if (t <= 0) return e[0].color;
                    var i = e.length;
                    if (t >= 1) return e[i - 1].color;
                    for (var n = 0; n < i; ++n) {
                      var a = e[n];
                      if (a.offset >= t) {
                        if (n) {
                          var s = e[n - 1];
                          return r.blendColors(
                            new r(s.color),
                            new r(a.color),
                            (t - s.offset) / (a.offset - s.offset)
                          );
                        }
                        return a.color;
                      }
                    }
                    return e[i - 1].color;
                  })(n, t.colors);
                }
                return new r(t || [0, 0, 0, 0]);
              }),
              (n.reverse = function(t) {
                if (t)
                  switch (t.type) {
                    case "linear":
                    case "radial":
                      if ((t = e.delegate(t)).colors) {
                        for (
                          var i,
                            r = t.colors,
                            n = r.length,
                            a = 0,
                            s = (t.colors = new Array(r.length));
                          a < n;
                          ++a
                        )
                          (i = r[a]),
                            (s[a] = { offset: 1 - i.offset, color: i.color });
                        s.sort(function(t, e) {
                          return t.offset - e.offset;
                        });
                      }
                  }
                return t;
              }),
              n
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2141: function(t, e, i) {
      var r, n;
      (r = [i(12), i(25), i(16), i(2056)]),
        void 0 ===
          (n = function(t, e, i, r) {
            var n = {};
            t.mixin(r, {
              foldl: function(e, a, s, o) {
                var h, l;
                if (
                  ("string" == typeof e && (e = e.split("")),
                  (o = o || i.global),
                  (a = r.lambda(a)),
                  t.isArray(e))
                )
                  for (
                    h = 0, l = e.length;
                    h < l;
                    s = a.call(o, s, e[h], h, e), ++h
                  );
                else if (
                  "function" == typeof e.hasNext &&
                  "function" == typeof e.next
                )
                  for (h = 0; e.hasNext(); s = a.call(o, s, e.next(), h++, e));
                else for (h in e) h in n || (s = a.call(o, s, e[h], h, e));
                return s;
              },
              foldl1: function(e, a, s) {
                var o, h, l;
                if (
                  ("string" == typeof e && (e = e.split("")),
                  (s = s || i.global),
                  (a = r.lambda(a)),
                  t.isArray(e))
                )
                  for (
                    o = e[0], h = 1, l = e.length;
                    h < l;
                    o = a.call(s, o, e[h], h, e), ++h
                  );
                else if (
                  "function" == typeof e.hasNext &&
                  "function" == typeof e.next
                ) {
                  if (e.hasNext())
                    for (
                      o = e.next(), h = 1;
                      e.hasNext();
                      o = a.call(s, o, e.next(), h++, e)
                    );
                } else {
                  var c = !0;
                  for (h in e)
                    h in n ||
                      (c
                        ? ((o = e[h]), (c = !1))
                        : (o = a.call(s, o, e[h], h, e)));
                }
                return o;
              },
              foldr: function(t, e, n, a) {
                "string" == typeof t && (t = t.split("")),
                  (a = a || i.global),
                  (e = r.lambda(e));
                for (
                  var s = t.length;
                  s > 0;
                  --s, n = e.call(a, n, t[s], s, t)
                );
                return n;
              },
              foldr1: function(t, e, n) {
                "string" == typeof t && (t = t.split("")),
                  (n = n || i.global),
                  (e = r.lambda(e));
                for (
                  var a = t.length, s = t[a - 1], o = a - 1;
                  o > 0;
                  --o, s = e.call(n, s, t[o], o, t)
                );
                return s;
              },
              reduce: function(t, e, i) {
                return arguments.length < 3 ? r.foldl1(t, e) : r.foldl(t, e, i);
              },
              reduceRight: function(t, e, i) {
                return arguments.length < 3 ? r.foldr1(t, e) : r.foldr(t, e, i);
              },
              unfold: function(t, e, n, a, s) {
                (s = s || i.global),
                  (e = r.lambda(e)),
                  (n = r.lambda(n)),
                  (t = r.lambda(t));
                for (
                  var o = [];
                  !t.call(s, a);
                  o.push(e.call(s, a)), a = n.call(s, a)
                );
                return o;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2142: function(t, e, i) {
      var r, n;
      (r = [i(12), i(28), i(2257), i(2143), i(2022)]),
        void 0 ===
          (n = function(t, e, i, r, n) {
            return e("dojox.charting.axis2d.Invisible", i, {
              defaultParams: {
                vertical: !1,
                fixUpper: "none",
                fixLower: "none",
                natural: !1,
                leftBottom: !0,
                includeZero: !1,
                fixed: !0
              },
              optionalParams: {
                min: 0,
                max: 1,
                from: 0,
                to: 1,
                majorTickStep: 4,
                minorTickStep: 2,
                microTickStep: 1
              },
              constructor: function(e, i) {
                (this.opt = t.clone(this.defaultParams)),
                  n.updateWithObject(this.opt, i),
                  n.updateWithPattern(this.opt, i, this.optionalParams);
              },
              dependOnData: function() {
                return !("min" in this.opt && "max" in this.opt);
              },
              clear: function() {
                return (
                  delete this.scaler, delete this.ticks, (this.dirty = !0), this
                );
              },
              initialized: function() {
                return "scaler" in this && !(this.dirty && this.dependOnData());
              },
              setWindow: function(t, e) {
                return (this.scale = t), (this.offset = e), this.clear();
              },
              getWindowScale: function() {
                return "scale" in this ? this.scale : 1;
              },
              getWindowOffset: function() {
                return "offset" in this ? this.offset : 0;
              },
              calculate: function(t, e, i, n) {
                if (this.initialized()) return this;
                var a = this.opt;
                (this.labels = a.labels),
                  (this.scaler = (n || r).buildScaler(t, e, i, a));
                var s = this.scaler.bounds;
                return (
                  "scale" in this &&
                    ((a.from = s.lower + this.offset),
                    (a.to = (s.upper - s.lower) / this.scale + a.from),
                    !isFinite(a.from) ||
                    isNaN(a.from) ||
                    !isFinite(a.to) ||
                    isNaN(a.to) ||
                    a.to - a.from >= s.upper - s.lower
                      ? (delete a.from,
                        delete a.to,
                        delete this.scale,
                        delete this.offset)
                      : (a.from < s.lower
                          ? ((a.to += s.lower - a.from), (a.from = s.lower))
                          : a.to > s.upper &&
                            ((a.from += s.upper - a.to), (a.to = s.upper)),
                        (this.offset = a.from - s.lower)),
                    (this.scaler = (n || r).buildScaler(t, e, i, a)),
                    (s = this.scaler.bounds),
                    1 == this.scale &&
                      0 == this.offset &&
                      (delete this.scale, delete this.offset)),
                  this
                );
              },
              getScaler: function() {
                return this.scaler;
              },
              getTicks: function() {
                return this.ticks;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2143: function(t, e, i) {
      var r, n;
      (r = [i(12), i(2139)]),
        void 0 ===
          (n = function(t, e) {
            var i = t.getObject("dojox.charting.scaler.linear", !0),
              r = e.getNumericLabel;
            function n(t, e) {
              t = t.toLowerCase();
              for (var i = e.length - 1; i >= 0; --i) if (t === e[i]) return !0;
              return !1;
            }
            var a = function(e, r, a, s, o, h, l) {
              (a = t.delegate(a)),
                s ||
                  ("major" == a.fixUpper && (a.fixUpper = "minor"),
                  "major" == a.fixLower && (a.fixLower = "minor")),
                o ||
                  ("minor" == a.fixUpper && (a.fixUpper = "micro"),
                  "minor" == a.fixLower && (a.fixLower = "micro")),
                h ||
                  ("micro" == a.fixUpper && (a.fixUpper = "none"),
                  "micro" == a.fixLower && (a.fixLower = "none"));
              var c = n(a.fixLower, ["major"])
                  ? Math.floor(a.min / s) * s
                  : n(a.fixLower, ["minor"])
                    ? Math.floor(a.min / o) * o
                    : n(a.fixLower, ["micro"])
                      ? Math.floor(a.min / h) * h
                      : a.min,
                u = n(a.fixUpper, ["major"])
                  ? Math.ceil(a.max / s) * s
                  : n(a.fixUpper, ["minor"])
                    ? Math.ceil(a.max / o) * o
                    : n(a.fixUpper, ["micro"])
                      ? Math.ceil(a.max / h) * h
                      : a.max;
              a.useMin && (e = c), a.useMax && (r = u);
              var d =
                  !s || (a.useMin && n(a.fixLower, ["major"]))
                    ? e
                    : Math.ceil(e / s) * s,
                f =
                  !o || (a.useMin && n(a.fixLower, ["major", "minor"]))
                    ? e
                    : Math.ceil(e / o) * o,
                p =
                  !h || (a.useMin && n(a.fixLower, ["major", "minor", "micro"]))
                    ? e
                    : Math.ceil(e / h) * h,
                m = s
                  ? (a.useMax && n(a.fixUpper, ["major"])
                      ? Math.round((r - d) / s)
                      : Math.floor((r - d) / s)) + 1
                  : 0,
                x = o
                  ? (a.useMax && n(a.fixUpper, ["major", "minor"])
                      ? Math.round((r - f) / o)
                      : Math.floor((r - f) / o)) + 1
                  : 0,
                g = h
                  ? (a.useMax && n(a.fixUpper, ["major", "minor", "micro"])
                      ? Math.round((r - p) / h)
                      : Math.floor((r - p) / h)) + 1
                  : 0,
                v = o ? Math.round(s / o) : 0,
                y = h ? Math.round(o / h) : 0,
                b = s ? Math.floor(Math.log(s) / Math.LN10) : 0,
                _ = o ? Math.floor(Math.log(o) / Math.LN10) : 0,
                k = l / (r - e);
              return (
                isFinite(k) || (k = 1),
                {
                  bounds: {
                    lower: c,
                    upper: u,
                    from: e,
                    to: r,
                    scale: k,
                    span: l
                  },
                  major: { tick: s, start: d, count: m, prec: b },
                  minor: { tick: o, start: f, count: x, prec: _ },
                  micro: { tick: h, start: p, count: g, prec: 0 },
                  minorPerMajor: v,
                  microPerMinor: y,
                  scaler: i
                }
              );
            };
            return t.mixin(i, {
              buildScaler: function(t, e, i, r, n, s) {
                var o = { fixUpper: "none", fixLower: "none", natural: !1 };
                if (
                  (r &&
                    ("fixUpper" in r && (o.fixUpper = String(r.fixUpper)),
                    "fixLower" in r && (o.fixLower = String(r.fixLower)),
                    "natural" in r && (o.natural = Boolean(r.natural))),
                  (s = !s || s < 3 ? 3 : s),
                  "min" in r && (t = r.min),
                  "max" in r && (e = r.max),
                  r.includeZero && (t > 0 && (t = 0), e < 0 && (e = 0)),
                  (o.min = t),
                  (o.useMin = !0),
                  (o.max = e),
                  (o.useMax = !0),
                  "from" in r && ((t = r.from), (o.useMin = !1)),
                  "to" in r && ((e = r.to), (o.useMax = !1)),
                  e <= t)
                )
                  return a(t, e, o, 0, 0, 0, i);
                n || (n = e - t);
                var h,
                  l = Math.floor(Math.log(n) / Math.LN10),
                  c =
                    r && "majorTickStep" in r
                      ? r.majorTickStep
                      : Math.pow(10, l),
                  u = 0,
                  d = 0;
                if (r && "minorTickStep" in r) u = r.minorTickStep;
                else
                  do {
                    if (
                      ((u = c / 10),
                      (!o.natural || u > 0.9) &&
                        (h = a(t, e, o, c, u, 0, i)).bounds.scale *
                          h.minor.tick >
                          s)
                    )
                      break;
                    if (
                      ((u = c / 5),
                      (!o.natural || u > 0.9) &&
                        (h = a(t, e, o, c, u, 0, i)).bounds.scale *
                          h.minor.tick >
                          s)
                    )
                      break;
                    if (
                      ((u = c / 2),
                      (!o.natural || u > 0.9) &&
                        (h = a(t, e, o, c, u, 0, i)).bounds.scale *
                          h.minor.tick >
                          s)
                    )
                      break;
                    return a(t, e, o, c, 0, 0, i);
                  } while (0);
                if (r && "microTickStep" in r)
                  (d = r.microTickStep), (h = a(t, e, o, c, u, d, i));
                else
                  do {
                    if (
                      ((d = u / 10),
                      (!o.natural || d > 0.9) &&
                        (h = a(t, e, o, c, u, d, i)).bounds.scale *
                          h.micro.tick >
                          3)
                    )
                      break;
                    if (
                      ((d = u / 5),
                      (!o.natural || d > 0.9) &&
                        (h = a(t, e, o, c, u, d, i)).bounds.scale *
                          h.micro.tick >
                          3)
                    )
                      break;
                    if (
                      ((d = u / 2),
                      (!o.natural || d > 0.9) &&
                        (h = a(t, e, o, c, u, d, i)).bounds.scale *
                          h.micro.tick >
                          3)
                    )
                      break;
                    d = 0;
                  } while (0);
                return d ? h : a(t, e, o, c, u, 0, i);
              },
              buildTicks: function(t, e) {
                var i,
                  n,
                  a,
                  s = t.major.start,
                  o = t.minor.start,
                  h = t.micro.start;
                if (e.microTicks && t.micro.tick) (i = t.micro.tick), (n = h);
                else if (e.minorTicks && t.minor.tick)
                  (i = t.minor.tick), (n = o);
                else {
                  if (!t.major.tick) return null;
                  (i = t.major.tick), (n = s);
                }
                var l = 1 / t.bounds.scale;
                if (
                  t.bounds.to <= t.bounds.from ||
                  isNaN(l) ||
                  !isFinite(l) ||
                  i <= 0 ||
                  isNaN(i) ||
                  !isFinite(i)
                )
                  return null;
                for (var c = [], u = [], d = []; n <= t.bounds.to + l; )
                  Math.abs(s - n) < i / 2
                    ? ((a = { value: s }),
                      e.majorLabels && (a.label = r(s, t.major.prec, e)),
                      c.push(a),
                      (s += t.major.tick),
                      (o += t.minor.tick),
                      (h += t.micro.tick))
                    : Math.abs(o - n) < i / 2
                      ? (e.minorTicks &&
                          ((a = { value: o }),
                          e.minorLabels &&
                            t.minMinorStep <= t.minor.tick * t.bounds.scale &&
                            (a.label = r(o, t.minor.prec, e)),
                          u.push(a)),
                        (o += t.minor.tick),
                        (h += t.micro.tick))
                      : (e.microTicks && d.push({ value: h }),
                        (h += t.micro.tick)),
                    (n += i);
                return { major: c, minor: u, micro: d };
              },
              getTransformerFromModel: function(t) {
                var e = t.bounds.from,
                  i = t.bounds.scale;
                return function(t) {
                  return (t - e) * i;
                };
              },
              getTransformerFromPlot: function(t) {
                var e = t.bounds.from,
                  i = t.bounds.scale;
                return function(t) {
                  return t / i + e;
                };
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2144: function(t, e, i) {
      var r, n;
      (r = [i(12)]),
        void 0 ===
          (n = function(t) {
            var e = {
              linear: function(t) {
                return t;
              },
              quadIn: function(t) {
                return Math.pow(t, 2);
              },
              quadOut: function(t) {
                return t * (t - 2) * -1;
              },
              quadInOut: function(t) {
                return (t *= 2) < 1
                  ? Math.pow(t, 2) / 2
                  : (-1 * (--t * (t - 2) - 1)) / 2;
              },
              cubicIn: function(t) {
                return Math.pow(t, 3);
              },
              cubicOut: function(t) {
                return Math.pow(t - 1, 3) + 1;
              },
              cubicInOut: function(t) {
                return (t *= 2) < 1
                  ? Math.pow(t, 3) / 2
                  : ((t -= 2), (Math.pow(t, 3) + 2) / 2);
              },
              quartIn: function(t) {
                return Math.pow(t, 4);
              },
              quartOut: function(t) {
                return -1 * (Math.pow(t - 1, 4) - 1);
              },
              quartInOut: function(t) {
                return (t *= 2) < 1
                  ? Math.pow(t, 4) / 2
                  : ((t -= 2), -0.5 * (Math.pow(t, 4) - 2));
              },
              quintIn: function(t) {
                return Math.pow(t, 5);
              },
              quintOut: function(t) {
                return Math.pow(t - 1, 5) + 1;
              },
              quintInOut: function(t) {
                return (t *= 2) < 1
                  ? Math.pow(t, 5) / 2
                  : ((t -= 2), (Math.pow(t, 5) + 2) / 2);
              },
              sineIn: function(t) {
                return -1 * Math.cos(t * (Math.PI / 2)) + 1;
              },
              sineOut: function(t) {
                return Math.sin(t * (Math.PI / 2));
              },
              sineInOut: function(t) {
                return (-1 * (Math.cos(Math.PI * t) - 1)) / 2;
              },
              expoIn: function(t) {
                return 0 == t ? 0 : Math.pow(2, 10 * (t - 1));
              },
              expoOut: function(t) {
                return 1 == t ? 1 : -1 * Math.pow(2, -10 * t) + 1;
              },
              expoInOut: function(t) {
                return 0 == t
                  ? 0
                  : 1 == t
                    ? 1
                    : (t *= 2) < 1
                      ? Math.pow(2, 10 * (t - 1)) / 2
                      : (--t, (-1 * Math.pow(2, -10 * t) + 2) / 2);
              },
              circIn: function(t) {
                return -1 * (Math.sqrt(1 - Math.pow(t, 2)) - 1);
              },
              circOut: function(t) {
                return (t -= 1), Math.sqrt(1 - Math.pow(t, 2));
              },
              circInOut: function(t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - Math.pow(t, 2)) - 1)
                  : ((t -= 2), 0.5 * (Math.sqrt(1 - Math.pow(t, 2)) + 1));
              },
              backIn: function(t) {
                var e = 1.70158;
                return Math.pow(t, 2) * ((e + 1) * t - e);
              },
              backOut: function(t) {
                t -= 1;
                var e = 1.70158;
                return Math.pow(t, 2) * ((e + 1) * t + e) + 1;
              },
              backInOut: function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1
                  ? (Math.pow(t, 2) * ((e + 1) * t - e)) / 2
                  : ((t -= 2), (Math.pow(t, 2) * ((e + 1) * t + e) + 2) / 2);
              },
              elasticIn: function(t) {
                if (0 == t || 1 == t) return t;
                return (
                  (t -= 1),
                  -1 *
                    Math.pow(2, 10 * t) *
                    Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3)
                );
              },
              elasticOut: function(t) {
                if (0 == t || 1 == t) return t;
                return (
                  Math.pow(2, -10 * t) *
                    Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) +
                  1
                );
              },
              elasticInOut: function(t) {
                if (0 == t) return 0;
                if (2 == (t *= 2)) return 1;
                var e = 0.3 * 1.5,
                  i = e / 4;
                return t < 1
                  ? ((t -= 1),
                    Math.pow(2, 10 * t) *
                      Math.sin(((t - i) * (2 * Math.PI)) / e) *
                      -0.5)
                  : ((t -= 1),
                    Math.pow(2, -10 * t) *
                      Math.sin(((t - i) * (2 * Math.PI)) / e) *
                      0.5 +
                      1);
              },
              bounceIn: function(t) {
                return 1 - e.bounceOut(1 - t);
              },
              bounceOut: function(t) {
                var e,
                  i = 7.5625,
                  r = 2.75;
                return (
                  t < 1 / r
                    ? (e = i * Math.pow(t, 2))
                    : t < 2 / r
                      ? ((t -= 1.5 / r), (e = i * Math.pow(t, 2) + 0.75))
                      : t < 2.5 / r
                        ? ((t -= 2.25 / r), (e = i * Math.pow(t, 2) + 0.9375))
                        : ((t -= 2.625 / r),
                          (e = i * Math.pow(t, 2) + 0.984375)),
                  e
                );
              },
              bounceInOut: function(t) {
                return t < 0.5
                  ? e.bounceIn(2 * t) / 2
                  : e.bounceOut(2 * t - 1) / 2 + 0.5;
              }
            };
            return t.setObject("dojo.fx.easing", e), e;
          }.apply(null, r)) || (t.exports = n);
    },
    2244: function(t, e, i) {
      var r, n;
      (r = [i(28), i(2106)]),
        void 0 ===
          (n = function(t, e) {
            return t("dojox.charting.plot2d.StackedAreas", e, {
              constructor: function() {
                (this.opt.lines = !0), (this.opt.areas = !0);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2245: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(221),
        i(42),
        i(30),
        i(28),
        i(25),
        i(62),
        i(78),
        i(182),
        i(69),
        i(419),
        i(799)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c, u) {
            var d = (l.svg = {});
            d.useSvgWeb = void 0 !== window.svgweb;
            var f = navigator.userAgent,
              p = e("ios"),
              m = e("android"),
              x = e("chrome") || (m && m >= 4) ? "auto" : "optimizeLegibility";
            function g(t, e) {
              return i.doc.createElementNS
                ? i.doc.createElementNS(t, e)
                : i.doc.createElement(e);
            }
            function v(t, e, i, r) {
              return t.setAttributeNS
                ? t.setAttributeNS(e, i, r)
                : t.setAttribute(i, r);
            }
            function y(t) {
              return d.useSvgWeb
                ? i.doc.createTextNode(t, !0)
                : i.doc.createTextNode(t);
            }
            (d.xmlns = {
              xlink: "http://www.w3.org/1999/xlink",
              svg: "http://www.w3.org/2000/svg"
            }),
              (d.getRef = function(t) {
                return t && "none" != t
                  ? t.match(/^url\(#.+\)$/)
                    ? r.byId(t.slice(5, -1))
                    : t.match(/^#dojoUnique\d+$/)
                      ? r.byId(t.slice(1))
                      : null
                  : null;
              }),
              (d.dasharray = {
                solid: "none",
                shortdash: [4, 1],
                shortdot: [1, 1],
                shortdashdot: [4, 1, 1, 1],
                shortdashdotdot: [4, 1, 1, 1, 1, 1],
                dot: [1, 3],
                dash: [4, 3],
                longdash: [8, 3],
                dashdot: [4, 3, 1, 3],
                longdashdot: [8, 3, 1, 3],
                longdashdotdot: [8, 3, 1, 3, 1, 3]
              });
            var b = 0;
            (d.Shape = n("dojox.gfx.svg.Shape", c.Shape, {
              destroy: function() {
                if (this.fillStyle && "type" in this.fillStyle) {
                  var t = this.rawNode.getAttribute("fill"),
                    e = d.getRef(t);
                  e && e.parentNode.removeChild(e);
                }
                if (this.clip) {
                  var i = this.rawNode.getAttribute("clip-path");
                  if (i) {
                    var n = r.byId(i.match(/gfx_clip[\d]+/)[0]);
                    n && n.parentNode.removeChild(n);
                  }
                }
                c.Shape.prototype.destroy.apply(this, arguments);
              },
              setFill: function(t) {
                if (!t)
                  return (
                    (this.fillStyle = null),
                    this.rawNode.setAttribute("fill", "none"),
                    this.rawNode.setAttribute("fill-opacity", 0),
                    this
                  );
                var e,
                  i = function(t) {
                    this.setAttribute(t, e[t].toFixed(8));
                  };
                if ("object" == typeof t && "type" in t) {
                  switch (t.type) {
                    case "linear":
                      e = l.makeParameters(l.defaultLinearGradient, t);
                      var r = this._setFillObject(e, "linearGradient");
                      a.forEach(["x1", "y1", "x2", "y2"], i, r);
                      break;
                    case "radial":
                      e = l.makeParameters(l.defaultRadialGradient, t);
                      var n = this._setFillObject(e, "radialGradient");
                      a.forEach(["cx", "cy", "r"], i, n);
                      break;
                    case "pattern":
                      e = l.makeParameters(l.defaultPattern, t);
                      var s = this._setFillObject(e, "pattern");
                      a.forEach(["x", "y", "width", "height"], i, s);
                  }
                  return (this.fillStyle = e), this;
                }
                return (
                  (e = l.normalizeColor(t)),
                  (this.fillStyle = e),
                  this.rawNode.setAttribute("fill", e.toCss()),
                  this.rawNode.setAttribute("fill-opacity", e.a),
                  this.rawNode.setAttribute("fill-rule", "evenodd"),
                  this
                );
              },
              setStroke: function(e) {
                var i = this.rawNode;
                if (!e)
                  return (
                    (this.strokeStyle = null),
                    i.setAttribute("stroke", "none"),
                    i.setAttribute("stroke-opacity", 0),
                    this
                  );
                ("string" == typeof e || t.isArray(e) || e instanceof h) &&
                  (e = { color: e });
                var r = (this.strokeStyle = l.makeParameters(
                  l.defaultStroke,
                  e
                ));
                if (((r.color = l.normalizeColor(r.color)), r)) {
                  var n = r.width < 0 ? 0 : r.width;
                  i.setAttribute("stroke", r.color.toCss()),
                    i.setAttribute("stroke-opacity", r.color.a),
                    i.setAttribute("stroke-width", n),
                    i.setAttribute("stroke-linecap", r.cap),
                    "number" == typeof r.join
                      ? (i.setAttribute("stroke-linejoin", "miter"),
                        i.setAttribute("stroke-miterlimit", r.join))
                      : i.setAttribute("stroke-linejoin", r.join);
                  var a = r.style.toLowerCase();
                  if (
                    (a in d.dasharray && (a = d.dasharray[a]),
                    a instanceof Array)
                  ) {
                    var s;
                    for (a = t._toArray(a), s = 0; s < a.length; ++s) a[s] *= n;
                    if ("butt" != r.cap) {
                      for (s = 0; s < a.length; s += 2)
                        (a[s] -= n), a[s] < 1 && (a[s] = 1);
                      for (s = 1; s < a.length; s += 2) a[s] += n;
                    }
                    a = a.join(",");
                  }
                  i.setAttribute("stroke-dasharray", a),
                    i.setAttribute("dojoGfxStrokeStyle", r.style);
                }
                return this;
              },
              _getParentSurface: function() {
                for (
                  var t = this.parent;
                  t && !(t instanceof l.Surface);
                  t = t.parent
                );
                return t;
              },
              _setFillObject: function(t, e) {
                var i = d.xmlns.svg;
                this.fillStyle = t;
                var r = this._getParentSurface().defNode,
                  n = this.rawNode.getAttribute("fill"),
                  a = d.getRef(n);
                if (a)
                  if ((n = a).tagName.toLowerCase() != e.toLowerCase()) {
                    var s = n.id;
                    n.parentNode.removeChild(n),
                      (n = g(i, e)).setAttribute("id", s),
                      r.appendChild(n);
                  } else
                    for (; n.childNodes.length; ) n.removeChild(n.lastChild);
                else
                  (n = g(i, e)).setAttribute("id", l._base._getUniqueId()),
                    r.appendChild(n);
                if ("pattern" == e) {
                  n.setAttribute("patternUnits", "userSpaceOnUse");
                  var o = g(i, "image");
                  o.setAttribute("x", 0),
                    o.setAttribute("y", 0),
                    o.setAttribute(
                      "width",
                      (t.width < 0 ? 0 : t.width).toFixed(8)
                    ),
                    o.setAttribute(
                      "height",
                      (t.height < 0 ? 0 : t.height).toFixed(8)
                    ),
                    v(o, d.xmlns.xlink, "xlink:href", t.src),
                    n.appendChild(o);
                } else {
                  n.setAttribute("gradientUnits", "userSpaceOnUse");
                  for (var h = 0; h < t.colors.length; ++h) {
                    var c = t.colors[h],
                      u = g(i, "stop"),
                      f = (c.color = l.normalizeColor(c.color));
                    u.setAttribute("offset", c.offset.toFixed(8)),
                      u.setAttribute("stop-color", f.toCss()),
                      u.setAttribute("stop-opacity", f.a),
                      n.appendChild(u);
                  }
                }
                return (
                  this.rawNode.setAttribute(
                    "fill",
                    "url(#" + n.getAttribute("id") + ")"
                  ),
                  this.rawNode.removeAttribute("fill-opacity"),
                  this.rawNode.setAttribute("fill-rule", "evenodd"),
                  n
                );
              },
              _applyTransform: function() {
                if (this.matrix) {
                  var t = this.matrix;
                  this.rawNode.setAttribute(
                    "transform",
                    "matrix(" +
                      t.xx.toFixed(8) +
                      "," +
                      t.yx.toFixed(8) +
                      "," +
                      t.xy.toFixed(8) +
                      "," +
                      t.yy.toFixed(8) +
                      "," +
                      t.dx.toFixed(8) +
                      "," +
                      t.dy.toFixed(8) +
                      ")"
                  );
                } else this.rawNode.removeAttribute("transform");
                return this;
              },
              setRawNode: function(t) {
                var e = (this.rawNode = t);
                "image" != this.shape.type && e.setAttribute("fill", "none"),
                  e.setAttribute("fill-opacity", 0),
                  e.setAttribute("stroke", "none"),
                  e.setAttribute("stroke-opacity", 0),
                  e.setAttribute("stroke-width", 1),
                  e.setAttribute("stroke-linecap", "butt"),
                  e.setAttribute("stroke-linejoin", "miter"),
                  e.setAttribute("stroke-miterlimit", 4),
                  (e.__gfxObject__ = this);
              },
              setShape: function(t) {
                for (var e in ((this.shape = l.makeParameters(this.shape, t)),
                this.shape))
                  if ("type" != e) {
                    var i = this.shape[e];
                    ("width" !== e && "height" !== e) || (i = i < 0 ? 0 : i),
                      this.rawNode.setAttribute(e, i);
                  }
                return (this.bbox = null), this;
              },
              _moveToFront: function() {
                return this.rawNode.parentNode.appendChild(this.rawNode), this;
              },
              _moveToBack: function() {
                return (
                  this.rawNode.parentNode.insertBefore(
                    this.rawNode,
                    this.rawNode.parentNode.firstChild
                  ),
                  this
                );
              },
              setClip: function(e) {
                this.inherited(arguments);
                var i = e
                  ? "width" in e
                    ? "rect"
                    : "cx" in e
                      ? "ellipse"
                      : "points" in e
                        ? "polyline"
                        : "d" in e
                          ? "path"
                          : null
                  : null;
                if (e && !i) return this;
                "polyline" === i &&
                  ((e = t.clone(e)).points = e.points.join(","));
                var n,
                  a,
                  s = o.get(this.rawNode, "clip-path");
                if (
                  (s &&
                    (n = r.byId(s.match(/gfx_clip[\d]+/)[0])) &&
                    n.removeChild(n.childNodes[0]),
                  e)
                ) {
                  if (n) (a = g(d.xmlns.svg, i)), n.appendChild(a);
                  else {
                    var h = "gfx_clip" + ++b,
                      l = "url(#" + h + ")";
                    this.rawNode.setAttribute("clip-path", l),
                      (n = g(d.xmlns.svg, "clipPath")),
                      (a = g(d.xmlns.svg, i)),
                      n.appendChild(a),
                      this.rawNode.parentNode.insertBefore(n, this.rawNode),
                      o.set(n, "id", h);
                  }
                  o.set(a, e);
                } else
                  this.rawNode.removeAttribute("clip-path"),
                    n && n.parentNode.removeChild(n);
                return this;
              },
              _removeClipNode: function() {
                var t,
                  e = o.get(this.rawNode, "clip-path");
                return (
                  e &&
                    (t = r.byId(e.match(/gfx_clip[\d]+/)[0])) &&
                    t.parentNode.removeChild(t),
                  t
                );
              }
            })),
              (d.Group = n("dojox.gfx.svg.Group", d.Shape, {
                constructor: function() {
                  c.Container._init.call(this);
                },
                setRawNode: function(t) {
                  (this.rawNode = t), (this.rawNode.__gfxObject__ = this);
                },
                destroy: function() {
                  this.clear(!0),
                    d.Shape.prototype.destroy.apply(this, arguments);
                }
              })),
              (d.Group.nodeType = "g"),
              (d.Rect = n("dojox.gfx.svg.Rect", [d.Shape, c.Rect], {
                setShape: function(t) {
                  for (var e in ((this.shape = l.makeParameters(this.shape, t)),
                  (this.bbox = null),
                  this.shape))
                    if ("type" != e && "r" != e) {
                      var i = this.shape[e];
                      ("width" !== e && "height" !== e) || (i = i < 0 ? 0 : i),
                        this.rawNode.setAttribute(e, i);
                    }
                  return (
                    null != this.shape.r &&
                      (this.rawNode.setAttribute("ry", this.shape.r),
                      this.rawNode.setAttribute("rx", this.shape.r)),
                    this
                  );
                }
              })),
              (d.Rect.nodeType = "rect"),
              (d.Ellipse = n(
                "dojox.gfx.svg.Ellipse",
                [d.Shape, c.Ellipse],
                {}
              )),
              (d.Ellipse.nodeType = "ellipse"),
              (d.Circle = n("dojox.gfx.svg.Circle", [d.Shape, c.Circle], {})),
              (d.Circle.nodeType = "circle"),
              (d.Line = n("dojox.gfx.svg.Line", [d.Shape, c.Line], {})),
              (d.Line.nodeType = "line"),
              (d.Polyline = n("dojox.gfx.svg.Polyline", [d.Shape, c.Polyline], {
                setShape: function(t, e) {
                  t && t instanceof Array
                    ? ((this.shape = l.makeParameters(this.shape, {
                        points: t
                      })),
                      e &&
                        this.shape.points.length &&
                        this.shape.points.push(this.shape.points[0]))
                    : (this.shape = l.makeParameters(this.shape, t)),
                    (this.bbox = null),
                    this._normalizePoints();
                  for (
                    var i = [], r = this.shape.points, n = 0;
                    n < r.length;
                    ++n
                  )
                    i.push(r[n].x.toFixed(8), r[n].y.toFixed(8));
                  return this.rawNode.setAttribute("points", i.join(" ")), this;
                }
              })),
              (d.Polyline.nodeType = "polyline"),
              (d.Image = n("dojox.gfx.svg.Image", [d.Shape, c.Image], {
                setShape: function(t) {
                  (this.shape = l.makeParameters(this.shape, t)),
                    (this.bbox = null);
                  var e = this.rawNode;
                  for (var i in this.shape)
                    if ("type" != i && "src" != i) {
                      var r = this.shape[i];
                      ("width" !== i && "height" !== i) || (r = r < 0 ? 0 : r),
                        e.setAttribute(i, r);
                    }
                  return (
                    e.setAttribute("preserveAspectRatio", "none"),
                    v(e, d.xmlns.xlink, "xlink:href", this.shape.src),
                    (e.__gfxObject__ = this),
                    this
                  );
                }
              })),
              (d.Image.nodeType = "image"),
              (d.Text = n("dojox.gfx.svg.Text", [d.Shape, c.Text], {
                setShape: function(t) {
                  (this.shape = l.makeParameters(this.shape, t)),
                    (this.bbox = null);
                  var e = this.rawNode,
                    i = this.shape;
                  return (
                    e.setAttribute("x", i.x),
                    e.setAttribute("y", i.y),
                    e.setAttribute("text-anchor", i.align),
                    e.setAttribute("text-decoration", i.decoration),
                    e.setAttribute("rotate", i.rotated ? 90 : 0),
                    e.setAttribute("kerning", i.kerning ? "auto" : 0),
                    e.setAttribute("text-rendering", x),
                    e.firstChild
                      ? (e.firstChild.nodeValue = i.text)
                      : e.appendChild(y(i.text)),
                    this
                  );
                },
                getTextWidth: function() {
                  var t = this.rawNode,
                    e = t.parentNode,
                    i = t.cloneNode(!0);
                  i.style.visibility = "hidden";
                  var r = 0,
                    n = i.firstChild.nodeValue;
                  if ((e.appendChild(i), "" != n))
                    for (; !r; )
                      r = i.getBBox ? parseInt(i.getBBox().width) : 68;
                  return e.removeChild(i), r;
                },
                getBoundingBox: function() {
                  var t = null;
                  if (this.getShape().text)
                    try {
                      t = this.rawNode.getBBox();
                    } catch (e) {
                      t = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  return t;
                }
              })),
              (d.Text.nodeType = "text"),
              (d.Path = n("dojox.gfx.svg.Path", [d.Shape, u.Path], {
                _updateWithSegment: function(t) {
                  this.inherited(arguments),
                    "string" == typeof this.shape.path &&
                      this.rawNode.setAttribute("d", this.shape.path);
                },
                setShape: function(t) {
                  return (
                    this.inherited(arguments),
                    this.shape.path
                      ? this.rawNode.setAttribute("d", this.shape.path)
                      : this.rawNode.removeAttribute("d"),
                    this
                  );
                }
              })),
              (d.Path.nodeType = "path"),
              (d.TextPath = n("dojox.gfx.svg.TextPath", [d.Shape, u.TextPath], {
                _updateWithSegment: function(t) {
                  this.inherited(arguments), this._setTextPath();
                },
                setShape: function(t) {
                  return this.inherited(arguments), this._setTextPath(), this;
                },
                _setTextPath: function() {
                  if ("string" == typeof this.shape.path) {
                    var t = this.rawNode;
                    if (!t.firstChild) {
                      var e = g(d.xmlns.svg, "textPath"),
                        i = y("");
                      e.appendChild(i), t.appendChild(e);
                    }
                    var r = t.firstChild.getAttributeNS(d.xmlns.xlink, "href"),
                      n = r && d.getRef(r);
                    if (!n) {
                      var a = this._getParentSurface();
                      if (a) {
                        var s = a.defNode;
                        n = g(d.xmlns.svg, "path");
                        var o = l._base._getUniqueId();
                        n.setAttribute("id", o),
                          s.appendChild(n),
                          v(t.firstChild, d.xmlns.xlink, "xlink:href", "#" + o);
                      }
                    }
                    n && n.setAttribute("d", this.shape.path);
                  }
                },
                _setText: function() {
                  var t = this.rawNode;
                  if (!t.firstChild) {
                    var e = g(d.xmlns.svg, "textPath"),
                      i = y("");
                    e.appendChild(i), t.appendChild(e);
                  }
                  t = t.firstChild;
                  var r = this.text;
                  switch (
                    (t.setAttribute("alignment-baseline", "middle"), r.align)
                  ) {
                    case "middle":
                      t.setAttribute("text-anchor", "middle"),
                        t.setAttribute("startOffset", "50%");
                      break;
                    case "end":
                      t.setAttribute("text-anchor", "end"),
                        t.setAttribute("startOffset", "100%");
                      break;
                    default:
                      t.setAttribute("text-anchor", "start"),
                        t.setAttribute("startOffset", "0%");
                  }
                  t.setAttribute("baseline-shift", "0.5ex"),
                    t.setAttribute("text-decoration", r.decoration),
                    t.setAttribute("rotate", r.rotated ? 90 : 0),
                    t.setAttribute("kerning", r.kerning ? "auto" : 0),
                    (t.firstChild.data = r.text);
                }
              })),
              (d.TextPath.nodeType = "text");
            var _ =
              (function() {
                var t = /WebKit\/(\d*)/.exec(f);
                return t ? t[1] : 0;
              })() > 534;
            (d.Surface = n("dojox.gfx.svg.Surface", c.Surface, {
              constructor: function() {
                c.Container._init.call(this);
              },
              destroy: function() {
                c.Container.clear.call(this, !0),
                  (this.defNode = null),
                  this.inherited(arguments);
              },
              setDimensions: function(t, e) {
                if (!this.rawNode) return this;
                var i = t < 0 ? 0 : t,
                  r = e < 0 ? 0 : e;
                return (
                  this.rawNode.setAttribute("width", i),
                  this.rawNode.setAttribute("height", r),
                  _ &&
                    ((this.rawNode.style.width = i),
                    (this.rawNode.style.height = r)),
                  this
                );
              },
              getDimensions: function() {
                return this.rawNode
                  ? {
                      width: l.normalizedLength(
                        this.rawNode.getAttribute("width")
                      ),
                      height: l.normalizedLength(
                        this.rawNode.getAttribute("height")
                      )
                    }
                  : null;
              }
            })),
              (d.createSurface = function(t, e, i) {
                var n = new d.Surface();
                (n.rawNode = g(d.xmlns.svg, "svg")),
                  n.rawNode.setAttribute("overflow", "hidden"),
                  e && n.rawNode.setAttribute("width", e < 0 ? 0 : e),
                  i && n.rawNode.setAttribute("height", i < 0 ? 0 : i);
                var a = g(d.xmlns.svg, "defs");
                return (
                  n.rawNode.appendChild(a),
                  (n.defNode = a),
                  (n._parent = r.byId(t)),
                  n._parent.appendChild(n.rawNode),
                  l._base._fixMsTouchAction(n),
                  n
                );
              });
            var k = {
                _setFont: function() {
                  var t = this.fontStyle;
                  this.rawNode.setAttribute("font-style", t.style),
                    this.rawNode.setAttribute("font-variant", t.variant),
                    this.rawNode.setAttribute("font-weight", t.weight),
                    this.rawNode.setAttribute("font-size", t.size),
                    this.rawNode.setAttribute("font-family", t.family);
                }
              },
              w = c.Container,
              S = (d.Container = {
                openBatch: function() {
                  return (
                    this._batch ||
                      (this.fragment = d.useSvgWeb
                        ? i.doc.createDocumentFragment(!0)
                        : i.doc.createDocumentFragment()),
                    ++this._batch,
                    this
                  );
                },
                closeBatch: function() {
                  return (
                    (this._batch = this._batch > 0 ? --this._batch : 0),
                    this.fragment &&
                      !this._batch &&
                      (this.rawNode.appendChild(this.fragment),
                      delete this.fragment),
                    this
                  );
                },
                add: function(t) {
                  return (
                    this != t.getParent() &&
                      (this.fragment
                        ? this.fragment.appendChild(t.rawNode)
                        : this.rawNode.appendChild(t.rawNode),
                      w.add.apply(this, arguments),
                      t.setClip(t.clip)),
                    this
                  );
                },
                remove: function(t, e) {
                  return (
                    this == t.getParent() &&
                      (this.rawNode == t.rawNode.parentNode &&
                        this.rawNode.removeChild(t.rawNode),
                      this.fragment &&
                        this.fragment == t.rawNode.parentNode &&
                        this.fragment.removeChild(t.rawNode),
                      t._removeClipNode(),
                      w.remove.apply(this, arguments)),
                    this
                  );
                },
                clear: function() {
                  for (var t = this.rawNode; t.lastChild; )
                    t.removeChild(t.lastChild);
                  var e = this.defNode;
                  if (e) {
                    for (; e.lastChild; ) e.removeChild(e.lastChild);
                    t.appendChild(e);
                  }
                  return w.clear.apply(this, arguments);
                },
                getBoundingBox: w.getBoundingBox,
                _moveChildToFront: w._moveChildToFront,
                _moveChildToBack: w._moveChildToBack
              }),
              M = (d.Creator = {
                createObject: function(t, e) {
                  if (!this.rawNode) return null;
                  var i = new t(),
                    r = g(d.xmlns.svg, t.nodeType);
                  return i.setRawNode(r), i.setShape(e), this.add(i), i;
                }
              });
            if (
              (t.extend(d.Text, k),
              t.extend(d.TextPath, k),
              t.extend(d.Group, S),
              t.extend(d.Group, c.Creator),
              t.extend(d.Group, M),
              t.extend(d.Surface, S),
              t.extend(d.Surface, c.Creator),
              t.extend(d.Surface, M),
              (d.fixTarget = function(t, e) {
                return (
                  t.gfxTarget ||
                    (p && t.target.wholeText
                      ? (t.gfxTarget = t.target.parentElement.__gfxObject__)
                      : (t.gfxTarget = t.target.__gfxObject__)),
                  !0
                );
              }),
              d.useSvgWeb)
            ) {
              (d.createSurface = function(t, e, i) {
                var n = new d.Surface();
                if (((e = e < 0 ? 0 : e), (i = i < 0 ? 0 : i), !e || !i)) {
                  var a = s.position(t);
                  (e = e || a.w), (i = i || a.h);
                }
                var o = (t = r.byId(t)).id
                    ? t.id + "_svgweb"
                    : l._base._getUniqueId(),
                  h = g(d.xmlns.svg, "svg");
                return (
                  (h.id = o),
                  h.setAttribute("width", e),
                  h.setAttribute("height", i),
                  svgweb.appendChild(h, t),
                  h.addEventListener(
                    "SVGLoad",
                    function() {
                      (n.rawNode = this), (n.isLoaded = !0);
                      var t = g(d.xmlns.svg, "defs");
                      n.rawNode.appendChild(t),
                        (n.defNode = t),
                        n.onLoad && n.onLoad(n);
                    },
                    !1
                  ),
                  (n.isLoaded = !1),
                  n
                );
              }),
                d.Surface.extend({
                  destroy: function() {
                    var t = this.rawNode;
                    svgweb.removeChild(t, t.parentNode);
                  }
                });
              var P = {
                connect: function(e, i, r) {
                  return (
                    "on" === e.substring(0, 2) && (e = e.substring(2)),
                    (r = 2 == arguments.length ? i : t.hitch(i, r)),
                    this.getEventSource().addEventListener(e, r, !1),
                    [this, e, r]
                  );
                },
                disconnect: function(t) {
                  this.getEventSource().removeEventListener(t[1], t[2], !1),
                    delete t[0];
                }
              };
              t.extend(d.Shape, P), t.extend(d.Surface, P);
            }
            return d;
          }.apply(null, r)) || (t.exports = n);
    },
    2246: function(t, e, i) {
      var r, n;
      (r = [i(16), i(12), i(25), i(2056)]),
        void 0 ===
          (n = function(t, e, i, r) {
            var n = {};
            return (
              e.mixin(r, {
                filter: function(i, a, s) {
                  "string" == typeof i && (i = i.split("")),
                    (s = s || t.global),
                    (a = r.lambda(a));
                  var o,
                    h,
                    l,
                    c = [];
                  if (e.isArray(i))
                    for (h = 0, l = i.length; h < l; ++h)
                      (o = i[h]), a.call(s, o, h, i) && c.push(o);
                  else if (
                    "function" == typeof i.hasNext &&
                    "function" == typeof i.next
                  )
                    for (h = 0; i.hasNext(); )
                      (o = i.next()), a.call(s, o, h++, i) && c.push(o);
                  else
                    for (h in i)
                      h in n || ((o = i[h]), a.call(s, o, h, i) && c.push(o));
                  return c;
                },
                forEach: function(i, a, s) {
                  var o, h;
                  if (
                    ("string" == typeof i && (i = i.split("")),
                    (s = s || t.global),
                    (a = r.lambda(a)),
                    e.isArray(i))
                  )
                    for (
                      o = 0, h = i.length;
                      o < h;
                      a.call(s, i[o], o, i), ++o
                    );
                  else if (
                    "function" == typeof i.hasNext &&
                    "function" == typeof i.next
                  )
                    for (o = 0; i.hasNext(); a.call(s, i.next(), o++, i));
                  else for (o in i) o in n || a.call(s, i[o], o, i);
                  return s;
                },
                map: function(i, a, s) {
                  var o, h, l;
                  if (
                    ("string" == typeof i && (i = i.split("")),
                    (s = s || t.global),
                    (a = r.lambda(a)),
                    e.isArray(i))
                  )
                    for (
                      o = new Array((h = i.length)), l = 0;
                      l < h;
                      o[l] = a.call(s, i[l], l, i), ++l
                    );
                  else if (
                    "function" == typeof i.hasNext &&
                    "function" == typeof i.next
                  )
                    for (
                      o = [], l = 0;
                      i.hasNext();
                      o.push(a.call(s, i.next(), l++, i))
                    );
                  else
                    for (l in ((o = []), i))
                      l in n || o.push(a.call(s, i[l], l, i));
                  return o;
                },
                every: function(i, a, s) {
                  var o, h;
                  if (
                    ("string" == typeof i && (i = i.split("")),
                    (s = s || t.global),
                    (a = r.lambda(a)),
                    e.isArray(i))
                  ) {
                    for (o = 0, h = i.length; o < h; ++o)
                      if (!a.call(s, i[o], o, i)) return !1;
                  } else if (
                    "function" == typeof i.hasNext &&
                    "function" == typeof i.next
                  ) {
                    for (o = 0; i.hasNext(); )
                      if (!a.call(s, i.next(), o++, i)) return !1;
                  } else
                    for (o in i)
                      if (!(o in n || a.call(s, i[o], o, i))) return !1;
                  return !0;
                },
                some: function(i, a, s) {
                  var o, h;
                  if (
                    ("string" == typeof i && (i = i.split("")),
                    (s = s || t.global),
                    (a = r.lambda(a)),
                    e.isArray(i))
                  ) {
                    for (o = 0, h = i.length; o < h; ++o)
                      if (a.call(s, i[o], o, i)) return !0;
                  } else if (
                    "function" == typeof i.hasNext &&
                    "function" == typeof i.next
                  ) {
                    for (o = 0; i.hasNext(); )
                      if (a.call(s, i.next(), o++, i)) return !0;
                  } else
                    for (o in i)
                      if (!(o in n) && a.call(s, i[o], o, i)) return !0;
                  return !1;
                }
              }),
              r
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2247: function(t, e, i) {
      var r, n;
      (r = [i(16), i(12), i(2056)]),
        void 0 ===
          (n = function(t, e, i) {
            var r = {};
            return (
              e.mixin(i, {
                keys: function(t) {
                  var e = [];
                  for (var i in t) i in r || e.push(i);
                  return e;
                },
                values: function(t) {
                  var e = [];
                  for (var i in t) i in r || e.push(t[i]);
                  return e;
                },
                filterIn: function(e, n, a) {
                  (a = a || t.global), (n = i.lambda(n));
                  var s,
                    o,
                    h = {};
                  for (o in e)
                    o in r || ((s = e[o]), n.call(a, s, o, e) && (h[o] = s));
                  return h;
                },
                forIn: function(e, n, a) {
                  for (var s in ((a = a || t.global), (n = i.lambda(n)), e))
                    s in r || n.call(a, e[s], s, e);
                  return a;
                },
                mapIn: function(e, n, a) {
                  (a = a || t.global), (n = i.lambda(n));
                  var s,
                    o = {};
                  for (s in e) s in r || (o[s] = n.call(a, e[s], s, e));
                  return o;
                }
              }),
              i
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2248: function(t, e, i) {
      var r, n;
      (r = [i(12)]),
        void 0 ===
          (n = function(t) {
            var e = t.getObject("dojox.charting.scaler.primitive", !0);
            return t.mixin(e, {
              buildScaler: function(t, i, r, n) {
                return (
                  t == i && ((t -= 0.5), (i += 0.5)),
                  {
                    bounds: {
                      lower: t,
                      upper: i,
                      from: t,
                      to: i,
                      scale: r / (i - t),
                      span: r
                    },
                    scaler: e
                  }
                );
              },
              buildTicks: function(t, e) {
                return { major: [], minor: [], micro: [] };
              },
              getTransformerFromModel: function(t) {
                var e = t.bounds.from,
                  i = t.bounds.scale;
                return function(t) {
                  return (t - e) * i;
                };
              },
              getTransformerFromPlot: function(t) {
                var e = t.bounds.from,
                  i = t.bounds.scale;
                return function(t) {
                  return t / i + e;
                };
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2249: function(t, e, i) {
      var r, n;
      (r = [
        i(2071),
        i(12),
        i(25),
        i(28),
        i(47),
        i(30),
        i(62),
        i(57),
        i(182),
        i(32),
        i(2080),
        i(2250),
        i(2251),
        i(2072),
        i(419),
        i(2030),
        i.dj.h("dojo-bidi?2252"),
        i(2013),
        i(2141),
        i(2041)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c, u, d, f, p, m, x, g) {
            var v = e.getObject("charting", !0, t),
              y = g.lambda("item.clear()"),
              b = g.lambda("item.purgeGroup()"),
              _ = g.lambda("item.destroy()"),
              k = g.lambda("item.dirty = false"),
              w = g.lambda("item.dirty = true"),
              S = g.lambda("item.name"),
              M = { l: 10, t: 10, r: 10, b: 10 },
              P = r(
                l("dojo-bidi")
                  ? "dojox.charting.NonBidiChart"
                  : "dojox.charting.Chart",
                null,
                {
                  constructor: function(t, e) {
                    e || (e = {}),
                      (this.margins = e.margins || M),
                      (this._customMargins = !!e.margins),
                      (this.stroke = e.stroke),
                      (this.fill = e.fill),
                      (this.delayInMs = e.delayInMs || 200),
                      (this.title = e.title),
                      (this.titleGap = e.titleGap),
                      (this.titlePos = e.titlePos),
                      (this.titleFont = e.titleFont),
                      (this.titleFontColor = e.titleFontColor),
                      (this.titleAlign = e.titleAlign),
                      (this.chartTitle = null),
                      (this.htmlLabels = !0),
                      "htmlLabels" in e && (this.htmlLabels = e.htmlLabels),
                      (this.theme = null),
                      (this.axes = {}),
                      (this.stack = []),
                      (this.plots = {}),
                      (this.series = []),
                      (this.runs = {}),
                      (this.dirty = !0),
                      (this.node = a.byId(t));
                    var i = s.getMarginBox(t);
                    (this.surface = m.createSurface(
                      this.node,
                      i.w || 400,
                      i.h || 300
                    )),
                      -1 == this.surface.declaredClass.indexOf("vml") &&
                        (this._nativeClip = !0);
                  },
                  destroy: function() {
                    i.forEach(this.series, _),
                      i.forEach(this.stack, _),
                      g.forIn(this.axes, _),
                      this.surface.destroy(),
                      this.chartTitle &&
                        this.chartTitle.tagName &&
                        o.destroy(this.chartTitle);
                  },
                  getCoords: function() {
                    var t = this.node,
                      e = n.getComputedStyle(t),
                      i = s.getMarginBox(t, e),
                      r = s.position(t, !0);
                    return (i.x = r.x), (i.y = r.y), i;
                  },
                  setTheme: function(t) {
                    return (
                      (this.theme = t.clone()),
                      this._customMargins ||
                        (this.margins = this.theme.chart.margins || M),
                      (this.dirty = !0),
                      this
                    );
                  },
                  addAxis: function(t, e) {
                    var i,
                      r = (e && e.type) || "Default";
                    if ("string" == typeof r) {
                      if (!v.axis2d || !v.axis2d[r])
                        throw Error(
                          "Can't find axis: " +
                            r +
                            " - Check require() dependencies."
                        );
                      i = new v.axis2d[r](this, e);
                    } else i = new r(this, e);
                    return (
                      (i.name = t),
                      (i.dirty = !0),
                      t in this.axes && this.axes[t].destroy(),
                      (this.axes[t] = i),
                      (this.dirty = !0),
                      this
                    );
                  },
                  getAxis: function(t) {
                    return this.axes[t];
                  },
                  removeAxis: function(t) {
                    return (
                      t in this.axes &&
                        (this.axes[t].destroy(),
                        delete this.axes[t],
                        (this.dirty = !0)),
                      this
                    );
                  },
                  addPlot: function(t, e) {
                    var i,
                      r = (e && e.type) || "Default";
                    if ("string" == typeof r) {
                      if (!v.plot2d || !v.plot2d[r])
                        throw Error(
                          "Can't find plot: " +
                            r +
                            " - didn't you forget to dojo.require() it?"
                        );
                      i = new v.plot2d[r](this, e);
                    } else i = new r(this, e);
                    return (
                      (i.name = t),
                      (i.dirty = !0),
                      t in this.plots
                        ? (this.stack[this.plots[t]].destroy(),
                          (this.stack[this.plots[t]] = i))
                        : ((this.plots[t] = this.stack.length),
                          this.stack.push(i)),
                      (this.dirty = !0),
                      this
                    );
                  },
                  getPlot: function(t) {
                    return this.stack[this.plots[t]];
                  },
                  removePlot: function(t) {
                    if (t in this.plots) {
                      var e = this.plots[t];
                      delete this.plots[t],
                        this.stack[e].destroy(),
                        this.stack.splice(e, 1),
                        g.forIn(this.plots, function(t, i, r) {
                          t > e && (r[i] = t - 1);
                        });
                      var r = i.filter(this.series, function(e) {
                        return e.plot != t;
                      });
                      r.length < this.series.length &&
                        (i.forEach(this.series, function(e) {
                          e.plot == t && e.destroy();
                        }),
                        (this.runs = {}),
                        i.forEach(
                          r,
                          function(t, e) {
                            this.runs[t.plot] = e;
                          },
                          this
                        ),
                        (this.series = r)),
                        (this.dirty = !0);
                    }
                    return this;
                  },
                  getPlotOrder: function() {
                    return g.map(this.stack, S);
                  },
                  setPlotOrder: function(t) {
                    var e = {},
                      i = g.filter(
                        t,
                        function(t) {
                          return (
                            t in this.plots && !(t in e) && ((e[t] = 1), !0)
                          );
                        },
                        this
                      );
                    i.length < this.stack.length &&
                      g.forEach(this.stack, function(t) {
                        var r = t.name;
                        r in e || i.push(r);
                      });
                    var r = g.map(
                      i,
                      function(t) {
                        return this.stack[this.plots[t]];
                      },
                      this
                    );
                    return (
                      g.forEach(
                        r,
                        function(t, e) {
                          this.plots[t.name] = e;
                        },
                        this
                      ),
                      (this.stack = r),
                      (this.dirty = !0),
                      this
                    );
                  },
                  movePlotToFront: function(t) {
                    if (t in this.plots) {
                      var e = this.plots[t];
                      if (e) {
                        var i = this.getPlotOrder();
                        return (
                          i.splice(e, 1), i.unshift(t), this.setPlotOrder(i)
                        );
                      }
                    }
                    return this;
                  },
                  movePlotToBack: function(t) {
                    if (t in this.plots) {
                      var e = this.plots[t];
                      if (e < this.stack.length - 1) {
                        var i = this.getPlotOrder();
                        return i.splice(e, 1), i.push(t), this.setPlotOrder(i);
                      }
                    }
                    return this;
                  },
                  addSeries: function(t, e, i) {
                    var r = new d(this, e, i);
                    return (
                      (r.name = t),
                      t in this.runs
                        ? (this.series[this.runs[t]].destroy(),
                          (this.series[this.runs[t]] = r))
                        : ((this.runs[t] = this.series.length),
                          this.series.push(r)),
                      (this.dirty = !0),
                      !("ymin" in r) && "min" in r && (r.ymin = r.min),
                      !("ymax" in r) && "max" in r && (r.ymax = r.max),
                      this
                    );
                  },
                  getSeries: function(t) {
                    return this.series[this.runs[t]];
                  },
                  removeSeries: function(t) {
                    if (t in this.runs) {
                      var e = this.runs[t];
                      delete this.runs[t],
                        this.series[e].destroy(),
                        this.series.splice(e, 1),
                        g.forIn(this.runs, function(t, i, r) {
                          t > e && (r[i] = t - 1);
                        }),
                        (this.dirty = !0);
                    }
                    return this;
                  },
                  updateSeries: function(t, e, i) {
                    if (t in this.runs) {
                      var r = this.series[this.runs[t]];
                      r.update(e),
                        i
                          ? (this.dirty = !0)
                          : (this._invalidateDependentPlots(r.plot, !1),
                            this._invalidateDependentPlots(r.plot, !0));
                    }
                    return this;
                  },
                  getSeriesOrder: function(t) {
                    return g.map(
                      g.filter(this.series, function(e) {
                        return e.plot == t;
                      }),
                      S
                    );
                  },
                  setSeriesOrder: function(t) {
                    var e,
                      i = {},
                      r = g.filter(
                        t,
                        function(t) {
                          if (!(t in this.runs) || t in i) return !1;
                          var r = this.series[this.runs[t]];
                          if (e) {
                            if (r.plot != e) return !1;
                          } else e = r.plot;
                          return (i[t] = 1), !0;
                        },
                        this
                      );
                    g.forEach(this.series, function(t) {
                      var n = t.name;
                      n in i || t.plot != e || r.push(n);
                    });
                    var n = g.map(
                      r,
                      function(t) {
                        return this.series[this.runs[t]];
                      },
                      this
                    );
                    return (
                      (this.series = n.concat(
                        g.filter(this.series, function(t) {
                          return t.plot != e;
                        })
                      )),
                      g.forEach(
                        this.series,
                        function(t, e) {
                          this.runs[t.name] = e;
                        },
                        this
                      ),
                      (this.dirty = !0),
                      this
                    );
                  },
                  moveSeriesToFront: function(t) {
                    if (t in this.runs) {
                      var e = this.runs[t],
                        i = this.getSeriesOrder(this.series[e].plot);
                      if (t != i[0])
                        return (
                          i.splice(e, 1), i.unshift(t), this.setSeriesOrder(i)
                        );
                    }
                    return this;
                  },
                  moveSeriesToBack: function(t) {
                    if (t in this.runs) {
                      var e = this.runs[t],
                        i = this.getSeriesOrder(this.series[e].plot);
                      if (t != i[i.length - 1])
                        return (
                          i.splice(e, 1), i.push(t), this.setSeriesOrder(i)
                        );
                    }
                    return this;
                  },
                  resize: function(t, e) {
                    switch (arguments.length) {
                      case 1:
                        s.setMarginBox(this.node, t);
                        break;
                      case 2:
                        s.setMarginBox(this.node, { w: t, h: e });
                    }
                    var i = s.getMarginBox(this.node),
                      r = this.surface.getDimensions();
                    return r.width != i.w || r.height != i.h
                      ? (this.surface.setDimensions(i.w, i.h),
                        (this.dirty = !0),
                        this.render())
                      : this;
                  },
                  getGeometry: function() {
                    var t = {};
                    return (
                      g.forIn(this.axes, function(e) {
                        e.initialized() &&
                          (t[e.name] = {
                            name: e.name,
                            vertical: e.vertical,
                            scaler: e.scaler,
                            ticks: e.ticks
                          });
                      }),
                      t
                    );
                  },
                  setAxisWindow: function(t, e, r, n) {
                    var a = this.axes[t];
                    return (
                      a &&
                        (a.setWindow(e, r),
                        i.forEach(this.stack, function(e) {
                          (e.hAxis != t && e.vAxis != t) || (e.zoom = n);
                        })),
                      this
                    );
                  },
                  setWindow: function(t, e, r, n, a) {
                    return (
                      "plotArea" in this || this.calculateGeometry(),
                      g.forIn(this.axes, function(i) {
                        var a,
                          s,
                          o = i.getScaler().bounds,
                          h = o.span / (o.upper - o.lower);
                        (s = i.vertical ? n / h / (a = e) : r / h / (a = t)),
                          i.setWindow(a, s);
                      }),
                      i.forEach(this.stack, function(t) {
                        t.zoom = a;
                      }),
                      this
                    );
                  },
                  zoomIn: function(t, e, i) {
                    var r = this.axes[t];
                    if (r) {
                      var n,
                        a,
                        s = r.getScaler().bounds,
                        o = Math.min(e[0], e[1]),
                        h = Math.max(e[0], e[1]);
                      (o = e[0] < s.lower ? s.lower : o),
                        (h = e[1] > s.upper ? s.upper : h),
                        (n = (s.upper - s.lower) / (h - o)),
                        (a = o - s.lower),
                        this.setAxisWindow(t, n, a),
                        i ? this.delayedRender() : this.render();
                    }
                  },
                  calculateGeometry: function() {
                    return this.dirty
                      ? this.fullGeometry()
                      : (A(
                          i.filter(
                            this.stack,
                            function(t) {
                              return (
                                t.dirty ||
                                (t.hAxis && this.axes[t.hAxis].dirty) ||
                                (t.vAxis && this.axes[t.vAxis].dirty)
                              );
                            },
                            this
                          ),
                          this.plotArea
                        ),
                        this);
                  },
                  fullGeometry: function() {
                    this._makeDirty(),
                      i.forEach(this.stack, y),
                      this.theme || this.setTheme(new u()),
                      i.forEach(
                        this.series,
                        function(t) {
                          if (!(t.plot in this.plots)) {
                            if (!v.plot2d || !v.plot2d.Default)
                              throw Error(
                                "Can't find plot: Default - didn't you forget to dojo.require() it?"
                              );
                            var e = new v.plot2d.Default(this, {});
                            (e.name = t.plot),
                              (this.plots[t.plot] = this.stack.length),
                              this.stack.push(e);
                          }
                          this.stack[this.plots[t.plot]].addSeries(t);
                        },
                        this
                      ),
                      i.forEach(
                        this.stack,
                        function(t) {
                          t.assignAxes && t.assignAxes(this.axes);
                        },
                        this
                      );
                    var t = (this.dim = this.surface.getDimensions());
                    (t.width = m.normalizedLength(t.width)),
                      (t.height = m.normalizedLength(t.height)),
                      g.forIn(this.axes, y),
                      A(this.stack, t);
                    var e = (this.offsets = { l: 0, r: 0, t: 0, b: 0 }),
                      r = this;
                    if (
                      (g.forIn(this.axes, function(t) {
                        l("dojo-bidi") && r._resetLeftBottom(t),
                          g.forIn(t.getOffsets(), function(t, i) {
                            e[i] = Math.max(t, e[i]);
                          });
                      }),
                      this.title)
                    ) {
                      (this.titleGap =
                        0 == this.titleGap
                          ? 0
                          : this.titleGap || this.theme.chart.titleGap || 20),
                        (this.titlePos =
                          this.titlePos || this.theme.chart.titlePos || "top"),
                        (this.titleFont =
                          this.titleFont || this.theme.chart.titleFont),
                        (this.titleFontColor =
                          this.titleFontColor ||
                          this.theme.chart.titleFontColor ||
                          "black"),
                        (this.titleAlign =
                          this.titleAlign ||
                          (this.theme &&
                            this.theme.chart &&
                            this.theme.chart.titleAlign) ||
                          "middle");
                      var n = m.normalizedLength(
                        m.splitFontString(this.titleFont).size
                      );
                      e["top" == this.titlePos ? "t" : "b"] +=
                        n + this.titleGap;
                    }
                    return (
                      g.forIn(this.margins, function(t, i) {
                        e[i] += t;
                      }),
                      (this.plotArea = {
                        width: t.width - e.l - e.r,
                        height: t.height - e.t - e.b
                      }),
                      g.forIn(this.axes, y),
                      A(this.stack, this.plotArea),
                      this
                    );
                  },
                  render: function() {
                    return (
                      this._delayedRenderHandle &&
                        (clearTimeout(this._delayedRenderHandle),
                        (this._delayedRenderHandle = null)),
                      this.theme && this.theme.clear(),
                      this.dirty
                        ? this.fullRender()
                        : (this.calculateGeometry(),
                          g.forEachRev(
                            this.stack,
                            function(t) {
                              t.render(this.dim, this.offsets);
                            },
                            this
                          ),
                          g.forIn(
                            this.axes,
                            function(t) {
                              t.render(this.dim, this.offsets);
                            },
                            this
                          ),
                          this._makeClean(),
                          this)
                    );
                  },
                  fullRender: function() {
                    this.fullGeometry();
                    var t = this.offsets,
                      e = this.dim,
                      r = Math.max(0, e.width - t.l - t.r),
                      n = Math.max(0, e.height - t.t - t.b);
                    i.forEach(this.series, b),
                      g.forIn(this.axes, b),
                      i.forEach(this.stack, b);
                    var a = this.surface.children;
                    if (p.dispose)
                      for (var s = 0; s < a.length; ++s) p.dispose(a[s]);
                    return (
                      this.chartTitle &&
                        this.chartTitle.tagName &&
                        o.destroy(this.chartTitle),
                      this.surface.clear(),
                      (this.chartTitle = null),
                      this._renderChartBackground(e, t),
                      this._nativeClip,
                      this._renderPlotBackground(e, t, r, n),
                      g.foldr(
                        this.stack,
                        function(i, r) {
                          return r.render(e, t), 0;
                        },
                        0
                      ),
                      this._nativeClip || this._renderChartBackground(e, t),
                      this.title && this._renderTitle(e, t),
                      g.forIn(this.axes, function(i) {
                        i.render(e, t);
                      }),
                      this._makeClean(),
                      this
                    );
                  },
                  _renderTitle: function(t, e) {
                    var i =
                        ("canvas" == m.renderer && this.htmlLabels) ||
                        (!l("ie") && !l("opera") && this.htmlLabels)
                          ? "html"
                          : "gfx",
                      r = m.normalizedLength(
                        m.splitFontString(this.titleFont).size
                      ),
                      n = m._base._getTextBox(this.title, {
                        font: this.titleFont
                      }),
                      a = this.titleAlign,
                      s = l("dojo-bidi") && this.isRightToLeft(),
                      o = t.width / 2;
                    "edge" === a
                      ? ((a = "left"), (o = s ? t.width - (e.r + n.w) : e.l))
                      : "middle" != a &&
                        (s && (a = "left" === a ? "right" : "left"),
                        "left" === a
                          ? (o = this.margins.l)
                          : "right" === a &&
                            ((a = "left"),
                            (o = t.width - (this.margins.l + n.w)))),
                      (this.chartTitle = f.createText[i](
                        this,
                        this.surface,
                        o,
                        "top" == this.titlePos
                          ? r + this.margins.t
                          : t.height - this.margins.b,
                        a,
                        this.title,
                        this.titleFont,
                        this.titleFontColor
                      ));
                  },
                  _renderChartBackground: function(t, e) {
                    var i,
                      r = this.theme,
                      a =
                        void 0 !== this.fill
                          ? this.fill
                          : r.chart && r.chart.fill,
                      s =
                        void 0 !== this.stroke
                          ? this.stroke
                          : r.chart && r.chart.stroke;
                    if ("inherit" == a) {
                      var o = this.node;
                      for (
                        a = new h(n.get(o, "backgroundColor"));
                        0 == a.a && o != document.documentElement;

                      )
                        (a = new h(n.get(o, "backgroundColor"))),
                          (o = o.parentNode);
                    }
                    a &&
                      (this._nativeClip
                        ? ((a = c.prototype._shapeFill(
                            c.prototype._plotFill(a, t),
                            {
                              x: 0,
                              y: 0,
                              width: t.width + 1,
                              height: t.height + 1
                            }
                          )),
                          this.surface
                            .createRect({
                              width: t.width + 1,
                              height: t.height + 1
                            })
                            .setFill(a))
                        : ((a = c.prototype._plotFill(a, t, e)),
                          e.l &&
                            ((i = {
                              x: 0,
                              y: 0,
                              width: e.l,
                              height: t.height + 1
                            }),
                            this.surface
                              .createRect(i)
                              .setFill(c.prototype._shapeFill(a, i))),
                          e.r &&
                            ((i = {
                              x: t.width - e.r,
                              y: 0,
                              width: e.r + 1,
                              height: t.height + 2
                            }),
                            this.surface
                              .createRect(i)
                              .setFill(c.prototype._shapeFill(a, i))),
                          e.t &&
                            ((i = {
                              x: 0,
                              y: 0,
                              width: t.width + 1,
                              height: e.t
                            }),
                            this.surface
                              .createRect(i)
                              .setFill(c.prototype._shapeFill(a, i))),
                          e.b &&
                            ((i = {
                              x: 0,
                              y: t.height - e.b,
                              width: t.width + 1,
                              height: e.b + 2
                            }),
                            this.surface
                              .createRect(i)
                              .setFill(c.prototype._shapeFill(a, i))))),
                      s &&
                        this.surface
                          .createRect({
                            width: t.width - 1,
                            height: t.height - 1
                          })
                          .setStroke(s);
                  },
                  _renderPlotBackground: function(t, e, i, r) {
                    var n = this.theme,
                      a = n.plotarea && n.plotarea.fill,
                      s = n.plotarea && n.plotarea.stroke,
                      o = {
                        x: e.l - 1,
                        y: e.t - 1,
                        width: i + 2,
                        height: r + 2
                      };
                    a &&
                      ((a = c.prototype._shapeFill(
                        c.prototype._plotFill(a, t, e),
                        o
                      )),
                      this.surface.createRect(o).setFill(a)),
                      s &&
                        this.surface
                          .createRect({
                            x: e.l,
                            y: e.t,
                            width: i + 1,
                            height: r + 1
                          })
                          .setStroke(s);
                  },
                  delayedRender: function() {
                    return (
                      this._delayedRenderHandle ||
                        (this._delayedRenderHandle = setTimeout(
                          e.hitch(this, function() {
                            this.render();
                          }),
                          this.delayInMs
                        )),
                      this
                    );
                  },
                  connectToPlot: function(t, e, i) {
                    return t in this.plots
                      ? this.stack[this.plots[t]].connect(
                          e,
                          i
                        )
                      : null;
                  },
                  fireEvent: function(t, e, i) {
                    if (t in this.runs) {
                      var r = this.series[this.runs[t]].plot;
                      if (r in this.plots) {
                        var n = this.stack[this.plots[r]];
                        n && n.fireEvent(t, e, i);
                      }
                    }
                    return this;
                  },
                  _makeClean: function() {
                    i.forEach(this.axes, k),
                      i.forEach(this.stack, k),
                      i.forEach(this.series, k),
                      (this.dirty = !1);
                  },
                  _makeDirty: function() {
                    i.forEach(this.axes, w),
                      i.forEach(this.stack, w),
                      i.forEach(this.series, w),
                      (this.dirty = !0);
                  },
                  _invalidateDependentPlots: function(t, e) {
                    if (t in this.plots) {
                      var r,
                        n = this.stack[this.plots[t]],
                        a = e ? "vAxis" : "hAxis";
                      n[a]
                        ? (r = this.axes[n[a]]) &&
                          r.dependOnData() &&
                          ((r.dirty = !0),
                          i.forEach(this.stack, function(t) {
                            t[a] && t[a] == n[a] && (t.dirty = !0);
                          }))
                        : (n.dirty = !0);
                    }
                  },
                  setDir: function(t) {
                    return this;
                  },
                  _resetLeftBottom: function(t) {},
                  formatTruncatedLabel: function(t, e, i) {}
                }
              );
            function T(t, e) {
              return (
                t &&
                  e &&
                  ((t.min = Math.min(t.min, e.min)),
                  (t.max = Math.max(t.max, e.max))),
                t || e
              );
            }
            function A(t, e) {
              var r = {},
                n = {};
              i.forEach(t, function(t) {
                var e = (r[t.name] = t.getSeriesStats());
                t.hAxis &&
                  (n[t.hAxis] = T(
                    n[t.hAxis],
                    (function(t) {
                      return { min: t.hmin, max: t.hmax };
                    })(e)
                  )),
                  t.vAxis &&
                    (n[t.vAxis] = T(
                      n[t.vAxis],
                      (function(t) {
                        return { min: t.vmin, max: t.vmax };
                      })(e)
                    ));
              }),
                i.forEach(t, function(t) {
                  var i = r[t.name];
                  t.hAxis &&
                    (function(t, e) {
                      (t.hmin = e.min), (t.hmax = e.max);
                    })(i, n[t.hAxis]),
                    t.vAxis &&
                      (function(t, e) {
                        (t.vmin = e.min), (t.vmax = e.max);
                      })(i, n[t.vAxis]),
                    t.initializeScalers(e, i);
                });
            }
            return l("dojo-bidi") ? r("dojox.charting.Chart", [P, x]) : P;
          }.apply(null, r)) || (t.exports = n);
    },
    2250: function(t, e, i) {
      var r, n;
      (r = [i(12), i(25), i(28), i(182), i(2022), i(2140)]),
        void 0 ===
          (n = function(t, e, i, r, n, a) {
            var s = i("dojox.charting.SimpleTheme", null, {
              shapeSpaces: { shape: 1, shapeX: 1, shapeY: 1 },
              constructor: function(i) {
                i = i || {};
                var r = s.defaultTheme;
                e.forEach(
                  [
                    "chart",
                    "plotarea",
                    "axis",
                    "grid",
                    "series",
                    "marker",
                    "indicator"
                  ],
                  function(e) {
                    this[e] = t.delegate(r[e], i[e]);
                  },
                  this
                ),
                  i.seriesThemes && i.seriesThemes.length
                    ? ((this.colors = null),
                      (this.seriesThemes = i.seriesThemes.slice(0)))
                    : ((this.seriesThemes = null),
                      (this.colors = (i.colors || s.defaultColors).slice(0))),
                  (this.markerThemes = null),
                  i.markerThemes &&
                    i.markerThemes.length &&
                    (this.markerThemes = i.markerThemes.slice(0)),
                  (this.markers = i.markers
                    ? t.clone(i.markers)
                    : t.delegate(s.defaultMarkers)),
                  (this.noGradConv = i.noGradConv),
                  (this.noRadialConv = i.noRadialConv),
                  i.reverseFills && this.reverseFills(),
                  (this._current = 0),
                  this._buildMarkerArray();
              },
              clone: function() {
                var t = new this.constructor({
                  chart: this.chart,
                  plotarea: this.plotarea,
                  axis: this.axis,
                  grid: this.grid,
                  series: this.series,
                  marker: this.marker,
                  colors: this.colors,
                  markers: this.markers,
                  indicator: this.indicator,
                  seriesThemes: this.seriesThemes,
                  markerThemes: this.markerThemes,
                  noGradConv: this.noGradConv,
                  noRadialConv: this.noRadialConv,
                  pieInnerRadius: this.pieInnerRadius
                });
                return (
                  e.forEach(
                    [
                      "clone",
                      "clear",
                      "next",
                      "skip",
                      "addMixin",
                      "post",
                      "getTick"
                    ],
                    function(e) {
                      this.hasOwnProperty(e) && (t[e] = this[e]);
                    },
                    this
                  ),
                  t
                );
              },
              clear: function() {
                this._current = 0;
              },
              next: function(e, i, a) {
                var s,
                  o,
                  h = n.merge;
                if (this.colors) {
                  (s = t.delegate(this.series)), (o = t.delegate(this.marker));
                  var l,
                    c = new r(this.colors[this._current % this.colors.length]);
                  s.stroke && s.stroke.color
                    ? ((s.stroke = t.delegate(s.stroke)),
                      (l = new r(s.stroke.color)),
                      (s.stroke.color = new r(c)),
                      (s.stroke.color.a = l.a))
                    : (s.stroke = { color: c }),
                    o.stroke && o.stroke.color
                      ? ((o.stroke = t.delegate(o.stroke)),
                        (l = new r(o.stroke.color)),
                        (o.stroke.color = new r(c)),
                        (o.stroke.color.a = l.a))
                      : (o.stroke = { color: c }),
                    !s.fill || s.fill.type
                      ? (s.fill = c)
                      : ((l = new r(s.fill)),
                        (s.fill = new r(c)),
                        (s.fill.a = l.a)),
                    !o.fill || o.fill.type
                      ? (o.fill = c)
                      : ((l = new r(o.fill)),
                        (o.fill = new r(c)),
                        (o.fill.a = l.a));
                } else
                  (s = this.seriesThemes
                    ? h(
                        this.series,
                        this.seriesThemes[
                          this._current % this.seriesThemes.length
                        ]
                      )
                    : this.series),
                    (o = this.markerThemes
                      ? h(
                          this.marker,
                          this.markerThemes[
                            this._current % this.markerThemes.length
                          ]
                        )
                      : s);
                var u = {
                  series: s,
                  marker: o,
                  symbol:
                    (o && o.symbol) ||
                    this._markers[this._current % this._markers.length]
                };
                return (
                  ++this._current,
                  i && (u = this.addMixin(u, e, i)),
                  a && (u = this.post(u, e)),
                  u
                );
              },
              skip: function() {
                ++this._current;
              },
              addMixin: function(i, r, a, s) {
                if (t.isArray(a))
                  e.forEach(
                    a,
                    function(t) {
                      i = this.addMixin(i, r, t);
                    },
                    this
                  );
                else {
                  var o = {};
                  "color" in a &&
                    ("line" == r || "area" == r
                      ? (t.setObject("series.stroke.color", a.color, o),
                        t.setObject("marker.stroke.color", a.color, o))
                      : t.setObject("series.fill", a.color, o)),
                    e.forEach(
                      [
                        "stroke",
                        "outline",
                        "shadow",
                        "fill",
                        "filter",
                        "font",
                        "fontColor",
                        "labelWiring"
                      ],
                      function(e) {
                        var i =
                            "marker" + e.charAt(0).toUpperCase() + e.substr(1),
                          r = i in a;
                        e in a &&
                          (t.setObject("series." + e, a[e], o),
                          r || t.setObject("marker." + e, a[e], o)),
                          r && t.setObject("marker." + e, a[i], o);
                      }
                    ),
                    "marker" in a &&
                      ((o.symbol = a.marker), (o.symbol = a.marker)),
                    (i = n.merge(i, o));
                }
                return s && (i = this.post(i, r)), i;
              },
              post: function(t, e) {
                var i,
                  r = t.series.fill;
                return !this.noGradConv &&
                  this.shapeSpaces[r.space] &&
                  "linear" == r.type &&
                  ("bar" == e
                    ? (i = { x1: r.y1, y1: r.x1, x2: r.y2, y2: r.x2 })
                    : this.noRadialConv ||
                      "shape" != r.space ||
                      ("slice" != e && "circle" != e) ||
                      (i = { type: "radial", cx: 0, cy: 0, r: 100 }),
                  i)
                  ? n.merge(t, { series: { fill: i } })
                  : t;
              },
              getTick: function(t, e) {
                var i = this.axis.tick,
                  r = t + "Tick",
                  a = n.merge;
                return (
                  i
                    ? this.axis[r] && (i = a(i, this.axis[r]))
                    : (i = this.axis[r]),
                  e && (i ? e[r] && (i = a(i, e[r])) : (i = e[r])),
                  i
                );
              },
              inspectObjects: function(t) {
                e.forEach(
                  [
                    "chart",
                    "plotarea",
                    "axis",
                    "grid",
                    "series",
                    "marker",
                    "indicator"
                  ],
                  function(e) {
                    t(this[e]);
                  },
                  this
                ),
                  this.seriesThemes && e.forEach(this.seriesThemes, t),
                  this.markerThemes && e.forEach(this.markerThemes, t);
              },
              reverseFills: function() {
                this.inspectObjects(function(t) {
                  t && t.fill && (t.fill = a.reverse(t.fill));
                });
              },
              addMarker: function(t, e) {
                (this.markers[t] = e), this._buildMarkerArray();
              },
              setMarkers: function(t) {
                (this.markers = t), this._buildMarkerArray();
              },
              _buildMarkerArray: function() {
                for (var t in ((this._markers = []), this.markers))
                  this._markers.push(this.markers[t]);
              }
            });
            return (
              t.mixin(s, {
                defaultMarkers: {
                  CIRCLE: "m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",
                  SQUARE: "m-3,-3 l0,6 6,0 0,-6 z",
                  DIAMOND: "m0,-3 l3,3 -3,3 -3,-3 z",
                  CROSS: "m0,-3 l0,6 m-3,-3 l6,0",
                  X: "m-3,-3 l6,6 m0,-6 l-6,6",
                  TRIANGLE: "m-3,3 l3,-6 3,6 z",
                  TRIANGLE_INVERTED: "m-3,-3 l3,6 3,-6 z"
                },
                defaultColors: [
                  "#54544c",
                  "#858e94",
                  "#6e767a",
                  "#948585",
                  "#474747"
                ],
                defaultTheme: {
                  chart: {
                    stroke: null,
                    fill: "white",
                    pageStyle: null,
                    titleGap: 20,
                    titlePos: "top",
                    titleFont: "normal normal bold 14pt Tahoma",
                    titleFontColor: "#333",
                    titleAlign: "middle"
                  },
                  plotarea: { stroke: null, fill: "white" },
                  axis: {
                    stroke: { color: "#333", width: 1 },
                    tick: {
                      color: "#666",
                      position: "center",
                      font: "normal normal normal 7pt Tahoma",
                      fontColor: "#333",
                      labelGap: 4
                    },
                    majorTick: { width: 1, length: 6 },
                    minorTick: { width: 0.8, length: 3 },
                    microTick: { width: 0.5, length: 1 },
                    title: {
                      gap: 15,
                      font: "normal normal normal 11pt Tahoma",
                      fontColor: "#333",
                      orientation: "axis"
                    }
                  },
                  series: {
                    stroke: { width: 1.5, color: "#333" },
                    outline: { width: 0.1, color: "#ccc" },
                    shadow: null,
                    fill: "#ccc",
                    font: "normal normal normal 8pt Tahoma",
                    fontColor: "#000",
                    labelWiring: { width: 1, color: "#ccc" }
                  },
                  marker: {
                    stroke: { width: 1.5, color: "#333" },
                    outline: { width: 0.1, color: "#ccc" },
                    shadow: null,
                    fill: "#ccc",
                    font: "normal normal normal 8pt Tahoma",
                    fontColor: "#000"
                  },
                  indicator: {
                    lineStroke: { width: 1.5, color: "#333" },
                    lineOutline: { width: 0.1, color: "#ccc" },
                    lineShadow: null,
                    lineFill: null,
                    stroke: { width: 1.5, color: "#333" },
                    outline: { width: 0.1, color: "#ccc" },
                    shadow: null,
                    fill: "#ccc",
                    radius: 3,
                    font: "normal normal normal 10pt Tahoma",
                    fontColor: "#000",
                    markerFill: "#ccc",
                    markerSymbol: "m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",
                    markerStroke: { width: 1.5, color: "#333" },
                    markerOutline: { width: 0.1, color: "#ccc" },
                    markerShadow: null
                  }
                }
              }),
              s
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2251: function(t, e, i) {
      var r, n;
      (r = [i(12), i(28), i(2080)]),
        void 0 ===
          (n = function(t, e, i) {
            return e("dojox.charting.Series", i, {
              constructor: function(e, i, r) {
                t.mixin(this, r),
                  "string" != typeof this.plot && (this.plot = "default"),
                  this.update(i);
              },
              clear: function() {
                this.dyn = {};
              },
              update: function(e) {
                t.isArray(e)
                  ? (this.data = e)
                  : ((this.source = e),
                    (this.data = this.source.data),
                    this.source.setSeriesObject &&
                      this.source.setSeriesObject(this)),
                  (this.dirty = !0),
                  this.clear();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2252: function(t, e, i) {
      var r, n;
      (r = [
        i(2071),
        i(28),
        i(12),
        i(47),
        i(25),
        i(32),
        i(30),
        i(57),
        i(2030),
        i(2253),
        i(2072),
        i(2076),
        i(2013),
        i(78),
        i(2255)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c, u, d, f, p) {
            var m = new u();
            i.getObject("charting", !0, t);
            function x(t) {
              return /^(ltr|rtl|auto)$/.test(t) ? t : null;
            }
            return e(null, {
              textDir: "",
              dir: "",
              isMirrored: !1,
              getTextDir: function(t) {
                var e =
                  "auto" == this.textDir ? m.checkContextual(t) : this.textDir;
                return e || (e = r.get(this.node, "direction")), e;
              },
              postscript: function(t, e) {
                var i = e && e.textDir ? x(e.textDir) : "";
                (i = i || r.get(this.node, "direction")),
                  (this.textDir = i),
                  (this.surface.textDir = i),
                  (this.htmlElementsRegistry = []),
                  (this.truncatedLabelsRegistry = []);
                var n = "ltr";
                f.has(t, "direction") && (n = f.get(t, "direction")),
                  this.setDir(e && e.dir ? e.dir : n);
              },
              setTextDir: function(t, e) {
                if (t == this.textDir) return this;
                if (null != x(t)) {
                  (this.textDir = t),
                    this.surface.setTextDir(t),
                    this.truncatedLabelsRegistry &&
                      "auto" == t &&
                      n.forEach(
                        this.truncatedLabelsRegistry,
                        function(t) {
                          var e = this.getTextDir(t.label);
                          t.element.textDir != e &&
                            t.element.setShape({ textDir: e });
                        },
                        this
                      );
                  var i = d.keys(this.axes);
                  i.length > 0
                    ? (n.forEach(
                        i,
                        function(t, e, i) {
                          var r = this.axes[t];
                          r.htmlElements[0] &&
                            ((r.dirty = !0), r.render(this.dim, this.offsets));
                        },
                        this
                      ),
                      this.title && this._renderTitle(this.dim, this.offsets))
                    : n.forEach(
                        this.htmlElementsRegistry,
                        function(e, i, r) {
                          var n = "auto" == t ? this.getTextDir(e[4]) : t;
                          e[0].children[0] &&
                            e[0].children[0].dir != n &&
                            (o.destroy(e[0].children[0]),
                            (e[0].children[0] = c.createText.html(
                              this,
                              this.surface,
                              e[1],
                              e[2],
                              e[3],
                              e[4],
                              e[5],
                              e[6]
                            ).children[0]));
                        },
                        this
                      );
                }
                return this;
              },
              setDir: function(t) {
                return (
                  ("rtl" != t && "ltr" != t) ||
                    (this.dir != t &&
                      ((this.isMirrored = !0), (this.dirty = !0)),
                    (this.dir = t)),
                  this
                );
              },
              isRightToLeft: function() {
                return "rtl" == this.dir;
              },
              applyMirroring: function(t, e, i) {
                return (
                  p.reverseMatrix(t, e, i, "rtl" == this.dir),
                  r.set(this.node, "direction", "ltr"),
                  this
                );
              },
              formatTruncatedLabel: function(t, e, i) {
                this.truncateBidi(t, e, i);
              },
              truncateBidi: function(t, e, i) {
                "gfx" == i &&
                  (this.truncatedLabelsRegistry.push({ element: t, label: e }),
                  "auto" == this.textDir &&
                    t.setShape({ textDir: this.getTextDir(e) })),
                  "html" == i &&
                    "auto" == this.textDir &&
                    (t.children[0].dir = this.getTextDir(e));
              },
              render: function() {
                return this.inherited(arguments), (this.isMirrored = !1), this;
              },
              _resetLeftBottom: function(t) {
                t.vertical &&
                  this.isMirrored &&
                  (t.opt.leftBottom = !t.opt.leftBottom);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2253: function(t, e, i) {
      var r, n;
      (r = [
        i(69),
        i(12),
        i(221),
        i(30),
        i(423),
        i(25),
        i(2254),
        i(419),
        i(799),
        i(2076)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l) {
            switch (
              (e.getObject("dojox.gfx._gfxBidiSupport", !0), t.renderer)
            ) {
              case "vml":
                t.isVml = !0;
                break;
              case "svg":
                (t.isSvg = !0), t.svg.useSvgWeb && (t.isSvgWeb = !0);
                break;
              case "silverlight":
                t.isSilverlight = !0;
                break;
              case "canvas":
              case "canvasWithEvents":
                t.isCanvas = !0;
            }
            var c = "‎",
              u = "‪",
              d = "‬",
              f = "‏",
              p = "‫",
              m = new l();
            e.extend(t.shape.Surface, {
              textDir: "",
              setTextDir: function(t) {
                _(this, t);
              },
              getTextDir: function() {
                return this.textDir;
              }
            }),
              e.extend(t.Group, {
                textDir: "",
                setTextDir: function(t) {
                  _(this, t);
                },
                getTextDir: function() {
                  return this.textDir;
                }
              }),
              e.extend(t.Text, {
                textDir: "",
                formatText: function(e, r) {
                  if (r && e && e.length > 1) {
                    var n = r;
                    if ("auto" == n) {
                      if (t.isVml) return e;
                      n = m.checkContextual(e);
                    }
                    if (t.isVml)
                      return n != m.checkContextual(e)
                        ? "rtl" == n
                          ? m.hasBidiChar(e)
                            ? f + f + e
                            : m.bidiTransform(e, "IRNNN", "ILNNN")
                          : c + e
                        : e;
                    if (t.isSvgWeb)
                      return "rtl" == n
                        ? m.bidiTransform(e, "IRNNN", "ILNNN")
                        : e;
                    if (t.isSilverlight)
                      return "rtl" == n
                        ? m.bidiTransform(e, "IRNNN", "VLYNN")
                        : m.bidiTransform(e, "ILNNN", "VLYNN");
                    if (t.isCanvas) return "rtl" == n ? p + e + d : u + e + d;
                    if (t.isSvg)
                      return i("ff") < 4
                        ? "rtl" == n
                          ? m.bidiTransform(e, "IRYNN", "VLNNN")
                          : m.bidiTransform(e, "ILYNN", "VLNNN")
                        : c + ("rtl" == n ? p : u) + e + d;
                  }
                  return e;
                },
                bidiPreprocess: function(t) {
                  return t;
                }
              }),
              e.extend(t.TextPath, {
                textDir: "",
                formatText: function(e, r) {
                  if (r && e && e.length > 1) {
                    var n = r;
                    if ("auto" == n) {
                      if (t.isVml) return e;
                      n = m.checkContextual(e);
                    }
                    if (t.isVml)
                      return n != m.checkContextual(e)
                        ? "rtl" == n
                          ? m.hasBidiChar(e)
                            ? f + f + e
                            : m.bidiTransform(e, "IRNNN", "ILNNN")
                          : c + e
                        : e;
                    if (t.isSvgWeb)
                      return "rtl" == n
                        ? m.bidiTransform(e, "IRNNN", "ILNNN")
                        : e;
                    t.isSvg &&
                      (e =
                        i("opera") || i("ff") >= 4
                          ? c + ("rtl" == n ? p : u) + e + d
                          : "rtl" == n
                            ? m.bidiTransform(e, "IRYNN", "VLNNN")
                            : m.bidiTransform(e, "ILYNN", "VLNNN"));
                  }
                  return e;
                },
                bidiPreprocess: function(t) {
                  return (
                    t &&
                      "string" == typeof t &&
                      ((this.origText = t),
                      (t = this.formatText(t, this.textDir))),
                    t
                  );
                }
              });
            var x = function(t, e, i, r) {
                var n = t.prototype[e];
                t.prototype[e] = function() {
                  var t;
                  i && (t = i.apply(this, arguments));
                  var e = n.call(this, t);
                  return r && (e = r.call(this, e, arguments)), e;
                };
              },
              g = function(t) {
                return (
                  t &&
                    (t.textDir && (t.textDir = k(t.textDir)),
                    t.text &&
                      t.text instanceof Array &&
                      (t.text = t.text.join(","))),
                  !t ||
                    (void 0 == t.text && !t.textDir) ||
                    (this.textDir == t.textDir && t.text == this.origText) ||
                    ((this.origText =
                      void 0 != t.text ? t.text : this.origText),
                    t.textDir && (this.textDir = t.textDir),
                    (t.text = this.formatText(this.origText, this.textDir))),
                  this.bidiPreprocess(t)
                );
              };
            x(t.Text, "setShape", g, null), x(t.TextPath, "setText", g, null);
            var v = function(t) {
              var i = e.clone(t);
              return i && this.origText && (i.text = this.origText), i;
            };
            x(t.Text, "getShape", null, v), x(t.TextPath, "getText", null, v);
            var y = function(t, e) {
              var i;
              return (
                e && e[0] && (i = k(e[0])), t.setTextDir(i || this.textDir), t
              );
            };
            x(t.Surface, "createGroup", null, y),
              x(t.Group, "createGroup", null, y);
            var b = function(t) {
              if (t) {
                var e = t.textDir ? k(t.textDir) : this.textDir;
                e && (t.textDir = e);
              }
              return t;
            };
            function _(e, i) {
              var r = k(i);
              return (
                r &&
                  t.utils.forEach(
                    e,
                    function(e) {
                      (e instanceof t.Surface || e instanceof t.Group) &&
                        (e.textDir = r),
                        e instanceof t.Text && e.setShape({ textDir: r }),
                        e instanceof t.TextPath && e.setText({ textDir: r });
                    },
                    e
                  ),
                e
              );
            }
            function k(t) {
              return t &&
                ((t = t.toLowerCase()),
                a.indexOf(["ltr", "rtl", "auto"], t) < 0)
                ? null
                : t;
            }
            return (
              x(t.Surface, "createText", b, null),
              x(t.Surface, "createTextPath", b, null),
              x(t.Group, "createText", b, null),
              x(t.Group, "createTextPath", b, null),
              (t.createSurface = function(e, i, a, s) {
                var o = t[t.renderer].createSurface(e, i, a),
                  h = k(s);
                return t.isSvgWeb
                  ? ((o.textDir = h || n.style(r.byId(e), "direction")), o)
                  : ((t.isVml || t.isSvg || t.isCanvas) &&
                      (o.textDir = h || n.style(o.rawNode, "direction")),
                    t.isSilverlight &&
                      (o.textDir = h || n.style(o._nodes[1], "direction")),
                    o);
              }),
              t
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2254: function(t, e, i) {
      var r, n;
      (r = [
        i(16),
        i(12),
        i(69),
        i(423),
        i(25),
        i(42),
        i(429),
        i(323),
        i(221),
        i.dj.c(t.i),
        i(94)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = (i.utils = {});
            return (
              e.mixin(u, {
                forEach: function(e, r, a) {
                  (a = a || t.global),
                    r.call(a, e),
                    (e instanceof i.Surface || e instanceof i.Group) &&
                      n.forEach(e.children, function(t) {
                        u.forEach(t, r, a);
                      });
                },
                serialize: function(t) {
                  var e,
                    r = {},
                    a = t instanceof i.Surface;
                  if (a || t instanceof i.Group) {
                    if (((r.children = n.map(t.children, u.serialize)), a))
                      return r.children;
                  } else r.shape = t.getShape();
                  return (
                    t.getTransform &&
                      (e = t.getTransform()) &&
                      (r.transform = e),
                    t.getStroke && (e = t.getStroke()) && (r.stroke = e),
                    t.getFill && (e = t.getFill()) && (r.fill = e),
                    t.getFont && (e = t.getFont()) && (r.font = e),
                    r
                  );
                },
                toJson: function(t, e) {
                  return s.toJson(u.serialize(t), e);
                },
                deserialize: function(t, i) {
                  if (i instanceof Array)
                    return n.map(i, e.hitch(null, u.deserialize, t));
                  var r =
                    "shape" in i ? t.createShape(i.shape) : t.createGroup();
                  return (
                    "transform" in i && r.setTransform(i.transform),
                    "stroke" in i && r.setStroke(i.stroke),
                    "fill" in i && r.setFill(i.fill),
                    "font" in i && r.setFont(i.font),
                    "children" in i &&
                      n.forEach(i.children, e.hitch(null, u.deserialize, r)),
                    r
                  );
                },
                fromJson: function(t, e) {
                  return u.deserialize(t, s.fromJson(e));
                },
                toSvg: function(t) {
                  var e = new o();
                  if ("svg" === i.renderer)
                    try {
                      var n = u._cleanSvg(u._innerXML(t.rawNode));
                      e.callback(n);
                    } catch (t) {
                      e.errback(t);
                    }
                  else {
                    u._initSvgSerializerDeferred || u._initSvgSerializer();
                    var s = u.toJson(t),
                      h = function() {
                        try {
                          var i = t.getDimensions(),
                            n = i.width,
                            o = i.height,
                            h = u._gfxSvgProxy.document.createElement("div");
                          u._gfxSvgProxy.document.body.appendChild(h),
                            a.withDoc(
                              u._gfxSvgProxy.document,
                              function() {
                                r.style(h, "width", n), r.style(h, "height", o);
                              },
                              this
                            );
                          var l = u._gfxSvgProxy[
                            dojox._scopeName
                          ].gfx.createSurface(h, n, o);
                          l.whenLoaded(null, function(t) {
                            try {
                              u._gfxSvgProxy[
                                dojox._scopeName
                              ].gfx.utils.fromJson(t, s);
                              var i = u._cleanSvg(h.innerHTML);
                              t.clear(),
                                t.destroy(),
                                u._gfxSvgProxy.document.body.removeChild(h),
                                e.callback(i);
                            } catch (t) {
                              e.errback(t);
                            }
                          });
                        } catch (t) {
                          e.errback(t);
                        }
                      };
                    u._initSvgSerializerDeferred.fired > 0
                      ? h()
                      : u._initSvgSerializerDeferred.addCallback(h);
                  }
                  return e;
                },
                _gfxSvgProxy: null,
                _initSvgSerializerDeferred: null,
                _svgSerializerInitialized: function() {
                  u._initSvgSerializerDeferred.callback(!0);
                },
                _initSvgSerializer: function() {
                  if (!u._initSvgSerializerDeferred) {
                    u._initSvgSerializerDeferred = new o();
                    var e,
                      i = a.doc.createElement("iframe");
                    r.style(i, {
                      display: "none",
                      position: "absolute",
                      width: "1em",
                      height: "1em",
                      top: "-10000px"
                    }),
                      h("ie")
                        ? (i.onreadystatechange = function() {
                            "complete" == i.contentWindow.document.readyState &&
                              ((i.onreadystatechange = function() {}),
                              (e = setInterval(function() {
                                i.contentWindow[
                                  t.scopeMap.dojo[1]._scopeName
                                ] &&
                                  i.contentWindow[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx &&
                                  i.contentWindow[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx.utils &&
                                  (clearInterval(e),
                                  (i.contentWindow.parent[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx.utils._gfxSvgProxy =
                                    i.contentWindow),
                                  i.contentWindow.parent[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx.utils._svgSerializerInitialized());
                              }, 50)));
                          })
                        : (i.onload = function() {
                            (i.onload = function() {}),
                              (e = setInterval(function() {
                                i.contentWindow[
                                  t.scopeMap.dojo[1]._scopeName
                                ] &&
                                  i.contentWindow[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx &&
                                  i.contentWindow[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx.utils &&
                                  (clearInterval(e),
                                  (i.contentWindow.parent[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx.utils._gfxSvgProxy =
                                    i.contentWindow),
                                  i.contentWindow.parent[
                                    t.scopeMap.dojox[1]._scopeName
                                  ].gfx.utils._svgSerializerInitialized());
                              }, 50));
                          });
                    var n =
                      c.dojoxGfxSvgProxyFrameUrl ||
                      l.toUrl("dojox/gfx/resources/gfxSvgProxyFrame.html");
                    i.setAttribute("src", n.toString()),
                      a.body().appendChild(i);
                  }
                },
                _innerXML: function(t) {
                  return t.innerXML
                    ? t.innerXML
                    : t.xml
                      ? t.xml
                      : "undefined" != typeof XMLSerializer
                        ? new XMLSerializer().serializeToString(t)
                        : null;
                },
                _cleanSvg: function(t) {
                  return (
                    t &&
                      (-1 == t.indexOf('xmlns="http://www.w3.org/2000/svg"') &&
                        (t =
                          '<svg xmlns="http://www.w3.org/2000/svg"' +
                          (t = t.substring(4, t.length))),
                      -1 ==
                        t.indexOf(
                          'xmlns:xlink="http://www.w3.org/1999/xlink"'
                        ) &&
                        (t =
                          '<svg xmlns:xlink="http://www.w3.org/1999/xlink"' +
                          (t = t.substring(4, t.length))),
                      -1 === t.indexOf("xlink:href") &&
                        (t = t.replace(/href\s*=/g, "xlink:href=")),
                      (t = (t = (t = (t = (t = t.replace(
                        /<img\b([^>]*)>/gi,
                        "<image $1 />"
                      )).replace(
                        /\bdojoGfx\w*\s*=\s*(['"])\w*\1/g,
                        ""
                      )).replace(
                        /\b__gfxObject__\s*=\s*(['"])\w*\1/g,
                        ""
                      )).replace(/[=]([^"']+?)(\s|>)/g, '="$1"$2')).replace(
                        /\bstroke-opacity\w*\s*=\s*(['"])undefined\1/g,
                        ""
                      ))),
                    t
                  );
                }
              }),
              u
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2255: function(t, e, i) {
      t.exports = {
        reverseMatrix: function(t, e, i, r) {
          var n = i.l - i.r,
            a = r ? -1 : 1,
            s = 0,
            o = 0,
            h = 1,
            l = r ? e.width + n : 0,
            c = 0;
          t.matrix &&
            ((a *= Math.abs(t.matrix.xx)),
            (h = t.matrix.yy),
            (s = t.matrix.xy),
            (o = t.matrix.yx),
            (c = t.matrix.xy)),
            t.setTransform({ xx: a, xy: s, yx: o, yy: h, dx: l, dy: c });
        }
      };
    },
    2256: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(25),
        i(32),
        i(28),
        i(183),
        i(62),
        i(2142),
        i(2143),
        i(2072),
        i(2030),
        i(2022),
        i(2013),
        i.dj.h("dojo-bidi?2258")
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c, u, d) {
            var f = r(
              i("dojo-bidi")
                ? "dojox.charting.axis2d.NonBidiDefault"
                : "dojox.charting.axis2d.Default",
              s,
              {
                defaultParams: {
                  vertical: !1,
                  fixUpper: "none",
                  fixLower: "none",
                  natural: !1,
                  leftBottom: !0,
                  includeZero: !1,
                  fixed: !0,
                  majorLabels: !0,
                  minorTicks: !0,
                  minorLabels: !0,
                  microTicks: !1,
                  rotation: 0,
                  htmlLabels: !0,
                  enableCache: !1,
                  dropLabels: !0,
                  labelSizeChange: !1,
                  position: "leftOrBottom"
                },
                optionalParams: {
                  min: 0,
                  max: 1,
                  from: 0,
                  to: 1,
                  majorTickStep: 4,
                  minorTickStep: 2,
                  microTickStep: 1,
                  labels: [],
                  labelFunc: null,
                  maxLabelSize: 0,
                  maxLabelCharCount: 0,
                  trailingSymbol: null,
                  stroke: {},
                  majorTick: {},
                  minorTick: {},
                  microTick: {},
                  tick: {},
                  font: "",
                  fontColor: "",
                  title: "",
                  titleGap: 0,
                  titleFont: "",
                  titleFontColor: "",
                  titleOrientation: ""
                },
                constructor: function(e, i) {
                  (this.opt = t.clone(this.defaultParams)),
                    c.updateWithObject(this.opt, i),
                    c.updateWithPattern(this.opt, i, this.optionalParams),
                    this.opt.enableCache &&
                      ((this._textFreePool = []),
                      (this._lineFreePool = []),
                      (this._textUsePool = []),
                      (this._lineUsePool = [])),
                    (this._invalidMaxLabelSize = !0),
                    (i && "position" in i) ||
                      (this.opt.position = this.opt.leftBottom
                        ? "leftOrBottom"
                        : "rightOrTop"),
                    (this.renderingOptions = {
                      "shape-rendering": "crispEdges"
                    });
                },
                setWindow: function(t, e) {
                  return (
                    t != this.scale && (this._invalidMaxLabelSize = !0),
                    this.inherited(arguments)
                  );
                },
                _groupLabelWidth: function(e, i, r) {
                  if (!e.length) return 0;
                  e.length > 50 && (e.length = 50),
                    t.isObject(e[0]) &&
                      (e = u.map(e, function(t) {
                        return t.text;
                      })),
                    r &&
                      (e = u.map(
                        e,
                        function(e) {
                          return 0 == t.trim(e).length
                            ? ""
                            : e.substring(0, r) + this.trailingSymbol;
                        },
                        this
                      ));
                  var n = e.join("<br>");
                  return l._base._getTextBox(n, { font: i }).w || 0;
                },
                _getMaxLabelSize: function(i, r, n, a, s, h) {
                  if (null == this._maxLabelSize && 6 == arguments.length) {
                    var l = this.opt;
                    this.scaler.minMinorStep = this._prevMinMinorStep = 0;
                    var c = t.clone(l);
                    delete c.to, delete c.from;
                    var u = o.buildScaler(i, r, n, c, l.to - l.from);
                    (u.minMinorStep = 0), (this._majorStart = u.major.start);
                    var d = o.buildTicks(u, l);
                    if (h && d) {
                      var f = 0,
                        p = 0,
                        m = function(t) {
                          t.label && this.push(t.label);
                        },
                        x = [];
                      this.opt.majorLabels &&
                        (e.forEach(d.major, m, x),
                        (f = this._groupLabelWidth(x, s, c.maxLabelCharCount)),
                        c.maxLabelSize && (f = Math.min(c.maxLabelSize, f))),
                        (x = []),
                        this.opt.dropLabels &&
                          this.opt.minorLabels &&
                          (e.forEach(d.minor, m, x),
                          (p = this._groupLabelWidth(
                            x,
                            s,
                            c.maxLabelCharCount
                          )),
                          c.maxLabelSize && (p = Math.min(c.maxLabelSize, p))),
                        (this._maxLabelSize = {
                          majLabelW: f,
                          minLabelW: p,
                          majLabelH: h,
                          minLabelH: h
                        });
                    } else this._maxLabelSize = null;
                  }
                  return this._maxLabelSize;
                },
                calculate: function(t, e, i) {
                  if (
                    (this.inherited(arguments),
                    (this.scaler.minMinorStep = this._prevMinMinorStep),
                    (this._invalidMaxLabelSize || i != this._oldSpan) &&
                      t != 1 / 0 &&
                      e != -1 / 0)
                  ) {
                    (this._invalidMaxLabelSize = !1),
                      this.opt.labelSizeChange && (this._maxLabelSize = null),
                      (this._oldSpan = i);
                    var r = this.opt,
                      n = this.chart.theme.axis,
                      a = r.rotation % 360,
                      s = this.chart.theme.axis.tick.labelGap,
                      h =
                        r.font ||
                        (n.majorTick && n.majorTick.font) ||
                        (n.tick && n.tick.font),
                      c = h ? l.normalizedLength(l.splitFontString(h).size) : 0,
                      u = this._getMaxLabelSize(t, e, i, a, h, c);
                    if (("number" != typeof s && (s = 4), u && r.dropLabels)) {
                      var d,
                        f,
                        p = Math.abs(Math.cos((a * Math.PI) / 180)),
                        m = Math.abs(Math.sin((a * Math.PI) / 180));
                      switch ((a < 0 && (a += 360), a)) {
                        case 0:
                        case 180:
                          this.vertical
                            ? (d = f = c)
                            : ((d = u.majLabelW), (f = u.minLabelW));
                          break;
                        case 90:
                        case 270:
                          this.vertical
                            ? ((d = u.majLabelW), (f = u.minLabelW))
                            : (d = f = c);
                          break;
                        default:
                          d = this.vertical
                            ? Math.min(u.majLabelW, c / p)
                            : Math.min(u.majLabelW, c / m);
                          var x = Math.sqrt(u.minLabelW * u.minLabelW + c * c),
                            g = this.vertical
                              ? c * p + u.minLabelW * m
                              : u.minLabelW * p + c * m;
                          f = Math.min(x, g);
                      }
                      this.scaler.minMinorStep = this._prevMinMinorStep =
                        Math.max(d, f) + s;
                      var v =
                        this.scaler.minMinorStep <=
                        this.scaler.minor.tick * this.scaler.bounds.scale;
                      this._skipInterval = v
                        ? 0
                        : Math.floor(
                            (d + s) /
                              (this.scaler.major.tick *
                                this.scaler.bounds.scale)
                          );
                    } else this._skipInterval = 0;
                  }
                  return (
                    (this.ticks = o.buildTicks(this.scaler, this.opt)), this
                  );
                },
                getOffsets: function() {
                  var t = { l: 0, r: 0, t: 0, b: 0 };
                  if (!this.scaler) return t;
                  var e = this.opt,
                    i = this.chart.theme.axis,
                    r = this.chart.theme.axis.tick.labelGap,
                    n = e.titleFont || (i.title && i.title.font),
                    a =
                      0 == e.titleGap
                        ? 0
                        : e.titleGap || (i.title && i.title.gap),
                    s = this.chart.theme.getTick("major", e),
                    o = this.chart.theme.getTick("minor", e),
                    h = n ? l.normalizedLength(l.splitFontString(n).size) : 0,
                    c = e.rotation % 360,
                    u = e.position,
                    d = "rightOrTop" !== u,
                    f = Math.abs(Math.cos((c * Math.PI) / 180)),
                    p = Math.abs(Math.sin((c * Math.PI) / 180));
                  (this.trailingSymbol =
                    void 0 === e.trailingSymbol || null === e.trailingSymbol
                      ? this.trailingSymbol
                      : e.trailingSymbol),
                    "number" != typeof r && (r = 4),
                    c < 0 && (c += 360);
                  var m = this._getMaxLabelSize();
                  if (m) {
                    var x,
                      g = Math.ceil(Math.max(m.majLabelW, m.minLabelW)) + 1,
                      v = Math.ceil(Math.max(m.majLabelH, m.minLabelH)) + 1;
                    if (this.vertical) {
                      switch (((x = d ? "l" : "r"), c)) {
                        case 0:
                        case 180:
                          (t[x] = "center" === u ? 0 : g), (t.t = t.b = v / 2);
                          break;
                        case 90:
                        case 270:
                          (t[x] = v), (t.t = t.b = g / 2);
                          break;
                        default:
                          c <= 45 || (180 < c && c <= 225)
                            ? ((t[x] = (v * p) / 2 + g * f),
                              (t[d ? "t" : "b"] = (v * f) / 2 + g * p),
                              (t[d ? "b" : "t"] = (v * f) / 2))
                            : c > 315 || (180 > c && c > 135)
                              ? ((t[x] = (v * p) / 2 + g * f),
                                (t[d ? "b" : "t"] = (v * f) / 2 + g * p),
                                (t[d ? "t" : "b"] = (v * f) / 2))
                              : c < 90 || (180 < c && c < 270)
                                ? ((t[x] = v * p + g * f),
                                  (t[d ? "t" : "b"] = v * f + g * p))
                                : ((t[x] = v * p + g * f),
                                  (t[d ? "b" : "t"] = v * f + g * p));
                      }
                      "center" === u
                        ? (t[x] = 0)
                        : (t[x] +=
                            r +
                            Math.max(
                              s.length > 0 ? s.length : 0,
                              o.length > 0 ? o.length : 0
                            ) +
                            (e.title ? h + a : 0));
                    } else {
                      switch (((x = d ? "b" : "t"), c)) {
                        case 0:
                        case 180:
                          (t[x] = "center" === u ? 0 : v), (t.l = t.r = g / 2);
                          break;
                        case 90:
                        case 270:
                          (t[x] = g), (t.l = t.r = v / 2);
                          break;
                        default:
                          (45 <= c && c <= 90) || (225 <= c && c <= 270)
                            ? ((t[x] = (v * f) / 2 + g * p),
                              (t[d ? "r" : "l"] = (v * p) / 2 + g * f),
                              (t[d ? "l" : "r"] = (v * p) / 2))
                            : (90 <= c && c <= 135) || (270 <= c && c <= 315)
                              ? ((t[x] = (v * f) / 2 + g * p),
                                (t[d ? "l" : "r"] = (v * p) / 2 + g * f),
                                (t[d ? "r" : "l"] = (v * p) / 2))
                              : c < 45 || (180 < c && c < 225)
                                ? ((t[x] = v * f + g * p),
                                  (t[d ? "r" : "l"] = v * p + g * f))
                                : ((t[x] = v * f + g * p),
                                  (t[d ? "l" : "r"] = v * p + g * f));
                      }
                      "center" === u
                        ? (t[x] = 0)
                        : (t[x] +=
                            r +
                            Math.max(
                              s.length > 0 ? s.length : 0,
                              o.length > 0 ? o.length : 0
                            ) +
                            (e.title ? h + a : 0));
                    }
                  }
                  return t;
                },
                cleanGroup: function(t) {
                  this.opt.enableCache &&
                    this.group &&
                    ((this._lineFreePool = this._lineFreePool.concat(
                      this._lineUsePool
                    )),
                    (this._lineUsePool = []),
                    (this._textFreePool = this._textFreePool.concat(
                      this._textUsePool
                    )),
                    (this._textUsePool = [])),
                    this.inherited(arguments);
                },
                createText: function(t, e, i, r, n, a, s, o, l) {
                  return this.opt.enableCache && "html" != t
                    ? (this._textFreePool.length > 0
                        ? ((c = this._textFreePool.pop()).setShape({
                            x: i,
                            y: r,
                            text: a,
                            align: n
                          }),
                          e.add(c))
                        : (c = h.createText[t](
                            this.chart,
                            e,
                            i,
                            r,
                            n,
                            a,
                            s,
                            o
                          )),
                      this._textUsePool.push(c),
                      c)
                    : h.createText[t](this.chart, e, i, r, n, a, s, o, l);
                  var c;
                },
                createLine: function(t, e) {
                  var i;
                  return (
                    this.opt.enableCache && this._lineFreePool.length > 0
                      ? ((i = this._lineFreePool.pop()).setShape(e), t.add(i))
                      : (i = t.createLine(e)),
                    this.opt.enableCache && this._lineUsePool.push(i),
                    i
                  );
                },
                render: function(t, r) {
                  var n = this._isRtl();
                  if (!this.dirty || !this.scaler) return this;
                  var a,
                    s,
                    c,
                    u,
                    d,
                    f,
                    p,
                    m,
                    x,
                    g = this.opt,
                    v = this.chart.theme.axis,
                    y = g.position,
                    b = "rightOrTop" !== y,
                    _ = g.rotation % 360,
                    k = 0,
                    w = this.chart.theme.axis.tick.labelGap,
                    S =
                      g.font ||
                      (v.majorTick && v.majorTick.font) ||
                      (v.tick && v.tick.font),
                    M = g.titleFont || (v.title && v.title.font),
                    P =
                      g.fontColor ||
                      (v.majorTick && v.majorTick.fontColor) ||
                      (v.tick && v.tick.fontColor) ||
                      "black",
                    T =
                      g.titleFontColor ||
                      (v.title && v.title.fontColor) ||
                      "black",
                    A =
                      0 == g.titleGap
                        ? 0
                        : g.titleGap || (v.title && v.title.gap) || 15,
                    j =
                      g.titleOrientation ||
                      (v.title && v.title.orientation) ||
                      "axis",
                    C = this.chart.theme.getTick("major", g),
                    N = this.chart.theme.getTick("minor", g),
                    F = this.chart.theme.getTick("micro", g),
                    L = "stroke" in g ? g.stroke : v.stroke,
                    E = S ? l.normalizedLength(l.splitFontString(S).size) : 0,
                    O = Math.abs(Math.cos((_ * Math.PI) / 180)),
                    I = Math.abs(Math.sin((_ * Math.PI) / 180)),
                    R = M ? l.normalizedLength(l.splitFontString(M).size) : 0;
                  "number" != typeof w && (w = 4), _ < 0 && (_ += 360);
                  var z = this._getMaxLabelSize();
                  if (((z = z && z.majLabelW), this.vertical)) {
                    switch (
                      ((a = { y: t.height - r.b }),
                      (s = { y: r.t }),
                      (c = { y: (t.height - r.b + r.t) / 2 }),
                      (u =
                        E * I +
                        (z || 0) * O +
                        w +
                        Math.max(
                          C.length > 0 ? C.length : 0,
                          N.length > 0 ? N.length : 0
                        ) +
                        R +
                        A),
                      (d = { x: 0, y: -1 }),
                      (m = { x: 0, y: 0 }),
                      (f = { x: 1, y: 0 }),
                      (p = { x: w, y: 0 }),
                      _)
                    ) {
                      case 0:
                        (x = "end"), (m.y = 0.4 * E);
                        break;
                      case 90:
                        (x = "middle"), (m.x = -E);
                        break;
                      case 180:
                        (x = "start"), (m.y = 0.4 * -E);
                        break;
                      case 270:
                        x = "middle";
                        break;
                      default:
                        _ < 45
                          ? ((x = "end"), (m.y = 0.4 * E))
                          : _ < 90
                            ? ((x = "end"), (m.y = 0.4 * E))
                            : _ < 135
                              ? (x = "start")
                              : _ < 225
                                ? ((x = "start"), (m.y = 0.4 * -E))
                                : _ < 270
                                  ? ((x = "start"), (m.x = b ? 0 : 0.4 * E))
                                  : _ < 315
                                    ? ((x = "end"), (m.x = b ? 0 : 0.4 * E))
                                    : ((x = "end"), (m.y = 0.4 * E));
                    }
                    if (b)
                      (a.x = s.x = "center" === y ? t.width / 2 : r.l),
                        (k = j && "away" == j ? 90 : 270),
                        (c.x = r.l - u + (270 == k ? R : 0)),
                        (f.x = -1),
                        (p.x = -p.x);
                    else
                      switch (
                        ((a.x = s.x = t.width - r.r),
                        (k = j && "axis" == j ? 90 : 270),
                        (c.x = t.width - r.r + u - (270 == k ? 0 : R)),
                        x)
                      ) {
                        case "start":
                          x = "end";
                          break;
                        case "end":
                          x = "start";
                          break;
                        case "middle":
                          m.x += E;
                      }
                  } else {
                    switch (
                      ((a = { x: r.l }),
                      (s = { x: t.width - r.r }),
                      (c = { x: (t.width - r.r + r.l) / 2 }),
                      (u =
                        E * O +
                        (z || 0) * I +
                        w +
                        Math.max(
                          C.length > 0 ? C.length : 0,
                          N.length > 0 ? N.length : 0
                        ) +
                        R +
                        A),
                      (d = { x: n ? -1 : 1, y: 0 }),
                      (m = { x: 0, y: 0 }),
                      (f = { x: 0, y: 1 }),
                      (p = { x: 0, y: w }),
                      _)
                    ) {
                      case 0:
                        (x = "middle"), (m.y = E);
                        break;
                      case 90:
                        (x = "start"), (m.x = 0.4 * -E);
                        break;
                      case 180:
                        x = "middle";
                        break;
                      case 270:
                        (x = "end"), (m.x = 0.4 * E);
                        break;
                      default:
                        _ < 45
                          ? ((x = "start"), (m.y = b ? E : 0))
                          : _ < 135
                            ? ((x = "start"), (m.x = 0.4 * -E))
                            : _ < 180
                              ? ((x = "start"), (m.y = b ? 0 : -E))
                              : _ < 225
                                ? ((x = "end"), (m.y = b ? 0 : -E))
                                : _ < 315
                                  ? ((x = "end"), (m.y = b ? 0.4 * E : 0))
                                  : ((x = "end"), (m.y = b ? E : 0));
                    }
                    if (b)
                      (a.y = s.y =
                        "center" === y ? t.height / 2 : t.height - r.b),
                        (k = j && "axis" == j ? 180 : 0),
                        (c.y = t.height - r.b + u - (k ? R : 0));
                    else
                      switch (
                        ((a.y = s.y = r.t),
                        (k = j && "away" == j ? 180 : 0),
                        (c.y = r.t - u + (k ? 0 : R)),
                        (f.y = -1),
                        (p.y = -p.y),
                        x)
                      ) {
                        case "start":
                          x = "end";
                          break;
                        case "end":
                          x = "start";
                          break;
                        case "middle":
                          m.y -= E;
                      }
                  }
                  this.cleanGroup();
                  var G = this.group,
                    B = this.scaler,
                    D = this.ticks,
                    W = o.getTransformerFromModel(this.scaler),
                    V =
                      (g.title && k) ||
                      _ ||
                      !this.opt.htmlLabels ||
                      i("ie") ||
                      i("opera")
                        ? "gfx"
                        : "html",
                    U = f.x * C.length,
                    q = f.y * C.length,
                    H = this._skipInterval;
                  if (
                    (G.createLine({
                      x1: a.x,
                      y1: a.y,
                      x2: s.x,
                      y2: s.y
                    }).setStroke(L),
                    g.title)
                  ) {
                    var Y = h.createText[V](
                      this.chart,
                      G,
                      c.x,
                      c.y,
                      "middle",
                      g.title,
                      M,
                      T
                    );
                    "html" == V
                      ? this.htmlElements.push(Y)
                      : Y.setTransform(l.matrix.rotategAt(k, c.x, c.y));
                  }
                  if (null == D) return (this.dirty = !1), this;
                  var X =
                      D.major.length > 0
                        ? (D.major[0].value - this._majorStart) / B.major.tick
                        : 0,
                    Z = this.opt.majorLabels;
                  return (
                    e.forEach(
                      D.major,
                      function(t, e) {
                        var i,
                          r = W(t.value),
                          o = (n ? s.x : a.x) + d.x * r,
                          h = a.y + d.y * r;
                        if (
                          ((e += X),
                          this.createLine(G, {
                            x1: o,
                            y1: h,
                            x2: o + U,
                            y2: h + q
                          }).setStroke(C),
                          t.label && (!H || (e - (1 + H)) % (1 + H) == 0))
                        ) {
                          var c = g.maxLabelCharCount
                            ? this.getTextWithLimitCharCount(
                                t.label,
                                S,
                                g.maxLabelCharCount
                              )
                            : { text: t.label, truncated: !1 };
                          (c = g.maxLabelSize
                            ? this.getTextWithLimitLength(
                                c.text,
                                S,
                                g.maxLabelSize,
                                c.truncated
                              )
                            : c),
                            (i = this.createText(
                              V,
                              G,
                              o + (C.length > 0 ? U : 0) + p.x + (_ ? 0 : m.x),
                              h + (C.length > 0 ? q : 0) + p.y + (_ ? 0 : m.y),
                              x,
                              c.text,
                              S,
                              P
                            )),
                            c.truncated &&
                              this.chart.formatTruncatedLabel(i, t.label, V),
                            c.truncated &&
                              this.labelTooltip(
                                i,
                                this.chart,
                                t.label,
                                c.text,
                                S,
                                V
                              ),
                            "html" == V
                              ? this.htmlElements.push(i)
                              : _ &&
                                i.setTransform([
                                  { dx: m.x, dy: m.y },
                                  l.matrix.rotategAt(
                                    _,
                                    o + (C.length > 0 ? U : 0) + p.x,
                                    h + (C.length > 0 ? q : 0) + p.y
                                  )
                                ]);
                        }
                      },
                      this
                    ),
                    (U = f.x * N.length),
                    (q = f.y * N.length),
                    (Z =
                      this.opt.minorLabels &&
                      B.minMinorStep <= B.minor.tick * B.bounds.scale),
                    e.forEach(
                      D.minor,
                      function(t) {
                        var e,
                          i = W(t.value),
                          r = (n ? s.x : a.x) + d.x * i,
                          o = a.y + d.y * i;
                        if (
                          (this.createLine(G, {
                            x1: r,
                            y1: o,
                            x2: r + U,
                            y2: o + q
                          }).setStroke(N),
                          Z && t.label)
                        ) {
                          var h = g.maxLabelCharCount
                            ? this.getTextWithLimitCharCount(
                                t.label,
                                S,
                                g.maxLabelCharCount
                              )
                            : { text: t.label, truncated: !1 };
                          (h = g.maxLabelSize
                            ? this.getTextWithLimitLength(
                                h.text,
                                S,
                                g.maxLabelSize,
                                h.truncated
                              )
                            : h),
                            (e = this.createText(
                              V,
                              G,
                              r + (N.length > 0 ? U : 0) + p.x + (_ ? 0 : m.x),
                              o + (N.length > 0 ? q : 0) + p.y + (_ ? 0 : m.y),
                              x,
                              h.text,
                              S,
                              P
                            )),
                            h.truncated &&
                              this.chart.formatTruncatedLabel(e, t.label, V),
                            h.truncated &&
                              this.labelTooltip(
                                e,
                                this.chart,
                                t.label,
                                h.text,
                                S,
                                V
                              ),
                            "html" == V
                              ? this.htmlElements.push(e)
                              : _ &&
                                e.setTransform([
                                  { dx: m.x, dy: m.y },
                                  l.matrix.rotategAt(
                                    _,
                                    r + (N.length > 0 ? U : 0) + p.x,
                                    o + (N.length > 0 ? q : 0) + p.y
                                  )
                                ]);
                        }
                      },
                      this
                    ),
                    (U = f.x * F.length),
                    (q = f.y * F.length),
                    e.forEach(
                      D.micro,
                      function(t) {
                        var e = W(t.value),
                          i = a.x + d.x * e,
                          r = a.y + d.y * e;
                        this.createLine(G, {
                          x1: i,
                          y1: r,
                          x2: i + U,
                          y2: r + q
                        }).setStroke(F);
                      },
                      this
                    ),
                    (this.dirty = !1),
                    this
                  );
                },
                labelTooltip: function(e, i, r, s, o, h) {
                  var c = ["dijit/Tooltip"],
                    u = { type: "rect" },
                    d = ["above", "below"],
                    f = l._base._getTextBox(s, { font: o }).w || 0,
                    p = o ? l.normalizedLength(l.splitFontString(o).size) : 0;
                  if ("html" == h)
                    t.mixin(u, a.position(e.firstChild, !0)),
                      (u.width = Math.ceil(f)),
                      (u.height = Math.ceil(p)),
                      this._events.push({
                        shape: dojo,
                        handle: n.connect(
                          e.firstChild,
                          "onmouseover",
                          this,
                          function(t) {
                            require(c, function(t) {
                              t.show(r, u, d);
                            });
                          }
                        )
                      }),
                      this._events.push({
                        shape: dojo,
                        handle: n.connect(
                          e.firstChild,
                          "onmouseout",
                          this,
                          function(t) {
                            require(c, function(t) {
                              t.hide(u);
                            });
                          }
                        )
                      });
                  else {
                    var m = e.getShape(),
                      x = i.getCoords();
                    ((u = t.mixin(u, { x: m.x - f / 2, y: m.y })).x += x.x),
                      (u.y += x.y),
                      (u.x = Math.round(u.x)),
                      (u.y = Math.round(u.y)),
                      (u.width = Math.ceil(f)),
                      (u.height = Math.ceil(p)),
                      this._events.push({
                        shape: e,
                        handle: e.connect(
                          "onmouseenter",
                          this,
                          function(t) {
                            require(c, function(t) {
                              t.show(r, u, d);
                            });
                          }
                        )
                      }),
                      this._events.push({
                        shape: e,
                        handle: e.connect(
                          "onmouseleave",
                          this,
                          function(t) {
                            require(c, function(t) {
                              t.hide(u);
                            });
                          }
                        )
                      });
                  }
                },
                _isRtl: function() {
                  return !1;
                }
              }
            );
            return i("dojo-bidi")
              ? r("dojox.charting.axis2d.Default", [f, d])
              : f;
          }.apply(null, r)) || (t.exports = n);
    },
    2257: function(t, e, i) {
      var r, n;
      (r = [i(28), i(2080)]),
        void 0 ===
          (n = function(t, e) {
            return t("dojox.charting.axis2d.Base", e, {
              constructor: function(t, e) {
                (this.vertical = e && e.vertical),
                  (this.opt = {}),
                  (this.opt.min = e && e.min),
                  (this.opt.max = e && e.max);
              },
              clear: function() {
                return this;
              },
              initialized: function() {
                return !1;
              },
              calculate: function(t, e, i) {
                return this;
              },
              getScaler: function() {
                return null;
              },
              getTicks: function() {
                return null;
              },
              getOffsets: function() {
                return { l: 0, r: 0, t: 0, b: 0 };
              },
              render: function(t, e) {
                return (this.dirty = !1), this;
              },
              isNullValue: function(t) {
                return !1;
              },
              naturalBaseline: 0
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2258: function(t, e, i) {
      var r, n;
      (r = [i(28), i(47)]),
        void 0 ===
          (n = function(t, e) {
            return t(null, {
              labelTooltip: function(t, i, r, n, a, s) {
                var o = "rtl" == e.get(i.node, "direction"),
                  h = "rtl" == i.getTextDir(r);
                h && !o && (r = "<span dir='rtl'>" + r + "</span>"),
                  !h && o && (r = "<span dir='ltr'>" + r + "</span>"),
                  this.inherited(arguments);
              },
              _isRtl: function() {
                return this.chart.isRightToLeft();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2259: function(t, e, i) {
      var r, n;
      (r = [i(28), i(2055)]),
        void 0 ===
          (n = function(t, e) {
            return t("dojox.charting.plot2d.Lines", e, {
              constructor: function() {
                this.opt.lines = !0;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2260: function(t, e, i) {
      var r, n;
      (r = [i(28), i(2055)]),
        void 0 ===
          (n = function(t, e) {
            return t("dojox.charting.plot2d.Areas", e, {
              constructor: function() {
                (this.opt.lines = !0), (this.opt.areas = !0);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2261: function(t, e, i) {
      var r, n;
      (r = [i(28), i(2055)]),
        void 0 ===
          (n = function(t, e) {
            return t("dojox.charting.plot2d.Markers", e, {
              constructor: function() {
                this.opt.markers = !0;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2262: function(t, e, i) {
      var r, n;
      (r = [i(28), i(2055)]),
        void 0 ===
          (n = function(t, e) {
            return t("dojox.charting.plot2d.MarkersOnly", e, {
              constructor: function() {
                (this.opt.lines = !1), (this.opt.markers = !0);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2263: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(25),
        i(28),
        i(15),
        i(2040),
        i(2036),
        i(2021),
        i(2013),
        i(2041),
        i(2022),
        i(2031),
        i(2140)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c, u) {
            var d = h.lambda("item.purgeGroup()");
            return i("dojox.charting.plot2d.Scatter", [n, a], {
              defaultParams: { shadows: null, animate: null },
              optionalParams: {
                markerStroke: {},
                markerOutline: {},
                markerShadow: {},
                markerFill: {},
                markerFont: "",
                markerFontColor: "",
                styleFunc: null
              },
              constructor: function(e, i) {
                (this.opt = t.clone(t.mixin(this.opt, this.defaultParams))),
                  l.updateWithObject(this.opt, i),
                  l.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.animate = this.opt.animate);
              },
              render: function(t, i) {
                if (this.zoom && !this.isDataDirty())
                  return this.performZoom(t, i);
                var n;
                this.resetEvents(),
                  (this.dirty = this.isDirty()),
                  this.dirty &&
                    (e.forEach(this.series, d),
                    (this._eventSeries = {}),
                    this.cleanGroup(),
                    (n = this.getGroup()),
                    o.forEachRev(this.series, function(t) {
                      t.cleanGroup(n);
                    }));
                for (
                  var a = this.chart.theme, h = this.events(), l = 0;
                  l < this.series.length;
                  l++
                ) {
                  var c = this.series[l];
                  if (this.dirty || c.dirty)
                    if ((c.cleanGroup(), c.data.length)) {
                      var f,
                        p = a.next("marker", [this.opt, c]),
                        m = this._hScaler.scaler.getTransformerFromModel(
                          this._hScaler
                        ),
                        x = this._vScaler.scaler.getTransformerFromModel(
                          this._vScaler
                        );
                      if (c.hidden)
                        (c.dyn.marker = p.symbol),
                          (c.dyn.markerFill = p.marker.fill),
                          (c.dyn.markerStroke = p.marker.stroke);
                      else {
                        (n = c.group),
                          (f =
                            "number" == typeof c.data[0]
                              ? e.map(
                                  c.data,
                                  function(e, r) {
                                    return {
                                      x: m(r + 1) + i.l,
                                      y: t.height - i.b - x(e)
                                    };
                                  },
                                  this
                                )
                              : e.map(
                                  c.data,
                                  function(e, r) {
                                    return {
                                      x: m(e.x) + i.l,
                                      y: t.height - i.b - x(e.y)
                                    };
                                  },
                                  this
                                ));
                        var g = new Array(f.length),
                          v = new Array(f.length),
                          y = new Array(f.length);
                        if (
                          (e.forEach(
                            f,
                            function(e, r) {
                              var o,
                                h = c.data[r];
                              if (this.opt.styleFunc || "number" != typeof h) {
                                var l = "number" != typeof h ? [h] : [];
                                this.opt.styleFunc &&
                                  l.push(this.opt.styleFunc(h)),
                                  (o = a.addMixin(p, "marker", l, !0));
                              } else o = a.post(p, "marker");
                              var d = "M" + e.x + " " + e.y + " " + o.symbol;
                              if (
                                (o.marker.shadow &&
                                  ((g[r] = n
                                    .createPath(
                                      "M" +
                                        (e.x + o.marker.shadow.dx) +
                                        " " +
                                        (e.y + o.marker.shadow.dy) +
                                        " " +
                                        o.symbol
                                    )
                                    .setStroke(o.marker.shadow)
                                    .setFill(o.marker.shadow.color)),
                                  this.animate &&
                                    this._animateScatter(g[r], t.height - i.b)),
                                o.marker.outline)
                              ) {
                                var f = s.makeStroke(o.marker.outline);
                                (f.width =
                                  2 * f.width +
                                  ((o.marker.stroke && o.marker.stroke.width) ||
                                    0)),
                                  (y[r] = n.createPath(d).setStroke(f)),
                                  this.animate &&
                                    this._animateScatter(y[r], t.height - i.b);
                              }
                              var m = s.makeStroke(o.marker.stroke),
                                x = this._plotFill(o.marker.fill, t, i);
                              if (
                                !x ||
                                ("linear" !== x.type && "radial" != x.type)
                              )
                                v[r] = n
                                  .createPath(d)
                                  .setStroke(m)
                                  .setFill(x);
                              else {
                                var b = u.getColor(x, { x: e.x, y: e.y });
                                m && (m.color = b),
                                  (v[r] = n
                                    .createPath(d)
                                    .setStroke(m)
                                    .setFill(b));
                              }
                              if (this.opt.labels) {
                                var _ = v[r].getBoundingBox();
                                this.createLabel(n, h, _, o);
                              }
                              this.animate &&
                                this._animateScatter(v[r], t.height - i.b);
                            },
                            this
                          ),
                          v.length &&
                            ((c.dyn.marker = p.symbol),
                            (c.dyn.markerStroke = v[v.length - 1].getStroke()),
                            (c.dyn.markerFill = v[v.length - 1].getFill())),
                          h)
                        ) {
                          var b = new Array(v.length);
                          e.forEach(
                            v,
                            function(t, e) {
                              var i = {
                                element: "marker",
                                index: e,
                                run: c,
                                shape: t,
                                outline: (y && y[e]) || null,
                                shadow: (g && g[e]) || null,
                                cx: f[e].x,
                                cy: f[e].y
                              };
                              "number" == typeof c.data[0]
                                ? ((i.x = e + 1), (i.y = c.data[e]))
                                : ((i.x = c.data[e].x), (i.y = c.data[e].y)),
                                this._connectEvents(i),
                                (b[e] = i);
                            },
                            this
                          ),
                            (this._eventSeries[c.name] = b);
                        } else delete this._eventSeries[c.name];
                        c.dirty = !1;
                      }
                    } else (c.dirty = !1), a.skip();
                  else a.skip(), this._reconnectEvents(c.name);
                }
                return (
                  (this.dirty = !1),
                  r("dojo-bidi") && this._checkOrientation(this.group, t, i),
                  this
                );
              },
              _animateScatter: function(e, i) {
                c.animateTransform(
                  t.delegate(
                    {
                      shape: e,
                      duration: 1200,
                      transform: [
                        { name: "translate", start: [0, i], end: [0, 0] },
                        { name: "scale", start: [0, 0], end: [1, 1] },
                        { name: "original" }
                      ]
                    },
                    this.animate
                  )
                ).play();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2264: function(t, e, i) {
      var r, n;
      (r = [i(28), i(2106)]),
        void 0 ===
          (n = function(t, e) {
            return t("dojox.charting.plot2d.StackedLines", e, {
              constructor: function() {
                this.opt.lines = !0;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2265: function(t, e, i) {
      var r, n;
      (r = [i(28), i(12), i(2109), i(2108)]),
        void 0 ===
          (n = function(t, e, i, r) {
            return t("dojox.charting.plot2d.StackedColumns", i, {
              getSeriesStats: function() {
                var t = r.collectStats(
                  this.series,
                  e.hitch(this, "isNullValue")
                );
                return (t.hmin -= 0.5), (t.hmax += 0.5), t;
              },
              rearrangeValues: function(t, e, i) {
                return r.rearrangeValues.call(this, t, e, i);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2266: function(t, e, i) {
      var r, n;
      (r = [i(28), i(25), i(2109), i(2021)]),
        void 0 ===
          (n = function(t, e, i, r) {
            return t("dojox.charting.plot2d.ClusteredColumns", i, {
              getBarProperties: function() {
                var t = this.series.length;
                e.forEach(this.series, function(e) {
                  e.hidden && t--;
                });
                var i = r.calculateBarSize(
                  this._hScaler.bounds.scale,
                  this.opt,
                  t
                );
                return {
                  gap: i.gap,
                  width: i.size,
                  thickness: i.size,
                  clusterSize: t
                };
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2267: function(t, e, i) {
      var r, n;
      (r = [i(28), i(12), i(2110), i(2108)]),
        void 0 ===
          (n = function(t, e, i, r) {
            return t("dojox.charting.plot2d.StackedBars", i, {
              getSeriesStats: function() {
                var t,
                  i = r.collectStats(this.series, e.hitch(this, "isNullValue"));
                return (
                  (i.hmin -= 0.5),
                  (i.hmax += 0.5),
                  (t = i.hmin),
                  (i.hmin = i.vmin),
                  (i.vmin = t),
                  (t = i.hmax),
                  (i.hmax = i.vmax),
                  (i.vmax = t),
                  i
                );
              },
              rearrangeValues: function(t, e, i) {
                return r.rearrangeValues.call(this, t, e, i);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2268: function(t, e, i) {
      var r, n;
      (r = [i(28), i(25), i(2110), i(2021)]),
        void 0 ===
          (n = function(t, e, i, r) {
            return t("dojox.charting.plot2d.ClusteredBars", i, {
              getBarProperties: function() {
                var t = this.series.length;
                e.forEach(this.series, function(e) {
                  e.hidden && t--;
                });
                var i = r.calculateBarSize(
                  this._vScaler.bounds.scale,
                  this.opt,
                  t
                );
                return { gap: i.gap, height: i.size, thickness: i.size };
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2269: function(t, e, i) {
      var r, n;
      (r = [i(12), i(28), i(25), i(32), i(2040), i(2021), i(2022), i(2031)]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o) {
            var h = function(t, e) {
              return t.value - e.value;
            };
            return e("dojox.charting.plot2d.Grid", n, {
              defaultParams: {
                hMajorLines: !0,
                hMinorLines: !1,
                vMajorLines: !0,
                vMinorLines: !1,
                hStripes: !1,
                vStripes: !1,
                animate: null,
                enableCache: !1,
                renderOnAxis: !0
              },
              optionalParams: {
                majorHLine: {},
                minorHLine: {},
                majorVLine: {},
                minorVLine: {},
                hFill: {},
                vFill: {},
                hAlternateFill: {},
                vAlternateFill: {}
              },
              constructor: function(e, i) {
                (this.opt = t.clone(this.defaultParams)),
                  s.updateWithObject(this.opt, i),
                  s.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.animate = this.opt.animate),
                  this.opt.enableCache &&
                    ((this._lineFreePool = []),
                    (this._lineUsePool = []),
                    (this._rectFreePool = []),
                    (this._rectUsePool = []));
              },
              addSeries: function(t) {
                return this;
              },
              getSeriesStats: function() {
                return t.delegate(a.defaultStats);
              },
              cleanGroup: function() {
                this.inherited(arguments),
                  this.opt.enableCache &&
                    ((this._lineFreePool = this._lineFreePool.concat(
                      this._lineUsePool
                    )),
                    (this._lineUsePool = []),
                    (this._rectFreePool = this._rectFreePool.concat(
                      this._rectUsePool
                    )),
                    (this._rectUsePool = []));
              },
              createLine: function(t, e) {
                var i;
                return (
                  this.opt.enableCache && this._lineFreePool.length > 0
                    ? ((i = this._lineFreePool.pop()).setShape(e), t.add(i))
                    : (i = t.createLine(e)),
                  this.opt.enableCache && this._lineUsePool.push(i),
                  i
                );
              },
              createRect: function(t, e) {
                var i;
                return (
                  this.opt.enableCache && this._rectFreePool.length > 0
                    ? ((i = this._rectFreePool.pop()).setShape(e), t.add(i))
                    : (i = t.createRect(e)),
                  this.opt.enableCache && this._rectUsePool.push(i),
                  i
                );
              },
              render: function(t, e) {
                if (this.zoom) return this.performZoom(t, e);
                if (((this.dirty = this.isDirty()), !this.dirty)) return this;
                this.cleanGroup();
                var i,
                  n,
                  a = this.getGroup(),
                  s = this.chart.theme;
                if (
                  (r("ios") && r("ios") < 6) ||
                  r("android") ||
                  (r("safari") && !r("ios"))
                ) {
                  var o = Math.max(0, t.width - e.l - e.r),
                    h = Math.max(0, t.height - e.t - e.b);
                  a.createRect({ x: e.l, y: e.t, width: o, height: h });
                }
                if (this._vAxis) {
                  n = this._vAxis.getTicks();
                  var l = this._vAxis.getScaler();
                  if (null != n && null != l) {
                    var c = l.scaler.getTransformerFromModel(l);
                    this.opt.hStripes &&
                      this._renderHRect(n, s.grid, t, e, l, c),
                      this.opt.hMinorLines &&
                        ((i =
                          this.opt.minorHLine ||
                          (s.grid && s.grid.minorLine) ||
                          s.axis.minorTick),
                        this._renderHLines(n.minor, i, t, e, l, c)),
                      this.opt.hMajorLines &&
                        ((i =
                          this.opt.majorHLine ||
                          (s.grid && s.grid.majorLine) ||
                          s.axis.majorTick),
                        this._renderHLines(n.major, i, t, e, l, c));
                  }
                }
                if (this._hAxis) {
                  n = this._hAxis.getTicks();
                  var u = this._hAxis.getScaler();
                  if (null != n && null != u) {
                    var d = u.scaler.getTransformerFromModel(u);
                    this.opt.vStripes &&
                      this._renderVRect(n, s.grid, t, e, u, d),
                      n &&
                        this.opt.vMinorLines &&
                        ((i =
                          this.opt.minorVLine ||
                          (s.grid && s.grid.minorLine) ||
                          s.axis.minorTick),
                        this._renderVLines(n.minor, i, t, e, u, d)),
                      n &&
                        this.opt.vMajorLines &&
                        ((i =
                          this.opt.majorVLine ||
                          (s.grid && s.grid.majorLine) ||
                          s.axis.majorTick),
                        this._renderVLines(n.major, i, t, e, u, d));
                  }
                }
                return (this.dirty = !1), this;
              },
              _renderHLines: function(t, e, r, n, a, s) {
                var o = this.getGroup();
                i.forEach(
                  t,
                  function(t) {
                    if (
                      this.opt.renderOnAxis ||
                      t.value !=
                        (this._vAxis.opt.leftBottom
                          ? a.bounds.from
                          : a.bounds.to)
                    ) {
                      var i = r.height - n.b - s(t.value),
                        h = this.createLine(o, {
                          x1: n.l,
                          y1: i,
                          x2: r.width - n.r,
                          y2: i
                        }).setStroke(e);
                      this.animate &&
                        this._animateGrid(h, "h", n.l, n.r + n.l - r.width);
                    }
                  },
                  this
                );
              },
              _renderVLines: function(t, e, r, n, a, s) {
                var o = this.getGroup();
                i.forEach(
                  t,
                  function(t) {
                    if (
                      this.opt.renderOnAxis ||
                      t.value !=
                        (this._hAxis.opt.leftBottom
                          ? a.bounds.from
                          : a.bounds.to)
                    ) {
                      var i = n.l + s(t.value),
                        h = this.createLine(o, {
                          x1: i,
                          y1: n.t,
                          x2: i,
                          y2: r.height - n.b
                        }).setStroke(e);
                      this.animate &&
                        this._animateGrid(
                          h,
                          "v",
                          r.height - n.b,
                          r.height - n.b - n.t
                        );
                    }
                  },
                  this
                );
              },
              _renderHRect: function(t, e, i, r, n, a) {
                var s,
                  o,
                  l,
                  c,
                  u,
                  d = t.major.concat(t.minor);
                d.sort(h),
                  d[0].value > n.bounds.from &&
                    d.splice(0, 0, { value: n.bounds.from }),
                  d[d.length - 1].value < n.bounds.to &&
                    d.push({ value: n.bounds.to });
                for (var f = this.getGroup(), p = 0; p < d.length - 1; p++)
                  (o = d[p]),
                    (l = i.height - r.b - a(o.value)),
                    (c = i.height - r.b - a(d[p + 1].value)),
                    (s =
                      p % 2 == 0
                        ? this.opt.hAlternateFill || (e && e.alternateFill)
                        : this.opt.hFill || (e && e.fill)) &&
                      ((u = this.createRect(f, {
                        x: r.l,
                        y: l,
                        width: i.width - r.r,
                        height: l - c
                      }).setFill(s)),
                      this.animate &&
                        this._animateGrid(u, "h", r.l, r.r + r.l - i.width));
              },
              _renderVRect: function(t, e, i, r, n, a) {
                var s,
                  o,
                  l,
                  c,
                  u,
                  d = t.major.concat(t.minor);
                d.sort(h),
                  d[0].value > n.bounds.from &&
                    d.splice(0, 0, { value: n.bounds.from }),
                  d[d.length - 1].value < n.bounds.to &&
                    d.push({ value: n.bounds.to });
                for (var f = this.getGroup(), p = 0; p < d.length - 1; p++)
                  (o = d[p]),
                    (l = r.l + a(o.value)),
                    (c = r.l + a(d[p + 1].value)),
                    (s =
                      p % 2 == 0
                        ? this.opt.vAlternateFill || (e && e.alternateFill)
                        : this.opt.vFill || (e && e.fill)) &&
                      ((u = this.createRect(f, {
                        x: l,
                        y: r.t,
                        width: c - l,
                        height: i.width - r.r
                      }).setFill(s)),
                      this.animate &&
                        this._animateGrid(
                          u,
                          "v",
                          i.height - r.b,
                          i.height - r.b - r.t
                        ));
              },
              _animateGrid: function(e, i, r, n) {
                var a = "h" == i ? [r, 0] : [0, r],
                  s = "h" == i ? [1 / n, 1] : [1, 1 / n];
                o.animateTransform(
                  t.delegate(
                    {
                      shape: e,
                      duration: 1200,
                      transform: [
                        { name: "translate", start: a, end: [0, 0] },
                        { name: "scale", start: s, end: [1, 1] },
                        { name: "original" }
                      ]
                    },
                    this.animate
                  )
                ).play();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2270: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(25),
        i(28),
        i(62),
        i(182),
        i(2107),
        i(2036),
        i(2021),
        i(2030),
        i(156),
        i(2013),
        i(2022),
        i(15)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c, u, d) {
            return i("dojox.charting.plot2d.Pie", [a, s], {
              defaultParams: {
                labels: !0,
                ticks: !1,
                fixed: !0,
                precision: 1,
                labelOffset: 20,
                labelStyle: "default",
                htmlLabels: !0,
                radGrad: "native",
                fanSize: 5,
                startAngle: 0,
                innerRadius: 0,
                minWidth: 0,
                zeroDataMessage: ""
              },
              optionalParams: {
                radius: 0,
                omitLabels: !1,
                stroke: {},
                outline: {},
                shadow: {},
                fill: {},
                filter: {},
                styleFunc: null,
                font: "",
                fontColor: "",
                labelWiring: {}
              },
              constructor: function(e, i) {
                (this.opt = t.clone(this.defaultParams)),
                  u.updateWithObject(this.opt, i),
                  u.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.axes = []),
                  (this.run = null),
                  (this.dyn = []),
                  (this.runFilter = []),
                  i &&
                    i.hasOwnProperty("innerRadius") &&
                    (this._plotSetInnerRadius = !0);
              },
              clear: function() {
                return (
                  this.inherited(arguments),
                  (this.dyn = []),
                  (this.run = null),
                  this
                );
              },
              setAxis: function(t) {
                return this;
              },
              addSeries: function(t) {
                return (this.run = t), this;
              },
              getSeriesStats: function() {
                return t.delegate(o.defaultStats);
              },
              getRequiredColors: function() {
                return this.run ? this.run.data.length : 0;
              },
              render: function(i, a) {
                if (!this.dirty) return this;
                this.resetEvents(),
                  (this.dirty = !1),
                  (this._eventSeries = {}),
                  this.cleanGroup();
                var s = this.group,
                  o = this.chart.theme;
                !this._plotSetInnerRadius &&
                  o &&
                  o.pieInnerRadius &&
                  (this.opt.innerRadius = o.pieInnerRadius);
                var u,
                  f,
                  p,
                  m,
                  x,
                  g = (i.width - a.l - a.r) / 2,
                  v = (i.height - a.t - a.b) / 2,
                  y = Math.min(g, v),
                  b =
                    "font" in this.opt
                      ? this.opt.font
                      : o.axis.tick.titleFont || "",
                  _ = b ? h.normalizedLength(h.splitFontString(b).size) : 0,
                  k = this.opt.hasOwnProperty("fontColor")
                    ? this.opt.fontColor
                    : o.axis.tick.fontColor,
                  w = l._degToRad(this.opt.startAngle),
                  S = w,
                  M = this.run.data,
                  P = this.events(),
                  T = t.hitch(this, function() {
                    var t = o.clone(),
                      r = c.map(
                        M,
                        function(e) {
                          var i = [this.opt, this.run];
                          return (
                            null !== e && "number" != typeof e && i.push(e),
                            this.opt.styleFunc && i.push(this.opt.styleFunc(e)),
                            t.next("slice", i, !0)
                          );
                        },
                        this
                      );
                    "radius" in this.opt &&
                      (y = this.opt.radius < y ? this.opt.radius : y);
                    var h = { cx: a.l + g, cy: a.t + v, r: y },
                      l = new n(k);
                    this.opt.innerRadius && (l.a = 0.1);
                    var u = this._createRing(s, h).setStroke(l);
                    this.opt.innerRadius && u.setFill(l),
                      this.opt.zeroDataMessage &&
                        this.renderLabel(
                          s,
                          h.cx,
                          h.cy + _ / 3,
                          this.opt.zeroDataMessage,
                          { series: { font: b, fontColor: k } },
                          null,
                          "middle"
                        ),
                      (this.dyn = []),
                      e.forEach(
                        M,
                        function(t, e) {
                          this.dyn.push({
                            fill: this._plotFill(r[e].series.fill, i, a),
                            stroke: r[e].series.stroke
                          });
                        },
                        this
                      );
                  });
                if (!this.run && !this.run.data.ength) return T(), this;
                if ("number" == typeof M[0]) {
                  if (
                    ((u = c.map(M, "x ? Math.max(x, 0) : 0")),
                    c.every(u, "<= 0"))
                  )
                    return T(), this;
                  (f = c.map(u, "/this", c.foldl(u, "+", 0))),
                    this.opt.labels &&
                      (p = e.map(
                        f,
                        function(t) {
                          return t > 0 ? this._getLabel(100 * t) + "%" : "";
                        },
                        this
                      ));
                } else {
                  if (
                    !(u = c.map(M, "x ? Math.max(x.y, 0) : 0")).length ||
                    c.every(u, "<= 0")
                  )
                    return T(), this;
                  (f = c.map(u, "/this", c.foldl(u, "+", 0))),
                    this.opt.labels &&
                      (p = e.map(
                        f,
                        function(t, e) {
                          if (t < 0) return "";
                          var i = M[e];
                          return i.hasOwnProperty("text")
                            ? i.text
                            : this._getLabel(100 * t) + "%";
                        },
                        this
                      ));
                }
                var A = c.map(
                  M,
                  function(t) {
                    var e = [this.opt, this.run];
                    return (
                      null !== t && "number" != typeof t && e.push(t),
                      this.opt.styleFunc && e.push(this.opt.styleFunc(t)),
                      o.next("slice", e, !0)
                    );
                  },
                  this
                );
                this.opt.labels &&
                  ((m =
                    c.foldl1(
                      c.map(
                        p,
                        function(t, e) {
                          var i = A[e].series.font;
                          return h._base._getTextBox(t, { font: i }).w;
                        },
                        this
                      ),
                      "Math.max(a, b)"
                    ) / 2),
                  this.opt.labelOffset < 0 &&
                    (y = Math.min(g - 2 * m, v - _) + this.opt.labelOffset)),
                  this.opt.hasOwnProperty("radius") &&
                    (y = this.opt.radius < 0.9 * y ? this.opt.radius : 0.9 * y),
                  !this.opt.radius &&
                  this.opt.labels &&
                  "columns" == this.opt.labelStyle
                    ? ((y /= 2),
                      g > v && g > 2 * y && (y *= g / (2 * y)),
                      y >= 0.8 * v && (y = 0.8 * v))
                    : y >= 0.9 * v && (y = 0.9 * v),
                  (x = y - this.opt.labelOffset);
                var j = { cx: a.l + g, cy: a.t + v, r: y };
                this.dyn = [];
                var C,
                  N,
                  F = new Array(f.length),
                  L = [],
                  E = S,
                  O = this.opt.minWidth;
                if (
                  (e.forEach(f, function(t, e) {
                    if (0 !== t) {
                      var i = E + 2 * t * Math.PI;
                      e === f.length - 1 && (i = w + 2 * Math.PI);
                      var r = i - E,
                        n = r * y;
                      (L[e] = { step: r, start: E, end: i, weak: n < O }),
                        (E = i);
                    } else L[e] = { step: 0, end: E, start: E, weak: !1 };
                  }),
                  O > 0)
                ) {
                  var I,
                    R = 0,
                    z = O / y,
                    G = 0;
                  for (I = L.length - 1; I >= 0; I--)
                    L[I].weak && (++R, (G += L[I].step), (L[I].step = z));
                  var B = R * z;
                  if (B > Math.PI) {
                    for (z = Math.PI / R, I = 0; I < L.length; ++I)
                      L[I].weak && (L[I].step = z);
                    B = Math.PI;
                  }
                  if (R > 0)
                    for (
                      z = 1 - (B - G) / 2 / Math.PI, I = 0;
                      I < L.length;
                      ++I
                    )
                      L[I].weak || (L[I].step = z * L[I].step);
                  for (I = 0; I < L.length; ++I)
                    (L[I].start = I ? L[I].end : E),
                      (L[I].end = L[I].start + L[I].step);
                  for (I = L.length - 1; I >= 0; --I)
                    if (0 !== L[I].step) {
                      L[I].end = E + 2 * Math.PI;
                      break;
                    }
                }
                if (
                  ((E = S),
                  e.some(
                    f,
                    function(e, n) {
                      var o,
                        c = M[n],
                        u = A[n];
                      if (e >= 1) {
                        var d;
                        for (
                          N = this._plotFill(u.series.fill, i, a),
                            N = this._shapeFill(N, {
                              x: j.cx - j.r,
                              y: j.cy - j.r,
                              width: 2 * j.r,
                              height: 2 * j.r
                            }),
                            N = this._pseudoRadialFill(
                              N,
                              { x: j.cx, y: j.cy },
                              j.r
                            ),
                            o = this._createRing(s, j)
                              .setFill(N)
                              .setStroke(u.series.stroke),
                            this.dyn.push({ fill: N, stroke: u.series.stroke }),
                            P &&
                              ((C = {
                                element: "slice",
                                index: n,
                                run: this.run,
                                shape: o,
                                x: n,
                                y: "number" == typeof c ? c : c.y,
                                cx: j.cx,
                                cy: j.cy,
                                cr: y
                              }),
                              this._connectEvents(C),
                              (F[n] = C)),
                            d = n + 1;
                          d < f.length;
                          d++
                        )
                          (u = A[d]),
                            this.dyn.push({
                              fill: u.series.fill,
                              stroke: u.series.stroke
                            });
                        return !0;
                      }
                      if (0 === L[n].step)
                        return (
                          this.dyn.push({
                            fill: u.series.fill,
                            stroke: u.series.stroke
                          }),
                          !1
                        );
                      var p,
                        m = L[n].step,
                        x = j.cx + y * Math.cos(E),
                        g = j.cy + y * Math.sin(E),
                        v = j.cx + y * Math.cos(E + m),
                        b = j.cy + y * Math.sin(E + m),
                        _ = l._degToRad(this.opt.fanSize);
                      if (
                        u.series.fill &&
                        "radial" === u.series.fill.type &&
                        "fan" === this.opt.radGrad &&
                        m > _
                      ) {
                        var k,
                          w,
                          S,
                          T,
                          O,
                          I,
                          R,
                          z = s.createGroup(),
                          G = Math.ceil(m / _),
                          B = m / G;
                        for (
                          N = this._shapeFill(u.series.fill, {
                            x: j.cx - j.r,
                            y: j.cy - j.r,
                            width: 2 * j.r,
                            height: 2 * j.r
                          }),
                            k = 0;
                          k < G;
                          ++k
                        )
                          (w = E + (k - 0.2) * B),
                            (S = E + (k + 1 + 0.2) * B),
                            (T = 0 == k ? x : j.cx + y * Math.cos(w)),
                            (O = 0 == k ? g : j.cy + y * Math.sin(w)),
                            (I = k == G - 1 ? v : j.cx + y * Math.cos(S)),
                            (R = k == G - 1 ? b : j.cy + y * Math.sin(S)),
                            this._createSlice(
                              z,
                              j,
                              y,
                              T,
                              O,
                              I,
                              R,
                              w,
                              B
                            ).setFill(
                              this._pseudoRadialFill(
                                N,
                                { x: j.cx, y: j.cy },
                                y,
                                E + (k + 0.5) * B,
                                E + (k + 0.5) * B
                              )
                            );
                        (p = u.series.stroke),
                          this._createSlice(
                            z,
                            j,
                            y,
                            x,
                            g,
                            v,
                            b,
                            E,
                            m
                          ).setStroke(p),
                          (o = z);
                      } else {
                        if (
                          ((p = u.series.stroke),
                          (o = this._createSlice(
                            s,
                            j,
                            y,
                            x,
                            g,
                            v,
                            b,
                            E,
                            m
                          ).setStroke(p)),
                          (N = u.series.fill) && "radial" === N.type)
                        )
                          (N = this._shapeFill(N, {
                            x: j.cx - j.r,
                            y: j.cy - j.r,
                            width: 2 * j.r,
                            height: 2 * j.r
                          })),
                            "linear" === this.opt.radGrad &&
                              (N = this._pseudoRadialFill(
                                N,
                                { x: j.cx, y: j.cy },
                                y,
                                E,
                                E + m
                              ));
                        else if (N && "linear" === N.type) {
                          var D = t.clone(o.getBoundingBox());
                          if ("svg" === h.renderer) {
                            var W = { w: 0, h: 0 };
                            try {
                              W = r.position(o.rawNode);
                            } catch (t) {}
                            W.h > D.height && (D.height = W.h),
                              W.w > D.width && (D.width = W.w);
                          }
                          (N = this._plotFill(N, i, a)),
                            (N = this._shapeFill(N, D));
                        }
                        o.setFill(N);
                      }
                      return (
                        this.dyn.push({ fill: N, stroke: u.series.stroke }),
                        P &&
                          ((C = {
                            element: "slice",
                            index: n,
                            run: this.run,
                            shape: o,
                            x: n,
                            y: "number" == typeof c ? c : c.y,
                            cx: j.cx,
                            cy: j.cy,
                            cr: y
                          }),
                          this._connectEvents(C),
                          (F[n] = C)),
                        (E += m),
                        !1
                      );
                    },
                    this
                  ),
                  this.opt.labels)
                ) {
                  var D = d("dojo-bidi") && this.chart.isRightToLeft();
                  if ("default" == this.opt.labelStyle)
                    (E = S = w),
                      e.some(
                        f,
                        function(t, e) {
                          if (t <= 0 && !this.opt.minWidth) return !1;
                          var r = A[e];
                          if (t >= 1)
                            return (
                              this.renderLabel(
                                s,
                                j.cx,
                                j.cy + _ / 2,
                                p[e],
                                r,
                                this.opt.labelOffset > 0
                              ),
                              !0
                            );
                          var n = S + 2 * t * Math.PI;
                          if (
                            (e + 1 == f.length && (n = w + 2 * Math.PI),
                            this.opt.omitLabels && n - S < 0.001)
                          )
                            return !1;
                          var a = E + L[e].step / 2,
                            o = j.cx + x * Math.cos(a),
                            h = j.cy + x * Math.sin(a) + _ / 2;
                          return (
                            this.renderLabel(
                              s,
                              D ? i.width - o : o,
                              h,
                              p[e],
                              r,
                              this.opt.labelOffset > 0
                            ),
                            (E += L[e].step),
                            (S = n),
                            !1
                          );
                        },
                        this
                      );
                  else if ("columns" == this.opt.labelStyle) {
                    var W = this.opt.omitLabels;
                    E = S = w;
                    var V,
                      U = [],
                      q = 0;
                    for (V = f.length - 1; V >= 0; --V) f[V] && ++q;
                    e.forEach(
                      f,
                      function(t, e) {
                        var i = S + 2 * t * Math.PI;
                        if (
                          (e + 1 == f.length && (i = w + 2 * Math.PI),
                          0 !== this.minWidth || i - S >= 0.001)
                        ) {
                          var r = E + L[e].step / 2;
                          1 !== q || this.opt.minWidth || (r = (S + i) / 2),
                            U.push({
                              angle: r,
                              left: Math.cos(r) < 0,
                              theme: A[e],
                              index: e,
                              omit: !!W && i - S < 0.001
                            });
                        }
                        (S = i), (E += L[e].step);
                      },
                      this
                    );
                    var H = h._base._getTextBox("a", {
                      font: b,
                      whiteSpace: "nowrap"
                    }).h;
                    this._getProperLabelRadius(U, H, 1.1 * j.r);
                    var Y = j.cx - 2 * j.r,
                      X = j.cx + 2 * j.r;
                    e.forEach(
                      U,
                      function(e) {
                        if (!e.omit) {
                          var i = A[e.index],
                            n = 0;
                          i &&
                            i.axis &&
                            i.axis.tick &&
                            i.axis.tick.labelGap &&
                            (n = i.axis.tick.labelGap);
                          var a = h._base._getTextBox(p[e.index], {
                              font: i.series.font,
                              whiteSpace: "nowrap",
                              paddingLeft: n + "px"
                            }).w,
                            o = j.cx + e.labelR * Math.cos(e.angle),
                            l = j.cy + e.labelR * Math.sin(e.angle),
                            c = e.left ? Y + a : X - a,
                            u = e.left ? Y : c + n,
                            d = j.r,
                            m = s
                              .createPath()
                              .moveTo(
                                j.cx + d * Math.cos(e.angle),
                                j.cy + d * Math.sin(e.angle)
                              );
                          Math.abs(e.labelR * Math.cos(e.angle)) <
                            2 * j.r - a && m.lineTo(o, l),
                            m
                              .lineTo(c, l)
                              .setStroke(e.theme.series.labelWiring),
                            m.moveToBack();
                          var x = H / 3 + l,
                            g = this.renderLabel(
                              s,
                              u,
                              x || 0,
                              p[e.index],
                              i,
                              !1,
                              "left"
                            );
                          if (P && !this.opt.htmlLabels) {
                            var v =
                                h._base._getTextBox(p[e.index], {
                                  font: e.theme.series.font
                                }).w || 0,
                              y = h.normalizedLength(
                                h.splitFontString(e.theme.series.font).size
                              );
                            C = {
                              element: "labels",
                              index: e.index,
                              run: this.run,
                              shape: g,
                              x: u,
                              y: l,
                              label: p[e.index]
                            };
                            var b = g.getShape(),
                              _ = r.position(this.chart.node, !0),
                              k = t.mixin(
                                { type: "rect" },
                                { x: b.x, y: b.y - 2 * y }
                              );
                            (k.x += _.x),
                              (k.y += _.y),
                              (k.x = Math.round(k.x)),
                              (k.y = Math.round(k.y)),
                              (k.width = Math.ceil(v)),
                              (k.height = Math.ceil(y)),
                              (C.aroundRect = k),
                              this._connectEvents(C),
                              (F[f.length + e.index] = C);
                          }
                        }
                      },
                      this
                    );
                  }
                }
                var Z = 0;
                return (
                  (this._eventSeries[this.run.name] = c.map(M, function(t) {
                    return t <= 0 ? null : F[Z++];
                  })),
                  d("dojo-bidi") && this._checkOrientation(this.group, i, a),
                  this
                );
              },
              _getProperLabelRadius: function(t, e, i) {
                if (1 != t.length) {
                  var r,
                    n,
                    a = {},
                    s = {},
                    o = 2,
                    h = 2;
                  for (r = 0; r < t.length; ++r)
                    (n = Math.abs(Math.sin(t[r].angle))),
                      t[r].left
                        ? o > n && ((o = n), (a = t[r]))
                        : h > n && ((h = n), (s = t[r]));
                  (a.labelR = s.labelR = i),
                    this._caculateLabelR(a, t, e),
                    this._caculateLabelR(s, t, e);
                } else t[0].labelR = i;
              },
              _caculateLabelR: function(t, e, i) {
                var r,
                  n,
                  a,
                  s,
                  o = e.length,
                  h = t.labelR,
                  l = e[t.index].left ? -i : i;
                for (
                  a = 0, n = ((r = t.index) + 1) % o;
                  a < o && e[r].left === e[n].left;
                  ++a
                )
                  (s = (Math.sin(e[r].angle) * h + l) / Math.sin(e[n].angle)),
                    (h = Math.max(t.labelR, s)),
                    (e[n].labelR = h),
                    (r = (r + 1) % o),
                    (n = (n + 1) % o);
                for (
                  a >= o && (e[0].labelR = t.labelR),
                    a = 0,
                    n = ((r = t.index) || o) - 1;
                  a < o && e[r].left === e[n].left;
                  ++a
                )
                  (s = (Math.sin(e[r].angle) * h - l) / Math.sin(e[n].angle)),
                    (h = Math.max(t.labelR, s)),
                    (e[n].labelR = h),
                    (r = (r || o) - 1),
                    (n = (n || o) - 1);
              },
              _createRing: function(t, e) {
                var i = this.opt.innerRadius;
                return (
                  i > 0 ? (i = e.r * (i / 100)) : i < 0 && (i = -i),
                  i
                    ? t
                        .createPath({})
                        .setAbsoluteMode(!0)
                        .moveTo(e.cx, e.cy - e.r)
                        .arcTo(e.r, e.r, 0, !1, !0, e.cx + e.r, e.cy)
                        .arcTo(e.r, e.r, 0, !0, !0, e.cx, e.cy - e.r)
                        .closePath()
                        .moveTo(e.cx, e.cy - i)
                        .arcTo(i, i, 0, !1, !0, e.cx + i, e.cy)
                        .arcTo(i, i, 0, !0, !0, e.cx, e.cy - i)
                        .closePath()
                    : t.createCircle(e)
                );
              },
              _createSlice: function(t, e, i, r, n, a, s, o, h) {
                var l = this.opt.innerRadius;
                if ((l > 0 ? (l = e.r * (l / 100)) : l < 0 && (l = -l), l)) {
                  var c = e.cx + l * Math.cos(o),
                    u = e.cy + l * Math.sin(o),
                    d = e.cx + l * Math.cos(o + h),
                    f = e.cy + l * Math.sin(o + h);
                  return t
                    .createPath({})
                    .setAbsoluteMode(!0)
                    .moveTo(c, u)
                    .lineTo(r, n)
                    .arcTo(i, i, 0, h > Math.PI, !0, a, s)
                    .lineTo(d, f)
                    .arcTo(l, l, 0, h > Math.PI, !1, c, u)
                    .closePath();
                }
                return t
                  .createPath({})
                  .setAbsoluteMode(!0)
                  .moveTo(e.cx, e.cy)
                  .lineTo(r, n)
                  .arcTo(i, i, 0, h > Math.PI, !0, a, s)
                  .lineTo(e.cx, e.cy)
                  .closePath();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2271: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(28),
        i(25),
        i(15),
        i(2040),
        i(2036),
        i(2021),
        i(2013),
        i(2041),
        i(2022),
        i(2031)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = h.lambda("item.purgeGroup()");
            return e("dojox.charting.plot2d.Bubble", [n, a], {
              defaultParams: { animate: null },
              optionalParams: {
                stroke: {},
                outline: {},
                shadow: {},
                fill: {},
                filter: {},
                styleFunc: null,
                font: "",
                fontColor: "",
                labelFunc: null
              },
              constructor: function(e, i) {
                (this.opt = t.clone(t.mixin(this.opt, this.defaultParams))),
                  l.updateWithObject(this.opt, i),
                  l.updateWithPattern(this.opt, i, this.optionalParams),
                  this.opt.labelFunc ||
                    (this.opt.labelFunc = function(t, e, i) {
                      return this._getLabel(t.size, e, i);
                    }),
                  (this.animate = this.opt.animate);
              },
              render: function(t, e) {
                var n;
                if (this.zoom && !this.isDataDirty())
                  return this.performZoom(t, e);
                this.resetEvents(),
                  (this.dirty = this.isDirty()),
                  this.dirty &&
                    (i.forEach(this.series, u),
                    (this._eventSeries = {}),
                    this.cleanGroup(),
                    (n = this.getGroup()),
                    o.forEachRev(this.series, function(t) {
                      t.cleanGroup(n);
                    }));
                for (
                  var a = this.chart.theme,
                    h = this._hScaler.scaler.getTransformerFromModel(
                      this._hScaler
                    ),
                    l = this._vScaler.scaler.getTransformerFromModel(
                      this._vScaler
                    ),
                    c = this.events(),
                    d = 0;
                  d < this.series.length;
                  d++
                ) {
                  var f = this.series[d];
                  if (this.dirty || f.dirty)
                    if ((f.cleanGroup(), f.data.length))
                      if ("number" != typeof f.data[0]) {
                        var p = a.next("circle", [this.opt, f]),
                          m = i.map(
                            f.data,
                            function(i) {
                              return i
                                ? {
                                    x: h(i.x) + e.l,
                                    y: t.height - e.b - l(i.y),
                                    radius:
                                      this._vScaler.bounds.scale * (i.size / 2)
                                  }
                                : null;
                            },
                            this
                          );
                        if (f.hidden)
                          (f.dyn.fill = p.series.fill),
                            (f.dyn.stroke = p.series.stroke);
                        else {
                          n = f.group;
                          var x = null,
                            g = null,
                            v = null,
                            y = this.opt.styleFunc,
                            b = function(t) {
                              return y
                                ? a.addMixin(p, "circle", [t, y(t)], !0)
                                : a.addMixin(p, "circle", t, !0);
                            };
                          if (
                            (p.series.shadow &&
                              (v = i.map(
                                m,
                                function(i, r) {
                                  if (!this.isNullValue(i)) {
                                    var a = b(f.data[r]).series.shadow,
                                      s = n
                                        .createCircle({
                                          cx: i.x + a.dx,
                                          cy: i.y + a.dy,
                                          r: i.radius
                                        })
                                        .setStroke(a)
                                        .setFill(a.color);
                                    return (
                                      this.animate &&
                                        this._animateBubble(
                                          s,
                                          t.height - e.b,
                                          i.radius
                                        ),
                                      s
                                    );
                                  }
                                  return null;
                                },
                                this
                              )).length &&
                              (f.dyn.shadow = v[v.length - 1].getStroke()),
                            p.series.outline &&
                              (g = i.map(
                                m,
                                function(i, r) {
                                  if (!this.isNullValue(i)) {
                                    var a = b(f.data[r]),
                                      o = s.makeStroke(a.series.outline);
                                    o.width =
                                      2 * o.width +
                                      ((p.series.stroke &&
                                        p.series.stroke.width) ||
                                        0);
                                    var h = n
                                      .createCircle({
                                        cx: i.x,
                                        cy: i.y,
                                        r: i.radius
                                      })
                                      .setStroke(o);
                                    return (
                                      this.animate &&
                                        this._animateBubble(
                                          h,
                                          t.height - e.b,
                                          i.radius
                                        ),
                                      h
                                    );
                                  }
                                  return null;
                                },
                                this
                              )).length &&
                              (f.dyn.outline = g[g.length - 1].getStroke()),
                            (x = i.map(
                              m,
                              function(i, r) {
                                if (!this.isNullValue(i)) {
                                  var a = b(f.data[r]),
                                    s = {
                                      x: i.x - i.radius,
                                      y: i.y - i.radius,
                                      width: 2 * i.radius,
                                      height: 2 * i.radius
                                    },
                                    o = this._plotFill(a.series.fill, t, e);
                                  o = this._shapeFill(o, s);
                                  var h = n
                                    .createCircle({
                                      cx: i.x,
                                      cy: i.y,
                                      r: i.radius
                                    })
                                    .setFill(o)
                                    .setStroke(a.series.stroke);
                                  return (
                                    h.setFilter &&
                                      a.series.filter &&
                                      h.setFilter(a.series.filter),
                                    this.animate &&
                                      this._animateBubble(
                                        h,
                                        t.height - e.b,
                                        i.radius
                                      ),
                                    this.createLabel(n, f.data[r], s, a),
                                    h
                                  );
                                }
                                return null;
                              },
                              this
                            )).length &&
                              ((f.dyn.fill = x[x.length - 1].getFill()),
                              (f.dyn.stroke = x[x.length - 1].getStroke())),
                            c)
                          ) {
                            var _ = new Array(x.length);
                            i.forEach(
                              x,
                              function(t, e) {
                                if (null !== t) {
                                  var i = {
                                    element: "circle",
                                    index: e,
                                    run: f,
                                    shape: t,
                                    outline: (g && g[e]) || null,
                                    shadow: (v && v[e]) || null,
                                    x: f.data[e].x,
                                    y: f.data[e].y,
                                    r: f.data[e].size / 2,
                                    cx: m[e].x,
                                    cy: m[e].y,
                                    cr: m[e].radius
                                  };
                                  this._connectEvents(i), (_[e] = i);
                                }
                              },
                              this
                            ),
                              (this._eventSeries[f.name] = _);
                          } else delete this._eventSeries[f.name];
                          f.dirty = !1;
                        }
                      } else
                        console.warn(
                          "dojox.charting.plot2d.Bubble: the data in the following series cannot be rendered as a bubble chart; ",
                          f
                        );
                    else (f.dirty = !1), a.skip();
                  else a.skip(), this._reconnectEvents(f.name);
                }
                return (
                  (this.dirty = !1),
                  r("dojo-bidi") && this._checkOrientation(this.group, t, e),
                  this
                );
              },
              _animateBubble: function(e, i, r) {
                c.animateTransform(
                  t.delegate(
                    {
                      shape: e,
                      duration: 1200,
                      transform: [
                        { name: "translate", start: [0, i], end: [0, 0] },
                        { name: "scale", start: [0, 1 / r], end: [1, 1] },
                        { name: "original" }
                      ]
                    },
                    this.animate
                  )
                ).play();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2272: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(28),
        i(25),
        i(15),
        i(2040),
        i(2036),
        i(2021),
        i(2013),
        i(2041),
        i(2022),
        i(2031)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = h.lambda("item.purgeGroup()");
            return e("dojox.charting.plot2d.Candlesticks", [n, a], {
              defaultParams: { gap: 2, animate: null },
              optionalParams: {
                minBarSize: 1,
                maxBarSize: 1,
                stroke: {},
                outline: {},
                shadow: {},
                fill: {},
                font: "",
                fontColor: ""
              },
              constructor: function(e, i) {
                (this.opt = t.clone(this.defaultParams)),
                  l.updateWithObject(this.opt, i),
                  l.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.animate = this.opt.animate);
              },
              collectStats: function(e) {
                for (
                  var r = t.delegate(s.defaultStats), n = 0;
                  n < e.length;
                  n++
                ) {
                  var a = e[n];
                  if (a.data.length) {
                    var o = r.vmin,
                      h = r.vmax;
                    ("ymin" in a && "ymax" in a) ||
                      i.forEach(
                        a.data,
                        function(t, e) {
                          if (!this.isNullValue(t)) {
                            var i = t.x || e + 1;
                            (r.hmin = Math.min(r.hmin, i)),
                              (r.hmax = Math.max(r.hmax, i)),
                              (r.vmin = Math.min(
                                r.vmin,
                                t.open,
                                t.close,
                                t.high,
                                t.low
                              )),
                              (r.vmax = Math.max(
                                r.vmax,
                                t.open,
                                t.close,
                                t.high,
                                t.low
                              ));
                          }
                        },
                        this
                      ),
                      "ymin" in a && (r.vmin = Math.min(o, a.ymin)),
                      "ymax" in a && (r.vmax = Math.max(h, a.ymax));
                  }
                }
                return r;
              },
              getSeriesStats: function() {
                var t = this.collectStats(this.series);
                return (t.hmin -= 0.5), (t.hmax += 0.5), t;
              },
              render: function(t, e) {
                if (this.zoom && !this.isDataDirty())
                  return this.performZoom(t, e);
                var n;
                this.resetEvents(),
                  (this.dirty = this.isDirty()),
                  this.dirty &&
                    (i.forEach(this.series, u),
                    (this._eventSeries = {}),
                    this.cleanGroup(),
                    (n = this.getGroup()),
                    o.forEachRev(this.series, function(t) {
                      t.cleanGroup(n);
                    }));
                var a,
                  h,
                  l,
                  c = this.chart.theme,
                  d = this._hScaler.scaler.getTransformerFromModel(
                    this._hScaler
                  ),
                  f = this._vScaler.scaler.getTransformerFromModel(
                    this._vScaler
                  ),
                  p = this.events();
                (h = (a = s.calculateBarSize(
                  this._hScaler.bounds.scale,
                  this.opt
                )).gap),
                  (l = a.size);
                for (var m = this.series.length - 1; m >= 0; --m) {
                  var x = this.series[m];
                  if (this.dirty || x.dirty) {
                    x.cleanGroup();
                    var g = c.next("candlestick", [this.opt, x]),
                      v = new Array(x.data.length);
                    if (x.hidden)
                      (x.dyn.fill = g.series.fill),
                        (x.dyn.stroke = g.series.stroke);
                    else {
                      n = x.group;
                      for (var y = 0; y < x.data.length; ++y) {
                        var b = x.data[y];
                        if (!this.isNullValue(b)) {
                          var _ = c.addMixin(g, "candlestick", b, !0),
                            k = d(b.x || y + 0.5) + e.l + h,
                            w = t.height - e.b,
                            S = f(b.open),
                            M = f(b.close),
                            P = f(b.high),
                            T = f(b.low);
                          if ("mid" in b) var A = f(b.mid);
                          if (T > P) {
                            var j = P;
                            (P = T), (T = j);
                          }
                          if (l >= 1) {
                            var C = S > M,
                              N = {
                                x1: l / 2,
                                x2: l / 2,
                                y1: w - P,
                                y2: w - T
                              },
                              F = {
                                x: 0,
                                y: w - Math.max(S, M),
                                width: l,
                                height: Math.max(C ? S - M : M - S, 1)
                              },
                              L = n.createGroup();
                            L.setTransform({ dx: k, dy: 0 });
                            var E = L.createGroup();
                            if (
                              (E.createLine(N).setStroke(_.series.stroke),
                              E.createRect(F)
                                .setStroke(_.series.stroke)
                                .setFill(C ? _.series.fill : "white"),
                              "mid" in b &&
                                E.createLine({
                                  x1:
                                    (_.series.stroke &&
                                      _.series.stroke.width) ||
                                    1,
                                  x2:
                                    l -
                                    ((_.series.stroke &&
                                      _.series.stroke.width) ||
                                      1),
                                  y1: w - A,
                                  y2: w - A
                                }).setStroke(C ? "white" : _.series.stroke),
                              (x.dyn.fill = _.series.fill),
                              (x.dyn.stroke = _.series.stroke),
                              p)
                            ) {
                              var O = {
                                element: "candlestick",
                                index: y,
                                run: x,
                                shape: E,
                                x: k,
                                y: w - Math.max(S, M),
                                cx: l / 2,
                                cy:
                                  w -
                                  Math.max(S, M) +
                                  Math.max(C ? S - M : M - S, 1) / 2,
                                width: l,
                                height: Math.max(C ? S - M : M - S, 1),
                                data: b
                              };
                              this._connectEvents(O), (v[y] = O);
                            }
                          }
                          this.animate &&
                            this._animateCandlesticks(L, w - T, P - T);
                        }
                      }
                      (this._eventSeries[x.name] = v), (x.dirty = !1);
                    }
                  } else c.skip(), this._reconnectEvents(x.name);
                }
                return (
                  (this.dirty = !1),
                  r("dojo-bidi") && this._checkOrientation(this.group, t, e),
                  this
                );
              },
              tooltipFunc: function(t) {
                return (
                  '<table cellpadding="1" cellspacing="0" border="0" style="font-size:0.9em;"><tr><td>Open:</td><td align="right"><strong>' +
                  t.data.open +
                  '</strong></td></tr><tr><td>High:</td><td align="right"><strong>' +
                  t.data.high +
                  '</strong></td></tr><tr><td>Low:</td><td align="right"><strong>' +
                  t.data.low +
                  '</strong></td></tr><tr><td>Close:</td><td align="right"><strong>' +
                  t.data.close +
                  "</strong></td></tr>" +
                  (void 0 !== t.data.mid
                    ? '<tr><td>Mid:</td><td align="right"><strong>' +
                      t.data.mid +
                      "</strong></td></tr>"
                    : "") +
                  "</table>"
                );
              },
              _animateCandlesticks: function(e, i, r) {
                c.animateTransform(
                  t.delegate(
                    {
                      shape: e,
                      duration: 1200,
                      transform: [
                        {
                          name: "translate",
                          start: [0, i - i / r],
                          end: [0, 0]
                        },
                        { name: "scale", start: [1, 1 / r], end: [1, 1] },
                        { name: "original" }
                      ]
                    },
                    this.animate
                  )
                ).play();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2273: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(25),
        i(28),
        i(15),
        i(2040),
        i(2036),
        i(2021),
        i(2013),
        i(2041),
        i(2022),
        i(2031)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            var u = h.lambda("item.purgeGroup()");
            return i("dojox.charting.plot2d.OHLC", [n, a], {
              defaultParams: { gap: 2, animate: null },
              optionalParams: {
                minBarSize: 1,
                maxBarSize: 1,
                stroke: {},
                outline: {},
                shadow: {},
                fill: {},
                font: "",
                fontColor: ""
              },
              constructor: function(e, i) {
                (this.opt = t.clone(this.defaultParams)),
                  l.updateWithObject(this.opt, i),
                  l.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.animate = this.opt.animate);
              },
              collectStats: function(i) {
                for (
                  var r = t.delegate(s.defaultStats), n = 0;
                  n < i.length;
                  n++
                ) {
                  var a = i[n];
                  if (a.data.length) {
                    var o = r.vmin,
                      h = r.vmax;
                    ("ymin" in a && "ymax" in a) ||
                      e.forEach(
                        a.data,
                        function(t, e) {
                          if (!this.isNullValue(t)) {
                            var i = t.x || e + 1;
                            (r.hmin = Math.min(r.hmin, i)),
                              (r.hmax = Math.max(r.hmax, i)),
                              (r.vmin = Math.min(
                                r.vmin,
                                t.open,
                                t.close,
                                t.high,
                                t.low
                              )),
                              (r.vmax = Math.max(
                                r.vmax,
                                t.open,
                                t.close,
                                t.high,
                                t.low
                              ));
                          }
                        },
                        this
                      ),
                      "ymin" in a && (r.vmin = Math.min(o, a.ymin)),
                      "ymax" in a && (r.vmax = Math.max(h, a.ymax));
                  }
                }
                return r;
              },
              getSeriesStats: function() {
                var t = this.collectStats(this.series);
                return (t.hmin -= 0.5), (t.hmax += 0.5), t;
              },
              render: function(t, i) {
                if (this.zoom && !this.isDataDirty())
                  return this.performZoom(t, i);
                if (
                  (this.resetEvents(),
                  (this.dirty = this.isDirty()),
                  this.dirty)
                ) {
                  e.forEach(this.series, u),
                    (this._eventSeries = {}),
                    this.cleanGroup();
                  var n = this.getGroup();
                  o.forEachRev(this.series, function(t) {
                    t.cleanGroup(n);
                  });
                }
                var a,
                  h,
                  l,
                  c = this.chart.theme,
                  d = this._hScaler.scaler.getTransformerFromModel(
                    this._hScaler
                  ),
                  f = this._vScaler.scaler.getTransformerFromModel(
                    this._vScaler
                  ),
                  p = this.events();
                (h = (a = s.calculateBarSize(
                  this._hScaler.bounds.scale,
                  this.opt
                )).gap),
                  (l = a.size);
                for (var m = 0; m < this.series.length; m++) {
                  var x = this.series[m];
                  if (this.dirty || x.dirty) {
                    x.cleanGroup();
                    for (
                      var g = c.next("candlestick", [this.opt, x]),
                        v = ((n = x.group), new Array(x.data.length)),
                        y = 0;
                      y < x.data.length;
                      ++y
                    ) {
                      var b = x.data[y];
                      if (!this.isNullValue(b)) {
                        var _ = c.addMixin(g, "candlestick", b, !0),
                          k = d(b.x || y + 0.5) + i.l + h,
                          w = t.height - i.b,
                          S = f(b.open),
                          M = f(b.close),
                          P = f(b.high),
                          T = f(b.low);
                        if (T > P) {
                          var A = P;
                          (P = T), (T = A);
                        }
                        if (l >= 1) {
                          var j = {
                              x1: l / 2,
                              x2: l / 2,
                              y1: w - P,
                              y2: w - T
                            },
                            C = {
                              x1: 0,
                              x2:
                                l / 2 +
                                ((_.series.stroke && _.series.stroke.width) ||
                                  1) /
                                  2,
                              y1: w - S,
                              y2: w - S
                            },
                            N = {
                              x1:
                                l / 2 -
                                ((_.series.stroke && _.series.stroke.width) ||
                                  1) /
                                  2,
                              x2: l,
                              y1: w - M,
                              y2: w - M
                            },
                            F = n.createGroup();
                          F.setTransform({ dx: k, dy: 0 });
                          var L = F.createGroup();
                          if (
                            (L.createLine(j).setStroke(_.series.stroke),
                            L.createLine(C).setStroke(_.series.stroke),
                            L.createLine(N).setStroke(_.series.stroke),
                            (x.dyn.stroke = _.series.stroke),
                            p)
                          ) {
                            var E = {
                              element: "candlestick",
                              index: y,
                              run: x,
                              shape: L,
                              x: k,
                              y: w - Math.max(S, M),
                              cx: l / 2,
                              cy:
                                w -
                                Math.max(S, M) +
                                Math.max(S > M ? S - M : M - S, 1) / 2,
                              width: l,
                              height: Math.max(S > M ? S - M : M - S, 1),
                              data: b
                            };
                            this._connectEvents(E), (v[y] = E);
                          }
                        }
                        this.animate && this._animateOHLC(F, w - T, P - T);
                      }
                    }
                    (this._eventSeries[x.name] = v), (x.dirty = !1);
                  } else c.skip(), this._reconnectEvents(x.name);
                }
                return (
                  (this.dirty = !1),
                  r("dojo-bidi") && this._checkOrientation(this.group, t, i),
                  this
                );
              },
              _animateOHLC: function(e, i, r) {
                c.animateTransform(
                  t.delegate(
                    {
                      shape: e,
                      duration: 1200,
                      transform: [
                        {
                          name: "translate",
                          start: [0, i - i / r],
                          end: [0, 0]
                        },
                        { name: "scale", start: [1, 1 / r], end: [1, 1] },
                        { name: "original" }
                      ]
                    },
                    this.animate
                  )
                ).play();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2274: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(28),
        i(183),
        i(25),
        i(62),
        i(314),
        i(2275),
        i(32),
        i(2107),
        i(2036),
        i(2021),
        i(2072),
        i(2030),
        i(156),
        i(2031),
        i(2013),
        i(2022),
        i(2144)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c, u, d, f, p, m, x, g) {
            return e("dojox.charting.plot2d.Spider", [h, l], {
              defaultParams: {
                labels: !0,
                ticks: !1,
                fixed: !0,
                precision: 1,
                labelOffset: -10,
                labelStyle: "default",
                htmlLabels: !0,
                startAngle: -90,
                divisions: 3,
                axisColor: "",
                axisWidth: 0,
                spiderColor: "",
                spiderWidth: 0,
                seriesWidth: 0,
                seriesFillAlpha: 0.2,
                spiderOrigin: 0.16,
                markerSize: 3,
                spiderType: "polygon",
                animationType: g.backOut,
                animate: null,
                axisTickFont: "",
                axisTickFontColor: "",
                axisFont: "",
                axisFontColor: ""
              },
              optionalParams: { radius: 0, font: "", fontColor: "" },
              constructor: function(e, i) {
                (this.opt = t.clone(this.defaultParams)),
                  x.updateWithObject(this.opt, i),
                  x.updateWithPattern(this.opt, i, this.optionalParams),
                  (this.dyn = []),
                  (this.datas = {}),
                  (this.labelKey = []),
                  (this.oldSeriePoints = {}),
                  (this.animate =
                    null === this.opt.animate ? {} : this.opt.animate),
                  (this.animations = {});
              },
              clear: function() {
                return (
                  this.inherited(arguments),
                  (this.dyn = []),
                  (this.axes = []),
                  (this.datas = {}),
                  (this.labelKey = []),
                  (this.oldSeriePoints = {}),
                  (this.animations = {}),
                  this
                );
              },
              setAxis: function(t) {
                return (
                  t &&
                    (void 0 != t.opt.min &&
                      (this.datas[t.name].min = t.opt.min),
                    void 0 != t.opt.max &&
                      (this.datas[t.name].max = t.opt.max)),
                  this
                );
              },
              addSeries: function(t) {
                var e;
                for (e in (this.series.push(t), t.data)) {
                  var i = t.data[e],
                    r = this.datas[e];
                  if (r)
                    r.vlist.push(i),
                      (r.min = Math.min(r.min, i)),
                      (r.max = Math.max(r.max, i));
                  else {
                    var n = "__" + e;
                    this.axes.push(n),
                      (this[n] = e),
                      (this.datas[e] = { min: i, max: i, vlist: [i] });
                  }
                }
                if (this.labelKey.length <= 0)
                  for (e in t.data) this.labelKey.push(e);
                return this;
              },
              getSeriesStats: function() {
                return c.collectSimpleStats(this.series, function(t) {
                  return null === t;
                });
              },
              render: function(t, e) {
                if (!this.dirty) return this;
                (this.dirty = !1), this.cleanGroup();
                var i = this.group,
                  a = this.chart.theme;
                if ((this.resetEvents(), !this.series || !this.series.length))
                  return this;
                var s,
                  o,
                  h,
                  l,
                  c,
                  p,
                  x,
                  g,
                  v,
                  y,
                  b,
                  _,
                  k,
                  w,
                  S,
                  M,
                  P,
                  T,
                  A = this.opt,
                  j = a.axis,
                  C = (t.width - e.l - e.r) / 2,
                  N = (t.height - e.t - e.b) / 2,
                  F = Math.min(C, N),
                  L =
                    A.font ||
                    (j.majorTick && j.majorTick.font) ||
                    (j.tick && j.tick.font) ||
                    "normal normal normal 7pt Tahoma",
                  E =
                    A.axisFont ||
                    (j.tick && j.tick.titleFont) ||
                    "normal normal normal 11pt Tahoma",
                  O =
                    A.axisTickFontColor ||
                    (j.majorTick && j.majorTick.fontColor) ||
                    (j.tick && j.tick.fontColor) ||
                    "silver",
                  I =
                    A.axisFontColor ||
                    (j.tick && j.tick.titleFontColor) ||
                    "black",
                  R = A.axisColor || (j.tick && j.tick.axisColor) || "silver",
                  z =
                    A.spiderColor || (j.tick && j.tick.spiderColor) || "silver",
                  G = A.axisWidth || (j.stroke && j.stroke.width) || 2,
                  B = A.spiderWidth || (j.stroke && j.stroke.width) || 2,
                  D = A.seriesWidth || (j.stroke && j.stroke.width) || 2,
                  W = d.normalizedLength(d.splitFontString(E).size),
                  V = f._degToRad(A.startAngle),
                  U = A.spiderOrigin,
                  q = A.divisions >= 3 ? A.divisions : 3,
                  H = A.markerSize,
                  Y = A.spiderType,
                  X = A.animationType,
                  Z = A.labelOffset < -10 ? A.labelOffset : -10;
                A.labels &&
                  ((s = r.map(
                    this.series,
                    function(t) {
                      return t.name;
                    },
                    this
                  )),
                  (o =
                    m.foldl1(
                      m.map(
                        s,
                        function(t) {
                          var e = a.series.font;
                          return d._base._getTextBox(t, { font: e }).w;
                        },
                        this
                      ),
                      "Math.max(a, b)"
                    ) / 2),
                  (h = (F = Math.min(C - 2 * o, N - W) + Z) - Z)),
                  "radius" in A && (h = (F = A.radius) - Z),
                  (F /= 1.2);
                for (
                  var $ = { cx: e.l + C, cy: e.t + N, r: F }, K = 0;
                  K < this.series.length;
                  K++
                )
                  if (((w = this.series[K]), this.dirty || w.dirty)) {
                    if (
                      (w.cleanGroup(),
                      null !== (S = w.data) &&
                        ((b = this._getObjectLength(S)),
                        (!l || l.length <= 0) &&
                          ((l = []),
                          (c = []),
                          (g = []),
                          this._buildPoints(l, b, $, F, V, !0, t),
                          this._buildPoints(c, b, $, F * U, V, !0, t),
                          this._buildPoints(g, b, $, h, V, !1, t),
                          q > 2)))
                    )
                      for (p = [], x = [], v = 0; v < q - 2; v++)
                        (p[v] = []),
                          this._buildPoints(
                            p[v],
                            b,
                            $,
                            F * (U + ((1 - U) * (v + 1)) / (q - 1)),
                            V,
                            !0,
                            t
                          ),
                          (x[v] = F * (U + ((1 - U) * (v + 1)) / (q - 1)));
                  } else a.skip();
                var J = i.createGroup(),
                  Q = { color: R, width: G },
                  tt = { color: z, width: B };
                for (v = l.length - 1; v >= 0; --v) {
                  var et = {
                      x: (y = l[v]).x + 0.2 * (y.x - $.cx),
                      y: y.y + 0.2 * (y.y - $.cy)
                    },
                    it = {
                      x: y.x + (0.2 * (y.x - $.cx)) / 2,
                      y: y.y + (0.2 * (y.y - $.cy)) / 2
                    };
                  J.createLine({
                    x1: $.cx,
                    y1: $.cy,
                    x2: et.x,
                    y2: et.y
                  }).setStroke(Q),
                    this._drawArrow(J, et, it, Q);
                }
                var rt = i.createGroup();
                for (v = g.length - 1; v >= 0; --v) {
                  (y = g[v]),
                    (_ =
                      d._base._getTextBox(this.labelKey[v], { font: E }).w ||
                      0),
                    (k =
                      this.opt.htmlLabels && "vml" != d.renderer
                        ? "html"
                        : "gfx");
                  var nt = u.createText[k](
                    this.chart,
                    rt,
                    n.isBodyLtr() || "html" != k ? y.x : y.x + _ - t.width,
                    y.y,
                    "middle",
                    this.labelKey[v],
                    E,
                    I
                  );
                  this.opt.htmlLabels && this.htmlElements.push(nt);
                }
                var at = i.createGroup();
                if ("polygon" == Y) {
                  if (
                    (at.createPolyline(l).setStroke(tt),
                    at.createPolyline(c).setStroke(tt),
                    p.length > 0)
                  )
                    for (v = p.length - 1; v >= 0; --v)
                      at.createPolyline(p[v]).setStroke(tt);
                } else if (
                  (at.createCircle({ cx: $.cx, cy: $.cy, r: F }).setStroke(tt),
                  at
                    .createCircle({ cx: $.cx, cy: $.cy, r: F * U })
                    .setStroke(tt),
                  x.length > 0)
                )
                  for (v = x.length - 1; v >= 0; --v)
                    at.createCircle({ cx: $.cx, cy: $.cy, r: x[v] }).setStroke(
                      tt
                    );
                b = this._getObjectLength(this.datas);
                var st = i.createGroup(),
                  ot = 0;
                for (var ht in this.datas) {
                  for (
                    P = (M = this.datas[ht]).min,
                      T = M.max - P,
                      xt = V + (2 * Math.PI * ot) / b,
                      K = 0;
                    K < q;
                    K++
                  ) {
                    var lt = P + (T * K) / (q - 1);
                    (y = this._getCoordinate(
                      $,
                      F * (U + ((1 - U) * K) / (q - 1)),
                      xt,
                      t
                    )),
                      (lt = this._getLabel(lt)),
                      (_ = d._base._getTextBox(lt, { font: L }).w || 0),
                      (k =
                        this.opt.htmlLabels && "vml" != d.renderer
                          ? "html"
                          : "gfx"),
                      this.opt.htmlLabels &&
                        this.htmlElements.push(
                          u.createText[k](
                            this.chart,
                            st,
                            n.isBodyLtr() || "html" != k
                              ? y.x
                              : y.x + _ - t.width,
                            y.y,
                            "start",
                            lt,
                            L,
                            O
                          )
                        );
                  }
                  ot++;
                }
                for (
                  this.chart.seriesShapes = {}, K = this.series.length - 1;
                  K >= 0;
                  K--
                )
                  if (null !== (S = (w = this.series[K]).data)) {
                    var ct = a.next("spider", [A, w]),
                      ut = d.normalizeColor(ct.series.fill),
                      dt = { color: ct.series.fill, width: D };
                    if (
                      ((ut.a = A.seriesFillAlpha),
                      (w.dyn = { fill: ut, stroke: dt }),
                      w.hidden)
                    )
                      continue;
                    var ft = [],
                      pt = [];
                    for (ht in ((ot = 0), S)) {
                      (P = (M = this.datas[ht]).min), (T = M.max - P);
                      var mt = S[ht],
                        xt = V + (2 * Math.PI * ot) / b;
                      (y = this._getCoordinate(
                        $,
                        F * (U + ((1 - U) * (mt - P)) / T),
                        xt,
                        t
                      )),
                        ft.push(y),
                        pt.push({ sname: w.name, key: ht, data: mt }),
                        ot++;
                    }
                    (ft[ft.length] = ft[0]), (pt[pt.length] = pt[0]);
                    var gt = this._getBoundary(ft),
                      vt = w.group,
                      yt = this.oldSeriePoints[w.name],
                      bt = this._createSeriesEntry(
                        vt,
                        yt || c,
                        ft,
                        ut,
                        dt,
                        F,
                        U,
                        H,
                        X
                      );
                    (this.chart.seriesShapes[w.name] = bt),
                      (this.oldSeriePoints[w.name] = ft);
                    var _t = {
                      element: "spider_poly",
                      index: K,
                      id: "spider_poly_" + w.name,
                      run: w,
                      plot: this,
                      shape: bt.poly,
                      parent: vt,
                      brect: gt,
                      cx: $.cx,
                      cy: $.cy,
                      cr: F,
                      f: ut,
                      s: i
                    };
                    this._connectEvents(_t);
                    var kt = {
                      element: "spider_plot",
                      index: K,
                      id: "spider_plot_" + w.name,
                      run: w,
                      plot: this,
                      shape: w.group
                    };
                    this._connectEvents(kt),
                      r.forEach(
                        bt.circles,
                        function(t, e) {
                          var r = {
                            element: "spider_circle",
                            index: e,
                            id: "spider_circle_" + w.name + e,
                            run: w,
                            plot: this,
                            shape: t,
                            parent: vt,
                            tdata: pt[e],
                            cx: ft[e].x,
                            cy: ft[e].y,
                            f: ut,
                            s: i
                          };
                          this._connectEvents(r);
                        },
                        this
                      );
                  }
                return this;
              },
              _createSeriesEntry: function(e, n, o, h, l, c, u, d, f) {
                for (
                  var p = this.animate ? n : o,
                    m = e
                      .createPolyline(p)
                      .setFill(h)
                      .setStroke(l),
                    x = [],
                    g = 0;
                  g < p.length;
                  g++
                ) {
                  var v = p[g],
                    y = d,
                    b = e
                      .createCircle({ cx: v.x, cy: v.y, r: y })
                      .setFill(h)
                      .setStroke(l);
                  x.push(b);
                }
                if (this.animate) {
                  var _ = r.map(
                      o,
                      function(e, r) {
                        var s = n[r],
                          o = new a.Animation(
                            t.delegate(
                              { duration: 1e3, easing: f, curve: [s.y, e.y] },
                              this.animate
                            )
                          ),
                          h = m,
                          l = x[r];
                        return (
                          i.connect(
                            o,
                            "onAnimate",
                            function(t) {
                              var e = h.getShape();
                              (e.points[r].y = t), h.setShape(e);
                              var i = l.getShape();
                              (i.cy = t), l.setShape(i);
                            }
                          ),
                          o
                        );
                      },
                      this
                    ),
                    k = r.map(
                      o,
                      function(e, r) {
                        var s = n[r],
                          o = new a.Animation(
                            t.delegate(
                              { duration: 1e3, easing: f, curve: [s.x, e.x] },
                              this.animate
                            )
                          ),
                          h = m,
                          l = x[r];
                        return (
                          i.connect(
                            o,
                            "onAnimate",
                            function(t) {
                              var e = h.getShape();
                              (e.points[r].x = t), h.setShape(e);
                              var i = l.getShape();
                              (i.cx = t), l.setShape(i);
                            }
                          ),
                          o
                        );
                      },
                      this
                    );
                  s.combine(_.concat(k)).play();
                }
                return { group: e, poly: m, circles: x };
              },
              plotEvent: function(t) {
                "spider_plot" == t.element &&
                  ("onmouseover" != t.type || o("ie") || t.shape.moveToFront());
              },
              tooltipFunc: function(t) {
                return "spider_circle" == t.element
                  ? t.tdata.sname +
                      "<br/>" +
                      t.tdata.key +
                      "<br/>" +
                      t.tdata.data
                  : null;
              },
              _getBoundary: function(t) {
                for (
                  var e = t[0].x, i = t[0].x, r = t[0].y, n = t[0].y, a = 0;
                  a < t.length;
                  a++
                ) {
                  var s = t[a];
                  (e = Math.max(s.x, e)),
                    (r = Math.max(s.y, r)),
                    (i = Math.min(s.x, i)),
                    (n = Math.min(s.y, n));
                }
                return { x: i, y: n, width: e - i, height: r - n };
              },
              _drawArrow: function(t, e, i, r) {
                var n = Math.sqrt(
                    Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)
                  ),
                  a = (i.y - e.y) / n,
                  s = (i.x - e.x) / n,
                  o = { x: i.x + (n / 3) * -a, y: i.y + (n / 3) * s },
                  h = { x: i.x + (n / 3) * a, y: i.y + (n / 3) * -s };
                t.createPolyline([e, o, h])
                  .setFill(r.color)
                  .setStroke(r);
              },
              _buildPoints: function(t, e, i, r, n, a, s) {
                for (var o = 0; o < e; o++) {
                  var h = n + (2 * Math.PI * o) / e;
                  t.push(this._getCoordinate(i, r, h, s));
                }
                a && t.push(this._getCoordinate(i, r, n + 2 * Math.PI, s));
              },
              _getCoordinate: function(t, e, i, r) {
                var n = t.cx + e * Math.cos(i);
                return (
                  o("dojo-bidi") &&
                    this.chart.isRightToLeft() &&
                    r &&
                    (n = r.width - n),
                  { x: n, y: t.cy + e * Math.sin(i) }
                );
              },
              _getObjectLength: function(e) {
                var i = 0;
                if (t.isObject(e)) for (var r in e) i++;
                return i;
              },
              _getLabel: function(t) {
                return c.getLabel(t, this.opt.fixed, this.opt.precision);
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2275: function(t, e, i) {
      var r, n;
      (r = [
        i(12),
        i(140),
        i(16),
        i(25),
        i(61),
        i(314),
        i(30),
        i(47),
        i(62),
        i(141),
        i.dj.c(t.i)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, a, s, o, h, l, c) {
            i.isAsync ||
              l(0, function() {
                c(["./fx/Toggler"]);
              });
            var u = (i.fx = {}),
              d = {
                _fire: function(t, e) {
                  return this[t] && this[t].apply(this, e || []), this;
                }
              },
              f = function(t) {
                (this._index = -1),
                  (this._animations = t || []),
                  (this._current = this._onAnimateCtx = this._onEndCtx = null),
                  (this.duration = 0),
                  r.forEach(
                    this._animations,
                    function(t) {
                      t &&
                        (void 0 !== t.duration && (this.duration += t.duration),
                        t.delay && (this.duration += t.delay));
                    },
                    this
                  );
              };
            (f.prototype = new e()),
              t.extend(f, {
                _onAnimate: function() {
                  this._fire("onAnimate", arguments);
                },
                _onEnd: function() {
                  this._onAnimateCtx.remove(),
                    this._onEndCtx.remove(),
                    (this._onAnimateCtx = this._onEndCtx = null),
                    this._index + 1 == this._animations.length
                      ? this._fire("onEnd")
                      : ((this._current = this._animations[++this._index]),
                        (this._onAnimateCtx = n.after(
                          this._current,
                          "onAnimate",
                          t.hitch(this, "_onAnimate"),
                          !0
                        )),
                        (this._onEndCtx = n.after(
                          this._current,
                          "onEnd",
                          t.hitch(this, "_onEnd"),
                          !0
                        )),
                        this._current.play(0, !0));
                },
                play: function(e, i) {
                  if (
                    (this._current ||
                      (this._current = this._animations[(this._index = 0)]),
                    !i && "playing" == this._current.status())
                  )
                    return this;
                  var r = n.after(
                      this._current,
                      "beforeBegin",
                      t.hitch(this, function() {
                        this._fire("beforeBegin");
                      }),
                      !0
                    ),
                    a = n.after(
                      this._current,
                      "onBegin",
                      t.hitch(this, function(t) {
                        this._fire("onBegin", arguments);
                      }),
                      !0
                    ),
                    s = n.after(
                      this._current,
                      "onPlay",
                      t.hitch(this, function(t) {
                        this._fire("onPlay", arguments),
                          r.remove(),
                          a.remove(),
                          s.remove();
                      })
                    );
                  return (
                    this._onAnimateCtx && this._onAnimateCtx.remove(),
                    (this._onAnimateCtx = n.after(
                      this._current,
                      "onAnimate",
                      t.hitch(this, "_onAnimate"),
                      !0
                    )),
                    this._onEndCtx && this._onEndCtx.remove(),
                    (this._onEndCtx = n.after(
                      this._current,
                      "onEnd",
                      t.hitch(this, "_onEnd"),
                      !0
                    )),
                    this._current.play.apply(this._current, arguments),
                    this
                  );
                },
                pause: function() {
                  if (this._current) {
                    var e = n.after(
                      this._current,
                      "onPause",
                      t.hitch(this, function(t) {
                        this._fire("onPause", arguments), e.remove();
                      }),
                      !0
                    );
                    this._current.pause();
                  }
                  return this;
                },
                gotoPercent: function(t, e) {
                  this.pause();
                  var i = this.duration * t;
                  return (
                    (this._current = null),
                    r.some(
                      this._animations,
                      function(t, e) {
                        return i <= t.duration
                          ? ((this._current = t), (this._index = e), !0)
                          : ((i -= t.duration), !1);
                      },
                      this
                    ),
                    this._current &&
                      this._current.gotoPercent(i / this._current.duration),
                    e && this.play(),
                    this
                  );
                },
                stop: function(e) {
                  if (this._current) {
                    if (e) {
                      for (
                        ;
                        this._index + 1 < this._animations.length;
                        ++this._index
                      )
                        this._animations[this._index].stop(!0);
                      this._current = this._animations[this._index];
                    }
                    var i = n.after(
                      this._current,
                      "onStop",
                      t.hitch(this, function(t) {
                        this._fire("onStop", arguments), i.remove();
                      }),
                      !0
                    );
                    this._current.stop();
                  }
                  return this;
                },
                status: function() {
                  return this._current ? this._current.status() : "stopped";
                },
                destroy: function() {
                  this.stop(),
                    this._onAnimateCtx && this._onAnimateCtx.remove(),
                    this._onEndCtx && this._onEndCtx.remove();
                }
              }),
              t.extend(f, d),
              (u.chain = function(e) {
                return new f(
                  t.isArray(e) ? e : Array.prototype.slice.call(e, 0)
                );
              });
            var p = function(e) {
              (this._animations = e || []),
                (this._connects = []),
                (this._finished = 0),
                (this.duration = 0),
                r.forEach(
                  e,
                  function(e) {
                    var i = e.duration;
                    e.delay && (i += e.delay),
                      this.duration < i && (this.duration = i),
                      this._connects.push(
                        n.after(e, "onEnd", t.hitch(this, "_onEnd"), !0)
                      );
                  },
                  this
                ),
                (this._pseudoAnimation = new a.Animation({
                  curve: [0, 1],
                  duration: this.duration
                }));
              var i = this;
              r.forEach(
                [
                  "beforeBegin",
                  "onBegin",
                  "onPlay",
                  "onAnimate",
                  "onPause",
                  "onStop",
                  "onEnd"
                ],
                function(t) {
                  i._connects.push(
                    n.after(
                      i._pseudoAnimation,
                      t,
                      function() {
                        i._fire(t, arguments);
                      },
                      !0
                    )
                  );
                }
              );
            };
            return (
              t.extend(p, {
                _doAction: function(t, e) {
                  return (
                    r.forEach(this._animations, function(i) {
                      i[t].apply(i, e);
                    }),
                    this
                  );
                },
                _onEnd: function() {
                  ++this._finished > this._animations.length &&
                    this._fire("onEnd");
                },
                _call: function(t, e) {
                  var i = this._pseudoAnimation;
                  i[t].apply(i, e);
                },
                play: function(t, e) {
                  return (
                    (this._finished = 0),
                    this._doAction("play", arguments),
                    this._call("play", arguments),
                    this
                  );
                },
                pause: function() {
                  return (
                    this._doAction("pause", arguments),
                    this._call("pause", arguments),
                    this
                  );
                },
                gotoPercent: function(t, e) {
                  var i = this.duration * t;
                  return (
                    r.forEach(this._animations, function(t) {
                      t.gotoPercent(t.duration < i ? 1 : i / t.duration, e);
                    }),
                    this._call("gotoPercent", arguments),
                    this
                  );
                },
                stop: function(t) {
                  return (
                    this._doAction("stop", arguments),
                    this._call("stop", arguments),
                    this
                  );
                },
                status: function() {
                  return this._pseudoAnimation.status();
                },
                destroy: function() {
                  this.stop(),
                    r.forEach(this._connects, function(t) {
                      t.remove();
                    });
                }
              }),
              t.extend(p, d),
              (u.combine = function(e) {
                return new p(
                  t.isArray(e) ? e : Array.prototype.slice.call(e, 0)
                );
              }),
              (u.wipeIn = function(e) {
                var i,
                  r = (e.node = s.byId(e.node)),
                  h = r.style,
                  l = a.animateProperty(
                    t.mixin(
                      {
                        properties: {
                          height: {
                            start: function() {
                              if (
                                ((i = h.overflow),
                                (h.overflow = "hidden"),
                                "hidden" == h.visibility || "none" == h.display)
                              )
                                return (
                                  (h.height = "1px"),
                                  (h.display = ""),
                                  (h.visibility = ""),
                                  1
                                );
                              var t = o.get(r, "height");
                              return Math.max(t, 1);
                            },
                            end: function() {
                              return r.scrollHeight;
                            }
                          }
                        }
                      },
                      e
                    )
                  ),
                  c = function() {
                    (h.height = "auto"), (h.overflow = i);
                  };
                return (
                  n.after(l, "onStop", c, !0), n.after(l, "onEnd", c, !0), l
                );
              }),
              (u.wipeOut = function(e) {
                var i,
                  r = (e.node = s.byId(e.node)).style,
                  o = a.animateProperty(
                    t.mixin({ properties: { height: { end: 1 } } }, e)
                  );
                n.after(
                  o,
                  "beforeBegin",
                  function() {
                    (i = r.overflow), (r.overflow = "hidden"), (r.display = "");
                  },
                  !0
                );
                var h = function() {
                  (r.overflow = i), (r.height = "auto"), (r.display = "none");
                };
                return (
                  n.after(o, "onStop", h, !0), n.after(o, "onEnd", h, !0), o
                );
              }),
              (u.slideTo = function(e) {
                var i = null,
                  r = null,
                  l = (function(t) {
                    return function() {
                      var e = o.getComputedStyle(t),
                        n = e.position;
                      if (
                        ((i =
                          "absolute" == n ? t.offsetTop : parseInt(e.top) || 0),
                        (r =
                          "absolute" == n
                            ? t.offsetLeft
                            : parseInt(e.left) || 0),
                        "absolute" != n && "relative" != n)
                      ) {
                        var a = h.position(t, !0);
                        (i = a.y),
                          (r = a.x),
                          (t.style.position = "absolute"),
                          (t.style.top = i + "px"),
                          (t.style.left = r + "px");
                      }
                    };
                  })((e.node = s.byId(e.node)));
                l();
                var c = a.animateProperty(
                  t.mixin(
                    { properties: { top: e.top || 0, left: e.left || 0 } },
                    e
                  )
                );
                return n.after(c, "beforeBegin", l, !0), c;
              }),
              u
            );
          }.apply(null, r)) || (t.exports = n);
    },
    2276: function(t, e, i) {
      var r, n;
      (r = [i(183), i(28), i(2277), i(2144), i(2013)]),
        void 0 ===
          (n = function(t, e, i, r, n) {
            var a = r.backOut;
            return e("dojox.charting.action2d.PlotAction", i, {
              overOutEvents: { onmouseover: 1, onmouseout: 1 },
              constructor: function(t, e, i) {
                (this.anim = {}),
                  i || (i = {}),
                  (this.duration = i.duration ? i.duration : 400),
                  (this.easing = i.easing ? i.easing : a);
              },
              connect: function() {
                this.handle = this.chart.connectToPlot(
                  this.plot.name,
                  this,
                  "process"
                );
              },
              disconnect: function() {
                this.handle &&
                  (t.disconnect(this.handle), (this.handle = null));
              },
              reset: function() {},
              destroy: function() {
                this.inherited(arguments),
                  n.forIn(this.anim, function(t) {
                    n.forIn(t, function(t) {
                      t.action.stop(!0);
                    });
                  }),
                  (this.anim = {});
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2277: function(t, e, i) {
      var r, n;
      (r = [i(12), i(28), i(140)]),
        void 0 ===
          (n = function(t, e, i) {
            return e("dojox.charting.action2d.Base", i, {
              constructor: function(e, i) {
                (this.chart = e),
                  (this.plot = i
                    ? t.isString(i)
                      ? this.chart.getPlot(i)
                      : i
                    : this.chart.getPlot("default"));
              },
              connect: function() {},
              disconnect: function() {},
              destroy: function() {
                this.disconnect();
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2278: function(t, e, i) {
      var r, n;
      (r = [i(28), i(47)]),
        void 0 ===
          (n = function(t, e) {
            return t(null, {
              _recheckPosition: function(t, e, i) {
                if (this.chart.isRightToLeft()) {
                  var r = this.chart.offsets.l - this.chart.offsets.r;
                  "marker" == t.element
                    ? ((e.x = this.chart.dim.width - t.cx + r),
                      (i[0] = "before-centered"),
                      (i[1] = "after-centered"))
                    : "circle" == t.element
                      ? (e.x = this.chart.dim.width - t.cx - t.cr + r)
                      : "bar" == t.element || "column" == t.element
                        ? ((e.x = this.chart.dim.width - e.width - e.x + r),
                          "bar" == t.element &&
                            ((i[0] = "before-centered"),
                            (i[1] = "after-centered")))
                        : "candlestick" == t.element
                          ? (e.x = this.chart.dim.width + r - t.x)
                          : "slice" == t.element &&
                            (("before-centered" != i[0] &&
                              "after-centered" != i[0]) ||
                              i.reverse(),
                            (e.x = t.cx + (t.cx - e.x)));
                }
              },
              _format: function(t) {
                var i = "rtl" == e.get(this.chart.node, "direction"),
                  r = "rtl" == this.chart.getTextDir(t);
                return r && !i
                  ? "<span dir = 'rtl'>" + t + "</span>"
                  : !r && i
                    ? "<span dir = 'ltr'>" + t + "</span>"
                    : t;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    },
    2279: function(t, e, i) {
      var r, n;
      (r = [i(16), i(12), i(2056)]),
        void 0 ===
          (n = function(t, e, i) {
            var r = {};
            e.mixin(i, {
              scanl: function(n, a, s, o) {
                var h, l, c;
                if (
                  ("string" == typeof n && (n = n.split("")),
                  (o = o || t.global),
                  (a = i.lambda(a)),
                  e.isArray(n))
                )
                  for (
                    (h = new Array((l = n.length) + 1))[0] = s, c = 0;
                    c < l;
                    s = a.call(o, s, n[c], c, n), h[++c] = s
                  );
                else if (
                  "function" == typeof n.hasNext &&
                  "function" == typeof n.next
                )
                  for (
                    h = [s], c = 0;
                    n.hasNext();
                    h.push((s = a.call(o, s, n.next(), c++, n)))
                  );
                else
                  for (c in ((h = [s]), n))
                    c in r || h.push((s = a.call(o, s, n[c], c, n)));
                return h;
              },
              scanl1: function(n, a, s) {
                "string" == typeof n && (n = n.split("")),
                  (s = s || t.global),
                  (a = i.lambda(a));
                var o,
                  h,
                  l,
                  c = !0;
                if (e.isArray(n)) {
                  (o = new Array((h = n.length)))[0] = l = n[0];
                  for (
                    var u = 1;
                    u < h;
                    o[u] = l = a.call(s, l, n[u], u, n), ++u
                  );
                } else if (
                  "function" == typeof n.hasNext &&
                  "function" == typeof n.next
                ) {
                  if (n.hasNext())
                    for (
                      o = [(l = n.next())], u = 1;
                      n.hasNext();
                      o.push((l = a.call(s, l, n.next(), u++, n)))
                    );
                } else
                  for (u in n)
                    u in r ||
                      (c
                        ? ((o = [(l = n[u])]), (c = !1))
                        : o.push((l = a.call(s, l, n[u], u, n))));
                return o;
              },
              scanr: function(e, r, n, a) {
                "string" == typeof e && (e = e.split("")),
                  (a = a || t.global),
                  (r = i.lambda(r));
                var s = e.length,
                  o = new Array(s + 1),
                  h = s;
                for (
                  o[s] = n;
                  h > 0;
                  --h, n = r.call(a, n, e[h], h, e), o[h] = n
                );
                return o;
              },
              scanr1: function(e, r, n) {
                "string" == typeof e && (e = e.split("")),
                  (n = n || t.global),
                  (r = i.lambda(r));
                var a = e.length,
                  s = new Array(a),
                  o = e[a - 1],
                  h = a - 1;
                for (
                  s[h] = o;
                  h > 0;
                  --h, o = r.call(n, o, e[h], h, e), s[h] = o
                );
                return s;
              }
            });
          }.apply(null, r)) || (t.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "dojox/charting/Chart2D": 2002,
      "dojox/charting/action2d/Tooltip": 2003,
      "dojox/lang/functional": 2013,
      "dojox/charting/plot2d/common": 2021,
      "dojox/lang/utils": 2022,
      "dojox/gfx": 2030,
      "dojox/gfx/fx": 2031,
      "dojox/charting/plot2d/_PlotEvents": 2036,
      "dojox/charting/plot2d/CartesianBase": 2040,
      "dojox/lang/functional/reversed": 2041,
      "dojox/charting/plot2d/Default": 2055,
      "dojox/lang/functional/lambda": 2056,
      "dojox/main": 2071,
      "dojox/charting/axis2d/common": 2072,
      "dojox/charting/Element": 2080,
      "dojox/charting/plot2d/Stacked": 2106,
      "dojox/charting/plot2d/Base": 2107,
      "dojox/charting/plot2d/commonStacked": 2108,
      "dojox/charting/plot2d/Columns": 2109,
      "dojox/charting/plot2d/Bars": 2110,
      "dojox/charting/scaler/common": 2139,
      "dojox/gfx/gradutils": 2140,
      "dojox/lang/functional/fold": 2141,
      "dojox/charting/axis2d/Invisible": 2142,
      "dojox/charting/scaler/linear": 2143,
      "dojo/fx/easing": 2144,
      "dojox/charting/plot2d/StackedAreas": 2244,
      "dojox/gfx/renderer!": 2245,
      "dojox/gfx/svg": 2245,
      "dojox/lang/functional/array": 2246,
      "dojox/lang/functional/object": 2247,
      "dojox/charting/scaler/primitive": 2248,
      "dojox/charting/Chart": 2249,
      "dojox/charting/SimpleTheme": 2250,
      "dojox/charting/Series": 2251,
      "dojox/charting/bidi/Chart": 2252,
      "dojox/gfx/_gfxBidiSupport": 2253,
      "dojox/gfx/utils": 2254,
      "dojox/charting/bidi/_bidiutils": 2255,
      "dojox/charting/axis2d/Default": 2256,
      "dojox/charting/axis2d/Base": 2257,
      "dojox/charting/bidi/axis2d/Default": 2258,
      "dojox/charting/plot2d/Lines": 2259,
      "dojox/charting/plot2d/Areas": 2260,
      "dojox/charting/plot2d/Markers": 2261,
      "dojox/charting/plot2d/MarkersOnly": 2262,
      "dojox/charting/plot2d/Scatter": 2263,
      "dojox/charting/plot2d/StackedLines": 2264,
      "dojox/charting/plot2d/StackedColumns": 2265,
      "dojox/charting/plot2d/ClusteredColumns": 2266,
      "dojox/charting/plot2d/StackedBars": 2267,
      "dojox/charting/plot2d/ClusteredBars": 2268,
      "dojox/charting/plot2d/Grid": 2269,
      "dojox/charting/plot2d/Pie": 2270,
      "dojox/charting/plot2d/Bubble": 2271,
      "dojox/charting/plot2d/Candlesticks": 2272,
      "dojox/charting/plot2d/OHLC": 2273,
      "dojox/charting/plot2d/Spider": 2274,
      "dojo/fx": 2275,
      "dojox/charting/action2d/PlotAction": 2276,
      "dojox/charting/action2d/Base": 2277,
      "dojox/charting/bidi/action2d/Tooltip": 2278,
      "dojox/lang/functional/scan": 2279
    });
  })();
