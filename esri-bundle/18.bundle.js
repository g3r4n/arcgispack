(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    2037: function(t, i, e) {
      var o, s;
      (o = [e.dj.c(t.i), i]),
        void 0 ===
          (s = function(t, i) {
            Object.defineProperty(i, "__esModule", { value: !0 });
            var e = (function() {
              function t(t, i) {
                (this.x = t), (this.y = i);
              }
              return (
                (t.prototype.clone = function() {
                  return new t(this.x, this.y);
                }),
                (t.prototype.equals = function(t, i) {
                  return t === this.x && i === this.y;
                }),
                (t.prototype.isEqual = function(t) {
                  return t.x === this.x && t.y === this.y;
                }),
                (t.prototype.setCoords = function(t, i) {
                  (this.x = t), (this.y = i);
                }),
                (t.prototype.normalize = function() {
                  var t = this.x,
                    i = this.y,
                    e = Math.sqrt(t * t + i * i);
                  (this.x /= e), (this.y /= e);
                }),
                (t.prototype.rightPerpendicular = function() {
                  var t = this.x;
                  (this.x = this.y), (this.y = -t);
                }),
                (t.prototype.move = function(t, i) {
                  (this.x += t), (this.y += i);
                }),
                (t.prototype.assign = function(t) {
                  (this.x = t.x), (this.y = t.y);
                }),
                (t.prototype.assignAdd = function(t, i) {
                  (this.x = t.x + i.x), (this.y = t.y + i.y);
                }),
                (t.prototype.assignSub = function(t, i) {
                  (this.x = t.x - i.x), (this.y = t.y - i.y);
                }),
                (t.prototype.rotate = function(t, i) {
                  var e = this.x,
                    o = this.y;
                  (this.x = e * t - o * i), (this.y = e * i + o * t);
                }),
                (t.prototype.scale = function(t) {
                  (this.x *= t), (this.y *= t);
                }),
                (t.prototype.length = function() {
                  var t = this.x,
                    i = this.y;
                  return Math.sqrt(t * t + i * i);
                }),
                (t.distance = function(t, i) {
                  var e = i.x - t.x,
                    o = i.y - t.y;
                  return Math.sqrt(e * e + o * o);
                }),
                (t.add = function(i, e) {
                  return new t(i.x + e.x, i.y + e.y);
                }),
                (t.sub = function(i, e) {
                  return new t(i.x - e.x, i.y - e.y);
                }),
                t
              );
            })();
            i.Point = e;
          }.apply(null, o)) || (t.exports = s);
    },
    2051: function(t, i, e) {
      var o, s;
      (o = [e.dj.c(t.i), i]),
        void 0 ===
          (s = function(t, i) {
            return (function() {
              function t(t, i, e, o) {
                void 0 === t && (t = 0),
                  void 0 === i && (i = 0),
                  void 0 === e && (e = 0),
                  void 0 === o && (o = 0),
                  (this.x = t),
                  (this.y = i),
                  (this.width = e),
                  (this.height = o);
              }
              return (
                Object.defineProperty(t.prototype, "isEmpty", {
                  get: function() {
                    return this.width <= 0 || this.height <= 0;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                t
              );
            })();
          }.apply(null, o)) || (t.exports = s);
    },
    2083: function(t, i, e) {
      var o, s;
      (o = [e.dj.c(t.i), i, e(2051)]),
        void 0 ===
          (s = function(t, i, e) {
            return (function() {
              function t(t, i, e, o, s, r, n, c) {
                (this._glyphItems = t),
                  (this._maxWidth = i),
                  (this._lineHeight = e),
                  (this._letterSpacing = o),
                  (this._offset = s),
                  (this._hAnchor = r),
                  (this._vAnchor = n),
                  (this._justify = c);
              }
              return (
                (t.prototype.getShaping = function(t, i) {
                  for (
                    var e = this._letterSpacing,
                      o = this._lineHeight,
                      s = this._justify,
                      r = this._maxWidth,
                      n = [],
                      c = 0,
                      h = 0,
                      v = 0,
                      a = 0,
                      d = -1,
                      x = 0,
                      u = -1,
                      l = t.length,
                      m = 0;
                    m < l;
                    m++
                  ) {
                    var p = t.charCodeAt(m);
                    if (10 !== p) {
                      for (
                        var y = void 0, f = 0, C = this._glyphItems;
                        f < C.length && !(y = C[f][p]);
                        f++
                      );
                      if (y) {
                        if (
                          (n.push({
                            codePoint: p,
                            x: c,
                            y: h,
                            glyphMosaicItem: y
                          }),
                          (c += y.metrics.advance + e),
                          r > 0 && c > r && u >= 0)
                        ) {
                          var _ = u + 1,
                            g = n[_].x;
                          x = Math.max(g, x);
                          for (var T = _; T < n.length; T++)
                            i ? (n[T].y -= o) : (n[T].y += o), (n[T].x -= g);
                          s && this._applyJustification(n, a, u),
                            i ? (h -= o) : (h += o),
                            (c -= g),
                            ++v,
                            (a = _),
                            (u = -1);
                        }
                        ++d, 32 === p && (u = n.length - 1);
                      }
                    } else {
                      if (m === l - 1) continue;
                      if (d >= a) {
                        g = (M = n[d]).x + M.glyphMosaicItem.metrics.advance;
                        (x = Math.max(g, x)),
                          s && this._applyJustification(n, a, d),
                          (a = n.length);
                      }
                      i ? (h -= o) : (h += o), (c = 0), ++v;
                    }
                  }
                  if (d >= a) {
                    var M,
                      A = (M = n[d]).x + M.glyphMosaicItem.metrics.advance;
                    (x = Math.max(x, A)),
                      s && this._applyJustification(n, a, d);
                  }
                  if (n.length > 0) {
                    var b = (s - this._hAnchor) * x,
                      I = (-this._vAnchor * (v + 1) + 0.5) * o;
                    i && v && (I += v * o),
                      (b += this._offset[0]),
                      (I += this._offset[1]);
                    for (var P = 0, w = n; P < w.length; P++) {
                      var E = w[P];
                      (E.x += b), (E.y += I);
                    }
                  }
                  return n;
                }),
                (t.getBox = function(t) {
                  var i = t.length;
                  if (0 !== i) {
                    for (
                      var e = t[0].x + t[0].glyphMosaicItem.metrics.left,
                        o = e,
                        s = t[0].y,
                        r = s,
                        n = s,
                        c = 1;
                      c < i;
                      c++
                    ) {
                      var h = t[c],
                        v = h.x + h.glyphMosaicItem.metrics.left;
                      v < e && (e = v), v > o && (o = v);
                      var a = h.y;
                      if ((a < s && (s = a), a > r && (r = a), a !== n)) {
                        var d = t[c - 1].glyphMosaicItem.metrics.width;
                        (o = Math.max(
                          o,
                          t[c - 1].x + t[c - 1].glyphMosaicItem.metrics.left + d
                        )),
                          (n = a);
                      }
                    }
                    var x = t[i - 1].glyphMosaicItem.metrics.width;
                    return (
                      (o = Math.max(
                        o,
                        t[i - 1].x + t[i - 1].glyphMosaicItem.metrics.left + x
                      )),
                      {
                        x: e,
                        y: (r += 12),
                        width: o - e,
                        height: r - (s -= 12)
                      }
                    );
                  }
                }),
                (t.addDecoration = function(t, i) {
                  var o = t.length;
                  if (0 !== o) {
                    for (
                      var s = t[0].x + t[0].glyphMosaicItem.metrics.left,
                        r = t[0].y,
                        n = 1;
                      n < o;
                      n++
                    ) {
                      var c = t[n];
                      if (c.y !== r) {
                        var h =
                          t[n - 1].x +
                          t[n - 1].glyphMosaicItem.metrics.left +
                          t[n - 1].glyphMosaicItem.metrics.width;
                        t.push({
                          codePoint: 0,
                          x: s,
                          y: r + i - 3,
                          glyphMosaicItem: {
                            rect: new e(4, 0, 4, 8),
                            metrics: {
                              width: h - s,
                              height: 8,
                              left: 0,
                              top: 0,
                              advance: 0
                            },
                            page: 0
                          }
                        }),
                          (r = c.y),
                          (s = c.x + c.glyphMosaicItem.metrics.left);
                      }
                    }
                    var v =
                      t[o - 1].x +
                      t[o - 1].glyphMosaicItem.metrics.left +
                      t[o - 1].glyphMosaicItem.metrics.width;
                    t.push({
                      codePoint: 0,
                      x: s,
                      y: r + i - 3,
                      glyphMosaicItem: {
                        rect: new e(4, 0, 4, 8),
                        metrics: {
                          width: v - s,
                          height: 8,
                          left: 0,
                          top: 0,
                          advance: 0
                        },
                        page: 0
                      }
                    });
                  }
                }),
                (t.prototype._applyJustification = function(t, i, e) {
                  for (
                    var o = t[e],
                      s = o.glyphMosaicItem.metrics.advance,
                      r = (o.x + s) * this._justify,
                      n = i;
                    n <= e;
                    n++
                  )
                    t[n].x -= r;
                }),
                t
              );
            })();
          }.apply(null, o)) || (t.exports = s);
    },
    2084: function(t, i, e) {
      var o, s;
      (o = [e.dj.c(t.i), i, e(2037), e(2043)]),
        void 0 ===
          (s = function(t, i, e, o) {
            Object.defineProperty(i, "__esModule", { value: !0 });
            var s = (function() {
                return function(t, i, e) {
                  (this.ratio = t), (this.x = i), (this.y = e);
                };
              })(),
              r = (function() {
                function t(t, i, e, o, s) {
                  void 0 === o && (o = 8),
                    void 0 === s && (s = 8),
                    (this.lines = []),
                    (this.starts = []),
                    (this.pixelRatio = o),
                    (this.pixelMargin = s),
                    (this.tileSize = 512 * o),
                    (this.dz = t),
                    (this.yPos = i),
                    (this.xPos = e);
                }
                return (
                  (t.prototype.setExtent = function(t) {
                    this.finalRatio = (this.tileSize / t) * (1 << this.dz);
                    var i = this.pixelRatio * this.pixelMargin;
                    i /= this.finalRatio;
                    var e = t >> this.dz;
                    i > e && (i = e),
                      (this.margin = i),
                      (this.xmin = e * this.xPos - i),
                      (this.ymin = e * this.yPos - i),
                      (this.xmax = this.xmin + e + 2 * i),
                      (this.ymax = this.ymin + e + 2 * i);
                  }),
                  (t.prototype.reset = function(t) {
                    (this.type = t),
                      (this.lines = []),
                      (this.starts = []),
                      (this.line = null),
                      (this.start = 0);
                  }),
                  (t.prototype.moveTo = function(t, i) {
                    this._pushLine(),
                      (this._prevIsIn = this._isIn(t, i)),
                      this._moveTo(t, i, this._prevIsIn),
                      (this._prevPt = new e.Point(t, i)),
                      (this._firstPt = new e.Point(t, i)),
                      (this._dist = 0);
                  }),
                  (t.prototype.lineTo = function(t, i) {
                    var o,
                      r,
                      n,
                      c,
                      h,
                      v,
                      a,
                      d,
                      x = this._isIn(t, i),
                      u = new e.Point(t, i),
                      l = e.Point.distance(this._prevPt, u);
                    if (x)
                      this._prevIsIn
                        ? this._lineTo(t, i, !0)
                        : ((o = this._prevPt),
                          (r = u),
                          (n = this._intersect(r, o)),
                          (this.start = this._dist + l * (1 - this._r)),
                          this._lineTo(n.x, n.y, !0),
                          this._lineTo(r.x, r.y, !0));
                    else if (this._prevIsIn)
                      (r = this._prevPt),
                        (o = u),
                        (n = this._intersect(r, o)),
                        this._lineTo(n.x, n.y, !0),
                        this._lineTo(o.x, o.y, !1);
                    else {
                      var m = this._prevPt,
                        p = u;
                      if (
                        (m.x <= this.xmin && p.x <= this.xmin) ||
                        (m.x >= this.xmax && p.x >= this.xmax) ||
                        (m.y <= this.ymin && p.y <= this.ymin) ||
                        (m.y >= this.ymax && p.y >= this.ymax)
                      )
                        this._lineTo(p.x, p.y, !1);
                      else {
                        var y = [];
                        if (
                          (((m.x < this.xmin && p.x > this.xmin) ||
                            (m.x > this.xmin && p.x < this.xmin)) &&
                            ((c = (this.xmin - m.x) / (p.x - m.x)),
                            (d = m.y + c * (p.y - m.y)) <= this.ymin
                              ? (v = !1)
                              : d >= this.ymax
                                ? (v = !0)
                                : y.push(new s(c, this.xmin, d))),
                          ((m.x < this.xmax && p.x > this.xmax) ||
                            (m.x > this.xmax && p.x < this.xmax)) &&
                            ((c = (this.xmax - m.x) / (p.x - m.x)),
                            (d = m.y + c * (p.y - m.y)) <= this.ymin
                              ? (v = !1)
                              : d >= this.ymax
                                ? (v = !0)
                                : y.push(new s(c, this.xmax, d))),
                          ((m.y < this.ymin && p.y > this.ymin) ||
                            (m.y > this.ymin && p.y < this.ymin)) &&
                            ((c = (this.ymin - m.y) / (p.y - m.y)),
                            (a = m.x + c * (p.x - m.x)) <= this.xmin
                              ? (h = !1)
                              : a >= this.xmax
                                ? (h = !0)
                                : y.push(new s(c, a, this.ymin))),
                          ((m.y < this.ymax && p.y > this.ymax) ||
                            (m.y > this.ymax && p.y < this.ymax)) &&
                            ((c = (this.ymax - m.y) / (p.y - m.y)),
                            (a = m.x + c * (p.x - m.x)) <= this.xmin
                              ? (h = !1)
                              : a >= this.xmax
                                ? (h = !0)
                                : y.push(new s(c, a, this.ymax))),
                          0 === y.length)
                        )
                          h
                            ? v
                              ? this._lineTo(this.xmax, this.ymax, !0)
                              : this._lineTo(this.xmax, this.ymin, !0)
                            : v
                              ? this._lineTo(this.xmin, this.ymax, !0)
                              : this._lineTo(this.xmin, this.ymin, !0);
                        else if (y.length > 1 && y[0].ratio > y[1].ratio)
                          (this.start = this._dist + l * y[1].ratio),
                            this._lineTo(y[1].x, y[1].y, !0),
                            this._lineTo(y[0].x, y[0].y, !0);
                        else {
                          this.start = this._dist + l * y[0].ratio;
                          for (var f = 0; f < y.length; f++)
                            this._lineTo(y[f].x, y[f].y, !0);
                        }
                        this._lineTo(p.x, p.y, !1);
                      }
                    }
                    (this._dist += l), (this._prevIsIn = x), (this._prevPt = u);
                  }),
                  (t.prototype.close = function() {
                    if (this.line.length > 2) {
                      var t = this._firstPt,
                        i = this._prevPt;
                      (t.x === i.x && t.y === i.y) || this.lineTo(t.x, t.y);
                      for (
                        var e = this.line, o = e.length;
                        o >= 4 &&
                        ((e[0].x === e[1].x && e[0].x === e[o - 2].x) ||
                          (e[0].y === e[1].y && e[0].y === e[o - 2].y));

                      )
                        e.pop(),
                          (e[0].x = e[o - 2].x),
                          (e[0].y = e[o - 2].y),
                          --o;
                    }
                  }),
                  (t.prototype.result = function(t) {
                    return (
                      void 0 === t && (t = !0),
                      this._pushLine(),
                      0 === this.lines.length
                        ? null
                        : (3 === this.type &&
                            t &&
                            c.simplify(
                              this.tileSize,
                              this.margin * this.finalRatio,
                              this.lines
                            ),
                          this.lines)
                    );
                  }),
                  (t.prototype.resultWithStarts = function() {
                    if (2 !== this.type)
                      throw new Error("Only valid for lines");
                    this._pushLine();
                    var t = this.lines,
                      i = t.length;
                    if (0 === i) return null;
                    for (var e = [], o = 0; o < i; o++)
                      e.push({ line: t[o], start: this.starts[o] || 0 });
                    return e;
                  }),
                  (t.prototype._isIn = function(t, i) {
                    return (
                      t >= this.xmin &&
                      t <= this.xmax &&
                      i >= this.ymin &&
                      i <= this.ymax
                    );
                  }),
                  (t.prototype._intersect = function(t, i) {
                    var o, s, r;
                    if (i.x >= this.xmin && i.x <= this.xmax)
                      (r =
                        ((s = i.y <= this.ymin ? this.ymin : this.ymax) - t.y) /
                        (i.y - t.y)),
                        (o = t.x + r * (i.x - t.x));
                    else if (i.y >= this.ymin && i.y <= this.ymax)
                      (r =
                        ((o = i.x <= this.xmin ? this.xmin : this.xmax) - t.x) /
                        (i.x - t.x)),
                        (s = t.y + r * (i.y - t.y));
                    else {
                      s = i.y <= this.ymin ? this.ymin : this.ymax;
                      var n =
                          ((o = i.x <= this.xmin ? this.xmin : this.xmax) -
                            t.x) /
                          (i.x - t.x),
                        c = (s - t.y) / (i.y - t.y);
                      n < c
                        ? ((r = n), (s = t.y + n * (i.y - t.y)))
                        : ((r = c), (o = t.x + c * (i.x - t.x)));
                    }
                    return (this._r = r), new e.Point(o, s);
                  }),
                  (t.prototype._pushLine = function() {
                    this.line &&
                      (1 === this.type
                        ? this.line.length > 0 &&
                          (this.lines.push(this.line),
                          this.starts.push(this.start))
                        : 2 === this.type
                          ? this.line.length > 1 &&
                            (this.lines.push(this.line),
                            this.starts.push(this.start))
                          : 3 === this.type &&
                            this.line.length > 3 &&
                            (this.lines.push(this.line),
                            this.starts.push(this.start))),
                      (this.line = []),
                      (this.start = 0);
                  }),
                  (t.prototype._moveTo = function(t, i, o) {
                    3 !== this.type
                      ? o &&
                        ((t = Math.round(
                          (t - (this.xmin + this.margin)) * this.finalRatio
                        )),
                        (i = Math.round(
                          (i - (this.ymin + this.margin)) * this.finalRatio
                        )),
                        this.line.push(new e.Point(t, i)))
                      : (o ||
                          (t < this.xmin && (t = this.xmin),
                          t > this.xmax && (t = this.xmax),
                          i < this.ymin && (i = this.ymin),
                          i > this.ymax && (i = this.ymax)),
                        (t = Math.round(
                          (t - (this.xmin + this.margin)) * this.finalRatio
                        )),
                        (i = Math.round(
                          (i - (this.ymin + this.margin)) * this.finalRatio
                        )),
                        this.line.push(new e.Point(t, i)),
                        (this._is_h = !1),
                        (this._is_v = !1));
                  }),
                  (t.prototype._lineTo = function(t, i, o) {
                    var s, r;
                    if (3 !== this.type)
                      if (o) {
                        if (
                          ((t = Math.round(
                            (t - (this.xmin + this.margin)) * this.finalRatio
                          )),
                          (i = Math.round(
                            (i - (this.ymin + this.margin)) * this.finalRatio
                          )),
                          this.line.length > 0 &&
                            (s = this.line[this.line.length - 1]).equals(t, i))
                        )
                          return;
                        this.line.push(new e.Point(t, i));
                      } else
                        this.line && this.line.length > 0 && this._pushLine();
                    else if (
                      (o ||
                        (t < this.xmin && (t = this.xmin),
                        t > this.xmax && (t = this.xmax),
                        i < this.ymin && (i = this.ymin),
                        i > this.ymax && (i = this.ymax)),
                      (t = Math.round(
                        (t - (this.xmin + this.margin)) * this.finalRatio
                      )),
                      (i = Math.round(
                        (i - (this.ymin + this.margin)) * this.finalRatio
                      )),
                      this.line && this.line.length > 0)
                    ) {
                      var n = (s = this.line[this.line.length - 1]).x === t,
                        c = s.y === i;
                      if (n && c) return;
                      this._is_h && n
                        ? ((s.x = t),
                          (s.y = i),
                          (r = this.line[this.line.length - 2]).x === t &&
                          r.y === i
                            ? (this.line.pop(),
                              this.line.length <= 1
                                ? ((this._is_h = !1), (this._is_v = !1))
                                : ((r = this.line[this.line.length - 2]),
                                  (this._is_h = r.x === t),
                                  (this._is_v = r.y === i)))
                            : ((this._is_h = r.x === t),
                              (this._is_v = r.y === i)))
                        : this._is_v && c
                          ? ((s.x = t),
                            (s.y = i),
                            (r = this.line[this.line.length - 2]).x === t &&
                            r.y === i
                              ? (this.line.pop(),
                                this.line.length <= 1
                                  ? ((this._is_h = !1), (this._is_v = !1))
                                  : ((r = this.line[this.line.length - 2]),
                                    (this._is_h = r.x === t),
                                    (this._is_v = r.y === i)))
                              : ((this._is_h = r.x === t),
                                (this._is_v = r.y === i)))
                          : (this.line.push(new e.Point(t, i)),
                            (this._is_h = n),
                            (this._is_v = c));
                    } else this.line.push(new e.Point(t, i));
                  }),
                  t
                );
              })();
            i.TileClipper = r;
            var n = (function() {
              function t() {}
              return (
                (t.prototype.setExtent = function(t) {
                  this._ratio = 4096 === t ? 1 : 4096 / t;
                }),
                (t.prototype.reset = function(t) {
                  (this.type = t), (this.lines = []), (this.line = null);
                }),
                (t.prototype.moveTo = function(t, i) {
                  this.line && this.lines.push(this.line), (this.line = []);
                  var o = this._ratio;
                  this.line.push(
                    new e.Point(Math.round(t * o), Math.round(i * o))
                  );
                }),
                (t.prototype.lineTo = function(t, i) {
                  var o = this._ratio;
                  this.line.push(
                    new e.Point(Math.round(t * o), Math.round(i * o))
                  );
                }),
                (t.prototype.close = function() {
                  var t = this.line;
                  t && !t[0].isEqual(t[t.length - 1]) && t.push(t[0]);
                }),
                (t.prototype.result = function() {
                  return (
                    this.line && this.lines.push(this.line),
                    0 === this.lines.length
                      ? null
                      : (3 === this.type &&
                          1 !== this._ratio &&
                          c.simplify(4096, 64, this.lines),
                        this.lines)
                  );
                }),
                t
              );
            })();
            i.SimpleBuilder = n;
            var c = (function() {
              function t() {}
              return (
                (t.simplify = function(i, e, o) {
                  if (o) {
                    for (
                      var s = -e,
                        r = i + e,
                        n = -e,
                        c = i + e,
                        h = [],
                        v = [],
                        a = o.length,
                        d = 0;
                      d < a;
                      ++d
                    ) {
                      var x = o[d];
                      if (x && !(x.length < 2))
                        for (
                          var u = x[0], l = void 0, m = x.length, p = 1;
                          p < m;
                          ++p
                        )
                          (l = x[p]),
                            u.x === l.x &&
                              (u.x <= s &&
                                (u.y > l.y
                                  ? (h.push(d),
                                    h.push(p),
                                    h.push(0),
                                    h.push(-1))
                                  : (v.push(d),
                                    v.push(p),
                                    v.push(0),
                                    v.push(-1))),
                              u.x >= r &&
                                (u.y < l.y
                                  ? (h.push(d),
                                    h.push(p),
                                    h.push(1),
                                    h.push(-1))
                                  : (v.push(d),
                                    v.push(p),
                                    v.push(1),
                                    v.push(-1)))),
                            u.y === l.y &&
                              (u.y <= n &&
                                (u.x < l.x
                                  ? (h.push(d),
                                    h.push(p),
                                    h.push(2),
                                    h.push(-1))
                                  : (v.push(d),
                                    v.push(p),
                                    v.push(2),
                                    v.push(-1))),
                              u.y >= c &&
                                (u.x > l.x
                                  ? (h.push(d),
                                    h.push(p),
                                    h.push(3),
                                    h.push(-1))
                                  : (v.push(d),
                                    v.push(p),
                                    v.push(3),
                                    v.push(-1)))),
                            (u = l);
                    }
                    if (0 !== h.length && 0 !== v.length) {
                      t.fillParent(o, v, h), t.fillParent(o, h, v);
                      var y = [];
                      t.calcDeltas(y, v, h),
                        t.calcDeltas(y, h, v),
                        t.addDeltas(y, o);
                    }
                  }
                }),
                (t.fillParent = function(t, i, e) {
                  for (var s = e.length, r = i.length, n = 0; n < r; n += 4) {
                    for (
                      var c = i[n],
                        h = i[n + 1],
                        v = i[n + 2],
                        a = t[c][h - 1],
                        d = t[c][h],
                        x = 8092,
                        u = -1,
                        l = 0;
                      l < s;
                      l += 4
                    )
                      if (e[l + 2] === v) {
                        var m = e[l],
                          p = e[l + 1],
                          y = t[m][p - 1],
                          f = t[m][p];
                        switch (v) {
                          case 0:
                          case 1:
                            if (
                              o.between(a.y, y.y, f.y) &&
                              o.between(d.y, y.y, f.y)
                            )
                              (C = Math.abs(f.y - y.y)) < x &&
                                ((x = C), (u = l));
                            break;
                          case 2:
                          case 3:
                            var C;
                            if (
                              o.between(a.x, y.x, f.x) &&
                              o.between(d.x, y.x, f.x)
                            )
                              (C = Math.abs(f.x - y.x)) < x &&
                                ((x = C), (u = l));
                        }
                      }
                    i[n + 3] = u;
                  }
                }),
                (t.calcDeltas = function(i, e, o) {
                  for (var s = e.length, r = 0; r < s; r += 4) {
                    var n = t.calcDelta(r, e, o, []);
                    i.push(e[r]), i.push(e[r + 1]), i.push(e[r + 2]), i.push(n);
                  }
                }),
                (t.calcDelta = function(i, e, o, s) {
                  var r = e[i + 3];
                  if (-1 === r) return 0;
                  var n = s.length;
                  return n > 1 && s[n - 2] === r
                    ? 0
                    : (s.push(r), t.calcDelta(r, o, e, s) + 1);
                }),
                (t.addDeltas = function(t, i) {
                  for (var e = t.length, o = 0, s = 0; s < e; s += 4) {
                    (c = t[s + 3]) > o && (o = c);
                  }
                  for (s = 0; s < e; s += 4) {
                    var r = i[t[s]],
                      n = t[s + 1],
                      c = o - t[s + 3];
                    switch (t[s + 2]) {
                      case 0:
                        (r[n - 1].x -= c),
                          (r[n].x -= c),
                          1 === n && (r[r.length - 1].x -= c),
                          n === r.length - 1 && (r[0].x -= c);
                        break;
                      case 1:
                        (r[n - 1].x += c),
                          (r[n].x += c),
                          1 === n && (r[r.length - 1].x += c),
                          n === r.length - 1 && (r[0].x += c);
                        break;
                      case 2:
                        (r[n - 1].y -= c),
                          (r[n].y -= c),
                          1 === n && (r[r.length - 1].y -= c),
                          n === r.length - 1 && (r[0].y -= c);
                        break;
                      case 3:
                        (r[n - 1].y += c),
                          (r[n].y += c),
                          1 === n && (r[r.length - 1].y += c),
                          n === r.length - 1 && (r[0].y += c);
                    }
                  }
                }),
                t
              );
            })();
          }.apply(null, o)) || (t.exports = s);
    },
    2125: function(t, i, e) {
      var o, s;
      (o = [e.dj.c(t.i), i]),
        void 0 ===
          (s = function(t, i) {
            function e(t) {
              var i,
                e = { items: new Array(), count: 0 };
              for (i = 0; i < t; ++i) e.items.push(void 0);
              return e;
            }
            function o(t, i) {
              (_.vector[0] = t.vector[0]),
                (_.vector[1] = t.vector[1]),
                (_.texCoords[0] = t.texCoords[0]),
                (_.texCoords[1] = t.texCoords[1]),
                (_.direction[0] = t.direction[0]),
                (_.direction[1] = t.direction[1]),
                (_.base = t.base),
                (t.vector[0] = i.vector[0]),
                (t.vector[1] = i.vector[1]),
                (t.texCoords[0] = i.texCoords[0]),
                (t.texCoords[1] = i.texCoords[1]),
                (t.direction[0] = i.direction[0]),
                (t.direction[1] = i.direction[1]),
                (t.base = i.base),
                (i.vector[0] = _.vector[0]),
                (i.vector[1] = _.vector[1]),
                (i.texCoords[0] = _.texCoords[0]),
                (i.texCoords[1] = _.texCoords[1]),
                (i.direction[0] = _.direction[0]),
                (i.direction[1] = _.direction[1]),
                (i.base = _.base);
            }
            function s(t, i) {
              return t[0] * i[0] + t[1] * i[1];
            }
            function r(t) {
              return Math.sqrt(s(t, t));
            }
            function n(t, i) {
              var e = r(i);
              return (t[0] = i[0] / e), (t[1] = i[1] / e), t;
            }
            function c(t, i) {
              return (t[0] = -i[1]), (t[1] = i[0]), t;
            }
            function h(t, i) {
              return t[0] * i[1] - t[1] * i[0];
            }
            function v(t, i) {
              return (t[0] = -i[0]), (t[1] = -i[1]), t;
            }
            function a(t, i, e) {
              return (t[0] = i[0] * e), (t[1] = i[1] * e), t;
            }
            function d(t, i, e) {
              return (t[0] = i[0] + e[0]), (t[1] = i[1] + e[1]), t;
            }
            function x(t, i, e) {
              return (
                (function(t, i, e) {
                  return (
                    (i[0] - t[0]) * (e[1] - t[1]) -
                    (e[0] - t[0]) * (i[1] - t[1])
                  );
                })(t, i, e) < 0
              );
            }
            function u(t, i) {
              var e = s(t, i);
              return e > 0.999 ? 0 : e < -0.999 ? Math.PI : Math.acos(e);
            }
            function l(t, i, e, o, s) {
              if (0 !== o) {
                var n,
                  c = r(i),
                  h = u(a(T[0], i, 1 / c), a(T[1], e, 1 / c)),
                  v = ((s ? -1 : 1) * h) / o,
                  d = Math.cos(v),
                  x = Math.sin(v),
                  l = i[0],
                  m = i[1];
                for (n = 0; n < o - 1; ++n) {
                  var p = l;
                  (l = d * p - x * m),
                    (m = x * p + d * m),
                    (t.items[n][0] = l),
                    (t.items[n][1] = m);
                }
                t.count = o - 1;
              } else t.count = 0;
            }
            function m(t) {
              var i,
                e = t.count,
                o = Math.floor(e / 2);
              for (i = 0; i < o; ++i) {
                var s = t.items[i];
                (t.items[i] = t.items[e - i - 1]), (t.items[e - i - 1] = s);
              }
            }
            var p, y;
            Object.defineProperty(i, "__esModule", { value: !0 }),
              (function(t) {
                (t[(t.ENTRY = 1)] = "ENTRY"),
                  (t[(t.EXIT = 2)] = "EXIT"),
                  (t[(t.CAP = 3)] = "CAP");
              })((p = i.VectorRole || (i.VectorRole = {}))),
              (function(t) {
                (t[(t.START = 1)] = "START"), (t[(t.END = 2)] = "END");
              })((y = i.CapPosition || (i.CapPosition = {}))),
              (i.SYSTEM_MAG_LIMIT = 3.8),
              (i.MITER_SAFE_RADS = 2 * Math.acos(1 / i.SYSTEM_MAG_LIMIT));
            var f = i.SYSTEM_MAG_LIMIT * i.SYSTEM_MAG_LIMIT,
              C = 16 / (2 * Math.PI);
            (i.allocTriangles = function(t) {
              var i,
                e = { items: new Array(), count: 0 };
              for (i = 0; i < t; ++i)
                e.items.push({
                  v1: {
                    vector: [void 0, void 0],
                    texCoords: [void 0, void 0],
                    direction: [void 0, void 0]
                  },
                  v2: {
                    vector: [void 0, void 0],
                    texCoords: [void 0, void 0],
                    direction: [void 0, void 0]
                  },
                  v3: {
                    vector: [void 0, void 0],
                    texCoords: [void 0, void 0],
                    direction: [void 0, void 0]
                  }
                });
              return e;
            }),
              (i.allocExtrudeVectors = function() {
                var t = (function(t) {
                    var i,
                      e = { items: new Array(), count: 0 };
                    for (i = 0; i < t; ++i)
                      e.items.push({
                        vector: [void 0, void 0],
                        texCoords: [void 0, void 0],
                        direction: [void 0, void 0]
                      });
                    return e;
                  })(30),
                  i = {};
                return (
                  (i[p.ENTRY] = e(20)),
                  (i[p.EXIT] = e(20)),
                  (i[p.CAP] = e(20)),
                  { vectors: t, lists: i }
                );
              }),
              (i.copyExtrudeVectors = function(t, i) {
                var e;
                for (e = 0; e < i.vectors.count; ++e)
                  (t.vectors.items[e].vector[0] = i.vectors.items[e].vector[0]),
                    (t.vectors.items[e].vector[1] =
                      i.vectors.items[e].vector[1]),
                    (t.vectors.items[e].texCoords[0] =
                      i.vectors.items[e].texCoords[0]),
                    (t.vectors.items[e].texCoords[1] =
                      i.vectors.items[e].texCoords[1]),
                    (t.vectors.items[e].direction[0] =
                      i.vectors.items[e].direction[0]),
                    (t.vectors.items[e].direction[1] =
                      i.vectors.items[e].direction[1]),
                    (t.vectors.items[e].base = i.vectors.items[e].base);
                t.vectors.count = i.vectors.count;
                var o = i.lists[p.ENTRY],
                  s = t.lists[p.ENTRY],
                  r = i.lists[p.EXIT],
                  n = t.lists[p.EXIT],
                  c = i.lists[p.CAP],
                  h = t.lists[p.CAP];
                for (e = 0; e < o.count; ++e) s.items[e] = o.items[e];
                for (s.count = o.count, e = 0; e < r.count; ++e)
                  n.items[e] = r.items[e];
                for (n.count = r.count, e = 0; e < c.count; ++e)
                  h.items[e] = c.items[e];
                (h.count = c.count), (t.capCenter = i.capCenter);
              });
            var _ = {
              vector: [void 0, void 0],
              texCoords: [void 0, void 0],
              direction: [void 0, void 0],
              base: void 0
            };
            i.swapExtrudeVectors = o;
            var g,
              T = [];
            for (g = 0; g < 32; ++g) T.push([void 0, void 0]);
            var M = (function(t) {
              var i,
                e = { items: new Array(), count: 0 };
              for (i = 0; i < 16; ++i) e.items.push([void 0, void 0]);
              return e;
            })();
            (i.length = r),
              (i.normalize = n),
              (i.getNumberOfSlices = function(t) {
                return Math.max(Math.round(t * C), 1);
              }),
              (i.getRads = u),
              (i.reverse = m);
            var A = [void 0, void 0],
              b = [void 0, void 0],
              I = [0, 0],
              P = [0, 0],
              w = [0, 0],
              E = [0, 0],
              R = Math.cos(Math.PI / 4),
              S = Math.sin(Math.PI / 4),
              Y = Math.sqrt(2),
              N = (function() {
                function t(t) {
                  this._distanceAlongCorrection = t.distanceAlongCorrection;
                }
                return (
                  (t.prototype.bridge = function(t, i, e) {
                    var s,
                      r,
                      n,
                      c,
                      h = i.vectors,
                      v = i.lists[p.EXIT],
                      a = e.vectors,
                      d = e.lists[p.ENTRY];
                    if (v.count === d.count + 1)
                      (s = v.items),
                        (r = h.items),
                        (n = d.items),
                        (c = a.items);
                    else if (d.count === v.count + 1)
                      (s = d.items),
                        (r = a.items),
                        (n = v.items),
                        (c = h.items);
                    else {
                      if (v.count !== d.count)
                        return (
                          console.error(
                            "Cannot bridge " + v.count + " to " + d.count + "."
                          ),
                          void (t.count = 0)
                        );
                      (s = d.items),
                        (r = a.items),
                        (n = v.items),
                        (c = h.items);
                    }
                    var u,
                      l = v.count + d.count - 2;
                    for (
                      t.count = l,
                        A[0] = s,
                        A[1] = n,
                        b[0] = r,
                        b[1] = c,
                        u = 0;
                      u < l;
                      ++u
                    ) {
                      var m = t.items[u],
                        y = (u + 0) % 2,
                        f = Math.floor((u + 0) / 2),
                        C = b[y][A[y][f]];
                      (m.v1.vector[0] = C.vector[0]),
                        (m.v1.vector[1] = C.vector[1]),
                        (m.v1.texCoords[0] = C.texCoords[0]),
                        (m.v1.texCoords[1] = C.texCoords[1]),
                        (m.v1.direction[0] = C.direction[0]),
                        (m.v1.direction[1] = C.direction[1]),
                        (m.v1.base = C.base);
                      var _ = (u + 1) % 2,
                        g = Math.floor((u + 1) / 2),
                        T = b[_][A[_][g]];
                      (m.v2.vector[0] = T.vector[0]),
                        (m.v2.vector[1] = T.vector[1]),
                        (m.v2.texCoords[0] = T.texCoords[0]),
                        (m.v2.texCoords[1] = T.texCoords[1]),
                        (m.v2.direction[0] = T.direction[0]),
                        (m.v2.direction[1] = T.direction[1]),
                        (m.v2.base = T.base);
                      var M = (u + 2) % 2,
                        R = Math.floor((u + 2) / 2),
                        S = b[M][A[M][R]];
                      (m.v3.vector[0] = S.vector[0]),
                        (m.v3.vector[1] = S.vector[1]),
                        (m.v3.texCoords[0] = S.texCoords[0]),
                        (m.v3.texCoords[1] = S.texCoords[1]),
                        (m.v3.direction[0] = S.direction[0]),
                        (m.v3.direction[1] = S.direction[1]),
                        (m.v3.base = S.base);
                      var Y = (m.v1.base && m.v1.base.point) || I,
                        N = (m.v2.base && m.v2.base.point) || I,
                        X = (m.v3.base && m.v3.base.point) || I;
                      (P[0] = Y[0] + m.v1.vector[0]),
                        (P[1] = Y[1] + m.v1.vector[1]),
                        (w[0] = N[0] + m.v2.vector[0]),
                        (w[1] = N[1] + m.v2.vector[1]),
                        (E[0] = X[0] + m.v3.vector[0]),
                        (E[1] = X[1] + m.v3.vector[1]),
                        x(P, w, E) || o(m.v2, m.v3);
                    }
                  }),
                  (t.prototype.pie = function(t, i) {
                    if (0 !== i.lists[p.CAP].count) {
                      if (1 === i.lists[p.CAP].count)
                        return (
                          console.error(
                            "A single vector is not enough to define a pie."
                          ),
                          void (t.count = 0)
                        );
                      var e;
                      for (
                        t.count = i.lists[p.CAP].count - 1, e = 0;
                        e < t.count;
                        ++e
                      ) {
                        var s = t.items[e],
                          r = i.lists[p.CAP].items[e],
                          n = i.vectors.items[r];
                        (s.v1.vector[0] = n.vector[0]),
                          (s.v1.vector[1] = n.vector[1]),
                          (s.v1.texCoords[0] = n.texCoords[0]),
                          (s.v1.texCoords[1] = n.texCoords[1]),
                          (s.v1.direction[0] = n.direction[0]),
                          (s.v1.direction[1] = n.direction[1]),
                          (s.v1.base = n.base);
                        var c = i.lists[p.CAP].items[e + 1],
                          h = i.vectors.items[c];
                        (s.v2.vector[0] = h.vector[0]),
                          (s.v2.vector[1] = h.vector[1]),
                          (s.v2.texCoords[0] = h.texCoords[0]),
                          (s.v2.texCoords[1] = h.texCoords[1]),
                          (s.v2.direction[0] = h.direction[0]),
                          (s.v2.direction[1] = h.direction[1]),
                          (s.v2.base = h.base);
                        var v = i.capCenter,
                          a = i.vectors.items[v];
                        (s.v3.vector[0] = a.vector[0]),
                          (s.v3.vector[1] = a.vector[1]),
                          (s.v3.texCoords[0] = a.texCoords[0]),
                          (s.v3.texCoords[1] = a.texCoords[1]),
                          (s.v3.direction[0] = a.direction[0]),
                          (s.v3.direction[1] = a.direction[1]),
                          (s.v3.base = a.base);
                        var d = (s.v1.base && s.v1.base.point) || I,
                          u = (s.v2.base && s.v2.base.point) || I,
                          l = (s.v3.base && s.v3.base.point) || I;
                        (P[0] = d[0] + s.v1.vector[0]),
                          (P[1] = d[1] + s.v1.vector[1]),
                          (w[0] = u[0] + s.v2.vector[0]),
                          (w[1] = u[1] + s.v2.vector[1]),
                          (E[0] = l[0] + s.v3.vector[0]),
                          (E[1] = l[1] + s.v3.vector[1]),
                          x(P, w, E) || o(s.v2, s.v3);
                      }
                    } else t.count = 0;
                  }),
                  (t.prototype.buttCap = function(t, i, e) {
                    this.fastMiterJoin(t, i, e);
                  }),
                  (t.prototype.roundCap = function(t, i, e, o, s, r) {
                    void 0 === r && (r = 0), this.fastMiterJoin(t, i, e);
                    var n = o === y.START ? 0 : 1,
                      c = o === y.START ? 1 : 0;
                    t.capCenter = t.vectors.count;
                    var h = t.vectors.items[t.capCenter];
                    (h.vector[0] = 0),
                      (h.vector[1] = 0),
                      (h.texCoords[0] = 0),
                      (h.texCoords[1] = 0),
                      (h.direction[0] = 0),
                      (h.direction[1] = 0),
                      ++t.vectors.count,
                      l(
                        M,
                        t.vectors.items[n].vector,
                        t.vectors.items[c].vector,
                        s,
                        !1
                      );
                    var v = t.vectors.count,
                      a = t.lists[p.CAP];
                    a.items[0] = n;
                    var d,
                      x = t.vectors.items[n].texCoords[1],
                      u = t.vectors.items[c].texCoords[1];
                    for (d = 0; d < M.count; ++d) {
                      var m =
                          r * (1 - Math.abs(M.count / 2 - d) / (M.count / 2)),
                        f = x + (d / (M.count - 1)) * (u - x),
                        C = M.items[d],
                        _ = t.vectors.items[v + d];
                      (_.vector[0] = C[0]),
                        (_.vector[1] = C[1]),
                        (_.texCoords[0] = m),
                        (_.texCoords[1] = f),
                        (_.direction[0] = 0),
                        (_.direction[1] = 0),
                        (a.items[d + 1] = v + d);
                    }
                    (a.items[M.count + 1] = c),
                      (a.count = M.count + 2),
                      (t.vectors.count = v + M.count);
                  }),
                  (t.prototype.squareCap = function(t, i, e, o) {
                    this.fastMiterJoin(t, i, e);
                    var s = o === y.START ? 0 : 1,
                      r = o === y.START ? 1 : 0,
                      n = T[0],
                      c = T[1],
                      h = T[2],
                      v = T[3],
                      d = T[4],
                      x = t.vectors.items[s].vector;
                    (n[0] = R * x[0] - S * x[1]),
                      (n[1] = S * x[0] + R * x[1]),
                      a(v, n, Y),
                      (c[0] = R * n[0] - S * n[1]),
                      (c[1] = S * n[0] + R * n[1]),
                      (h[0] = R * c[0] - S * c[1]),
                      (h[1] = S * c[0] + R * c[1]),
                      a(d, h, Y);
                    var u = t.vectors.items[s];
                    (u.vector[0] = v[0]), (u.vector[1] = v[1]);
                    var l = t.vectors.items[r];
                    (l.vector[0] = d[0]), (l.vector[1] = d[1]);
                  }),
                  (t.prototype.fastMiterJoin = function(t, i, e) {
                    var o = c(T[0], e),
                      s = o,
                      r = v(T[1], o),
                      n = t.vectors.items[0];
                    (n.vector[0] = s[0]),
                      (n.vector[1] = s[1]),
                      (n.texCoords[0] = 0),
                      (n.texCoords[1] = -1),
                      (n.direction[0] = 0),
                      (n.direction[1] = 0);
                    var h = t.vectors.items[1];
                    (h.vector[0] = r[0]),
                      (h.vector[1] = r[1]),
                      (h.texCoords[0] = 0),
                      (h.texCoords[1] = 1),
                      (h.direction[0] = 0),
                      (h.direction[1] = 0),
                      (t.vectors.count = 2);
                    var a = t.lists[p.ENTRY];
                    (a.items[0] = 0), (a.items[1] = 1), (a.count = 2);
                    var d = t.lists[p.EXIT];
                    (d.items[0] = 0),
                      (d.items[1] = 1),
                      (d.count = 2),
                      (t.lists[p.CAP].count = 0),
                      (t.capCenter = void 0);
                  }),
                  (t.prototype.miterJoin = function(t, i, e) {
                    var o = c(T[0], i),
                      r = c(T[1], e),
                      h = T[2];
                    (h[0] = o[0] + r[0]), (h[1] = o[1] + r[1]);
                    var d = n(T[3], h),
                      x = s(d, o);
                    d = a(T[4], d, 1 / x);
                    var u = v(T[5], d);
                    if (this._distanceAlongCorrection) {
                      ((y = t.vectors.items[0]).vector[0] = d[0]),
                        (y.vector[1] = d[1]),
                        (y.texCoords[0] = 0),
                        (y.texCoords[1] = -1),
                        (y.direction[0] = i[0]),
                        (y.direction[1] = i[1]),
                        ((f = t.vectors.items[1]).vector[0] = u[0]),
                        (f.vector[1] = u[1]),
                        (f.texCoords[0] = 0),
                        (f.texCoords[1] = 1),
                        (f.direction[0] = i[0]),
                        (f.direction[1] = i[1]);
                      var l = t.vectors.items[2];
                      (l.vector[0] = d[0]),
                        (l.vector[1] = d[1]),
                        (l.texCoords[0] = 0),
                        (l.texCoords[1] = -1),
                        (l.direction[0] = e[0]),
                        (l.direction[1] = e[1]);
                      var m = t.vectors.items[3];
                      (m.vector[0] = u[0]),
                        (m.vector[1] = u[1]),
                        (m.texCoords[0] = 0),
                        (m.texCoords[1] = 1),
                        (m.direction[0] = e[0]),
                        (m.direction[1] = e[1]),
                        (t.vectors.count = 4),
                        ((C = t.lists[p.ENTRY]).items[0] = 0),
                        (C.items[1] = 1),
                        (C.count = 2),
                        ((_ = t.lists[p.EXIT]).items[0] = 2),
                        (_.items[1] = 3),
                        (_.count = 2);
                    } else {
                      var y, f, C, _;
                      ((y = t.vectors.items[0]).vector[0] = d[0]),
                        (y.vector[1] = d[1]),
                        (y.texCoords[0] = 0),
                        (y.texCoords[1] = -1),
                        (y.direction[0] = 0),
                        (y.direction[1] = 0),
                        ((f = t.vectors.items[1]).vector[0] = u[0]),
                        (f.vector[1] = u[1]),
                        (f.texCoords[0] = 0),
                        (f.texCoords[1] = 1),
                        (f.direction[0] = 0),
                        (f.direction[1] = 0),
                        (t.vectors.count = 2),
                        ((C = t.lists[p.ENTRY]).items[0] = 0),
                        (C.items[1] = 1),
                        (C.count = 2),
                        ((_ = t.lists[p.EXIT]).items[0] = 0),
                        (_.items[1] = 1),
                        (_.count = 2);
                    }
                    (t.lists[p.CAP].count = 0), (t.capCenter = void 0);
                  }),
                  (t.prototype.bevelJoin = function(t, i, e, o) {
                    var r = o * o,
                      x = h(i, e),
                      u = x > 0 ? [-1, 1] : [1, -1],
                      l = u[0],
                      y = u[1],
                      C = x > 0 ? v(T[0], c(T[1], i)) : c(T[2], i),
                      _ = x > 0 ? v(T[3], c(T[4], e)) : c(T[5], e),
                      g = T[6];
                    (g[0] = C[0] + _[0]), (g[1] = C[1] + _[1]);
                    var M = n(T[7], g),
                      A = v(T[8], M),
                      b = s(M, C),
                      I = h(M, C),
                      P = Math.abs(I / b),
                      w = 1 + P * P,
                      E =
                        w < f
                          ? [P, this._distanceAlongCorrection]
                          : [Math.sqrt(f - 1), !0],
                      R = E[0],
                      S = E[1],
                      Y =
                        w < r
                          ? [P, this._distanceAlongCorrection]
                          : [Math.sqrt(r - 1), !0],
                      N = Y[0],
                      X = Y[1];
                    if (X && S) {
                      d(
                        (L = t.vectors.items[0]).vector,
                        v(T[9], C),
                        a(T[10], v(T[11], i), R)
                      ),
                        (L.texCoords[0] = 0),
                        (L.texCoords[1] = l),
                        (L.direction[0] = this._distanceAlongCorrection
                          ? i[0]
                          : 0),
                        (L.direction[1] = this._distanceAlongCorrection
                          ? i[1]
                          : 0),
                        d(
                          (z = t.vectors.items[1]).vector,
                          v(T[12], _),
                          a(T[13], e, R)
                        ),
                        (z.texCoords[0] = 0),
                        (z.texCoords[1] = l),
                        (z.direction[0] = this._distanceAlongCorrection
                          ? e[0]
                          : 0),
                        (z.direction[1] = this._distanceAlongCorrection
                          ? e[1]
                          : 0),
                        ((q = t.vectors.items[2]).vector[0] = 0),
                        (q.vector[1] = 0),
                        (q.texCoords[0] = 0),
                        (q.texCoords[1] = 0),
                        (q.direction[0] = 0),
                        (q.direction[1] = 0),
                        d((j = t.vectors.items[3]).vector, C, a(T[14], i, N)),
                        (j.texCoords[0] = 0),
                        (j.texCoords[1] = y),
                        (j.direction[0] = this._distanceAlongCorrection
                          ? i[0]
                          : 0),
                        (j.direction[1] = this._distanceAlongCorrection
                          ? i[1]
                          : 0);
                      var J = t.vectors.items[4];
                      if (
                        (d(J.vector, _, a(T[15], v(T[16], e), N)),
                        (J.texCoords[0] = 0),
                        (J.texCoords[1] = y),
                        (J.direction[0] = this._distanceAlongCorrection
                          ? e[0]
                          : 0),
                        (J.direction[1] = this._distanceAlongCorrection
                          ? e[1]
                          : 0),
                        (t.vectors.count = 5),
                        ((k = t.lists[p.ENTRY]).items[0] = 0),
                        (k.items[1] = 2),
                        (k.items[2] = 3),
                        (k.count = 3),
                        ((O = t.lists[p.EXIT]).items[0] = 1),
                        (O.items[1] = 2),
                        (O.items[2] = 4),
                        (O.count = 3),
                        w < r)
                      )
                        ((D = t.lists[p.CAP]).count = 0),
                          (t.capCenter = void 0);
                      else
                        ((D = t.lists[p.CAP]).items[0] = 3),
                          (D.items[1] = 4),
                          (D.count = 2),
                          (t.capCenter = 2);
                    } else if (!X && S) {
                      d(
                        (L = t.vectors.items[0]).vector,
                        v(T[9], C),
                        a(T[10], v(T[11], i), R)
                      ),
                        (L.texCoords[0] = 0),
                        (L.texCoords[1] = l),
                        (L.direction[0] = this._distanceAlongCorrection
                          ? i[0]
                          : 0),
                        (L.direction[1] = this._distanceAlongCorrection
                          ? i[1]
                          : 0),
                        d(
                          (z = t.vectors.items[1]).vector,
                          v(T[12], _),
                          a(T[13], e, R)
                        ),
                        (z.texCoords[0] = 0),
                        (z.texCoords[1] = l),
                        (z.direction[0] = this._distanceAlongCorrection
                          ? e[0]
                          : 0),
                        (z.direction[1] = this._distanceAlongCorrection
                          ? e[1]
                          : 0),
                        ((q = t.vectors.items[2]).vector[0] = 0),
                        (q.vector[1] = 0),
                        (q.texCoords[0] = 0),
                        (q.texCoords[1] = 0),
                        (q.direction[0] = 0),
                        (q.direction[1] = 0),
                        a((j = t.vectors.items[3]).vector, M, 1 / b),
                        (j.texCoords[0] = 0),
                        (j.texCoords[1] = y),
                        (j.direction[0] = 0),
                        (j.direction[1] = 0),
                        (t.vectors.count = 4),
                        ((k = t.lists[p.ENTRY]).items[0] = 0),
                        (k.items[1] = 2),
                        (k.items[2] = 3),
                        (k.count = 3),
                        ((O = t.lists[p.EXIT]).items[0] = 1),
                        (O.items[1] = 2),
                        (O.items[2] = 3),
                        (O.count = 3),
                        (t.lists[p.CAP].count = 0),
                        (t.capCenter = void 0);
                    } else if (X && !S) {
                      var q, j, D;
                      if (
                        (a((L = t.vectors.items[0]).vector, A, 1 / b),
                        (L.texCoords[0] = 0),
                        (L.texCoords[1] = l),
                        (L.direction[0] = 0),
                        (L.direction[1] = 0),
                        ((z = t.vectors.items[1]).vector[0] = 0),
                        (z.vector[1] = 0),
                        (z.texCoords[0] = 0),
                        (z.texCoords[1] = 0),
                        (z.direction[0] = 0),
                        (z.direction[1] = 0),
                        d((q = t.vectors.items[2]).vector, C, a(T[9], i, N)),
                        (q.texCoords[0] = 0),
                        (q.texCoords[1] = y),
                        (q.direction[0] = this._distanceAlongCorrection
                          ? i[0]
                          : 0),
                        (q.direction[1] = this._distanceAlongCorrection
                          ? i[1]
                          : 0),
                        d(
                          (j = t.vectors.items[3]).vector,
                          _,
                          a(T[10], v(T[11], e), N)
                        ),
                        (j.texCoords[0] = 0),
                        (j.texCoords[1] = y),
                        (j.direction[0] = this._distanceAlongCorrection
                          ? e[0]
                          : 0),
                        (j.direction[1] = this._distanceAlongCorrection
                          ? e[1]
                          : 0),
                        (t.vectors.count = 4),
                        ((k = t.lists[p.ENTRY]).items[0] = 0),
                        (k.items[1] = 1),
                        (k.items[2] = 2),
                        (k.count = 3),
                        ((O = t.lists[p.EXIT]).items[0] = 0),
                        (O.items[1] = 1),
                        (O.items[2] = 3),
                        (O.count = 3),
                        w < r)
                      )
                        ((D = t.lists[p.CAP]).count = 0),
                          (t.capCenter = void 0);
                      else
                        ((D = t.lists[p.CAP]).items[0] = 2),
                          (D.items[1] = 3),
                          (D.count = 2),
                          (t.capCenter = 1);
                    } else if (!X && !S) {
                      var L, z, k, O;
                      a((L = t.vectors.items[0]).vector, A, 1 / b),
                        (L.texCoords[0] = 0),
                        (L.texCoords[1] = l),
                        (L.direction[0] = 0),
                        (L.direction[1] = 0),
                        a((z = t.vectors.items[1]).vector, M, 1 / b),
                        (z.texCoords[0] = 0),
                        (z.texCoords[1] = y),
                        (z.direction[0] = 0),
                        (z.direction[1] = 0),
                        (t.vectors.count = 2),
                        ((k = t.lists[p.ENTRY]).items[0] = 0),
                        (k.items[1] = 1),
                        (k.count = 2),
                        ((O = t.lists[p.EXIT]).items[0] = 0),
                        (O.items[1] = 1),
                        (O.count = 2),
                        (t.lists[p.CAP].count = 0),
                        (t.capCenter = void 0);
                    }
                    x < 0 && (m(t.lists[p.ENTRY]), m(t.lists[p.EXIT]));
                  }),
                  (t.prototype.roundJoin = function(t, i, e, o) {
                    var r = h(i, e),
                      x = r > 0 ? [-1, 1] : [1, -1],
                      u = x[0],
                      y = x[1],
                      C = r > 0 ? v(T[0], c(T[1], i)) : c(T[2], i),
                      _ = r > 0 ? v(T[3], c(T[4], e)) : c(T[5], e),
                      g = T[6];
                    (g[0] = C[0] + _[0]), (g[1] = C[1] + _[1]);
                    var A = n(T[7], g),
                      b = v(T[8], A),
                      I = s(A, C),
                      P = h(A, C),
                      w = Math.abs(P / I),
                      E =
                        1 + w * w < f
                          ? [w, this._distanceAlongCorrection]
                          : [Math.sqrt(f - 1), !0],
                      R = E[0];
                    if (E[1]) {
                      ((Y = t.vectors.items[0]).vector[0] = C[0]),
                        (Y.vector[1] = C[1]),
                        (Y.texCoords[0] = 0),
                        (Y.texCoords[1] = y),
                        (Y.direction[0] = 0),
                        (Y.direction[1] = 0),
                        ((N = t.vectors.items[1]).vector[0] = _[0]),
                        (N.vector[1] = _[1]),
                        (N.texCoords[0] = 0),
                        (N.texCoords[1] = y),
                        (N.direction[0] = 0),
                        (N.direction[1] = 0),
                        d(
                          (X = t.vectors.items[2]).vector,
                          v(T[9], C),
                          a(T[10], v(T[11], i), R)
                        ),
                        (X.texCoords[0] = 0),
                        (X.texCoords[1] = u),
                        (X.direction[0] = this._distanceAlongCorrection
                          ? i[0]
                          : 0),
                        (X.direction[1] = this._distanceAlongCorrection
                          ? i[1]
                          : 0),
                        d(
                          (J = t.vectors.items[3]).vector,
                          v(T[12], _),
                          a(T[13], e, R)
                        ),
                        (J.texCoords[0] = 0),
                        (J.texCoords[1] = u),
                        (J.direction[0] = this._distanceAlongCorrection
                          ? e[0]
                          : 0),
                        (J.direction[1] = this._distanceAlongCorrection
                          ? e[1]
                          : 0);
                      var S = t.vectors.items[4];
                      (S.vector[0] = 0),
                        (S.vector[1] = 0),
                        (S.texCoords[0] = 0),
                        (S.texCoords[1] = 0),
                        (S.direction[0] = 0),
                        (S.direction[1] = 0),
                        (t.vectors.count = 5),
                        ((q = t.lists[p.ENTRY]).items[0] = 2),
                        (q.items[1] = 4),
                        (q.items[2] = 0),
                        (q.count = 3),
                        ((j = t.lists[p.EXIT]).items[0] = 3),
                        (j.items[1] = 4),
                        (j.items[2] = 1),
                        (j.count = 3),
                        (t.capCenter = 4);
                    } else {
                      var Y, N, X, J, q, j;
                      ((Y = t.vectors.items[0]).vector[0] = C[0]),
                        (Y.vector[1] = C[1]),
                        (Y.texCoords[0] = 0),
                        (Y.texCoords[1] = y),
                        (Y.direction[0] = 0),
                        (Y.direction[1] = 0),
                        ((N = t.vectors.items[1]).vector[0] = _[0]),
                        (N.vector[1] = _[1]),
                        (N.texCoords[0] = 0),
                        (N.texCoords[1] = y),
                        (N.direction[0] = 0),
                        (N.direction[1] = 0),
                        a((X = t.vectors.items[2]).vector, b, 1 / I),
                        (X.texCoords[0] = 0),
                        (X.texCoords[1] = u),
                        (X.direction[0] = 0),
                        (X.direction[1] = 0),
                        ((J = t.vectors.items[3]).vector[0] = 0),
                        (J.vector[1] = 0),
                        (J.texCoords[0] = 0),
                        (J.texCoords[1] = 0),
                        (J.direction[0] = 0),
                        (J.direction[1] = 0),
                        (t.vectors.count = 4),
                        ((q = t.lists[p.ENTRY]).items[0] = 2),
                        (q.items[1] = 3),
                        (q.items[2] = 0),
                        (q.count = 3),
                        ((j = t.lists[p.EXIT]).items[0] = 2),
                        (j.items[1] = 3),
                        (j.items[2] = 1),
                        (j.count = 3),
                        (t.capCenter = 3);
                    }
                    l(M, C, _, o, r < 0);
                    var D,
                      L = t.vectors.count,
                      z = t.lists[p.CAP];
                    for (z.items[0] = 0, D = 0; D < M.count; ++D) {
                      var k = M.items[D],
                        O = t.vectors.items[L + D];
                      (O.vector[0] = k[0]),
                        (O.vector[1] = k[1]),
                        (O.texCoords[0] = 0),
                        (O.texCoords[1] = y),
                        (O.direction[0] = 0),
                        (O.direction[1] = 0),
                        (z.items[D + 1] = L + D);
                    }
                    (z.items[M.count + 1] = 1),
                      (z.count = M.count + 2),
                      (t.vectors.count = L + M.count),
                      r < 0 && (m(t.lists[p.ENTRY]), m(t.lists[p.EXIT]));
                  }),
                  (t.prototype.unitRoundJoin = function(t, i, e, o) {
                    var s = h(i, e),
                      r = s > 0 ? [-1, 1] : [1, -1],
                      n = r[0],
                      a = r[1],
                      d = s > 0 ? v(T[0], c(T[1], i)) : c(T[2], i),
                      x = s > 0 ? v(T[3], c(T[4], e)) : c(T[5], e),
                      u = t.vectors.items[0];
                    (u.vector[0] = d[0]),
                      (u.vector[1] = d[1]),
                      (u.texCoords[0] = 0),
                      (u.texCoords[1] = a),
                      (u.direction[0] = 0),
                      (u.direction[1] = 0);
                    var y = t.vectors.items[1];
                    (y.vector[0] = x[0]),
                      (y.vector[1] = x[1]),
                      (y.texCoords[0] = 0),
                      (y.texCoords[1] = a),
                      (y.direction[0] = 0),
                      (y.direction[1] = 0);
                    var f = t.vectors.items[2];
                    v(f.vector, d),
                      (f.texCoords[0] = 0),
                      (f.texCoords[1] = n),
                      (f.direction[0] = 0),
                      (f.direction[1] = 0);
                    var C = t.vectors.items[3];
                    v(C.vector, x),
                      (C.texCoords[0] = 0),
                      (C.texCoords[1] = n),
                      (C.direction[0] = 0),
                      (C.direction[1] = 0);
                    var _ = t.vectors.items[4];
                    (_.vector[0] = 0),
                      (_.vector[1] = 0),
                      (_.texCoords[0] = 0),
                      (_.texCoords[1] = 0),
                      (_.direction[0] = 0),
                      (_.direction[1] = 0),
                      (t.vectors.count = 5);
                    var g = t.lists[p.ENTRY];
                    (g.items[0] = 2), (g.items[1] = 0), (g.count = 2);
                    var A = t.lists[p.EXIT];
                    (A.items[0] = 3),
                      (A.items[1] = 1),
                      (A.count = 2),
                      (t.capCenter = 4),
                      l(M, d, x, o, s < 0);
                    var b,
                      I = t.vectors.count,
                      P = t.lists[p.CAP];
                    for (P.items[0] = 0, b = 0; b < M.count; ++b) {
                      var w = M.items[b],
                        E = t.vectors.items[I + b];
                      (E.vector[0] = w[0]),
                        (E.vector[1] = w[1]),
                        (E.texCoords[0] = 0),
                        (E.texCoords[1] = a),
                        (E.direction[0] = 0),
                        (E.direction[1] = 0),
                        (P.items[b + 1] = I + b);
                    }
                    (P.items[M.count + 1] = 1),
                      (P.count = M.count + 2),
                      (t.vectors.count = I + M.count),
                      s < 0 && (m(t.lists[p.ENTRY]), m(t.lists[p.EXIT]));
                  }),
                  (t.prototype.rectJoin = function(t, i, e) {
                    var o = c(T[0], i),
                      s = c(T[1], e),
                      r = t.vectors.items[0];
                    (r.vector[0] = o[0]),
                      (r.vector[1] = o[1]),
                      (r.texCoords[0] = 0),
                      (r.texCoords[1] = -1),
                      (r.direction[0] = 0),
                      (r.direction[1] = 0);
                    var n = t.vectors.items[1];
                    (n.vector[0] = s[0]),
                      (n.vector[1] = s[1]),
                      (n.texCoords[0] = 0),
                      (n.texCoords[1] = -1),
                      (n.direction[0] = 0),
                      (n.direction[1] = 0);
                    var h = t.vectors.items[2];
                    v(h.vector, o),
                      (h.texCoords[0] = 0),
                      (h.texCoords[1] = 1),
                      (h.direction[0] = 0),
                      (h.direction[1] = 0);
                    var a = t.vectors.items[3];
                    v(a.vector, s),
                      (a.texCoords[0] = 0),
                      (a.texCoords[1] = 1),
                      (a.direction[0] = 0),
                      (a.direction[1] = 0),
                      (t.vectors.count = 4);
                    var d = t.lists[p.ENTRY];
                    (d.items[0] = 0), (d.items[1] = 2), (d.count = 2);
                    var x = t.lists[p.EXIT];
                    (x.items[0] = 1),
                      (x.items[1] = 3),
                      (x.count = 2),
                      (t.capCenter = void 0);
                  }),
                  t
                );
              })();
            i.Tessellator = N;
          }.apply(null, o)) || (t.exports = s);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/engine/webgl/Geometry": 2037,
      "esri/views/2d/engine/webgl/Rect": 2051,
      "esri/views/2d/engine/webgl/TextShaping": 2083,
      "esri/views/2d/engine/webgl/TileClipper": 2084,
      "esri/views/2d/engine/webgl/LineTess": 2125
    });
  })();
