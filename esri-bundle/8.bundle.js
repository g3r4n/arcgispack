(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    1965: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(9),
        r(21),
        r(2087),
        r(2088),
        r(7),
        r(782),
        r(2029),
        r(41),
        r(791),
        r(14)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, d, c) {
            var h = (function() {
                function e() {}
                return (
                  (e.prototype.process = function(e) {
                    var t = [e.geometryBuffer];
                    return r.resolve({
                      result: this.transform(e, t),
                      transferList: t
                    });
                  }),
                  (e.prototype.transform = function(e, t) {
                    var r = n.fromJSON(e.indexSR),
                      h = n.fromJSON(e.vertexSR),
                      p = n.fromJSON(e.renderSR),
                      y = !1,
                      g = 0,
                      m = [],
                      v = e.obb
                        ? null
                        : l.create([0, 0, 0], [-1, -1, -1], [0, 0, 0, 1]);
                    a.vec3d.set(e.center, f), (f[2] += e.elevationOffset);
                    var _ = a.mat4d.create();
                    u.computeLinearTransformation(r, f, _, p);
                    for (var b = 0, x = e.geometryData; b < x.length; b++)
                      for (
                        var E = x[b],
                          w = E.geometries,
                          I = E.componentOffsets,
                          C = 0,
                          M = w;
                        C < M.length;
                        C++
                      ) {
                        var O = M[C],
                          S = e.layouts[g];
                        ++g;
                        var A = [
                            {
                              name: c.VertexAttrConstants.COLOR,
                              byteValue: 255
                            }
                          ],
                          T = [
                            c.VertexAttrConstants.NORMAL,
                            c.VertexAttrConstants.NORMALCOMPRESSED,
                            c.VertexAttrConstants.SYMBOLCOLOR,
                            c.VertexAttrConstants.COMPONENTINDEX
                          ],
                          j = i.interleaveGeometryBuffer(
                            O,
                            e.geometryBuffer,
                            S,
                            A,
                            T
                          ),
                          D = new d(new Float32Array(j), S),
                          R = D.getAttribute(c.VertexAttrConstants.POSITION),
                          F = o.reprojectPoints(
                            R,
                            e.center,
                            e.elevationOffset,
                            r,
                            h,
                            p
                          );
                        if ((v && this._updateObb(v, R, _), e.needNormals)) {
                          var N = {
                            normals: D.getAttribute(
                              c.VertexAttrConstants.NORMALCOMPRESSED
                            ),
                            positions: R,
                            normalInd: D.getIndices(
                              c.VertexAttrConstants.NORMALCOMPRESSED
                            ),
                            positionInd: D.getIndices(
                              c.VertexAttrConstants.POSITION
                            )
                          };
                          i.processAndInterleaveNormals(
                            e.normalReferenceFrame,
                            O,
                            e.geometryBuffer,
                            F.globalTrafo,
                            N
                          );
                        }
                        var V = D.getAttribute(
                          c.VertexAttrConstants.COMPONENTINDEX
                        );
                        V && this._createComponentNumbers(V, I);
                        var P = D.getAttribute(c.VertexAttrConstants.COLOR);
                        P && !y && (y = this._hasColors(P));
                        var L = S[0].stride,
                          B = 1 - (0.8 * L) / (L + 4),
                          G = s.deduplicate(j, L / 4, B);
                        if (null != G) {
                          var U =
                              G.uniqueCount < 65536
                                ? new Uint16Array(G.indices)
                                : G.indices,
                            q = i.extractPositionData(G.buffer, S, U);
                          m.push({
                            layout: S,
                            interleavedVertexData: G.buffer,
                            indices: U,
                            corMatrices: F,
                            hasColors: y,
                            positionData: q
                          }),
                            t &&
                              (t.push(G.buffer),
                              t.push(U.buffer),
                              t.push(q.data.buffer),
                              t.push(q.indices.buffer));
                        } else {
                          q = i.extractPositionData(j, S);
                          m.push({
                            layout: S,
                            interleavedVertexData: j,
                            corMatrices: F,
                            hasColors: y,
                            positionData: q
                          }),
                            t &&
                              (t.push(j),
                              t.push(q.data.buffer),
                              t.push(q.indices.buffer));
                        }
                      }
                    return (
                      v &&
                        (a.mat4d.multiplyVec3(_, v.center, v.center),
                        u.vectorToVector(v.center, p, v.center, h),
                        (v.center[2] -= e.elevationOffset)),
                      {
                        geometryBuffer: e.geometryBuffer,
                        transformedGeometries: m,
                        obb: v
                      }
                    );
                  }),
                  (e.prototype._hasColors = function(e) {
                    for (
                      var t = e.data,
                        r = e.size,
                        n = e.offsetIdx,
                        i = e.strideIdx,
                        o = n;
                      o < t.length;
                      o += i
                    )
                      for (var a = 0; a < r; a++)
                        if (255 !== t[o + a]) return !0;
                    return !1;
                  }),
                  (e.prototype._createComponentNumbers = function(e, t) {
                    for (
                      var r = e.data,
                        n = e.offsetIdx,
                        i = e.strideIdx,
                        o = r.length / i,
                        a = 0,
                        s = n,
                        l = 0;
                      l < o;
                      l++
                    )
                      l >= t[a + 1] && a++, (r[s] = a), (s += i);
                  }),
                  (e.prototype._updateObb = function(e, t, r) {
                    if (e.halfSize[0] > 0) {
                      a.vec3.subtract(e.center, e.halfSize, f),
                        a.vec3.add(e.center, e.halfSize, p);
                      for (
                        var n = t.offsetIdx;
                        n < t.data.length;
                        n += t.strideIdx
                      )
                        (f[0] = Math.min(f[0], t.data[n])),
                          (f[1] = Math.min(f[1], t.data[n + 1])),
                          (f[2] = Math.min(f[2], t.data[n + 2])),
                          (p[0] = Math.max(p[0], t.data[n])),
                          (p[1] = Math.max(p[1], t.data[n + 1])),
                          (p[2] = Math.max(p[2], t.data[n + 2]));
                      a.vec3.subtract(p, f, e.halfSize),
                        a.vec3d.scale(e.halfSize, 0.5),
                        a.vec3d.add(f, p, e.center),
                        a.vec3d.scale(e.center, 0.5);
                    } else {
                      l.compute(t, e);
                      var i = 2 * Math.sqrt(1 + r[0] + r[5] + r[10]);
                      (y[0] = (r[9] - r[6]) / i),
                        (y[1] = (r[2] - r[8]) / i),
                        (y[2] = (r[4] - r[1]) / i),
                        (y[3] = 0.25 * i),
                        a.quat4.conjugate(y),
                        a.quat4.multiply(y, e.quaternion, e.quaternion);
                    }
                  }),
                  e
                );
              })(),
              f = a.vec3d.create(),
              p = a.vec3d.create(),
              y = a.quat4.create();
            return h;
          }.apply(null, n)) || (e.exports = i);
    },
    2047: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
            return (function() {
              function e() {
                this.items = [];
              }
              return (
                (e.prototype.addObject = function(e, t) {
                  this.items.push({
                    type: "object",
                    highlightId: t,
                    object: e
                  });
                }),
                (e.prototype.addRenderGeometry = function(e, t, r) {
                  this.items.push({
                    type: "renderGeometry",
                    highlightId: r,
                    renderGeometry: e,
                    renderer: t
                  });
                }),
                (e.prototype.addExternal = function(e, t) {
                  this.items.push({
                    type: "external",
                    highlightId: t,
                    remove: e
                  });
                }),
                (e.prototype.remove = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var r = this.items[t];
                    r.highlightId === e &&
                      (this.removeHighlight(r), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeObject = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var r = this.items[t];
                    "object" === r.type &&
                      r.object === e &&
                      (this.removeHighlight(r), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeRenderGeometry = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var r = this.items[t];
                    "renderGeometry" === r.type &&
                      r.renderGeometry === e &&
                      (this.removeHighlight(r), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeAll = function() {
                  var e = this;
                  this.items.forEach(function(t) {
                    e.removeHighlight(t);
                  }),
                    (this.items = []);
                }),
                (e.prototype.removeHighlight = function(e) {
                  switch (e.type) {
                    case "object":
                      e.object.removeHighlights(e.highlightId);
                      break;
                    case "renderGeometry":
                      e.renderer.removeRenderGeometryHighlight(
                        e.renderGeometry,
                        e.highlightId
                      );
                      break;
                    case "external":
                      e.remove(e.highlightId);
                  }
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2067: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.attributeLookup = function(e, t) {
                for (
                  var r = t.toLowerCase(), n = 0, i = Object.keys(e);
                  n < i.length;
                  n++
                ) {
                  var o = i[n];
                  if (o.toLowerCase() === r) return e[o];
                }
                return null;
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2087: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(2032), r(782), r(31), r(14)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            function a(e, t, r, n, i, o, a) {
              switch (r) {
                case 1:
                  for (var s = 0; s < a; s++) (n[i] = e[t]), (t += 1), (i += o);
                  break;
                case 2:
                  for (s = 0; s < a; s++)
                    (n[i] = e[t]), (n[i + 1] = e[t + 1]), (t += 2), (i += o);
                  break;
                case 3:
                  for (s = 0; s < a; s++)
                    (n[i] = e[t]),
                      (n[i + 1] = e[t + 1]),
                      (n[i + 2] = e[t + 2]),
                      (t += 3),
                      (i += o);
                  break;
                case 4:
                  for (s = 0; s < a; s++)
                    (n[i] = e[t]),
                      (n[i + 1] = e[t + 1]),
                      (n[i + 2] = e[t + 2]),
                      (n[i + 3] = e[t + 3]),
                      (t += 4),
                      (i += o);
                  break;
                default:
                  throw h("Unhandled stride size " + r);
              }
            }
            function s(e, t, r, n, i, o) {
              switch (t) {
                case 1:
                  for (var a = 0; a < o; a++) (r[n] = e), (n += i);
                  break;
                case 2:
                  for (a = 0; a < o; a++) (r[n] = e), (r[n + 1] = e), (n += i);
                  break;
                case 3:
                  for (a = 0; a < o; a++)
                    (r[n] = e), (r[n + 1] = e), (r[n + 2] = e), (n += i);
                  break;
                case 4:
                  for (a = 0; a < o; a++)
                    (r[n] = e),
                      (r[n + 1] = e),
                      (r[n + 2] = e),
                      (r[n + 3] = e),
                      (n += i);
                  break;
                default:
                  throw h("Unhandled stride size " + t);
              }
            }
            function l(e) {
              switch (e) {
                case 5120:
                  return Int8Array;
                case 5126:
                  return Float32Array;
                case 5124:
                  return Int32Array;
                case 5122:
                  return Int16Array;
                case 5121:
                  return Uint8Array;
                case 5125:
                  return Uint32Array;
                case 5123:
                  return Uint16Array;
              }
              throw new Error("Unhandled data type: " + e);
            }
            function u(e) {
              switch (e) {
                case 5120:
                  return "Int8";
                case 5126:
                  return "Float32";
                case 5124:
                  return "Int32";
                case 5122:
                  return "Int16";
                case 5121:
                  return "UInt8";
                case 5125:
                  return "UInt32";
                case 5123:
                  return "UInt16";
              }
              throw new Error("Unhandled data type: " + e);
            }
            function d(e) {
              return e % Uint32Array.BYTES_PER_ELEMENT == 0;
            }
            function c(e) {
              return e > 0 && e % Uint32Array.BYTES_PER_ELEMENT == 0;
            }
            function h(e) {
              return new Error("I3SGeometryUtil processing failed: " + e);
            }
            function f(e) {
              var t = e.normals,
                r = e.positions,
                n = e.normalInd,
                a = e.positionInd;
              o.assert(e.normalInd.length === e.positionInd.length);
              for (
                var s = i.vec3.create(),
                  l = i.vec3.create(),
                  u = i.vec2.create(),
                  d = r.data,
                  c = r.offsetIdx,
                  h = r.strideIdx,
                  f = t.data,
                  p = t.offsetIdx,
                  y = t.strideIdx,
                  g = 0;
                g < a.length;
                g += 3
              ) {
                var m = a[g],
                  v = c + h * m,
                  _ = d[v],
                  b = d[v + 1],
                  x = d[v + 2];
                (v = c + h * (m = a[g + 1])),
                  (s[0] = d[v] - _),
                  (s[1] = d[v + 1] - b),
                  (s[2] = d[v + 2] - x),
                  (v = c + h * (m = a[g + 2])),
                  (l[0] = d[v] - _),
                  (l[1] = d[v + 1] - b),
                  (l[2] = d[v + 2] - x),
                  i.vec3.cross(s, l, s),
                  o.encodeNormal(s, u);
                for (var E = 0; E < 3; E++) {
                  var w = p + y * n[g + E];
                  (f[w] = o.encodeInt16(u[0])),
                    (f[w + 1] = o.encodeInt16(u[1]));
                }
              }
            }
            function p(e, t, r) {
              var n = e.length / 3,
                i = t.data,
                a = t.offsetIdx,
                s = t.strideIdx;
              if (null != r)
                for (
                  var l = r,
                    u = l[0],
                    d = l[1],
                    c = l[2],
                    h = l[4],
                    f = l[5],
                    p = l[6],
                    y = l[8],
                    g = l[9],
                    _ = l[10],
                    b = 0;
                  b < n;
                  b++
                ) {
                  var x = e[3 * b],
                    E = e[3 * b + 1],
                    w = e[3 * b + 2];
                  (m[0] = u * x + d * E + c * w),
                    (m[1] = h * x + f * E + p * w),
                    (m[2] = y * x + g * E + _ * w),
                    o.encodeNormal(m, v),
                    (i[a + b * s] = o.encodeInt16(v[0])),
                    (i[a + b * s + 1] = o.encodeInt16(v[1]));
                }
              else
                for (b = 0; b < n; b++)
                  (m[0] = e[3 * b]),
                    (m[1] = e[3 * b + 1]),
                    (m[2] = e[3 * b + 2]),
                    o.encodeNormal(m, v),
                    (i[a + b * s] = o.encodeInt16(v[0])),
                    (i[a + b * s + 1] = o.encodeInt16(v[1]));
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var y = new Uint8Array(64);
            (t.interleaveGeometryBuffer = function(e, t, r, n, i) {
              void 0 === n && (n = []), void 0 === i && (i = []);
              var o = e.params.vertexAttributes,
                f = o.position.count;
              if (!c(r[0].stride))
                throw h(
                  "Layout stride must use " +
                    Uint32Array.BYTES_PER_ELEMENT +
                    "-byte words"
                );
              for (
                var p = r[0].stride / Uint32Array.BYTES_PER_ELEMENT,
                  g = new Uint32Array(p * f),
                  m = 0,
                  v = (r = r.slice(0).sort(function(e, t) {
                    return e.offset - t.offset;
                  }));
                m < v.length;
                m++
              )
                !(function(e) {
                  if (-1 !== i.indexOf(e.name)) return "continue";
                  var r = o[e.name],
                    p = l(e.type),
                    m = void 0,
                    v = !1;
                  if (null == r) {
                    var _ = n.filter(function(t) {
                      return t.name === e.name;
                    })[0];
                    if (!_) throw h("Geometry definition is missing attribute");
                    r = {
                      valueType: u(e.type),
                      byteOffset: 0,
                      count: f,
                      valuesPerElement: e.count
                    };
                    for (var b = 0; b < y.length; b++) y[b] = _.byteValue;
                    (m = y.buffer), (v = !0);
                  } else m = t;
                  if (u(e.type) !== r.valueType)
                    throw h(
                      "Geometry definition type must match attribute type"
                    );
                  if (!d(r.byteOffset) || !d(e.offset))
                    throw h(
                      e.name +
                        " offset must use " +
                        Uint32Array.BYTES_PER_ELEMENT +
                        "-byte words"
                    );
                  if (
                    !c(r.valuesPerElement * p.BYTES_PER_ELEMENT) ||
                    !c(e.count * p.BYTES_PER_ELEMENT)
                  )
                    throw h(
                      e.name +
                        " data must use " +
                        Uint32Array.BYTES_PER_ELEMENT +
                        "-byte words"
                    );
                  var x = new Uint32Array(m),
                    E = r.byteOffset / Uint32Array.BYTES_PER_ELEMENT,
                    w =
                      (r.valuesPerElement * p.BYTES_PER_ELEMENT) /
                      Uint32Array.BYTES_PER_ELEMENT,
                    I = e.offset / Uint32Array.BYTES_PER_ELEMENT,
                    C = e.stride / Uint32Array.BYTES_PER_ELEMENT;
                  v ? s(x[0], w, g, I, C, f) : a(x, E, w, g, I, C, f);
                })(v[m]);
              return g.buffer;
            }),
              (t.processAndInterleaveNormals = function(e, t, n, i, o) {
                if ("none" === e) f(o);
                else {
                  var a = r.createTypedView(
                      n,
                      t.params.vertexAttributes.normal
                    ),
                    s = "earth-centered" === e ? i : null;
                  p(a, o.normals, s);
                }
              });
            var g = 65536;
            t.extractPositionData = function(e, t, r) {
              var i = t[0];
              if (null == i || "position" !== i.name || 5126 !== i.type)
                return null;
              for (
                var o = new Float32Array(e),
                  a = i.stride / 4,
                  s = (3 * o.length) / a,
                  l = new Float32Array(s),
                  u = 0;
                u < s / 3;
                u++
              )
                (l[3 * u] = o[u * a + i.offset]),
                  (l[3 * u + 1] = o[u * a + i.offset + 1]),
                  (l[3 * u + 2] = o[u * a + i.offset + 2]);
              var d,
                c = n.deduplicate(l.buffer, 3),
                h = c.uniqueCount < g;
              if (r)
                for (
                  d = new (h ? Uint16Array : Uint32Array)(r.length), u = 0;
                  u < r.length;
                  u++
                )
                  d[u] = c.indices[r[u]];
              else d = h ? new Uint16Array(c.indices) : c.indices;
              return { data: new Float32Array(c.buffer), indices: d };
            };
            var m = i.vec3.create(),
              v = i.vec2.create();
          }.apply(null, n)) || (e.exports = i);
    },
    2088: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(7), r(41)]),
        void 0 ===
          (i = function(e, t, r, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ReprojectionTypes = {
                PER_VERTEX: "perVertex",
                NO_REPROJECTION: "noReprojection"
              });
            var i = 1e3,
              o = new Float64Array(3 * i),
              a = r.vec3d.create();
            t.reprojectPoints = function(e, t, s, l, u, d) {
              var c = e.data,
                h = e.offsetIdx,
                f = e.strideIdx;
              r.vec3d.set(t, a), (a[2] += s);
              var p = r.mat4d.create();
              n.computeLinearTransformation(l, a, p, d);
              var y = r.mat4d.create();
              r.mat4d.inverse(p, y);
              var g = r.mat4d.create();
              r.mat4d.identity(g);
              var m = [0, 0, 0],
                v = c.length / f;
              n.vectorToVector(a, l, m, u);
              for (var _ = 0; _ < v; _ += i) {
                for (var b = Math.min(i, v - _), x = 0; x < b; x++) {
                  var E = h + f * (_ + x);
                  (o[3 * x] = c[E] + m[0]),
                    (o[3 * x + 1] = c[E + 1] + m[1]),
                    (o[3 * x + 2] = c[E + 2] + m[2]);
                }
                for (n.bufferToBuffer(o, u, 0, o, d, 0, b), x = 0; x < b; x++) {
                  var w = o[3 * x],
                    I = o[3 * x + 1],
                    C = o[3 * x + 2],
                    M = h + f * (_ + x);
                  (c[M] = y[0] * w + y[4] * I + y[8] * C + y[12]),
                    (c[M + 1] = y[1] * w + y[5] * I + y[9] * C + y[13]),
                    (c[M + 2] = y[2] * w + y[6] * I + y[10] * C + y[14]);
                }
              }
              return { localTrafo: g, globalTrafo: p };
            };
          }.apply(null, n)) || (e.exports = i);
    },
    2097: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(108), r(10), r(9), r(85), r(112)]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a) {
            return (function() {
              function e(e, t, r) {
                (this._layer = e), (this._support = t), (this._options = r);
              }
              return (
                (e.prototype.queryExtent = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e).then(function() {
                    var r = 0,
                      n = t._support.createExtentBuilder();
                    return (
                      t._forAllQueried(e, function(e) {
                        r++, n.add(e);
                      }),
                      { count: r, extent: 0 === r ? null : n.getExtent() }
                    );
                  });
                }),
                (e.prototype.queryFeatureCount = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e).then(function() {
                    var r = 0;
                    return (
                      t._forAllQueried(e, function() {
                        return r++;
                      }),
                      r
                    );
                  });
                }),
                (e.prototype.queryFeatures = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e)
                    .then(function() {
                      var o = [],
                        a = e && e.outFields,
                        s = [];
                      return t._forAllQueried(
                        e,
                        function(e) {
                          return s.push(t._support.createGraphic(e));
                        },
                        function(e) {
                          a &&
                            (o.push(t._support.requestFields(e, s, a)),
                            (s = []));
                        }
                      ) > 0 && !e.num
                        ? i.reject(
                            new n(
                              "Unsupported Query",
                              "Large feature query, use Query.num and Query.start to batch"
                            )
                          )
                        : (a || o.push(i.resolve(s)), r(o));
                    })
                    .then(function(e) {
                      for (var r = [], n = 0; n < e.length; ++n)
                        for (var i = e[n], s = 0; s < i.length; ++s)
                          r.push(o.hydrateGraphic(i[s], t._layer));
                      var l = new a();
                      return (l.features = r), l;
                    });
                }),
                (e.prototype.queryObjectIds = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e).then(function() {
                    var r = [];
                    return (
                      t._forAllQueried(e, function(e) {
                        return r.push(e.id);
                      }),
                      r
                    );
                  });
                }),
                (e.defaultExtentBuilder = function(e) {
                  var t = null;
                  return {
                    add: function(r) {
                      var n = e(r);
                      n && (t = null != t ? t.union(n) : n.clone());
                    },
                    getExtent: function() {
                      return t;
                    }
                  };
                }),
                (e.prototype._forAllQueried = function(e, t, r) {
                  var n = [];
                  if (e && e.objectIds) {
                    var i = e.objectIds;
                    n.push(function(e) {
                      return i.indexOf(e.id) >= 0;
                    });
                  }
                  var o = (e && e.start) || 0,
                    a = (e && e.num) || 1e4;
                  return (
                    n.push(function() {
                      return a <= 0 ? (--a, !1) : o > 0 ? (--o, !1) : (--a, !0);
                    }),
                    this._support.forAll(function(e) {
                      for (var r = 0, i = n; r < i.length; r++)
                        if (!(0, i[r])(e)) return;
                      t(e);
                    }, r),
                    Math.max(0, -a)
                  );
                }),
                (e.prototype._rejectUnsupported = function(e) {
                  if (null == e) return i.resolve();
                  var t = function(e) {
                    return i.reject(
                      new n(
                        "Unsupported Query",
                        "Unsupported property '" + e + "'"
                      )
                    );
                  };
                  return null != e.distance
                    ? t("distance")
                    : null != e.geometryPrecision
                      ? t("geometryPrecision")
                      : e.groupByFieldsForStatistics &&
                        e.groupByFieldsForStatistics.length
                        ? t("groupByFieldsForStatistics")
                        : null != e.maxAllowableOffset
                          ? t("maxAllowableOffset")
                          : e.multipatchOption
                            ? t("multipatchOption")
                            : e.orderByFields && e.orderByFields.length
                              ? t("orderByFields")
                              : e.outSpatialReference
                                ? t("outSpatialReference")
                                : e.outStatistics && e.outStatistics.length
                                  ? t("outStatistics")
                                  : e.pixelSize
                                    ? t("pixelSize")
                                    : e.quantizationParameters
                                      ? t("quantizationParameters")
                                      : e.relationParameter
                                        ? t("relationParameter")
                                        : e.returnDistinctValues
                                          ? t("returnDistinctValues")
                                          : e.text
                                            ? t("text")
                                            : e.timeExtent
                                              ? t("timeExtent")
                                              : e.where
                                                ? t("where")
                                                : e.geometry
                                                  ? t("geometry")
                                                  : !this._options
                                                      .enableOutFields &&
                                                    e.outFields &&
                                                    e.outFields.length
                                                    ? t("outFields")
                                                    : !this._options
                                                        .enableObjectId &&
                                                      e.objectIds &&
                                                      e.objectIds.length
                                                      ? t("objectIds")
                                                      : i.resolve();
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2178: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(2047)]),
        void 0 ===
          (i = function(e, t, r) {
            var n = (function() {
              return function(e) {
                (this.highlightSet = new r()),
                  (this.ids = new Set()),
                  (this.options = e);
              };
            })();
            return (function() {
              function e(e) {
                (this.highlights = []), (this.layerView = e);
              }
              return (
                (e.prototype.destroy = function() {
                  this.highlights.forEach(function(e) {
                    return e.highlightSet.removeAll();
                  }),
                    (this.highlights = null);
                }),
                (e.prototype.acquireSet = function(e) {
                  var t = this,
                    r = new n(e);
                  return (
                    this.highlights.push(r),
                    {
                      set: r,
                      handle: {
                        remove: function() {
                          return t.releaseSet(r);
                        }
                      }
                    }
                  );
                }),
                (e.prototype.releaseSet = function(e) {
                  e.highlightSet.removeAll();
                  var t = this.highlights ? this.highlights.indexOf(e) : -1;
                  -1 !== t && this.highlights.splice(t, 1);
                }),
                (e.prototype.setFeatureIds = function(e, t) {
                  t.forEach(function(t) {
                    return e.ids.add(t);
                  }),
                    this.layerView._forAllFeatures(
                      function(t, r, n, i) {
                        if (e.ids.has(t)) {
                          var o = n.engineObject.setComponentHighlight(
                            i,
                            r,
                            e.options
                          );
                          e.highlightSet.addObject(n.engineObject, o);
                        }
                      },
                      null,
                      !0
                    );
                }),
                (e.prototype.objectCreated = function(e) {
                  var t = this;
                  this.highlights.forEach(function(r) {
                    t.layerView._forAllFeaturesOfNode(
                      t.layerView._getMetadata(e),
                      function(t, n, i, o) {
                        if (r.ids.has(t)) {
                          var a = e.setComponentHighlight(o, n, r.options);
                          r.highlightSet.addObject(e, a);
                        }
                      },
                      !0
                    );
                  });
                }),
                (e.prototype.objectDeleted = function(e) {
                  this.highlights.forEach(function(t) {
                    t.highlightSet.removeObject(e);
                  });
                }),
                (e.prototype.allObjectsDeleted = function() {
                  this.highlights.forEach(function(e) {
                    return e.highlightSet.removeAll();
                  });
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2179: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(3),
        r(11),
        r(1),
        r(35),
        r(85),
        r(7),
        r(161),
        r(192)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, d, c) {
            var h = s.empty(),
              f = { spatialReference: null, extent: h },
              p = u.vec3d.create(),
              y = u.vec3d.create(),
              g = u.vec3d.create(),
              m = o.getLogger("esri.views.3d.layers.i3s.I3SElevationProvider");
            return (function(e) {
              function t(t) {
                return e.call(this) || this;
              }
              return (
                r(t, e),
                (t.prototype.initialize = function() {
                  (this.renderCoordsHelper = this.layerView.view.renderCoordsHelper),
                    (this.intersectLayers = [this.stageLayer]),
                    (this.selector = new c(this.layerView.view.viewingMode));
                  var e = this.layerView.layer.fullExtent;
                  (this.zmin = e.zmin), (this.zmax = e.zmax);
                }),
                (t.prototype.getElevation = function(e) {
                  if (l.isPoint(e)) {
                    if (!this.renderCoordsHelper.toRenderCoords(e, p))
                      return (
                        m.error(
                          "could not project point for elevation alignment"
                        ),
                        -1 / 0
                      );
                  } else if (
                    !this.renderCoordsHelper.toRenderCoords(
                      e,
                      this.spatialReference,
                      p
                    )
                  )
                    return (
                      m.error(
                        "could not project point for elevation alignment"
                      ),
                      -1 / 0
                    );
                  var t = this.layerView.elevationOffset,
                    r = this.zmin + t,
                    n = this.zmax + t;
                  return (
                    u.vec3d.set(p, y),
                    u.vec3d.set(p, g),
                    this.renderCoordsHelper.setAltitude(n, y),
                    this.renderCoordsHelper.setAltitude(r, g),
                    this.selector.init(
                      this.intersectLayers,
                      y,
                      g,
                      null,
                      null,
                      1,
                      !1
                    ),
                    this.selector.getMinResult().getIntersectionPoint(p)
                      ? this.renderCoordsHelper.getAltitude(p)
                      : -1 / 0
                  );
                }),
                (t.prototype.layerChanged = function() {
                  this.spatialReference &&
                    ((f.extent = this.computeLayerExtent(
                      this.intersectLayers[0]
                    )),
                    (f.spatialReference = this.spatialReference),
                    this.emit("elevation-change", f));
                }),
                (t.prototype.objectChanged = function(e) {
                  this.spatialReference &&
                    ((f.extent = this.computeObjectExtent(e)),
                    (f.spatialReference = this.spatialReference),
                    this.emit("elevation-change", f));
                }),
                (t.prototype.computeObjectExtent = function(e) {
                  return s.empty(h), this.expandExtent(e, h), h;
                }),
                (t.prototype.computeLayerExtent = function(e) {
                  s.empty(h);
                  for (var t = 0, r = e.getObjects(); t < r.length; t++) {
                    var n = r[t];
                    this.expandExtent(n, h);
                  }
                  return h;
                }),
                (t.prototype.expandExtent = function(e, t) {
                  for (
                    var r = e.getBBMin(!0), n = e.getBBMax(!0), i = 0;
                    i < 8;
                    ++i
                  )
                    (p[0] = 1 & i ? r[0] : n[0]),
                      (p[1] = 2 & i ? r[1] : n[1]),
                      (p[2] = 4 & i ? r[2] : n[2]),
                      u.mat4d.multiplyVec3(e.objectTransformation, p),
                      this.renderCoordsHelper.fromRenderCoords(
                        p,
                        p,
                        this.spatialReference
                      ),
                      s.expand(t, p);
                  return t;
                }),
                n(
                  [a.property({ constructOnly: !0 })],
                  t.prototype,
                  "layerView",
                  void 0
                ),
                n(
                  [a.property({ constructOnly: !0 })],
                  t.prototype,
                  "stageLayer",
                  void 0
                ),
                n(
                  [
                    a.property({
                      readOnly: !0,
                      aliasOf:
                        "layerView.view.elevationProvider.spatialReference"
                    })
                  ],
                  t.prototype,
                  "spatialReference",
                  void 0
                ),
                n(
                  [a.subclass("esri.views.3d.layers.i3s.I3SElevationProvider")],
                  t
                )
              );
            })(a.declared(i, d.Evented));
          }.apply(null, n)) || (e.exports = i);
    },
    2180: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(10), r(9)]),
        void 0 ===
          (i = function(e, t, r, n) {
            function i(e) {
              return n.create(function(t, r) {
                (e.oncomplete = function() {
                  return t();
                }),
                  (e.onerror = function() {
                    return r(e.error);
                  }),
                  (e.onabort = function() {
                    return r(e.error);
                  });
              });
            }
            function o(e) {
              return n.create(function(t, r) {
                "done" === e.readyState
                  ? null != e.error
                    ? r(e.error)
                    : t(e.result)
                  : ((e.onsuccess = function() {
                      return t(e.result);
                    }),
                    (e.onerror = function() {
                      return r(e.error);
                    }));
              });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = (function() {
              function e(e, t, r) {
                (this._db = null),
                  (this._quotaReductionPromise = null),
                  (this._gcCounter = 0),
                  (this._hit = 0),
                  (this._miss = 0),
                  (this._destroyed = !1),
                  (this.gcFrequency = 50),
                  (this.maxByteSize = 1073741824),
                  (this.quotaReductionFactor = 0.2),
                  (this._dbName = e),
                  (this._storeName = t),
                  (this._version = r);
              }
              return (
                (e.prototype.init = function() {
                  var e = this;
                  return n
                    .resolve()
                    .then(function() {
                      var t = indexedDB.open(e._dbName, e._version);
                      return (
                        (t.onupgradeneeded = function(r) {
                          var n = t.result,
                            i = t.transaction,
                            o = n.objectStoreNames.contains(e._storeName)
                              ? i.objectStore(e._storeName)
                              : n.createObjectStore(e._storeName),
                            a = n.objectStoreNames.contains("last_access")
                              ? i.objectStore("last_access")
                              : n.createObjectStore("last_access");
                          a.indexNames.contains("date") ||
                            a.createIndex("date", "date", { unique: !1 }),
                            a.indexNames.contains("byteSize") ||
                              a.createIndex("byteSize", "byteSize", {
                                unique: !1
                              }),
                            r.oldVersion < e._version && (o.clear(), a.clear());
                        }),
                        o(t)
                      );
                    })
                    .then(function(t) {
                      e._destroyed ? t.close() : (e._db = t);
                    });
                }),
                (e.prototype.destroy = function() {
                  this._db && (this._db.close(), (this._db = null)),
                    (this._destroyed = !0);
                }),
                (e.prototype.getHitRate = function() {
                  return this._hit / (this._hit + this._miss);
                }),
                (e.prototype.put = function(e, t) {
                  var i = this;
                  return null == this._db
                    ? n.reject(
                        new r(
                          "indexedb:not-initialized",
                          "IndexedDB Cache is not initialized"
                        )
                      )
                    : (null != this._quotaReductionPromise
                        ? this._quotaReductionPromise
                        : n.resolve()
                      )
                        .then(function() {
                          return i._put(e, t);
                        })
                        .catch(function(r) {
                          if ("QuotaExceededError" === r.name)
                            return (
                              null == i._quotaReductionPromise &&
                                ((i._quotaReductionPromise = i
                                  ._getCacheSize()
                                  .then(function(e) {
                                    return i._removeLeastRecentlyAccessed(
                                      t.byteSize +
                                        Math.ceil(e * i.quotaReductionFactor)
                                    );
                                  })),
                                i._quotaReductionPromise.always(function() {
                                  i._quotaReductionPromise = null;
                                })),
                              i._quotaReductionPromise.then(function() {
                                return i._put(e, t);
                              })
                            );
                          throw r;
                        })
                        .then(function() {
                          --i._gcCounter < 0 &&
                            ((i._gcCounter = i.gcFrequency),
                            i._getCacheSize().then(function(e) {
                              return i._removeLeastRecentlyAccessed(
                                e - i.maxByteSize
                              );
                            }));
                        });
                }),
                (e.prototype.get = function(e) {
                  var t = this;
                  return null == this._db
                    ? n.resolve(null)
                    : n
                        .resolve()
                        .then(function() {
                          return o(
                            t._db
                              .transaction(t._storeName, "readonly")
                              .objectStore(t._storeName)
                              .get(e)
                          );
                        })
                        .then(function(r) {
                          return (
                            null == r
                              ? ++t._miss
                              : (++t._hit,
                                t._db
                                  .transaction("last_access", "readwrite")
                                  .objectStore("last_access")
                                  .put(
                                    {
                                      date: new Date().getTime(),
                                      byteSize: r.byteSize
                                    },
                                    e
                                  )),
                            r
                          );
                        })
                        .catch(function(e) {
                          return ++t._miss, null;
                        });
                }),
                (e.prototype.remove = function(e) {
                  var t = this;
                  return null == this._db
                    ? n.resolve()
                    : n.resolve().then(function() {
                        var r = t._db.transaction(
                            [t._storeName, "last_access"],
                            "readwrite"
                          ),
                          n = r.objectStore(t._storeName),
                          o = r.objectStore("last_access");
                        return n.delete(e), o.delete(e), i(r);
                      });
                }),
                (e.prototype._put = function(e, t) {
                  var r = this._db.transaction(
                    [this._storeName, "last_access"],
                    "readwrite"
                  );
                  return (
                    r.objectStore(this._storeName).put(t, e),
                    r
                      .objectStore("last_access")
                      .put(
                        { date: new Date().getTime(), byteSize: t.byteSize },
                        e
                      ),
                    i(r)
                  );
                }),
                (e.prototype._removeLeastRecentlyAccessed = function(e) {
                  if (!(e <= 0)) {
                    var t = this._db.transaction(
                        [this._storeName, "last_access"],
                        "readwrite"
                      ),
                      r = t.objectStore(this._storeName),
                      n = t.objectStore("last_access"),
                      o = 0,
                      a = n.index("date").openCursor(null, "next");
                    return (
                      (a.onsuccess = function(t) {
                        var i = a.result;
                        null != i &&
                          (null != i.value.byteSize && (o += i.value.byteSize),
                          r.delete(i.primaryKey),
                          n.delete(i.primaryKey),
                          o < e && i.continue());
                      }),
                      i(t)
                    );
                  }
                }),
                (e.prototype._getCacheSize = function() {
                  var e = this._db.transaction("last_access"),
                    t = 0,
                    r = e
                      .objectStore("last_access")
                      .index("byteSize")
                      .openKeyCursor();
                  return (
                    (r.onsuccess = function(e) {
                      var n = r.result;
                      if (n) {
                        var i = n.key;
                        null != i && (t += i), n.continue();
                      }
                    }),
                    i(e).then(function() {
                      return t;
                    })
                  );
                }),
                e
              );
            })();
            (t.IDBCache = a), (t.whenTransaction = i), (t.whenRequest = o);
          }.apply(null, n)) || (e.exports = i);
    },
    806: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(110),
        r(109),
        r(15),
        r(138),
        r(43),
        r(63),
        r(63),
        r(24),
        r(4),
        r(11),
        r(9),
        r(313),
        r(55),
        r(26),
        r(260),
        r(1),
        r(48),
        r(84),
        r(317),
        r(160),
        r(125),
        r(428),
        r(135),
        r(2011),
        r(1965),
        r(56),
        r(2178),
        r(2179),
        r(2097),
        r(2048),
        r(2180),
        r(2067),
        r(443),
        r(2025),
        r(7),
        r(2029),
        r(41),
        r(73),
        r(100),
        r(444),
        r(164),
        r(791),
        r(185),
        r(14),
        r(818),
        r(137),
        r.dj.m(e)
      ]),
        void 0 ===
          (i = function(
            e,
            t,
            r,
            n,
            i,
            o,
            a,
            s,
            l,
            u,
            d,
            c,
            h,
            f,
            p,
            y,
            g,
            m,
            v,
            _,
            b,
            x,
            E,
            w,
            I,
            C,
            M,
            O,
            S,
            A,
            T,
            j,
            D,
            R,
            F,
            N,
            V,
            P,
            L,
            B,
            G,
            U,
            q,
            z,
            k,
            H,
            Y,
            Q,
            J,
            K,
            X
          ) {
            function W(e) {
              return e.data instanceof ArrayBuffer;
            }
            var Z = U.ModelContentType,
              $ = f.getLogger("esri.views.3d.layers.SceneLayerView3D"),
              ee = [1, 1, 1, 1],
              te = [0.8, 0.8, 0.8],
              re = [0.5, 0.5, 0.5],
              ne = 9,
              ie = (function(t) {
                function f() {
                  var e = (null !== t && t.apply(this, arguments)) || this;
                  return (
                    (e._queryEngine = null),
                    (e._highlights = new T(e)),
                    (e._elevationProvider = null),
                    (e._worker = new S()),
                    (e._workerThread = null),
                    (e._controllerCreated = !1),
                    (e._idbCache = new F.IDBCache(
                      "esri-scenelayer-cache",
                      "geometries",
                      ne
                    )),
                    (e._cancelCount = 0),
                    (e._hasColors = !1),
                    (e._hasTextures = !1),
                    (e._hasData = !1),
                    (e.alwaysLoadEverythingModeEnabled = !1),
                    (e._cacheKeySuffix = null),
                    (e._definitionExpressionErrors = 0),
                    (e._maxDefinitionExpressionErrors = 20),
                    e
                  );
                }
                return (
                  r(f, t),
                  Object.defineProperty(
                    f.prototype,
                    "hasTexturesOrVertexColors",
                    {
                      get: function() {
                        return this._hasData
                          ? this._hasTextures || this._hasColors
                            ? "yes"
                            : "probably-not"
                          : "unknown";
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(f.prototype, "rendererNeedsTextures", {
                    get: function() {
                      return R.rendererNeedsTextures(this.layer.renderer);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(f.prototype, "elevationOffset", {
                    get: function() {
                      var e =
                        null != this.layer ? this.layer.elevationInfo : null;
                      if (null != e && "absolute-height" === e.mode) {
                        var t = x.getMetersPerVerticalUnitForSR(
                            this.layer.spatialReference
                          ),
                          r = C.getMetersPerUnit(e.unit);
                        return ((e.offset || 0) * r) / t;
                      }
                      return 0;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (f.prototype._enableSecretAlwayLoadMode = function() {
                    this.layer.store.lodModel &&
                      "always-load" === this.layer.store.lodModel &&
                      (this.alwaysLoadEverythingModeEnabled = !0);
                  }),
                  Object.defineProperty(
                    f.prototype,
                    "uncompressedTextureDownsamplingEnabled",
                    {
                      get: function() {
                        return (
                          this.view.qualitySettings.sceneService
                            .uncompressedTextureDownsamplingEnabled &&
                          !this._useCompressedTextures
                        );
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(f.prototype, "_useCompressedTextures", {
                    get: function() {
                      var e = this.layer.version,
                        t =
                          !a("trident") ||
                          e.major > 1 ||
                          (1 === e.major && e.minor > 3);
                      return this.view._stage.has("s3tc") && t;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(f.prototype, "_enableMipMaps", {
                    get: function() {
                      return !this.uncompressedTextureDownsamplingEnabled;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(f.prototype, "_enableAtlasMipMaps", {
                    get: function() {
                      return (
                        this._enableMipMaps &&
                        this.view._stage.has("standardDerivatives")
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(
                    f.prototype,
                    "_atlasBiasCompensationEnabled",
                    {
                      get: function() {
                        return (
                          !this.view._stage.has("shaderTextureLOD") &&
                          this._enableAtlasMipMaps
                        );
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(
                    f.prototype,
                    "_disableAtlasAnisotropy",
                    {
                      get: function() {
                        return this._atlasBiasCompensationEnabled;
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  (f.prototype.initialize = function() {
                    var t = this;
                    v
                      .open(y.getAbsMid("./SceneLayerWorker", e, X), {
                        client: this
                      })
                      .then(function(e) {
                        t.destroyed ? e.close() : (t._workerThread = e);
                      }),
                      R.checkSceneLayerValid(this.layer),
                      R.checkSceneLayerCompatibleWithView(
                        this.layer,
                        this.view
                      ),
                      this._initGraphicsController(),
                      (this.gpuMemoryEstimate = 0),
                      (this.texMemoryEstimate = 0),
                      (this.geoMemoryEstimate = 0),
                      (this._stage = this.view._stage),
                      this._isIntegratedMesh() ||
                        (this._edgeView = this._stage.view.getEdgeView()),
                      (this._texId2Meta = new Map()),
                      (this._nodeId2Meta = new Map()),
                      this._addThisLayerToStage(),
                      (this._elevationProvider = new j({
                        layerView: this,
                        stageLayer: this._stageLayer
                      })),
                      this.handles.add(
                        [
                          m.init(this.view, "clippingArea", function() {
                            return t._clippingAreaChanged();
                          }),
                          m.init(this.layer, "renderer", function(e) {
                            return t._rendererChange(e);
                          }),
                          m.init(this.layer, "objectIdFilter", function() {
                            return t._filterChange();
                          }),
                          m.init(this.layer, "elevationInfo", function() {
                            return t._elevationInfoChanged();
                          }),
                          m.init(this.layer, "rangeInfos", function(e) {
                            return t._rangeInfosChanged(e);
                          }),
                          m.init(
                            this,
                            "_controller.parsedDefinitionExpression",
                            function() {
                              return t._filterChange();
                            }
                          ),
                          m.watch(this, "fullOpacity", function(e) {
                            return t._opacityChange(e);
                          }),
                          m.watch(
                            this,
                            ["elevationOffset", "rendererNeedsTextures"],
                            function() {
                              return t._reloadAll();
                            }
                          ),
                          m.watch(
                            this,
                            "uncompressedTextureDownsamplingEnabled",
                            function() {
                              return t._reloadAll();
                            }
                          ),
                          m.init(this, "suspended", function(e) {
                            return t.setVisibility(!e);
                          })
                        ],
                        "sceneLayerHandles"
                      ),
                      this._idbCache.init(),
                      (this._cacheKeySuffix = R.getCacheKeySuffix(
                        this.layer.spatialReference,
                        this.view.renderSpatialReference
                      )),
                      (this._componentColorManager = this._hasSymbolColors()
                        ? new J.BufferManager(this._stage.view.renderingContext)
                        : null),
                      this._enableSecretAlwayLoadMode();
                  }),
                  (f.prototype.destroy = function() {
                    this.handles.remove("sceneLayerHandles"),
                      this._workerThread &&
                        (this._workerThread.close(),
                        (this._workerThread = null)),
                      this._removeThisLayerFromStage(),
                      (this._stage = null),
                      this._idbCache &&
                        (this._idbCache.destroy(), (this._idbCache = null)),
                      null != this._controller &&
                        (this._controller.destroy(), (this._controller = null)),
                      this._highlights.destroy(),
                      (this._texId2Meta = null),
                      (this._nodeId2Meta = null),
                      this.emit("visible-geometry-changed"),
                      this._visibleGeometryChangedSchedulerHandle &&
                        (this._visibleGeometryChangedSchedulerHandle.remove(),
                        (this._visibleGeometryChangedSchedulerHandle = null));
                  }),
                  (f.prototype.canResume = function() {
                    return (
                      this.inherited(arguments) &&
                      (!this._controller || this._controller.rootNodeVisible)
                    );
                  }),
                  (f.prototype.isUpdating = function() {
                    return (
                      !this._controllerCreated ||
                      !(!this._controller || !this._controller.updating)
                    );
                  }),
                  (f.prototype.memEstimateTextureAdded = function(e) {
                    var t = e.getEstimatedTexMemRequiredMB();
                    return (
                      (this.gpuMemoryEstimate += t),
                      (this.texMemoryEstimate += t),
                      t
                    );
                  }),
                  (f.prototype.memEstimateTextureRemoved = function(e) {
                    var t = e.getEstimatedTexMemRequiredMB();
                    (this.gpuMemoryEstimate -= t),
                      (this.texMemoryEstimate -= t),
                      this.gpuMemoryEstimate < 9.5367431640625e-7 &&
                        ((this.gpuMemoryEstimate = 0),
                        (this.texMemoryEstimate = 0));
                  }),
                  (f.prototype.memEstimateGeometryAdded = function(e) {
                    var t = e.estimateGpuMemoryUsage() / 1048576;
                    return (
                      (this.gpuMemoryEstimate += t),
                      (this.geoMemoryEstimate += t),
                      t
                    );
                  }),
                  (f.prototype.memEstimateGeometryRemoved = function(e) {
                    var t = e.estimateGpuMemoryUsage() / 1048576;
                    (this.gpuMemoryEstimate -= t),
                      (this.geoMemoryEstimate -= t),
                      this.gpuMemoryEstimate < 9.5367431640625e-7 &&
                        ((this.gpuMemoryEstimate = 0),
                        (this.texMemoryEstimate = 0));
                  }),
                  (f.prototype._isNodeLoaded = function(e) {
                    return this._nodeId2Meta.has(e.id);
                  }),
                  (f.prototype._initGraphicsController = function() {
                    var e = this,
                      t = {
                        addNodeData: function(t, r) {
                          return e._addNodeData(t, r);
                        },
                        isNodeLoaded: function(t) {
                          return e._isNodeLoaded(t);
                        },
                        removeNodeData: function(t) {
                          return e._removeNodeData(t);
                        },
                        getLoadedNodeIDs: function() {
                          return e._getLoadedNodeIDs();
                        },
                        getLoadedAttributes: function(t) {
                          return e._getLoadedAttributes(t);
                        },
                        getAttributeData: function(t) {
                          return e._getAttributeData(t);
                        },
                        setAttributeData: function(t, r, n) {
                          return e._setAttributeData(t, r, n);
                        },
                        getMemoryUsage: function() {
                          return e.view.resourceController.usedMemory;
                        }
                      },
                      r = {
                        setPolygonOffset: function(t, r) {
                          return e._setPolygonOffset(t, !!r);
                        },
                        textureOptions: {
                          useCompressedTextures: this._useCompressedTextures
                        },
                        additionalCancelNodeLoadingHandler: function() {
                          return e._cancel();
                        },
                        loadCachedNodeData: function(t, r) {
                          return e._loadCachedNodeData(t, r);
                        },
                        addCachedNodeData: function(t, r, n) {
                          return e._addCachedNodeData(t, r, n);
                        }
                      };
                    this.layer
                      .createGraphicsController({
                        layerView: this,
                        layerViewRequiredFunctions: t,
                        layerViewOptionalFunctions: r
                      })
                      .then(function(t) {
                        (e._controller = t),
                          t.watch("rootNodeVisible", function() {
                            e.notifyChange("suspended");
                          });
                      })
                      .always(function() {
                        (e._controllerCreated = !0), e.notifyChange("updating");
                      });
                  }),
                  (f.prototype.getUsedMemory = function() {
                    return this.gpuMemoryEstimate;
                  }),
                  (f.prototype.getUnloadedMemory = function() {
                    return this._controller
                      ? this._controller.getUnloadedMemoryEstimate()
                      : 0;
                  }),
                  (f.prototype.getCachedMemory = function() {
                    return 0;
                  }),
                  (f.prototype.removeCachedData = function() {
                    this.suspended && this._removeAllNodeDataFromStage();
                  }),
                  (f.prototype.setVisibility = function(e) {
                    var t = this;
                    if (
                      (this._nodeId2Meta.forEach(function(r) {
                        var n = r.engineObject;
                        n.setHidden(n.geometryRecords[0], !e),
                          t._edgeView &&
                            t._edgeView.updateObjectVisibility(n, e);
                      }),
                      e)
                    ) {
                      var r = this._isIntegratedMesh() ? "im" : "scene";
                      this.view.elevationProvider.register(
                        r,
                        this._elevationProvider
                      ),
                        this.visibleGeometryChanged();
                    } else
                      this.visibleGeometryChanged(),
                        this.view.elevationProvider.unregister(
                          this._elevationProvider
                        );
                  }),
                  (f.prototype.getStats = function() {
                    var e = {
                      index: 0,
                      nodes: this._nodeId2Meta.size.toString(),
                      textures: this._texId2Meta.size,
                      "Total GPU Memory Estimate":
                        this.gpuMemoryEstimate + "MB",
                      "Geometry Memory Estimate": this.geoMemoryEstimate + "MB",
                      "Texture Memory Estimate": this.texMemoryEstimate + "MB"
                    };
                    return (
                      this._controller &&
                        (this._cachingEnabled() &&
                          (e.cache =
                            Math.round(100 * this._idbCache.getHitRate()) +
                            "% hit"),
                        this._controller.updateStats(e)),
                      e
                    );
                  }),
                  (f.prototype._addThisLayerToStage = function() {
                    for (
                      var e = this._stage, t = new Uint8Array(256), r = 0;
                      r < t.length;
                      r++
                    )
                      t[r] = 255;
                    (this._whiteTexture = new Y(t, "white", {
                      width: 8,
                      height: 8
                    })),
                      e.add(Z.TEXTURE, this._whiteTexture);
                    var n = this.layer.id,
                      i = new z(n, {}, n);
                    (this._stageLayer = i),
                      e.add(Z.LAYER, i),
                      this._stage.addToViewContent([i.id]);
                  }),
                  (f.prototype._removeThisLayerFromStage = function() {
                    if (null != this._stageLayer) {
                      var e = this._stage;
                      e.remove(Z.TEXTURE, this._whiteTexture.id),
                        this._removeAllNodeDataFromStage(),
                        Q.assert(0 === this._nodeId2Meta.size),
                        Q.assert(0 === this._texId2Meta.size),
                        e.remove(Z.LAYER, this._stageLayer.id),
                        (this._stageLayer = void 0),
                        (this.gpuMemoryEstimate = 0);
                    }
                  }),
                  (f.prototype._getLoadedAttributes = function(e) {
                    var t = this._nodeId2Meta.get(e.id);
                    if (t) return t.loadedAttributes;
                  }),
                  (f.prototype._getAttributeData = function(e) {
                    var t = this._nodeId2Meta.get(e.id);
                    if (t) return t.attributeData;
                  }),
                  (f.prototype._setAttributeData = function(e, t, r) {
                    var n = this._nodeId2Meta.get(e.id);
                    n &&
                      ((n.loadedAttributes = t),
                      (n.attributeData = r),
                      this._setObjectSymbology(n),
                      this._addOrUpdateEdgeRendering(n),
                      this._applyFilters(e),
                      this.visibleGeometryChanged(n.engineObject));
                  }),
                  (f.prototype._getLoadedNodeIDs = function() {
                    return d.keysOfMap(this._nodeId2Meta);
                  }),
                  (f.prototype._calcEngineMaterialTransparencyParams = function(
                    e,
                    t,
                    r
                  ) {
                    var n = this.fullOpacity,
                      i =
                        1 -
                        Q.clamp(Q.fallbackIfUndefined(t.transparency, 0), 0, 1);
                    return {
                      opacity: i,
                      layerOpacity: n,
                      transparent:
                        i < 1 ||
                        n < 1 ||
                        (e && h.endsWith(e.channels, "a")) ||
                        !0 === t.useVertexColorAlpha ||
                        r
                    };
                  }),
                  (f.prototype._calcEngineMaterialDoubleSidedParams = function(
                    e
                  ) {
                    return null == e.doubleSided || e.doubleSided;
                  }),
                  (f.prototype._calcEngineMaterialCullFaceParams = function(e) {
                    return e.cullFace
                      ? e.cullFace
                      : null != e.doubleSided
                        ? e.doubleSided
                          ? "none"
                          : "back"
                        : "none";
                  }),
                  (f.prototype._getMaterialParameters = function(e, t, r, n) {
                    var i;
                    if (null != e) {
                      var o = this._texId2Meta.get(t);
                      i =
                        o && o.engineTex
                          ? o.engineTex.id
                          : this._whiteTexture.id;
                    }
                    var a = r.params,
                      s = Q.fallbackIfUndefined(a.diffuse, te);
                    "standard" !== r.type &&
                      $.warn(
                        "Unknown material type '" +
                          r.type +
                          "', must be 'standard'"
                      );
                    var l = this._isIntegratedMesh(),
                      u = {
                        ambient: s,
                        diffuse: s,
                        specular: Q.fallbackIfUndefined(a.specular, re),
                        atlasRegions: a.vertexRegions,
                        textureId: i,
                        vertexColors: this._hasVertexColors(),
                        componentIndices: this._hasSymbolColors(),
                        componentColorBuffer:
                          this._hasSymbolColors() && n ? n.textureBuffer : null,
                        flipV: !1,
                        doubleSided: this._calcEngineMaterialDoubleSidedParams(
                          a
                        ),
                        cullFace: this._calcEngineMaterialCullFaceParams(a),
                        writeStencil: l,
                        receiveSSAO: !l,
                        groundNormalShading: l,
                        compressedNormals: !l
                      };
                    if (!l) {
                      var d = this._calcEngineMaterialTransparencyParams(e, a);
                      h.mixin(u, d);
                    }
                    return u;
                  }),
                  (f.prototype._createEngineMaterial = function(
                    e,
                    t,
                    r,
                    n,
                    i,
                    o,
                    a
                  ) {
                    var s = null != t ? this._getI3STexEncoding(t) : null,
                      l = this._getMaterialParameters(t, r, n, a),
                      u = new K(l, i);
                    if (
                      ((u.metadata = {
                        i3sMatId: i,
                        i3sTexId: r,
                        i3sTex: t,
                        i3sMatParams: n.params
                      }),
                      null != t)
                    ) {
                      var d = this._texId2Meta.get(r);
                      d
                        ? d.usedByEngineMats.push(u)
                        : ((d = {
                            id: r,
                            usedByEngineMats: [u],
                            images: t.images,
                            encoding: s,
                            atlas: !0 === t.atlas,
                            wrap: "none" !== t.wrap[0] || "none" !== t.wrap[1]
                          }),
                          this._texId2Meta.set(r, d));
                      var c = (function(e, t) {
                        for (var r = 0, n = e; r < n.length; r++) {
                          var i = n[r];
                          if (i.i3sTexId === t) return i.data;
                        }
                        return null;
                      })(o, r);
                      if (null != c && null == d.engineTex) {
                        var h = (function(e, t, r, n, i) {
                          var o,
                            a = !1;
                          t.encoding === R.DDS_ENCODING_STRING
                            ? (o = Y.DDS_ENCODING)
                            : (a = !(
                                Q.isPowerOfTwo(e.width) &&
                                Q.isPowerOfTwo(e.height)
                              ));
                          var s =
                              t.usedByEngineMats.some(function(e) {
                                return e.getParams().atlasRegions;
                              }) || t.atlas,
                            l = (s ? n : r) && !a;
                          return {
                            mipmap: l,
                            wrapClamp: s || !t.wrap,
                            disableAnisotropy: s && l && i,
                            encoding: o,
                            noUnpackFlip: !0
                          };
                        })(
                          c,
                          d,
                          this._enableMipMaps,
                          this._enableAtlasMipMaps,
                          this._disableAtlasAnisotropy
                        );
                        (d.engineTex = new Y(c, d.id, h)),
                          this._stage.add(Z.TEXTURE, d.engineTex),
                          (e.memory += this.memEstimateTextureAdded(
                            d.engineTex
                          ));
                      }
                      if (null != d.engineTex)
                        for (
                          var f = d.engineTex.id, p = 0, y = d.usedByEngineMats;
                          p < y.length;
                          p++
                        ) {
                          y[p].setParameterValues({ textureId: f });
                        }
                    }
                    return u;
                  }),
                  (f.prototype._getI3STexEncoding = function(e) {
                    var t = R.getAppropriateTextureEncoding(
                      e.encoding,
                      this._useCompressedTextures
                    );
                    return t > -1 ? e.encoding[t] : e.encoding;
                  }),
                  (f.prototype._getVertexBufferLayout = function(e, t) {
                    var r = e.params.materialID,
                      n = t.materialDefinitions[r];
                    Q.assert(
                      void 0 !== n,
                      "geometry wants unknown material " + r
                    );
                    var i,
                      o = e.params.textureID || "none";
                    "none" !== o &&
                      ((null != t.textureDefinitions &&
                        null != t.textureDefinitions[o]) ||
                        $.warn("textureDefinitions missing in shared resource"),
                      (i = t.textureDefinitions[o]));
                    var a = this._getMaterialParameters(i, o, n);
                    return K.getVertexBufferLayout(a);
                  }),
                  (f.prototype._createEngineMat = function(e, t, r, n, i) {
                    var o = t.params.materialID,
                      a = r.materialDefinitions[o];
                    Q.assert(
                      void 0 !== a,
                      "geometry wants unknown material " + o
                    );
                    var s,
                      l = t.params.textureID || "none";
                    return (
                      "none" !== l &&
                        ((null != r.textureDefinitions &&
                          null != r.textureDefinitions[l]) ||
                          $.warn(
                            "textureDefinitions missing in shared resource"
                          ),
                        (s = r.textureDefinitions[l])),
                      this._createEngineMaterial(e, s, l, a, o, n, i)
                    );
                  }),
                  (f.prototype._getObjectIdField = function() {
                    return this.layer.objectIdField || "OBJECTID";
                  }),
                  (f.prototype._findGraphicNodeAndIndex = function(e) {
                    var t = N.attributeLookup(
                        e.attributes,
                        this._getObjectIdField()
                      ),
                      r = null;
                    return (
                      this._nodeId2Meta.forEach(function(e, n) {
                        if (!r) {
                          var i = e.featureIds.indexOf(t);
                          -1 !== i && (r = { node: e.node, index: i });
                        }
                      }),
                      r
                    );
                  }),
                  (f.prototype._getGraphicIndices = function(e, t) {
                    var r = this._nodeId2Meta.get(e.id);
                    if (!r) return [];
                    for (
                      var n = [], i = this._getObjectIdField(), o = 0, a = t;
                      o < a.length;
                      o++
                    ) {
                      var s = a[o],
                        l = N.attributeLookup(s.attributes, i),
                        u = r.featureIds.indexOf(l);
                      -1 !== u && n.push(u);
                    }
                    return n;
                  }),
                  (f.prototype.whenGraphicBounds = function(e) {
                    var t = this._findGraphicNodeAndIndex(e);
                    if (!t) return p.reject();
                    var r = this._nodeId2Meta.get(t.node.id).engineObject,
                      n = this._boundingBoxCornerPoints(
                        t.index,
                        r,
                        new Float64Array(24)
                      );
                    if (
                      G.bufferToBuffer(
                        n,
                        this.view.renderSpatialReference,
                        0,
                        n,
                        this.view.spatialReference,
                        0,
                        8
                      )
                    ) {
                      var i = b.empty();
                      return (
                        b.expandWithBuffer(i, n, 0, 8),
                        p.resolve({ boundingBox: i, screenSpaceObjects: [] })
                      );
                    }
                  }),
                  (f.prototype.whenGraphicAttributes = function(e, t) {
                    var r = this;
                    return R.whenGraphicAttributes(
                      this.layer,
                      [e],
                      this._getObjectIdField(),
                      t,
                      function() {
                        var t = r._findGraphicNodeAndIndex(e);
                        return { node: t.node, indices: [t.index] };
                      },
                      { ignoreUnavailableFields: !0, populateObjectId: !0 }
                    ).then(function(e) {
                      return e[0];
                    });
                  }),
                  (f.prototype.getGraphicFromStageObject = function(e, t) {
                    if (this.layer instanceof E) return p.reject();
                    var r = this._getMetadata(e),
                      n = e.getComponentFromTriangleNr(0, t);
                    if (
                      null != n &&
                      null != r.featureIds &&
                      n < r.featureIds.length
                    ) {
                      var i = this._createGraphic(n, r);
                      return p.resolve(i);
                    }
                    return p.reject();
                  }),
                  (f.prototype._getMetadata = function(e) {
                    var t = e.getMetadata();
                    return this._nodeId2Meta.get(t.i3sNode);
                  }),
                  (f.prototype._getCacheKey = function(e) {
                    return e.baseUrl + this._cacheKeySuffix;
                  }),
                  (f.prototype._cachingEnabled = function() {
                    return (
                      !this._controller.disableCache &&
                      0 === this.elevationOffset &&
                      null != this._cacheKeySuffix
                    );
                  }),
                  (f.prototype._cancel = function() {
                    this._cancelCount = (this._cancelCount + 1) | 0;
                  }),
                  (f.prototype._handleCancelled = function(e) {
                    if (((this._cancelCount - e) | 0) > 0) throw new s();
                  }),
                  (f.prototype._loadCachedNodeData = function(e, t) {
                    var r = this,
                      n = this._cancelCount;
                    return this._cachingEnabled()
                      ? this._idbCache
                          .get(this._getCacheKey(e))
                          .then(function(i) {
                            if (null == i) return null;
                            if (
                              (r._handleCancelled(n),
                              i.nodeVersion !== e.version)
                            )
                              return (
                                r._idbCache.remove(r._getCacheKey(e)), null
                              );
                            e.obb ||
                              ((e.obb = B.clone(i.nodeObb)),
                              r._controller.updateVisibility(e.id));
                            return r.rendererNeedsTextures &&
                              i.textureData.some(function(e) {
                                if (null == e.data) return !0;
                                var t =
                                    i.sharedResource.textureDefinitions[
                                      e.i3sTexId
                                    ],
                                  n = r._getI3STexEncoding(t);
                                return e.encoding !== n;
                              })
                              ? t(i.allGeometryData, i.sharedResource).then(
                                  function(t) {
                                    return (
                                      (i.textureData = t),
                                      t.every(W) &&
                                        r._idbCache
                                          .put(r._getCacheKey(e), i)
                                          .catch(function(t) {
                                            return $.warn(
                                              "Failed to update node with textures in IndexedDB cache: " +
                                                e.id +
                                                ": " +
                                                t
                                            );
                                          }),
                                      r._handleCancelled(n),
                                      i
                                    );
                                  }
                                )
                              : i;
                          })
                      : p.resolve(null);
                  }),
                  (f.prototype._addNodeData = function(e, t) {
                    var r = this;
                    return this._transformBundle(e, t).then(function(n) {
                      e.obb ||
                        ((e.obb = n.obb), r._controller.updateVisibility(e.id));
                      var i = {
                        allGeometryData: t.allGeometryData,
                        transformedGeometries: n.transformedGeometries,
                        textureData: t.textureData,
                        sharedResource: t.sharedResource,
                        nodeVersion: e.version,
                        nodeObb: e.obb,
                        byteSize: (function(e, t) {
                          for (var r = 1024, n = 0, i = e; n < i.length; n++) {
                            var o = i[n];
                            (r +=
                              o.interleavedVertexData.byteLength +
                              (o.indices ? o.indices.byteLength : 0)),
                              (r +=
                                o.positionData.data.byteLength +
                                o.positionData.indices.byteLength);
                          }
                          for (var a = 0, s = t; a < s.length; a++) {
                            var l = s[a];
                            l.data instanceof ArrayBuffer &&
                              (r += l.data.byteLength);
                          }
                          return r;
                        })(n.transformedGeometries, t.textureData)
                      };
                      if (r._cachingEnabled()) {
                        var o = i.textureData.map(function(e) {
                          return W(e)
                            ? e
                            : {
                                i3sTexId: e.i3sTexId,
                                encoding: e.encoding,
                                data: null
                              };
                        });
                        r._idbCache
                          .put(r._getCacheKey(e), {
                            allGeometryData: i.allGeometryData,
                            transformedGeometries: i.transformedGeometries,
                            textureData: o,
                            sharedResource: i.sharedResource,
                            nodeVersion: i.nodeVersion,
                            nodeObb: i.nodeObb,
                            byteSize: i.byteSize
                          })
                          .catch(function(t) {
                            return $.warn(
                              "Failed to store node in IndexedDB cache: " +
                                e.id +
                                ": " +
                                t
                            );
                          });
                      }
                      return r._addCachedNodeData(e, i, t.attributeDataInfo);
                    });
                  }),
                  (f.prototype._transformBundle = function(e, t) {
                    for (
                      var r = [],
                        n = [t.geometryBuffer],
                        i = 0,
                        o = t.allGeometryData;
                      i < o.length;
                      i++
                    )
                      for (var a = 0, s = o[i].geometries; a < s.length; a++) {
                        var l = s[a];
                        r.push(
                          this._getVertexBufferLayout(l, t.sharedResource)
                        );
                      }
                    var u = {
                      geometryBuffer: t.geometryBuffer,
                      geometryData: t.allGeometryData,
                      layouts: r,
                      center: e.mbs,
                      obb: e.obb,
                      elevationOffset: this.elevationOffset,
                      hasColors: this._hasColors,
                      needNormals:
                        !this._isIntegratedMesh() &&
                        this._controller.isMeshPyramid,
                      normalReferenceFrame:
                        this.layer.normalReferenceFrame || "none",
                      indexSR: this._controller.crsIndex.toJSON(),
                      vertexSR: this._controller.crsVertex.toJSON(),
                      renderSR: this.view.renderSpatialReference.toJSON()
                    };
                    return this._workerThread
                      ? this._workerThread.invoke("process", u, n)
                      : p.resolve(this._worker.transform(u));
                  }),
                  (f.prototype._addCachedNodeData = function(e, t, r) {
                    var n = this;
                    if (this._nodeId2Meta.has(e.id))
                      return (
                        this._addOrUpdateEdgeRendering(
                          this._nodeId2Meta.get(e.id)
                        ),
                        this._applyFilters(e),
                        p.resolve()
                      );
                    if (
                      !this.alwaysLoadEverythingModeEnabled &&
                      !this._controller.isGeometryVisible(e)
                    )
                      return p.resolve();
                    var i = t.allGeometryData,
                      o = t.transformedGeometries,
                      a = t.textureData,
                      s = t.sharedResource;
                    if (0 === i.length) return p.resolve();
                    if (
                      (1 !== i.length &&
                        console.warn(
                          "Node with",
                          i.length,
                          "geometries is unsupported"
                        ),
                      !this.rendererNeedsTextures)
                    )
                      for (var l = 0, u = a; l < u.length; l++) {
                        u[l].data = null;
                      }
                    var d = {};
                    (d[Z.OBJECT] = {}),
                      (d[Z.GEOMETRY] = {}),
                      (d[Z.MATERIAL] = {});
                    var c = 0,
                      h = !1;
                    e.memory = 0;
                    var f = i[0],
                      y = f.componentOffsets,
                      g = f.geometries,
                      m = f.featureIds,
                      v = null,
                      _ = null;
                    if (this._hasSymbolColors()) {
                      (v = this._componentColorManager.getBuffer(m.length)),
                        (_ = new Uint16Array(m.length));
                      for (var b = 0; b < m.length; b++) _[b] = v.aquireIndex();
                    }
                    for (
                      var x,
                        E = e.id + "|" + m[0],
                        w = [],
                        I = [],
                        C = [],
                        M = 0,
                        O = g;
                      M < O.length;
                      M++
                    ) {
                      var S = O[M],
                        A = this._createEngineMat(e, S, s, a, v),
                        T = o[c++];
                      h = h || T.hasColors;
                      var j = new H(
                        new Float32Array(T.interleavedVertexData),
                        T.layout,
                        T.positionData,
                        y || H.DefaultOffsets,
                        T.indices || H.DefaultIndices
                      );
                      this._hasSymbolColors() &&
                        this._setComponentIndices(j, _),
                        (x = T.corMatrices);
                      var D = L.mat4d.create(x.localTrafo);
                      if (null != S.transformation) {
                        var R = S.transformation;
                        L.mat4d.multiply(D, R, D);
                      }
                      var F = w.length,
                        N = new q(j, E + (F > 0 ? "_" + F : ""));
                      w.push(N),
                        I.push(D),
                        C.push([A]),
                        (e.memory += this.memEstimateGeometryAdded(
                          N.getData()
                        )),
                        (d[Z.MATERIAL][A.id] = A),
                        (d[Z.GEOMETRY][N.id] = N);
                    }
                    var V = { i3sNode: e.id, layerUid: this.layer.uid },
                      P = new k({
                        idHint: e.id,
                        name: E,
                        geometries: w,
                        materials: C,
                        transformations: I,
                        castShadow: !0,
                        metadata: V
                      }),
                      B = L.mat4d.create();
                    L.mat4d.identity(B),
                      L.mat4d.multiply(B, x.globalTrafo, B),
                      P.setObjectTransformation(B),
                      (d[Z.OBJECT][P.id] = P);
                    var G = {
                      node: e,
                      engineObject: P,
                      featureIds: m,
                      attributeData: r ? r.attributeData : null,
                      loadedAttributes: r ? r.loadedAttributes : null,
                      componentColorBuffer: v,
                      componentIndices: _
                    };
                    return p.create(function(t) {
                      n._addOrUpdateEdgeRendering(G).then(function() {
                        if (n._nodeId2Meta.has(e.id))
                          return (
                            n._edgeView &&
                              n._edgeView.removeObject(G.engineObject),
                            void t()
                          );
                        n._nodeId2Meta.set(e.id, G),
                          n._setObjectSymbology(G),
                          n._applyFilters(e),
                          n._highlights.objectCreated(P),
                          n.visibleGeometryChanged(P);
                        var r = n._stageLayer,
                          i = n._stage;
                        i.beginMod();
                        var o = d[Z.OBJECT];
                        for (var a in o)
                          o.hasOwnProperty(a) && r.addObject(o[a]);
                        for (var s in d)
                          if (d.hasOwnProperty(s)) {
                            var l = d[s];
                            for (var u in l)
                              l.hasOwnProperty(u) &&
                                null == i.get(s, u) &&
                                i.add(s, l[u]);
                          }
                        i.endMod(),
                          !n._hasTextures &&
                            null != e.textureData &&
                            e.textureData.length > 0 &&
                            (n._hasTextures = !0),
                          n._hasColors || (n._hasColors = h),
                          (n._hasData = !0),
                          n.notifyChange("hasTexturesOrVertexColors"),
                          t();
                      });
                    });
                  }),
                  (f.prototype._clippingAreaChanged = function() {
                    var e = this,
                      t = b.create();
                    G.extentToBoundingBox(
                      this.view.clippingArea,
                      t,
                      this.view.renderSpatialReference
                    )
                      ? (this._clippingArea = t)
                      : (this._clippingArea = null),
                      this._updateFilters(),
                      this._nodeId2Meta.forEach(function(t) {
                        return e._applyFilters(t.node);
                      }),
                      this._controller &&
                        this._controller.updateClippingArea(
                          this.view.clippingArea
                        );
                  }),
                  (f.prototype._filterChange = function() {
                    var e = this;
                    this._updateFilters(),
                      this._nodeId2Meta.forEach(function(t) {
                        return e._applyFilters(t.node);
                      });
                  }),
                  (f.prototype._updateFilters = function() {
                    var e = this,
                      t = [];
                    if (this.layer.objectIdFilter) {
                      var r = new Float64Array(this.layer.objectIdFilter.ids),
                        n = "include" === this.layer.objectIdFilter.method;
                      r.sort(),
                        t.push(function(t, i) {
                          return e._objectIdFilter(r, n, i);
                        });
                    }
                    if (
                      this._controller &&
                      this._controller.parsedDefinitionExpression &&
                      this._controller.definitionExpressionFields
                    ) {
                      this._definitionExpressionErrors = 0;
                      var i = this._controller.parsedDefinitionExpression,
                        o = this._controller.definitionExpressionFields;
                      t.push(function(t, r) {
                        return e._sqlFilter(t, i, o, r);
                      });
                    }
                    this._clippingArea &&
                      t.push(function(t, r) {
                        return e._boundingboxFilter(t, e._clippingArea, r);
                      }),
                      (this._filters = t);
                  }),
                  (f.prototype._sqlFilter = function(e, t, r, n) {
                    var i = {},
                      o = new l(null, null, i);
                    (o.layer = this.layer), (o.sourceLayer = this.layer);
                    for (
                      var a = this.layer.objectIdField,
                        s = 0,
                        u = 0,
                        d = this._nodeId2Meta.get(e.id),
                        c = d.featureIds,
                        h = d.attributeData,
                        f = r.every(function(e) {
                          return null != h[e] || e === a;
                        }),
                        p = 0;
                      p < c.length && s < n.length;
                      p++
                    )
                      if (n[s] === c[p]) {
                        var y = !0;
                        if (f) {
                          i[a] = c[p];
                          for (var g = 0, m = r; g < m.length; g++) {
                            var v = m[g];
                            v !== a &&
                              (i[v] = R.getCachedAttributeValue(h[v], p));
                          }
                          y = this._evaluateClause(t, o);
                        }
                        y && ((n[u] = n[s]), u++), s++;
                      }
                    n.length = u;
                  }),
                  (f.prototype._evaluateClause = function(e, t) {
                    try {
                      return e.testFeature(t);
                    } catch (e) {
                      return (
                        this._definitionExpressionErrors <
                          this._maxDefinitionExpressionErrors &&
                          $.error(
                            "Error while evaluating definitionExpression: " + e
                          ),
                        this._definitionExpressionErrors++,
                        this._definitionExpressionErrors ===
                          this._maxDefinitionExpressionErrors &&
                          $.error("Further errors are ignored"),
                        !1
                      );
                    }
                  }),
                  (f.prototype._objectIdFilter = function(e, t, r) {
                    for (var n = 0, i = 0; n < r.length; )
                      u.binaryIndexOf(e, r[n]) >= 0 === t &&
                        ((r[i] = r[n]), i++),
                        n++;
                    r.length = i;
                  }),
                  (f.prototype._boundingboxFilter = function(e, t, r) {
                    var n = [0, 0, 0, 0];
                    G.mbsToMbs(
                      e.mbs,
                      this._controller.crsIndex,
                      n,
                      this.view.renderSpatialReference
                    );
                    var i = null != t ? R.intersectBoundingBoxWithMbs(t, n) : 2;
                    if (2 !== i) {
                      if (0 === i) return void (r.length = 0);
                      var o = 0,
                        a = 0,
                        s = this._nodeId2Meta.get(e.id),
                        l = s.featureIds,
                        u = s.engineObject.getObjectTransformation(),
                        d = s.engineObject
                          .getGeometryRecords()[0]
                          .getShaderTransformation();
                      if (
                        (L.mat4d.multiply(u, d),
                        0 === u[1] &&
                          0 === u[2] &&
                          0 === u[3] &&
                          0 === u[4] &&
                          0 === u[6] &&
                          0 === u[7] &&
                          0 === u[8] &&
                          0 === u[9] &&
                          0 === u[11] &&
                          1 === u[15])
                      ) {
                        var c = ae;
                        (c[0] = (t[0] - u[12]) / u[0]),
                          (c[1] = (t[1] - u[13]) / u[5]),
                          (c[2] = (t[2] - u[14]) / u[10]),
                          (c[3] = (t[3] - u[12]) / u[0]),
                          (c[4] = (t[4] - u[13]) / u[5]),
                          (c[5] = (t[5] - u[14]) / u[10]);
                        for (
                          var h = s.engineObject.getGeometryRecords()[0]
                              .geometry,
                            f = h.getComponentCount(),
                            p = 0;
                          p < f && o < r.length;
                          p++
                        )
                          if (r[o] === l[p]) {
                            var y = h.getComponentAABB(p, se);
                            b.intersects(c, y) && ((r[a] = r[o]), a++), o++;
                          }
                        r.length = a;
                      }
                    }
                  }),
                  (f.prototype._addOrUpdateEdgeRendering = function(e) {
                    return i(this, void 0, void 0, function() {
                      var t, r, n, i, a, s;
                      return o(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return this._edgeView
                              ? ((t = e.engineObject),
                                (r = this._edgeView.hasObject(t)),
                                (n = this._extractObjectEdgeMaterials(e)),
                                (i = n.hasEdges),
                                (a = n.perFeatureEdgeMaterials),
                                (s = !t.isHidden(t.geometryRecords[0])),
                                r
                                  ? (this._edgeView.updateAllComponentMaterials(
                                      t,
                                      a
                                    ),
                                    this._edgeView.updateObjectVisibility(t, s),
                                    [3, 3])
                                  : [3, 1])
                              : [2];
                          case 1:
                            return s && i
                              ? [4, this._edgeView.addObject(t, a)]
                              : [3, 3];
                          case 2:
                            o.sent(), (o.label = 3);
                          case 3:
                            return [2];
                        }
                      });
                    });
                  }),
                  (f.prototype._applyFilters = function(e) {
                    var t = this._nodeId2Meta.get(e.id);
                    t && this._applyFiltersToObjects(e, t);
                  }),
                  (f.prototype.unhideEdgesForAllFeatures = function(e) {
                    var t = e.engineObject;
                    if (this._edgeView && this._edgeView.hasObject(t)) {
                      var r = this.fullOpacity;
                      this._edgeView.updateAllComponentOpacities(t, r);
                    }
                  }),
                  (f.prototype._applyFiltersToObjects = function(e, t) {
                    var r = t.engineObject;
                    if ((r.unhideAllComponents(), 0 !== this._filters.length)) {
                      for (
                        var n = t.featureIds,
                          i = n.slice(),
                          o = 0,
                          a = this._filters;
                        o < a.length;
                        o++
                      )
                        (0, a[o])(e, i);
                      if (i.length !== n.length) {
                        for (
                          var s = 0,
                            l = r.getGeometryRecords()[0],
                            u = new Array(t.featureIds.length),
                            d = this.fullOpacity,
                            c = 0;
                          c < n.length;
                          c++
                        ) {
                          var h = n[c];
                          s >= i.length || i[s] !== h
                            ? (r.setComponentVisibility(l, c, !1), (u[c] = 0))
                            : (s++, (u[c] = d));
                        }
                        this._edgeView &&
                          this._edgeView.hasObject(r) &&
                          this._edgeView.updateAllComponentOpacities(r, u);
                      } else this.unhideEdgesForAllFeatures(t);
                    } else this.unhideEdgesForAllFeatures(t);
                  }),
                  (f.prototype._removeAllNodeDataFromStage = function() {
                    var e = this;
                    this._nodeId2Meta.forEach(function(t, r) {
                      return e._removeNodeStageData(r);
                    });
                  }),
                  (f.prototype._removeNodeData = function(e) {
                    var t = this;
                    e.forEach(function(e) {
                      return t._removeNodeStageData(e.id);
                    });
                  }),
                  (f.prototype._removeNodeStageData = function(e) {
                    var t = this._nodeId2Meta.get(e);
                    if (t) {
                      var r = this._stage,
                        n = this._stageLayer,
                        i = t.engineObject;
                      this._highlights.objectDeleted(i),
                        this._edgeView && this._edgeView.removeObject(i),
                        this.visibleGeometryChanged(i),
                        n.removeObject(i);
                      for (
                        var o = 0, a = i.getGeometryRecords();
                        o < a.length;
                        o++
                      ) {
                        var s = a[o];
                        this.memEstimateGeometryRemoved(s.geometry.getData()),
                          r.remove(Z.GEOMETRY, s.geometry.id);
                        for (var l = 0, u = s.materials; l < u.length; l++) {
                          var d = u[l];
                          this._removeMaterial(d, r);
                        }
                      }
                      if (t.componentIndices) {
                        for (var c = 0; c < t.componentIndices.length; c++)
                          t.componentColorBuffer.releaseIndex(
                            t.componentIndices[c]
                          );
                        this._componentColorManager.garbageCollect();
                      }
                      r.remove(Z.OBJECT, i.id), this._nodeId2Meta.delete(e);
                    }
                  }),
                  (f.prototype._removeMaterial = function(e, t) {
                    t.remove(Z.MATERIAL, e.id);
                    var r = e.metadata.i3sTexId || "none";
                    if ("none" !== r) {
                      var n = this._texId2Meta.get(r),
                        i = n.usedByEngineMats,
                        o = i.indexOf(e);
                      if (
                        (o > -1
                          ? ((i[o] = i[i.length - 1]), i.pop())
                          : $.error(
                              "Missing reference from material to texture"
                            ),
                        0 === i.length)
                      ) {
                        var a = n.engineTex;
                        a &&
                          a !== this._whiteTexture &&
                          (this.memEstimateTextureRemoved(a),
                          t.remove(Z.TEXTURE, n.engineTex.id)),
                          this._texId2Meta.delete(r);
                      }
                    }
                  }),
                  (f.prototype._setPolygonOffset = function(e, t) {
                    var r = this._nodeId2Meta.get(e.id);
                    if (r)
                      for (
                        var n = 0, i = r.engineObject.getGeometryRecords();
                        n < i.length;
                        n++
                      )
                        for (var o = 0, a = i[n].materials; o < a.length; o++) {
                          a[o].setParameterValues({ polygonOffset: t });
                        }
                  }),
                  (f.prototype._rendererChange = function(e) {
                    if (
                      ((this._currentRenderer = e),
                      e &&
                        (e.colorInfo || e.sizeInfo) &&
                        $.warn(
                          "renderer.colorInfo and renderer.sizeInfo are not supported for Scene Services. Use visualVariables instead."
                        ),
                      e)
                    )
                      for (var t = 0, r = e.getSymbols(); t < r.length; t++) {
                        var n = r[t];
                        "mesh-3d" !== n.type &&
                          $.error(
                            "Symbols of type '" +
                              n.type +
                              "' are not supported for 3D Object Scene Services."
                          );
                      }
                    this.view.resourceController.setMemoryDirty();
                  }),
                  (f.prototype._getRenderingInfo = function(e, t) {
                    var r,
                      n,
                      i = this._currentRenderer,
                      o = i && i.getSymbol(e);
                    if (!(o instanceof I && this._hasSymbolColors()))
                      return null;
                    if (i && i.visualVariables)
                      for (
                        var a = i.getVisualVariableValues(e), s = 0;
                        s < a.length;
                        s++
                      ) {
                        var l = a[s],
                          u = l.variable.type;
                        "color" === u
                          ? (r = l.value)
                          : "opacity" === u && (n = l.value);
                      }
                    return (
                      (t.symbol = o),
                      (t.color = r ? [r.r / 255, r.g / 255, r.b / 255] : null),
                      null != n
                        ? (t.opacity = n)
                        : r && null != r.a
                          ? (t.opacity = r.a)
                          : (t.opacity = null),
                      t
                    );
                  }),
                  (f.prototype._getSymbolFillMaterial = function(e, t) {
                    for (
                      var r = 0, n = e.symbolLayers.items;
                      r < n.length;
                      r++
                    ) {
                      var i = n[r];
                      if ("fill" === i.type) {
                        var o = i.material,
                          a = null != o ? o.color : null;
                        return (
                          null != a
                            ? ((le[0] = a.r / 255),
                              (le[1] = a.g / 255),
                              (le[2] = a.b / 255),
                              (le[3] = a.a),
                              (t.color = le))
                            : (t.color = null),
                          void (t.colorMixMode =
                            null != o ? o.colorMixMode : null)
                        );
                      }
                    }
                    (t.color = null), (t.colorMixMode = null);
                  }),
                  (f.prototype._hasSymbolColors = function() {
                    if (
                      this._isIntegratedMesh() ||
                      !this.layer.store.defaultGeometrySchema
                    )
                      return !1;
                    var e = this.layer.store.defaultGeometrySchema
                      .featureAttributes;
                    return !!(e && e.faceRange && e.id);
                  }),
                  (f.prototype._isIntegratedMesh = function() {
                    return this.layer instanceof E;
                  }),
                  (f.prototype._hasVertexColors = function() {
                    return (
                      null !=
                        this.layer.store.defaultGeometrySchema.vertexAttributes
                          .color &&
                      (null == this.layer.cachedDrawingInfo ||
                        !this.layer.cachedDrawingInfo.color)
                    );
                  }),
                  (f.prototype._extractObjectEdgeMaterials = function(e) {
                    for (
                      var t,
                        r = [],
                        n = e.featureIds ? e.featureIds.length : 1,
                        i = this.layer.objectIdField,
                        o = new l(null, null, {}),
                        a = o.attributes,
                        s =
                          this._currentRenderer &&
                          this._currentRenderer.requiredFields,
                        u = this._edgeView.createSolidEdgeMaterial({
                          color: [0, 0, 0, 0],
                          opacity: 0
                        }),
                        d = this.fullOpacity,
                        c = !1,
                        h = 0;
                      h < n;
                      h++
                    ) {
                      if (
                        ((t = u),
                        null != i &&
                          null != e.featureIds &&
                          (a[i] = e.featureIds[h]),
                        null != s && null != e.attributeData)
                      )
                        for (
                          var f = 0, p = Object.keys(e.attributeData);
                          f < p.length;
                          f++
                        ) {
                          var y = p[f];
                          a[y] = R.getCachedAttributeValue(
                            e.attributeData[y],
                            h
                          );
                        }
                      var g = this._getRenderingInfo(o, ue),
                        m = e.engineObject,
                        v = m.getComponentVisibility(
                          m.getGeometryRecords()[0],
                          h
                        )
                          ? d
                          : 0;
                      if (g && g.symbol instanceof I)
                        for (
                          var _ = 0, b = g.symbol.symbolLayers.items;
                          _ < b.length;
                          _++
                        ) {
                          var x = b[_];
                          if (x instanceof w) {
                            var E = V.createMaterial(this._edgeView, x, v);
                            if (E) {
                              (c = !0), (t = E);
                              break;
                            }
                          }
                        }
                      r.push(t);
                    }
                    return { hasEdges: c, perFeatureEdgeMaterials: r };
                  }),
                  (f.prototype._setObjectSymbology = function(e) {
                    if (this._hasSymbolColors()) {
                      for (
                        var t = e.featureIds ? e.featureIds.length : 1,
                          r = new l(null, null, {}),
                          n = r.attributes,
                          i = this.layer.objectIdField,
                          o =
                            this._currentRenderer &&
                            this._currentRenderer.requiredFields,
                          a = !1,
                          s = new Uint8Array(4),
                          u = { color: null, colorMixMode: null },
                          d = [0, 0, 0, 0],
                          c = null,
                          h = 0;
                        h < t;
                        h++
                      ) {
                        if (
                          (null != i &&
                            null != e.featureIds &&
                            (n[i] = e.featureIds[h]),
                          null != o && null != e.attributeData)
                        )
                          for (
                            var f = 0, p = Object.keys(e.attributeData);
                            f < p.length;
                            f++
                          ) {
                            var y = p[f];
                            n[y] = R.getCachedAttributeValue(
                              e.attributeData[y],
                              h
                            );
                          }
                        var g = this._getRenderingInfo(r, ue);
                        if (g) {
                          g.symbol !== c &&
                            ((c = g.symbol),
                            this._getSymbolFillMaterial(g.symbol, u));
                          var m = g.color,
                            v = g.opacity;
                          (m =
                            null == m || null == v
                              ? A.overrideColor(
                                  m,
                                  v,
                                  u.color,
                                  u.color && u.color[3],
                                  ee,
                                  d
                                )
                              : A.overrideColor(m, v, null, null, ee, d))[3] <
                            1 && (a = !0),
                            R.encodeSymbolColor(m, u.colorMixMode, s);
                        } else R.encodeSymbolColor(null, null, s);
                        var _ = e.componentIndices[h];
                        e.componentColorBuffer.textureBuffer.setData(
                          _,
                          0,
                          s[0],
                          s[1],
                          s[2],
                          s[3]
                        );
                      }
                      this._updateObjectOpacity(e.engineObject, a);
                    }
                  }),
                  (f.prototype._setComponentIndices = function(e, t) {
                    for (
                      var r = e.getAttribute(
                          Q.VertexAttrConstants.COMPONENTINDEX
                        ),
                        n = r.data,
                        i = r.offsetIdx,
                        o = r.strideIdx,
                        a = e.getIndices(Q.VertexAttrConstants.COMPONENTINDEX),
                        s = 0;
                      s < t.length;
                      s++
                    )
                      for (
                        var l = e.componentOffsets[s],
                          u = e.componentOffsets[s + 1],
                          d = l;
                        d < u;
                        d++
                      ) {
                        n[i + a[d] * o] = t[s];
                      }
                  }),
                  (f.prototype._elevationInfoChanged = function() {
                    var e =
                      this.layer.elevationInfo && this.layer.elevationInfo.unit;
                    e &&
                      !C.supportsUnit(e) &&
                      $.warn(
                        "elevationInfo.unit",
                        "'" + e + "' is not a valid unit"
                      );
                  }),
                  (f.prototype._rangeInfosChanged = function(e) {
                    null != e &&
                      e.length > 0 &&
                      $.warn(
                        "Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering."
                      );
                  }),
                  (f.prototype._reloadAll = function() {
                    this._removeAllNodeDataFromStage(),
                      null != this._controller &&
                        this._controller.restartNodeLoading();
                  }),
                  (f.prototype._opacityChange = function(e) {
                    var t = this;
                    this._nodeId2Meta.forEach(function(e) {
                      t._updateObjectOpacity(e.engineObject),
                        t._addOrUpdateEdgeRendering(e);
                    });
                  }),
                  (f.prototype._updateObjectOpacity = function(e, t) {
                    for (
                      var r = 0, n = e.getGeometryRecords();
                      r < n.length;
                      r++
                    )
                      for (var i = 0, o = n[r].materials; i < o.length; i++) {
                        var a = o[i],
                          s = a.metadata;
                        void 0 !== t && (s.symbolIsTransparent = t);
                        var l = a.getParams(),
                          u = this._calcEngineMaterialTransparencyParams(
                            s.i3sTex,
                            s.i3sMatParams,
                            s.symbolIsTransparent
                          );
                        (l.transparent === u.transparent &&
                          l.layerOpacity === u.layerOpacity) ||
                          a.setParameterValues(u);
                      }
                  }),
                  (f.prototype.queryExtent = function(e) {
                    return this._ensureQueryEngine().queryExtent(e);
                  }),
                  (f.prototype.queryFeatureCount = function(e) {
                    return this._ensureQueryEngine().queryFeatureCount(e);
                  }),
                  (f.prototype.queryFeatures = function(e) {
                    return this._ensureQueryEngine().queryFeatures(e);
                  }),
                  (f.prototype.queryObjectIds = function(e) {
                    return this._ensureQueryEngine().queryObjectIds(e);
                  }),
                  (f.prototype._ensureQueryEngine = function() {
                    return (
                      this._queryEngine ||
                        (this._queryEngine = this._createQueryEngine()),
                      this._queryEngine
                    );
                  }),
                  (f.prototype._createQueryEngine = function() {
                    var e = this,
                      t = {
                        id: 0,
                        index: 0,
                        meta: null,
                        bbCorners: new Float64Array(24)
                      };
                    return new D(
                      this.layer,
                      {
                        forAll: function(r, n) {
                          e._forAllFeatures(function(n, i, o) {
                            (t.id = n),
                              (t.index = i),
                              (t.meta = o),
                              e._boundingBoxCornerPoints(
                                i,
                                o.engineObject,
                                t.bbCorners
                              ),
                              r(t);
                          }, n);
                        },
                        createGraphic: function(t) {
                          return e._createGraphic(t.index, t.meta);
                        },
                        requestFields: function(t, r, n) {
                          return R.whenGraphicAttributes(
                            e.layer,
                            r,
                            e._getObjectIdField(),
                            n,
                            function() {
                              var n = e._getGraphicIndices(t, r);
                              return { node: t, indices: n };
                            },
                            { ignoreUnavailableFields: !1 }
                          );
                        },
                        createExtentBuilder: function() {
                          return e._createExtentBuilder();
                        }
                      },
                      {
                        enableObjectId: !0,
                        enableOutFields: !!this.layer.objectIdField
                      }
                    );
                  }),
                  (f.prototype._createExtentBuilder = function() {
                    var e = this.view.renderSpatialReference,
                      t = this.view.spatialReference,
                      r = b.empty(),
                      n = new Float64Array(24);
                    return {
                      add: function(i) {
                        G.bufferToBuffer(i.bbCorners, e, 0, n, t, 0, 8) &&
                          b.expandWithBuffer(r, n, 0, 8);
                      },
                      getExtent: function() {
                        return b.toExtent(r, t);
                      }
                    };
                  }),
                  (f.prototype._forAllFeatures = function(e, t, r) {
                    var n = this;
                    this._nodeId2Meta.forEach(function(i, o) {
                      n._forAllFeaturesOfNode(i, e, r), t && t(i.node);
                    });
                  }),
                  (f.prototype._forAllFeaturesOfNode = function(e, t, r) {
                    for (
                      var n = e.featureIds,
                        i = e.engineObject.getGeometryRecords()[0],
                        o = 0;
                      o < n.length;
                      o++
                    )
                      if (r || e.engineObject.getComponentVisibility(i, o)) {
                        t(n[o], o, e, i);
                      }
                  }),
                  (f.prototype._createGraphic = function(e, t) {
                    var r = {};
                    if (
                      (null != t.featureIds &&
                        (r[this._getObjectIdField()] = t.featureIds[e]),
                      null != t.attributeData)
                    )
                      for (
                        var n = 0, i = Object.keys(t.attributeData);
                        n < i.length;
                        n++
                      ) {
                        var o = i[n];
                        r[o] = R.getCachedAttributeValue(t.attributeData[o], e);
                      }
                    var a = new l(null, null, r);
                    return (
                      (a.layer = this.layer), (a.sourceLayer = this.layer), a
                    );
                  }),
                  (f.prototype._boundingBoxCornerPoints = function(e, t, r) {
                    for (
                      var n = t.geometries[0].getComponentAABB(e, ae), i = 0;
                      i < 8;
                      ++i
                    )
                      (oe[0] = 1 & i ? n[0] : n[3]),
                        (oe[1] = 2 & i ? n[1] : n[4]),
                        (oe[2] = 4 & i ? n[2] : n[5]),
                        L.mat4d.multiplyVec3(t.objectTransformation, oe),
                        (r[3 * i] = oe[0]),
                        (r[3 * i + 1] = oe[1]),
                        (r[3 * i + 2] = oe[2]);
                    return r;
                  }),
                  (f.prototype.highlight = function(e, t) {
                    var r = this,
                      n = this._highlights;
                    if (e instanceof M) {
                      var i = n.acquireSet(t),
                        o = i.set,
                        a = i.handle;
                      return (
                        this.queryObjectIds(e).then(function(e) {
                          return n.setFeatureIds(o, e);
                        }),
                        a
                      );
                    }
                    if ("number" == typeof e) return this.highlight([e], t);
                    if (e instanceof l) return this.highlight([e], t);
                    if (
                      (e instanceof c && (e = e.toArray()),
                      Array.isArray(e) && e.length > 0)
                    ) {
                      if (e[0] instanceof l) {
                        var s = e.map(function(e) {
                            return N.attributeLookup(
                              e.attributes,
                              r._getObjectIdField()
                            );
                          }),
                          u = n.acquireSet(t),
                          d = u.set;
                        a = u.handle;
                        return n.setFeatureIds(d, s), a;
                      }
                      if ("number" == typeof e[0]) {
                        s = e;
                        var h = n.acquireSet(t);
                        (d = h.set), (a = h.handle);
                        return n.setFeatureIds(d, s), a;
                      }
                    }
                    return { remove: function() {} };
                  }),
                  (f.prototype.visibleGeometryChanged = function(e) {
                    var t = this;
                    e
                      ? this._elevationProvider.objectChanged(e)
                      : this._elevationProvider.layerChanged(),
                      null == this._visibleGeometryChangedSchedulerHandle &&
                        (this._visibleGeometryChangedSchedulerHandle = g.schedule(
                          function() {
                            t.emit("visible-geometry-changed"),
                              (t._visibleGeometryChangedSchedulerHandle = null);
                          }
                        ));
                  }),
                  n([_.property()], f.prototype, "layer", void 0),
                  n([_.property()], f.prototype, "_controller", void 0),
                  n(
                    [_.property({ dependsOn: ["_controller.updating"] })],
                    f.prototype,
                    "updating",
                    void 0
                  ),
                  n(
                    [_.property(P.updatingPercentage)],
                    f.prototype,
                    "updatingPercentage",
                    void 0
                  ),
                  n(
                    [
                      _.property({
                        readOnly: !0,
                        aliasOf: "_controller.updatingPercentage"
                      })
                    ],
                    f.prototype,
                    "updatingPercentageValue",
                    void 0
                  ),
                  n(
                    [_.property({ readOnly: !0 })],
                    f.prototype,
                    "hasTexturesOrVertexColors",
                    null
                  ),
                  n(
                    [
                      _.property({
                        readOnly: !0,
                        dependsOn: ["layer.renderer"]
                      })
                    ],
                    f.prototype,
                    "rendererNeedsTextures",
                    null
                  ),
                  n(
                    [
                      _.property({
                        readOnly: !0,
                        dependsOn: ["layer.elevationInfo"]
                      })
                    ],
                    f.prototype,
                    "elevationOffset",
                    null
                  ),
                  n(
                    [_.property()],
                    f.prototype,
                    "alwaysLoadEverythingModeEnabled",
                    void 0
                  ),
                  n(
                    [
                      _.property({
                        dependsOn: [
                          "view.qualitySettings.sceneService.uncompressedTextureDownsamplingEnabled",
                          "_useCompressedTextures"
                        ]
                      })
                    ],
                    f.prototype,
                    "uncompressedTextureDownsamplingEnabled",
                    null
                  ),
                  n(
                    [_.property({ dependsOn: ["layer.version"] })],
                    f.prototype,
                    "_useCompressedTextures",
                    null
                  ),
                  n([_.subclass("esri.views.3d.layers.SceneLayerView3D")], f)
                );
              })(_.declared(O)),
              oe = L.vec3d.create(),
              ae = b.create(),
              se = b.create(),
              le = [0, 0, 0, 0],
              ue = { symbol: null };
            return ie;
          }.apply(null, n)) || (e.exports = i);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/SceneLayerView3D": 806,
      "esri/views/3d/layers/SceneLayerWorker": 1965,
      "esri/views/3d/webgl-engine/lib/HighlightSet": 2047,
      "esri/views/3d/layers/support/attributeUtils": 2067,
      "esri/views/3d/layers/i3s/I3SGeometryUtil": 2087,
      "esri/views/3d/layers/i3s/I3SProjectionUtil": 2088,
      "esri/views/3d/layers/i3s/I3SQueryEngine": 2097,
      "esri/views/3d/layers/i3s/Highlights": 2178,
      "esri/views/3d/layers/i3s/I3SElevationProvider": 2179,
      "esri/views/3d/layers/i3s/IDBCache": 2180
    });
  })();
