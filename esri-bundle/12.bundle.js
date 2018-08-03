(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    2034: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(802)]),
        void 0 ===
          (a = function(e, t, i) {
            return (function() {
              function e(e) {
                if (e) for (var t in e) this[t] = e[t];
              }
              return (
                (e.parse = function(e, t) {
                  for (
                    var n = i.parse(e).getElementsByTagName("snippet"),
                      a = /\$[a-zA-Z][a-zA-Z0-9]*(?:\([^\(\)]*\))?[ \t]*/,
                      r = /[\$\s]+/g,
                      o = /\(([^\(\)]*)\)/,
                      s = 0;
                    s < n.length;
                    s++
                  ) {
                    for (
                      var l = n[s].getAttribute("name"), d = n[s].textContent;
                      ;

                    ) {
                      var u = d.match(a);
                      if (null == u) break;
                      var f = u[0].replace(r, ""),
                        _ = f.match(o),
                        h = void 0;
                      _ &&
                        (h = _[1].split(",").map(function(e) {
                          return e.trim();
                        }));
                      var c = f.replace(o, ""),
                        p = t._instantiate(c, h);
                      d = d.replace(u[0], p);
                    }
                    t[l] = d;
                  }
                }),
                (e.prototype._instantiate = function(e, t) {
                  var i = this[e];
                  for (t || (t = []); ; ) {
                    var n = i.match(/\$(\d+)/);
                    if (null == n) break;
                    var a = t[parseInt(n[1], 10)];
                    i = i.replace(n[0], a);
                  }
                  return i;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2035: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(72), i(2104), i(40)]),
        void 0 ===
          (a = function(e, t, i, n, a) {
            function r(e) {
              return e.reduce(function(e, t, i) {
                return t && (e |= 1 << i), e;
              }, 0);
            }
            return (function() {
              function e(e, t, i, n, a, r) {
                if ("string" == typeof e) this._initParams(e, t, i, n, a, r);
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
                (e.prototype._initParams = function(e, t, i, a, r, o) {
                  (this._defaultSnippets = a),
                    (this._defaultRctx = r),
                    (this._defaultVertexAttribLocs = o),
                    (this._programCache = new Map()),
                    (this._variationInfo = new Map()),
                    (this._shaderSourceVariator = new n(e, t, i));
                }),
                (e.prototype.addDefine = function(e, t, i, n) {
                  this._shaderSourceVariator.addDefine(e, t, i, n);
                }),
                (e.prototype.addBinaryShaderSnippetSuffix = function(e, t, i) {
                  this._shaderSourceVariator.addBinaryShaderSnippetSuffix(
                    e,
                    t,
                    i
                  );
                }),
                (e.prototype.addNaryShaderSnippetSuffix = function(e, t) {
                  this._shaderSourceVariator.addNaryShaderSnippetSuffix(e, t);
                }),
                (e.prototype.getProgram = function(e, t, n, o) {
                  if (
                    ((t = t || this._defaultSnippets),
                    (n = n || this._defaultRctx),
                    (o = o || this._defaultVertexAttribLocs),
                    !t)
                  )
                    throw new Error(
                      "No ShaderSnippets provided to getProgram nor to ShaderVariations constructor."
                    );
                  if (!n)
                    throw new Error(
                      "No RenderingContext provided to getProgram nor to ShaderVariations constructor."
                    );
                  if (!o)
                    throw new Error(
                      "No VertexAttributeLocations provided to getProgram nor to ShaderVariations constructor."
                    );
                  var s = r(e);
                  if (this._programCache.has(s))
                    return this._programCache.get(s);
                  var l,
                    d,
                    u,
                    f = this._shaderSourceVariator.getShaderVariation(e);
                  (d = t[(l = f.shaderSnippetNames[0])]),
                    a.assert(
                      null != d,
                      "shader snippet '" + l + "' does not exist"
                    ),
                    (u = t[(l = f.shaderSnippetNames[1])]),
                    a.assert(
                      null != u,
                      "shader snippet '" + l + "' does not exist"
                    );
                  var _ = new i(n, d, u, o, f.defines);
                  return this._programCache.set(s, _), _;
                }),
                (e.prototype.getProgramByKey = function(e) {
                  if (this._programCache.has(e))
                    return this._programCache.get(e);
                  if (!this._variationInfo[e]) return null;
                  var t,
                    n,
                    r,
                    o = this._variationInfo[e],
                    s = this._defaultSnippets,
                    l = this._defaultRctx,
                    d = this._defaultVertexAttribLocs;
                  (n = s[(t = o.shaderSnippetNames[0])]),
                    a.assert(
                      null != n,
                      "shader snippet '" + t + "' does not exist"
                    ),
                    (r = s[(t = o.shaderSnippetNames[1])]),
                    a.assert(
                      null != r,
                      "shader snippet '" + t + "' does not exist"
                    );
                  var u = new i(l, n, r, d, o.defines);
                  return this._programCache.set(e, u), u;
                }),
                (e.prototype.getProgramInfo = function(e) {
                  var t = this._shaderSourceVariator.getShaderVariation(e),
                    i = r(e);
                  return (
                    this._variationInfo[i] || (this._variationInfo[i] = t),
                    { name: t.programName, key: i }
                  );
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2038: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (a = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.serializeList = function(e, t) {
                if (null !== t) {
                  e.writeInt32(t.length);
                  for (var i = 0, n = t; i < n.length; i++) n[i].serialize(e);
                  return e;
                }
                e.writeInt32(0);
              }),
              (t.deserializeList = function(e, t, i) {
                for (
                  var n = e.readInt32(), a = new Array(n), r = 0;
                  r < a.length;
                  r++
                )
                  a[r] = t.deserialize(e, i);
                return a;
              });
          }.apply(null, n)) || (e.exports = a);
    },
    2039: function(e, t, i) {
      var n, a;
      (n = [i(263)]),
        void 0 ===
          (a = function(e) {
            var t = {
              create: function() {
                var t = new e.ARRAY_TYPE(4);
                return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
              },
              clone: function(t) {
                var i = new e.ARRAY_TYPE(4);
                return (
                  (i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]), (i[3] = t[3]), i
                );
              },
              fromValues: function(t, i, n, a) {
                var r = new e.ARRAY_TYPE(4);
                return (r[0] = t), (r[1] = i), (r[2] = n), (r[3] = a), r;
              },
              copy: function(e, t) {
                return (
                  (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e
                );
              },
              set: function(e, t, i, n, a) {
                return (e[0] = t), (e[1] = i), (e[2] = n), (e[3] = a), e;
              },
              add: function(e, t, i) {
                return (
                  (e[0] = t[0] + i[0]),
                  (e[1] = t[1] + i[1]),
                  (e[2] = t[2] + i[2]),
                  (e[3] = t[3] + i[3]),
                  e
                );
              },
              subtract: function(e, t, i) {
                return (
                  (e[0] = t[0] - i[0]),
                  (e[1] = t[1] - i[1]),
                  (e[2] = t[2] - i[2]),
                  (e[3] = t[3] - i[3]),
                  e
                );
              }
            };
            return (
              (t.sub = t.subtract),
              (t.multiply = function(e, t, i) {
                return (
                  (e[0] = t[0] * i[0]),
                  (e[1] = t[1] * i[1]),
                  (e[2] = t[2] * i[2]),
                  (e[3] = t[3] * i[3]),
                  e
                );
              }),
              (t.mul = t.multiply),
              (t.divide = function(e, t, i) {
                return (
                  (e[0] = t[0] / i[0]),
                  (e[1] = t[1] / i[1]),
                  (e[2] = t[2] / i[2]),
                  (e[3] = t[3] / i[3]),
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
              (t.min = function(e, t, i) {
                return (
                  (e[0] = Math.min(t[0], i[0])),
                  (e[1] = Math.min(t[1], i[1])),
                  (e[2] = Math.min(t[2], i[2])),
                  (e[3] = Math.min(t[3], i[3])),
                  e
                );
              }),
              (t.max = function(e, t, i) {
                return (
                  (e[0] = Math.max(t[0], i[0])),
                  (e[1] = Math.max(t[1], i[1])),
                  (e[2] = Math.max(t[2], i[2])),
                  (e[3] = Math.max(t[3], i[3])),
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
              (t.scale = function(e, t, i) {
                return (
                  (e[0] = t[0] * i),
                  (e[1] = t[1] * i),
                  (e[2] = t[2] * i),
                  (e[3] = t[3] * i),
                  e
                );
              }),
              (t.scaleAndAdd = function(e, t, i, n) {
                return (
                  (e[0] = t[0] + i[0] * n),
                  (e[1] = t[1] + i[1] * n),
                  (e[2] = t[2] + i[2] * n),
                  (e[3] = t[3] + i[3] * n),
                  e
                );
              }),
              (t.distance = function(e, t) {
                var i = t[0] - e[0],
                  n = t[1] - e[1],
                  a = t[2] - e[2],
                  r = t[3] - e[3];
                return Math.sqrt(i * i + n * n + a * a + r * r);
              }),
              (t.dist = t.distance),
              (t.squaredDistance = function(e, t) {
                var i = t[0] - e[0],
                  n = t[1] - e[1],
                  a = t[2] - e[2],
                  r = t[3] - e[3];
                return i * i + n * n + a * a + r * r;
              }),
              (t.sqrDist = t.squaredDistance),
              (t.length = function(e) {
                var t = e[0],
                  i = e[1],
                  n = e[2],
                  a = e[3];
                return Math.sqrt(t * t + i * i + n * n + a * a);
              }),
              (t.len = t.length),
              (t.squaredLength = function(e) {
                var t = e[0],
                  i = e[1],
                  n = e[2],
                  a = e[3];
                return t * t + i * i + n * n + a * a;
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
                var i = t[0],
                  n = t[1],
                  a = t[2],
                  r = t[3],
                  o = i * i + n * n + a * a + r * r;
                return (
                  o > 0 &&
                    ((o = 1 / Math.sqrt(o)),
                    (e[0] = i * o),
                    (e[1] = n * o),
                    (e[2] = a * o),
                    (e[3] = r * o)),
                  e
                );
              }),
              (t.dot = function(e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
              }),
              (t.lerp = function(e, t, i, n) {
                var a = t[0],
                  r = t[1],
                  o = t[2],
                  s = t[3];
                return (
                  (e[0] = a + n * (i[0] - a)),
                  (e[1] = r + n * (i[1] - r)),
                  (e[2] = o + n * (i[2] - o)),
                  (e[3] = s + n * (i[3] - s)),
                  e
                );
              }),
              (t.random = function(i, n) {
                return (
                  (n = n || 1),
                  (i[0] = e.RANDOM()),
                  (i[1] = e.RANDOM()),
                  (i[2] = e.RANDOM()),
                  (i[3] = e.RANDOM()),
                  t.normalize(i, i),
                  t.scale(i, i, n),
                  i
                );
              }),
              (t.transformMat4 = function(e, t, i) {
                var n = t[0],
                  a = t[1],
                  r = t[2],
                  o = t[3];
                return (
                  (e[0] = i[0] * n + i[4] * a + i[8] * r + i[12] * o),
                  (e[1] = i[1] * n + i[5] * a + i[9] * r + i[13] * o),
                  (e[2] = i[2] * n + i[6] * a + i[10] * r + i[14] * o),
                  (e[3] = i[3] * n + i[7] * a + i[11] * r + i[15] * o),
                  e
                );
              }),
              (t.transformQuat = function(e, t, i) {
                var n = t[0],
                  a = t[1],
                  r = t[2],
                  o = i[0],
                  s = i[1],
                  l = i[2],
                  d = i[3],
                  u = d * n + s * r - l * a,
                  f = d * a + l * n - o * r,
                  _ = d * r + o * a - s * n,
                  h = -o * n - s * a - l * r;
                return (
                  (e[0] = u * d + h * -o + f * -l - _ * -s),
                  (e[1] = f * d + h * -s + _ * -o - u * -l),
                  (e[2] = _ * d + h * -l + u * -s - f * -o),
                  (e[3] = t[3]),
                  e
                );
              }),
              (t.forEach = (function() {
                var e = t.create();
                return function(t, i, n, a, r, o) {
                  var s, l;
                  for (
                    i || (i = 4),
                      n || (n = 0),
                      l = a ? Math.min(a * i + n, t.length) : t.length,
                      s = n;
                    s < l;
                    s += i
                  )
                    (e[0] = t[s]),
                      (e[1] = t[s + 1]),
                      (e[2] = t[s + 2]),
                      (e[3] = t[s + 3]),
                      r(e, e, o),
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
              (t.equals = function(t, i) {
                var n = t[0],
                  a = t[1],
                  r = t[2],
                  o = t[3],
                  s = i[0],
                  l = i[1],
                  d = i[2],
                  u = i[3];
                return (
                  Math.abs(n - s) <=
                    e.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) &&
                  Math.abs(a - l) <=
                    e.EPSILON * Math.max(1, Math.abs(a), Math.abs(l)) &&
                  Math.abs(r - d) <=
                    e.EPSILON * Math.max(1, Math.abs(r), Math.abs(d)) &&
                  Math.abs(o - u) <=
                    e.EPSILON * Math.max(1, Math.abs(o), Math.abs(u))
                );
              }),
              t
            );
          }.apply(null, n)) || (e.exports = a);
    },
    2043: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (a = function(e, t) {
            function i(e, t) {
              return (e %= t) >= 0 ? e : e + t;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.C_INFINITY = Number.POSITIVE_INFINITY),
              (t.C_PI = Math.PI),
              (t.C_2PI = 2 * t.C_PI),
              (t.C_PI_BY_2 = t.C_PI / 2),
              (t.C_RAD_TO_256 = 128 / t.C_PI),
              (t.C_256_TO_RAD = t.C_PI / 128),
              (t.C_DEG_TO_256 = 256 / 360),
              (t.C_DEG_TO_RAD = t.C_PI / 180),
              (t.C_SQRT2 = 1.414213562),
              (t.C_SQRT2_INV = 1 / t.C_SQRT2);
            var n = 1 / Math.LN2;
            (t.positiveMod = i),
              (t.radToByte = function(e) {
                return i(e * t.C_RAD_TO_256, 256);
              }),
              (t.degToByte = function(e) {
                return i(e * t.C_DEG_TO_256, 256);
              }),
              (t.log2 = function(e) {
                return Math.log(e) * n;
              }),
              (t.sqr = function(e) {
                return e * e;
              }),
              (t.clamp = function(e, t, i) {
                return Math.min(Math.max(e, t), i);
              }),
              (t.interpolate = function(e, t, i) {
                return e * (1 - i) + t * i;
              }),
              (t.between = function(e, t, i) {
                return (e >= t && e <= i) || (e >= i && e <= t);
              });
          }.apply(null, n)) || (e.exports = a);
    },
    2068: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2007), i(2079), i(2103), i(2069), i(2038)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function() {
              function e(e, t, i) {
                (this.unit = e), (this.pageId = t), (this.semantic = i);
              }
              return (
                (e.prototype.clone = function() {
                  return new e(this.unit, this.pageId, this.semantic);
                }),
                (e.prototype.serialize = function(e) {
                  return e.writeInt32(this.unit), e.writeInt32(this.pageId), e;
                }),
                (e.deserialize = function(t) {
                  return new e(t.readInt32(), t.readInt32(), "u_texture");
                }),
                e
              );
            })();
            t.TexBindingInfo = s;
            var l = (function() {
              function e(e, t) {
                (this.name = e), (this.value = t);
              }
              return (
                (e.prototype.clone = function() {
                  return new e(this.name, this.value);
                }),
                (e.prototype.serialize = function(e) {
                  return e.writeInt32(this.value), e;
                }),
                (e.deserialize = function(t) {
                  return new e("u_my_param", t.readInt32());
                }),
                e
              );
            })();
            t.MaterialParam = l;
            var d = (function() {
              function e() {
                (this.texBindingInfo = []), (this.materialParams = []);
              }
              return (
                (e.fromSprite = function(t, a, o) {
                  var l = new e(),
                    d = new r();
                  return (
                    (d.geometryType = a),
                    t
                      ? ((d.sdf = t.sdf),
                        (d.pattern = !0),
                        l.texBindingInfo.push(new s(1, t.page, "u_texture")))
                      : ((d.sdf = !1), (d.pattern = !1)),
                    0 === o
                      ? (d.vvOpacity = d.vvSizeMinMaxValue = d.vvSizeScaleStops = d.vvSizeFieldStops = d.vvSizeUnitValue = d.vvColor = d.vvRotation = !1)
                      : ((d.vvOpacity = 0 != (o & i.WGLVVFlag.OPACITY)),
                        (d.vvSizeMinMaxValue =
                          0 != (o & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                        (d.vvSizeScaleStops =
                          0 != (o & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                        (d.vvSizeFieldStops =
                          0 != (o & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                        (d.vvSizeUnitValue =
                          0 != (o & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                        (d.vvColor = 0 != (o & i.WGLVVFlag.COLOR)),
                        (d.vvRotation = 0 != (o & i.WGLVVFlag.ROTATION))),
                    (d.visibility = !1),
                    (l.materialKey = n.getMaterialKey(d)),
                    (l.materialKeyInfo = d),
                    l
                  );
                }),
                (e.fromGlyph = function(t, a, o) {
                  var l = new e(),
                    d = new r();
                  return (
                    (d.geometryType = a),
                    (d.sdf = !0),
                    (d.pattern = !1),
                    (d.visibility = !1),
                    (d.heatmap = !1),
                    l.texBindingInfo.push(new s(2, t.page, "u_texture")),
                    0 === o
                      ? (d.vvOpacity = d.vvSizeMinMaxValue = d.vvSizeScaleStops = d.vvSizeFieldStops = d.vvSizeUnitValue = d.vvColor = d.vvRotation = !1)
                      : ((d.vvOpacity = 0 != (o & i.WGLVVFlag.OPACITY)),
                        (d.vvSizeMinMaxValue =
                          0 != (o & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                        (d.vvSizeScaleStops =
                          0 != (o & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                        (d.vvSizeFieldStops =
                          0 != (o & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                        (d.vvSizeUnitValue =
                          0 != (o & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                        (d.vvColor = 0 != (o & i.WGLVVFlag.COLOR)),
                        (d.vvRotation = 0 != (o & i.WGLVVFlag.ROTATION))),
                    (l.materialKey = n.getMaterialKey(d)),
                    (l.materialKeyInfo = d),
                    l
                  );
                }),
                (e.prototype.copy = function(e) {
                  (this.materialParams = e.materialParams.map(function(e) {
                    return e.clone();
                  })),
                    (this.texBindingInfo = e.texBindingInfo.map(function(e) {
                      return e.clone();
                    })),
                    e.materialKeyInfo &&
                      ((this.materialKeyInfo = new r()),
                      this.materialKeyInfo.copy(e.materialKeyInfo)),
                    (this.materialKey = e.materialKey);
                }),
                (e.prototype.serialize = function(e) {
                  return (
                    e.writeInt32(this.materialKey),
                    o.serializeList(e, this.texBindingInfo),
                    o.serializeList(e, this.materialParams),
                    e
                  );
                }),
                (e.deserialize = function(t) {
                  var i = new e();
                  return (
                    (i.materialKey = t.readInt32()),
                    (i.texBindingInfo = o.deserializeList(t, s)),
                    (i.materialParams = o.deserializeList(t, l)),
                    (i.materialKeyInfo = new r()),
                    a(i.materialKeyInfo, i.materialKey),
                    i
                  );
                }),
                e
              );
            })();
            t.default = d;
          }.apply(null, n)) || (e.exports = a);
    },
    2069: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (a = function(e, t) {
            return (function() {
              function e() {
                (this.sdf = !1),
                  (this.vvSizeMinMaxValue = !1),
                  (this.vvSizeScaleStops = !1),
                  (this.vvSizeFieldStops = !1),
                  (this.vvSizeUnitValue = !1),
                  (this.vvColor = !1),
                  (this.vvRotation = !1),
                  (this.vvOpacity = !1),
                  (this.visibility = !1),
                  (this.pattern = !1),
                  (this.heatmap = !1);
              }
              return (
                (e.prototype.copy = function(e) {
                  (this.geometryType = e.geometryType),
                    (this.sdf = e.sdf),
                    (this.vvSizeMinMaxValue = e.vvSizeMinMaxValue),
                    (this.vvSizeScaleStops = e.vvSizeScaleStops),
                    (this.vvSizeFieldStops = e.vvSizeFieldStops),
                    (this.vvSizeUnitValue = e.vvSizeUnitValue),
                    (this.vvColor = e.vvColor),
                    (this.vvRotation = e.vvRotation),
                    (this.vvOpacity = e.vvOpacity),
                    (this.visibility = e.visibility),
                    (this.pattern = e.pattern),
                    (this.heatmap = e.heatmap);
                }),
                (e.prototype.hasVV = function() {
                  return (
                    void 0 === this._hasVV &&
                      (this._hasVV =
                        this.vvColor ||
                        this.vvOpacity ||
                        this.vvRotation ||
                        this.vvSizeMinMaxValue ||
                        this.vvSizeScaleStops ||
                        this.vvSizeFieldStops ||
                        this.vvSizeUnitValue),
                    this._hasVV
                  );
                }),
                (e.prototype.hasVVSize = function() {
                  return (
                    this.vvSizeMinMaxValue ||
                    this.vvSizeFieldStops ||
                    this.vvSizeScaleStops ||
                    this.vvSizeUnitValue
                  );
                }),
                (e.prototype.hasVVColor = function() {
                  return this.vvColor;
                }),
                (e.prototype.hasVVRotation = function() {
                  return this.vvRotation;
                }),
                (e.prototype.hasVVOpacity = function() {
                  return this.vvOpacity;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2070: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(5), i(2102), i(815)]),
        void 0 ===
          (a = function(e, t, i, n, a) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                i(t, e),
                (t.prototype.draw = function(e, t) {
                  var i = this;
                  if (t.canDisplay) {
                    var n = this.getGeometryType(),
                      r = t.getDisplayList(e.drawPhase),
                      o = t.getGeometry(n);
                    o &&
                      a.forEachIter(r.ofType(n), function(n) {
                        return i.drawGeometry(e, t, n, o);
                      });
                  }
                }),
                t
              );
            })(n.default);
            t.default = r;
          }.apply(null, n)) || (e.exports = a);
    },
    2078: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2195), i(2196), i(2197), i(2100), i(2034)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o) {
            var s = new o();
            return (
              o.parse(i, s), o.parse(n, s), o.parse(a, s), o.parse(r, s), s
            );
          }.apply(null, n)) || (e.exports = a);
    },
    2079: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2007), i(2068), i(2069)]),
        void 0 ===
          (a = function(e, t, i, n, a) {
            function r(e) {
              if (e.geometryType === i.WGLGeometryType.UNKNOWN) return -1;
              var t =
                (function(e) {
                  var t = [];
                  return (
                    (t[0] = !!e.sdf),
                    (t[1] = !!e.vvSizeMinMaxValue),
                    (t[2] = !!e.vvSizeScaleStops),
                    (t[3] = !!e.vvSizeFieldStops),
                    (t[4] = !!e.vvSizeUnitValue),
                    (t[5] = !!e.vvColor),
                    (t[6] = !!e.vvRotation),
                    (t[7] = !!e.vvOpacity),
                    (t[8] = !!e.visibility),
                    (t[9] = !!e.pattern),
                    (t[10] = !!e.heatmap),
                    t.reduce(function(e, t, i) {
                      return t && (e |= 1 << (i + 2)), e;
                    }, 0)
                  );
                })(e) << 3;
              return e.geometryType + t;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createTextMaterialInfo = function(e, t, o) {
                var s = new n.default(),
                  l = new a();
                return (
                  (l.geometryType = o),
                  (l.sdf = !0),
                  (l.pattern = !1),
                  (l.visibility = !1),
                  (l.heatmap = !1),
                  s.texBindingInfo.push(
                    new n.TexBindingInfo(2, e.page, "u_texture")
                  ),
                  0 === t
                    ? (l.vvOpacity = l.vvSizeMinMaxValue = l.vvSizeScaleStops = l.vvSizeFieldStops = l.vvSizeUnitValue = l.vvColor = l.vvRotation = !1)
                    : ((l.vvOpacity = 0 != (t & i.WGLVVFlag.OPACITY)),
                      (l.vvSizeMinMaxValue =
                        0 != (t & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                      (l.vvSizeScaleStops =
                        0 != (t & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                      (l.vvSizeFieldStops =
                        0 != (t & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                      (l.vvSizeUnitValue =
                        0 != (t & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                      (l.vvColor = 0 != (t & i.WGLVVFlag.COLOR)),
                      (l.vvRotation = 0 != (t & i.WGLVVFlag.ROTATION))),
                  (s.materialKey = r(l)),
                  (s.materialKeyInfo = l),
                  s
                );
              }),
              (t.createMaterialInfo = function(e, t, o) {
                var s = new n.default(),
                  l = new a();
                if (((l.geometryType = t), e)) {
                  var d = e.spriteMosaicItem;
                  (l.sdf = d.sdf),
                    (l.pattern = !0),
                    s.texBindingInfo.push(
                      new n.TexBindingInfo(1, d.page, "u_texture")
                    );
                } else (l.sdf = !1), (l.pattern = !1);
                return (
                  0 === o
                    ? (l.vvOpacity = l.vvSizeMinMaxValue = l.vvSizeScaleStops = l.vvSizeFieldStops = l.vvSizeUnitValue = l.vvColor = l.vvRotation = !1)
                    : ((l.vvOpacity = 0 != (o & i.WGLVVFlag.OPACITY)),
                      (l.vvSizeMinMaxValue =
                        0 != (o & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                      (l.vvSizeScaleStops =
                        0 != (o & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                      (l.vvSizeFieldStops =
                        0 != (o & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                      (l.vvSizeUnitValue =
                        0 != (o & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                      (l.vvColor = 0 != (o & i.WGLVVFlag.COLOR)),
                      (l.vvRotation = 0 != (o & i.WGLVVFlag.ROTATION))),
                  (l.visibility = !1),
                  (s.materialKey = r(l)),
                  (s.materialKeyInfo = l),
                  s
                );
              }),
              (t.getMaterialKey = r),
              (t.getMaterialVariations = function(e) {
                return {
                  geometryType: 7 & e,
                  variations: [
                    0 != (1 & (e >>= 3)),
                    0 != (2 & e),
                    0 != (4 & e),
                    0 != (8 & e),
                    0 != (16 & e),
                    0 != (32 & e),
                    0 != (64 & e),
                    0 != (128 & e),
                    0 != (256 & e),
                    0 != (512 & e),
                    0 != (1024 & e),
                    0 != (2048 & e),
                    0 != (4096 & e)
                  ]
                };
              });
          }.apply(null, n)) || (e.exports = a);
    },
    2100: function(e, t) {
      e.exports =
        '<snippets>\n  <snippet name="tileInfoVS">\n  <![CDATA[\n    attribute vec2 a_pos;\n\n    uniform highp mat4 u_transformMatrix;\n    uniform mediump vec2 u_normalized_origin;\n    uniform mediump float u_depth;\n    uniform mediump float u_coord_ratio;\n    uniform mediump vec2 u_delta; // in tile coordinates\n    uniform mediump vec2 u_dimensions; // in tile coordinates\n\n    varying mediump vec2 v_tex;\n\n    void main() {\n      mediump vec2 offests = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\n      gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(offests, 0.0, 1.0);\n\n      v_tex = a_pos;\n    }\n  ]]>\n  </snippet>\n\n  <snippet name="tileInfoFS">\n  <![CDATA[\n    uniform mediump sampler2D u_texture;\n    varying mediump vec2 v_tex;\n\n    void main(void) {\n      lowp vec4 color = texture2D(u_texture, v_tex);\n      gl_FragColor = 0.75 * color;\n    }\n  ]]>\n  </snippet>\n</snippets>\n';
    },
    2101: function(e, t, i) {
      var n, a;
      (n = [
        i.dj.c(e.i),
        t,
        i(13),
        i(15),
        i(417),
        i(2007),
        i(2043),
        i(2199),
        i(2010),
        i(2198),
        i(2210),
        i(2211),
        i(2212),
        i(2213),
        i(2214),
        i(2215),
        i(2216),
        i(93)
      ]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o, s, l, d, u, f, _, h, c, p, v, m) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var V = (function() {
              function e() {
                this._initialized = !1;
              }
              return (
                (e.prototype.registerPass = function(e, t) {
                  this._initialize();
                  for (var i = 0, n = t; i < n.length; i++) {
                    var a = n[i];
                    this._passMap.set(a, e);
                  }
                  return this;
                }),
                (e.prototype.getPaintPassTs = function(e) {
                  return (
                    this._initialize(),
                    this._passMap.has(e) ? [this._passMap.get(e)] : []
                  );
                }),
                (e.prototype._initialize = function() {
                  this._initialized ||
                    ((this._passMap = new Map()), (this._initialized = !0));
                }),
                e
              );
            })();
            t.WGLPainterOptions = V;
            var g = new Uint8Array(
                4 * l.C_HITTEST_SEARCH_SIZE * l.C_HITTEST_SEARCH_SIZE
              ),
              S = new Uint32Array(g.buffer),
              y = (function() {
                function e() {
                  (this._hlPainter = new v()),
                    (this._extrudeMatrix = new Float32Array(16)),
                    (this._extrudeNoRotationMatrix = new Float32Array(16)),
                    (this._extrudeRotateVector = new Float32Array([0, 0, 1])),
                    (this._extrudeScaleVector = new Float32Array([1, 1, 1])),
                    (this._state = { rotation: 0, width: 0, height: 0 }),
                    (this._cachedWidth = 0),
                    (this._cachedHeight = 0),
                    (this._cachedRotation = 0),
                    (this.materialManager = new s());
                }
                return (
                  (e.allGeometryPhases = function() {
                    return [
                      r.WGLDrawPhase.FILL,
                      r.WGLDrawPhase.LINE,
                      r.WGLDrawPhase.MARKER,
                      r.WGLDrawPhase.TEXT
                    ];
                  }),
                  (e.toWGLDrawPhases = function(e) {
                    for (
                      var t, i = [], n = 0;
                      n < r.WGLDrawPhase.NUM_DRAW_PHASES;
                      n++
                    )
                      (t = 1 << n) & e && i.push(t);
                    return i;
                  }),
                  Object.defineProperty(e.prototype, "extrudeMatrix", {
                    get: function() {
                      return this._extrudeMatrix;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(
                    e.prototype,
                    "extrudeNoRotationMatrix",
                    {
                      get: function() {
                        return this._extrudeNoRotationMatrix;
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  (e.prototype.dispose = function() {
                    this.materialManager.dispose(),
                      (this.textureManager = null),
                      this._hlPainter &&
                        (this._hlPainter.dispose(), (this._hlPainter = null)),
                      this._hittestFBO &&
                        (this._hittestFBO.dispose(), (this._hittestFBO = null)),
                      this._passes &&
                        (this._passes.forEach(function(e) {
                          return e.dispose();
                        }),
                        this._passes.clear()),
                      this._brushes &&
                        (this._brushes.forEach(function(e) {
                          return e.forEach(function(e) {
                            return e.dispose();
                          });
                        }),
                        this._brushes.clear());
                  }),
                  (e.prototype.initialize = function(e) {
                    this.materialManager.initialize(e);
                  }),
                  (e.prototype.update = function(e, t) {
                    (this._state = e),
                      (this._state.width === this._cachedWidth &&
                        this._state.height === this._cachedHeight &&
                        this._state.rotation === this._cachedRotation) ||
                        ((this._extrudeScaleVector[0] = 2 / e.width),
                        (this._extrudeScaleVector[1] = -2 / e.height),
                        a.identity(this._extrudeMatrix),
                        a.rotate(
                          this._extrudeMatrix,
                          this._extrudeMatrix,
                          -e.rotation * o.C_DEG_TO_RAD,
                          this._extrudeRotateVector
                        ),
                        a.scale(
                          this._extrudeMatrix,
                          this._extrudeMatrix,
                          this._extrudeScaleVector
                        ),
                        a.transpose(this._extrudeMatrix, this._extrudeMatrix),
                        a.identity(this._extrudeNoRotationMatrix),
                        a.scale(
                          this._extrudeNoRotationMatrix,
                          this._extrudeNoRotationMatrix,
                          this._extrudeScaleVector
                        ),
                        a.transpose(
                          this._extrudeNoRotationMatrix,
                          this._extrudeNoRotationMatrix
                        ),
                        (this._cachedWidth = this._state.width),
                        (this._cachedHeight = this._state.height),
                        (this._cachedRotation = this._state.rotation));
                  }),
                  (e.prototype.getBrushes = function(e) {
                    if (!this._brushes) {
                      var t = new f.default(),
                        i = new c.default(),
                        n = new h.default(),
                        a = new p.default(),
                        o = new _.default(),
                        s = new d.default(),
                        l = new u.default();
                      (this._brushes = new Map()),
                        this._brushes.set(r.WGLDrawPhase.FILL, [t]),
                        this._brushes.set(r.WGLDrawPhase.MARKER, [i]),
                        this._brushes.set(r.WGLDrawPhase.LINE, [n]),
                        this._brushes.set(r.WGLDrawPhase.TEXT, [a]),
                        this._brushes.set(r.WGLDrawPhase.LABEL, [o]),
                        this._brushes.set(r.WGLDrawPhase.LABEL_ALPHA, [o]),
                        this._brushes.set(r.WGLDrawPhase.HITTEST, [t, i, n, a]),
                        this._brushes.set(r.WGLDrawPhase.HIGHLIGHT, [
                          t,
                          i,
                          n,
                          a
                        ]),
                        this._brushes.set(r.WGLDrawPhase.CLIP, [l]),
                        this._brushes.set(r.WGLDrawPhase.DEBUG, [s]);
                    }
                    if (!this._brushes.has(e))
                      throw new Error(
                        "WGLPainter: Tried to get brush for unknown phase: " + e
                      );
                    return this._brushes.get(e);
                  }),
                  (e.prototype.bindTextureManager = function(e) {
                    this.textureManager = e;
                  }),
                  (e.prototype.draw = function(e, t, i, n) {
                    (i[0] === r.WGLDrawPhase.LABEL_ALPHA &&
                      i[0] === r.WGLDrawPhase.LABEL) ||
                      this._drawClippingRects(e, t);
                    var a = e.context;
                    a.setBlendingEnabled(!0),
                      a.setStencilWriteMask(0),
                      a.setBlendFunctionSeparate(1, 771, 1, 771),
                      this._drawPhases(e, t, i, n),
                      this._debugTiles(e, t);
                  }),
                  (e.prototype.setHighlightOptions = function(e) {
                    this._hlPainter.setHighlightOptions(e);
                  }),
                  (e.prototype.highlight = function(e, t) {
                    var i = e.context,
                      n = i.getViewport();
                    this._hlPainter.setup(i, n.width, n.height),
                      this._hlPainter.startMaskDraw(i),
                      this._drawClippingRects(e, t),
                      i.setBlendingEnabled(!0),
                      i.setStencilWriteMask(0),
                      i.setBlendFunctionSeparate(1, 771, 1, 771),
                      this._drawPhases(e, t, [r.WGLDrawPhase.HIGHLIGHT]),
                      this._hlPainter.draw(i);
                  }),
                  (e.prototype.hitTest = function(e, t) {
                    var i = l.C_HITTEST_SEARCH_SIZE,
                      n = [0, 0],
                      a = [0, 0],
                      o = e.state;
                    if (
                      (o.toMap(n, [0, 0]),
                      o.toMap(a, [i, i]),
                      0 ===
                        t.filter(function(e) {
                          return !(
                            n[0] > e.bounds[2] ||
                            a[0] < e.bounds[0] ||
                            n[1] < e.bounds[1] ||
                            a[1] > e.bounds[3]
                          );
                        }).length)
                    )
                      return [];
                    var s = e.context;
                    this._hittestFBO ||
                      (this._hittestFBO = m.create(s, {
                        colorTarget: 0,
                        depthStencilTarget: 3,
                        width: i,
                        height: i
                      }));
                    var d = s.getViewport(),
                      u = s.getBoundFramebufferObject();
                    s.bindFramebuffer(this._hittestFBO),
                      s.setViewport(0, 0, i, i),
                      this._drawClippingRects(e, t);
                    var f = s.gl;
                    s.setClearColor(1, 1, 1, 1),
                      s.clear(f.COLOR_BUFFER_BIT),
                      s.setBlendingEnabled(!1),
                      s.setStencilWriteMask(0),
                      this._drawPhases(e, t, [r.WGLDrawPhase.HITTEST]),
                      s.setBlendingEnabled(!0),
                      this._hittestFBO.readPixels(0, 0, i, i, 6408, 5121, g);
                    for (var _ = i * i, h = new Set(), c = 0; c < _; c++) {
                      var p = S[c];
                      4294967295 !== p && h.add(p);
                    }
                    s.bindFramebuffer(u),
                      s.setViewport(d.x, d.y, d.width, d.height);
                    var v = [];
                    return (
                      h.forEach(function(e) {
                        v.push(e);
                      }),
                      v
                    );
                  }),
                  (e.prototype._getPaintPass = function(e) {
                    if (
                      (this._passes || (this._passes = new Map()),
                      !this._passes.has(e))
                    )
                      try {
                        this._passes.set(e, new e());
                      } catch (t) {
                        throw new Error(
                          "Tried to instantiate WGLPaintPass with unknown constructor: " +
                            e +
                            ",\n" +
                            t
                        );
                      }
                    return this._passes.get(e);
                  }),
                  (e.prototype._getPaintPasses = function(e, t) {
                    var i = this;
                    return t.getPaintPassTs(e).map(function(e) {
                      return i._getPaintPass(e);
                    });
                  }),
                  (e.prototype._drawPhases = function(e, t, n, a) {
                    e.context.setStencilTestEnabled(!0);
                    for (var r = 0, o = n; r < o.length; r++) {
                      var s = o[r],
                        l = a ? this._getPaintPasses(s, a) : [],
                        d = i({}, e, { drawPhase: s });
                      l.forEach(function(t) {
                        return t.preRender(e, e.rendererInfo);
                      });
                      for (var u = 0, f = t; u < f.length; u++)
                        f[u].doRender(d);
                      l.reverse().forEach(function(t) {
                        return t.postRender(e, e.rendererInfo);
                      });
                    }
                    e.context.setStencilTestEnabled(!1);
                  }),
                  (e.prototype._debugTiles = function(e, t) {
                    n("esri-feature-tiles-debug") &&
                      this._drawPhases(e, t, [r.WGLDrawPhase.DEBUG]);
                  }),
                  (e.prototype._drawClippingRects = function(e, t) {
                    if (0 !== t.length) {
                      var i = e.context;
                      i.setDepthWriteEnabled(!1),
                        i.setDepthTestEnabled(!1),
                        i.setStencilTestEnabled(!0),
                        i.setBlendingEnabled(!1),
                        i.setColorMask(!1, !1, !1, !1),
                        i.setStencilOp(7680, 7680, 7681),
                        i.setClearStencil(0),
                        i.clear(i.gl.STENCIL_BUFFER_BIT),
                        i.setStencilWriteMask(255);
                      for (var n = 0, a = t.length; n < t.length; n++, a--) {
                        var o = t[n];
                        o.attached && (o.stencilRef = a);
                      }
                      this._drawPhases(e, t, [r.WGLDrawPhase.CLIP]),
                        e.context.setColorMask(!0, !0, !0, !0);
                    }
                  }),
                  e
                );
              })();
            t.default = y;
          }.apply(null, n)) || (e.exports = a);
    },
    2102: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (a = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              return function() {};
            })();
            t.default = i;
          }.apply(null, n)) || (e.exports = a);
    },
    2103: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (a = function(e, t) {
            return function(e, t) {
              return (
                (e.geometryType = 3 & t),
                (t >>= 2),
                (e.sdf = 0 != (4 & t)),
                (e.vvSizeMinMaxValue = 0 != (8 & t)),
                (e.vvSizeScaleStops = 0 != (16 & t)),
                (e.vvSizeFieldStops = 0 != (32 & t)),
                (e.vvSizeUnitValue = 0 != (64 & t)),
                (e.vvColor = 0 != (128 & t)),
                (e.vvRotation = 0 != (256 & t)),
                (e.vvOpacity = 0 != (512 & t)),
                (e.visibility = 0 != (1024 & t)),
                (e.pattern = 0 != (2048 & t)),
                (e.heatmap = 0 != (4096 & t)),
                e
              );
            };
          }.apply(null, n)) || (e.exports = a);
    },
    2104: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(12), i(40)]),
        void 0 ===
          (a = function(e, t, i, n) {
            return (function() {
              function e(e, t, i) {
                var a;
                "string" == typeof e
                  ? (a = e)
                  : ((a = e.programNamePrefix),
                    (t = e.shaderSnippetPrefixes),
                    (i = e.baseDefines)),
                  n.assert(t, "you must specify shader snippet prefixes"),
                  n.assert(
                    2 === t.length,
                    "you must specify shader snippet prefixes for vertex and fragment shaders"
                  ),
                  (i && 0 !== i.length) || (i = []),
                  (this.programNamePrefix = a),
                  (this.shaderSnippetPrefixes = t),
                  (this.baseDefines = i),
                  (this.variables = []),
                  (this.sealed = !1);
              }
              return (
                (e.prototype.addDefine = function(e, t, i, a) {
                  n.assert(
                    !this.sealed,
                    "you cannot add another variable after the first program has been generated"
                  ),
                    n.assert(e, "you must specify a program name suffix"),
                    this.variables.push({
                      programNameSuffixes: ["", e],
                      shaderNameSuffixes: a || e,
                      defineStr: t,
                      affectsShaderTypes: i || [!0, !0]
                    });
                }),
                (e.prototype.addBinaryShaderSnippetSuffix = function(e, t, i) {
                  n.assert(
                    !this.sealed,
                    "you cannot add another variable after the first program has been generated"
                  ),
                    n.assert(e, "you must specify a program name suffix"),
                    this.variables.push({
                      programNameSuffixes: ["", e],
                      shaderSnippetSuffixes: ["", t],
                      affectsShaderTypes: i || [!0, !0]
                    });
                }),
                (e.prototype.addNaryShaderSnippetSuffix = function(e, t) {
                  n.assert(
                    !this.sealed,
                    "you cannot add another variable after the first program has been generated"
                  );
                  var i = e.map(function(e) {
                    return (
                      n.assert(
                        null != e.value,
                        "value must always be specified"
                      ),
                      e.value
                    );
                  });
                  this.variables.push({
                    values: i,
                    programNameSuffixes: e.map(function(e, t) {
                      return null != e.programNameSuffix
                        ? e.programNameSuffix
                        : i[t];
                    }),
                    shaderSnippetSuffixes: e.map(function(e, t) {
                      return null != e.shaderSnippetSuffix
                        ? e.shaderSnippetSuffix
                        : i[t];
                    }),
                    affectsShaderTypes: t || [!0, !0]
                  });
                }),
                (e.prototype.getShaderVariation = function(e) {
                  n.assert(
                    e.length === this.variables.length,
                    "you must specify a value for each variable"
                  );
                  for (
                    var t = this.programNamePrefix,
                      a = i.clone(this.shaderSnippetPrefixes),
                      r = i.clone(this.shaderSnippetPrefixes),
                      o = i.clone(this.baseDefines),
                      s = 0;
                    s < this.variables.length;
                    s++
                  ) {
                    var l = this.variables[s],
                      d = e[s],
                      u = void 0;
                    l.values
                      ? ((u = l.values.indexOf(d)),
                        n.assert(
                          u >= 0,
                          "invalid value " + d + " for variable " + s
                        ))
                      : (u = d ? 1 : 0),
                      (t += l.programNameSuffixes[u]);
                    for (var f = 0; f < 2; f++)
                      l.affectsShaderTypes[f] &&
                        (l.shaderSnippetSuffixes &&
                          ((a[f] += l.shaderSnippetSuffixes[u]),
                          (r[f] += l.shaderSnippetSuffixes[u])),
                        l.defineStr &&
                          u &&
                          (o.push(l.defineStr),
                          (r[f] += l.shaderNameSuffixes)));
                  }
                  return {
                    programName: t,
                    shaderSnippetNames: a,
                    shaderNames: r,
                    defines: o
                  };
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2134: function(e, t, i) {
      var n, a;
      (n = [
        i.dj.c(e.i),
        t,
        i(5),
        i(15),
        i(9),
        i(309),
        i(2193),
        i(2194),
        i(2007),
        i(2101),
        i(2078),
        i(190),
        i(163),
        i(181),
        i(310),
        i(77),
        i(433),
        i(93),
        i(72),
        i(819),
        i(91)
      ]),
        void 0 ===
          (a = function(
            e,
            t,
            i,
            n,
            a,
            r,
            o,
            s,
            l,
            d,
            u,
            f,
            _,
            h,
            c,
            p,
            v,
            m,
            V,
            g,
            S
          ) {
            function y(e) {
              return {
                state: e.state,
                pixelRatio: e.pixelRatio,
                stationary: e.stationary
              };
            }
            var x = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg" };
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._clipData = new Float32Array(8)),
                  (t._upperLeft = h.create()),
                  (t._upperRight = h.create()),
                  (t._lowerLeft = h.create()),
                  (t._lowerRight = h.create()),
                  (t._mat2 = _.create()),
                  (t._clipRendererInitialized = !1),
                  (t._contextVersion = null),
                  (t._labelFader = new o.default(t)),
                  t
                );
              }
              return (
                i(t, e),
                Object.defineProperty(t.prototype, "glPainter", {
                  get: function() {
                    return this._painter;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.fadeInLabels = function() {
                  this._labelFader.reset(), this.requestRender();
                }),
                (t.prototype.createElement = function() {
                  var e = document.createElement("canvas");
                  return e.setAttribute("class", "esri-display-object"), e;
                }),
                (t.prototype.setElement = function(e) {
                  this.element = e;
                }),
                (t.prototype.useContextVersion = function(e) {
                  this._renderingContext || (this._contextVersion = e);
                }),
                (t.prototype.attach = function(t) {
                  if (this.attached) return !0;
                  this._resizeCanvas(t);
                  var i = v.createContextOrErrorHTML(
                    this.element,
                    { alpha: !0, antialias: !1, depth: !0, stencil: !0 },
                    this._contextVersion
                  );
                  return (
                    (this._renderingContext = new g(i)),
                    (this._contextVersion = this._renderingContext.contextVersion),
                    (this.attached = !0),
                    (this._cachedRenderParams = y(t)),
                    this._painter ||
                      ((this._painter = new d.default()),
                      this._painter.initialize(this._renderingContext)),
                    e.prototype.attach.call(this, t)
                  );
                }),
                (t.prototype.detach = function(t) {
                  e.prototype.detach.call(this, t),
                    (this._boundFBO = null),
                    this._clipFBO &&
                      (this._clipFBO.dispose(), (this._clipFBO = null)),
                    this._labelsFBO1 &&
                      (this._labelsFBO1.dispose(), (this._labelsFBO1 = null)),
                    this._labelsFBO2 &&
                      (this._labelsFBO2.dispose(), (this._labelsFBO2 = null)),
                    this._blitRenderer &&
                      (this._blitRenderer.dispose(),
                      (this._blitRenderer = null)),
                    this._clipVAO &&
                      (this._clipVAO.dispose(),
                      (this._clipVAO = null),
                      (this._clipVBO = null)),
                    this._painter &&
                      (this._painter.dispose(), (this._painter = null)),
                    this._clipStencilProgram &&
                      (this._clipStencilProgram.dispose(),
                      (this._clipStencilProgram = null)),
                    this._renderingContext &&
                      (this._renderingContext.dispose(),
                      (this._renderingContext = null)),
                    (this._cachedRenderParams = null);
                }),
                (t.prototype.renderChildren = function(e) {
                  var t = this.children;
                  e.drawPhase =
                    l.WGLDrawPhase.FILL |
                    l.WGLDrawPhase.LINE |
                    l.WGLDrawPhase.MARKER |
                    l.WGLDrawPhase.TEXT;
                  for (var i = t.length, a = 0; a < i; a++) {
                    (d = t[a]).attached && this.renderChild(d, e);
                  }
                  if (n("esri-featurelayer-webgl-labeling")) {
                    var r = e.context,
                      o = r.getBoundFramebufferObject();
                    r.bindFramebuffer(this._labelsFBO2);
                    var s = e.stationary;
                    if (
                      (r.setClearColor(0, 0, 0, s ? 0 : 1),
                      r.clear(r.gl.COLOR_BUFFER_BIT),
                      s)
                    ) {
                      (e.drawPhase = l.WGLDrawPhase.LABEL_ALPHA),
                        (e.labelFBO = this._labelsFBO1),
                        (e.labelStep = this._labelFader.step());
                      for (a = 0; a < i; a++) {
                        (d = t[a]).attached && this.renderChild(d, e);
                      }
                    } else this._labelFader.reset();
                    r.bindFramebuffer(o),
                      (e.labelFBO = this._labelsFBO2),
                      (e.drawPhase = l.WGLDrawPhase.LABEL);
                    for (a = 0; a < i; a++) {
                      var d;
                      (d = t[a]).attached && this.renderChild(d, e);
                    }
                    var u = this._labelsFBO2;
                    (this._labelsFBO2 = this._labelsFBO1),
                      (this._labelsFBO1 = u);
                  }
                }),
                (t.prototype.beforeRenderChildren = function(e, t) {
                  var i = t.context,
                    a = t.state,
                    r = t.pixelRatio,
                    o = this._painter;
                  if (o) {
                    i.enforceState(), o.update(a, r);
                    var s = a.width,
                      l = a.height,
                      d = a.rotation;
                    if (
                      ((s = Math.round(s * r)),
                      (l = Math.round(l * r)),
                      (this._boundFBO = i.getBoundFramebufferObject()),
                      !n("esri-featurelayer-webgl-labeling") ||
                        (this._labelsFBO1 &&
                          this._labelsFBO1.width === s &&
                          this._labelsFBO1.height === l) ||
                        (this._labelsFBO1 &&
                          (this._labelsFBO1.dispose(),
                          this._labelsFBO2.dispose()),
                        (this._labelsFBO1 = m.createWithAttachments(
                          i,
                          {
                            target: 3553,
                            pixelFormat: 6408,
                            internalFormat: 6408,
                            dataType: 5121,
                            samplingMode: 9728,
                            wrapMode: 33071,
                            width: s,
                            height: l
                          },
                          { colorTarget: 0, depthStencilTarget: 0 }
                        )),
                        i.bindFramebuffer(this._labelsFBO1),
                        i.setDepthWriteEnabled(!0),
                        i.setStencilWriteMask(255),
                        i.setClearColor(0, 0, 0, 0),
                        i.setClearDepth(1),
                        i.setClearStencil(0),
                        i.clear(
                          i.gl.COLOR_BUFFER_BIT |
                            i.gl.DEPTH_BUFFER_BIT |
                            i.gl.STENCIL_BUFFER_BIT
                        ),
                        i.setDepthWriteEnabled(!1),
                        i.bindFramebuffer(this._boundFBO),
                        (this._labelsFBO2 = m.createWithAttachments(
                          i,
                          {
                            target: 3553,
                            pixelFormat: 6408,
                            internalFormat: 6408,
                            dataType: 5121,
                            samplingMode: 9728,
                            wrapMode: 33071,
                            width: s,
                            height: l
                          },
                          { colorTarget: 0, depthStencilTarget: 0 }
                        ))),
                      !(
                        a.spatialReference &&
                        (a.spatialReference._isWrappable
                          ? a.spatialReference._isWrappable()
                          : a.spatialReference.isWrappable)
                      ))
                    )
                      return void (this._clipFrame = !1);
                    var u = f.toRadian(d),
                      c = Math.abs(Math.cos(u)),
                      p = Math.abs(Math.sin(u)),
                      v = Math.round(s * c + l * p),
                      V = Math.round(a.worldScreenWidth);
                    if (v <= V) return void (this._clipFrame = !1);
                    (this._clipFBO &&
                      this._clipFBO.width === s &&
                      this._clipFBO.height === l) ||
                      (this._clipFBO = new m(i, {
                        colorTarget: 0,
                        depthStencilTarget: 3,
                        width: s,
                        height: l
                      }));
                    var g = 0.5 * s,
                      S = 0.5 * l,
                      y = 1 / s,
                      x = 1 / l,
                      I = 0.5 * V * r,
                      b = 0.5 * (s * p + l * c),
                      T = this._upperLeft,
                      A = this._upperRight,
                      O = this._lowerLeft,
                      w = this._lowerRight;
                    h.set(T, -I, -b),
                      h.set(A, I, -b),
                      h.set(O, -I, b),
                      h.set(w, I, b),
                      _.identity(this._mat2),
                      _.translate(this._mat2, this._mat2, [g, S]),
                      0 !== d && _.rotate(this._mat2, this._mat2, u),
                      h.transformMat2d(T, T, this._mat2),
                      h.transformMat2d(A, A, this._mat2),
                      h.transformMat2d(O, O, this._mat2),
                      h.transformMat2d(w, w, this._mat2);
                    var E = this._clipData;
                    E.set([
                      2 * O[0] * y - 1,
                      2 * (l - O[1]) * x - 1,
                      2 * w[0] * y - 1,
                      2 * (l - w[1]) * x - 1,
                      2 * T[0] * y - 1,
                      2 * (l - T[1]) * x - 1,
                      2 * A[0] * y - 1,
                      2 * (l - A[1]) * x - 1
                    ]),
                      this._clipRendererInitialized ||
                        this._initializeClipRenderer(i),
                      this._clipVBO.setData(E),
                      (this._boundFBO = i.getBoundFramebufferObject()),
                      i.bindFramebuffer(this._clipFBO),
                      i.setDepthWriteEnabled(!0),
                      i.setStencilWriteMask(255),
                      i.setClearColor(0, 0, 0, 0),
                      i.setClearDepth(1),
                      i.setClearStencil(0),
                      i.clear(
                        i.gl.COLOR_BUFFER_BIT |
                          i.gl.DEPTH_BUFFER_BIT |
                          i.gl.STENCIL_BUFFER_BIT
                      ),
                      i.setDepthWriteEnabled(!1),
                      (this._clipFrame = !0);
                  }
                }),
                (t.prototype.afterRenderChildren = function(e, t) {
                  if (this._clipFrame && this._clipRendererInitialized) {
                    var i = this._renderingContext;
                    i.bindFramebuffer(this._boundFBO),
                      (this._boundFBO = null),
                      i.bindVAO(this._clipVAO),
                      i.bindProgram(this._clipStencilProgram),
                      i.setDepthWriteEnabled(!1),
                      i.setDepthTestEnabled(!1),
                      i.setStencilTestEnabled(!0),
                      i.setBlendingEnabled(!1),
                      i.setColorMask(!1, !1, !1, !1),
                      i.setStencilOp(7680, 7680, 7681),
                      i.setStencilWriteMask(255),
                      i.setStencilFunction(519, 1, 255),
                      i.drawElements(4, 6, 5123, 0),
                      i.bindVAO(),
                      i.setColorMask(!0, !0, !0, !0),
                      i.setBlendingEnabled(!0),
                      i.setStencilFunction(514, 1, 255),
                      this._blitRenderer.render(
                        i,
                        this._clipFBO.colorTexture,
                        9728,
                        1
                      ),
                      i.setStencilTestEnabled(!1);
                  }
                }),
                (t.prototype.doRender = function(t) {
                  var i = this.element.style;
                  this.visible
                    ? ((i.display = "block"),
                      (i.opacity = "" + this.opacity),
                      this._resizeCanvas(t),
                      e.prototype.doRender.call(this, t),
                      (this._cachedRenderParams = y(t)))
                    : (i.display = "none");
                }),
                (t.prototype.takeScreenshot = function(e) {
                  if ((void 0 === e && (e = {}), !this._cachedRenderParams))
                    return a.reject();
                  var t = e.pixelRatio || 1;
                  this._cachedRenderParams.pixelRatio = t;
                  var i = Math.round(t * this._cachedRenderParams.state.width),
                    n = Math.round(t * this._cachedRenderParams.state.height),
                    r = { x: 0, y: 0, width: i, height: n },
                    o = { x: 0, y: 0, width: i, height: n },
                    s = e.area;
                  if (
                    (s &&
                      ((r.x = Math.round(t * s.x)),
                      (r.y = Math.round(t * s.y)),
                      (r.width = Math.round(t * s.width)),
                      (r.height = Math.round(t * s.height))),
                    void 0 !== e.width && void 0 !== e.height)
                  ) {
                    var l = e.width / e.height;
                    if (r.height * l < r.width) {
                      var d = r.height * l;
                      (r.x += Math.floor((r.width - d) / 2)),
                        (r.width = Math.floor(d));
                    } else {
                      var u = r.width / l;
                      (r.y += Math.floor((r.height - u) / 2)),
                        (r.height = Math.floor(u));
                    }
                    (o.width = e.width), (o.height = e.height);
                  } else (o.width = r.width), (o.height = r.height);
                  var f = document.createElement("canvas");
                  (f.width = o.width), (f.height = o.height);
                  var _ = f.getContext("2d"),
                    h = new Uint8Array(r.width * r.height * 4),
                    p = this._renderingContext,
                    v = m.create(p, {
                      colorTarget: 1,
                      depthStencilTarget: 3,
                      width: i,
                      height: n
                    });
                  p.bindFramebuffer(v), p.setViewport(0, 0, i, n);
                  var V = this._cachedRenderParams,
                    g = this._renderingContext.gl;
                  if (
                    (this._renderingContext.setClearColor(0, 0, 0, 0),
                    this._renderingContext.setClearDepth(1),
                    this._renderingContext.setClearStencil(0),
                    this._renderingContext.clear(
                      g.COLOR_BUFFER_BIT |
                        g.DEPTH_BUFFER_BIT |
                        g.STENCIL_BUFFER_BIT
                    ),
                    (V.context = this._renderingContext),
                    (V.painter = this._painter),
                    this.beforeRenderChildren(V, V),
                    void 0 !== e.rotation && null !== e.rotation)
                  ) {
                    var S = V.state,
                      y = S.clone();
                    (y.viewpoint.rotation = e.rotation),
                      (V.state = y),
                      this.renderChildren(V),
                      (V.state = S);
                  } else this.renderChildren(V);
                  this.afterRenderChildren(V, V),
                    v.readPixels(
                      r.x,
                      n - (r.y + r.height),
                      r.width,
                      r.height,
                      6408,
                      5121,
                      h
                    ),
                    p.bindFramebuffer();
                  var I = _.getImageData(o.x, o.y, o.width, o.height);
                  if (
                    0 !== r.x ||
                    0 !== r.y ||
                    r.width !== i ||
                    r.height !== n ||
                    0 !== o.x ||
                    0 !== o.y ||
                    o.width !== i ||
                    o.height !== n
                  )
                    c.resampleHermite(
                      h,
                      r.width,
                      r.height,
                      I.data,
                      o.width,
                      o.height,
                      !0
                    );
                  else {
                    for (
                      var b = r.height - 1,
                        T = 0,
                        A = 4 * r.width,
                        O = void 0,
                        w = void 0,
                        E = void 0,
                        z = void 0,
                        L = void 0,
                        M = void 0,
                        C = void 0;
                      T < b;

                    ) {
                      for (M = T * A, C = b * A, O = 0; O < A; O += 4)
                        (w = h[M + O]),
                          (E = h[M + O + 1]),
                          (z = h[M + O + 2]),
                          (L = h[M + O + 3]),
                          (h[M + O] = h[C + O]),
                          (h[M + O + 1] = h[C + O + 1]),
                          (h[M + O + 2] = h[C + O + 2]),
                          (h[M + O + 3] = h[C + O + 3]),
                          (h[C + O] = w),
                          (h[C + O + 1] = E),
                          (h[C + O + 2] = z),
                          (h[C + O + 3] = L);
                      T++, b--;
                    }
                    for (var P = I.data, F = h.length, D = 0; D < F; D++)
                      P[D] = h[D];
                  }
                  var R = I.data,
                    U = R.length;
                  for (D = 0; D < U; D += 4) {
                    if ((L = R[D + 3]) > 0) {
                      var N = L / 255;
                      (w = Math.floor(R[D + 0] / N)),
                        (E = Math.floor(R[D + 1] / N)),
                        (z = Math.floor(R[D + 2] / N));
                      (R[D + 0] = w <= 255 ? w : 255),
                        (R[D + 1] = E <= 255 ? E : 255),
                        (R[D + 2] = z <= 255 ? z : 255);
                    }
                  }
                  _.putImageData(I, o.x, o.y);
                  var B = x[e.format ? e.format.toLowerCase() : "png"],
                    G = {
                      dataURL: f.toDataURL(
                        B,
                        null != e.quality ? e.quality / 100 : 1
                      ),
                      x: o.x,
                      y: o.y,
                      width: o.width,
                      height: o.height
                    };
                  return e.returnByteBuffer && (G.data = h), a.resolve(G);
                }),
                (t.prototype.prepareChildrenRenderParameters = function(e) {
                  if (!this.attached || !this._renderingContext) return null;
                  var t = y(e),
                    i = this._renderingContext,
                    n = i.gl;
                  return (
                    i.setDepthWriteEnabled(!0),
                    i.setStencilWriteMask(255),
                    i.setClearColor(0, 0, 0, 0),
                    i.setClearDepth(1),
                    i.setClearStencil(0),
                    i.clear(
                      n.COLOR_BUFFER_BIT |
                        n.DEPTH_BUFFER_BIT |
                        n.STENCIL_BUFFER_BIT
                    ),
                    i.setViewport(
                      0,
                      0,
                      this.element.width,
                      this.element.height
                    ),
                    i.setDepthWriteEnabled(!1),
                    (t.context = i),
                    (t.painter = this._painter),
                    t
                  );
                }),
                (t.prototype.attachChild = function(e, t) {
                  return e.attach(t);
                }),
                (t.prototype.detachChild = function(e, t) {
                  return e.detach(t);
                }),
                (t.prototype.renderChild = function(e, t) {
                  return e.processRender(t);
                }),
                (t.prototype._resizeCanvas = function(e) {
                  var t = this.element,
                    i = t.style,
                    n = e.state,
                    a = e.pixelRatio,
                    r = Math.round(n.width * a),
                    o = Math.round(n.height * a);
                  (t.width === r && t.height === o) ||
                    ((t.width = r), (t.height = o)),
                    (i.width = n.width + "px"),
                    (i.height = n.height + "px");
                }),
                (t.prototype._initializeClipRenderer = function(e) {
                  if (this._clipRendererInitialized) return !0;
                  this._blitRenderer = new s();
                  var t = { a_pos: 0 },
                    i = new V(e, u.stencilVS, u.stencilFS, t);
                  if (!i) return !1;
                  var n = p.createVertex(e, 35040, 32),
                    a = new Uint16Array([0, 1, 2, 2, 1, 3]),
                    r = p.createIndex(e, 35044, a),
                    o = new S(
                      e,
                      t,
                      {
                        geometry: [
                          {
                            name: "a_pos",
                            count: 2,
                            type: 5126,
                            offset: 0,
                            stride: 8,
                            normalized: !1,
                            divisor: 0
                          }
                        ]
                      },
                      { geometry: n },
                      r
                    );
                  return (
                    (this._clipStencilProgram = i),
                    (this._clipVBO = n),
                    (this._clipVAO = o),
                    (this._clipRendererInitialized = !0),
                    !0
                  );
                }),
                t
              );
            })(r);
          }.apply(null, n)) || (e.exports = a);
    },
    2193: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (a = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e(e, t) {
                void 0 === t && (t = 250),
                  (this.duration = t),
                  (this._lastTime = 0),
                  (this._startTime = 0),
                  (this._parent = e);
              }
              return (
                (e.prototype.reset = function() {
                  this._lastTime, (this._startTime = performance.now());
                }),
                (e.prototype.step = function() {
                  var e = performance.now();
                  if (0 === this._lastTime)
                    return (
                      (this._lastTime = e), this._parent.requestRender(), 0
                    );
                  var t = e - this._lastTime;
                  this._lastTime = e;
                  var i = 2 * this.duration;
                  return (
                    e - this._startTime < i && this._parent.requestRender(),
                    t / this.duration
                  );
                }),
                e
              );
            })();
            t.default = i;
          }.apply(null, n)) || (e.exports = a);
    },
    2194: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2078), i(77), i(72), i(91)]),
        void 0 ===
          (a = function(e, t, i, n, a, r) {
            return (function() {
              function e() {
                this._initialized = !1;
              }
              return (
                (e.prototype.dispose = function() {
                  this._program &&
                    (this._program.dispose(), (this._program = null)),
                    this._vertexArrayObject &&
                      (this._vertexArrayObject.dispose(),
                      (this._vertexArrayObject = null));
                }),
                (e.prototype.render = function(e, t, i, n) {
                  e &&
                    (this._initialized || this._initialize(e),
                    e.setBlendFunctionSeparate(1, 771, 1, 771),
                    e.bindVAO(this._vertexArrayObject),
                    e.bindProgram(this._program),
                    t.setSamplingMode(i),
                    e.bindTexture(t, 0),
                    this._program.setUniform1i("u_tex", 0),
                    this._program.setUniform1f("u_opacity", n),
                    e.drawArrays(5, 0, 4),
                    e.bindVAO());
                }),
                (e.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = { a_pos: 0, a_tex: 1 },
                    o = new a(e, i.bitblitVS, i.bitblitFS, t);
                  if (!o) return !1;
                  var s = new Int8Array(16);
                  (s[0] = -1),
                    (s[1] = -1),
                    (s[2] = 0),
                    (s[3] = 0),
                    (s[4] = 1),
                    (s[5] = -1),
                    (s[6] = 1),
                    (s[7] = 0),
                    (s[8] = -1),
                    (s[9] = 1),
                    (s[10] = 0),
                    (s[11] = 1),
                    (s[12] = 1),
                    (s[13] = 1),
                    (s[14] = 1),
                    (s[15] = 1);
                  var l = new r(
                    e,
                    t,
                    {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5120,
                          offset: 0,
                          stride: 4,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_tex",
                          count: 2,
                          type: 5120,
                          offset: 2,
                          stride: 4,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    },
                    { geometry: n.createVertex(e, 35044, s) }
                  );
                  return (
                    (this._program = o),
                    (this._vertexArrayObject = l),
                    (this._initialized = !0),
                    !0
                  );
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2195: function(e, t) {
      e.exports =
        '<snippets>\n  <snippet name="backgroundVS">\n  <![CDATA[\n    attribute vec2 a_pos;\n\n    uniform highp mat4 u_transformMatrix;\n    uniform mediump vec2 u_normalized_origin;\n    uniform mediump float u_coord_range;\n    uniform mediump float u_depth;\n\n    void main() {\n      gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(u_coord_range * a_pos, 0.0, 1.0);\n    }\n  ]]>\n  </snippet>\n\n  <snippet name="backgroundFS">\n  <![CDATA[\n    uniform lowp vec4 u_color;\n    void main() {\n      gl_FragColor = u_color;\n    }\n  ]]>\n  </snippet>\n</snippets>\n';
    },
    2196: function(e, t) {
      e.exports =
        '<snippets>\n  <snippet name="bitblitVS">\n  <![CDATA[\n    attribute vec2 a_pos;\n    attribute vec2 a_tex;\n\n    varying mediump vec2 v_uv;\n\n    void main(void) {\n      gl_Position = vec4(a_pos, 0.0, 1.0);\n      v_uv = a_tex;\n    }\n  ]]>\n  </snippet>\n\n  <snippet name="bitblitFS">\n  <![CDATA[\n    \tuniform lowp sampler2D u_tex;\n      uniform lowp float u_opacity;\n\n      varying mediump vec2 v_uv;\n\n      void main() {\n        lowp vec4 color = texture2D(u_tex, v_uv);\n\n        // Note: output in pre-multiplied alpha for correct alpha compositing\n        gl_FragColor = color *  u_opacity;\n      }\n  ]]>\n  </snippet>\n</snippets>\n';
    },
    2197: function(e, t) {
      e.exports =
        '<snippets>\n  <snippet name="stencilVS">\n  <![CDATA[\n    attribute vec2 a_pos;\n\n    void main() {\n      gl_Position = vec4(a_pos, 0.0, 1.0);\n    }\n  ]]>\n  </snippet>\n\n  <snippet name="stencilFS">\n  <![CDATA[\n    void main() {\n      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n    }\n  ]]>\n  </snippet>\n</snippets>\n';
    },
    2198: function(e, t, i) {
      var n, a;
      (n = [
        i.dj.c(e.i),
        t,
        i(5),
        i(2043),
        i(2102),
        i(2078),
        i(772),
        i(77),
        i(72),
        i(50),
        i(91)
      ]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o, s, l, d, u) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var f = (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t._initialized = !1),
                  (t._maxWidth = 0),
                  (t._color = new Float32Array([1, 0, 0, 1])),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.dispose = function() {
                  this._outlineProgram &&
                    (this._outlineProgram.dispose(),
                    (this._outlineProgram = null)),
                    this._tileInfoProgram &&
                      (this._tileInfoProgram.dispose(),
                      (this._tileInfoProgram = null)),
                    this._outlineVertexArrayObject &&
                      (this._outlineVertexArrayObject.dispose(),
                      (this._outlineVertexArrayObject = null)),
                    this._tileInfoVertexArrayObject &&
                      (this._tileInfoVertexArrayObject.dispose(),
                      (this._tileInfoVertexArrayObject = null)),
                    (this._canvas = null);
                }),
                (t.prototype.draw = function(e, t) {
                  var i = e.context;
                  if (t.status !== o.TileStatus.INITIALIZED) {
                    this._initialized || this._initialize(i),
                      i.bindVAO(this._outlineVertexArrayObject),
                      i.bindProgram(this._outlineProgram),
                      this._outlineProgram.setUniformMatrix4fv(
                        "u_transformMatrix",
                        t.tileTransform.transform
                      ),
                      this._outlineProgram.setUniform2fv(
                        "u_normalized_origin",
                        t.tileTransform.displayCoord
                      ),
                      this._outlineProgram.setUniform1f("u_coord_range", 512),
                      this._outlineProgram.setUniform1f("u_depth", 0),
                      this._outlineProgram.setUniform4fv(
                        "u_color",
                        this._color
                      ),
                      i.setLineWidth(2),
                      i.drawArrays(3, 0, 4),
                      i.bindVAO();
                    var n = this._getTexture(i, t);
                    n &&
                      (i.bindVAO(this._tileInfoVertexArrayObject),
                      i.bindProgram(this._tileInfoProgram),
                      i.bindTexture(n, 0),
                      this._tileInfoProgram.setUniformMatrix4fv(
                        "u_transformMatrix",
                        t.tileTransform.transform
                      ),
                      this._tileInfoProgram.setUniform2fv(
                        "u_normalized_origin",
                        t.tileTransform.displayCoord
                      ),
                      this._tileInfoProgram.setUniform1f("u_depth", 0),
                      this._tileInfoProgram.setUniform1f("u_coord_ratio", 1),
                      this._tileInfoProgram.setUniform2f("u_delta", 8, 8),
                      this._tileInfoProgram.setUniform2f(
                        "u_dimensions",
                        n.descriptor.width,
                        n.descriptor.height
                      ),
                      i.drawArrays(5, 0, 4),
                      i.bindVAO());
                  }
                }),
                (t.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = { a_pos: 0 },
                    i = new l(e, r.backgroundVS, r.backgroundFS, t),
                    n = new l(e, r.tileInfoVS, r.tileInfoFS, t),
                    a = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5120,
                          offset: 0,
                          stride: 2,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    },
                    o = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]),
                    d = s.createVertex(e, 35044, o),
                    f = new u(e, t, a, { geometry: d }),
                    _ = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]),
                    h = s.createVertex(e, 35044, _),
                    c = new u(e, t, a, { geometry: h });
                  return (
                    (this._outlineProgram = i),
                    (this._tileInfoProgram = n),
                    (this._outlineVertexArrayObject = f),
                    (this._tileInfoVertexArrayObject = c),
                    (this._initialized = !0),
                    !0
                  );
                }),
                (t.prototype._getTexture = function(e, t) {
                  if (t.texture) return t.texture;
                  this._canvas ||
                    ((this._canvas = document.createElement("canvas")),
                    this._canvas.setAttribute("id", "canvas2d"),
                    this._canvas.setAttribute("width", "256"),
                    this._canvas.setAttribute("height", "32"),
                    this._canvas.setAttribute("style", "display:none"));
                  var i = t.key.id,
                    a = this._canvas.getContext("2d");
                  (a.font = "24px sans-serif"),
                    (a.textAlign = "left"),
                    (a.textBaseline = "middle");
                  var r = a.measureText(i),
                    o = Math.pow(2, Math.ceil(n.log2(r.width + 2)));
                  return (
                    o > this._maxWidth && (this._maxWidth = o),
                    a.clearRect(0, 0, this._maxWidth, 32),
                    (a.fillStyle = "blue"),
                    a.fillText(i, 0, 16),
                    (t.texture = new d(
                      e,
                      {
                        target: 3553,
                        pixelFormat: 6408,
                        dataType: 5121,
                        samplingMode: 9728
                      },
                      this._canvas
                    )),
                    t.texture
                  );
                }),
                t
              );
            })(a.default);
            t.default = f;
          }.apply(null, n)) || (e.exports = a);
    },
    2199: function(e, t, i) {
      var n, a;
      (n = [
        i.dj.c(e.i),
        t,
        i(2007),
        i(2079),
        i(2202),
        i(2200),
        i(2204),
        i(2206),
        i(2208),
        i(2035)
      ]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o, s, l, d) {
            return (function() {
              function e() {
                (this._programRep = new Map()), (this.isInitialize = !1);
              }
              return (
                (e.prototype.dispose = function() {
                  this._fillShaderVariations &&
                    (this._fillShaderVariations.dispose(),
                    (this._fillShaderVariations = null)),
                    this._lineShaderVariations &&
                      (this._lineShaderVariations.dispose(),
                      (this._lineShaderVariations = null)),
                    this._iconShaderVariations &&
                      (this._iconShaderVariations.dispose(),
                      (this._iconShaderVariations = null)),
                    this._textShaderVariations &&
                      (this._textShaderVariations.dispose(),
                      (this._textShaderVariations = null)),
                    0 !== this._programRep.size &&
                      (this._programRep.forEach(function(e) {
                        return e.dispose();
                      }),
                      this._programRep.clear());
                }),
                (e.prototype.initialize = function(e) {
                  if (!this.isInitialize) {
                    var t = new d("label", ["labelVS", "labelFS"], [], o, e);
                    t.addDefine("ID", "ID", [!0, !0], "ID"),
                      t.addDefine(
                        "HIGHLIGHT",
                        "HIGHLIGHT",
                        [!1, !1],
                        "HIGHLIGHT"
                      ),
                      t.addDefine("SDF", "SDF", [!1, !1], "SDF"),
                      t.addDefine(
                        "VV_SIZE_MIN_MAX_VALUE",
                        "VV_SIZE_MIN_MAX_VALUE",
                        [!1, !1],
                        "VV_SIZE_MIN_MAX_VALUE"
                      ),
                      t.addDefine(
                        "VV_SIZE_SCALE_STOPS",
                        "VV_SIZE_SCALE_STOPS",
                        [!1, !1],
                        "VV_SIZE_SCALE_STOPS"
                      ),
                      t.addDefine(
                        "VV_SIZE_FIELD_STOPS",
                        "VV_SIZE_FIELD_STOPS",
                        [!1, !1],
                        "VV_SIZE_FIELD_STOPS"
                      ),
                      t.addDefine(
                        "VV_SIZE_UNIT_VALUE",
                        "VV_SIZE_UNIT_VALUE",
                        [!1, !1],
                        "VV_SIZE_UNIT_VALUE"
                      ),
                      t.addDefine("VV_COLOR", "VV_COLOR", [!0, !1], "VV_COLOR"),
                      t.addDefine(
                        "VV_ROTATION",
                        "VV_ROTATION",
                        [!1, !1],
                        "VV_ROTATION"
                      ),
                      t.addDefine(
                        "VV_OPACITY",
                        "VV_OPACITY",
                        [!0, !1],
                        "VV_OPACITY"
                      ),
                      t.addDefine(
                        "VERTEX_VISIBILITY",
                        "VERTEX_VISIBILITY",
                        [!1, !1],
                        "VERTEX_VISIBILITY"
                      ),
                      t.addDefine("PATTERN", "PATTERN", [!1, !1], "PATTERN"),
                      t.addDefine("HEATMAP", "HEATMAP", [!1, !1], "HEATMAP");
                    var i = new d("text", ["textVS", "textFS"], [], l, e);
                    i.addDefine("ID", "ID", [!0, !0], "ID"),
                      i.addDefine(
                        "HIGHLIGHT",
                        "HIGHLIGHT",
                        [!1, !1],
                        "HIGHLIGHT"
                      ),
                      i.addDefine("SDF", "SDF", [!1, !1], "SDF"),
                      i.addDefine(
                        "VV_SIZE_MIN_MAX_VALUE",
                        "VV_SIZE_MIN_MAX_VALUE",
                        [!0, !1],
                        "VV_SIZE_MIN_MAX_VALUE"
                      ),
                      i.addDefine(
                        "VV_SIZE_SCALE_STOPS",
                        "VV_SIZE_SCALE_STOPS",
                        [!0, !1],
                        "VV_SIZE_SCALE_STOPS"
                      ),
                      i.addDefine(
                        "VV_SIZE_FIELD_STOPS",
                        "VV_SIZE_FIELD_STOPS",
                        [!0, !1],
                        "VV_SIZE_FIELD_STOPS"
                      ),
                      i.addDefine(
                        "VV_SIZE_UNIT_VALUE",
                        "VV_SIZE_UNIT_VALUE",
                        [!0, !1],
                        "VV_SIZE_UNIT_VALUE"
                      ),
                      i.addDefine("VV_COLOR", "VV_COLOR", [!0, !1], "VV_COLOR"),
                      i.addDefine(
                        "VV_ROTATION",
                        "VV_ROTATION",
                        [!0, !1],
                        "VV_ROTATION"
                      ),
                      i.addDefine(
                        "VV_OPACITY",
                        "VV_OPACITY",
                        [!0, !1],
                        "VV_OPACITY"
                      ),
                      i.addDefine(
                        "VERTEX_VISIBILITY",
                        "VERTEX_VISIBILITY",
                        [!1, !1],
                        "VERTEX_VISIBILITY"
                      ),
                      i.addDefine("PATTERN", "PATTERN", [!1, !1], "PATTERN"),
                      i.addDefine("HEATMAP", "HEATMAP", [!1, !1], "HEATMAP");
                    var n = new d("icon", ["iconVS", "iconFS"], [], r, e);
                    n.addDefine("ID", "ID", [!0, !0], "ID"),
                      n.addDefine(
                        "HIGHLIGHT",
                        "HIGHLIGHT",
                        [!0, !0],
                        "HIGHLIGHT"
                      ),
                      n.addDefine("SDF", "SDF", [!0, !0], "SDF"),
                      n.addDefine(
                        "VV_SIZE_MIN_MAX_VALUE",
                        "VV_SIZE_MIN_MAX_VALUE",
                        [!0, !1],
                        "VV_SIZE_MIN_MAX_VALUE"
                      ),
                      n.addDefine(
                        "VV_SIZE_SCALE_STOPS",
                        "VV_SIZE_SCALE_STOPS",
                        [!0, !1],
                        "VV_SIZE_SCALE_STOPS"
                      ),
                      n.addDefine(
                        "VV_SIZE_FIELD_STOPS",
                        "VV_SIZE_FIELD_STOPS",
                        [!0, !1],
                        "VV_SIZE_FIELD_STOPS"
                      ),
                      n.addDefine(
                        "VV_SIZE_UNIT_VALUE",
                        "VV_SIZE_UNIT_VALUE",
                        [!0, !1],
                        "VV_SIZE_UNIT_VALUE"
                      ),
                      n.addDefine("VV_COLOR", "VV_COLOR", [!0, !1], "VV_COLOR"),
                      n.addDefine(
                        "VV_ROTATION",
                        "VV_ROTATION",
                        [!0, !1],
                        "VV_ROTATION"
                      ),
                      n.addDefine(
                        "VV_OPACITY",
                        "VV_OPACITY",
                        [!0, !1],
                        "VV_OPACITY"
                      ),
                      n.addDefine(
                        "VERTEX_VISIBILITY",
                        "VERTEX_VISIBILITY",
                        [!1, !1],
                        "VERTEX_VISIBILITY"
                      ),
                      n.addDefine("PATTERN", "PATTERN", [!0, !0], "PATTERN"),
                      n.addDefine("HEATMAP", "HEATMAP", [!0, !0], "HEATMAP");
                    var u = new d("fill", ["fillVS", "fillFS"], [], a, e);
                    u.addDefine("ID", "ID", [!0, !0], "ID"),
                      u.addDefine(
                        "HIGHLIGHT",
                        "HIGHLIGHT",
                        [!0, !0],
                        "HIGHLIGHT"
                      ),
                      u.addDefine("SDF", "SDF", [!1, !1], "SDF"),
                      u.addDefine(
                        "VV_SIZE_MIN_MAX_VALUE",
                        "VV_SIZE_MIN_MAX_VALUE",
                        [!1, !1],
                        "VV_SIZE_MIN_MAX_VALUE"
                      ),
                      u.addDefine(
                        "VV_SIZE_SCALE_STOPS",
                        "VV_SIZE_SCALE_STOPS",
                        [!1, !1],
                        "VV_SIZE_SCALE_STOPS"
                      ),
                      u.addDefine(
                        "VV_SIZE_FIELD_STOPS",
                        "VV_SIZE_FIELD_STOPS",
                        [!1, !1],
                        "VV_SIZE_FIELD_STOPS"
                      ),
                      u.addDefine(
                        "VV_SIZE_UNIT_VALUE",
                        "VV_SIZE_UNIT_VALUE",
                        [!1, !1],
                        "VV_SIZE_UNIT_VALUE"
                      ),
                      u.addDefine("VV_COLOR", "VV_COLOR", [!0, !1], "VV_COLOR"),
                      u.addDefine(
                        "VV_ROTATION",
                        "VV_ROTATION",
                        [!1, !1],
                        "VV_ROTATION"
                      ),
                      u.addDefine(
                        "VV_OPACITY",
                        "VV_OPACITY",
                        [!0, !1],
                        "VV_OPACITY"
                      ),
                      u.addDefine(
                        "VERTEX_VISIBILITY",
                        "VERTEX_VISIBILITY",
                        [!1, !1],
                        "VERTEX_VISIBILITY"
                      ),
                      u.addDefine("PATTERN", "PATTERN", [!0, !0], "PATTERN"),
                      u.addDefine("HEATMAP", "HEATMAP", [!1, !1], "HEATMAP");
                    var f = new d("line", ["lineVS", "lineFS"], [], s, e);
                    f.addDefine("ID", "ID", [!0, !0], "ID"),
                      f.addDefine(
                        "HIGHLIGHT",
                        "HIGHLIGHT",
                        [!0, !0],
                        "HIGHLIGHT"
                      ),
                      f.addDefine("SDF", "SDF", [!0, !0], "SDF"),
                      f.addDefine(
                        "VV_SIZE_MIN_MAX_VALUE",
                        "VV_SIZE_MIN_MAX_VALUE",
                        [!0, !1],
                        "VV_SIZE_MIN_MAX_VALUE"
                      ),
                      f.addDefine(
                        "VV_SIZE_SCALE_STOPS",
                        "VV_SIZE_SCALE_STOPS",
                        [!0, !1],
                        "VV_SIZE_SCALE_STOPS"
                      ),
                      f.addDefine(
                        "VV_SIZE_FIELD_STOPS",
                        "VV_SIZE_FIELD_STOPS",
                        [!0, !1],
                        "VV_SIZE_FIELD_STOPS"
                      ),
                      f.addDefine(
                        "VV_SIZE_UNIT_VALUE",
                        "VV_SIZE_UNIT_VALUE",
                        [!0, !1],
                        "VV_SIZE_UNIT_VALUE"
                      ),
                      f.addDefine("VV_COLOR", "VV_COLOR", [!0, !1], "VV_COLOR"),
                      f.addDefine(
                        "VV_ROTATION",
                        "VV_ROTATION",
                        [!0, !1],
                        "VV_ROTATION"
                      ),
                      f.addDefine(
                        "VV_OPACITY",
                        "VV_OPACITY",
                        [!0, !1],
                        "VV_OPACITY"
                      ),
                      f.addDefine(
                        "VERTEX_VISIBILITY",
                        "VERTEX_VISIBILITY",
                        [!1, !1],
                        "VERTEX_VISIBILITY"
                      ),
                      f.addDefine("PATTERN", "PATTERN", [!0, !0], "PATTERN"),
                      f.addDefine("HEATMAP", "HEATMAP", [!1, !1], "HEATMAP"),
                      (this._labelShaderVariations = t),
                      (this._textShaderVariations = i),
                      (this._fillShaderVariations = u),
                      (this._iconShaderVariations = n),
                      (this._lineShaderVariations = f),
                      (this.isInitialize = !0);
                  }
                }),
                (e.prototype.getProgram = function(e, t, a) {
                  if (
                    ((e |= t === i.WGLDrawPhase.HITTEST ? 8 : 0),
                    (e |= t === i.WGLDrawPhase.HIGHLIGHT ? 16 : 0),
                    this._programRep[e])
                  )
                    return this._programRep[e];
                  if (
                    !(
                      this._iconShaderVariations &&
                      this._fillShaderVariations &&
                      this._lineShaderVariations &&
                      this._labelShaderVariations
                    )
                  )
                    return null;
                  var r,
                    o = n.getMaterialVariations(e);
                  switch (o.geometryType) {
                    case i.WGLGeometryType.MARKER:
                      r = this._iconShaderVariations.getProgram(
                        o.variations,
                        null,
                        null,
                        a
                      );
                      break;
                    case i.WGLGeometryType.TEXT:
                      r = this._textShaderVariations.getProgram(
                        o.variations,
                        null,
                        null,
                        a
                      );
                      break;
                    case i.WGLGeometryType.LABEL:
                      r = this._labelShaderVariations.getProgram(
                        o.variations,
                        null,
                        null,
                        a
                      );
                      break;
                    case i.WGLGeometryType.FILL:
                      r = this._fillShaderVariations.getProgram(
                        o.variations,
                        null,
                        null,
                        a
                      );
                      break;
                    case i.WGLGeometryType.LINE:
                      r = this._lineShaderVariations.getProgram(
                        o.variations,
                        null,
                        null,
                        a
                      );
                  }
                  return r && (this._programRep[e] = r), r;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2200: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2201), i(2034)]),
        void 0 ===
          (a = function(e, t, i, n) {
            var a = new n();
            return n.parse(i, a), a;
          }.apply(null, n)) || (e.exports = a);
    },
    2201: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name="myShaderVS">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link esri/views/2d/engine/webgl/glShaderSnippets glShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require("dojo/text!...").\n--\x3e\n<snippets>\n\n  <snippet name="rgba2float"><![CDATA[\n    // TODO consider moving this snippet into a util.xml file\n\n    // Factors to convert rgba back to float\n    const vec4 rgba2float_factors = vec4(\n        255.0 / (256.0),\n        255.0 / (256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n      );\n\n    float rgba2float(vec4 rgba) {\n      // Convert components from 0->1 back to 0->255 and then\n      // add the components together with their corresponding\n      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n      return dot(rgba, rgba2float_factors);\n    }\n  ]]></snippet>\n\n  <snippet name="iconVVUniformsVS">\n    <![CDATA[\n  #if defined(VV_COLOR) || defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n    attribute vec4 a_vv;\n  #endif // VV_COLOR || VV_SIZE_MIN_MAX_VALUE || VV_SIZE_SCALE_STOPS || VV_SIZE_FIELD_STOPS || VV_SIZE_UNIT_VALUE || VV_OPACITY || VV_ROTATION\n\n  #ifdef VV_COLOR\n    uniform float u_vvColorValues[8];\n    uniform vec4 u_vvColors[8];\n  #endif // VV_COLOR\n\n  #ifdef VV_SIZE_MIN_MAX_VALUE\n    uniform vec4 u_vvSizeMinMaxValue;\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_SCALE_STOPS\n    uniform float u_vvSizeScaleStopsValue;\n  #endif // VV_SIZE_SCALE_STOPS\n\n  #ifdef VV_SIZE_FIELD_STOPS\n    uniform float u_vvSizeFieldStopsValues[6];\n    uniform float u_vvSizeFieldStopsSizes[6];\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n    uniform float u_vvSizeUnitValueWorldToPixelsRatio;\n  #endif // VV_SIZE_UNIT_VALUE\n\n  #ifdef VV_OPACITY\n    uniform float u_vvOpacityValues[8];\n    uniform float u_vvOpacities[8];\n  #endif // VV_OPACITY\n\n  #ifdef VV_ROTATION\n    uniform lowp float u_vvRotationType;\n  #endif // VV_ROTATION\n\n    ]]>\n  </snippet>\n\n  <snippet name="iconVVFunctions">\n    <![CDATA[\n    bool isNan(float val) {\n      return !( val < 0.0 || 0.0 < val || val == 0.0 );\n    }\n\n  #ifdef VV_SIZE_MIN_MAX_VALUE\n    float getVVMinMaxSize(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) {\n        return fallback;\n      }\n\n      // we need to multiply by 8 in order to translate to tile coordinates\n      float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\n      interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\n      return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);\n    }\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_FIELD_STOPS\n    const int VV_SIZE_N = 6;\n    float getVVStopsSize(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) {\n        return fallback;\n      }\n\n      if (sizeValue <= u_vvSizeFieldStopsValues[0]) {\n        return u_vvSizeFieldStopsSizes[0];\n      }\n\n      for (int i = 1; i < VV_SIZE_N; ++i) {\n        if (u_vvSizeFieldStopsValues[i] >= sizeValue) {\n          float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\n          return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n        }\n      }\n\n      return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n    }\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n    float getVVUnitValue(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) {\n        return fallback;\n      }\n\n      return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n    }\n  #endif // VV_SIZE_UNIT_VALUE\n\n  #ifdef VV_OPACITY\n    const int VV_OPACITY_N = 8;\n    float getVVOpacity(float opacityValue) {\n      if (isNan(opacityValue)) {\n        return 1.0;\n      }\n\n      if (opacityValue <= u_vvOpacityValues[0]) {\n        return u_vvOpacities[0];\n      }\n\n      for (int i = 1; i < VV_OPACITY_N; ++i) {\n        if (u_vvOpacityValues[i] >= opacityValue) {\n          float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\n          return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n        }\n      }\n\n      return u_vvOpacities[VV_OPACITY_N - 1];\n    }\n  #endif // VV_OPACITY\n\n  #ifdef VV_ROTATION\n    mat4 getVVRotation(float rotationValue) {\n      // YF TODO: if the symbol has rotation we need to combine the symbo\'s rotation with the VV one\n      if (isNan(rotationValue)) {\n        return mat4(1, 0, 0, 0,\n                    0, 1, 0, 0,\n                    0, 0, 1, 0,\n                    0, 0, 0, 1);\n      }\n\n      float rotation = rotationValue;\n      if (u_vvRotationType == 1.0) {\n        rotation = 90.0 - rotation;\n      }\n\n      float angle = C_DEG_TO_RAD * rotation;\n\n      float sinA = sin(angle);\n      float cosA = cos(angle);\n\n      return mat4(cosA, sinA, 0, 0,\n                  -sinA,  cosA, 0, 0,\n                  0,     0, 1, 0,\n                  0,     0, 0, 1);\n    }\n  #endif // VV_ROTATION\n\n  #ifdef VV_COLOR\n    const int VV_COLOR_N = 8;\n\n    vec4 getVVColor(float colorValue, vec4 fallback) {\n      if (isNan(colorValue)) {\n        return fallback;\n      }\n\n      if (colorValue <= u_vvColorValues[0]) {\n        return u_vvColors[0];\n      }\n\n      for (int i = 1; i < VV_COLOR_N; ++i) {\n        if (u_vvColorValues[i] >= colorValue) {\n          float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\n          return mix(u_vvColors[i-1], u_vvColors[i], f);\n        }\n      }\n\n      return u_vvColors[VV_COLOR_N - 1];\n    }\n  #endif // VV_COLOR\n    ]]>\n  </snippet>\n\n\n  <snippet name="iconVS">\n  <![CDATA[\n    precision mediump float;\n\n    //const float C_256_TO_RAD = 3.14159265359 / 128.0;\n    const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\n\n    // per quad (instance) attributes (20 bytes ==> equivalent of 5 bytes per vertex)\n    attribute vec2 a_pos;\n    attribute vec4 a_vertexOffsetAndTex;\n    attribute vec4 a_id; // since we need to render the Id as a color we need to break it into RGBA components. so just like a color, the Id is normalized.\n    attribute vec4 a_color;\n    attribute vec4 a_outlineColor;\n    attribute vec4 a_sizeAndOutlineWidth;\n\n    // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n    // relative to the tile\'s upper left corner\n    // the extrusion vector.\n    uniform highp mat4 u_transformMatrix;\n    // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n    uniform highp mat4 u_extrudeMatrix;\n    // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n    uniform highp vec2 u_normalized_origin;\n\n    // the size of the mosaic given in pixels\n    uniform vec2 u_mosaicSize;\n\n    // the opacity of the layer given by the painter\n    uniform mediump float u_opacity;\n\n    // the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\n    varying mediump vec2 v_tex;\n    // the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n    // opacity of the layer given by the painter\n    varying lowp float v_transparency;\n    // the of the icon given in pixels\n    varying mediump vec2 v_size;\n\n    // icon color. If is a picture-marker it is used to tint the texture color\n    varying lowp vec4 v_color;\n\n #ifdef SDF\n    varying lowp vec4 v_outlineColor;\n    varying mediump float v_outlineWidth;\n #endif // SDF\n\n #ifdef ID\n    varying highp vec4 v_id;\n #endif // ID\n\n #ifdef HEATMAP\n    attribute float a_heatmapWeight;\n    varying mediump float v_heatmapWeight;\n #endif // HEATMAP\n\n    // import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)\n    $iconVVUniformsVS\n    $iconVVFunctions\n\n    void main()\n    {\n      vec2 a_offset = a_vertexOffsetAndTex.xy;\n      vec2 a_tex = a_vertexOffsetAndTex.zw;\n      vec2 a_size = a_sizeAndOutlineWidth.xy;\n\n      // default values (we need them for the variations to come)\n      float a_angle = 0.0;\n      float delta_z = 0.0;\n      float depth = 0.0;\n      v_transparency = 1.0;\n\n  #if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n\n  #ifdef VV_SIZE_MIN_MAX_VALUE\n      // vv size override the original symbol\'s size\n      float h = getVVMinMaxSize(a_vv.x, a_size.y);\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_SCALE_STOPS\n      float h = u_vvSizeScaleStopsValue;\n  #endif // VV_SIZE_SCALE_STOPS\n\n  #ifdef VV_SIZE_FIELD_STOPS\n      float h = getVVStopsSize(a_vv.x, a_size.y);\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n      float h = getVVUnitValue(a_vv.x, a_size.y);\n  #endif // VV_SIZE_UNIT_VALUE\n\n      // make sure to preserve the aspect ratio of the symbol\n      vec2 size = vec2(h * a_size.x / a_size.y, h);\n      vec2 offset = a_offset * size / a_size;\n      v_size = size;\n  #else\n  #ifdef HEATMAP\n      // reconstruct the kernel size\n      a_size = 9.0 * a_size + 1.0;\n  #endif // HEATMAP\n\n      vec2 offset = a_offset;\n      v_size = a_size;\n  #endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n\n  #ifdef SDF\n    offset *= 2.0;\n  #endif // SDF\n\n  #ifdef VV_ROTATION\n      gl_Position = vec4(u_normalized_origin, depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * getVVRotation(a_vv.w) * vec4(offset, delta_z, 0.0);\n  #else\n      gl_Position = vec4(u_normalized_origin, depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(offset, delta_z, 0.0);\n  #endif // VV_ROTATION\n\n  #ifdef VV_OPACITY\n      v_transparency = getVVOpacity(a_vv.z);\n  #else\n      v_transparency = u_opacity;\n  #endif // VV_OPACITY\n\n  #ifdef VV_COLOR\n      v_color = getVVColor(a_vv.y, a_color);\n  #else\n      v_color = a_color;\n  #endif // VV_COLOR\n\n      // output the texture coordinates and the transparency\n      v_tex = a_tex / u_mosaicSize;\n\n #ifdef SDF\n      v_outlineColor = a_outlineColor;\n      v_outlineWidth = a_sizeAndOutlineWidth.z;\n #endif // SDF\n\n #ifdef ID\n      v_id = a_id;\n #endif // ID\n\n #ifdef HEATMAP\n    v_heatmapWeight = a_heatmapWeight;\n #endif // HEATMAP\n    }\n  ]]>\n  </snippet>\n\n  <snippet name="iconFS">\n   <![CDATA[\n    precision mediump float;\n\n    uniform lowp sampler2D u_texture;\n\n    varying lowp vec2 v_tex;\n    varying lowp float v_transparency;\n    varying mediump vec2 v_size;\n    varying lowp vec4 v_color;\n\n #ifdef SDF\n    varying lowp vec4 v_outlineColor;\n    varying mediump float v_outlineWidth;\n\n    // we need the conversion function from RGBA to float\n    $rgba2float\n #endif // SDF\n\n #ifdef ID\n    varying highp vec4 v_id;\n #endif // ID\n\n #ifdef HEATMAP\n    varying mediump float v_heatmapWeight;\n #endif // HEATMAP\n\n    const float softEdgeRatio = 1.0; // use blur here if needed\n\n    void main()\n    {\n #ifdef SDF\n      lowp vec4 fillPixelColor = v_color;\n\n      // calculate the distance from the edge [-0.5, 0.5]\n      float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\n\n      // the soft edge ratio is about 1.5 pixels allocated for the soft edge.\n      float size = max(v_size.x, v_size.y);\n      float dist = d * size * softEdgeRatio;\n\n      // set the fragment\'s transparency according to the distance from the edge\n      fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n\n      // count for the outline\n      // therefore tint the entire icon area.\n      if (v_outlineWidth > 0.25) {\n        lowp vec4 outlinePixelColor = v_outlineColor;\n\n        // outlines can\'t be larger than the size of the symbol\n        float clampedOutlineSize = min(v_outlineWidth, size);\n\n        outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\n\n        // finally combine the outline and the fill colors (outline draws on top of fill)\n        gl_FragColor = v_transparency * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n      }\n      else {\n        gl_FragColor = v_transparency * fillPixelColor;\n      }\n #else // not an SDF\n      lowp vec4 texColor = texture2D(u_texture, v_tex);\n\n #ifdef HEATMAP\n      texColor.r *= v_heatmapWeight;\n #endif // HEATMAP\n\n      gl_FragColor = v_transparency * texColor;\n #endif // SDF\n\n #ifdef HIGHLIGHT\n      gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);\n #endif // HIGHLIGHT\n\n #ifdef ID\n      if (gl_FragColor.a < 1.0 / 255.0) {\n        discard;\n      }\n      gl_FragColor = v_id;\n #endif // ID\n    }\n   ]]>\n  </snippet>\n</snippets>\n\n';
    },
    2202: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2203), i(2034)]),
        void 0 ===
          (a = function(e, t, i, n) {
            var a = new n();
            return n.parse(i, a), a;
          }.apply(null, n)) || (e.exports = a);
    },
    2203: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  // YF TODO: (doc)\n--\x3e\n<snippets>\n  <snippet name="fillVVUniformsVS">\n    <![CDATA[\n  #if defined(VV_COLOR)|| defined(VV_OPACITY)\n    attribute vec4 a_vv;\n  #endif // VV_COLOR || VV_OPACITY\n\n  #ifdef VV_COLOR\n    uniform float u_vvColorValues[8];\n    uniform vec4 u_vvColors[8];\n  #endif // VV_COLOR\n\n  #ifdef VV_OPACITY\n    uniform float u_vvOpacityValues[8];\n    uniform float u_vvOpacities[8];\n  #endif // VV_OPACITY\n\n    ]]>\n  </snippet>\n\n  <snippet name="fillVVFunctions">\n    <![CDATA[\n    bool isNan(float val) {\n      return !( val < 0.0 || 0.0 < val || val == 0.0 );\n    }\n    \n  #ifdef VV_OPACITY\n    const int VV_OPACITY_N = 8;\n\n    float getVVOpacity(float opacityValue) {\n      if (isNan(opacityValue)) { \n        return 1.0;\n      }\n\n      if (opacityValue <= u_vvOpacityValues[0]) {\n        return u_vvOpacities[0];\n      }\n\n      for (int i = 1; i < VV_OPACITY_N; ++i) {\n        if (u_vvOpacityValues[i] >= opacityValue) {\n          float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\n          return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n        }\n      }\n\n      return u_vvOpacities[VV_OPACITY_N - 1];\n    }\n  #endif // VV_OPACITY\n\n  #ifdef VV_COLOR\n    const int VV_COLOR_N = 8;\n\n    vec4 getVVColor(float colorValue, vec4 fallback) {\n      if (isNan(colorValue)) { \n        return fallback;\n      }\n      \n      if (colorValue <= u_vvColorValues[0]) {\n        return u_vvColors[0];\n      }\n\n      for (int i = 1; i < VV_COLOR_N; ++i) {\n        if (u_vvColorValues[i] >= colorValue) {\n          float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\n          return mix(u_vvColors[i-1], u_vvColors[i], f);\n        }\n      }\n\n      return u_vvColors[VV_COLOR_N - 1];\n    }\n  #endif // VV_COLOR\n    ]]>\n  </snippet>\n\n  <snippet name="fillVS">\n    <![CDATA[\n      precision mediump float;\n\n      attribute vec2 a_pos;\n      attribute vec4 a_id; // since we need to render the Id as a color we need to break it into RGBA components. so just like a color, the Id is normalized.\n      attribute vec4 a_color;\n      attribute vec4 a_tlbr;\n      attribute vec4 a_aux;\n\n      uniform highp mat4 u_transformMatrix;\n      uniform highp vec2 u_normalized_origin;\n\n      varying lowp vec4 v_color;\n      varying lowp float v_opacity;\n\n      // import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)\n      $fillVVUniformsVS\n      $fillVVFunctions\n\n  #ifdef PATTERN\n    uniform mediump float u_zoomFactor;\n    uniform mediump vec2 u_mosaicSize;\n\n    varying mediump vec4 v_tlbr;\n    varying mediump vec2 v_tileTextureCoord;\n  #endif // PATTERN\n\n  #ifdef ID\n    varying highp vec4 v_id;\n  #endif // ID\n\n      void main()\n      {\n  #ifdef VV_OPACITY\n        v_opacity = getVVOpacity(a_vv.y);\n  #else\n        v_opacity = 1.0;\n  #endif\n\n  #ifdef VV_COLOR\n       v_color = getVVColor(a_vv.x, a_color);\n  #else\n       v_color = a_color;\n  #endif // VV_COLOR\n\n  #ifdef ID\n      v_id = a_id;\n  #endif // ID\n\n  #ifdef PATTERN\n       // calculate the pattern matrix\n       mat3 patternMatrix = mat3(1.0, 0.0, 0.0,\n                                 0.0, 1.0, 0.0,\n                                 0.0, 0.0, 1.0);\n       patternMatrix[0][0] = 1.0 / (u_zoomFactor * a_aux.x);\n       patternMatrix[1][1] = 1.0 / (u_zoomFactor * a_aux.y);\n\n       // calculate the texture coordinates of the current vertex. It will of course get interpolated.\n       // The pattern matrix is a 3x3 scale matrix which \'tiles\' the texture inside the tile, translating from\n       // tile coordinates to texture coordinates.\n       v_tileTextureCoord = (patternMatrix * vec3(a_pos, 1.0)).xy;\n       v_tlbr = vec4(a_tlbr.x / u_mosaicSize.x, a_tlbr.y / u_mosaicSize.y, a_tlbr.z / u_mosaicSize.x, a_tlbr.w / u_mosaicSize.y);\n  #endif // PATTERN\n\n        gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(a_pos, 0, 1.0);\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="fillFS">\n    <![CDATA[\n      precision lowp float;\n      uniform lowp float u_opacity;\n\n  #ifdef PATTERN\n      uniform lowp sampler2D u_texture;\n\n      varying mediump vec4 v_tlbr;\n      varying mediump vec2 v_tileTextureCoord;\n  #endif // PATTERN\n\n  #ifdef ID\n    varying highp vec4 v_id;\n  #endif // ID\n\n      varying lowp vec4 v_color;\n      varying lowp float v_opacity;\n\n      void main()\n      {\n  #ifdef PATTERN\n         // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.\n         mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n         // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.\n         // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however\n         // we need to only sample from area that has our sprite in the mosaic.\n         mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\n         // sample the sprite mosaic\n         lowp vec4 color = texture2D(u_texture, samplePos);\n         gl_FragColor = u_opacity * v_opacity * v_color * color;\n  #else\n        gl_FragColor = u_opacity * v_opacity * v_color;\n  #endif // PATTERN\n\n  #ifdef HIGHLIGHT\n        gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);\n  #endif // HIGHLIGHT\n\n  #ifdef ID\n      //if (gl_FragColor.a < 1.0 / 255.0) {\n      //  discard;\n      //}\n      gl_FragColor = v_id;\n  #endif // ID\n      }\n    ]]>\n  </snippet>\n</snippets>\n';
    },
    2204: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2205), i(2034)]),
        void 0 ===
          (a = function(e, t, i, n) {
            var a = new n();
            return n.parse(i, a), a;
          }.apply(null, n)) || (e.exports = a);
    },
    2205: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name="myShaderVS">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link esri/views/2d/engine/webgl/glShaderSnippets glShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require("dojo/text!...").\n--\x3e\n<snippets>\n\n  <snippet name="labelVS">\n  <![CDATA[\n    precision mediump float;\n\n      attribute vec2 a_pos;                  // 2 * 2 (2 x signed 16)\n      attribute vec4 a_color;                // 4 (4 x unsigned byte)\n      attribute vec2 a_vertexOffset;         // 2 * 2 // (2 x signed 16) offset from the anchor point of the string\n      attribute vec4 a_texAndSize;          // 4 (4 x unsigned byte) texture coordinatesm and font size. w is for the halo size\n      attribute vec4 a_refSymbolAndPlacementOffset; // 4 (4 x unsigned byte) the offset of the reference symbol of the feature (x,y) and the placement offset (z, w) all given in pixels\n\n      attribute lowp float  a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)\n\n      attribute mediump vec2 a_visibilityRange; // 2 x unsigned byte;\n\n      // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n      // relative to the tile\'s upper left corner\n      // the extrusion vector.\n      uniform highp mat4 u_transformMatrix;\n      // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n      uniform highp mat4 u_extrudeMatrix;\n      // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n      uniform highp vec2 u_normalized_origin;\n      // the size of the mosaic given in pixels\n      uniform vec2 u_mosaicSize;\n      uniform float u_pixelRatio;\n\n      // the opacity of the layer\n      uniform mediump float u_opacity;\n\n      // the curent zoom\n      uniform mediump float u_zoomLevel; // the current zoom level X 10\n      uniform lowp float u_mapRotation;\n      uniform lowp float u_mapAligned;\n\n      varying mediump float v_antialiasingWidth;\n      varying mediump float v_edgeDistanceOffset;\n\n      // the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\n      varying mediump vec2 v_tex;\n      // the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n      // opacity of the layer given by the painter\n      varying lowp float v_transparency;\n\n    #ifdef ID\n       uniform mediump float u_fadeStep;\n       varying mediump float v_fadeStep;\n    #else\n       varying mediump vec4 v_color;\n    #endif // ID\n\n      // the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values\n      // by 16 and then at the shader devide by the same number\n      const float offsetPrecision = 1.0 / 8.0;\n      const float outlineScale = 1.0 / 10.0;\n      const float sdfFontSize = 24.0;\n\n      // maximum SDF distance of 8 pixels represent the distance values that range from -2 inside the geometry to 6 on the outside.\n      // 6 is actually the maximum distance outside the glyph, therefore it is the limitation of the halo which is 1/4 of the geometry size.\n      const float maxSdfDistance = 8.0;\n\n      const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\n\n      void main()\n      {\n        // make sure to clip the vertices in case that given record is marked as invisible\n        float z = 2.0 * (1.0 - a_visible);\n\n        // clip the vertex if we are beyond the visibility range of the vertex\n        // please note: min value of 0 is regarded infinity. max value of 255 is regarded infinity\n        z += 1.0 + sign(a_visibilityRange.x - u_zoomLevel);\n        z += 1.0 + sign(u_zoomLevel - a_visibilityRange.y);\n\n        // we use the list significant bit of the position in order to store the indication whethe the vertex is of a halow of a glyph\n        mediump float halo = mod(a_pos, 2.0).x;\n\n        float fontSize = a_texAndSize.z;\n\n        float fontScale = fontSize / sdfFontSize;\n        // we need to scale the extrude matrix by the font-scale in order to get the right text size\n        mat4 extrudeMatrix = fontScale * u_extrudeMatrix;\n\n        float mapRotation = u_mapAligned * C_DEG_TO_RAD * -u_mapRotation;\n        float sinA = sin(mapRotation);\n        float cosA = cos(mapRotation);\n\n        mat4 mapRotationMat = mat4(cosA, sinA, 0.0, 0.0,\n                                  -sinA, cosA, 0.0, 0.0,\n                                    0.0,  0.0, 1.0, 0.0,\n                                    0.0,  0.0, 0.0, 1.0);\n\n        vec4 refSymbolOffset = mapRotationMat *  vec4(a_refSymbolAndPlacementOffset.xy, 0.0, 0.0);\n\n        gl_Position = vec4(u_normalized_origin, 0.0, 0.0) +\n                      u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) +\n                      u_extrudeMatrix * vec4(refSymbolOffset.xy + a_refSymbolAndPlacementOffset.zw, 0.0, 0.0) +\n                      extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);\n\n        v_tex = a_texAndSize.xy / u_mosaicSize;\n        v_antialiasingWidth = 0.106 * sdfFontSize / fontSize / u_pixelRatio;\n        // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.\n        v_edgeDistanceOffset = halo * outlineScale * a_texAndSize.w / fontScale / maxSdfDistance;\n\n        v_transparency = u_opacity;\n\n      #ifdef ID\n        v_fadeStep = u_fadeStep;\n      #else\n        v_color = a_color;\n      #endif // ID\n      }\n  ]]>\n  </snippet>\n\n  <snippet name="labelFS">\n   <![CDATA[\n      precision lowp float;\n\n      uniform mediump sampler2D u_referenceTex;\n      uniform mediump vec2 u_screenSize;\n      uniform mediump float u_pixelRatio;\n\n      varying mediump float v_antialiasingWidth;\n      varying mediump float v_edgeDistanceOffset;\n      varying mediump vec2 v_tex;\n      varying lowp float v_transparency;\n\n    #ifdef ID\n      varying mediump float v_fadeStep;\n    #else\n      uniform lowp sampler2D u_texture;\n      varying mediump vec4 v_color;\n    #endif // ID\n\n    const vec3 epsilon = vec3(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);\n\n      void main()\n      {\n        mediump vec2 refTextPos = gl_FragCoord.xy / (u_pixelRatio * u_screenSize.xy);\n        mediump vec4 referenceFragment = texture2D(u_referenceTex, refTextPos);\n    #ifdef ID\n        mediump float alpha = clamp(referenceFragment.a + v_fadeStep, 0.0, 1.0);\n        // fill the whole quad\n        gl_FragColor = vec4(alpha);\n    #else\n        // read the fade alpha\n        lowp float fadeAlpha = referenceFragment.a;\n\n        // read the distance from the SDF texture\n        lowp float dist = texture2D(u_texture, v_tex).a;\n\n        // the edge distance if a factor of the outline width\n        float glyphEdgeDistance = 0.75 - v_edgeDistanceOffset;\n\n        // use a smooth-step in order to calculate the geometry of the shape given by the distance field\n        lowp float sdfAlpha = smoothstep(glyphEdgeDistance - v_antialiasingWidth, glyphEdgeDistance + v_antialiasingWidth, dist) * v_transparency;\n\n        gl_FragColor = fadeAlpha * sdfAlpha * v_transparency * v_color;\n    #endif\n      }\n   ]]>\n  </snippet>\n</snippets>\n\n';
    },
    2206: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2207), i(2034)]),
        void 0 ===
          (a = function(e, t, i, n) {
            var a = new n();
            return n.parse(i, a), a;
          }.apply(null, n)) || (e.exports = a);
    },
    2207: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  // YF TODO: (doc)\n--\x3e\n<snippets>\n  <snippet name="thinLineParams">\n     <![CDATA[\n    float thinLineHalfWidth = 1.0; // meaning that a 2 pixels line width is considered a thin line\n    float thinLineWidthFactor = 1.1;\n     ]]>\n  </snippet>\n\n  <snippet name="lineVVUniformsVS">\n    <![CDATA[\n  #if defined(VV_COLOR) || defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE) || defined(VV_OPACITY)\n    attribute vec3 a_vv;\n  #endif // VV_COLOR || VV_SIZE_MIN_MAX_VALUE || VV_SIZE_SCALE_STOPS || VV_SIZE_FIELD_STOPS || VV_SIZE_UNIT_VALUE || VV_OPACITY\n\n  #ifdef VV_COLOR\n    uniform float u_vvColorValues[8];\n    uniform vec4 u_vvColors[8];\n  #endif // VV_COLOR\n\n  #ifdef VV_SIZE_MIN_MAX_VALUE\n    uniform vec4 u_vvSizeMinMaxValue;\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_SCALE_STOPS\n    uniform float u_vvSizeScaleStopsValue;\n  #endif\n\n  #ifdef VV_SIZE_FIELD_STOPS\n    uniform float u_vvSizeFieldStopsValues[6];\n    uniform float u_vvSizeFieldStopsSizes[6];\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n    uniform float u_vvSizeUnitValueWorldToPixelsRatio;\n  #endif // VV_SIZE_UNIT_VALUE\n\n  #ifdef VV_OPACITY\n    uniform float u_vvOpacityValues[8];\n    uniform float u_vvOpacities[8];\n  #endif // VV_OPACITY\n    ]]>\n  </snippet>\n\n  <snippet name="lineVVFunctions">\n    <![CDATA[\n    bool isNan(float val) {\n      return !( val < 0.0 || 0.0 < val || val == 0.0 );\n    }\n    \n  #ifdef VV_SIZE_MIN_MAX_VALUE\n    float getVVMinMaxSize(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) { \n        return fallback;\n      }\n\n      float f = (sizeValue - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\n      return clamp(mix(u_vvSizeMinMaxValue.z, u_vvSizeMinMaxValue.w, f), u_vvSizeMinMaxValue.z, u_vvSizeMinMaxValue.w);\n    }\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_FIELD_STOPS\n    const int VV_SIZE_N = 6;\n    float getVVStopsSize(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) { \n        return fallback;\n      }\n\n      if (sizeValue <= u_vvSizeFieldStopsValues[0]) {\n        return u_vvSizeFieldStopsSizes[0];\n      }\n\n      for (int i = 1; i < VV_SIZE_N; ++i) {\n        if (u_vvSizeFieldStopsValues[i] >= sizeValue) {\n          float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\n          return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n        }\n      }\n\n      return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n    }\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n    float getVVUnitValue(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) { \n        return fallback;\n      }\n\n      return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n    }\n  #endif // VV_SIZE_UNIT_VALUE\n\n  #ifdef VV_OPACITY\n    const int VV_OPACITY_N = 8;\n    float getVVOpacity(float opacityValue) {\n      if (isNan(opacityValue)) { \n        return 1.0;\n      }\n\n      if (opacityValue <= u_vvOpacityValues[0]) {\n        return u_vvOpacities[0];\n      }\n\n      for (int i = 1; i < VV_OPACITY_N; ++i) {\n        if (u_vvOpacityValues[i] >= opacityValue) {\n          float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\n          return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n        }\n      }\n\n      return u_vvOpacities[VV_OPACITY_N - 1];\n    }\n  #endif // VV_OPACITY\n\n  #ifdef VV_COLOR\n    const int VV_COLOR_N = 8;\n\n    vec4 getVVColor(float colorValue, vec4 fallback) {\n      if (isNan(colorValue)) { \n        return fallback;\n      }\n\n      if (colorValue <= u_vvColorValues[0]) {\n        return u_vvColors[0];\n      }\n\n      for (int i = 1; i < VV_COLOR_N; ++i) {\n        if (u_vvColorValues[i] >= colorValue) {\n          float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\n          return mix(u_vvColors[i-1], u_vvColors[i], f);\n        }\n      }\n\n      return u_vvColors[VV_COLOR_N - 1];\n    }\n  #endif // VV_COLOR\n    ]]>\n  </snippet>\n\n  <snippet name="lineVS">\n    <![CDATA[\n     precision mediump float;\n\n     attribute vec2 a_pos;\n     attribute vec4 a_id;\n     attribute vec4 a_color;\n     attribute vec4 a_offsetAndNormal;\n     attribute vec2 a_accumulatedDistanceAndHalfWidth;\n     attribute vec4 a_tlbr;\n     attribute vec4 a_segmentDirection;\n\n     // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n     // relative to the tile\'s upper left corner\n     // the extrusion vector.\n     uniform highp mat4 u_transformMatrix;\n     // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n     uniform highp mat4 u_extrudeMatrix;\n     // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n     uniform highp vec2 u_normalized_origin;\n     uniform lowp float u_opacity; // the layer\'s opacity\n     uniform mediump float u_zoomFactor;\n     uniform mediump float u_antialiasing;\n\n     // the interpolated normal to the line. the information is packed into the two LSBs of the vertex coordinate\n     varying mediump vec2 v_normal;\n     varying mediump float v_lineHalfWidth;\n     varying lowp vec4 v_color;\n     varying lowp float v_transparency;\n\n     const float scale = 1.0 / 31.0;\n#ifdef SDF\n     const float widthFactor = 2.0;\n#else\n     const float widthFactor = 1.0;\n#endif\n\n\n#ifdef PATTERN\n     uniform mediump vec2 u_mosaicSize;\n\n     varying mediump vec4 v_tlbr; // normalized pattern coordinates [0, 1]\n     varying mediump vec2 v_patternSize;\n#endif // PATTERN\n\n// we need to accumulated distance only if it is a pattern or an SDF line\n#if defined(PATTERN) || defined(SDF)\n     varying highp float v_accumulatedDistance;\n#endif // PATTERN SDF\n\n#ifdef ID\n     varying highp vec4 v_id;\n#endif // ID\n\n     // import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)\n     $lineVVUniformsVS\n     $lineVVFunctions\n\n     void main()\n     {\n     // size VV block\n#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n\n#ifdef VV_SIZE_MIN_MAX_VALUE\n       mediump float lineHalfWidth = 0.5 * getVVMinMaxSize(a_vv.x, 2.0 * a_accumulatedDistanceAndHalfWidth.y * scale);\n#endif // VV_SIZE_MIN_MAX_VALUE\n\n#ifdef VV_SIZE_SCALE_STOPS\n       mediump float lineHalfWidth = 0.5 * u_vvSizeScaleStopsValue;\n#endif // VV_SIZE_SCALE_STOPS\n\n#ifdef VV_SIZE_FIELD_STOPS\n       mediump float lineHalfWidth = 0.5 * getVVStopsSize(a_vv.x, 2.0 * a_accumulatedDistanceAndHalfWidth.y * scale);\n#endif // VV_SIZE_FIELD_STOPS\n\n#ifdef VV_SIZE_UNIT_VALUE\n       mediump float lineHalfWidth = 0.5 * getVVUnitValue(a_vv.x, 2.0 * a_accumulatedDistanceAndHalfWidth.y * scale);\n#endif // VV_SIZE_UNIT_VALUE\n\n#else // no VV\n       mediump float lineHalfWidth = a_accumulatedDistanceAndHalfWidth.y * scale;\n#endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n\n#ifdef VV_OPACITY\n      v_transparency = u_opacity * getVVOpacity(a_vv.z);\n#else\n      v_transparency = u_opacity;\n#endif // VV_OPACITY\n\n#ifdef VV_COLOR\n      v_color = getVVColor(a_vv.y, a_color);\n#else\n      v_color = a_color;\n#endif // VV_COLOR\n\n       // make sure to clip the vertices in case that the width of the line is 0 (or negative)\n       float z = 2.0 * step(lineHalfWidth, 0.0);\n\n       // add an antialiasing distance. We use 0.2 rather than 0.5 in order to match the SVG renderer\n       // also limit the total line width to 1.3 pixels. Below this value lines don\'t look good compared to the SVG renderer\n       lineHalfWidth = max(lineHalfWidth, 0.45) + 0.2 * u_antialiasing;\n\n       // include the thin line parameters (thinLineHalfWidth and thinLineWidthFactor)\n       $thinLineParams\n       // for now assume that a thin line is a line which is under 2 pixels (1 pixels on either sides of the centerline)\n       // in practice, a thin line is a line who\'s half width vary from 0.45px to the value of thinLineHalfWidth, as the value\n       // is claped in line 221 above\n       mediump float thinLineFactor = max(thinLineWidthFactor * step(lineHalfWidth, thinLineHalfWidth), 1.0);\n\n       v_lineHalfWidth = lineHalfWidth;\n\n       // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n       // sake of using less attribute memory, we need to scale it back to the original range of ~ [0, 1])\n       // in a case of a thin line we move each vertex twice as far\n       mediump vec2 dist = thinLineFactor * widthFactor * lineHalfWidth * a_offsetAndNormal.xy * scale;\n\n       // transform the vertex\n       gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(a_pos, z, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);\n       v_normal = a_offsetAndNormal.zw * scale;\n\n#if defined(PATTERN) || defined(SDF)\n       v_accumulatedDistance = a_accumulatedDistanceAndHalfWidth.x + dot(scale * a_segmentDirection.xy, dist / u_zoomFactor);\n#endif // PATTERN || SDF\n\n#ifdef PATTERN\n      v_tlbr = vec4(a_tlbr.x / u_mosaicSize.x, a_tlbr.y / u_mosaicSize.y, a_tlbr.z / u_mosaicSize.x, a_tlbr.w / u_mosaicSize.y);\n      v_patternSize = vec2(a_tlbr.z - a_tlbr.x, a_tlbr.w - a_tlbr.y);\n#endif // PATTERN\n\n#ifdef ID\n      v_id = a_id;\n#endif // ID\n     }\n    ]]>\n  </snippet>\n\n  <snippet name="lineFS">\n    <![CDATA[\n       precision lowp float;\n\n       uniform lowp float u_blur;\n       uniform mediump float u_antialiasing;\n\n       varying mediump vec2 v_normal;\n       varying mediump float v_lineHalfWidth;\n       varying lowp vec4 v_color;\n       varying lowp float v_transparency;\n\n#if defined(PATTERN) || defined(SDF)\n      uniform sampler2D u_texture;\n      uniform mediump float u_zoomFactor;\n\n      varying mediump vec4 v_tlbr; // normalized pattern coordinates [0, 1]\n      varying mediump vec2 v_patternSize;\n      varying highp float v_accumulatedDistance;\n#endif // PATTERN SDF\n\n#ifdef SDF\n      const float sdfPatternHalfWidth = 15.5; // YF: assumed that the width will be set to 31\n     const float widthFactor = 2.0;\n\n    // Factors to convert rgba back to float\n    const vec4 rgba2float_factors = vec4(\n        255.0 / (256.0),\n        255.0 / (256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n      );\n\n    float rgba2float(vec4 rgba) {\n      // Convert components from 0->1 back to 0->255 and then\n      // add the components together with their corresponding\n      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n      return dot(rgba, rgba2float_factors);\n    }\n#endif // SDF\n\n#ifdef ID\n     varying highp vec4 v_id;\n#endif // ID\n\n       void main()\n       {\n         // include the thin line parameters (thinLineHalfWidth and thinLineWidthFactor)\n         $thinLineParams\n\n         // for now assume that a thin line is a line which is under 2 pixels (1 pixels on either sides of the centerline)\n         mediump float thinLineFactor = max(thinLineWidthFactor * step(v_lineHalfWidth, thinLineHalfWidth), 1.0);\n\n         // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,\n         // and any value in between will be inside the line (the sign represent the direction - right or left).\n         // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels\n         mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n\n         // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.\n         // when it is a thin line then use a slightly shallower slope in order to add more feathering\n         lowp float alpha = clamp(thinLineFactor * (v_lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\n\n#if defined(SDF)\n         mediump float lineHalfWidth = widthFactor * v_lineHalfWidth;\n         mediump float lineWidthRatio = lineHalfWidth / sdfPatternHalfWidth;\n         mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * lineHalfWidth) / (lineWidthRatio * v_patternSize.x), 1.0);\n         mediump float relativeTexY = 0.5 + 0.5 * v_normal.y;\n\n          // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates\n         mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\n\n         // calculate the distance from the edge [-0.5, 0.5]\n         mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\n\n         // the distance is a proportional to the line width\n         float dist = d * lineHalfWidth;\n\n         lowp vec4 fillPixelColor = v_transparency * alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n        gl_FragColor = fillPixelColor;\n#elif defined(PATTERN)\n         // we need to calculate the relative portion of the line texture along the line given the accumulated distance along the line\n         // The computed value should is anumber btween 0 and 1 which will later be used to interpolate btween the BR and TL values\n         mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * v_lineHalfWidth) / v_patternSize.x, 1.0);\n\n         // in order to calculate the texture coordinates prependicular to the line (Y axis), we use the interpolated normal values\n         // which range from -1.0 to 1.0. On the line\'s centerline, the value of the interpolated normal is 0.0, however the relative\n         // texture value shpould be 0.5 (given that at the bottom of the line, the texture coordinate must be equal to 0.0)\n         // (TL) ---------------------------      --\x3e left edge of line. Interpolatedf normal is 1.0\n         //              | -> line-width / 2\n         //      - - - - - - - - - - - - - -\n         //              | -> line-width / 2\n         //      ---------------------------- (BR)--\x3e right edge of line. Interpolatedf normal is -1.0\n\n         mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / v_patternSize.y);\n\n         // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates\n         mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\n\n         // get the color from the texture\n         lowp vec4 color = texture2D(u_texture, texCoord);\n\n         gl_FragColor = v_transparency * alpha * v_color * color;\n#else // solid line (no texture, no pattern)\n         // output the fragment color\n         gl_FragColor = v_transparency * alpha * v_color;\n#endif // SDF\n\n#ifdef HIGHLIGHT\n         gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);\n#endif // HIGHLIGHT\n\n #ifdef ID\n         if (gl_FragColor.a < 1.0 / 255.0) {\n           discard;\n         }\n         gl_FragColor = v_id;\n #endif // ID\n       }\n    ]]>\n  </snippet>\n\n</snippets>\n';
    },
    2208: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2209), i(2034)]),
        void 0 ===
          (a = function(e, t, i, n) {
            var a = new n();
            return n.parse(i, a), a;
          }.apply(null, n)) || (e.exports = a);
    },
    2209: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name="myShaderVS">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link esri/views/2d/engine/webgl/glShaderSnippets glShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require("dojo/text!...").\n--\x3e\n<snippets>\n\n<snippet name="textVVUniformsVS">\n    <![CDATA[\n  #if defined(VV_COLOR) || defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n    attribute vec4 a_vv;\n  #endif // VV_COLOR || VV_SIZE_MIN_MAX_VALUE || VV_SIZE_SCALE_STOPS || VV_SIZE_FIELD_STOPS || VV_SIZE_UNIT_VALUE || VV_OPACITY || VV_ROTATION\n\n  #ifdef VV_COLOR\n    uniform float u_vvColorValues[8];\n    uniform vec4 u_vvColors[8];\n  #endif // VV_COLOR\n\n  #ifdef VV_SIZE_MIN_MAX_VALUE\n    uniform vec4 u_vvSizeMinMaxValue;\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_SCALE_STOPS\n    uniform float u_vvSizeScaleStopsValue;\n  #endif // VV_SIZE_SCALE_STOPS\n\n  #ifdef VV_SIZE_FIELD_STOPS\n    uniform float u_vvSizeFieldStopsValues[6];\n    uniform float u_vvSizeFieldStopsSizes[6];\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n    uniform float u_vvSizeUnitValueWorldToPixelsRatio;\n  #endif // VV_SIZE_UNIT_VALUE\n\n  #ifdef VV_OPACITY\n    uniform float u_vvOpacityValues[8];\n    uniform float u_vvOpacities[8];\n  #endif // VV_OPACITY\n\n  #ifdef VV_ROTATION\n    uniform lowp float u_vvRotationType;\n  #endif // VV_ROTATION\n    ]]>\n  </snippet>\n\n  <snippet name="textVVFunctions">\n    <![CDATA[\n    bool isNan(float val) {\n      return !( val < 0.0 || 0.0 < val || val == 0.0 );\n    }\n\n  #ifdef VV_SIZE_MIN_MAX_VALUE\n    float getVVMinMaxSize(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) {\n        return fallback;\n      }\n\n      // we need to multiply by 8 in order to translate to tile coordinates\n      float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\n      return clamp(u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z), u_vvSizeMinMaxValue.z, u_vvSizeMinMaxValue.w);\n    }\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_FIELD_STOPS\n    const int VV_SIZE_N = 6;\n    float getVVStopsSize(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) {\n        return fallback;\n      }\n\n      if (sizeValue <= u_vvSizeFieldStopsValues[0]) {\n        return u_vvSizeFieldStopsSizes[0];\n      }\n\n      for (int i = 1; i < VV_SIZE_N; ++i) {\n        if (u_vvSizeFieldStopsValues[i] >= sizeValue) {\n          float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\n          return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n        }\n      }\n\n      return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n    }\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n    float getVVUnitValue(float sizeValue, float fallback) {\n      if (isNan(sizeValue)) {\n        return fallback;\n      }\n\n      return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n    }\n  #endif // VV_SIZE_UNIT_VALUE\n\n  #ifdef VV_OPACITY\n    const int VV_OPACITY_N = 8;\n    float getVVOpacity(float opacityValue) {\n      if (isNan(opacityValue)) {\n        return 1.0;\n      }\n\n      if (opacityValue <= u_vvOpacityValues[0]) {\n        return u_vvOpacities[0];\n      }\n\n      for (int i = 1; i < VV_OPACITY_N; ++i) {\n        if (u_vvOpacityValues[i] >= opacityValue) {\n          float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\n          return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n        }\n      }\n\n      return u_vvOpacities[VV_OPACITY_N - 1];\n    }\n  #endif // VV_OPACITY\n\n  #ifdef VV_ROTATION\n    mat4 getVVRotation(float rotationValue) {\n      // YF TODO: if the symbol has rotation we need to combine the symbo\'s rotation with the VV one\n      if (isNan(rotationValue)) {\n        return mat4(1, 0, 0, 0,\n                    0, 1, 0, 0,\n                    0, 0, 1, 0,\n                    0, 0, 0, 1);\n      }\n\n      float rotation = rotationValue;\n      if (u_vvRotationType == 1.0) {\n        rotation = 90.0 - rotation;\n      }\n\n      float angle = C_DEG_TO_RAD * rotation;\n\n      float sinA = sin(angle);\n      float cosA = cos(angle);\n\n      return mat4(cosA, sinA, 0, 0,\n                  -sinA,  cosA, 0, 0,\n                  0,     0, 1, 0,\n                  0,     0, 0, 1);\n    }\n  #endif // VV_ROTATION\n\n  #ifdef VV_COLOR\n    const int VV_COLOR_N = 8;\n\n    vec4 getVVColor(float colorValue, vec4 fallback) {\n      if (isNan(colorValue)) {\n        return fallback;\n      }\n\n      if (colorValue <= u_vvColorValues[0]) {\n        return u_vvColors[0];\n      }\n\n      for (int i = 1; i < VV_COLOR_N; ++i) {\n        if (u_vvColorValues[i] >= colorValue) {\n          float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\n          return mix(u_vvColors[i-1], u_vvColors[i], f);\n        }\n      }\n\n      return u_vvColors[VV_COLOR_N - 1];\n    }\n  #endif // VV_COLOR\n    ]]>\n  </snippet>\n\n  <snippet name="textVS">\n    <![CDATA[\n      precision mediump float;\n\n      const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\n\n      attribute vec2 a_pos;           // 2 * 2 (2 x signed 16)\n      attribute vec4 a_id;            // 4 (4 x unsigned byte)\n      attribute vec4 a_color;         // 4 (4 x unsigned byte)\n      attribute vec2 a_vertexOffset; // 2 * 2 // (2 x signed 16) offset from the anchor point of the string\n      attribute vec4 a_texFontSize; // 4 (4 x unsigned byte) texture coordinatesm and font size\n\n      attribute lowp float  a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)\n\n      // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n      // relative to the tile\'s upper left corner\n      // the extrusion vector.\n      uniform highp mat4 u_transformMatrix;\n      // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n      uniform highp mat4 u_extrudeMatrix;\n      // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n      uniform highp vec2 u_normalized_origin;\n      // the size of the mosaic given in pixels\n      uniform vec2 u_mosaicSize;\n      uniform float u_pixelRatio;\n\n      // the opacity of the layer\n      uniform mediump float u_opacity;\n\n      varying mediump vec4 v_color;\n      varying mediump float v_antialiasingWidth;\n      varying mediump float v_edgeDistanceOffset;\n\n      // the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\n      varying mediump vec2 v_tex;\n      // the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n      // opacity of the layer given by the painter\n      varying lowp float v_transparency;\n\n      // the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values\n      // by 16 and then at the shader devide by the same number\n      const float offsetPrecision = 1.0 / 8.0;\n      const float outlineScale = 1.0 / 10.0;\n      const float sdfFontSize = 24.0;\n\n      // maximum SDF distance of 8 pixels represent the distance values that range from -2 inside the geometry to 6 on the outside.\n      // 6 is actually the maximum distance outside the glyph, therefore it is the limitation of the halo which is 1/4 of the geometry size.\n      const float maxSdfDistance = 8.0;\n\n  #ifdef ID\n    varying highp vec4 v_id;\n  #endif // ID\n\n      // import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)\n      $textVVUniformsVS\n      $textVVFunctions\n\n      void main()\n      {\n        // make sure to clip the vertices in case that given record is marked as invisible\n        float z = 2.0 * (1.0 - a_visible);\n\n        // we use the list significant bit of the position in order to store the indication whethe the vertex is of a halow of a glyph\n        mediump float halo = mod(a_pos, 2.0).x;\n\n  #if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n\n  #ifdef VV_SIZE_MIN_MAX_VALUE\n        // vv size override the original symbol\'s size\n        vec2 size = vec2(getVVMinMaxSize(a_vv.x, a_texFontSize.z));\n  #endif // VV_SIZE_MIN_MAX_VALUE\n\n  #ifdef VV_SIZE_SCALE_STOPS\n        vec2 size = vec2(u_vvSizeScaleStopsValue);\n  #endif // VV_SIZE_SCALE_STOPS\n\n  #ifdef VV_SIZE_FIELD_STOPS\n        vec2 size = vec2(getVVStopsSize(a_vv.x, a_texFontSize.z));\n  #endif // VV_SIZE_FIELD_STOPS\n\n  #ifdef VV_SIZE_UNIT_VALUE\n        vec2 size = vec2(getVVUnitValue(a_vv.x, a_texFontSize.z));\n  #endif // VV_SIZE_UNIT_VALUE\n\n        float fontSize = size.x;\n  #else // this generic case, no VV\n        float fontSize = a_texFontSize.z;\n  #endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n\n        float fontScale = fontSize / sdfFontSize;\n        // we need to scale the extrude matrix by the font-scale in order to get the right text size\n        mat4 extrudeMatrix = fontScale * u_extrudeMatrix;\n\n        // If the label rotates with the map, and if the rotated label is upside down, hide it\n        //gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) + extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);\n\n    #ifdef VV_ROTATION\n        gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) + extrudeMatrix * getVVRotation(a_vv.w) * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);\n    #else\n        gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) + extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);\n    #endif // VV_ROTATION\n\n        v_tex = a_texFontSize.xy / u_mosaicSize;\n        v_antialiasingWidth = 0.105 * sdfFontSize / fontSize / u_pixelRatio;\n        // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.\n        v_edgeDistanceOffset = halo * outlineScale * a_texFontSize.w / fontScale / maxSdfDistance;\n\n    #ifdef VV_OPACITY\n        v_transparency = getVVOpacity(a_vv.z);\n    #else\n        v_transparency = u_opacity;\n    #endif // VV_OPACITY\n\n    #ifdef VV_COLOR\n       // we don\'t want to override the halo color\n       v_color = halo * a_color + (1.0 - halo) * getVVColor(a_vv.y, a_color);\n    #else\n        v_color = a_color;\n    #endif // VV_COLOR\n\n  #ifdef ID\n        v_id = a_id;\n  #endif // ID\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="textFS">\n    <![CDATA[\n      precision lowp float;\n\n      uniform lowp sampler2D u_texture;\n\n      varying mediump vec4 v_color;\n      varying mediump float v_antialiasingWidth;\n      varying mediump float v_edgeDistanceOffset;\n      varying mediump vec2 v_tex;\n      varying lowp float v_transparency;\n\n  #ifdef ID\n      varying highp vec4 v_id;\n  #endif // ID\n\n      void main()\n      {\n        // read the distance from the SDF texture\n        lowp float dist = texture2D(u_texture, v_tex).a;\n\n        // the edge distance if a factor of the outline width\n        float glyphEdgeDistance = 0.75 - v_edgeDistanceOffset;\n\n        // use a smooth-step in order to calculate the geometry of the shape given by the distance field\n        lowp float alpha = smoothstep(glyphEdgeDistance - v_antialiasingWidth, glyphEdgeDistance + v_antialiasingWidth, dist) * v_transparency;\n\n        gl_FragColor = alpha * v_color;\n\n  #ifdef ID\n        if (gl_FragColor.a < 1.0 / 255.0) {\n          discard;\n        }\n        gl_FragColor = v_id;\n  #endif // ID\n      }\n    ]]>\n  </snippet>\n</snippets>\n';
    },
    2210: function(e, t, i) {
      var n, a;
      (n = [
        i.dj.c(e.i),
        t,
        i(5),
        i(2039),
        i(2102),
        i(2078),
        i(77),
        i(72),
        i(91)
      ]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o, s, l) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var d = (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t._color = n.create()),
                  (t._initialized = !1),
                  t._color.set([1, 0, 0, 1]),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.dispose = function() {
                  this._solidProgram &&
                    (this._solidProgram.dispose(), (this._solidProgram = null)),
                    this._solidVertexArrayObject &&
                      (this._solidVertexArrayObject.dispose(),
                      (this._solidVertexArrayObject = null));
                }),
                (t.prototype.draw = function(e, t) {
                  var i = e.context;
                  this._initialized || this._initialize(i),
                    i.setStencilFunctionSeparate(1032, 519, t.stencilRef, 255),
                    i.bindVAO(this._solidVertexArrayObject),
                    i.bindProgram(this._solidProgram),
                    this._solidProgram.setUniformMatrix4fv(
                      "u_transformMatrix",
                      t.tileTransform.transform
                    ),
                    this._solidProgram.setUniform2fv(
                      "u_normalized_origin",
                      t.tileTransform.displayCoord
                    ),
                    this._solidProgram.setUniform1f("u_coord_range", 512),
                    this._solidProgram.setUniform1f("u_depth", 0),
                    this._solidProgram.setUniform4fv("u_color", this._color),
                    i.drawArrays(5, 0, 4),
                    i.bindVAO();
                }),
                (t.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = { a_pos: 0 },
                    i = new s(e, r.backgroundVS, r.backgroundFS, t);
                  if (!i) return !1;
                  var n = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]),
                    a = o.createVertex(e, 35044, n),
                    d = new l(
                      e,
                      t,
                      {
                        geometry: [
                          {
                            name: "a_pos",
                            count: 2,
                            type: 5120,
                            offset: 0,
                            stride: 2,
                            normalized: !1,
                            divisor: 0
                          }
                        ]
                      },
                      { geometry: a }
                    );
                  return (
                    (this._solidProgram = i),
                    (this._solidVertexArrayObject = d),
                    (this._initialized = !0),
                    !0
                  );
                }),
                t
              );
            })(a.default);
            t.default = d;
          }.apply(null, n)) || (e.exports = a);
    },
    2211: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(5), i(2007), i(2010), i(2070), i(91)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._isInitialized = !1),
                  (t._fillAttributeLocations = {
                    a_pos: 0,
                    a_id: 1,
                    a_color: 2,
                    a_tlbr: 3,
                    a_aux: 4
                  }),
                  (t._fillAttributeLocationsVV = {
                    a_pos: 0,
                    a_id: 1,
                    a_color: 2,
                    a_tlbr: 3,
                    a_aux: 4,
                    a_vv: 5
                  }),
                  (t._spritesTextureSize = new Float32Array(2)),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.dispose = function() {}),
                (t.prototype.getGeometryType = function() {
                  return n.WGLGeometryType.FILL;
                }),
                (t.prototype.drawGeometry = function(e, t, i, n) {
                  var a = e.context,
                    r = e.painter,
                    o = e.rendererInfo,
                    s = e.requiredLevel,
                    l = e.stationary,
                    d = i.indexCount,
                    u = i.indexFrom;
                  this._initialize();
                  var f = i.materialInfo.materialKeyInfo,
                    _ = f.hasVV()
                      ? this._fillAttributeLocationsVV
                      : this._fillAttributeLocations,
                    h = e.painter.materialManager.getProgram(
                      i.materialInfo.materialKey,
                      e.drawPhase,
                      _
                    );
                  if (h) {
                    a.bindProgram(h);
                    var c = this._getVAO(a, t, f.hasVV());
                    if (
                      (a.bindVAO(c), i.materialInfo.texBindingInfo.length > 0)
                    ) {
                      var p = i.materialInfo.texBindingInfo[0],
                        v = p.pageId,
                        m = e.painter.textureManager.sprites;
                      (this._spritesTextureSize[0] = m.getWidth(v)),
                        (this._spritesTextureSize[1] = m.getHeight(v));
                      var V = 1 / Math.pow(2, s - t.key.level) / e.pixelRatio;
                      h.setUniform1f("u_zoomFactor", V);
                      var g = l ? 9728 : 9729;
                      r.textureManager.bindSpritePage(a, v, p.unit, g),
                        h.setUniform1i(p.semantic, p.unit),
                        h.setUniform2fv(
                          "u_mosaicSize",
                          this._spritesTextureSize
                        );
                    }
                    h.setUniformMatrix4fv(
                      "u_transformMatrix",
                      t.tileTransform.transform
                    ),
                      h.setUniform2fv(
                        "u_normalized_origin",
                        t.tileTransform.displayCoord
                      ),
                      h.setUniform1f("u_opacity", 1),
                      f.vvColor &&
                        (h.setUniform1fv("u_vvColorValues", o.vvColorValues),
                        h.setUniform4fv("u_vvColors", o.vvColors)),
                      f.vvOpacity &&
                        (h.setUniform1fv(
                          "u_vvOpacityValues",
                          o.vvOpacityValues
                        ),
                        h.setUniform1fv("u_vvOpacities", o.vvOpacities)),
                      a.drawElements(4, d, 5125, 4 * u),
                      a.bindVAO(null);
                  }
                }),
                (t.prototype._initialize = function() {
                  if (this._isInitialized) return !0;
                  (this._fillVertexAttributeLayout = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 24,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 4,
                        stride: 24,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 24,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_tlbr",
                        count: 4,
                        type: 5123,
                        offset: 12,
                        stride: 24,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_aux",
                        count: 4,
                        type: 5121,
                        offset: 20,
                        stride: 24,
                        normalized: !1,
                        divisor: 0
                      }
                    ]
                  }),
                    (this._fillVertexAttributeLayoutVV = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 32,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_id",
                          count: 4,
                          type: 5121,
                          offset: 4,
                          stride: 32,
                          normalized: !0,
                          divisor: 0
                        },
                        {
                          name: "a_color",
                          count: 4,
                          type: 5121,
                          offset: 8,
                          stride: 32,
                          normalized: !0,
                          divisor: 0
                        },
                        {
                          name: "a_tlbr",
                          count: 4,
                          type: 5123,
                          offset: 12,
                          stride: 32,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_aux",
                          count: 4,
                          type: 5121,
                          offset: 20,
                          stride: 32,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_vv",
                          count: 2,
                          type: 5126,
                          offset: 24,
                          stride: 32,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._isInitialized = !0);
                }),
                (t.prototype._getVAO = function(e, t, i) {
                  if (t.fillGeometry.vao) return t.fillGeometry.vao;
                  var n = t.fillGeometry.vertexBufferMap[a.C_VBO_GEOMETRY],
                    r = t.fillGeometry.indexBuffer;
                  return n && r
                    ? ((t.fillGeometry.vao = i
                        ? new o(
                            e,
                            this._fillAttributeLocationsVV,
                            this._fillVertexAttributeLayoutVV,
                            { geometry: n },
                            r
                          )
                        : new o(
                            e,
                            this._fillAttributeLocations,
                            this._fillVertexAttributeLayout,
                            { geometry: n },
                            r
                          )),
                      t.fillGeometry.vao)
                    : null;
                }),
                t
              );
            })(r.default);
            t.default = s;
          }.apply(null, n)) || (e.exports = a);
    },
    2212: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(5), i(2007), i(2010), i(2070), i(91)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._attributeLocations = {
                    a_pos: 0,
                    a_color: 1,
                    a_vertexOffset: 2,
                    a_texAndSize: 3,
                    a_refSymbolAndPlacementOffset: 4,
                    a_visible: 5,
                    a_visibilityRange: 6
                  }),
                  (t._vertexAttributeLayout = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 20,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 4,
                        stride: 20,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_vertexOffset",
                        count: 2,
                        type: 5122,
                        offset: 8,
                        stride: 20,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_texAndSize",
                        count: 4,
                        type: 5121,
                        offset: 12,
                        stride: 20,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_refSymbolAndPlacementOffset",
                        count: 4,
                        type: 5120,
                        offset: 16,
                        stride: 20,
                        normalized: !1,
                        divisor: 0
                      }
                    ],
                    visibility: [
                      {
                        name: "a_visible",
                        count: 1,
                        type: 5121,
                        offset: 0,
                        stride: 1,
                        normalized: !0,
                        divisor: 0
                      }
                    ],
                    visibilityRange: [
                      {
                        name: "a_visibilityRange",
                        count: 2,
                        type: 5121,
                        offset: 0,
                        stride: 2,
                        normalized: !1,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._glyphsTextureSize = new Float32Array(2)),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.dispose = function() {}),
                (t.prototype.drawGeometry = function(e, t, i, a) {
                  if (e.requiredLevel === t.key.level) {
                    var r = e.context,
                      o = e.painter,
                      s = e.drawPhase,
                      l = i.materialInfo,
                      d = i.indexCount,
                      u = i.indexFrom,
                      f = this._attributeLocations,
                      _ = e.drawPhase === n.WGLDrawPhase.LABEL_ALPHA,
                      h = l.materialKey;
                    _ && (h |= 8);
                    var c = o.materialManager.getProgram(h, s, f);
                    if (c) {
                      r.setStencilTestEnabled(!1), r.bindProgram(c);
                      var p = this._getVAO(r, t);
                      if ((r.bindVAO(p), _))
                        r.setBlendingEnabled(!1),
                          c.setUniform1f("u_fadeStep", e.labelStep);
                      else {
                        var v = l.texBindingInfo[0],
                          m = v.pageId;
                        o.textureManager.bindGlyphsPage(r, m, v.unit),
                          c.setUniform1i(v.semantic, v.unit);
                      }
                      var V = o.textureManager.glyphs;
                      (this._glyphsTextureSize[0] = V.width / 4),
                        (this._glyphsTextureSize[1] = V.height / 4);
                      var g = o.extrudeNoRotationMatrix;
                      r.bindTexture(e.labelFBO.colorTexture, 3),
                        c.setUniform1i("u_referenceTex", 3),
                        c.setUniformMatrix4fv(
                          "u_transformMatrix",
                          t.tileTransform.transform
                        ),
                        c.setUniformMatrix4fv("u_extrudeMatrix", g),
                        c.setUniform2fv(
                          "u_normalized_origin",
                          t.tileTransform.displayCoord
                        ),
                        c.setUniform2fv(
                          "u_mosaicSize",
                          this._glyphsTextureSize
                        ),
                        c.setUniform1f("u_pixelRatio", e.pixelRatio),
                        c.setUniform1f("u_opacity", 1),
                        c.setUniform1f("u_zoomLevel", 10 * e.displayLevel),
                        c.setUniform1f("u_mapRotation", e.state.rotation),
                        c.setUniform1f("u_mapAligned", 0),
                        c.setUniform2fv("u_screenSize", e.state.size),
                        r.drawElements(4, d, 5125, 4 * u),
                        r.bindVAO(null),
                        r.setStencilTestEnabled(!0),
                        r.setBlendingEnabled(!0);
                    }
                  }
                }),
                (t.prototype.getGeometryType = function() {
                  return n.WGLGeometryType.LABEL;
                }),
                (t.prototype._getVAO = function(e, t) {
                  var i = t.labelGeometry;
                  if (i && i.vao) return i.vao;
                  var n = i.vertexBufferMap[a.C_VBO_GEOMETRY],
                    r = i.vertexBufferMap[a.C_VBO_VISIBILITY],
                    s = i.vertexBufferMap[a.C_VBO_VISIBILITY_RANGE],
                    l = i.indexBuffer;
                  return n && l && s
                    ? ((i.vao = new o(
                        e,
                        this._attributeLocations,
                        this._vertexAttributeLayout,
                        { geometry: n, visibility: r, visibilityRange: s },
                        l
                      )),
                      i.vao)
                    : null;
                }),
                t
              );
            })(r.default);
            t.default = s;
          }.apply(null, n)) || (e.exports = a);
    },
    2213: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(5), i(2007), i(2010), i(2070), i(91)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._lineAttributeLocations = {
                    a_pos: 0,
                    a_id: 1,
                    a_color: 2,
                    a_offsetAndNormal: 3,
                    a_accumulatedDistanceAndHalfWidth: 4,
                    a_tlbr: 5,
                    a_segmentDirection: 6
                  }),
                  (t._lineAttributeLocationsVV = {
                    a_pos: 0,
                    a_id: 1,
                    a_color: 2,
                    a_offsetAndNormal: 3,
                    a_accumulatedDistanceAndHalfWidth: 4,
                    a_tlbr: 5,
                    a_segmentDirection: 6,
                    a_vv: 7
                  }),
                  (t._lineVertexAttributeLayout = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 32,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 4,
                        stride: 32,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 32,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_offsetAndNormal",
                        count: 4,
                        type: 5120,
                        offset: 12,
                        stride: 32,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_accumulatedDistanceAndHalfWidth",
                        count: 2,
                        type: 5123,
                        offset: 16,
                        stride: 32,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_tlbr",
                        count: 4,
                        type: 5123,
                        offset: 20,
                        stride: 32,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_segmentDirection",
                        count: 4,
                        type: 5120,
                        offset: 28,
                        stride: 32,
                        normalized: !1,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._lineVertexAttributeLayoutVV = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 44,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 4,
                        stride: 44,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 44,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_offsetAndNormal",
                        count: 4,
                        type: 5120,
                        offset: 12,
                        stride: 44,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_accumulatedDistanceAndHalfWidth",
                        count: 2,
                        type: 5123,
                        offset: 16,
                        stride: 44,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_tlbr",
                        count: 4,
                        type: 5123,
                        offset: 20,
                        stride: 44,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_segmentDirection",
                        count: 4,
                        type: 5120,
                        offset: 28,
                        stride: 44,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_vv",
                        count: 3,
                        type: 5126,
                        offset: 32,
                        stride: 44,
                        normalized: !1,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._spritesTextureSize = new Float32Array(2)),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.dispose = function() {}),
                (t.prototype.getGeometryType = function() {
                  return n.WGLGeometryType.LINE;
                }),
                (t.prototype.drawGeometry = function(e, t, i, n) {
                  var a = e.context,
                    r = e.painter,
                    o = e.rendererInfo,
                    s = e.requiredLevel,
                    l = e.drawPhase,
                    d = i.indexFrom,
                    u = i.indexCount,
                    f = i.materialInfo,
                    _ = f.materialKeyInfo,
                    h = _.hasVV()
                      ? this._lineAttributeLocationsVV
                      : this._lineAttributeLocations,
                    c = r.materialManager.getProgram(f.materialKey, l, h);
                  if (c) {
                    a.bindProgram(c);
                    var p = this._getVAO(a, t, _.hasVV());
                    a.bindVAO(p);
                    var v = 1 / e.pixelRatio;
                    if (f.texBindingInfo.length > 0) {
                      var m = f.texBindingInfo[0],
                        V = m.pageId,
                        g = r.textureManager.sprites;
                      (this._spritesTextureSize[0] = g.getWidth(V)),
                        (this._spritesTextureSize[1] = g.getHeight(V)),
                        r.textureManager.bindSpritePage(a, V, m.unit),
                        c.setUniform1i(m.semantic, m.unit),
                        c.setUniform2fv(
                          "u_mosaicSize",
                          this._spritesTextureSize
                        );
                    }
                    var S = Math.pow(2, s - t.key.level) / e.pixelRatio;
                    c.setUniform1f("u_zoomFactor", S),
                      c.setUniformMatrix4fv(
                        "u_transformMatrix",
                        t.tileTransform.transform
                      ),
                      c.setUniformMatrix4fv("u_extrudeMatrix", r.extrudeMatrix),
                      c.setUniform2fv(
                        "u_normalized_origin",
                        t.tileTransform.displayCoord
                      ),
                      c.setUniform1f("u_opacity", 1),
                      c.setUniform1f("u_blur", 0 + v),
                      c.setUniform1f("u_antialiasing", v),
                      c.setUniform1f("u_zoomFactor", S),
                      _.vvSizeMinMaxValue &&
                        c.setUniform4fv(
                          "u_vvSizeMinMaxValue",
                          o.vvSizeMinMaxValue
                        ),
                      _.vvSizeScaleStops &&
                        c.setUniform1f(
                          "u_vvSizeScaleStopsValue",
                          o.vvSizeScaleStopsValue
                        ),
                      _.vvSizeFieldStops &&
                        (c.setUniform1fv(
                          "u_vvSizeFieldStopsValues",
                          o.vvSizeFieldStopsValues
                        ),
                        c.setUniform1fv(
                          "u_vvSizeFieldStopsSizes",
                          o.vvSizeFieldStopsSizes
                        )),
                      _.vvSizeUnitValue &&
                        c.setUniform1f(
                          "u_vvSizeUnitValueWorldToPixelsRatio",
                          o.vvSizeUnitValueToPixelsRatio
                        ),
                      _.vvColor &&
                        (c.setUniform1fv("u_vvColorValues", o.vvColorValues),
                        c.setUniform4fv("u_vvColors", o.vvColors)),
                      _.vvOpacity &&
                        (c.setUniform1fv(
                          "u_vvOpacityValues",
                          o.vvOpacityValues
                        ),
                        c.setUniform1fv("u_vvOpacities", o.vvOpacities)),
                      a.setFaceCullingEnabled(!0),
                      a.setFrontFace(2305),
                      a.setCullFace(1029),
                      a.drawElements(4, u, 5125, 4 * d),
                      a.setFaceCullingEnabled(!1),
                      a.bindVAO(null);
                  }
                }),
                (t.prototype._getVAO = function(e, t, i) {
                  if (t.lineGeometry.vao) return t.lineGeometry.vao;
                  var n = t.lineGeometry.vertexBufferMap[a.C_VBO_GEOMETRY],
                    r = t.lineGeometry.indexBuffer;
                  return n && r
                    ? ((t.lineGeometry.vao = i
                        ? new o(
                            e,
                            this._lineAttributeLocationsVV,
                            this._lineVertexAttributeLayoutVV,
                            { geometry: n },
                            r
                          )
                        : new o(
                            e,
                            this._lineAttributeLocations,
                            this._lineVertexAttributeLayout,
                            { geometry: n },
                            r
                          )),
                      t.lineGeometry.vao)
                    : null;
                }),
                t
              );
            })(r.default);
            t.default = s;
          }.apply(null, n)) || (e.exports = a);
    },
    2214: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(5), i(2007), i(2010), i(2070), i(50), i(91)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o, s) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._iconAttributeLocations = {
                    a_pos: 0,
                    a_vertexOffsetAndTex: 1,
                    a_id: 2,
                    a_color: 3,
                    a_outlineColor: 4,
                    a_sizeAndOutlineWidth: 5
                  }),
                  (t._iconAttributeLocationsVV = {
                    a_pos: 0,
                    a_vertexOffsetAndTex: 1,
                    a_id: 2,
                    a_color: 3,
                    a_outlineColor: 4,
                    a_sizeAndOutlineWidth: 5,
                    a_vv: 6
                  }),
                  (t._iconAttributeLocationsHeatmap = {
                    a_pos: 0,
                    a_vertexOffsetAndTex: 1,
                    a_id: 2,
                    a_color: 3,
                    a_outlineColor: 4,
                    a_sizeAndOutlineWidth: 5,
                    a_weight: 6
                  }),
                  (t._iconVertexAttributes = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 24,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_vertexOffsetAndTex",
                        count: 4,
                        type: 5120,
                        offset: 4,
                        stride: 24,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 24,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 12,
                        stride: 24,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_outlineColor",
                        count: 4,
                        type: 5121,
                        offset: 16,
                        stride: 24,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_sizeAndOutlineWidth",
                        count: 4,
                        type: 5121,
                        offset: 20,
                        stride: 24,
                        normalized: !1,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._iconVertexAttributesWithVV = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 40,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_vertexOffsetAndTex",
                        count: 4,
                        type: 5120,
                        offset: 4,
                        stride: 40,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 40,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 12,
                        stride: 40,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_outlineColor",
                        count: 4,
                        type: 5121,
                        offset: 16,
                        stride: 40,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_sizeAndOutlineWidth",
                        count: 4,
                        type: 5121,
                        offset: 20,
                        stride: 40,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_vv",
                        count: 4,
                        type: 5126,
                        offset: 24,
                        stride: 40,
                        normalized: !1,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._iconVertexAttributesWithHeatmap = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 28,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_vertexOffsetAndTex",
                        count: 4,
                        type: 5120,
                        offset: 4,
                        stride: 28,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 28,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 12,
                        stride: 28,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_outlineColor",
                        count: 4,
                        type: 5121,
                        offset: 16,
                        stride: 28,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_sizeAndOutlineWidth",
                        count: 4,
                        type: 5121,
                        offset: 20,
                        stride: 28,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_weight",
                        count: 1,
                        type: 5126,
                        offset: 24,
                        stride: 28,
                        normalized: !1,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._spritesTextureSize = new Float32Array(2)),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.dispose = function() {}),
                (t.prototype.getGeometryType = function() {
                  return n.WGLGeometryType.MARKER;
                }),
                (t.prototype.drawGeometry = function(e, t, i, n) {
                  var a = e.context,
                    r = e.painter,
                    o = e.rendererInfo,
                    s = e.drawPhase,
                    l = i.indexCount,
                    d = i.indexFrom,
                    u = i.materialInfo,
                    f = u.materialKeyInfo,
                    _ = f.heatmap,
                    h = f.hasVV()
                      ? this._iconAttributeLocationsVV
                      : this._iconAttributeLocations,
                    c = r.materialManager.getProgram(u.materialKey, s, h);
                  if (c) {
                    a.bindProgram(c);
                    var p = this._getVAO(a, t, f.hasVV(), _);
                    if ((a.bindVAO(p), _)) {
                      var v = this._getIntensityTexture(a, o.heatmapParameters);
                      a.bindTexture(v, 1),
                        c.setUniform1i("u_texture", 1),
                        (this._spritesTextureSize[0] = Math.round(
                          o.heatmapParameters.radius
                        )),
                        (this._spritesTextureSize[1] = Math.round(
                          o.heatmapParameters.radius
                        ));
                    } else {
                      var m = u.texBindingInfo[0],
                        V = m.pageId;
                      r.textureManager.bindSpritePage(a, V, m.unit),
                        c.setUniform1i(m.semantic, m.unit);
                      var g = r.textureManager.sprites;
                      (this._spritesTextureSize[0] = g.getWidth(V) / 4),
                        (this._spritesTextureSize[1] = g.getHeight(V) / 4);
                    }
                    var S =
                      o.vvMaterialParameters.vvRotationEnabled &&
                      "geographic" === o.vvMaterialParameters.vvRotationType
                        ? r.extrudeMatrix
                        : r.extrudeNoRotationMatrix;
                    c.setUniformMatrix4fv(
                      "u_transformMatrix",
                      t.tileTransform.transform
                    ),
                      c.setUniformMatrix4fv("u_extrudeMatrix", S),
                      c.setUniform2fv(
                        "u_normalized_origin",
                        t.tileTransform.displayCoord
                      ),
                      c.setUniform2fv("u_mosaicSize", this._spritesTextureSize),
                      c.setUniform1f("u_opacity", 1),
                      f.vvSizeMinMaxValue &&
                        c.setUniform4fv(
                          "u_vvSizeMinMaxValue",
                          o.vvSizeMinMaxValue
                        ),
                      f.vvSizeScaleStops &&
                        c.setUniform1f(
                          "u_vvSizeScaleStopsValue",
                          o.vvSizeScaleStopsValue
                        ),
                      f.vvSizeFieldStops &&
                        (c.setUniform1fv(
                          "u_vvSizeFieldStopsValues",
                          o.vvSizeFieldStopsValues
                        ),
                        c.setUniform1fv(
                          "u_vvSizeFieldStopsSizes",
                          o.vvSizeFieldStopsSizes
                        )),
                      f.vvSizeUnitValue &&
                        c.setUniform1f(
                          "u_vvSizeUnitValueWorldToPixelsRatio",
                          o.vvSizeUnitValueToPixelsRatio
                        ),
                      f.vvColor &&
                        (c.setUniform1fv("u_vvColorValues", o.vvColorValues),
                        c.setUniform4fv("u_vvColors", o.vvColors)),
                      f.vvOpacity &&
                        (c.setUniform1fv(
                          "u_vvOpacityValues",
                          o.vvOpacityValues
                        ),
                        c.setUniform1fv("u_vvOpacities", o.vvOpacities)),
                      f.vvRotation &&
                        c.setUniform1f(
                          "u_vvRotationType",
                          "geographic" === o.vvMaterialParameters.vvRotationType
                            ? 0
                            : 1
                        ),
                      a.drawElements(4, l, 5125, 4 * d),
                      a.bindVAO(null);
                  }
                }),
                (t.prototype._getVAO = function(e, t, i, n) {
                  if (t.iconGeometry.vao) return t.iconGeometry.vao;
                  var r = t.iconGeometry.vertexBufferMap[a.C_VBO_GEOMETRY],
                    o = t.iconGeometry.indexBuffer;
                  return r && o
                    ? ((t.iconGeometry.vao = i
                        ? new s(
                            e,
                            this._iconAttributeLocationsVV,
                            this._iconVertexAttributesWithVV,
                            { geometry: r },
                            o
                          )
                        : n
                          ? new s(
                              e,
                              this._iconAttributeLocationsHeatmap,
                              this._iconVertexAttributesWithHeatmap,
                              { geometry: r },
                              o
                            )
                          : new s(
                              e,
                              this._iconAttributeLocations,
                              this._iconVertexAttributes,
                              { geometry: r },
                              o
                            )),
                      t.iconGeometry.vao)
                    : null;
                }),
                (t.prototype._getIntensityTexture = function(e, t) {
                  if (t.intensityKernel && !t.refreshIntensityKernel)
                    return t.intensityKernel;
                  t.intensityKernel &&
                    (t.intensityKernel.dispose(), (t.intensityKernel = null));
                  for (
                    var i = t.radius,
                      n = t.kernelSize,
                      a = t.blurRadius,
                      r = i * i,
                      s = [],
                      l = -1;
                    ++l < n;

                  )
                    s[l] =
                      Math.exp(-Math.pow(l - a, 2) / (2 * r)) /
                      (Math.sqrt(2 * Math.PI) * (i / 2));
                  for (var d, u, f, _ = [], h = 0; h < n; h++)
                    for (u = s[h], l = 0; l < n; l++)
                      (f = h * n + l),
                        (d = s[l]),
                        (_[4 * f + 0] = u * d),
                        (_[4 * f + 1] = 0),
                        (_[4 * f + 2] = 0),
                        (_[4 * f + 3] = 1);
                  var c = new o(
                    e,
                    {
                      target: 3553,
                      pixelFormat: 6408,
                      internalFormat: e.capabilities.colorBufferFloat.RGBA32F,
                      dataType: 5126,
                      samplingMode: e.capabilities.textureFloatLinear
                        ? 9729
                        : 9728,
                      wrapMode: 33071,
                      width: n,
                      height: n
                    },
                    new Float32Array(_)
                  );
                  return (
                    (t.intensityKernel = c), (t.refreshIntensityKernel = !1), c
                  );
                }),
                t
              );
            })(r.default);
            t.default = l;
          }.apply(null, n)) || (e.exports = a);
    },
    2215: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(5), i(2007), i(2010), i(2070), i(91)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._attributeLocations = {
                    a_pos: 0,
                    a_id: 1,
                    a_color: 2,
                    a_vertexOffset: 3,
                    a_texFontSize: 4,
                    a_visible: 5
                  }),
                  (t._attributeLocationsVV = {
                    a_pos: 0,
                    a_id: 1,
                    a_color: 2,
                    a_vertexOffset: 3,
                    a_texFontSize: 4,
                    a_vv: 5,
                    a_visible: 6
                  }),
                  (t._vertexAttributeLayout = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 20,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 4,
                        stride: 20,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 20,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_vertexOffset",
                        count: 2,
                        type: 5122,
                        offset: 12,
                        stride: 20,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_texFontSize",
                        count: 4,
                        type: 5120,
                        offset: 16,
                        stride: 20,
                        normalized: !1,
                        divisor: 0
                      }
                    ],
                    visibility: [
                      {
                        name: "a_visible",
                        count: 1,
                        type: 5121,
                        offset: 0,
                        stride: 1,
                        normalized: !0,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._vertexAttributeLayoutVV = {
                    geometry: [
                      {
                        name: "a_pos",
                        count: 2,
                        type: 5122,
                        offset: 0,
                        stride: 36,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_id",
                        count: 4,
                        type: 5121,
                        offset: 4,
                        stride: 36,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_color",
                        count: 4,
                        type: 5121,
                        offset: 8,
                        stride: 36,
                        normalized: !0,
                        divisor: 0
                      },
                      {
                        name: "a_vertexOffset",
                        count: 2,
                        type: 5122,
                        offset: 12,
                        stride: 36,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_texFontSize",
                        count: 4,
                        type: 5120,
                        offset: 16,
                        stride: 36,
                        normalized: !1,
                        divisor: 0
                      },
                      {
                        name: "a_vv",
                        count: 4,
                        type: 5126,
                        offset: 20,
                        stride: 36,
                        normalized: !1,
                        divisor: 0
                      }
                    ],
                    visibility: [
                      {
                        name: "a_visible",
                        count: 1,
                        type: 5121,
                        offset: 0,
                        stride: 1,
                        normalized: !0,
                        divisor: 0
                      }
                    ]
                  }),
                  (t._glyphsTextureSize = new Float32Array(2)),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.dispose = function() {}),
                (t.prototype.getGeometryType = function() {
                  return n.WGLGeometryType.TEXT;
                }),
                (t.prototype.drawGeometry = function(e, t, i, n) {
                  var a = e.context,
                    r = e.painter,
                    o = e.rendererInfo,
                    s = e.drawPhase,
                    l = i.materialInfo,
                    d = i.indexCount,
                    u = i.indexFrom,
                    f = l.materialKeyInfo,
                    _ =
                      f.vvSizeMinMaxValue ||
                      f.vvSizeScaleStops ||
                      f.vvSizeFieldStops ||
                      f.vvSizeUnitValue ||
                      f.vvColor ||
                      f.vvRotation ||
                      f.vvOpacity,
                    h = _
                      ? this._attributeLocationsVV
                      : this._attributeLocations,
                    c = r.materialManager.getProgram(l.materialKey, s, h);
                  if (c) {
                    a.bindProgram(c);
                    var p = this._getVAO(a, t, _, this.getGeometryType());
                    a.bindVAO(p);
                    var v = l.texBindingInfo[0],
                      m = v.pageId;
                    r.textureManager.bindGlyphsPage(a, m, v.unit),
                      c.setUniform1i(v.semantic, v.unit);
                    var V = r.textureManager.glyphs;
                    (this._glyphsTextureSize[0] = V.width / 4),
                      (this._glyphsTextureSize[1] = V.height / 4);
                    var g =
                      o.vvMaterialParameters.vvRotationEnabled &&
                      "geographic" === o.vvMaterialParameters.vvRotationType
                        ? r.extrudeMatrix
                        : r.extrudeNoRotationMatrix;
                    c.setUniformMatrix4fv(
                      "u_transformMatrix",
                      t.tileTransform.transform
                    ),
                      c.setUniformMatrix4fv("u_extrudeMatrix", g),
                      c.setUniform2fv(
                        "u_normalized_origin",
                        t.tileTransform.displayCoord
                      ),
                      c.setUniform2fv("u_mosaicSize", this._glyphsTextureSize),
                      c.setUniform1f("u_pixelRatio", 1),
                      c.setUniform1f("u_opacity", 1),
                      f.vvSizeMinMaxValue &&
                        c.setUniform4fv(
                          "u_vvSizeMinMaxValue",
                          o.vvSizeMinMaxValue
                        ),
                      f.vvSizeScaleStops &&
                        c.setUniform1f(
                          "u_vvSizeScaleStopsValue",
                          o.vvSizeScaleStopsValue
                        ),
                      f.vvSizeFieldStops &&
                        (c.setUniform1fv(
                          "u_vvSizeFieldStopsValues",
                          o.vvSizeFieldStopsValues
                        ),
                        c.setUniform1fv(
                          "u_vvSizeFieldStopsSizes",
                          o.vvSizeFieldStopsSizes
                        )),
                      f.vvSizeUnitValue &&
                        c.setUniform1f(
                          "u_vvSizeUnitValueWorldToPixelsRatio",
                          o.vvSizeUnitValueToPixelsRatio
                        ),
                      f.vvColor &&
                        (c.setUniform1fv("u_vvColorValues", o.vvColorValues),
                        c.setUniform4fv("u_vvColors", o.vvColors)),
                      f.vvOpacity &&
                        (c.setUniform1fv(
                          "u_vvOpacityValues",
                          o.vvOpacityValues
                        ),
                        c.setUniform1fv("u_vvOpacities", o.vvOpacities)),
                      f.vvRotation &&
                        c.setUniform1f(
                          "u_vvRotationType",
                          "geographic" === o.vvMaterialParameters.vvRotationType
                            ? 0
                            : 1
                        ),
                      a.drawElements(4, d, 5125, 4 * u),
                      a.bindVAO(null);
                  }
                }),
                (t.prototype._getVAO = function(e, t, i, n) {
                  var r = t.getGeometry(n);
                  if (r && r.vao) return r.vao;
                  var s = r.vertexBufferMap[a.C_VBO_GEOMETRY],
                    l = r.vertexBufferMap[a.C_VBO_VISIBILITY],
                    d = r.indexBuffer;
                  return s && d
                    ? ((r.vao = i
                        ? new o(
                            e,
                            this._attributeLocationsVV,
                            this._vertexAttributeLayoutVV,
                            { geometry: s, visibility: l },
                            d
                          )
                        : new o(
                            e,
                            this._attributeLocations,
                            this._vertexAttributeLayout,
                            { geometry: s, visibility: l },
                            d
                          )),
                      r.vao)
                    : null;
                }),
                t
              );
            })(r.default);
            t.default = s;
          }.apply(null, n)) || (e.exports = a);
    },
    2216: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(15), i(2217), i(2220)]),
        void 0 ===
          (a = function(e, t, i, n, a) {
            return (function() {
              function e() {
                (this._hlRenderer = new n()),
                  (this._hlSurfaces = new a()),
                  (this._width = void 0),
                  (this._height = void 0);
              }
              return (
                (e.prototype.dispose = function() {
                  this._hlSurfaces && this._hlSurfaces.dispose(),
                    this._hlRenderer && this._hlRenderer.dispose(),
                    (this._boundFBO = null);
                }),
                (e.prototype.setup = function(e, t, i) {
                  var n = t % 4,
                    a = i % 4;
                  (t += n < 2 ? -n : 4 - n),
                    (i += a < 2 ? -a : 4 - a),
                    (this._width = t),
                    (this._height = i),
                    (this._boundFBO = e.getBoundFramebufferObject());
                  var r = Math.round(0.75 * t),
                    o = Math.round(0.75 * i);
                  this._hlRenderer.setup(e, r, o),
                    this._hlSurfaces.setup(e, r, o);
                }),
                (e.prototype.setHighlightOptions = function(e) {
                  this._hlRenderer.setHighlightOptions({
                    fillColor: e.fillColor,
                    outlineColor: e.outlineColor,
                    outlineWidth: 0.75 * e.outlineWidth,
                    outerHaloWidth: 0.75 * e.outerHaloWidth,
                    innerHaloWidth: 0.75 * e.innerHaloWidth,
                    outlinePosition: 0.75 * e.outlinePosition
                  });
                }),
                (e.prototype.startMaskDraw = function(e) {
                  e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),
                    e.setClearColor(0, 0, 0, 0),
                    e.setClearStencil(0),
                    e.clear(e.gl.COLOR_BUFFER_BIT | e.gl.STENCIL_BUFFER_BIT),
                    e.setViewport(
                      0,
                      0,
                      0.75 * this._width,
                      0.75 * this._height
                    );
                }),
                (e.prototype.draw = function(e) {
                  e.setStencilTestEnabled(!1),
                    e.setBlendingEnabled(!1),
                    e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),
                    e.setClearColor(0, 0, 0, 0),
                    e.clear(e.gl.COLOR_BUFFER_BIT),
                    this._hlRenderer.preBlur(
                      e,
                      this._hlSurfaces.sharedBlur1Tex
                    ),
                    i("esri-feature-highlight-debug")
                      ? (e.bindFramebuffer(null),
                        e.clear(e.gl.COLOR_BUFFER_BIT),
                        this._hlRenderer.finalBlur(
                          e,
                          this._hlSurfaces.sharedBlur2Tex
                        ))
                      : (e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),
                        e.setClearColor(0, 0, 0, 0),
                        e.clear(e.gl.COLOR_BUFFER_BIT),
                        this._hlRenderer.finalBlur(
                          e,
                          this._hlSurfaces.sharedBlur2Tex
                        ),
                        e.bindFramebuffer(this._boundFBO),
                        e.setBlendingEnabled(!0),
                        e.setViewport(0, 0, this._width, this._height),
                        this._hlRenderer.renderHighlight(
                          e,
                          this._hlSurfaces.sharedBlur1Tex
                        ),
                        (this._boundFBO = null));
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2217: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2218), i(77), i(2035), i(50), i(91)]),
        void 0 ===
          (a = function(e, t, i, n, a, r, o) {
            var s = [void 0, void 0, void 0, 1],
              l = [3, 4],
              d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
              u = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            return (function() {
              function e() {
                (this._width = void 0),
                  (this._height = void 0),
                  (this._highlightOptions = {
                    fillColor: [0.2, 0.6, 0.9, 0.75],
                    outlineColor: [0.2, 0.6, 0.9, 0.9],
                    outlinePosition: 0,
                    outlineWidth: 3.4,
                    innerHaloWidth: 2,
                    outerHaloWidth: 3.3
                  }),
                  (this._resources = null);
              }
              return (
                (e.prototype.dispose = function() {
                  this._resources &&
                    (this._resources.quadGeometry.dispose(),
                    this._resources.quadVAO.dispose(),
                    this._resources.highlightProgram.dispose(),
                    this._resources.blurProgram.dispose(),
                    this._resources.shadeTex.dispose(),
                    (this._resources = null));
                }),
                (e.prototype.preBlur = function(e, t) {
                  e.bindTexture(t, l[0]),
                    e.bindProgram(this._resources.blurProgram),
                    this._resources.blurProgram.setUniform4fv("u_direction", [
                      1,
                      0,
                      1 / this._width,
                      0
                    ]),
                    this._resources.blurProgram.setUniformMatrix4fv(
                      "u_channelSelector",
                      d
                    ),
                    e.bindVAO(this._resources.quadVAO),
                    e.drawArrays(5, 0, 4),
                    e.bindVAO();
                }),
                (e.prototype.finalBlur = function(e, t) {
                  e.bindTexture(t, l[0]),
                    e.bindProgram(this._resources.blurProgram),
                    this._resources.blurProgram.setUniform4fv("u_direction", [
                      0,
                      1,
                      0,
                      1 / this._height
                    ]),
                    this._resources.blurProgram.setUniformMatrix4fv(
                      "u_channelSelector",
                      u
                    ),
                    e.bindVAO(this._resources.quadVAO),
                    e.drawArrays(5, 0, 4),
                    e.bindVAO();
                }),
                (e.prototype.renderHighlight = function(e, t) {
                  e.bindTexture(t, l[0]),
                    e.bindTexture(this._resources.shadeTex, l[1]),
                    e.bindProgram(this._resources.highlightProgram),
                    e.bindVAO(this._resources.quadVAO),
                    e.drawArrays(5, 0, 4),
                    e.bindVAO();
                }),
                (e.prototype._initialize = function(e, t, d) {
                  (this._width = t), (this._height = d);
                  var u = new n(
                      e,
                      34962,
                      35044,
                      new Int8Array([
                        -128,
                        -128,
                        0,
                        0,
                        127,
                        -128,
                        255,
                        0,
                        -128,
                        127,
                        0,
                        255,
                        127,
                        127,
                        255,
                        255
                      ]).buffer
                    ),
                    f = new o(
                      e,
                      { a_position: 0, a_texcoord: 1 },
                      {
                        geometry: [
                          {
                            name: "a_position",
                            count: 2,
                            type: 5120,
                            offset: 0,
                            stride: 4,
                            normalized: !0
                          },
                          {
                            name: "a_texcoord",
                            count: 2,
                            type: 5121,
                            offset: 2,
                            stride: 4,
                            normalized: !0
                          }
                        ]
                      },
                      { geometry: u }
                    ),
                    _ = new a("hl", ["texturedVS", "highlightFS"], [], i, e, {
                      a_position: 0,
                      a_texcoord: 1
                    }).getProgram([]),
                    h = new a("hl", ["texturedVS", "blurFS"], [], i, e, {
                      a_position: 0,
                      a_texcoord: 1
                    }).getProgram([]);
                  _.setUniform1i("u_texture", l[0]),
                    _.setUniform1i("u_shade", l[1]),
                    _.setUniform4fv("u_sigmas", s),
                    h.setUniform1i("u_texture", l[0]),
                    h.setUniform4fv("u_sigmas", s);
                  var c = new r(e, {
                    target: 3553,
                    pixelFormat: 6408,
                    dataType: 5121,
                    wrapMode: 33071,
                    width: 256,
                    height: 1,
                    samplingMode: 9728
                  });
                  this._resources = {
                    quadGeometry: u,
                    quadVAO: f,
                    highlightProgram: _,
                    blurProgram: h,
                    shadeTex: c
                  };
                }),
                (e.prototype.setHighlightOptions = function(e) {
                  function t(e, t, i) {
                    (_[0] = (1 - i) * e[0] + i * t[0]),
                      (_[1] = (1 - i) * e[1] + i * t[1]),
                      (_[2] = (1 - i) * e[2] + i * t[2]),
                      (_[3] = (1 - i) * e[3] + i * t[3]);
                  }
                  if (((this._highlightOptions = e), this._resources)) {
                    var i =
                        e.outlinePosition -
                        e.outlineWidth / 2 -
                        e.outerHaloWidth,
                      n = e.outlinePosition - e.outlineWidth / 2,
                      a = e.outlinePosition + e.outlineWidth / 2,
                      r =
                        e.outlinePosition +
                        e.outlineWidth / 2 +
                        e.innerHaloWidth,
                      o = Math.sqrt(Math.PI / 2) * s[3],
                      l =
                        Math.abs(i) > o
                          ? Math.round(10 * (Math.abs(i) - o)) / 10
                          : 0,
                      d =
                        Math.abs(r) > o
                          ? Math.round(10 * (Math.abs(r) - o)) / 10
                          : 0;
                    l && !d
                      ? console.warn(
                          "The outer rim of the highlight is " +
                            l +
                            "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."
                        )
                      : !l && d
                        ? console.warn(
                            "The inner rim of the highlight is " +
                              d +
                              "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."
                          )
                        : l &&
                          d &&
                          console.warn(
                            "The highlight is " +
                              Math.max(l, d) +
                              "px away from the edge of the feature; consider reducing some width values."
                          );
                    for (
                      var u,
                        f = new Uint8Array(1024),
                        _ = [void 0, void 0, void 0, void 0],
                        h = 0;
                      h < 256;
                      ++h
                    )
                      (u = i + (h / 255) * (r - i)) < i
                        ? ((f[4 * h + 0] = 0),
                          (f[4 * h + 1] = 0),
                          (f[4 * h + 2] = 0),
                          (f[4 * h + 3] = 0))
                        : u < n
                          ? t([0, 0, 0, 0], e.outlineColor, (u - i) / (n - i))
                          : u < a
                            ? ((_[0] = e.outlineColor[0]),
                              (_[1] = e.outlineColor[1]),
                              (_[2] = e.outlineColor[2]),
                              (_[3] = e.outlineColor[3]))
                            : u < r
                              ? t(
                                  e.outlineColor,
                                  e.fillColor,
                                  (u - a) / (r - a)
                                )
                              : ((f[4 * h + 0] = e.fillColor[0]),
                                (f[4 * h + 1] = e.fillColor[1]),
                                (f[4 * h + 2] = e.fillColor[2]),
                                (f[4 * h + 3] = e.fillColor[3])),
                        (f[4 * h + 0] = 255 * _[0] * _[3]),
                        (f[4 * h + 1] = 255 * _[1] * _[3]),
                        (f[4 * h + 2] = 255 * _[2] * _[3]),
                        (f[4 * h + 3] = 255 * _[3]);
                    this._resources.highlightProgram.setUniform2fv(
                      "u_minMaxDistance",
                      [i, r]
                    ),
                      this._resources.shadeTex.updateData(0, 0, 0, 256, 1, f);
                  }
                }),
                (e.prototype.setup = function(e, t, i) {
                  this._resources
                    ? ((this._width = t), (this._height = i))
                    : (this._initialize(e, t, i),
                      this.setHighlightOptions(this._highlightOptions));
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    },
    2218: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(2219), i(2034)]),
        void 0 ===
          (a = function(e, t, i, n) {
            var a = new n();
            return n.parse(i, a), a;
          }.apply(null, n)) || (e.exports = a);
    },
    2219: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Highlight generation and rendering shaders.\n\n  These shader sources are loaded by hlShaderSnippets.ts which in turn\n  is used by HighlightRenderer to instantiate the programs needed for\n  generating and rendering the highlights.\n\n  These shaders are intended to be used with full screen quads.\n--\x3e\n<snippets>\n  \x3c!--\n    Vertex shader: texturedVS\n\n    Identity vertex shader that outputs an untransformed 2-D vertex\n    and passes its texture coordinates unchanged to the interpolator.\n  --\x3e\n  <snippet name="texturedVS">\n    <![CDATA[\n    // Vertex position.\n    attribute mediump vec2 a_position;\n\n    // Texture coordinates.\n    attribute mediump vec2 a_texcoord;\n\n    // Texture coordinates to be interpolated.\n    varying mediump vec2 v_texcoord;\n\n    void main(void) {\n      // Pass the position unchanged.\n      gl_Position = vec4(a_position, 0.0, 1.0);\n\n      // Pass the texture coordinates unchanged.\n      v_texcoord = a_texcoord;\n    }\n    ]]>\n  </snippet>\n\n  \x3c!--\n    Fragment shader: blurFS\n\n    A gaussian blur shader. It blurs the alpha channel of its input\n    according to 4 different sigma and stores the results into the\n    four channel of the target framebuffer.\n\n    It is intended to be called twice; the first time to perform an\n    horizontal blur, and a second time to perform a vertical blur.\n\n    This shader is used to turn the highlight mask into a highlight\n    map. The highlight map is an approximation of the signed distance\n    field of the mask.\n  --\x3e\n  <snippet name="blurFS">\n    <![CDATA[\n    // Interpolated texture coordinates.\n    varying mediump vec2 v_texcoord;\n\n    // Blur direction information. There are two possible\n    // configurations that the host code can use.\n    //  - [1, 0, 1/WIDTH, 0] Used when blurring horizontally. In this\n    //    case u_direction[0] = 1 is expressed in pixel and is fed to\n    //    the gauss function to produce the value of the gaussian weight\n    //    for that pixel, while u_direction[2] = 1/WIDTH is in texel units\n    //    and is used to sample the right texel from the texture map.\n    //  - [0, 1, 0, 1/HEIGHT] Used when blurring vertically. In this\n    //    case u_direction[1] = 1 is expressed in pixel and is fed to\n    //    the gauss function to produce the value of the gaussian weight\n    //    for that pixel, while u_direction[3] = 1/HEIGHT is in texel units\n    //    and is used to sample the right texel from the texture map.\n    uniform mediump vec4 u_direction;\n\n    // Source to destination channel selection matrix.\n    uniform mediump mat4 u_channelSelector;\n\n    // The highlight map is obtained by blurring the alpha channel of the highlight\n    // mask accroding to these 4 values of the gaussian\'s sigma parameter.\n    uniform mediump vec4 u_sigmas;\n\n    // This is the highlight mask if we have not blurred horizontally yet, otherwise\n    // it is the horizontally blurred highlight map and blurring it one more time\n    // vertically will complete the process.\n    uniform sampler2D u_texture;\n\n    // The gaussian kernel. Note that it lacks the normalization constant, because\n    // we want to store it unnormalized in the highlight map (i.e. having a peak\n    // value of 1). Note also that we are using the SIMD (single instruction, multiple\n    // data) capabilities of the GPU to compute four different gaussian kernels, one\n    // for each sigma.\n    mediump vec4 gauss(mediump vec2 dir) {\n      return exp(-dot(dir, dir) / (2.0 * u_sigmas * u_sigmas));\n    }\n\n    mediump vec4 selectChannel(mediump vec4 sample) {\n      return u_channelSelector * sample;\n    }\n\n    // Sample the input texture and accumulated its gaussian weighted value and the\n    // total weight.\n    void accumGauss(mediump float i, inout mediump vec4 tot, inout mediump vec4 weight) {\n      // Computes the gaussian weights, one for each sigma.\n      // Note that u_direction.xy is [1, 0] when blurring horizontally and [0, 1] when blurring vertically.\n      mediump vec4 w = gauss(i * u_direction.xy);\n\n      // Accumumates the values.\n      // Note that u_direction.xy is [1/WIDTH, 0] when blurring horizontally and [0, 1/HEIGHT] when blurring vertically.\n      tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw)) * w;\n\n      // Accumulates the weights.\n      weight += w;\n    }\n\n    void main(void) {\n      // Initialize accumulated values and weights to zero.\n      mediump vec4 tot = vec4(0.0, 0.0, 0.0, 0.0);\n      mediump vec4 weight = vec4(0.0, 0.0, 0.0, 0.0);\n\n      // Accumulates enough samples. These will be taken\n      // horizontally or vertically depending on the value\n      // of u_direction.\n      accumGauss(-5.0, tot, weight);\n      accumGauss(-4.0, tot, weight);\n      accumGauss(-3.0, tot, weight);\n      accumGauss(-2.0, tot, weight);\n      accumGauss(-1.0, tot, weight);\n      accumGauss(0.0, tot, weight);\n      accumGauss(1.0, tot, weight);\n      accumGauss(2.0, tot, weight);\n      accumGauss(3.0, tot, weight);\n      accumGauss(4.0, tot, weight);\n      accumGauss(5.0, tot, weight);\n\n      // Compute blurred values.\n      mediump vec4 rgba = tot / weight;\n\n      // Return the values. Note that each channel will contain\n      // the result of a different blur operation, one for each\n      // of the four chosen sigma.\n      gl_FragColor = vec4(rgba);\n    }\n    ]]>\n  </snippet>\n\n  \x3c!--\n    Fragment shader: highlightFS\n\n    Takes as input the highlight map, estimated the signed distance field,\n    and shades the fragments according to their estimated distance from the\n    edge of the highlighted feature.\n\n    A shade texture is used to turn distance values into colors; the shade\n    texture is basically a color gradient and is recomputed on the host\n    every time that the user alters the highlight options.\n  --\x3e\n  <snippet name="highlightFS">\n    <![CDATA[\n    // Interpolated texture coordinates.\n    varying mediump vec2 v_texcoord;\n\n    // The highlight map. Each channel is a blurred\n    // version of the alpha channel of the highlight mask.\n    //  - Channel 0 (red) corresponds to a gaussian blur with sigma = u_sigmas[0];\n    //  - Channel 1 (green) corresponds to a gaussian blur with sigma = u_sigmas[1];\n    //  - Channel 2 (blue) corresponds to a gaussian blur with sigma = u_sigmas[2];\n    //  - Channel 3 (alpha) corresponds to a gaussian blur with sigma = u_sigmas[3];\n    // As of today, only channel 3 is used for distance estimation.\n    // But the availability of different amounts of blur leaves the\n    // door open to multi-scale approaches.\n    uniform sampler2D u_texture;\n\n    // The highlight map was obtained by blurring the alpha channel of the highlight\n    // mask accroding to these 4 values of the gaussian\'s sigma parameter.\n    uniform mediump vec4 u_sigmas;\n\n    // A 1-D texture used to shade the highlight.\n    uniform sampler2D u_shade;\n\n    // The 1-D shade texture is spreaded between u_minMaxDistance[0] and u_minMaxDistance[1].\n    uniform mediump vec2 u_minMaxDistance;\n\n    // Signed distance estimation.\n    mediump float estimateDistance() {\n      // Use the largest sigma and the corresponding distance value stored in the\n      // last channel of the highlight map.\n      mediump float sigma = u_sigmas[3];\n      mediump float y = texture2D(u_texture, v_texcoord)[3];\n\n      // Estimates the distance by linearization and local inversion around\n      // the inflection point. The inflection point is in x = 0.\n      const mediump float y0 = 0.5;                           // Value of the convolution at the inflection point.\n      mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * sigma);  // Slope of the convolution at the inflection point.\n      mediump float d = (y - y0) / m0;                        // Inversion of a local linearization.\n\n      // Return the estimated distance.\n      return d;\n    }\n\n    // Shading based on estimated distance.\n    mediump vec4 shade(mediump float d) {\n      // Maps the sampled distance from the [A, D] range (see HighlightRenderer::setHighlightOptions) to [0, 1].\n      mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\n\n      // Force to [0, 1]; it should not be necessary because the shade texture uses the CLAMP address mode, so\n      // this should happen anyway internally to the sampler, but in practice it is needed to avoid weird\n      // banding artifacts.\n      // We don\'t really know if we need this or not.\n      mappedDistance = clamp(mappedDistance, 0.0, 1.0);\n\n      // Sample the 1-D shade texture on its center line (i.e. on t=0.5).\n      return texture2D(u_shade, vec2(mappedDistance, 0.5));\n    }\n\n    void main(void) {\n      // Estimate the distance.\n      mediump float d = estimateDistance();\n\n      // Shade the distance.\n      gl_FragColor = shade(d);\n    }\n    ]]>\n  </snippet>\n</snippets>\n';
    },
    2220: function(e, t, i) {
      var n, a;
      (n = [i.dj.c(e.i), t, i(93), i(50)]),
        void 0 ===
          (a = function(e, t, i, n) {
            function a(e, t, a) {
              var r = new n(e, {
                target: 3553,
                pixelFormat: 6408,
                dataType: 5121,
                wrapMode: 33071,
                width: t,
                height: a,
                samplingMode: 9729
              });
              return [
                r,
                i.createWithAttachments(e, r, {
                  colorTarget: 0,
                  depthStencilTarget: 2
                })
              ];
            }
            return (function() {
              function e() {
                (this._width = void 0),
                  (this._height = void 0),
                  (this._resources = null);
              }
              return (
                (e.prototype.dispose = function() {
                  this._resources &&
                    (this._resources.sharedBlur1Tex.dispose(),
                    this._resources.sharedBlur1Fbo.dispose(),
                    this._resources.sharedBlur2Tex.dispose(),
                    this._resources.sharedBlur2Fbo.dispose(),
                    (this._resources = null));
                }),
                (e.prototype._initialize = function(e, t, i) {
                  (this._width = t), (this._height = i);
                  var n = a(e, t, i),
                    r = n[0],
                    o = n[1],
                    s = a(e, t, i),
                    l = s[0],
                    d = s[1];
                  this._resources = {
                    sharedBlur1Tex: r,
                    sharedBlur1Fbo: o,
                    sharedBlur2Tex: l,
                    sharedBlur2Fbo: d
                  };
                }),
                (e.prototype.setup = function(e, t, i) {
                  !this._resources ||
                    (this._width === t && this._height === i) ||
                    this.dispose(),
                    this._resources || this._initialize(e, t, i);
                }),
                Object.defineProperty(e.prototype, "sharedBlur1Tex", {
                  get: function() {
                    return this._resources.sharedBlur1Tex;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "sharedBlur1Fbo", {
                  get: function() {
                    return this._resources.sharedBlur1Fbo;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "sharedBlur2Tex", {
                  get: function() {
                    return this._resources.sharedBlur2Tex;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "sharedBlur2Fbo", {
                  get: function() {
                    return this._resources.sharedBlur2Fbo;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = a);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/webgl/ShaderSnippets": 2034,
      "esri/views/webgl/ShaderVariations": 2035,
      "esri/views/2d/engine/webgl/util/serializationUtils": 2038,
      "esri/core/libs/gl-matrix/vec4": 2039,
      "esri/views/2d/engine/webgl/GeometryUtils": 2043,
      "esri/views/2d/engine/webgl/MaterialInfo": 2068,
      "esri/views/2d/engine/webgl/MaterialKeyInfo": 2069,
      "esri/views/2d/engine/webgl/brushes/WGLGeometryBrush": 2070,
      "esri/views/2d/engine/webgl/shaders/glShaderSnippets": 2078,
      "esri/views/2d/engine/webgl/MaterialInfoUtils": 2079,
      "dojo/text!esri/views/2d/engine/webgl/shaders/tileInfo.xml": 2100,
      "esri/views/2d/engine/webgl/WGLPainter": 2101,
      "esri/views/2d/engine/webgl/brushes/WGLBrush": 2102,
      "esri/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations": 2103,
      "esri/views/webgl/ShaderSourceVariator": 2104,
      "esri/views/2d/engine/StageGL": 2134,
      "esri/views/2d/engine/webgl/Fader": 2193,
      "esri/views/2d/engine/webgl/BitBlitRenderer": 2194,
      "dojo/text!esri/views/2d/engine/webgl/shaders/backgroundShaders.xml": 2195,
      "dojo/text!esri/views/2d/engine/webgl/shaders/bitblitShaders.xml": 2196,
      "dojo/text!esri/views/2d/engine/webgl/shaders/stencilShaders.xml": 2197,
      "esri/views/2d/engine/webgl/brushes/WGLBrushInfo": 2198,
      "esri/views/2d/engine/webgl/MaterialManager": 2199,
      "esri/views/2d/engine/webgl/shaders/iconShaderSnippets": 2200,
      "dojo/text!esri/views/2d/engine/webgl/shaders/iconShaders.xml": 2201,
      "esri/views/2d/engine/webgl/shaders/fillShaderSnippets": 2202,
      "dojo/text!esri/views/2d/engine/webgl/shaders/fillShaders.xml": 2203,
      "esri/views/2d/engine/webgl/shaders/labelShaderSnippets": 2204,
      "dojo/text!esri/views/2d/engine/webgl/shaders/labelShaders.xml": 2205,
      "esri/views/2d/engine/webgl/shaders/lineShaderSnippets": 2206,
      "dojo/text!esri/views/2d/engine/webgl/shaders/lineShaders.xml": 2207,
      "esri/views/2d/engine/webgl/shaders/textShaderSnippets": 2208,
      "dojo/text!esri/views/2d/engine/webgl/shaders/textShaders.xml": 2209,
      "esri/views/2d/engine/webgl/brushes/WGLBrushStencil": 2210,
      "esri/views/2d/engine/webgl/brushes/WGLGeometryBrushFill": 2211,
      "esri/views/2d/engine/webgl/brushes/WGLGeometryBrushLabel": 2212,
      "esri/views/2d/engine/webgl/brushes/WGLGeometryBrushLine": 2213,
      "esri/views/2d/engine/webgl/brushes/WGLGeometryBrushMarker": 2214,
      "esri/views/2d/engine/webgl/brushes/WGLGeometryBrushText": 2215,
      "esri/views/2d/engine/webgl/painter/WGLHighlightPainter": 2216,
      "esri/views/2d/engine/webgl/painter/highlight/HighlightRenderer": 2217,
      "esri/views/2d/engine/webgl/shaders/hlShaderSnippets": 2218,
      "dojo/text!esri/views/2d/engine/webgl/shaders/hlShaders.xml": 2219,
      "esri/views/2d/engine/webgl/painter/highlight/HighlightSurfaces": 2220
    });
  })();
