(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    1997: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(0),
        r(108),
        r(9),
        r(26),
        r(1),
        r(2042),
        r(813),
        r(2135),
        r(2137)
      ]),
        void 0 ===
          (n = function(e, t, r, i, n, a, o, s, p, u, l, f) {
            return (function(e) {
              function t(t) {
                return e.call(this) || this;
              }
              return (
                r(t, e),
                (t.prototype.initialize = function() {
                  var e,
                    t,
                    r,
                    i = this,
                    s = this.layer.compatibleTileInfo256,
                    p = this._getTileInfoSupportError(s, this.layer.fullExtent);
                  p
                    ? this.addResolvingPromise(a.reject(p))
                    : (t = o
                        .whenTrueOnce(
                          this.view,
                          "basemapTerrain.tilingSchemeLocked"
                        )
                        .then(function() {
                          var e,
                            t = i.view.basemapTerrain.tilingScheme,
                            r = t.pixelSize[0];
                          (i.schemeHelper = new u(
                            r,
                            i.view.spatialReference.isWGS84
                          )),
                            (e =
                              256 === r
                                ? i.layer.compatibleTileInfo256
                                : i.view.spatialReference.isWGS84
                                  ? i.layer.compatibleTileInfo512
                                  : i.layer.tileInfo);
                          var n = i._getTileInfoCompatibilityError(e, t);
                          if (n) throw n;
                          (i.tileInfo = e), i._updateMinMaxDataLevel();
                        })),
                    (e = this._initializeTileHandler()),
                    (this.tileHandler = e[0]),
                    (this.renderer = e[1]),
                    (r = e[2]),
                    (this._tileHandlerPromise = r),
                    this.watch("layer.currentStyleInfo", function() {
                      var e, t, n, a;
                      i._tileHandlerPromise.isFulfilled() ||
                        i._tileHandlerPromise.cancel(),
                        (e = i._initializeTileHandler()),
                        (t = e[0]),
                        (n = e[1]),
                        (a = e[2]),
                        (i._tileHandlerPromise = r),
                        a.then(function() {
                          var e = i.tileHandler;
                          (i.renderer = n),
                            (i.tileHandler = t),
                            i.emit("data-changed"),
                            e.destroy();
                        });
                    });
                  var l = n([t, r]);
                  this.addResolvingPromise(l);
                }),
                (t.prototype.destroy = function() {
                  (this.renderer = null),
                    this.tileHandler.destroy(),
                    (this.tileHandler = null);
                }),
                (t.prototype._initializeTileHandler = function() {
                  var e = new l(this.layer, function() {}, 1),
                    t = new f(),
                    r = e.start();
                  return (
                    r.then(function() {
                      t.initialize(e.spriteMosaic, e.glyphMosaic, !1);
                    }),
                    [e, t, r]
                  );
                }),
                i(
                  [s.property({ aliasOf: "layer.fullExtent" })],
                  t.prototype,
                  "fullExtent",
                  void 0
                ),
                i([s.property()], t.prototype, "layer", void 0),
                i(
                  [s.property()],
                  t.prototype,
                  "updatingPercentageValue",
                  void 0
                ),
                i([s.subclass("esri.views.3d.layers.VectorTileLayerView3D")], t)
              );
            })(s.declared(p));
          }.apply(null, i)) || (e.exports = n);
    },
    2011: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2), r(0), r(9), r(26), r(1), r(416), r(2006)]),
        void 0 ===
          (n = function(e, t, r, i, n, a, o, s, p) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.supportsHeightUnitConversion = !1), t;
              }
              return (
                r(t, e),
                (t.prototype.postscript = function(e) {
                  this.inherited(arguments),
                    s.mayHaveHeightModelInfo(this.layer) &&
                      this.addResolvingPromise(this._validateHeightModelInfo());
                }),
                (t.prototype._validateHeightModelInfo = function() {
                  var e = this;
                  return n.create(function(t, r) {
                    a.whenFalseOnce(
                      e.view.defaultsFromMap,
                      "isHeightModelInfoSearching",
                      function() {
                        var i = s.rejectLayerError(
                          e.layer,
                          e.view.heightModelInfo,
                          e.supportsHeightUnitConversion
                        );
                        i ? r(i) : t();
                      }
                    );
                  });
                }),
                i([o.property()], t.prototype, "view", void 0),
                i([o.subclass("esri.views.3d.layers.LayerView3D")], t)
              );
            })(o.declared(p));
          }.apply(null, i)) || (e.exports = n);
    },
    2025: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.updatingPercentageValue = { value: 100, readOnly: !0 }),
              (t.updatingPercentage = {
                dependsOn: ["updating", "updatingPercentageValue"],
                readOnly: !0,
                value: 0,
                get: function() {
                  return this.updating ? this.updatingPercentageValue : 0;
                }
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2034: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(802)]),
        void 0 ===
          (n = function(e, t, r) {
            return (function() {
              function e(e) {
                if (e) for (var t in e) this[t] = e[t];
              }
              return (
                (e.parse = function(e, t) {
                  for (
                    var i = r.parse(e).getElementsByTagName("snippet"),
                      n = /\$[a-zA-Z][a-zA-Z0-9]*(?:\([^\(\)]*\))?[ \t]*/,
                      a = /[\$\s]+/g,
                      o = /\(([^\(\)]*)\)/,
                      s = 0;
                    s < i.length;
                    s++
                  ) {
                    for (
                      var p = i[s].getAttribute("name"), u = i[s].textContent;
                      ;

                    ) {
                      var l = u.match(n);
                      if (null == l) break;
                      var f = l[0].replace(a, ""),
                        c = f.match(o),
                        d = void 0;
                      c &&
                        (d = c[1].split(",").map(function(e) {
                          return e.trim();
                        }));
                      var h = f.replace(o, ""),
                        m = t._instantiate(h, d);
                      u = u.replace(l[0], m);
                    }
                    t[p] = u;
                  }
                }),
                (e.prototype._instantiate = function(e, t) {
                  var r = this[e];
                  for (t || (t = []); ; ) {
                    var i = r.match(/\$(\d+)/);
                    if (null == i) break;
                    var n = t[parseInt(i[1], 10)];
                    r = r.replace(i[0], n);
                  }
                  return r;
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = n);
    },
    2035: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(72), r(2104), r(40)]),
        void 0 ===
          (n = function(e, t, r, i, n) {
            function a(e) {
              return e.reduce(function(e, t, r) {
                return t && (e |= 1 << r), e;
              }, 0);
            }
            return (function() {
              function e(e, t, r, i, n, a) {
                if ("string" == typeof e) this._initParams(e, t, r, i, n, a);
                else {
                  var o = e;
                  this._initObject({
                    programNamePrefix: o.programNamePrefix,
                    shaderSnippetPrefixes: o.shaderSnippetPrefixes,
                    baseDefines: o.baseDefines,
                    snippets: o.snippets,
                    rctx: o.rctx,
                    vertexAttribLocs: o.vertexAttribLocs
                  });
                }
              }
              return (
                (e.prototype.dispose = function() {
                  this._programCache &&
                    (this._programCache.forEach(function(e) {
                      return e.dispose();
                    }),
                    this._programCache.clear());
                }),
                (e.prototype._initObject = function(e) {
                  this._initParams(
                    e.programNamePrefix,
                    e.shaderSnippetPrefixes,
                    e.baseDefines,
                    e.snippets,
                    e.rctx,
                    e.vertexAttribLocs
                  );
                }),
                (e.prototype._initParams = function(e, t, r, n, a, o) {
                  (this._defaultSnippets = n),
                    (this._defaultRctx = a),
                    (this._defaultVertexAttribLocs = o),
                    (this._programCache = new Map()),
                    (this._variationInfo = new Map()),
                    (this._shaderSourceVariator = new i(e, t, r));
                }),
                (e.prototype.addDefine = function(e, t, r, i) {
                  this._shaderSourceVariator.addDefine(e, t, r, i);
                }),
                (e.prototype.addBinaryShaderSnippetSuffix = function(e, t, r) {
                  this._shaderSourceVariator.addBinaryShaderSnippetSuffix(
                    e,
                    t,
                    r
                  );
                }),
                (e.prototype.addNaryShaderSnippetSuffix = function(e, t) {
                  this._shaderSourceVariator.addNaryShaderSnippetSuffix(e, t);
                }),
                (e.prototype.getProgram = function(e, t, i, o) {
                  if (
                    ((t = t || this._defaultSnippets),
                    (i = i || this._defaultRctx),
                    (o = o || this._defaultVertexAttribLocs),
                    !t)
                  )
                    throw new Error(
                      "No ShaderSnippets provided to getProgram nor to ShaderVariations constructor."
                    );
                  if (!i)
                    throw new Error(
                      "No RenderingContext provided to getProgram nor to ShaderVariations constructor."
                    );
                  if (!o)
                    throw new Error(
                      "No VertexAttributeLocations provided to getProgram nor to ShaderVariations constructor."
                    );
                  var s = a(e);
                  if (this._programCache.has(s))
                    return this._programCache.get(s);
                  var p,
                    u,
                    l,
                    f = this._shaderSourceVariator.getShaderVariation(e);
                  (u = t[(p = f.shaderSnippetNames[0])]),
                    n.assert(
                      null != u,
                      "shader snippet '" + p + "' does not exist"
                    ),
                    (l = t[(p = f.shaderSnippetNames[1])]),
                    n.assert(
                      null != l,
                      "shader snippet '" + p + "' does not exist"
                    );
                  var c = new r(i, u, l, o, f.defines);
                  return this._programCache.set(s, c), c;
                }),
                (e.prototype.getProgramByKey = function(e) {
                  if (this._programCache.has(e))
                    return this._programCache.get(e);
                  if (!this._variationInfo[e]) return null;
                  var t,
                    i,
                    a,
                    o = this._variationInfo[e],
                    s = this._defaultSnippets,
                    p = this._defaultRctx,
                    u = this._defaultVertexAttribLocs;
                  (i = s[(t = o.shaderSnippetNames[0])]),
                    n.assert(
                      null != i,
                      "shader snippet '" + t + "' does not exist"
                    ),
                    (a = s[(t = o.shaderSnippetNames[1])]),
                    n.assert(
                      null != a,
                      "shader snippet '" + t + "' does not exist"
                    );
                  var l = new r(p, i, a, u, o.defines);
                  return this._programCache.set(e, l), l;
                }),
                (e.prototype.getProgramInfo = function(e) {
                  var t = this._shaderSourceVariator.getShaderVariation(e),
                    r = a(e);
                  return (
                    this._variationInfo[r] || (this._variationInfo[r] = t),
                    { name: t.programName, key: r }
                  );
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = n);
    },
    2039: function(e, t, r) {
      var i, n;
      (i = [r(263)]),
        void 0 ===
          (n = function(e) {
            var t = {
              create: function() {
                var t = new e.ARRAY_TYPE(4);
                return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
              },
              clone: function(t) {
                var r = new e.ARRAY_TYPE(4);
                return (
                  (r[0] = t[0]), (r[1] = t[1]), (r[2] = t[2]), (r[3] = t[3]), r
                );
              },
              fromValues: function(t, r, i, n) {
                var a = new e.ARRAY_TYPE(4);
                return (a[0] = t), (a[1] = r), (a[2] = i), (a[3] = n), a;
              },
              copy: function(e, t) {
                return (
                  (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e
                );
              },
              set: function(e, t, r, i, n) {
                return (e[0] = t), (e[1] = r), (e[2] = i), (e[3] = n), e;
              },
              add: function(e, t, r) {
                return (
                  (e[0] = t[0] + r[0]),
                  (e[1] = t[1] + r[1]),
                  (e[2] = t[2] + r[2]),
                  (e[3] = t[3] + r[3]),
                  e
                );
              },
              subtract: function(e, t, r) {
                return (
                  (e[0] = t[0] - r[0]),
                  (e[1] = t[1] - r[1]),
                  (e[2] = t[2] - r[2]),
                  (e[3] = t[3] - r[3]),
                  e
                );
              }
            };
            return (
              (t.sub = t.subtract),
              (t.multiply = function(e, t, r) {
                return (
                  (e[0] = t[0] * r[0]),
                  (e[1] = t[1] * r[1]),
                  (e[2] = t[2] * r[2]),
                  (e[3] = t[3] * r[3]),
                  e
                );
              }),
              (t.mul = t.multiply),
              (t.divide = function(e, t, r) {
                return (
                  (e[0] = t[0] / r[0]),
                  (e[1] = t[1] / r[1]),
                  (e[2] = t[2] / r[2]),
                  (e[3] = t[3] / r[3]),
                  e
                );
              }),
              (t.div = t.divide),
              (t.ceil = function(e, t) {
                return (
                  (e[0] = Math.ceil(t[0])),
                  (e[1] = Math.ceil(t[1])),
                  (e[2] = Math.ceil(t[2])),
                  (e[3] = Math.ceil(t[3])),
                  e
                );
              }),
              (t.floor = function(e, t) {
                return (
                  (e[0] = Math.floor(t[0])),
                  (e[1] = Math.floor(t[1])),
                  (e[2] = Math.floor(t[2])),
                  (e[3] = Math.floor(t[3])),
                  e
                );
              }),
              (t.min = function(e, t, r) {
                return (
                  (e[0] = Math.min(t[0], r[0])),
                  (e[1] = Math.min(t[1], r[1])),
                  (e[2] = Math.min(t[2], r[2])),
                  (e[3] = Math.min(t[3], r[3])),
                  e
                );
              }),
              (t.max = function(e, t, r) {
                return (
                  (e[0] = Math.max(t[0], r[0])),
                  (e[1] = Math.max(t[1], r[1])),
                  (e[2] = Math.max(t[2], r[2])),
                  (e[3] = Math.max(t[3], r[3])),
                  e
                );
              }),
              (t.round = function(e, t) {
                return (
                  (e[0] = Math.round(t[0])),
                  (e[1] = Math.round(t[1])),
                  (e[2] = Math.round(t[2])),
                  (e[3] = Math.round(t[3])),
                  e
                );
              }),
              (t.scale = function(e, t, r) {
                return (
                  (e[0] = t[0] * r),
                  (e[1] = t[1] * r),
                  (e[2] = t[2] * r),
                  (e[3] = t[3] * r),
                  e
                );
              }),
              (t.scaleAndAdd = function(e, t, r, i) {
                return (
                  (e[0] = t[0] + r[0] * i),
                  (e[1] = t[1] + r[1] * i),
                  (e[2] = t[2] + r[2] * i),
                  (e[3] = t[3] + r[3] * i),
                  e
                );
              }),
              (t.distance = function(e, t) {
                var r = t[0] - e[0],
                  i = t[1] - e[1],
                  n = t[2] - e[2],
                  a = t[3] - e[3];
                return Math.sqrt(r * r + i * i + n * n + a * a);
              }),
              (t.dist = t.distance),
              (t.squaredDistance = function(e, t) {
                var r = t[0] - e[0],
                  i = t[1] - e[1],
                  n = t[2] - e[2],
                  a = t[3] - e[3];
                return r * r + i * i + n * n + a * a;
              }),
              (t.sqrDist = t.squaredDistance),
              (t.length = function(e) {
                var t = e[0],
                  r = e[1],
                  i = e[2],
                  n = e[3];
                return Math.sqrt(t * t + r * r + i * i + n * n);
              }),
              (t.len = t.length),
              (t.squaredLength = function(e) {
                var t = e[0],
                  r = e[1],
                  i = e[2],
                  n = e[3];
                return t * t + r * r + i * i + n * n;
              }),
              (t.sqrLen = t.squaredLength),
              (t.negate = function(e, t) {
                return (
                  (e[0] = -t[0]),
                  (e[1] = -t[1]),
                  (e[2] = -t[2]),
                  (e[3] = -t[3]),
                  e
                );
              }),
              (t.inverse = function(e, t) {
                return (
                  (e[0] = 1 / t[0]),
                  (e[1] = 1 / t[1]),
                  (e[2] = 1 / t[2]),
                  (e[3] = 1 / t[3]),
                  e
                );
              }),
              (t.normalize = function(e, t) {
                var r = t[0],
                  i = t[1],
                  n = t[2],
                  a = t[3],
                  o = r * r + i * i + n * n + a * a;
                return (
                  o > 0 &&
                    ((o = 1 / Math.sqrt(o)),
                    (e[0] = r * o),
                    (e[1] = i * o),
                    (e[2] = n * o),
                    (e[3] = a * o)),
                  e
                );
              }),
              (t.dot = function(e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
              }),
              (t.lerp = function(e, t, r, i) {
                var n = t[0],
                  a = t[1],
                  o = t[2],
                  s = t[3];
                return (
                  (e[0] = n + i * (r[0] - n)),
                  (e[1] = a + i * (r[1] - a)),
                  (e[2] = o + i * (r[2] - o)),
                  (e[3] = s + i * (r[3] - s)),
                  e
                );
              }),
              (t.random = function(r, i) {
                return (
                  (i = i || 1),
                  (r[0] = e.RANDOM()),
                  (r[1] = e.RANDOM()),
                  (r[2] = e.RANDOM()),
                  (r[3] = e.RANDOM()),
                  t.normalize(r, r),
                  t.scale(r, r, i),
                  r
                );
              }),
              (t.transformMat4 = function(e, t, r) {
                var i = t[0],
                  n = t[1],
                  a = t[2],
                  o = t[3];
                return (
                  (e[0] = r[0] * i + r[4] * n + r[8] * a + r[12] * o),
                  (e[1] = r[1] * i + r[5] * n + r[9] * a + r[13] * o),
                  (e[2] = r[2] * i + r[6] * n + r[10] * a + r[14] * o),
                  (e[3] = r[3] * i + r[7] * n + r[11] * a + r[15] * o),
                  e
                );
              }),
              (t.transformQuat = function(e, t, r) {
                var i = t[0],
                  n = t[1],
                  a = t[2],
                  o = r[0],
                  s = r[1],
                  p = r[2],
                  u = r[3],
                  l = u * i + s * a - p * n,
                  f = u * n + p * i - o * a,
                  c = u * a + o * n - s * i,
                  d = -o * i - s * n - p * a;
                return (
                  (e[0] = l * u + d * -o + f * -p - c * -s),
                  (e[1] = f * u + d * -s + c * -o - l * -p),
                  (e[2] = c * u + d * -p + l * -s - f * -o),
                  (e[3] = t[3]),
                  e
                );
              }),
              (t.forEach = (function() {
                var e = t.create();
                return function(t, r, i, n, a, o) {
                  var s, p;
                  for (
                    r || (r = 4),
                      i || (i = 0),
                      p = n ? Math.min(n * r + i, t.length) : t.length,
                      s = i;
                    s < p;
                    s += r
                  )
                    (e[0] = t[s]),
                      (e[1] = t[s + 1]),
                      (e[2] = t[s + 2]),
                      (e[3] = t[s + 3]),
                      a(e, e, o),
                      (t[s] = e[0]),
                      (t[s + 1] = e[1]),
                      (t[s + 2] = e[2]),
                      (t[s + 3] = e[3]);
                  return t;
                };
              })()),
              (t.str = function(e) {
                return (
                  "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
                );
              }),
              (t.exactEquals = function(e, t) {
                return (
                  e[0] === t[0] &&
                  e[1] === t[1] &&
                  e[2] === t[2] &&
                  e[3] === t[3]
                );
              }),
              (t.equals = function(t, r) {
                var i = t[0],
                  n = t[1],
                  a = t[2],
                  o = t[3],
                  s = r[0],
                  p = r[1],
                  u = r[2],
                  l = r[3];
                return (
                  Math.abs(i - s) <=
                    e.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) &&
                  Math.abs(n - p) <=
                    e.EPSILON * Math.max(1, Math.abs(n), Math.abs(p)) &&
                  Math.abs(a - u) <=
                    e.EPSILON * Math.max(1, Math.abs(a), Math.abs(u)) &&
                  Math.abs(o - l) <=
                    e.EPSILON * Math.max(1, Math.abs(o), Math.abs(l))
                );
              }),
              t
            );
          }.apply(null, i)) || (e.exports = n);
    },
    2042: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(5), r(0), r(10), r(1), r(2011), r(2025), r(220)]),
        void 0 ===
          (n = function(e, t, r, i, n, a, o, s, p) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.minDataLevel = 0),
                  (t.maxDataLevel = 1 / 0),
                  (t._isUpdating = !1),
                  t
                );
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, "imageFormatIsOpaque", {
                  get: function() {
                    return !1;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "isOpaque", {
                  get: function() {
                    return this.fullOpacity >= 1 && this.imageFormatIsOpaque;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.getTileUrl = function(e, t, r) {
                  return this.layer.getTileUrl(e, t, r);
                }),
                (t.prototype.updatingChanged = function(e) {
                  (this._isUpdating = e), this.notifyChange("updating");
                }),
                (t.prototype.isUpdating = function() {
                  return this._isUpdating;
                }),
                (t.prototype._getTileInfoSupportError = function(e, t) {
                  var r = p.checkIfTileInfoSupportedForView(
                    e,
                    t,
                    this.view.spatialReference,
                    this.view.basemapTerrain.manifold
                  );
                  if (r) {
                    var i = { layer: this.layer, error: r },
                      a = void 0;
                    switch (r.name) {
                      case "tilingscheme:local-gcs-not-supported":
                        a = new n(
                          "layerview:local-gcs-not-supported",
                          "Geographic coordinate systems are not supported in local scenes",
                          i
                        );
                        break;
                      case "tilingscheme:spatial-reference-mismatch":
                      case "tilingscheme:global-unsupported-spatial-reference":
                        a = new n(
                          "layerview:spatial-reference-incompatible",
                          "The spatial reference of this layer does not meet the requirements of the view",
                          i
                        );
                        break;
                      default:
                        a = new n(
                          "layerview:tiling-scheme-unsupported",
                          "The tiling scheme of this layer is not supported by SceneView",
                          i
                        );
                    }
                    return a;
                  }
                  return null;
                }),
                (t.prototype._getTileInfoCompatibilityError = function(e, t) {
                  return t.compatibleWith(e)
                    ? null
                    : new n(
                        "layerview:tiling-scheme-incompatible",
                        "The tiling scheme of this layer is incompatible with the tiling scheme of the surface"
                      );
                }),
                (t.prototype._updateMinMaxDataLevel = function() {
                  var e,
                    t = 1 / 0,
                    r = 0;
                  this.tileInfo.lods.forEach(function(e) {
                    (t = Math.min(e.level, t)), (r = Math.max(e.level, r));
                  }),
                    (e = [t, r]),
                    (this.minDataLevel = e[0]),
                    (this.maxDataLevel = e[1]);
                }),
                i(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "imageFormatIsOpaque",
                  null
                ),
                i(
                  [a.property(s.updatingPercentage)],
                  t.prototype,
                  "updatingPercentage",
                  void 0
                ),
                i(
                  [a.property(s.updatingPercentageValue)],
                  t.prototype,
                  "updatingPercentageValue",
                  void 0
                ),
                i([a.property()], t.prototype, "fullExtent", void 0),
                i(
                  [
                    a.property({
                      readOnly: !0,
                      dependsOn: ["fullOpacity", "imageFormatIsOpaque"]
                    })
                  ],
                  t.prototype,
                  "isOpaque",
                  null
                ),
                i([a.property()], t.prototype, "layer", void 0),
                i([a.property()], t.prototype, "minDataLevel", void 0),
                i([a.property()], t.prototype, "maxDataLevel", void 0),
                i([a.property()], t.prototype, "tileInfo", void 0),
                i([a.subclass("esri.views.3d.layers.TiledLayerView3D")], t)
              );
            })(a.declared(o));
          }.apply(null, i)) || (e.exports = n);
    },
    2100: function(e, t) {
      e.exports =
        '<snippets>\n  <snippet name="tileInfoVS">\n  <![CDATA[\n    attribute vec2 a_pos;\n\n    uniform highp mat4 u_transformMatrix;\n    uniform mediump vec2 u_normalized_origin;\n    uniform mediump float u_depth;\n    uniform mediump float u_coord_ratio;\n    uniform mediump vec2 u_delta; // in tile coordinates\n    uniform mediump vec2 u_dimensions; // in tile coordinates\n\n    varying mediump vec2 v_tex;\n\n    void main() {\n      mediump vec2 offests = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\n      gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(offests, 0.0, 1.0);\n\n      v_tex = a_pos;\n    }\n  ]]>\n  </snippet>\n\n  <snippet name="tileInfoFS">\n  <![CDATA[\n    uniform mediump sampler2D u_texture;\n    varying mediump vec2 v_tex;\n\n    void main(void) {\n      lowp vec4 color = texture2D(u_texture, v_tex);\n      gl_FragColor = 0.75 * color;\n    }\n  ]]>\n  </snippet>\n</snippets>\n';
    },
    2104: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(12), r(40)]),
        void 0 ===
          (n = function(e, t, r, i) {
            return (function() {
              function e(e, t, r) {
                var n;
                "string" == typeof e
                  ? (n = e)
                  : ((n = e.programNamePrefix),
                    (t = e.shaderSnippetPrefixes),
                    (r = e.baseDefines)),
                  i.assert(t, "you must specify shader snippet prefixes"),
                  i.assert(
                    2 === t.length,
                    "you must specify shader snippet prefixes for vertex and fragment shaders"
                  ),
                  (r && 0 !== r.length) || (r = []),
                  (this.programNamePrefix = n),
                  (this.shaderSnippetPrefixes = t),
                  (this.baseDefines = r),
                  (this.variables = []),
                  (this.sealed = !1);
              }
              return (
                (e.prototype.addDefine = function(e, t, r, n) {
                  i.assert(
                    !this.sealed,
                    "you cannot add another variable after the first program has been generated"
                  ),
                    i.assert(e, "you must specify a program name suffix"),
                    this.variables.push({
                      programNameSuffixes: ["", e],
                      shaderNameSuffixes: n || e,
                      defineStr: t,
                      affectsShaderTypes: r || [!0, !0]
                    });
                }),
                (e.prototype.addBinaryShaderSnippetSuffix = function(e, t, r) {
                  i.assert(
                    !this.sealed,
                    "you cannot add another variable after the first program has been generated"
                  ),
                    i.assert(e, "you must specify a program name suffix"),
                    this.variables.push({
                      programNameSuffixes: ["", e],
                      shaderSnippetSuffixes: ["", t],
                      affectsShaderTypes: r || [!0, !0]
                    });
                }),
                (e.prototype.addNaryShaderSnippetSuffix = function(e, t) {
                  i.assert(
                    !this.sealed,
                    "you cannot add another variable after the first program has been generated"
                  );
                  var r = e.map(function(e) {
                    return (
                      i.assert(
                        null != e.value,
                        "value must always be specified"
                      ),
                      e.value
                    );
                  });
                  this.variables.push({
                    values: r,
                    programNameSuffixes: e.map(function(e, t) {
                      return null != e.programNameSuffix
                        ? e.programNameSuffix
                        : r[t];
                    }),
                    shaderSnippetSuffixes: e.map(function(e, t) {
                      return null != e.shaderSnippetSuffix
                        ? e.shaderSnippetSuffix
                        : r[t];
                    }),
                    affectsShaderTypes: t || [!0, !0]
                  });
                }),
                (e.prototype.getShaderVariation = function(e) {
                  i.assert(
                    e.length === this.variables.length,
                    "you must specify a value for each variable"
                  );
                  for (
                    var t = this.programNamePrefix,
                      n = r.clone(this.shaderSnippetPrefixes),
                      a = r.clone(this.shaderSnippetPrefixes),
                      o = r.clone(this.baseDefines),
                      s = 0;
                    s < this.variables.length;
                    s++
                  ) {
                    var p = this.variables[s],
                      u = e[s],
                      l = void 0;
                    p.values
                      ? ((l = p.values.indexOf(u)),
                        i.assert(
                          l >= 0,
                          "invalid value " + u + " for variable " + s
                        ))
                      : (l = u ? 1 : 0),
                      (t += p.programNameSuffixes[l]);
                    for (var f = 0; f < 2; f++)
                      p.affectsShaderTypes[f] &&
                        (p.shaderSnippetSuffixes &&
                          ((n[f] += p.shaderSnippetSuffixes[l]),
                          (a[f] += p.shaderSnippetSuffixes[l])),
                        p.defineStr &&
                          l &&
                          (o.push(p.defineStr),
                          (a[f] += p.shaderNameSuffixes)));
                  }
                  return {
                    programName: t,
                    shaderSnippetNames: n,
                    shaderNames: a,
                    defines: o
                  };
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/VectorTileLayerView3D": 1997,
      "esri/views/3d/layers/LayerView3D": 2011,
      "esri/views/3d/layers/support/layerViewUpdatingProperties": 2025,
      "esri/views/webgl/ShaderSnippets": 2034,
      "esri/views/webgl/ShaderVariations": 2035,
      "esri/core/libs/gl-matrix/vec4": 2039,
      "esri/views/3d/layers/TiledLayerView3D": 2042,
      "dojo/text!esri/views/2d/engine/webgl/shaders/tileInfo.xml": 2100,
      "esri/views/webgl/ShaderSourceVariator": 2104
    });
  })();
