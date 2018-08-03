(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    2118: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(109), i(11), i(2007), i(2068), i(2010), i(2038)]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o) {
            var l = r.getLogger("esri.views.2d.engine.webgl.WGLDisplayList"),
              u = (function() {
                function e() {
                  this.symbolLevels = [];
                }
                return (
                  Object.defineProperty(e.prototype, "empty", {
                    get: function() {
                      return (
                        !this.symbolLevels || 0 === this.symbolLevels.length
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.addToList = function(e) {
                    var t = this;
                    Array.isArray(e)
                      ? e.forEach(function(e) {
                          t._addToList(e);
                        })
                      : this._addToList(e);
                  }),
                  (e.prototype.removeFromList = function(e) {
                    var t = this;
                    Array.isArray(e) || (e = [e]),
                      e.forEach(function(e) {
                        t._removeFromList(e);
                      });
                  }),
                  (e.prototype.ofType = function(e) {
                    var t, r, n, a, s, o, l, u, h, f;
                    return i(this, function(i) {
                      switch (i.label) {
                        case 0:
                          (t = 0), (r = this.symbolLevels), (i.label = 1);
                        case 1:
                          if (!(t < r.length)) return [3, 8];
                          (n = r[t]), (a = 0), (s = n.zLevels), (i.label = 2);
                        case 2:
                          if (!(a < s.length)) return [3, 7];
                          if (
                            ((o = s[a]),
                            (l = o.geometryDPInfo),
                            (u = this._getDPInfoType(e)),
                            !l[u])
                          )
                            return [3, 6];
                          (h = 0), (f = l[u]), (i.label = 3);
                        case 3:
                          return h < f.length ? [4, f[h]] : [3, 6];
                        case 4:
                          i.sent(), (i.label = 5);
                        case 5:
                          return h++, [3, 3];
                        case 6:
                          return a++, [3, 2];
                        case 7:
                          return t++, [3, 1];
                        case 8:
                          return [2];
                      }
                    });
                  }),
                  (e.prototype.clone = function() {
                    for (
                      var t = new e(), i = 0, r = this.symbolLevels;
                      i < r.length;
                      i++
                    ) {
                      var n = r[i];
                      t.symbolLevels.push(n.clone());
                    }
                    return t;
                  }),
                  (e.prototype._addToList = function(e) {
                    var t = e.symbolLevel,
                      i = e.zOrder,
                      r = this._getDisplayList(t, i, e.geometryType),
                      n = r.length > 0 ? r[r.length - 1] : null;
                    if (
                      null !== n &&
                      s.isSameMaterialInfo(n.materialInfo, e.materialInfo) &&
                      n.indexFrom + n.indexCount === e.indexFrom
                    )
                      n.indexCount += e.indexCount;
                    else {
                      var a = new h();
                      (a.indexFrom = e.indexFrom),
                        (a.indexCount = e.indexCount),
                        (a.materialInfo = e.materialInfo),
                        (a.geometryType = e.geometryType),
                        r.push(a);
                    }
                  }),
                  (e.prototype._removeFromList = function(e) {
                    for (
                      var t = e.symbolLevel,
                        i = e.zOrder,
                        r = this._getDisplayList(t, i, e.geometryType),
                        n = r.length,
                        s = void 0,
                        o = 0;
                      o < n;
                      ++o
                    ) {
                      var l = r[o];
                      e.indexFrom + e.indexCount > l.indexFrom &&
                        e.indexFrom < l.indexFrom + l.indexCount &&
                        (s = o);
                    }
                    if (void 0 !== s) {
                      l = r[s];
                      if (e.indexFrom === l.indexFrom)
                        (l.indexCount -= e.indexCount),
                          (l.indexFrom += e.indexCount),
                          0 === l.indexCount && r.splice(s, 1);
                      else if (
                        e.indexFrom + e.indexCount ===
                        l.indexFrom + l.indexCount
                      )
                        (l.indexCount -= e.indexCount),
                          0 === l.indexCount && r.splice(s, 1);
                      else {
                        var u = l.indexFrom,
                          f = e.indexFrom - l.indexFrom,
                          p = e.indexCount,
                          d =
                            l.indexFrom +
                            l.indexCount -
                            (e.indexFrom + e.indexCount);
                        l.indexCount = f;
                        var c = new h();
                        (c.geometryType = l.geometryType),
                          (c.materialInfo = new a.default()),
                          c.materialInfo.copy(l.materialInfo),
                          (c.indexFrom = u + f + p),
                          (c.indexCount = d),
                          r.splice(s + 1, 0, c);
                      }
                    }
                  }),
                  (e.prototype._getDisplayList = function(e, t, i) {
                    for (var r, a = this.symbolLevels.length, s = 0; s < a; s++)
                      if (this.symbolLevels[s].symbolLevel === e) {
                        r = this.symbolLevels[s];
                        break;
                      }
                    r ||
                      (((r = new d()).symbolLevel = e),
                      this.symbolLevels.push(r));
                    for (var o, l = r.zLevels.length, u = 0; u < l; u++)
                      if (r.zLevels[u].zLevel === t) {
                        o = r.zLevels[u];
                        break;
                      }
                    var h;
                    switch (
                      (o ||
                        (((o = new p()).geometryDPInfo = new f()),
                        (o.zLevel = t),
                        r.zLevels.push(o)),
                      i)
                    ) {
                      case n.WGLGeometryType.FILL:
                        o.geometryDPInfo.fill || (o.geometryDPInfo.fill = []),
                          (h = o.geometryDPInfo.fill);
                        break;
                      case n.WGLGeometryType.LINE:
                        o.geometryDPInfo.line || (o.geometryDPInfo.line = []),
                          (h = o.geometryDPInfo.line);
                        break;
                      case n.WGLGeometryType.MARKER:
                        o.geometryDPInfo.marker ||
                          (o.geometryDPInfo.marker = []),
                          (h = o.geometryDPInfo.marker);
                        break;
                      case n.WGLGeometryType.TEXT:
                        o.geometryDPInfo.text || (o.geometryDPInfo.text = []),
                          (h = o.geometryDPInfo.text);
                        break;
                      case n.WGLGeometryType.LABEL:
                        o.geometryDPInfo.label || (o.geometryDPInfo.label = []),
                          (h = o.geometryDPInfo.label);
                        break;
                      default:
                        console.error(
                          "Trying to add a record with geometry type '" +
                            i +
                            "'."
                        );
                    }
                    return h;
                  }),
                  (e.prototype.serialize = function(e) {
                    return o.serializeList(e, this.symbolLevels), e;
                  }),
                  (e.deserialize = function(t) {
                    var i = new e();
                    return (i.symbolLevels = o.deserializeList(t, d)), i;
                  }),
                  (e.prototype._getDPInfoType = function(e) {
                    switch (e) {
                      case n.WGLGeometryType.FILL:
                        return "fill";
                      case n.WGLGeometryType.LINE:
                        return "line";
                      case n.WGLGeometryType.MARKER:
                        return "marker";
                      case n.WGLGeometryType.TEXT:
                        return "text";
                      case n.WGLGeometryType.LABEL:
                        return "label";
                      default:
                        l.error(
                          "DisplayList: Tried to convert unknown geometryType: " +
                            e
                        );
                    }
                  }),
                  e
                );
              })(),
              h = (function() {
                function e() {
                  (this.materialInfo = null),
                    (this.indexFrom = 0),
                    (this.indexCount = 0);
                }
                return (
                  (e.prototype.clone = function() {
                    var t = new e();
                    return (
                      (t.geometryType = this.geometryType),
                      (t.materialInfo = new a.default()),
                      t.materialInfo.copy(this.materialInfo),
                      (t.indexFrom = this.indexFrom),
                      (t.indexCount = this.indexCount),
                      t
                    );
                  }),
                  (e.prototype.serialize = function(e) {
                    return (
                      this.materialInfo.serialize(e),
                      e.writeInt32(this.indexFrom),
                      e.writeInt32(this.indexCount),
                      e
                    );
                  }),
                  (e.deserialize = function(t, i) {
                    var r = new e();
                    return (
                      (r.geometryType = i.geometryType),
                      (r.materialInfo = a.default.deserialize(t)),
                      (r.indexFrom = t.readInt32()),
                      (r.indexCount = t.readInt32()),
                      r
                    );
                  }),
                  e
                );
              })(),
              f = (function() {
                function e() {
                  (this.fill = null),
                    (this.line = null),
                    (this.marker = null),
                    (this.text = null),
                    (this.label = null);
                }
                return (
                  (e.prototype.clone = function() {
                    var t = new e();
                    return (
                      (t.fill =
                        this.fill &&
                        this.fill.map(function(e) {
                          return e.clone();
                        })),
                      (t.line =
                        this.line &&
                        this.line.map(function(e) {
                          return e.clone();
                        })),
                      (t.marker =
                        this.marker &&
                        this.marker.map(function(e) {
                          return e.clone();
                        })),
                      (t.text =
                        this.text &&
                        this.text.map(function(e) {
                          return e.clone();
                        })),
                      (t.label =
                        this.label &&
                        this.label.map(function(e) {
                          return e.clone();
                        })),
                      t
                    );
                  }),
                  (e.prototype.serialize = function(e) {
                    return (
                      o.serializeList(e, this.fill),
                      o.serializeList(e, this.line),
                      o.serializeList(e, this.marker),
                      o.serializeList(e, this.text),
                      o.serializeList(e, this.label),
                      e
                    );
                  }),
                  (e.deserialize = function(t) {
                    var i = new e(),
                      r = { geometryType: n.WGLGeometryType.FILL },
                      a = o.deserializeList(t, h, r);
                    a.length && (i.fill = a),
                      (r.geometryType = n.WGLGeometryType.LINE);
                    var s = o.deserializeList(t, h, r);
                    s.length && (i.line = s),
                      (r.geometryType = n.WGLGeometryType.MARKER);
                    var l = o.deserializeList(t, h, r);
                    l.length && (i.marker = l),
                      (r.geometryType = n.WGLGeometryType.TEXT);
                    var u = o.deserializeList(t, h, r);
                    u.length && (i.text = u),
                      (r.geometryType = n.WGLGeometryType.LABEL);
                    var f = o.deserializeList(t, h, r);
                    return f.length && (i.label = f), i;
                  }),
                  e
                );
              })(),
              p = (function() {
                function e() {
                  this.geometryDPInfo = new f();
                }
                return (
                  (e.prototype.clone = function() {
                    var t = new e();
                    return (
                      (t.zLevel = this.zLevel),
                      (t.geometryDPInfo = this.geometryDPInfo.clone()),
                      t
                    );
                  }),
                  (e.prototype.serialize = function(e) {
                    return (
                      e.writeInt32(this.zLevel),
                      this.geometryDPInfo.serialize(e),
                      e
                    );
                  }),
                  (e.deserialize = function(t) {
                    var i = new e();
                    return (
                      (i.zLevel = t.readInt32()),
                      (i.geometryDPInfo = f.deserialize(t)),
                      i
                    );
                  }),
                  e
                );
              })(),
              d = (function() {
                function e() {
                  this.zLevels = [];
                }
                return (
                  (e.prototype.clone = function() {
                    var t = new e();
                    t.symbolLevel = this.symbolLevel;
                    for (var i = 0, r = this.zLevels; i < r.length; i++) {
                      var n = r[i];
                      t.zLevels.push(n.clone());
                    }
                    return t;
                  }),
                  (e.prototype.serialize = function(e) {
                    return (
                      e.writeInt32(this.symbolLevel),
                      o.serializeList(e, this.zLevels),
                      e
                    );
                  }),
                  (e.deserialize = function(t) {
                    var i = new e();
                    return (
                      (i.symbolLevel = t.readInt32()),
                      (i.zLevels = o.deserializeList(t, p)),
                      i
                    );
                  }),
                  e
                );
              })();
            return u;
          }.apply(null, r)) || (e.exports = n);
    },
    2119: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2), i(0), i(3), i(777), i(1), i(772)]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = (function(e) {
              function t(t) {
                var i = e.call(this) || this;
                return (i.tiles = new Map()), (i.layer = null), i;
              }
              return (
                i(t, e),
                (t.prototype.destroy = function() {
                  this.tiles.clear(),
                    (this.layer = this.layerView = this.tileInfoView = this.highlightOptions = this.configuration = this.tiles = null);
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return this.isUpdating();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.acquireTile = function(e) {
                  var t = this,
                    i = this.createTile(e);
                  return (
                    i.once("attach", function() {
                      return t.notifyChange("updating");
                    }),
                    this.tiles.set(e.id, i),
                    i
                  );
                }),
                (t.prototype.forEachTile = function(e) {
                  this.tiles.forEach(e);
                }),
                (t.prototype.releaseTile = function(e) {
                  this.tiles.delete(e.key.id), this.disposeTile(e);
                }),
                (t.prototype.isUpdating = function() {
                  var e = !0;
                  return (
                    this.tiles.forEach(function(t) {
                      e = e && t.status !== o.TileStatus.INITIALIZED;
                    }),
                    !e
                  );
                }),
                (t.prototype.requestUpdate = function() {
                  this.layerView.requestUpdate();
                }),
                r([s.property()], t.prototype, "configuration", void 0),
                r([s.property()], t.prototype, "highlightOptions", void 0),
                r([s.property()], t.prototype, "layer", void 0),
                r([s.property()], t.prototype, "layerView", void 0),
                r([s.property()], t.prototype, "tileInfoView", void 0),
                r([s.property()], t.prototype, "updating", null),
                r([s.subclass()], t)
              );
            })(s.declared(n, a));
            t.default = l;
          }.apply(null, r)) || (e.exports = n);
    },
    2153: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2037), i(2051), i(14)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            function a(e, t, i) {
              n.packFloatRGBA(e, t, i);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.packFloat = a);
            var s = (function() {
              function e() {}
              return (
                (e.checkSDF = function(e) {
                  return !0;
                }),
                (e.prototype._extractGeometry = function(e) {
                  if (!e) return null;
                  var t = e.symbolLayers;
                  if (!t || 1 !== t.length) return null;
                  var r = t[0];
                  if (!r) return null;
                  var n = r.markerGraphics;
                  if (!n || 1 !== n.length) return null;
                  var a = n[0];
                  if (!a) return null;
                  var s = a.geometry;
                  if (!s || !s.rings) return null;
                  for (var o = [], l = 0, u = s.rings; l < u.length; l++) {
                    for (var h = [], f = 0, p = u[l]; f < p.length; f++) {
                      var d = p[f];
                      h.push(new i.Point(d[0], d[1]));
                    }
                    o.push(h);
                  }
                  return o;
                }),
                (e.prototype._getEnvelope = function(e) {
                  for (
                    var t = 1 / 0,
                      i = -1 / 0,
                      n = 1 / 0,
                      a = -1 / 0,
                      s = 0,
                      o = e;
                    s < o.length;
                    s++
                  )
                    for (var l = 0, u = o[s]; l < u.length; l++) {
                      var h = u[l];
                      h.x < t && (t = h.x),
                        h.x > i && (i = h.x),
                        h.y < n && (n = h.y),
                        h.y > a && (a = h.y);
                    }
                  return new r(t, n, i - t, a - n);
                }),
                (e.prototype.buildSDF = function(e) {
                  var t = this._extractGeometry(e);
                  if (!t) return null;
                  var i = this._getEnvelope(t);
                  if (i.width <= 0 || i.height <= 0) return null;
                  for (
                    var r = Math.floor(31.5),
                      n = (128 - 2 * (r + 0 + 1)) / Math.max(i.width, i.height),
                      a = Math.round(i.width * n),
                      s = Math.round(i.height * n),
                      o = a + 2 * r,
                      l = s + 2 * r,
                      u = 0,
                      h = t;
                    u < h.length;
                    u++
                  )
                    for (var f = 0, p = h[u]; f < p.length; f++) {
                      var d = p[f];
                      (d.x -= i.x),
                        (d.y -= i.y),
                        (d.x *= n),
                        (d.y *= n),
                        (d.x += r - 0.5),
                        (d.y += r - 0.5);
                    }
                  var c = this._dist_map(t, o, l, r);
                  return (
                    this._sign_dist_map(t, o, l, r, c),
                    [this._encodeDistMap(c, r), o, l, a, s, n]
                  );
                }),
                (e.prototype._dist_map = function(e, t, i, r) {
                  for (
                    var n = t * i,
                      a = new Float32Array(n),
                      s = r * r + 1,
                      o = 0;
                    o < n;
                    ++o
                  )
                    a[o] = s;
                  for (var l = 0, u = e; l < u.length; l++) {
                    var h = u[l],
                      f = h.length;
                    for (o = 1; o < f; ++o) {
                      var p = h[o - 1],
                        d = h[o],
                        c = void 0,
                        y = void 0;
                      p.x < d.x
                        ? ((c = p.x), (y = d.x))
                        : ((c = d.x), (y = p.x));
                      var v = void 0,
                        g = void 0;
                      p.y < d.y
                        ? ((v = p.y), (g = d.y))
                        : ((v = d.y), (g = p.y));
                      var m = Math.floor(c) - r,
                        _ = Math.floor(y) + r,
                        x = Math.floor(v) - r,
                        b = Math.floor(g) + r;
                      m < 0 && (m = 0),
                        _ > t && (_ = t),
                        x < 0 && (x = 0),
                        b > i && (b = i);
                      for (
                        var w = d.x - p.x,
                          D = d.y - p.y,
                          S = w * w + D * D,
                          I = m;
                        I < _;
                        I++
                      )
                        for (var L = x; L < b; L++) {
                          var T = (I - p.x) * w + (L - p.y) * D,
                            M = void 0,
                            F = void 0;
                          T < 0
                            ? ((M = p.x), (F = p.y))
                            : T > S
                              ? ((M = d.x), (F = d.y))
                              : ((T /= S),
                                (M = p.x + T * w),
                                (F = p.y + T * D));
                          var z = (I - M) * (I - M) + (L - F) * (L - F),
                            C = (i - L - 1) * t + I;
                          z < a[C] && (a[C] = z);
                        }
                    }
                  }
                  for (o = 0; o < n; ++o) a[o] = Math.sqrt(a[o]);
                  return a;
                }),
                (e.prototype._sign_dist_map = function(e, t, i, r, n) {
                  for (var a = 0, s = e; a < s.length; a++)
                    for (var o = s[a], l = o.length, u = 1; u < l; ++u) {
                      var h = o[u - 1],
                        f = o[u],
                        p = void 0,
                        d = void 0;
                      h.x < f.x
                        ? ((p = h.x), (d = f.x))
                        : ((p = f.x), (d = h.x));
                      var c = void 0,
                        y = void 0;
                      h.y < f.y
                        ? ((c = h.y), (y = f.y))
                        : ((c = f.y), (y = h.y));
                      var v = Math.floor(p),
                        g = Math.floor(d) + 1,
                        m = Math.floor(c),
                        _ = Math.floor(y) + 1;
                      v < r && (v = r),
                        g > t - r && (g = t - r),
                        m < r && (m = r),
                        _ > i - r && (_ = i - r);
                      for (var x = m; x < _; ++x)
                        if (h.y > x != f.y > x) {
                          for (var b = (i - x - 1) * t, w = v; w < g; ++w)
                            w < ((f.x - h.x) * (x - h.y)) / (f.y - h.y) + h.x &&
                              (n[b + w] = -n[b + w]);
                          for (w = r; w < v; ++w) n[b + w] = -n[b + w];
                        }
                    }
                }),
                (e.prototype._encodeDistMap = function(e, t) {
                  for (
                    var i = 2 * t,
                      r = e.length,
                      n = new Uint8Array(4 * r),
                      s = 0;
                    s < r;
                    ++s
                  )
                    a(0.5 - e[s] / i, n, 4 * s);
                  return n;
                }),
                e
              );
            })();
            t.SDFHelper = s;
          }.apply(null, r)) || (e.exports = n);
    },
    2154: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2051)]),
        void 0 ===
          (n = function(e, t, i) {
            return (function() {
              function e(e, t) {
                (this._width = 0),
                  (this._height = 0),
                  (this._free = []),
                  (this._width = e),
                  (this._height = t),
                  this._free.push(new i(0, 0, e, t));
              }
              return (
                Object.defineProperty(e.prototype, "width", {
                  get: function() {
                    return this._width;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "height", {
                  get: function() {
                    return this._height;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.allocate = function(e, t) {
                  if (e > this._width || t > this._height) return new i();
                  for (
                    var r = null, n = -1, a = 0;
                    a < this._free.length;
                    ++a
                  ) {
                    var s = this._free[a];
                    e <= s.width &&
                      t <= s.height &&
                      (null === r || (s.y <= r.y && s.x <= r.x)) &&
                      ((r = s), (n = a));
                  }
                  return null === r
                    ? new i()
                    : (this._free.splice(n, 1),
                      r.width < r.height
                        ? (r.width > e &&
                            this._free.push(
                              new i(r.x + e, r.y, r.width - e, t)
                            ),
                          r.height > t &&
                            this._free.push(
                              new i(r.x, r.y + t, r.width, r.height - t)
                            ))
                        : (r.width > e &&
                            this._free.push(
                              new i(r.x + e, r.y, r.width - e, r.height)
                            ),
                          r.height > t &&
                            this._free.push(
                              new i(r.x, r.y + t, e, r.height - t)
                            )),
                      new i(r.x, r.y, e, t));
                }),
                (e.prototype.release = function(e) {
                  for (var t = 0; t < this._free.length; ++t) {
                    var i = this._free[t];
                    if (
                      i.y === e.y &&
                      i.height === e.height &&
                      i.x + i.width === e.x
                    )
                      i.width += e.width;
                    else if (
                      i.x === e.x &&
                      i.width === e.width &&
                      i.y + i.height === e.y
                    )
                      i.height += e.height;
                    else if (
                      e.y === i.y &&
                      e.height === i.height &&
                      e.x + e.width === i.x
                    )
                      (i.x = e.x), (i.width += e.width);
                    else {
                      if (
                        e.x !== i.x ||
                        e.width !== i.width ||
                        e.y + e.height !== i.y
                      )
                        continue;
                      (i.y = e.y), (i.height += e.height);
                    }
                    this._free.splice(t, 1), this.release(e);
                  }
                  this._free.push(e);
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2303: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(420),
        i(3),
        i(1),
        i(35),
        i(425),
        i(2061),
        i(2053),
        i(2304),
        i(2318),
        i(2119)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o, l, u, h, f, p, d) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var c = (function(e) {
              function t(t) {
                return e.call(this) || this;
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {}),
                (t.prototype.createTile = function(e) {
                  var t = o.create();
                  return this.tileInfoView.getTileBounds(t, e), new p(e, t);
                }),
                (t.prototype.disposeTile = function(e) {
                  this.featuresView.removeChild(e);
                }),
                (t.prototype.highlight = function(e) {
                  return this.featuresView.highlight(e);
                }),
                (t.prototype.hitTest = function(e, t) {
                  return this.featuresView.hitTest(e, t);
                }),
                (t.prototype.supportsRenderer = function(e) {
                  return (
                    null != e &&
                    u.isRendererWebGLCompatible(e) &&
                    -1 !==
                      ["simple", "class-breaks", "unique-value"].indexOf(e.type)
                  );
                }),
                (t.prototype.getProcessorConfiguration = function() {
                  var e = this.layer;
                  return {
                    type: "symbol",
                    renderer: e.renderer.toJSON(),
                    devicePixelRatio: window.devicePixelRatio || 1,
                    definitionExpression: e.definitionExpression,
                    outFields: e.outFields.slice().sort(),
                    gdbVersion: e.gdbVersion,
                    historicMoment:
                      e.historicMoment && e.historicMoment.getTime(),
                    labelingInfo:
                      e.labelingInfo &&
                      e.labelingInfo.map(function(e) {
                        return e.toJSON();
                      })
                  };
                }),
                (t.prototype.needsProcessorReconfiguration = function(e) {
                  var t = this.configuration;
                  if (
                    !t ||
                    t.definitionExpression !== e.definitionExpression ||
                    t.outFields.join() !== e.outFields.join() ||
                    l.diff(t.labelingInfo, e.labelingInfo)
                  )
                    return !0;
                  var i =
                      (this.configuration &&
                        n.fromJSON(this.configuration.renderer)) ||
                      null,
                    r = (e && n.fromJSON(e.renderer)) || null,
                    a = l.diff(i, r);
                  if (!a) return !1;
                  switch (a.type) {
                    case "complete":
                      return !0;
                    case "partial":
                      if (
                        (function(e) {
                          for (var t in e.diff) {
                            var i = e.diff[t];
                            if ("collection" === i.type) {
                              if (
                                0 !== i.changed.length ||
                                0 !== i.added.length ||
                                0 !== i.removed.length
                              )
                                return !0;
                            } else if (
                              "visualVariables" !== t &&
                              "authoringInfo" !== t
                            )
                              return !0;
                          }
                          return !1;
                        })(a)
                      )
                        return !0;
                      if (a.diff.visualVariables) {
                        var s = this.featuresView.visualVariablesInfo,
                          o = this.tileInfoView.tileInfo.spatialReference,
                          f = {
                            fields: this.layer.fields.map(function(e) {
                              return e.toJSON();
                            })
                          },
                          p = u.getNormalizedRenderer(r, o, f),
                          d = h.convertVisualVariables(p.visualVariables)
                            .vvFields;
                        return !!l.diff(s.vvFields, d);
                      }
                  }
                }),
                (t.prototype.applyConfiguration = function(e, t) {
                  var i = n.fromJSON(e.renderer),
                    r = {
                      fields: this.layer.fields.map(function(e) {
                        return e.toJSON();
                      })
                    },
                    a = u.getNormalizedRenderer(
                      i,
                      this.tileInfoView.tileInfo.spatialReference,
                      r
                    );
                  (this.configuration = e),
                    (this.featuresView.visualVariablesInfo = h.convertVisualVariables(
                      a.visualVariables
                    )),
                    t && this.featuresView.disposeWebGLResources();
                }),
                (t.prototype.install = function(e) {
                  var t = new f.default({
                    highlightOptions: this.highlightOptions,
                    tileInfoView: this.tileInfoView,
                    layer: this.layer,
                    layerView: this.layerView
                  });
                  (this.featuresView = t), t.install(e);
                }),
                (t.prototype.uninstall = function(e) {
                  this.featuresView.uninstall(e);
                }),
                (t.prototype.onTileData = function(e) {
                  var t = this.tiles.get(e.tileKey);
                  t &&
                    (this.featuresView.onTileData(t, e.data),
                    this.requestUpdate());
                }),
                (t.prototype.onTileError = function(e) {
                  var t = this.tiles.get(e.tileKey);
                  t && (this.featuresView.onTileError(t), this.requestUpdate());
                }),
                (t.prototype.getMaterialItems = function(e) {
                  return this.featuresView.getMaterialItems(e);
                }),
                r([s.subclass()], t)
              );
            })(s.declared(a, d.default));
            t.default = c;
          }.apply(null, r)) || (e.exports = n);
    },
    2304: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(13),
        i(5),
        i(9),
        i(9),
        i(417),
        i(776),
        i(23),
        i(309),
        i(2134),
        i(2305),
        i(2007),
        i(2043),
        i(2311),
        i(2010),
        i(2101),
        i(2317)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o, l, u, h, f, p, d, c, y, v, g) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var m = (function(e) {
              function t(t) {
                var i = e.call(this) || this;
                return (
                  (i._rendererInfo = new g()),
                  (i._stage = new h()),
                  (i._container = null),
                  (i._tileCoordinateScale = o.create()),
                  (i._orientationVec = o.fromValues(0, 0, 1)),
                  (i._displayScale = o.create()),
                  (i._defaultTransform = s.create()),
                  (i._pointToCallbacks = new Map()),
                  (i._highlightIDs = new Set()),
                  (i._displayWidth = 0),
                  (i._displayHeight = 0),
                  (i._highlightOptionsUpToDate = !1),
                  (i.layer = null),
                  (i.textureManager = new c()),
                  (i.highlightOptions = t.highlightOptions),
                  (i.tileInfoView = t.tileInfoView),
                  i._stage.useContextVersion("webgl"),
                  (i.layer = t.layer),
                  (i._layerView = t.layerView),
                  i
                );
              }
              return (
                r(t, e),
                (t.prototype.fadeInLabels = function() {
                  this._stage.fadeInLabels();
                }),
                (t.prototype.dispose = function() {
                  this.textureManager &&
                    (this.textureManager.dispose(),
                    (this.textureManager = null)),
                    this.removeAllChildren();
                  for (var e = 0, t = this.children; e < t.length; e++)
                    t[e].dispose();
                }),
                (t.prototype.disposeWebGLResources = function() {
                  for (var e = 0, t = this.children; e < t.length; e++)
                    t[e].clear();
                }),
                (t.prototype.displayWidth = function() {
                  return this._displayWidth;
                }),
                Object.defineProperty(t.prototype, "displayHeight", {
                  get: function() {
                    return this._displayHeight;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "highlightOptions", {
                  get: function() {
                    return this._highlightOptions;
                  },
                  set: function(e) {
                    (this._highlightOptions = e),
                      (this._highlightOptionsUpToDate = !1);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "visualVariablesInfo", {
                  get: function() {
                    return this._visualVariablesInfo;
                  },
                  set: function(e) {
                    (this._visualVariablesInfo = e), this.requestRender();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.install = function(e) {
                  e.addChild(this._stage),
                    this._stage.addChild(this),
                    (this._container = e);
                }),
                (t.prototype.uninstall = function(e) {
                  e.removeChild(this._stage),
                    this._stage.removeChild(this),
                    this.dispose(),
                    (this._container = null);
                }),
                (t.prototype.hitTest = function(e, t) {
                  var i = this,
                    r = [e, t];
                  return n.create(
                    function(e, t) {
                      i._pointToCallbacks.set(r, { resolve: e, reject: t }),
                        i.requestRender();
                    },
                    function() {
                      i._pointToCallbacks.has(r) &&
                        i._pointToCallbacks.delete(r);
                    }
                  );
                }),
                (t.prototype.highlight = function(e) {
                  var t = this;
                  return (
                    t.addHighlight(e),
                    {
                      remove: function() {
                        t.removeHighlight(e);
                      }
                    }
                  );
                }),
                (t.prototype.setHighlight = function(e) {
                  this._highlightIDs.clear(), this.addHighlight(e);
                }),
                (t.prototype.setVisibility = function(e, t) {
                  for (var i = 0, r = this.children; i < r.length; i++) {
                    !(function(i) {
                      if (i.data) {
                        var r = i.data.tileDisplayData.displayObjectRegistry,
                          n = e.filter(function(e) {
                            return r.has(e.id);
                          });
                        i.setVisibility(n, t);
                      }
                    })(r[i]);
                  }
                }),
                (t.prototype.setVisibilityRange = function(e, t, i, r) {
                  for (var n = 0, a = this.children; n < a.length; n++) {
                    var s = a[n];
                    s.data &&
                      s.data.tileDisplayData.displayObjectRegistry.has(e) &&
                      s.setVisibilityRange(e, t, i, r);
                  }
                }),
                (t.prototype.addHighlight = function(e) {
                  for (var t = 0, i = e; t < i.length; t++) {
                    var r = i[t];
                    this._highlightIDs.add(r);
                  }
                  this._buildHLList();
                }),
                (t.prototype.removeHighlight = function(e) {
                  for (var t = 0, i = e; t < i.length; t++) {
                    var r = i[t];
                    this._highlightIDs.delete(r);
                  }
                  this._buildHLList();
                }),
                (t.prototype.getMaterialItems = function(e) {
                  var t = e;
                  if (t && 0 !== t.length) {
                    for (var i = [], r = 0, n = t; r < n.length; r++) {
                      var s = n[r];
                      i.push(
                        this.textureManager.rasterizeItem(s.symbol, s.glyphIds)
                      );
                    }
                    return a.all(i).then(function(e) {
                      return e.map(function(e, t) {
                        return { id: t, mosaicItem: e };
                      });
                    });
                  }
                }),
                (t.prototype.onTileData = function(e, t) {
                  var i = null;
                  t.addOrUpdate && (i = f.decode(t.addOrUpdate)),
                    i
                      ? t.clear || !e.hasData
                        ? e.setData(i, this.layer.labelsVisible)
                        : e.patchData(
                            { remove: t.remove, addOrUpdate: i },
                            this.layer.labelsVisible
                          )
                      : e.hasData
                        ? t.clear
                          ? e.clear()
                          : t.remove &&
                            e.patchData(
                              { remove: t.remove, addOrUpdate: null },
                              this.layer.labelsVisible
                            )
                        : e.setData(null, !1),
                    this._layerView &&
                      this._layerView.view.labelManager.requestUpdate(),
                    e.buildHLList(this._highlightIDs),
                    this.contains(e) || this.addChild(e),
                    this.fadeInLabels(),
                    this.requestRender();
                }),
                (t.prototype.onTileError = function(e) {
                  e.clear(),
                    e.buildHLList(this._highlightIDs),
                    this.contains(e) || this.addChild(e),
                    this.requestRender();
                }),
                (t.prototype.addChild = function(t) {
                  var i = e.prototype.addChild.call(this, t);
                  return (
                    this.layer.labelingInfo &&
                      this._layerView &&
                      this._layerView.view.labelManager.addTile(
                        this.layer.uid,
                        t
                      ),
                    this._buildHLList(),
                    i
                  );
                }),
                (t.prototype.removeChild = function(t) {
                  var i = e.prototype.removeChild.call(this, t);
                  return (
                    this.layer.labelingInfo &&
                      this._layerView &&
                      this._layerView.view.labelManager.removeTile(
                        this.layer.uid,
                        t.key.id
                      ),
                    this._buildHLList(),
                    i
                  );
                }),
                (t.prototype.prepareChildrenRenderParameters = function(e) {
                  this._rendererInfo.updateVisualVariables(
                    this._visualVariablesInfo.vvRanges,
                    e.state
                  );
                  var t = this.tileInfoView.getClosestInfoForScale(
                      e.state.scale
                    ).level,
                    r = this.tileInfoView.tileInfo.scaleToZoom(e.state.scale);
                  return i({}, e, {
                    rendererInfo: this._rendererInfo,
                    requiredLevel: t,
                    displayLevel: r
                  });
                }),
                (t.prototype.renderChildren = function(e) {
                  var t = this,
                    i = e.painter;
                  i.bindTextureManager(this.textureManager),
                    this._rendererInfo.updateVisualVariables(
                      this._visualVariablesInfo.vvRanges,
                      e.state
                    ),
                    this.sortChildren(function(e, t) {
                      return e.key.level - t.key.level != 0
                        ? e.key.level - t.key.level
                        : e.key.row - t.key.row != 0
                          ? e.key.row - t.key.row
                          : e.key.col - t.key.col;
                    });
                  var r = v.default.toWGLDrawPhases(e.drawPhase);
                  if (
                    (r.length > 0 && r[0] === p.WGLDrawPhase.LABEL) ||
                    r[0] === p.WGLDrawPhase.LABEL_ALPHA
                  ) {
                    var n = this.layer;
                    if (
                      !(
                        n.labelsVisible &&
                        n.labelingInfo &&
                        n.labelingInfo.length > 0
                      )
                    )
                      return;
                    this._updateTilesTransform(e.state, e.requiredLevel),
                      i.update(e.state, e.pixelRatio);
                  }
                  i.draw(e, this.children, r, this._painterOptions),
                    this._highlightIDs.size > 0 &&
                      i.highlight(e, this.children),
                    0 !== this._pointToCallbacks.size &&
                      (this._pointToCallbacks.forEach(function(i, r) {
                        i.resolve(t._hitTest(e, r[0], r[1]));
                      }),
                      this._pointToCallbacks.clear());
                }),
                (t.prototype.attachChild = function(e, t) {
                  return e.attach(t);
                }),
                (t.prototype.detachChild = function(e, t) {
                  e.detach(t);
                }),
                (t.prototype.renderChild = function(e, t) {
                  e.doRender(t);
                }),
                (t.prototype.beforeRenderChildren = function(e, t) {
                  this._updateTilesTransform(
                    e.state,
                    this.tileInfoView.getClosestInfoForScale(e.state.scale)
                      .level
                  ),
                    this._updateHighlightOptions(),
                    (this._stage.opacity = this._container.opacity);
                }),
                (t.prototype._hitTest = function(e, t, i) {
                  var r = e.painter,
                    n = e.requiredLevel,
                    a = [0, 0];
                  e.state.toMap(a, [t, i]);
                  var s = e.state.clone(),
                    o = s.viewpoint.clone();
                  return (
                    (o.targetGeometry = new l(
                      a[0],
                      a[1],
                      e.state.spatialReference
                    )),
                    (s.viewpoint = o),
                    (s.size = [
                      y.C_HITTEST_SEARCH_SIZE,
                      y.C_HITTEST_SEARCH_SIZE
                    ]),
                    this._updateTilesTransform(s, n),
                    r.update(s, e.pixelRatio),
                    r.hitTest(
                      {
                        context: e.context,
                        drawPhase: p.WGLDrawPhase.HITTEST,
                        painter: r,
                        pixelRatio: e.pixelRatio,
                        displayLevel: e.displayLevel,
                        rendererInfo: this._rendererInfo,
                        requiredLevel: n,
                        state: s,
                        stationary: e.stationary
                      },
                      this.children
                    )
                  );
                }),
                (t.prototype._updateTilesTransform = function(e, t) {
                  var i = 1 / e.width,
                    r = 1 / e.height,
                    n = [0, 0];
                  this._calculateRelativeViewProjMat(
                    this.tileInfoView.tileInfo.lods[t].resolution,
                    e.resolution,
                    e.rotation,
                    this.tileInfoView.tileInfo.size[0],
                    e.width,
                    e.height,
                    this._defaultTransform
                  );
                  for (var a = 0, s = this.children; a < s.length; a++) {
                    var o = s[a];
                    e.toScreen(n, o.coords),
                      (n[1] = e.height - n[1]),
                      (o.tileTransform.displayCoord[0] = 2 * n[0] * i - 1),
                      (o.tileTransform.displayCoord[1] = 2 * n[1] * r - 1),
                      o.key.level === t
                        ? o.tileTransform.transform.set(this._defaultTransform)
                        : this._calculateRelativeViewProjMat(
                            this.tileInfoView.tileInfo.lods[o.key.level]
                              .resolution,
                            e.resolution,
                            e.rotation,
                            this.tileInfoView.tileInfo.size[0],
                            e.width,
                            e.height,
                            o.tileTransform.transform
                          );
                  }
                }),
                (t.prototype._calculateRelativeViewProjMat = function(
                  e,
                  t,
                  i,
                  r,
                  n,
                  a,
                  o
                ) {
                  var l = e / t;
                  this._tileCoordinateScale.set([l, l, 1]),
                    (n === this._displayWidth && a === this._displayHeight) ||
                      (this._displayScale.set([2 / n, -2 / a, 1]),
                      (this._displayWidth = n),
                      (this._displayHeight = a)),
                    s.identity(o),
                    s.scale(o, o, this._tileCoordinateScale),
                    s.rotate(o, o, -i * d.C_DEG_TO_RAD, this._orientationVec),
                    s.scale(o, o, this._displayScale),
                    s.transpose(o, o);
                }),
                (t.prototype._updateHighlightOptions = function() {
                  if (!this._highlightOptionsUpToDate && this.parent) {
                    var e = this.parent.glPainter,
                      t = this._highlightOptions;
                    if (e) {
                      var i = t.color.toRgba();
                      (i[0] /= 255), (i[1] /= 255), (i[2] /= 255);
                      var r = i.slice();
                      (i[3] *= t.fillOpacity),
                        (r[3] *= t.haloOpacity),
                        e.setHighlightOptions({
                          fillColor: i,
                          outlineColor: r,
                          outlineWidth: 2,
                          outerHaloWidth: 0.3,
                          innerHaloWidth: 0.3,
                          outlinePosition: 0
                        });
                    }
                  }
                }),
                (t.prototype._buildHLList = function() {
                  for (var e = 0, t = this.children; e < t.length; e++)
                    t[e].buildHLList(this._highlightIDs);
                  this.requestRender();
                }),
                t
              );
            })(u);
            t.default = m;
          }.apply(null, r)) || (e.exports = n);
    },
    2305: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2306),
        i(2307),
        i(2308),
        i(2010),
        i(2118),
        i(2115),
        i(2050),
        i(2309),
        i(2114),
        i(2310),
        i(2038),
        i(2117)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o, l, u, h, f, p, d) {
            function c(e, t) {
              var i = {};
              for (var r in e) {
                var n = { data: new Uint32Array((t * e[r]) / 4), stride: e[r] };
                i[r] = n;
              }
              return i;
            }
            var y = new i.default(),
              v = new i.default();
            return (function() {
              function e() {
                (this.tileDisplayData = null), (this.tileBufferData = null);
              }
              return (
                (e.prototype.reshuffle = function() {
                  y.reset();
                  var t = this._collectDisplayRecords();
                  for (var i in t)
                    for (var n = 0, o = (b = t[i]); n < o.length; n++) {
                      var l = o[n];
                      y.needMore(
                        l.geometryType,
                        l.meshData ? l.meshData.vertexCount : l.vertexCount,
                        l.meshData ? l.meshData.indexData.length : l.indexCount
                      );
                    }
                  var u = t.length,
                    h = new r();
                  for (i = 0; i < u; ++i) {
                    h.geometries[i].indexBuffer = new Uint32Array(
                      Math.round(1.15 * y.indicesFor(i))
                    );
                    var f = [];
                    for (var p in this.tileBufferData.geometries[i]
                      .vertexBuffer)
                      f.push(
                        this.tileBufferData.geometries[i].vertexBuffer[p].stride
                      );
                    var d = e._computeVertexAlignment(f),
                      c = Math.round(1.15 * y.verticesFor(i)),
                      g = e._align(c, d);
                    for (var m in this.tileBufferData.geometries[i]
                      .vertexBuffer) {
                      var _ = this.tileBufferData.geometries[i].vertexBuffer[m]
                          .stride,
                        x = Math.round((g * _) / 4);
                      h.geometries[i].vertexBuffer[m] = {
                        stride: _,
                        data: new Uint32Array(x)
                      };
                    }
                  }
                  v.reset(), (this.tileDisplayData.displayList = new s());
                  for (i = 0; i < u; ++i) {
                    for (var b, w = 0, D = (b = t[i]); w < D.length; w++) {
                      if ((l = D[w]).meshData)
                        l.writeMeshDataToBuffers(
                          v.verticesFor(i),
                          h.geometries[i].vertexBuffer,
                          v.indicesFor(i),
                          h.geometries[i].indexBuffer
                        ),
                          (l.meshData = null);
                      else {
                        var S = this.tileBufferData.geometries[i].vertexBuffer,
                          I = this.tileBufferData.geometries[i].indexBuffer,
                          L = h.geometries[i].vertexBuffer,
                          T = h.geometries[i].indexBuffer,
                          M = v.verticesFor(i),
                          F = v.indicesFor(i);
                        a.copyMeshData(M, F, L, T, l, S, I),
                          (l.vertexFrom = M),
                          (l.indexFrom = F);
                      }
                      v.needMore(i, l.vertexCount, l.indexCount);
                    }
                    this.tileDisplayData.displayList.addToList(b);
                  }
                  this.tileBufferData = h;
                }),
                (e.prototype.getStrides = function() {
                  for (
                    var e = [], t = 0;
                    t < this.tileBufferData.geometries.length;
                    ++t
                  ) {
                    var i = this.tileBufferData.geometries[t];
                    for (var r in ((e[t] = {}), i.vertexBuffer))
                      e[t][r] = i.vertexBuffer[r].stride;
                  }
                  return e;
                }),
                (e.prototype._guessSize = function() {
                  for (
                    var e = this.tileDisplayData.displayObjects,
                      t = Math.min(e.length, 4),
                      i = 0,
                      r = 0;
                    r < t;
                    r++
                  )
                    i = Math.max(i, e[r].displayRecords.length);
                  return 2 * (12 * e.length + e.length * i * 40);
                }),
                (e.prototype.serialize = function() {
                  var e = this.tileBufferData.serialize(),
                    t = this.tileBufferData.getBuffers(),
                    i = this.tileDisplayData
                      .serialize(new d.default(Int32Array, this._guessSize()))
                      .buffer();
                  return (
                    t.push(i),
                    {
                      result: { displayData: i, bufferData: e },
                      transferList: t
                    }
                  );
                }),
                (e.decode = function(t) {
                  var i = h.MaterialStore.deserialize(
                      new f.default(t.materialStore)
                    ),
                    a = p.deserializeList(new f.default(t.displayObjects), o, {
                      store: i
                    }),
                    s = {};
                  for (var l in t.vertexBuffersMap)
                    s[l] = u.VertexBuffers.decode(t.vertexBuffersMap[l]);
                  var d = new e(),
                    c = new n(),
                    y = new r();
                  for (var v in ((c.displayObjects = a), s)) {
                    var g = s[v];
                    (y.geometries[v].indexBuffer = g.indexBuffer),
                      (y.geometries[v].vertexBuffer = g.namedBuffers);
                  }
                  return (d.tileDisplayData = c), (d.tileBufferData = y), d;
                }),
                (e.bind = function(t, i) {
                  var r = new e();
                  return (r.tileDisplayData = t), (r.tileBufferData = i), r;
                }),
                (e.create = function(t, i) {
                  var a = new e();
                  (a.tileDisplayData = new n()),
                    (a.tileDisplayData.displayObjects = t);
                  for (
                    var s = [0, 0, 0, 0, 0],
                      o = [0, 0, 0, 0, 0],
                      u = [[], [], [], [], []],
                      h = 0,
                      f = t;
                    h < f.length;
                    h++
                  )
                    for (
                      var p = 0, d = f[h].displayRecords;
                      p < d.length;
                      p++
                    ) {
                      var y = d[p];
                      u[y.geometryType].push(y),
                        (s[y.geometryType] += y.meshData.vertexCount),
                        (o[y.geometryType] += y.meshData.indexData.length);
                    }
                  for (
                    var v = new r(),
                      g = (function(e) {
                        return [
                          e.fill || {},
                          e.line || {},
                          e.icon || {},
                          e.text || {},
                          e.label || {}
                        ];
                      })(i),
                      m = 0;
                    m < 5;
                    m++
                  ) {
                    var _ = new Uint32Array(o[m]),
                      x = c(g[m], s[m]);
                    l.writeAllMeshDataToBuffers(u[m], x, _),
                      (v.geometries[m] = { indexBuffer: _, vertexBuffer: x });
                  }
                  return (a.tileBufferData = v), a;
                }),
                (e._align = function(e, t) {
                  var i = e % t;
                  return 0 === i ? e : e + (t - i);
                }),
                (e._computeVertexAlignment = function(e) {
                  for (var t = !1, i = !1, r = 0, n = e; r < n.length; r++) {
                    var a = n[r];
                    a % 4 == 2 ? (t = !0) : a % 4 != 0 && (i = !0);
                  }
                  return i ? 4 : t ? 2 : 1;
                }),
                (e.prototype._collectDisplayRecords = function() {
                  for (
                    var e = [[], [], [], [], []],
                      t = 0,
                      i = this.tileDisplayData.displayObjects;
                    t < i.length;
                    t++
                  )
                    for (
                      var r = 0, n = i[t].displayRecords;
                      r < n.length;
                      r++
                    ) {
                      var a = n[r];
                      e[a.geometryType].push(a);
                    }
                  return e;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2306: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e() {
                this._byGeometryType = null;
              }
              return (
                Object.defineProperty(e.prototype, "satisfied", {
                  get: function() {
                    return !this._byGeometryType;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.reset = function() {
                  this._byGeometryType = null;
                }),
                (e.prototype.verticesFor = function(e) {
                  return this._byGeometryType
                    ? this._byGeometryType[e].vertices
                    : 0;
                }),
                (e.prototype.indicesFor = function(e) {
                  return this._byGeometryType
                    ? this._byGeometryType[e].indices
                    : 0;
                }),
                (e.prototype.needMore = function(e, t, i) {
                  if (t || i) {
                    this._byGeometryType ||
                      (this._byGeometryType = [
                        { vertices: 0, indices: 0 },
                        { vertices: 0, indices: 0 },
                        { vertices: 0, indices: 0 },
                        { vertices: 0, indices: 0 },
                        { vertices: 0, indices: 0 }
                      ]);
                    var r = this._byGeometryType[e];
                    (r.vertices += t), (r.indices += i);
                  }
                }),
                e
              );
            })();
            t.default = i;
          }.apply(null, r)) || (e.exports = n);
    },
    2307: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return (function() {
              function e() {
                this.geometries = [
                  { indexBuffer: void 0, vertexBuffer: {} },
                  { indexBuffer: void 0, vertexBuffer: {} },
                  { indexBuffer: void 0, vertexBuffer: {} },
                  { indexBuffer: void 0, vertexBuffer: {} },
                  { indexBuffer: void 0, vertexBuffer: {} }
                ];
              }
              return (
                (e.deserialize = function(t) {
                  for (var i = new e(), r = 0; r < 5; ++r)
                    for (var n in ((i.geometries[
                      r
                    ].indexBuffer = new Uint32Array(
                      t.geometries[r].indexBuffer
                    )),
                    (i.geometries[r].vertexBuffer = {}),
                    t.geometries[r].vertexBuffer))
                      i.geometries[r].vertexBuffer[n] = {
                        data: new Uint32Array(
                          t.geometries[r].vertexBuffer[n].data
                        ),
                        stride: t.geometries[r].vertexBuffer[n].stride
                      };
                  return i;
                }),
                (e.prototype.serialize = function() {
                  for (
                    var e = {
                        geometries: [
                          {
                            indexBuffer: this.geometries[0].indexBuffer.buffer,
                            vertexBuffer: {}
                          },
                          {
                            indexBuffer: this.geometries[1].indexBuffer.buffer,
                            vertexBuffer: {}
                          },
                          {
                            indexBuffer: this.geometries[2].indexBuffer.buffer,
                            vertexBuffer: {}
                          },
                          {
                            indexBuffer: this.geometries[3].indexBuffer.buffer,
                            vertexBuffer: {}
                          },
                          {
                            indexBuffer: this.geometries[4].indexBuffer.buffer,
                            vertexBuffer: {}
                          }
                        ]
                      },
                      t = 0;
                    t < 5;
                    ++t
                  )
                    for (var i in this.geometries[t].vertexBuffer)
                      e.geometries[t].vertexBuffer[i] = {
                        data: this.geometries[t].vertexBuffer[i].data.buffer,
                        stride: this.geometries[t].vertexBuffer[i].stride
                      };
                  return e;
                }),
                (e.prototype.getBuffers = function() {
                  for (var e = [], t = 0; t < 5; ++t)
                    for (var i in (e.push(
                      this.geometries[t].indexBuffer.buffer
                    ),
                    this.geometries[t].vertexBuffer))
                      e.push(this.geometries[t].vertexBuffer[i].data.buffer);
                  return e;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2308: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2118), i(2115), i(2114), i(2038)]),
        void 0 ===
          (n = function(e, t, i, r, n, a) {
            return (function() {
              function e() {}
              return (
                Object.defineProperty(e.prototype, "displayObjectRegistry", {
                  get: function() {
                    if (!this._displayObjectRegistry) {
                      this._displayObjectRegistry = new Map();
                      for (
                        var e = 0, t = this.displayObjects;
                        e < t.length;
                        e++
                      ) {
                        var i = t[e];
                        this._displayObjectRegistry.set(i.id, i);
                      }
                    }
                    return this._displayObjectRegistry;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "displayList", {
                  get: function() {
                    if (!this._displayList) {
                      this._displayList = new i();
                      for (
                        var e = 0, t = this.displayObjects;
                        e < t.length;
                        e++
                      )
                        for (
                          var r = 0, n = t[e].displayRecords;
                          r < n.length;
                          r++
                        ) {
                          var a = n[r];
                          this._displayList.addToList(a);
                        }
                    }
                    return this._displayList;
                  },
                  set: function(e) {
                    this._displayList = e;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.serialize = function(e) {
                  return (
                    this.materialStore.serialize(e),
                    a.serializeList(e, this.displayObjects),
                    e
                  );
                }),
                (e.prototype._deserializeObjects = function(e) {
                  for (
                    var t = e.readInt32(),
                      n = new Array(t),
                      a = new i(),
                      s = new Map(),
                      o = { store: this.materialStore },
                      l = 0;
                    l < n.length;
                    ++l
                  ) {
                    var u = r.deserialize(e, o);
                    (n[l] = u), s.set(u.id, u);
                    for (var h = 0, f = u.displayRecords; h < f.length; h++) {
                      var p = f[h];
                      a.addToList(p);
                    }
                  }
                  (this.displayObjects = n),
                    (this._displayList = a),
                    (this._displayObjectRegistry = s);
                }),
                (e.deserialize = function(t) {
                  var i = new e();
                  return (
                    (i.materialStore = n.MaterialStore.deserialize(t)),
                    i._deserializeObjects(t),
                    i
                  );
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2309: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e(e, t, i) {
                (this.data = e), (this.stride = t), (this.vertexCount = i);
              }
              return (
                (e.decode = function(t) {
                  return new e(
                    new Uint32Array(t.data),
                    t.stride,
                    t.vertexCount
                  );
                }),
                e
              );
            })();
            t.default = i;
            var r = (function() {
              function e(e, t, i) {
                (this.geometryType = e),
                  (this.indexBuffer = new Uint32Array(t)),
                  (this.namedBuffers = i);
              }
              return (
                (e.decode = function(t) {
                  var r = t.geometryType,
                    n = t.indexBuffer,
                    a = {};
                  for (var s in t.namedBuffers)
                    a[s] = i.decode(t.namedBuffers[s]);
                  return new e(r, n, a);
                }),
                e
              );
            })();
            t.VertexBuffers = r;
          }.apply(null, r)) || (e.exports = n);
    },
    2310: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e(e) {
                (this._pos = 0),
                  (this._buffer = e),
                  (this._i32View = new Int32Array(this._buffer)),
                  (this._f32View = new Float32Array(this._buffer));
              }
              return (
                (e.prototype.readInt32 = function() {
                  return this._i32View[this._pos++];
                }),
                (e.prototype.readF32 = function() {
                  return this._f32View[this._pos++];
                }),
                e
              );
            })();
            t.default = i;
          }.apply(null, r)) || (e.exports = n);
    },
    2311: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(64),
        i(10),
        i(11),
        i(9),
        i(2312),
        i(2152),
        i(2314),
        i(2315),
        i(2153),
        i(2316),
        i(2010),
        i(191)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o, l, u, h, f, p, d) {
            var c = n.getLogger("esri.views.2d.engine.webgl.TextureManager");
            return (function() {
              function e() {
                (this._invalidFontsMap = new Map()),
                  (this._spriteMosaic = new f(1024, 1024, 250)),
                  (this._glyphSource = new u(
                    i.fontsUrl + "/{fontstack}/{range}.pbf"
                  )),
                  (this._glyphMosaic = new l(1024, 1024, this._glyphSource));
              }
              return (
                Object.defineProperty(e.prototype, "sprites", {
                  get: function() {
                    return this._spriteMosaic;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "glyphs", {
                  get: function() {
                    return this._glyphMosaic;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.dispose = function() {
                  this._spriteMosaic.dispose(),
                    this._glyphMosaic.dispose(),
                    (this._rasterizationCanvas = null);
                }),
                (e.prototype.rasterizeItem = function(e, t) {
                  return (
                    void 0 === t && (t = null),
                    e
                      ? e.type && -1 !== e.type.toLowerCase().indexOf("3d")
                        ? (c.error(
                            new r(
                              "mapview-invalid-type",
                              "MapView does not support 3d symbol type: " +
                                e.type,
                              e
                            )
                          ),
                          a.resolve({
                            glyphMosaicItems: [],
                            spriteMosaicItem: null
                          }))
                        : !e.type || ("text" !== e.type && "esriTS" !== e.type)
                          ? this._rasterizeSpriteSymbol(e).then(function(e) {
                              return { spriteMosaicItem: e };
                            })
                          : this._rasterizeTextSymbol(e, t).then(function(e) {
                              return { glyphMosaicItems: e };
                            })
                      : (c.error(
                          new r(
                            "mapview-null-resource",
                            "Unable to rasterize null resource"
                          )
                        ),
                        a.resolve(null))
                  );
                }),
                (e.prototype.bindSpritePage = function(e, t, i, r) {
                  r || (r = 9729), this._spriteMosaic.bind(e, r, t, i);
                }),
                (e.prototype.bindGlyphsPage = function(e, t, i) {
                  this._glyphMosaic.bind(e, 9729, t, i);
                }),
                (e.prototype._rasterizeTextSymbol = function(e, t) {
                  var i = this,
                    n = o.getFullyQualifiedFontName(e.font),
                    a = this._invalidFontsMap.has(n);
                  return this._glyphMosaic
                    .getGlyphItems(a ? "arial-unicode-ms-regular" : n, t)
                    .catch(function(e) {
                      return (
                        c.error(
                          new r(
                            "mapview-invalid-resource",
                            "Couldn't find font " +
                              n +
                              ". Falling back to Arial Unicode MS Regular"
                          )
                        ),
                        i._invalidFontsMap.set(n, !0),
                        i._glyphMosaic.getGlyphItems(
                          "arial-unicode-ms-regular",
                          t
                        )
                      );
                    });
                }),
                (e.prototype._rasterizeSpriteSymbol = function(e) {
                  var t = this;
                  if (
                    e &&
                    (p.isFillSymbol(e) || p.isLineSymbol(e)) &&
                    "style" in e &&
                    ("solid" === e.style ||
                      "esriSFSSolid" === e.style ||
                      "esriSLSSolid" === e.style ||
                      "none" === e.style ||
                      "esriSFSNull" === e.style ||
                      "esriSLSNull" === e.style)
                  )
                    return a.resolve(null);
                  var i = (function(e) {
                    if (e.type) {
                      switch (p.normalizeSymbolType(e.type)) {
                        case "simple-marker":
                          return "simple-marker" + e.style;
                        case "simple-line":
                          return "simple-line" + e.style;
                      }
                      if (p.isPictureSymbol(e))
                        return e.url
                          ? e.url
                          : e.imageData + "" + e.width + e.height;
                    }
                    return JSON.stringify(e);
                  })(e);
                  if (this._spriteMosaic.has(i))
                    return a.resolve(this._spriteMosaic.getSpriteItem(i));
                  if (e.url || e.imageData) {
                    var r = e.imageData
                      ? "data:" + e.contentType + ";base64," + e.imageData
                      : e.url;
                    return d.requestImage(r).then(function(r) {
                      var n = t._rasterizeResource(r);
                      return t._addItemToMosaic(
                        i,
                        n.size,
                        n.anchor,
                        n.image,
                        !p.isMarkerSymbol(e),
                        n.sdf
                      );
                    });
                  }
                  var n = this._rasterizeResource(e);
                  return a.resolve(
                    this._addItemToMosaic(
                      i,
                      n.size,
                      n.anchor,
                      n.image,
                      !p.isMarkerSymbol(e),
                      n.sdf
                    )
                  );
                }),
                (e.prototype._rasterizeResource = function(e) {
                  if (e instanceof HTMLImageElement) {
                    this._rasterizationCanvas ||
                      (this._rasterizationCanvas = document.createElement(
                        "canvas"
                      ));
                    var t = e;
                    (this._rasterizationCanvas.width = t.width),
                      (this._rasterizationCanvas.height = t.height);
                    var i = this._rasterizationCanvas.getContext("2d");
                    i.drawImage(t, 0, 0, t.width, t.height);
                    for (
                      var r = i.getImageData(0, 0, t.width, t.height),
                        n = new Uint8Array(r.data),
                        a = void 0,
                        s = 0;
                      s < n.length;
                      s += 4
                    )
                      (a = n[s + 3] / 255),
                        (n[s] = n[s] * a),
                        (n[s + 1] = n[s + 1] * a),
                        (n[s + 2] = n[s + 2] * a);
                    return {
                      size: [t.width, t.height],
                      anchor: [0, 0],
                      image: new Uint32Array(n.buffer),
                      sdf: !1
                    };
                  }
                  return this._rasterizeJSON(e);
                }),
                (e.prototype._addItemToMosaic = function(e, t, i, r, n, a) {
                  return this._spriteMosaic.addSpriteItem(e, t, i, r, n, a);
                }),
                (e.prototype._rasterizeJSON = function(e) {
                  if (
                    (this._rasterizationCanvas ||
                      (this._rasterizationCanvas = document.createElement(
                        "canvas"
                      )),
                    "simple-fill" === e.type || "esriSFS" === e.type)
                  ) {
                    var t = s.SymbolHelper.rasterizeSimpleFill(
                        this._rasterizationCanvas,
                        e.style
                      ),
                      i = t[0];
                    return {
                      size: [t[1], t[2]],
                      anchor: [0, 0],
                      image: new Uint32Array(i.buffer),
                      sdf: !1
                    };
                  }
                  if ("simple-line" === e.type || "esriSLS" === e.type) {
                    var r = s.SymbolHelper.rasterizeSimpleLine(
                      this._rasterizationCanvas,
                      e.style
                    );
                    i = r[0];
                    return {
                      size: [r[1], r[2]],
                      anchor: [0, 0],
                      image: new Uint32Array(i.buffer),
                      sdf: !0
                    };
                  }
                  var n, a;
                  if (
                    ("simple-marker" === e.type || "esriSMS" === e.type
                      ? ((n = s.CIMSymbolHelper.fromSimpleMarker(e)), (a = !0))
                      : ((n = e), (a = h.SDFHelper.checkSDF(n))),
                    a)
                  ) {
                    var o = new h.SDFHelper().buildSDF(n);
                    i = o[0];
                    return {
                      size: [o[1], o[2]],
                      anchor: [0, 0],
                      image: new Uint32Array(i.buffer),
                      sdf: !0
                    };
                  }
                  var l = s.CIMSymbolHelper.rasterize(
                    this._rasterizationCanvas,
                    n
                  );
                  i = l[0];
                  return {
                    size: [l[1], l[2]],
                    anchor: [l[3], l[4]],
                    image: new Uint32Array(i.buffer),
                    sdf: !1
                  };
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2312: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(11), i(2313), i(2153), i(415)]),
        void 0 ===
          (n = function(e, t, i, r, n, a) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = i.getLogger("esri/views/2d/engine/webgl/CIMSymbolHelper"),
              o = (function() {
                function e() {}
                return (
                  (e.getEnvelope = function(e) {
                    if ("CIMPointSymbol" !== e.type) return null;
                    var t = new r.EnvDrawHelper();
                    return (
                      t.drawSymbol(e, { type: "point", x: 0, y: 0 }),
                      t.envelope()
                    );
                  }),
                  (e.rasterize = function(e, t) {
                    var i = this.getEnvelope(t);
                    if (!i || i.width <= 0 || i.height <= 0)
                      return [null, 0, 0, 0, 0];
                    var n = (i.x + 0.5 * i.width) * (96 / 72),
                      a = -(i.y + 0.5 * i.height) * (96 / 72);
                    (e.width = i.width * (96 / 72) + 2),
                      (e.height = i.height * (96 / 72) + 2);
                    var s = e.getContext("2d"),
                      o = r.Transformation.createScale(96 / 72, -96 / 72);
                    o.translate(0.5 * e.width - n, 0.5 * e.height - a);
                    new r.CanvasDrawHelper(s, o).drawSymbol(t, {
                      type: "point",
                      x: 0,
                      y: 0
                    });
                    for (
                      var l,
                        u = s.getImageData(0, 0, e.width, e.height),
                        h = new Uint8Array(u.data),
                        f = 0;
                      f < h.length;
                      f += 4
                    )
                      (l = h[f + 3] / 255),
                        (h[f] = h[f] * l),
                        (h[f + 1] = h[f + 1] * l),
                        (h[f + 2] = h[f + 2] * l);
                    return [h, e.width, e.height, n / e.width, a / e.height];
                  }),
                  (e.fromSimpleMarker = function(e) {
                    var t,
                      i,
                      r,
                      n = e.style;
                    if ("circle" === n || "esriSMSCircle" === n) {
                      var s = Math.acos(0.995),
                        o = Math.ceil(a.C_PI / s / 4);
                      0 === o && (o = 1), (s = a.C_PI_BY_2 / o), (o *= 4);
                      var l = [];
                      l.push([50, 0]);
                      for (var u = 1; u < o; u++)
                        l.push([50 * Math.cos(u * s), -50 * Math.sin(u * s)]);
                      l.push([50, 0]),
                        (t = { rings: [l] }),
                        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
                    } else if ("cross" === n || "esriSMSCross" === n) {
                      (t = {
                        rings: [
                          [
                            [(h = 0), 50],
                            [h, h],
                            [50, h],
                            [50, -h],
                            [h, -h],
                            [h, -50],
                            [-h, -50],
                            [-h, -h],
                            [-50, -h],
                            [-50, h],
                            [-h, h],
                            [-h, 50],
                            [h, 50]
                          ]
                        ]
                      }),
                        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
                    } else if ("diamond" === n || "esriSMSDiamond" === n)
                      (t = {
                        rings: [
                          [[-50, 0], [0, 50], [50, 0], [0, -50], [-50, 0]]
                        ]
                      }),
                        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
                    else if ("square" === n || "esriSMSSquare" === n)
                      (t = {
                        rings: [
                          [
                            [-50, -50],
                            [-50, 50],
                            [50, 50],
                            [50, -50],
                            [-50, -50]
                          ]
                        ]
                      }),
                        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
                    else if ("x" === n || "esriSMSX" === n) {
                      var h;
                      (t = {
                        rings: [
                          [
                            [0, (h = 0)],
                            [50 - h, 50],
                            [50, 50 - h],
                            [h, 0],
                            [50, h - 50],
                            [50 - h, -50],
                            [0, -h],
                            [h - 50, -50],
                            [-50, h - 50],
                            [-h, 0],
                            [-50, 50 - h],
                            [h - 50, 50],
                            [0, h]
                          ]
                        ]
                      }),
                        (i = { xmin: -50, ymin: -50, xmax: 50, ymax: 50 });
                    } else if ("triangle" === n || "esriSMSTriangle" === n) {
                      var f = 57.735026918962575,
                        p = -f,
                        d = (2 / 3) * 100 - 100;
                      (t = {
                        rings: [[[p, d], [0, (2 / 3) * 100], [f, d], [p, d]]]
                      }),
                        (i = {
                          xmin: p,
                          ymin: d,
                          xmax: f,
                          ymax: (2 / 3) * 100
                        });
                    }
                    if (t && i) {
                      var c = [
                        { type: "CIMSolidFill", enable: !0, color: e.color }
                      ];
                      e.outline &&
                        c.push({
                          type: "CIMSolidStroke",
                          enable: !0,
                          width: e.outline.width,
                          color: e.outline.color
                        });
                      var y = { type: "CIMPolygonSymbol", symbolLayers: c };
                      r = {
                        type: "CIMPointSymbol",
                        symbolLayers: [
                          {
                            type: "CIMVectorMarker",
                            enable: !0,
                            rotation: e.angle,
                            size: e.size,
                            offsetX: e.xoffset,
                            offsetY: e.yoffset,
                            frame: i,
                            markerGraphics: [
                              {
                                type: "CIMMarkerGraphic",
                                geometry: t,
                                symbol: y
                              }
                            ]
                          }
                        ]
                      };
                    }
                    return r;
                  }),
                  e
                );
              })();
            t.CIMSymbolHelper = o;
            var l = (function() {
              function e() {}
              return (
                (e.rasterizeSimpleFill = function(e, t) {
                  ("solid" !== t &&
                    "none" !== t &&
                    "esriSFSSolid" !== t &&
                    "esriSFSNull" !== t) ||
                    console.error(
                      "Unexpected: style does not require rasterization"
                    ),
                    (e.width = 8),
                    (e.height = 8);
                  var i = e.getContext("2d");
                  (i.strokeStyle = "#FFFFFF"),
                    i.beginPath(),
                    ("vertical" !== t &&
                      "cross" !== t &&
                      "esriSFSCross" !== t &&
                      "esriSFSVertical" !== t) ||
                      (i.moveTo(0, 0), i.lineTo(0, 8)),
                    ("horizontal" !== t &&
                      "cross" !== t &&
                      "esriSFSCross" !== t &&
                      "esriSFSHorizontal" !== t) ||
                      (i.moveTo(0, 0), i.lineTo(8, 0)),
                    ("forward-diagonal" !== t &&
                      "diagonal-cross" !== t &&
                      "esriSFSDiagonalCross" !== t &&
                      "esriSFSForwardDiagonal" !== t) ||
                      (i.moveTo(0, 0), i.lineTo(8, 8)),
                    ("backward-diagonal" !== t &&
                      "diagonal-cross" !== t &&
                      "esriSFSBackwardDiagonal" !== t &&
                      "esriSFSDiagonalCross" !== t) ||
                      (i.moveTo(8, 0), i.lineTo(0, 8)),
                    i.stroke();
                  for (
                    var r,
                      n = i.getImageData(0, 0, e.width, e.height),
                      a = new Uint8Array(n.data),
                      s = 0;
                    s < a.length;
                    s += 4
                  )
                    (r = a[s + 3] / 255),
                      (a[s] = a[s] * r),
                      (a[s + 1] = a[s + 1] * r),
                      (a[s + 2] = a[s + 2] * r);
                  return [a, e.width, e.height];
                }),
                (e.rasterizeSimpleLine = function(e, t) {
                  var i;
                  switch (t) {
                    case "dash":
                    case "esriSLSDash":
                      i = [3, 2];
                      break;
                    case "dash-dot":
                    case "esriSLSDashDot":
                      i = [2, 2, 0, 2];
                      break;
                    case "dot":
                    case "esriSLSDot":
                      i = [0, 3];
                      break;
                    case "long-dash":
                    case "esriSLSLongDash":
                      i = [6, 3];
                      break;
                    case "long-dash-dot":
                    case "esriSLSLongDashDot":
                      i = [6, 3, 0, 3];
                      break;
                    case "long-dash-dot-dot":
                    case "esriSLSDashDotDot":
                      i = [2, 2, 0, 2, 0, 2];
                      break;
                    case "short-dash":
                    case "esriSLSShortDash":
                      i = [2, 2];
                      break;
                    case "short-dash-dot":
                    case "esriSLSShortDashDot":
                      i = [2, 2, 0, 2];
                      break;
                    case "short-dash-dot-dot":
                    case "esriSLSShortDashDotDot":
                      i = [2, 2, 0, 2, 0, 2];
                      break;
                    case "short-dot":
                    case "esriSLSShortDot":
                      i = [0, 2];
                      break;
                    case "solid":
                    case "esriSLSSolid":
                    case "none":
                      s.error(
                        "Unexpected: style does not require rasterization"
                      ),
                        (i = [0, 0]);
                      break;
                    default:
                      s.error(
                        "Tried to rasterize SLS, but found an unexpected style: " +
                          t +
                          "!"
                      ),
                        (i = [0, 0]);
                  }
                  for (var r = 0, a = 0, o = i; a < o.length; a++) {
                    r += o[a];
                  }
                  for (
                    var l = 16 * r, u = 31 * l, h = new Float32Array(u), f = 0;
                    f < u;
                    ++f
                  )
                    h[f] = 257;
                  for (
                    var p = 0.5, d = 0.5, c = !0, y = 0, v = i;
                    y < v.length;
                    y++
                  ) {
                    (p = d), (d += 16 * v[y]);
                    for (var g = p; g < d; ) {
                      for (var m = 0.5; m < 31; ) {
                        var _ = (m - 15.5) * (m - 15.5);
                        (h[(f = (31 - m + 0.5 + 1) * l + g - 0.5)] = c
                          ? _
                          : Math.min(
                              (g - p) * (g - p) + _,
                              (g - d) * (g - d) + _
                            )),
                          m++;
                      }
                      g++;
                    }
                    c = !c;
                  }
                  var x = h.length,
                    b = new Uint8Array(4 * x);
                  for (f = 0; f < x; ++f) {
                    var w = Math.sqrt(h[f]) / 15;
                    n.packFloat(w, b, 4 * f);
                  }
                  return [b, l, 31];
                }),
                e
              );
            })();
            t.SymbolHelper = l;
          }.apply(null, r)) || (e.exports = n);
    },
    2313: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(0), i(2043), i(2051)]),
        void 0 ===
          (n = function(e, t, i, r, n, a) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function() {
              function e(e) {
                this._t = e;
              }
              return (
                (e.createIdentity = function() {
                  return new e([1, 0, 0, 0, 1, 0]);
                }),
                (e.prototype.clone = function() {
                  return new e(this._t.slice());
                }),
                (e.prototype.transform = function(e) {
                  var t = this._t;
                  return [
                    t[0] * e[0] + t[1] * e[1] + t[2],
                    t[3] * e[0] + t[4] * e[1] + t[5]
                  ];
                }),
                (e.createScale = function(t, i) {
                  return new e([t, 0, 0, 0, i, 0]);
                }),
                (e.prototype.scale = function(e, t) {
                  var i = this._t;
                  return (
                    (i[0] *= e),
                    (i[1] *= e),
                    (i[2] *= e),
                    (i[3] *= t),
                    (i[4] *= t),
                    (i[5] *= t),
                    this
                  );
                }),
                (e.prototype.scaleRatio = function() {
                  return Math.sqrt(
                    this._t[0] * this._t[0] + this._t[1] * this._t[1]
                  );
                }),
                (e.createTranslate = function(t, i) {
                  return new e([0, 0, t, 0, 0, i]);
                }),
                (e.prototype.translate = function(e, t) {
                  var i = this._t;
                  return (i[2] += e), (i[5] += t), this;
                }),
                (e.createRotate = function(t) {
                  var i = Math.cos(t),
                    r = Math.sin(t);
                  return new e([i, -r, 0, r, i, 0]);
                }),
                (e.prototype.rotate = function(t) {
                  return this.multiply(e.createRotate(t));
                }),
                (e.prototype.multiply = function(e) {
                  var t = this._t,
                    i = e._t,
                    r = t[0] * i[0] + t[3] * i[1],
                    n = t[1] * i[0] + t[4] * i[1],
                    a = t[2] * i[0] + t[5] * i[1] + i[2],
                    s = t[0] * i[3] + t[3] * i[4],
                    o = t[1] * i[3] + t[4] * i[4],
                    l = t[2] * i[3] + t[5] * i[4] + i[5];
                  return (
                    (t[0] = r),
                    (t[1] = n),
                    (t[2] = a),
                    (t[3] = s),
                    (t[4] = o),
                    (t[5] = l),
                    this
                  );
                }),
                e
              );
            })();
            t.Transformation = s;
            var o = (function() {
              function e(e) {
                (this._transfos = []),
                  (this._sizeTransfos = []),
                  this._transfos.push(e || s.createIdentity()),
                  this._sizeTransfos.push(e ? e.scaleRatio() : 1);
              }
              return (
                (e.prototype.transformPt = function(e) {
                  return this._transfos[this._transfos.length - 1].transform(e);
                }),
                (e.prototype.transformSize = function(e) {
                  return e * this._sizeTransfos[this._sizeTransfos.length - 1];
                }),
                (e.prototype.back = function() {
                  return this._transfos[this._transfos.length - 1];
                }),
                (e.prototype.push = function(e) {
                  var t = e.scaleRatio();
                  e.multiply(this.back()),
                    this._transfos.push(e),
                    this._sizeTransfos.push(
                      this._sizeTransfos[this._sizeTransfos.length - 1] * t
                    );
                }),
                (e.prototype.pop = function() {
                  this._transfos.splice(-1, 1),
                    this._sizeTransfos.splice(-1, 1);
                }),
                (e.prototype.drawSolidFill = function(e, t) {}),
                (e.prototype.drawSolidStroke = function(e, t, i) {}),
                (e.prototype.drawSymbol = function(e, t) {
                  if (e)
                    switch (e.type) {
                      case "CIMPointSymbol":
                      case "CIMLineSymbol":
                      case "CIMPolygonSymbol":
                        this.drawMultiLayerSymbol(e, t);
                    }
                }),
                (e.prototype.drawMultiLayerSymbol = function(e, t) {
                  if (e) {
                    var i = e.symbolLayers;
                    if (i)
                      for (var r = i.length; r--; ) {
                        var n = i[r];
                        if (n && n.enable)
                          switch (n.type) {
                            case "CIMSolidFill":
                              this.drawSolidFill(t, n.color);
                              break;
                            case "CIMSolidStroke":
                              this.drawSolidStroke(t, n.color, n.width);
                              break;
                            case "CIMVectorMarker":
                              this.drawVectorMarker(n, t);
                          }
                      }
                  }
                }),
                (e.prototype.drawVectorMarker = function(e, t) {
                  if (e) {
                    var i = e.markerGraphics;
                    if (i) {
                      var r = e.size,
                        a = e.frame,
                        o = a ? a.ymax - a.ymin : 0,
                        l = r && o ? r / o : 1,
                        u = s.createIdentity();
                      a &&
                        u.translate(
                          0.5 * -(a.xmax + a.xmin),
                          0.5 * -(a.ymax + a.ymin)
                        );
                      var h = e.anchorPt;
                      if (h) {
                        var f = h.x,
                          p = h.y;
                        "relative" === e.anchorPtUnits &&
                          a &&
                          ((f *= (a.xmax - a.xmin) * l), (p *= r)),
                          u.translate(-f, -p);
                      }
                      1 !== l && u.scale(l, l),
                        e.rotation && u.rotate(e.rotation * n.C_DEG_TO_RAD),
                        u.translate(e.offsetX || 0, e.offsetY || 0),
                        u.translate(t.x, t.y),
                        this.push(u);
                      for (var d = 0, c = i; d < c.length; d++) {
                        var y = c[d];
                        y && this.drawSymbol(y.symbol, y.geometry);
                      }
                      this.pop();
                    }
                  }
                }),
                e
              );
            })();
            t.CIMSymbolDrawHelper = o;
            var l = (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t._xmin = t._ymin = 1 / 0), (t._xmax = t._ymax = -1 / 0), t
                );
              }
              return (
                i(t, e),
                (t.prototype.envelope = function() {
                  return new a(
                    this._xmin,
                    this._ymin,
                    this._xmax - this._xmin,
                    this._ymax - this._ymin
                  );
                }),
                (t.prototype._merge = function(e, t) {
                  e[0] - t < this._xmin && (this._xmin = e[0] - t),
                    e[0] + t > this._xmax && (this._xmax = e[0] + t),
                    e[1] - t < this._ymin && (this._ymin = e[1] - t),
                    e[1] + t > this._ymax && (this._ymax = e[1] + t);
                }),
                (t.prototype.drawSolidFill = function(e, t) {
                  for (var i = 0, r = e.rings; i < r.length; i++) {
                    var n = r[i],
                      a = n ? n.length : 0;
                    if (a > 2) {
                      this._merge(this.transformPt(n[0]), 0);
                      for (var s = 1; s < a; ++s)
                        this._merge(this.transformPt(n[s]), 0);
                    }
                  }
                }),
                (t.prototype.drawSolidStroke = function(e, t, i) {
                  for (
                    var r = 0.5 * this.transformSize(i),
                      n = 0,
                      a = e.rings || e.paths;
                    n < a.length;
                    n++
                  ) {
                    var s = a[n],
                      o = s ? s.length : 0;
                    if (o > 1) {
                      this._merge(this.transformPt(s[0]), r);
                      for (var l = 1; l < o; ++l)
                        this._merge(this.transformPt(s[l]), r);
                    }
                  }
                }),
                t
              );
            })(o);
            t.EnvDrawHelper = l;
            var u = (function(e) {
              function t(t, i) {
                var r = e.call(this, i) || this;
                return (r._ctx = t), r;
              }
              return (
                i(t, e),
                (t.prototype.drawSolidFill = function(e, t) {
                  var i = this._ctx;
                  (i.fillStyle =
                    "rgba(" +
                    Math.round(t[0]) +
                    "," +
                    Math.round(t[1]) +
                    "," +
                    Math.round(t[2]) +
                    "," +
                    t[3] / 255 +
                    ")"),
                    i.beginPath();
                  for (var r = 0, n = e.rings; r < n.length; r++) {
                    var a = n[r],
                      s = a ? a.length : 0;
                    if (s > 2) {
                      var o = this.transformPt(a[0]);
                      i.moveTo(o[0], o[1]);
                      for (var l = 1; l < s; ++l)
                        (o = this.transformPt(a[l])), i.lineTo(o[0], o[1]);
                      i.closePath();
                    }
                  }
                  i.fill("evenodd");
                }),
                (t.prototype.drawSolidStroke = function(e, t, i) {
                  var r = this._ctx;
                  (r.strokeStyle =
                    "rgba(" +
                    Math.round(t[0]) +
                    "," +
                    Math.round(t[1]) +
                    "," +
                    Math.round(t[2]) +
                    "," +
                    t[3] / 255 +
                    ")"),
                    (r.lineWidth = this.transformSize(i) + 0.5),
                    r.beginPath();
                  for (
                    var n = !!e.rings, a = 0, s = e.rings || e.paths;
                    a < s.length;
                    a++
                  ) {
                    var o = s[a],
                      l = o ? o.length : 0;
                    if (l > 1) {
                      var u = this.transformPt(o[0]);
                      r.moveTo(u[0], u[1]);
                      for (var h = 1; h < l; ++h)
                        (u = this.transformPt(o[h])), r.lineTo(u[0], u[1]);
                      n && r.closePath();
                    }
                  }
                  r.stroke();
                }),
                t
              );
            })(o);
            t.CanvasDrawHelper = u;
          }.apply(null, r)) || (e.exports = n);
    },
    2314: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(15), i(108), i(2051), i(2154), i(50)]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s) {
            var o;
            return (
              i("stable-symbol-rendering") && (o = new Set()),
              (function() {
                function e(e, t, i) {
                  (this.width = 0),
                    (this.height = 0),
                    (this._dirties = []),
                    (this._glyphData = []),
                    (this._currentPage = 0),
                    (this._glyphIndex = {}),
                    (this._textures = []),
                    (this._rangePromises = new Map()),
                    (e <= 0 || t <= 0) &&
                      console.error(
                        "Glyph mosaic width and height must be greater than zero!"
                      ),
                    (this.width = e),
                    (this.height = t),
                    (this._glyphSource = i),
                    (this._binPack = new a(e - 4, t - 4)),
                    this._glyphData.push(new Uint8Array(e * t)),
                    this._dirties.push(!0),
                    this._textures.push(void 0),
                    this._addDecorationGlyph();
                }
                return (
                  (e.prototype.getGlyphItems = function(e, t) {
                    for (
                      var n = this,
                        a = [],
                        s = this._glyphSource,
                        l = new Set(),
                        u = 0,
                        h = t;
                      u < h.length;
                      u++
                    ) {
                      var f = h[u],
                        p = Math.floor(f * (1 / 256));
                      l.add(p);
                    }
                    var d = [];
                    return (
                      l.forEach(function(t) {
                        if (t <= 256) {
                          var i = e + t;
                          if (n._rangePromises.has(i))
                            d.push(n._rangePromises.get(i));
                          else {
                            var r = s
                              .getRange(e, t)
                              .then(function() {
                                n._rangePromises.delete(i);
                              })
                              .catch(function() {
                                throw (n._rangePromises.delete(i),
                                Error("Unable to query resource"));
                              });
                            n._rangePromises.set(i, r), d.push(r);
                          }
                        }
                      }),
                      r(d).then(function(r) {
                        var u,
                          h = n._glyphIndex[e];
                        if (
                          (h || ((h = {}), (n._glyphIndex[e] = h)),
                          i("stable-symbol-rendering"))
                        ) {
                          o.clear();
                          for (var f = 0, p = t; f < p.length; f++) {
                            var d = p[f];
                            o.add(d);
                          }
                          var c = [];
                          l.forEach(function(e) {
                            c.push(e);
                          }),
                            c.sort(),
                            (u = []);
                          for (var y = 0, v = c; y < v.length; y++)
                            for (var g = v[y], m = 0; m < 256; ++m)
                              u.push(256 * g + m);
                        } else u = t;
                        for (var _ = 0, x = u; _ < x.length; _++) {
                          var b = h[(d = x[_])];
                          if (b)
                            (i("stable-symbol-rendering") && !o.has(d)) ||
                              (a[d] = {
                                rect: b.rect,
                                metrics: b.metrics,
                                page: b.page
                              });
                          else {
                            var w = s.getGlyph(e, d);
                            if (w && w.metrics) {
                              var D = n._recordGlyph(w, d);
                              (h[d] = {
                                rect: D,
                                metrics: w.metrics,
                                tileIDs: null,
                                page: n._currentPage
                              }),
                                (i("stable-symbol-rendering") && !o.has(d)) ||
                                  (a[d] = {
                                    rect: D,
                                    metrics: w.metrics,
                                    page: n._currentPage
                                  }),
                                (n._dirties[n._currentPage] = !0);
                            }
                          }
                        }
                        return a;
                      })
                    );
                  }),
                  (e.prototype._recordGlyph = function(e, t) {
                    var i,
                      r = e.metrics;
                    if (0 === r.width) i = new n(0, 0, 0, 0);
                    else {
                      var s = r.width + 6,
                        o = r.height + 6,
                        l = s % 4 ? 4 - (s % 4) : 4,
                        u = o % 4 ? 4 - (o % 4) : 4;
                      1 === l && (l = 5),
                        1 === u && (u = 5),
                        (i = this._binPack.allocate(s + l, o + u)).isEmpty &&
                          (this._dirties[this._currentPage] ||
                            (this._glyphData[this._currentPage] = null),
                          (this._currentPage = this._glyphData.length),
                          this._glyphData.push(
                            new Uint8Array(this.width * this.height)
                          ),
                          this._dirties.push(!0),
                          this._textures.push(void 0),
                          (this._binPack = new a(
                            this.width - 4,
                            this.height - 4
                          )),
                          (i = this._binPack.allocate(s + l, o + u)));
                      var h = this._glyphData[this._currentPage],
                        f = e.bitmap,
                        p = void 0,
                        d = void 0;
                      if (f)
                        for (var c = 0; c < o; c++) {
                          (p = s * c), (d = this.width * (i.y + c + 1) + i.x);
                          for (var y = 0; y < s; y++) h[d + y + 1] = f[p + y];
                        }
                    }
                    return i;
                  }),
                  (e.prototype._addDecorationGlyph = function() {
                    for (
                      var e = [117, 149, 181, 207, 207, 181, 149, 117],
                        t = [],
                        i = 0;
                      i < e.length;
                      i++
                    )
                      for (var r = e[i], n = 0; n < 11; n++) t.push(r);
                    var a = {
                      metrics: {
                        width: 5,
                        height: 2,
                        left: 0,
                        top: 0,
                        advance: 0
                      },
                      bitmap: new Uint8Array(t)
                    };
                    this._recordGlyph(a, 0);
                  }),
                  (e.prototype.bind = function(e, t, i, r) {
                    this._textures[i] ||
                      (this._textures[i] = new s(
                        e,
                        {
                          pixelFormat: 6406,
                          dataType: 5121,
                          width: this.width,
                          height: this.height
                        },
                        new Uint8Array(this.width * this.height)
                      ));
                    var n = this._textures[i];
                    n.setSamplingMode(t),
                      this._dirties[i] && n.setData(this._glyphData[i]),
                      e.bindTexture(n, r),
                      (this._dirties[i] = !1);
                  }),
                  (e.prototype.dispose = function() {
                    this._binPack = null;
                    for (var e = 0, t = this._textures; e < t.length; e++) {
                      var i = t[e];
                      i && i.dispose();
                    }
                    (this._textures.length = 0), (this._glyphData.length = 0);
                  }),
                  e
                );
              })()
            );
          }.apply(null, r)) || (e.exports = n);
    },
    2315: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(18), i(784), i(9)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            var a = (function() {
                function e(e) {
                  for (this._metrics = [], this._bitmaps = []; e.next(); )
                    switch (e.tag()) {
                      case 1:
                        for (var t = e.getMessage(); t.next(); )
                          switch (t.tag()) {
                            case 3:
                              for (
                                var i = t.getMessage(),
                                  r = void 0,
                                  n = void 0,
                                  a = void 0,
                                  s = void 0,
                                  o = void 0,
                                  l = void 0,
                                  u = void 0;
                                i.next();

                              )
                                switch (i.tag()) {
                                  case 1:
                                    r = i.getUInt32();
                                    break;
                                  case 2:
                                    n = i.getBytes();
                                    break;
                                  case 3:
                                    a = i.getUInt32();
                                    break;
                                  case 4:
                                    s = i.getUInt32();
                                    break;
                                  case 5:
                                    o = i.getSInt32();
                                    break;
                                  case 6:
                                    l = i.getSInt32();
                                    break;
                                  case 7:
                                    u = i.getUInt32();
                                    break;
                                  default:
                                    i.skip();
                                }
                              r &&
                                ((this._metrics[r] = {
                                  width: a,
                                  height: s,
                                  left: o,
                                  top: l,
                                  advance: u
                                }),
                                (this._bitmaps[r] = n));
                              break;
                            default:
                              t.skip();
                          }
                        break;
                      default:
                        e.skip();
                    }
                }
                return (
                  (e.prototype.getMetrics = function(e) {
                    return this._metrics[e];
                  }),
                  (e.prototype.getBitmap = function(e) {
                    return this._bitmaps[e];
                  }),
                  e
                );
              })(),
              s = (function() {
                function e() {
                  this._ranges = [];
                }
                return (
                  (e.prototype.getRange = function(e) {
                    return this._ranges[e];
                  }),
                  (e.prototype.addRange = function(e, t) {
                    this._ranges[e] = t;
                  }),
                  e
                );
              })();
            return (function() {
              function e(e) {
                (this._glyphInfo = {}), (this._baseURL = e);
              }
              return (
                (e.prototype.getRange = function(e, t) {
                  var s = this._getFontStack(e);
                  if (s.getRange(t)) return n.resolve();
                  var o = 256 * t,
                    l = o + 255,
                    u = this._baseURL
                      .replace("{fontstack}", e)
                      .replace("{range}", o + "-" + l);
                  return i(u, {
                    callbackParamName: "callback",
                    responseType: "array-buffer"
                  }).then(function(e) {
                    s.addRange(
                      t,
                      new a(new r(new Uint8Array(e.data), new DataView(e.data)))
                    );
                  });
                }),
                (e.prototype.getGlyph = function(e, t) {
                  var i = this._getFontStack(e);
                  if (i) {
                    var r = Math.floor(t / 256);
                    if (!(r > 256)) {
                      var n = i.getRange(r);
                      if (n)
                        return {
                          metrics: n.getMetrics(t),
                          bitmap: n.getBitmap(t)
                        };
                    }
                  }
                }),
                (e.prototype._getFontStack = function(e) {
                  var t = this._glyphInfo[e];
                  return t || (t = this._glyphInfo[e] = new s()), t;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2316: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2043), i(2051), i(2154), i(50)]),
        void 0 ===
          (n = function(e, t, i, r, n, a) {
            return (function() {
              function e(e, t, i) {
                void 0 === i && (i = 0),
                  (this._size = []),
                  (this._mosaicsData = []),
                  (this._textures = []),
                  (this._dirties = []),
                  (this._maxItemSize = 0),
                  (this._currentPage = 0),
                  (this._pageWidth = 0),
                  (this._pageHeight = 0),
                  (this._mosaicRects = new Map()),
                  (this._spriteCopyQueue = []),
                  (this.pixelRatio = 1),
                  (e <= 0 || t <= 0) &&
                    console.error(
                      "Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"
                    ),
                  (this._pageWidth = e),
                  (this._pageHeight = t),
                  i > 0 && (this._maxItemSize = i),
                  (this.pixelRatio = 1 | window.devicePixelRatio),
                  (this._binPack = new n(this._pageWidth, this._pageHeight));
                var r = Math.floor(this._pageWidth),
                  a = Math.floor(this._pageHeight);
                (this._mosaicsData[0] = new Uint32Array(r * a)),
                  this._dirties.push(!0),
                  this._size.push([this._pageWidth, this._pageHeight]),
                  this._textures.push(void 0);
              }
              return (
                (e.prototype.getWidth = function(e) {
                  return e >= this._size.length ? -1 : this._size[e][0];
                }),
                (e.prototype.getHeight = function(e) {
                  return e >= this._size.length ? -1 : this._size[e][1];
                }),
                (e.prototype.getPage = function(e) {
                  return e < this._textures.length ? this._textures[e] : null;
                }),
                (e.prototype.has = function(e) {
                  return this._mosaicRects.has(e);
                }),
                Object.defineProperty(e.prototype, "itemCount", {
                  get: function() {
                    return this._mosaicRects.size;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.getSpriteItem = function(e) {
                  return this._mosaicRects.get(e);
                }),
                (e.prototype.addSpriteItem = function(e, t, i, r, n, a) {
                  if (this._mosaicRects.has(e)) return this._mosaicRects.get(e);
                  var s = this._allocateImage(t[0], t[1]),
                    o = s[0],
                    l = s[1],
                    u = s[2];
                  if (o.width <= 0 || o.height <= 0) return null;
                  var h = {
                    rect: o,
                    width: t[0],
                    height: t[1],
                    anchorX: i[0],
                    anchorY: i[1],
                    sdf: a,
                    pixelRatio: 1,
                    page: l
                  };
                  return (
                    this._mosaicRects.set(e, h),
                    this._copy({
                      rect: o,
                      spriteSize: t,
                      spriteData: r,
                      page: l,
                      pageSize: u,
                      repeat: n,
                      sdf: a
                    }),
                    h
                  );
                }),
                (e.prototype.hasItemsToProcess = function() {
                  return 0 !== this._spriteCopyQueue.length;
                }),
                (e.prototype.processNextItem = function() {
                  var e = this._spriteCopyQueue.pop();
                  e && this._copy(e);
                }),
                (e.prototype.getSpriteItems = function(e) {
                  for (var t = {}, i = 0, r = e; i < r.length; i++) {
                    var n = r[i];
                    t[n] = this.getSpriteItem(n);
                  }
                  return t;
                }),
                (e.prototype.getMosaicItemPosition = function(e, t) {
                  var i = this.getSpriteItem(e),
                    r = i && i.rect;
                  if (!r) return null;
                  (r.width = i.width), (r.height = i.height);
                  var n = i.width,
                    a = i.height;
                  return {
                    size: [i.width, i.height],
                    tl: [
                      (r.x + 1) / this._size[i.page][0],
                      (r.y + 1) / this._size[i.page][1]
                    ],
                    br: [
                      (r.x + 1 + n) / this._size[i.page][0],
                      (r.y + 1 + a) / this._size[i.page][1]
                    ],
                    page: i.page
                  };
                }),
                (e.prototype.bind = function(e, t, i, r) {
                  void 0 === i && (i = 0),
                    void 0 === r && (r = 0),
                    this._textures[i] ||
                      (this._textures[i] = new a(
                        e,
                        {
                          pixelFormat: 6408,
                          dataType: 5121,
                          width: this._size[i][0],
                          height: this._size[i][1]
                        },
                        new Uint8Array(this._mosaicsData[i].buffer)
                      ));
                  var n = this._textures[i];
                  n.setSamplingMode(t),
                    this._dirties[i] &&
                      (n.setData(new Uint8Array(this._mosaicsData[i].buffer)),
                      n.generateMipmap()),
                    e.bindTexture(n, r),
                    (this._dirties[i] = !1);
                }),
                (e._copyBits = function(e, t, i, r, n, a, s, o, l, u, h) {
                  var f = r * t + i,
                    p = o * a + s;
                  if (h) {
                    p -= a;
                    for (
                      var d = -1;
                      d <= u;
                      f = (((++d + u) % u) + r) * t + i, p += a
                    )
                      for (var c = -1; c <= l; c++)
                        n[p + c] = e[f + ((c + l) % l)];
                  } else
                    for (d = 0; d < u; d++) {
                      for (c = 0; c < l; c++) n[p + c] = e[f + c];
                      (f += t), (p += a);
                    }
                }),
                (e.prototype._copy = function(t) {
                  if (!(t.page >= this._mosaicsData.length)) {
                    var i = t.spriteData,
                      r = this._mosaicsData[t.page];
                    (r && i) ||
                      console.error(
                        "Source or target images are uninitialized!"
                      ),
                      e._copyBits(
                        i,
                        t.spriteSize[0],
                        0,
                        0,
                        r,
                        t.pageSize[0],
                        t.rect.x + 1,
                        t.rect.y + 1,
                        t.spriteSize[0],
                        t.spriteSize[1],
                        t.repeat
                      ),
                      (this._dirties[t.page] = !0);
                  }
                }),
                (e.prototype._allocateImage = function(e, t) {
                  (e += 2), (t += 2);
                  var a = Math.max(e, t);
                  if (this._maxItemSize && this._maxItemSize < a) {
                    var s = Math.pow(2, Math.ceil(i.log2(e))),
                      o = Math.pow(2, Math.ceil(i.log2(t))),
                      l = new r(0, 0, e, t);
                    return (
                      this._mosaicsData.push(new Uint32Array(s * o)),
                      this._dirties.push(!0),
                      this._size.push([s, o]),
                      this._textures.push(void 0),
                      [l, this._mosaicsData.length - 1, [s, o]]
                    );
                  }
                  var u = e % 4 ? 4 - (e % 4) : 0,
                    h = t % 4 ? 4 - (t % 4) : 0,
                    f = this._binPack.allocate(e + u, t + h);
                  return f.width <= 0
                    ? (this._dirties[this._currentPage] ||
                        (this._mosaicsData[this._currentPage] = null),
                      (this._currentPage = this._mosaicsData.length),
                      this._mosaicsData.push(
                        new Uint32Array(this._pageWidth * this._pageHeight)
                      ),
                      this._dirties.push(!0),
                      this._size.push([this._pageWidth, this._pageHeight]),
                      this._textures.push(void 0),
                      (this._binPack = new n(
                        this._pageWidth,
                        this._pageHeight
                      )),
                      this._allocateImage(e, t))
                    : [
                        f,
                        this._currentPage,
                        [this._pageWidth, this._pageHeight]
                      ];
                }),
                (e.prototype.dispose = function() {
                  this._binPack = null;
                  for (var e = 0, t = this._textures; e < t.length; e++) {
                    var i = t[e];
                    i && i.dispose();
                  }
                  (this._textures.length = 0),
                    (this._mosaicsData.length = 0),
                    this._mosaicRects.clear();
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2317: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(39), i(84), i(324), i(2024), i(2010)]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s) {
            function o(e, t) {
              var i = t.length;
              if (e < t[0].value || 1 === i) return t[0].size;
              for (var r = 1; r < i; r++)
                if (e < t[r].value) {
                  var n = (e - t[r - 1].value) / (t[r].value - t[r - 1].value);
                  return t[r - 1].size + n * (t[r].size - t[r - 1].size);
                }
              return t[i - 1].size;
            }
            return (function() {
              function e() {
                (this.symbolLevels = []),
                  (this.vvColorValues = new Float32Array(8)),
                  (this.vvColors = new Float32Array(32)),
                  (this.vvOpacityValues = new Float32Array(8)),
                  (this.vvOpacities = new Float32Array(8)),
                  (this.vvSizeMinMaxValue = new Float32Array(4)),
                  (this.vvSizeFieldStopsValues = new Float32Array(6)),
                  (this.vvSizeFieldStopsSizes = new Float32Array(6)),
                  (this._vvMaterialParameters = {
                    vvSizeEnabled: !1,
                    vvColorEnabled: !1,
                    vvRotationEnabled: !1,
                    vvRotationType: "geographic",
                    vvOpacityEnabled: !1
                  }),
                  this.symbolLevels.push(0);
              }
              return (
                Object.defineProperty(e.prototype, "vvMaterialParameters", {
                  get: function() {
                    return this._vvMaterialParameters;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "heatmapParameters", {
                  get: function() {
                    return this._heatmapParameters;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.updateHeatmapParameters = function(e) {
                  var t = e.blurRadius,
                    i = Math.round(4.5 * e.blurRadius),
                    r = 2 * i + 1;
                  this._heatmapParameters ||
                    (this._heatmapParameters = {
                      radius: t,
                      blurRadius: i,
                      kernelSize: r,
                      refreshIntensityKernel: !0,
                      intensityKernel: null,
                      color: null,
                      maxPixelIntensity: e.maxPixelIntensity,
                      minPixelIntensity: e.minPixelIntensity
                    });
                  var n = this._heatmapParameters;
                  (n.color = (function(e) {
                    for (
                      var t,
                        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        r = [
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                        ],
                        n = 0;
                      n < 16;
                      n++
                    ) {
                      var s = e[Math.min(n, e.length - 1)];
                      (i[n] = s.ratio),
                        (r[0 + (t = 4 * n)] = s.color[0] / 255),
                        (r[t + 1] = s.color[1] / 255),
                        (r[t + 2] = s.color[2] / 255),
                        (r[t + 3] =
                          s.color[3] > 1 ? s.color[3] / 255 : s.color[3]),
                        a.premultiplyAlpha(r, t, !0);
                    }
                    return { values: i, colors: r, refreshColorRamp: !0 };
                  })(e.colorStops)),
                    Math.abs(n.radius - e.radius) > 1e-6 &&
                      ((n.radius = t),
                      (n.blurRadius = i),
                      (n.kernelSize = r),
                      (n.refreshIntensityKernel = !0)),
                    (n.maxPixelIntensity = e.maxPixelIntensity),
                    (n.minPixelIntensity = e.minPixelIntensity);
                }),
                (e.prototype.updateVisualVariables = function(e, t) {
                  var a = this._vvMaterialParameters;
                  if (
                    ((a.vvOpacityEnabled = !1),
                    (a.vvSizeEnabled = !1),
                    (a.vvColorEnabled = !1),
                    (a.vvRotationEnabled = !1),
                    e)
                  ) {
                    var l = e.size;
                    if (l) {
                      if (((a.vvSizeEnabled = !0), l.minMaxValue)) {
                        var u = l.minMaxValue,
                          h = void 0,
                          f = void 0;
                        if (s.isDefined(u.minSize) && s.isDefined(u.maxSize))
                          if (s.isNumber(u.minSize) && s.isNumber(u.maxSize))
                            (h = i.pt2px(u.minSize)), (f = i.pt2px(u.maxSize));
                          else {
                            var p = t.scale;
                            (h = i.pt2px(o(p, u.minSize.stops))),
                              (f = i.pt2px(o(p, u.maxSize.stops)));
                          }
                        this.vvSizeMinMaxValue.set([
                          u.minDataValue,
                          u.maxDataValue,
                          h,
                          f
                        ]);
                      }
                      if (
                        (l.scaleStops &&
                          (this.vvSizeScaleStopsValue = i.pt2px(
                            o(t.scale, l.scaleStops.stops)
                          )),
                        l.unitValue)
                      ) {
                        var d =
                          r.getMetersPerUnitForSR(t.spatialReference) /
                          n.meterIn[l.unitValue.unit];
                        this.vvSizeUnitValueToPixelsRatio = d / t.resolution;
                      }
                      l.fieldStops &&
                        (this.vvSizeFieldStopsValues.set(l.fieldStops.values),
                        this.vvSizeFieldStopsSizes.set(l.fieldStops.sizes));
                    }
                    var c = e.color;
                    c &&
                      ((a.vvColorEnabled = !0),
                      this.vvColorValues.set(c.values),
                      this.vvColors.set(c.colors));
                    var y = e.opacity;
                    y &&
                      ((a.vvOpacityEnabled = !0),
                      this.vvOpacityValues.set(y.values),
                      this.vvOpacities.set(y.opacities));
                    var v = e.rotation;
                    v &&
                      ((a.vvRotationEnabled = !0), (a.vvRotationType = v.type));
                  }
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2318: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(5),
        i(786),
        i(417),
        i(418),
        i(311),
        i(775),
        i(2321),
        i(2319),
        i(2007),
        i(2028),
        i(2010),
        i(2322),
        i(2118),
        i(772),
        i(259)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o, l, u, h, f, p, d, c, y, v) {
            function g(e, t) {
              return e.sortKey - t.sortKey;
            }
            return (function(e) {
              function t(t, i) {
                var s = e.call(this) || this;
                return (
                  (s.status = y.TileStatus.INITIALIZED),
                  (s._data = null),
                  (s.hlDisplayList = null),
                  (s._displayList = null),
                  (s._wglBuffers = null),
                  (s._dirtyMap = new l.default()),
                  (s.coords = [0, 0]),
                  (s.bounds = [0, 0, 0, 0]),
                  (s.tileTransform = {
                    transform: Float32Array[16],
                    screenTransform: Float32Array[16],
                    displayCoord: Float32Array[2],
                    screenCoord: Float32Array[2]
                  }),
                  (s._labelIndex = null),
                  (s.tileTransform.screenTransform = r.create()),
                  (s.tileTransform.transform = n.create()),
                  (s.tileTransform.displayCoord = a.create()),
                  (s.tileTransform.screenCoord = a.create()),
                  (s.key = v.pool.acquire(t)),
                  (s.coords[0] = i[0]),
                  (s.coords[1] = i[3]),
                  (s.bounds = i),
                  s
                );
              }
              return (
                i(t, e),
                Object.defineProperty(t.prototype, "iconGeometry", {
                  get: function() {
                    return this.getGeometry(h.WGLGeometryType.MARKER);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "textGeometry", {
                  get: function() {
                    return this.getGeometry(h.WGLGeometryType.TEXT);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "fillGeometry", {
                  get: function() {
                    return this.getGeometry(h.WGLGeometryType.FILL);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "lineGeometry", {
                  get: function() {
                    return this.getGeometry(h.WGLGeometryType.LINE);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "labelGeometry", {
                  get: function() {
                    return this.getGeometry(h.WGLGeometryType.LABEL);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "displayObjects", {
                  get: function() {
                    return this._data.tileDisplayData.displayObjects;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "canDisplay", {
                  get: function() {
                    return !!this.attached && !!this._data;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "isDirty", {
                  get: function() {
                    return this.status === y.TileStatus.MODIFIED;
                  },
                  set: function(e) {
                    e && this.status === y.TileStatus.READY
                      ? this.setStatus(y.TileStatus.MODIFIED)
                      : e ||
                        this.status !== y.TileStatus.MODIFIED ||
                        this.setStatus(y.TileStatus.READY),
                      this.requestRender();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "hasData", {
                  get: function() {
                    return (
                      this.status === y.TileStatus.MODIFIED ||
                      this.status === y.TileStatus.READY
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "labelIndex", {
                  get: function() {
                    return this._labelIndex;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.getGeometry = function(e) {
                  return this._wglBuffers && this._wglBuffers.has(e)
                    ? this._wglBuffers.get(e)
                    : null;
                }),
                (t.prototype.getDisplayList = function(e) {
                  switch (e) {
                    case h.WGLDrawPhase.HIGHLIGHT:
                      return this.hlDisplayList;
                    default:
                      return this._data && this._displayList;
                  }
                }),
                Object.defineProperty(t.prototype, "data", {
                  get: function() {
                    return this._data;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.setData = function(e, t) {
                  if (
                    (this.status !== y.TileStatus.INITIALIZED && this.clear(),
                    !e || !e.tileDisplayData)
                  )
                    return (
                      this.clear(), void this.setStatus(y.TileStatus.NO_DATA)
                    );
                  (this._dispRecStore = u.default.fromTileData(
                    e,
                    this._dirtyMap
                  )),
                    (this._data = e),
                    e.tileBufferData.geometries[4].indexBuffer.length
                      ? (this.setStatus(
                          t ? y.TileStatus.MODIFIED : y.TileStatus.READY
                        ),
                        this._rebuildLabelIndex())
                      : this.setStatus(y.TileStatus.READY),
                    this._dirtyMap.markAllDirty(),
                    (this._displayList = e.tileDisplayData.displayList.clone());
                }),
                (t.prototype.patchData = function(e, t) {
                  this._patchData(e) ||
                    (this._dirtyMap.markAllDirty(),
                    this._data.reshuffle(),
                    (this._dispRecStore = u.default.fromTileData(
                      this._data,
                      this._dirtyMap
                    ))),
                    e.addOrUpdate &&
                    e.addOrUpdate.tileBufferData.geometries[4].indexBuffer
                      .length
                      ? (this.setStatus(
                          t ? y.TileStatus.MODIFIED : y.TileStatus.READY
                        ),
                        this._rebuildLabelIndex())
                      : this.setStatus(y.TileStatus.READY);
                }),
                (t.prototype.commitChanges = function(e) {
                  this._data &&
                    this.status === y.TileStatus.READY &&
                    (this._wglBuffers ||
                      (this._wglBuffers = new d.default(e.context)),
                    (this._displayList = this._data.tileDisplayData.displayList.clone()),
                    this._wglBuffers.upload(
                      this._data.tileBufferData,
                      this._dirtyMap
                    ),
                    this._dirtyMap.markAllClean());
                }),
                (t.prototype.setVisibility = function(e, t) {
                  for (
                    var i = this._data.tileBufferData.geometries.map(function(
                        e
                      ) {
                        return {
                          vertexFrom: void 0,
                          vertexTo: void 0,
                          geometry: e
                        };
                      }),
                      r = 0,
                      n = e;
                    r < n.length;
                    r++
                  )
                    for (
                      var a = n[r],
                        s = 0,
                        o = this._data.tileDisplayData.displayObjectRegistry.get(
                          a.id
                        ).displayRecords;
                      s < o.length;
                      s++
                    ) {
                      var l = o[s];
                      if (null == t || t === l.geometryType) {
                        var u = (g = i[l.geometryType]).geometry.vertexBuffer[
                          p.C_VBO_VISIBILITY
                        ];
                        if (u) {
                          (g.vertexFrom =
                            null == g.vertexFrom
                              ? l.vertexFrom
                              : Math.min(g.vertexFrom, l.vertexFrom)),
                            (g.vertexTo =
                              null == g.vertexTo
                                ? l.vertexFrom + l.vertexCount
                                : Math.max(
                                    g.vertexTo,
                                    l.vertexFrom + l.vertexCount
                                  ));
                          for (
                            var h = (l.vertexFrom * u.stride) / 4,
                              f = (l.vertexCount * u.stride) / 4,
                              d = 0;
                            d < f;
                            ++d
                          )
                            u.data[h + d] = a.visibility ? 4294967295 : 0;
                        }
                      }
                    }
                  for (var c = !1, v = 0; v < i.length; ++v) {
                    var g;
                    if (null != (g = i[v]).vertexFrom && null != g.vertexTo) {
                      var m = g.vertexTo ? g.vertexTo - g.vertexFrom : 0;
                      this.setStatus(y.TileStatus.MODIFIED),
                        this._dirtyMap.markDirtyVertices(
                          v,
                          p.C_VBO_VISIBILITY,
                          g.vertexFrom,
                          m
                        ),
                        (c = !0);
                    }
                  }
                  c && this.requestRender();
                }),
                (t.prototype.setVisibilityRange = function(e, t, i, r) {
                  for (
                    var n = f.i8888to32(i, r, i, r),
                      a = void 0,
                      s = void 0,
                      o = this._data.tileBufferData.geometries[
                        h.WGLGeometryType.LABEL
                      ].vertexBuffer[p.C_VBO_VISIBILITY_RANGE],
                      l = this._data.tileDisplayData.displayObjectRegistry.get(
                        e
                      ),
                      u = l.metrics[t],
                      d = u.range.from,
                      c = d + u.range.count,
                      y = d;
                    y < c;
                    ++y
                  ) {
                    var v = l.displayRecords[y];
                    if (v.geometryType === h.WGLGeometryType.LABEL) {
                      (a =
                        null == a ? v.vertexFrom : Math.min(a, v.vertexFrom)),
                        (s =
                          null == s
                            ? v.vertexFrom + v.vertexCount
                            : Math.max(s, v.vertexFrom + v.vertexCount));
                      for (
                        var g = (v.vertexFrom * o.stride) / 4,
                          m = (v.vertexCount * o.stride) / 4,
                          _ = 0;
                        _ < m;
                        ++_
                      )
                        o.data[g + _] = n;
                    }
                  }
                  var x = s ? s - a : 0;
                  this._dirtyMap.markDirtyVertices(
                    h.WGLGeometryType.LABEL,
                    p.C_VBO_VISIBILITY_RANGE,
                    a,
                    x
                  );
                }),
                (t.prototype.setStatus = function(e) {
                  (this.status = e),
                    (e !== y.TileStatus.READY && e !== y.TileStatus.NO_DATA) ||
                      (this.attached = !0);
                }),
                (t.prototype.clear = function() {
                  (this._data = null),
                    this.setStatus(y.TileStatus.INVALID),
                    this._wglBuffers &&
                      (this._wglBuffers.dispose(), (this._wglBuffers = null)),
                    this.hlDisplayList && (this.hlDisplayList = null);
                }),
                (t.prototype.dispose = function() {
                  this.clear();
                }),
                (t.prototype.attach = function(e) {
                  return this.canDisplay;
                }),
                (t.prototype.detach = function(t) {
                  e.prototype.detach.call(this, t);
                }),
                (t.prototype.doRender = function(e) {
                  var t = this;
                  this.attached &&
                    (this.commitChanges(e),
                    e.context.setStencilFunction(514, this.stencilRef, 255),
                    e.painter.getBrushes(e.drawPhase).forEach(function(i) {
                      return i.draw(e, t);
                    }));
                }),
                (t.prototype.buildHLList = function(e) {
                  var t = this;
                  this.hlDisplayList = new c();
                  e.forEach(function(e) {
                    t._addToHLDisplayList(t.hlDisplayList, e);
                  });
                }),
                (t.prototype._addToHLDisplayList = function(e, t) {
                  if (this._data) {
                    var i = this._data.tileDisplayData.displayObjectRegistry.get(
                      t
                    );
                    if (i) {
                      for (
                        var r = [], n = 0, a = i.displayRecords;
                        n < a.length;
                        n++
                      ) {
                        var s = a[n].copy();
                        (s.meshData = null),
                          (s.symbolLevel = 0),
                          (s.zOrder = 0),
                          r.push(s);
                      }
                      r.sort(g), e.addToList(r);
                    }
                  }
                }),
                (t.prototype._rebuildLabelIndex = function() {
                  this._labelIndex = this._initLabelIndex();
                  for (var e = 0, t = this.displayObjects; e < t.length; e++) {
                    var i = t[e];
                    this._insertIntoLabelIndex(i);
                  }
                }),
                (t.prototype._insertIntoLabelIndex = function(e) {
                  var t = e.anchor;
                  -1 !== e.xBucket &&
                    t &&
                    this.labelIndex[e.yBucket][e.xBucket].push(e);
                }),
                (t.prototype._initLabelIndex = function() {
                  for (
                    var e = [], t = 0;
                    t < o.TILE_SIZE / o.COLLISION_BUCKET_SIZE;
                    t++
                  ) {
                    e.push([]);
                    for (
                      var i = 0;
                      i < o.TILE_SIZE / o.COLLISION_BUCKET_SIZE;
                      i++
                    )
                      e[t].push([]);
                  }
                  return e;
                }),
                (t.prototype._patchData = function(e) {
                  for (
                    var t = !0, i = 0, r = e.remove || [];
                    i < r.length;
                    i++
                  ) {
                    var n = r[i];
                    if (
                      (f = this._data.tileDisplayData.displayObjectRegistry.get(
                        n
                      ))
                    ) {
                      this._data.tileDisplayData.displayList.removeFromList(
                        f.displayRecords
                      );
                      for (var a = 0, s = f.displayRecords; a < s.length; a++) {
                        var o = s[a];
                        this._dispRecStore.delete(o);
                      }
                      this._data.tileDisplayData.displayObjectRegistry.delete(
                        n
                      );
                      var l = this._data.tileDisplayData.displayObjects.indexOf(
                        f
                      );
                      this._data.tileDisplayData.displayObjects.splice(l, 1);
                    }
                  }
                  for (
                    var u = 0,
                      h =
                        (e.addOrUpdate &&
                          e.addOrUpdate.tileDisplayData &&
                          e.addOrUpdate.tileDisplayData.displayObjects) ||
                        [];
                    u < h.length;
                    u++
                  ) {
                    var f,
                      p = h[u];
                    if (
                      (f = this._data.tileDisplayData.displayObjectRegistry.get(
                        p.id
                      ))
                    ) {
                      var d = f.displayRecords;
                      f.set(p), (f.displayRecords = d);
                      for (var c = f.displayRecords.length, y = 0; y < c; ++y) {
                        var v = f.displayRecords[y],
                          g = p.displayRecords[y];
                        (y >= p.displayRecords.length ||
                          v.geometryType !== g.geometryType ||
                          v.symbolLevel !== g.symbolLevel ||
                          v.zOrder !== g.zOrder ||
                          v.materialInfo.materialKey !==
                            g.materialInfo.materialKey) &&
                          (this._dispRecStore.delete(f.displayRecords[y]),
                          y < p.displayRecords.length &&
                            (f.displayRecords[y] = void 0));
                      }
                      (f.displayRecords.length = p.displayRecords.length),
                        (f.anchor = p.anchor),
                        (f.metrics = p.metrics);
                    } else
                      ((f = p.copy()).displayRecords = []),
                        this._data.tileDisplayData.displayObjectRegistry.set(
                          p.id,
                          f
                        ),
                        this._data.tileDisplayData.displayObjects.push(f);
                    var m = p.displayRecords.length;
                    for (y = 0; y < m; ++y) {
                      g = p.displayRecords[y];
                      (v = f.displayRecords[y])
                        ? ((v.meshData = g.meshData),
                          (v.materialInfo = g.materialInfo))
                        : (((v = g.copy()).vertexFrom = void 0),
                          (v.indexFrom = void 0),
                          (f.displayRecords[y] = v));
                      var _ = g.geometryType,
                        x = e.addOrUpdate.tileBufferData.geometries[_],
                        b = x.vertexBuffer,
                        w = x.indexBuffer;
                      t = this._dispRecStore.setMeshData(v, g, b, w) && t;
                    }
                  }
                  return t;
                }),
                t
              );
            })(s);
          }.apply(null, r)) || (e.exports = n);
    },
    2319: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(15), i(2320), i(2010)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = ["FILL", "LINE", "MARKER", "TEXT", "LABEL"],
              s = (function() {
                function e(e, t, i, n) {
                  for (var a in ((this._strides = e),
                  (this._displayList = t),
                  (this._vertexAlignments = {}),
                  (this._freeListsAndStorage = {}),
                  (this._dirtyMap = null),
                  (this._dirtyMap = i),
                  e)) {
                    var s = !1,
                      o = !1;
                    for (var l in ((this._freeListsAndStorage[a] = {
                      vtxFreeList: n ? new r.FreeList(n) : null,
                      idxFreeList: n ? new r.FreeList(n) : null,
                      vertexBuffers: {},
                      indexBuffer: n ? new Uint32Array(n) : null
                    }),
                    e[a]))
                      (this._freeListsAndStorage[a].vertexBuffers[l] = {
                        data: n
                          ? new Uint32Array(Math.floor((n * e[a][l]) / 4))
                          : null,
                        stride: e[a][l]
                      }),
                        e[a][l] % 4 == 2
                          ? (s = !0)
                          : e[a][l] % 4 != 0 && (o = !0);
                    this._vertexAlignments[a] = o ? 4 : s ? 2 : 1;
                  }
                }
                return (
                  (e.fromTileData = function(t, i) {
                    var n = (function(e) {
                        var t = e.getStrides(),
                          i = {};
                        for (var r in t) i[a[r]] = t[r];
                        return i;
                      })(t),
                      s = [0, 0, 0, 0, 0],
                      o = [0, 0, 0, 0, 0],
                      l = [];
                    t.tileDisplayData.displayObjectRegistry.forEach(function(
                      e
                    ) {
                      l.push(e);
                    });
                    for (var u = 0, h = l; u < h.length; u++)
                      for (
                        var f = 0, p = h[u].displayRecords;
                        f < p.length;
                        f++
                      ) {
                        var d = p[f];
                        (s[d.geometryType] = Math.max(
                          s[d.geometryType],
                          d.vertexFrom + d.vertexCount
                        )),
                          (o[d.geometryType] = Math.max(
                            o[d.geometryType],
                            d.indexFrom + d.indexCount
                          ));
                      }
                    for (
                      var c = new e(n, t.tileDisplayData.displayList, i, null),
                        y = 0;
                      y < t.tileBufferData.geometries.length;
                      ++y
                    ) {
                      var v = s[y],
                        g = o[y],
                        m = t.tileBufferData.geometries[y],
                        _ = a[y],
                        x = c._storageFor(_),
                        b = t.tileBufferData.geometries[y].indexBuffer;
                      (x.indexBuffer = b),
                        (x.idxFreeList = new r.FreeList(b.length)),
                        x.idxFreeList.allocate(g);
                      var w = void 0;
                      for (var D in m.vertexBuffer) {
                        var S = t.tileBufferData.geometries[y].vertexBuffer[D];
                        (x.vertexBuffers[D].data = S.data),
                          (x.vertexBuffers[D].stride = S.stride),
                          (w = (4 * S.data.length) / S.stride);
                      }
                      (x.vtxFreeList = new r.FreeList(w)),
                        x.vtxFreeList.allocate(v);
                    }
                    return c;
                  }),
                  (e.prototype.delete = function(e) {
                    var t = a[e.geometryType];
                    this._freeVertices(t, e.vertexFrom, e.vertexCount),
                      this._freeIndices(t, e.indexFrom, e.indexCount),
                      this._displayList.removeFromList(e),
                      (e.vertexFrom = void 0),
                      (e.indexFrom = void 0);
                  }),
                  (e.prototype.setMeshData = function(e, t, i, r) {
                    var s = a[e.geometryType];
                    e.meshData = null;
                    var o = void 0,
                      l = void 0;
                    void 0 === e.vertexFrom
                      ? ((l = this._align(s, t.vertexCount)),
                        (o = this._allocateVertices(s, l)))
                      : t.vertexCount > e.vertexCount
                        ? (this._freeVertices(s, e.vertexFrom, e.vertexCount),
                          (l = this._align(s, t.vertexCount)),
                          (o = this._allocateVertices(s, l)))
                        : t.vertexCount === e.vertexCount
                          ? ((o = e.vertexFrom), (l = e.vertexCount))
                          : (this._freeVertices(
                              s,
                              e.vertexFrom + t.vertexCount,
                              e.vertexCount - t.vertexCount
                            ),
                            (o = e.vertexFrom),
                            (l = t.vertexCount));
                    var u = !0,
                      h = void 0,
                      f = void 0;
                    if (
                      (void 0 === e.indexFrom
                        ? ((f = t.indexCount),
                          (h = this._allocateIndices(s, f)))
                        : t.indexCount > e.indexCount
                          ? (this._displayList.removeFromList(e),
                            this._freeIndices(s, e.indexFrom, e.indexCount),
                            (f = t.indexCount),
                            (h = this._allocateIndices(s, f)))
                          : t.indexCount === e.indexCount
                            ? ((u = !1), (h = e.indexFrom), (f = e.indexCount))
                            : (this._displayList.removeFromList(e),
                              this._freeIndices(
                                s,
                                e.indexFrom + t.indexCount,
                                e.indexCount - t.indexCount
                              ),
                              (h = e.indexFrom),
                              (f = t.indexCount)),
                      -1 !== o && -1 !== h)
                    ) {
                      var p = this._storageFor(s);
                      if (
                        (n.copyMeshData(
                          o,
                          h,
                          p.vertexBuffers,
                          p.indexBuffer,
                          t,
                          i,
                          r
                        ),
                        (e.vertexFrom = o),
                        (e.indexFrom = h),
                        (e.vertexCount = t.vertexCount),
                        (e.indexCount = t.indexCount),
                        this._dirtyMap)
                      )
                        for (var d in (this._dirtyMap.markDirtyIndices(
                          e.geometryType,
                          e.indexFrom,
                          e.indexCount
                        ),
                        i))
                          this._dirtyMap.markDirtyVertices(
                            e.geometryType,
                            d,
                            e.vertexFrom,
                            e.vertexCount
                          );
                      return u && this._displayList.addToList(e), !0;
                    }
                    return (
                      -1 !== o && this._freeVertices(s, o, l),
                      -1 !== h && this._freeIndices(s, h, f),
                      e.setMeshDataFromBuffers(t, i, r),
                      (e.vertexFrom = void 0),
                      (e.vertexCount = 0),
                      (e.indexFrom = void 0),
                      (e.indexCount = 0),
                      !1
                    );
                  }),
                  (e.prototype._allocateVertices = function(e, t) {
                    var i = this._storageFor(e),
                      r = i.vtxFreeList.allocate(t);
                    return -1 === r
                      ? -1
                      : i.vtxFreeList.fragmentation > 0.5
                        ? -1
                        : r;
                  }),
                  (e.prototype._freeVertices = function(e, t, r) {
                    var n = this._storageFor(e);
                    if (
                      (n.vtxFreeList.free(t, r), i("esri-feature-tiles-debug"))
                    )
                      for (var a in n.vertexBuffers)
                        for (
                          var s = n.vertexBuffers[a].data,
                            o = this._stridesFor(e, a),
                            l = (t * o) / 4,
                            u = (r * o) / 4,
                            h = l;
                          h < l + u;
                          ++h
                        )
                          s[h] = 0;
                  }),
                  (e.prototype._freeIndices = function(e, t, r) {
                    var n = this._storageFor(e);
                    if (
                      (n.idxFreeList.free(t, r), i("esri-feature-tiles-debug"))
                    )
                      for (var a = n.indexBuffer, s = t; s < t + r; ++s)
                        a[s] = 0;
                  }),
                  (e.prototype._align = function(e, t) {
                    var i = t % this._vertexAlignments[e];
                    return 0 === i ? t : t + (this._vertexAlignments[e] - i);
                  }),
                  (e.prototype._allocateIndices = function(e, t) {
                    var i = this._storageFor(e),
                      r = i.idxFreeList.allocate(t);
                    return -1 === r
                      ? -1
                      : i.idxFreeList.fragmentation > 0.5
                        ? -1
                        : r;
                  }),
                  (e.prototype._storageFor = function(e) {
                    return this._freeListsAndStorage[e];
                  }),
                  (e.prototype._stridesFor = function(e, t) {
                    return this._strides[e][t];
                  }),
                  e
                );
              })();
            t.default = s;
          }.apply(null, r)) || (e.exports = n);
    },
    2320: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
                function e(e) {
                  (this._largestRange = null),
                    (this._parent = e),
                    this._updateLargestRange();
                }
                return (
                  Object.defineProperty(e.prototype, "largestRange", {
                    get: function() {
                      return this._largestRange;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.rangeCreated = function(e) {
                    (!this._largestRange ||
                      e.count > this._largestRange.count) &&
                      (this._largestRange = e);
                  }),
                  (e.prototype.rangeResized = function(e, t, i) {
                    e === this._largestRange
                      ? e.count < i && this._updateLargestRange()
                      : (!this._largestRange ||
                          e.count > this._largestRange.count) &&
                        (this._largestRange = e);
                  }),
                  (e.prototype.findBestRange = function(e) {
                    for (var t = this._parent._freeHead, i = null; null !== t; )
                      t.count >= e &&
                        (!i || t.count - e < i.count - e) &&
                        (i = t),
                        (t = t.next);
                    return i;
                  }),
                  (e.prototype.findAdjacentRanges = function(e, t) {
                    for (
                      var i = !0, r = !1, n = null, a = this._parent._freeHead;
                      i && !r;

                    ) {
                      var s = null !== n ? n.from + n.count : 0,
                        o = null !== a ? a.from : this._parent._size;
                      e >= s && e + t <= o
                        ? ((i = !1), (r = !0))
                        : null !== a
                          ? ((n = a), (a = a.next))
                          : (i = !1);
                    }
                    return [n, a];
                  }),
                  (e.prototype._updateLargestRange = function() {
                    for (var e = null, t = this._parent._freeHead; null !== t; )
                      (!e || t.count > e.count) && (e = t), (t = t.next);
                    this._largestRange = e;
                  }),
                  e
                );
              })(),
              r = (function() {
                function e(e, t) {
                  (this._allocated = 0),
                    (this._size = e),
                    (this._freeHead =
                      e > 0
                        ? { from: 0, count: e, prev: null, next: null }
                        : null),
                    (this._bookKeeper = t || new i(this)),
                    this._freeHead &&
                      this._bookKeeper.rangeCreated(this._freeHead);
                }
                return (
                  (e.prototype.allocate = function(t) {
                    var i = this._bookKeeper.findBestRange(t);
                    if (null === i) return -1;
                    var r = i.from,
                      n = i.count;
                    if (
                      ((i.from += t),
                      (i.count -= t),
                      this._bookKeeper.rangeResized(i, r, n),
                      (this._allocated += t),
                      0 === i.count)
                    ) {
                      var a = null !== i.prev ? this._freeHead : i.next;
                      e._removeRange(i), (this._freeHead = a);
                    }
                    return r;
                  }),
                  (e.prototype.free = function(t, i) {
                    var r = this._bookKeeper.findAdjacentRanges(t, i),
                      n = r[0],
                      a = r[1],
                      s = { from: t, count: i, prev: n, next: a };
                    if (
                      (null !== n && (n.next = s),
                      null !== a && (a.prev = s),
                      this._bookKeeper.rangeCreated(s),
                      (this._allocated -= i),
                      null !== a && s.from + s.count === a.from)
                    ) {
                      var o = s.from,
                        l = s.count;
                      e._fuse(s, a),
                        e._removeRange(a),
                        this._bookKeeper.rangeResized(s, o, l),
                        this._bookKeeper.rangeResized(a, void 0, 0);
                    }
                    if (null !== n && n.from + n.count === s.from) {
                      (o = n.from), (l = n.count);
                      e._fuse(n, s),
                        e._removeRange(s),
                        this._bookKeeper.rangeResized(n, o, l),
                        this._bookKeeper.rangeResized(s, void 0, 0);
                    }
                    this._freeHead = null !== s.prev ? this._freeHead : s;
                  }),
                  Object.defineProperty(e.prototype, "fragmentation", {
                    get: function() {
                      var e = this._size - this._allocated;
                      return 0 === e
                        ? 0
                        : 1 - this._bookKeeper.largestRange.count / e;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e._removeRange = function(e) {
                    null !== e.prev
                      ? null !== e.next
                        ? ((e.prev.next = e.next), (e.next.prev = e.prev))
                        : (e.prev.next = null)
                      : null !== e.next && (e.next.prev = null);
                  }),
                  (e._fuse = function(e, t) {
                    (e.count += t.count),
                      (e.next = t.next),
                      (t.from += t.count),
                      (t.count = 0),
                      null !== t.next && (t.next.prev = e);
                  }),
                  e
                );
              })();
            t.FreeList = r;
          }.apply(null, r)) || (e.exports = n);
    },
    2321: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2010)]),
        void 0 ===
          (n = function(e, t, i) {
            function r(e, t, i) {
              if (!e.allDirty)
                if (null != e.from && null != e.count) {
                  var r = Math.min(e.from, t),
                    n = Math.max(e.from + e.count, t + i) - r;
                  (e.from = r), (e.count = n);
                } else (e.from = t), (e.count = i);
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
              function e() {
                this._dirties = i.createGeometryData(
                  function(e) {
                    return {
                      indices: { from: null, count: null, allDirty: !1 }
                    };
                  },
                  function(e, t) {
                    return {
                      vertices: { from: null, count: null, allDirty: !1 }
                    };
                  }
                );
              }
              return (
                (e.prototype.markAllClean = function() {
                  for (var e = 0, t = this._dirties; e < t.length; e++) {
                    var i = t[e];
                    for (var r in ((i.data.indices.from = null),
                    (i.data.indices.count = null),
                    (i.data.indices.allDirty = !1),
                    i.buffers))
                      (i.buffers[r].data.vertices.from = null),
                        (i.buffers[r].data.vertices.count = null),
                        (i.buffers[r].data.vertices.allDirty = !1);
                  }
                }),
                (e.prototype.markAllDirty = function() {
                  for (var e = 0, t = this._dirties; e < t.length; e++) {
                    var i = t[e];
                    for (var r in ((i.data.indices.allDirty = !0), i.buffers))
                      i.buffers[r].data.vertices.allDirty = !0;
                  }
                }),
                (e.prototype.forEach = function(e) {
                  for (
                    var t = new Map(), i = 0;
                    i < this._dirties.length;
                    ++i
                  ) {
                    var r = this._dirties[i],
                      n = new Map();
                    for (var a in r.buffers) {
                      var s = r.buffers[a].data.vertices;
                      (s.allDirty || (null != s.from && null != s.count)) &&
                        n.set(a, s);
                    }
                    var o,
                      l = r.data.indices;
                    ((o =
                      l.allDirty || (null != l.from && null != l.count)
                        ? { indices: l, vertices: n }
                        : { indices: void 0, vertices: n }).indices ||
                      o.vertices.size > 0) &&
                      t.set(i, o);
                  }
                  t.forEach(function(t, i) {
                    e(
                      {
                        indices: t.indices || null,
                        vertices: t.vertices.size > 0 ? t.vertices : null
                      },
                      i
                    );
                  });
                }),
                (e.prototype.markDirtyIndices = function(e, t, i) {
                  r(this._dirties[e].data.indices, t, i);
                }),
                (e.prototype.markDirtyVertices = function(e, t, i, n) {
                  r(this._dirties[e].buffers[t].data.vertices, i, n);
                }),
                e
              );
            })();
            t.default = n;
          }.apply(null, r)) || (e.exports = n);
    },
    2322: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2010), i(77)]),
        void 0 ===
          (n = function(e, t, i, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
              function e(e) {
                this.geometryMap = i.createGeometryData(
                  function(t) {
                    return { indexBuffer: r.createIndex(e, 35044), vao: null };
                  },
                  function(t, n) {
                    return { vertexBuffer: r.createVertex(e, i.C_VBO_INFO[n]) };
                  }
                );
              }
              return (
                (e.prototype.dispose = function() {
                  for (var e in this.geometryMap) {
                    var t = this.geometryMap[e];
                    for (var i in (t.data.vao && t.data.vao.dispose(!1),
                    t.data.indexBuffer && t.data.indexBuffer.dispose(),
                    t.buffers))
                      t.buffers[i] && t.buffers[i].data.vertexBuffer.dispose();
                  }
                }),
                (e.prototype.get = function(e) {
                  var t = this.geometryMap[e],
                    i = {};
                  for (var r in t.buffers)
                    i[r] = t.buffers[r].data.vertexBuffer;
                  return {
                    indexBuffer: t.data.indexBuffer,
                    get vao() {
                      return t.data.vao;
                    },
                    set vao(e) {
                      t.data.vao = e;
                    },
                    vertexBufferMap: i
                  };
                }),
                (e.prototype.has = function(e) {
                  return null != this.geometryMap[e];
                }),
                (e.prototype.upload = function(e, t) {
                  var i = this;
                  t.forEach(function(t, r) {
                    t.indices &&
                      (t.indices.allDirty
                        ? i._uploadIndices(e, r)
                        : null != t.indices.from &&
                          null != t.indices.count &&
                          i._uploadIndices(
                            e,
                            r,
                            t.indices.from,
                            t.indices.count
                          )),
                      t.vertices &&
                        t.vertices.forEach(function(t, n) {
                          t.allDirty
                            ? i._uploadVertices(e, r, n)
                            : null != t.from &&
                              null != t.count &&
                              i._uploadVertices(e, r, n, t.from, t.count);
                        });
                  });
                }),
                (e.prototype._uploadVertices = function(e, t, i, r, n) {
                  var a = this.geometryMap[t];
                  if (a) {
                    var s = e.geometries[t].vertexBuffer[i];
                    if (s) {
                      var o = s.stride,
                        l = s.data.buffer;
                      a.buffers[i] &&
                        l.byteLength > 0 &&
                        (null != r && null != n
                          ? a.buffers[i].data.vertexBuffer.setSubData(
                              l,
                              r * o,
                              r * o,
                              (r + n) * o
                            )
                          : a.buffers[i].data.vertexBuffer.setData(l));
                    }
                  }
                }),
                (e.prototype._uploadIndices = function(e, t, i, r) {
                  var n = this.geometryMap[t];
                  if (n) {
                    var a = e.geometries[t].indexBuffer.buffer;
                    n.data.indexBuffer &&
                      a.byteLength > 0 &&
                      (null != i && null != r
                        ? n.data.indexBuffer.setSubData(
                            a,
                            4 * i,
                            4 * i,
                            4 * (i + r)
                          )
                        : n.data.indexBuffer.setData(a));
                  }
                }),
                e
              );
            })();
            t.default = n;
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/engine/webgl/WGLDisplayList": 2118,
      "esri/views/2d/layers/features/tileRenderers/BaseTileRenderer": 2119,
      "esri/views/2d/engine/webgl/SDFHelper": 2153,
      "esri/views/2d/engine/webgl/RectangleBinPack": 2154,
      "esri/views/2d/layers/features/tileRenderers/SymbolTileRenderer": 2303,
      "esri/views/2d/engine/webgl/WGLFeatureView": 2304,
      "esri/views/2d/engine/webgl/TileData": 2305,
      "esri/views/2d/engine/webgl/MemoryRequirements": 2306,
      "esri/views/2d/engine/webgl/TileBufferData": 2307,
      "esri/views/2d/engine/webgl/TileDisplayData": 2308,
      "esri/views/2d/engine/webgl/mesh/VertexBuffer": 2309,
      "esri/views/2d/engine/webgl/util/Reader": 2310,
      "esri/views/2d/engine/webgl/TextureManager": 2311,
      "esri/views/2d/engine/webgl/CIMSymbolHelper": 2312,
      "esri/views/2d/engine/webgl/CIMSymbolDrawHelper": 2313,
      "esri/views/2d/engine/webgl/GlyphMosaic": 2314,
      "esri/views/2d/engine/webgl/GlyphSource": 2315,
      "esri/views/2d/engine/webgl/SpriteMosaic": 2316,
      "esri/views/2d/engine/webgl/WGLRendererInfo": 2317,
      "esri/views/2d/engine/webgl/WGLTile": 2318,
      "esri/views/2d/engine/webgl/DisplayRecordStore": 2319,
      "esri/views/2d/engine/webgl/FreeList": 2320,
      "esri/views/2d/engine/webgl/DirtyMap": 2321,
      "esri/views/2d/engine/webgl/WGLBuffers": 2322
    });
  })();
