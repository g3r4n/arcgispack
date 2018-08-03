(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    2006: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(3),
        r(53),
        r(17),
        r(308),
        r(11),
        r(180),
        r(9),
        r(1)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, a, o, c, u, s, l, d) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handles = new o()),
                  (t.layer = null),
                  (t.parent = null),
                  (t.view = null),
                  t
                );
              }
              return (
                r(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(t) {
                      if ("layerview:create-error" !== t.name) {
                        var r = (e.layer && e.layer.id) || "no id",
                          n = (e.layer && e.layer.title) || "no title";
                        return (
                          u
                            .getLogger(e.declaredClass)
                            .error(
                              "#resolve()",
                              "Failed to resolve layer view (layer title: '" +
                                n +
                                "', id: '" +
                                r +
                                "')",
                              t
                            ),
                          l.reject(t)
                        );
                      }
                    });
                }),
                (t.prototype.destroy = function() {
                  this.layer = this.view = this.parent = null;
                }),
                Object.defineProperty(t.prototype, "suspended", {
                  get: function() {
                    return !this.canResume();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return !this.suspended && this.isUpdating();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "visible", {
                  get: function() {
                    return !0 === this.get("layer.visible");
                  },
                  set: function(e) {
                    void 0 !== e
                      ? this._override("visible", e)
                      : this._clearOverride("visible");
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "fullOpacity", {
                  get: function() {
                    var e = function(e) {
                      return null != e ? e : 1;
                    };
                    return (
                      e(this.get("layer.opacity")) *
                      e(this.get("parent.fullOpacity"))
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.canResume = function() {
                  return (
                    (!this.get("parent.suspended") &&
                      this.get("view.ready") &&
                      this.get("layer.loaded") &&
                      this.visible) ||
                    !1
                  );
                }),
                (t.prototype.isUpdating = function() {
                  return !1;
                }),
                n([d.property()], t.prototype, "layer", void 0),
                n([d.property()], t.prototype, "parent", void 0),
                n(
                  [
                    d.property({
                      readOnly: !0,
                      dependsOn: [
                        "view",
                        "visible",
                        "layer.loaded",
                        "parent.suspended"
                      ]
                    })
                  ],
                  t.prototype,
                  "suspended",
                  null
                ),
                n(
                  [
                    d.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                n([d.property()], t.prototype, "view", void 0),
                n(
                  [d.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                n(
                  [
                    d.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                n([d.subclass("esri.views.layers.LayerView")], t)
              );
            })(d.declared(i, a, c, s));
          }.apply(null, n)) || (e.exports = i);
    },
    2011: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(2), r(0), r(9), r(26), r(1), r(416), r(2006)]),
        void 0 ===
          (i = function(e, t, r, n, i, a, o, c, u) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.supportsHeightUnitConversion = !1), t;
              }
              return (
                r(t, e),
                (t.prototype.postscript = function(e) {
                  this.inherited(arguments),
                    c.mayHaveHeightModelInfo(this.layer) &&
                      this.addResolvingPromise(this._validateHeightModelInfo());
                }),
                (t.prototype._validateHeightModelInfo = function() {
                  var e = this;
                  return i.create(function(t, r) {
                    a.whenFalseOnce(
                      e.view.defaultsFromMap,
                      "isHeightModelInfoSearching",
                      function() {
                        var n = c.rejectLayerError(
                          e.layer,
                          e.view.heightModelInfo,
                          e.supportsHeightUnitConversion
                        );
                        n ? r(n) : t();
                      }
                    );
                  });
                }),
                n([o.property()], t.prototype, "view", void 0),
                n([o.subclass("esri.views.3d.layers.LayerView3D")], t)
              );
            })(o.declared(u));
          }.apply(null, n)) || (e.exports = i);
    },
    2025: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
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
          }.apply(null, n)) || (e.exports = i);
    },
    2029: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(48), r(7), r(2089), r(99)]),
        void 0 ===
          (i = function(e, t, r, n, i, a) {
            function o(e, t, r) {
              return {
                center: n.vec3d.createFrom(e[0], e[1], e[2]),
                halfSize: l.createFrom(t[0], t[1], t[2]),
                quaternion: s.createFrom(r[0], r[1], r[2], r[3])
              };
            }
            function c(e, t) {
              var r = a.plane.distance(t, e.center),
                n = u(e, t);
              return r > n ? 1 : r < -n ? -1 : 0;
            }
            function u(e, t) {
              s.conjugate(e.quaternion, f), s.multiplyVec3(f, t, v);
              var r = e.halfSize;
              return (
                Math.abs(v[0] * r[0]) +
                Math.abs(v[1] * r[1]) +
                Math.abs(v[2] * r[2])
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = n.quat4,
              l = n.vec3,
              d = n.mat3d,
              f = s.create(),
              v = l.create(),
              h = l.create(),
              p = d.create(),
              y = (function() {
                return function(e) {
                  var t = 56 * e;
                  (this.buffer = new ArrayBuffer(t)),
                    (this.obbs = new Array(e));
                  for (var r = 0; r < e; r++)
                    this.obbs[r] = {
                      center: new Float64Array(this.buffer, 56 * r + 0, 3),
                      halfSize: new Float32Array(this.buffer, 56 * r + 24, 3),
                      quaternion: new Float32Array(this.buffer, 56 * r + 36, 4)
                    };
                };
              })();
            (t.ObbArray = y),
              (t.create = o),
              (t.clone = function(e) {
                return o(e.center, e.halfSize, e.quaternion);
              }),
              (t.set = function(e, t) {
                n.vec3d.set(e.center, t.center),
                  n.vec3.set(e.halfSize, t.halfSize),
                  n.quat4.set(e.quaternion, t.quaternion);
              }),
              (t.compute = function(e, t) {
                return (
                  t || (t = o([0, 0, 0], [-1, -1, -1], [0, 0, 0, 1])),
                  i.computeOBB(e, t),
                  t
                );
              }),
              (t.intersectPlane = c),
              (t.toAaBoundingBox = function(e, t) {
                t || (t = r.create());
                var n = s.toMat3(e.quaternion, p),
                  i =
                    e.halfSize[0] * Math.abs(n[0]) +
                    e.halfSize[1] * Math.abs(n[3]) +
                    e.halfSize[2] * Math.abs(n[6]),
                  a =
                    e.halfSize[0] * Math.abs(n[1]) +
                    e.halfSize[1] * Math.abs(n[4]) +
                    e.halfSize[2] * Math.abs(n[7]),
                  o =
                    e.halfSize[0] * Math.abs(n[2]) +
                    e.halfSize[1] * Math.abs(n[5]) +
                    e.halfSize[2] * Math.abs(n[8]);
                return (
                  (t[0] = e.center[0] - i),
                  (t[1] = e.center[1] - a),
                  (t[2] = e.center[2] - o),
                  (t[3] = e.center[0] + i),
                  (t[4] = e.center[1] + a),
                  (t[5] = e.center[2] + o),
                  t
                );
              }),
              (t.minimumDistancePlane = function(e, t) {
                return a.plane.distance(t, e.center) - u(e, t);
              }),
              (t.maximumDistancePlane = function(e, t) {
                return a.plane.distance(t, e.center) + u(e, t);
              }),
              (t.isVisible = function(e, t) {
                return (
                  c(e, t[0]) <= 0 &&
                  c(e, t[1]) <= 0 &&
                  c(e, t[2]) <= 0 &&
                  c(e, t[3]) <= 0 &&
                  c(e, t[4]) <= 0 &&
                  c(e, t[5]) <= 0
                );
              }),
              (t.intersectLine = function(e, t, r, i) {
                void 0 === i && (i = 0),
                  s.conjugate(e.quaternion, f),
                  n.vec3.subtract(t, e.center, v);
                for (
                  var a = s.multiplyVec3(f, v, v),
                    o = s.multiplyVec3(f, r, h),
                    c = -1 / 0,
                    u = 1 / 0,
                    l = 0;
                  l < 3;
                  l++
                )
                  if (Math.abs(o[l]) > 1e-6) {
                    var d = (i + e.halfSize[l] - a[l]) / o[l],
                      p = (-i - e.halfSize[l] - a[l]) / o[l];
                    (c = Math.max(c, Math.min(d, p))),
                      (u = Math.min(u, Math.max(d, p)));
                  } else if (
                    a[l] > e.halfSize[l] + i ||
                    a[l] < -e.halfSize[l] - i
                  )
                    return !1;
                return c <= u;
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2032: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(10), r(4), r(11), r(2058)]),
        void 0 ===
          (i = function(e, t, r, n, i, a) {
            function o(e, t, n) {
              for (var i = "", a = 0; a < n; ) {
                var o = e[t + a];
                if (o < 128) (i += String.fromCharCode(o)), a++;
                else if (o >= 192 && o < 224) {
                  if (a + 1 >= n)
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Two byte character was truncated."
                    );
                  var c = ((31 & o) << 6) | (63 & e[t + a + 1]);
                  (i += String.fromCharCode(c)), (a += 2);
                } else if (o >= 224 && o < 240) {
                  if (a + 2 >= n)
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Multi byte character was truncated."
                    );
                  c =
                    ((15 & o) << 12) |
                    ((63 & e[t + a + 1]) << 6) |
                    (63 & e[t + a + 2]);
                  (i += String.fromCharCode(c)), (a += 3);
                } else {
                  if (!(o >= 240 && o < 248))
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Invalid multi byte sequence."
                    );
                  if (a + 3 >= n)
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Multi byte character was truncated."
                    );
                  if (
                    (c =
                      ((7 & o) << 18) |
                      ((63 & e[t + a + 1]) << 12) |
                      ((63 & e[t + a + 2]) << 6) |
                      (63 & e[t + a + 3])) >= 65536
                  ) {
                    var u = 55296 + ((c - 65536) >> 10),
                      s = 56320 + (1023 & c);
                    i += String.fromCharCode(u, s);
                  } else i += String.fromCharCode(c);
                  a += 4;
                }
              }
              return i;
            }
            function c(e, r) {
              for (
                var n = {
                    byteOffset: 0,
                    byteCount: 0,
                    fields: Object.create(null)
                  },
                  i = 0,
                  a = 0;
                a < r.length;
                a++
              ) {
                var o = r[a],
                  c = o.valueType || o.type,
                  u = t.valueType2ArrayBufferReader[c];
                (n.fields[o.property] = u(e, i)),
                  (i += t.valueType2TypedArrayClassMap[c].BYTES_PER_ELEMENT);
              }
              return (n.byteCount = i), n;
            }
            function u(e, t, n) {
              var i,
                a,
                c = [],
                u = 0;
              for (a = 0; a < e; a += 1) {
                if ((i = t[a]) > 0) {
                  if ((c.push(o(n, u, i - 1)), 0 !== n[u + i - 1]))
                    throw new r(
                      "string-array-error",
                      "Invalid string array: missing null termination."
                    );
                } else c.push(null);
                u += i;
              }
              return c;
            }
            function s(e, r) {
              return new (0, t.valueType2TypedArrayClassMap[r.valueType])(
                e,
                r.byteOffset,
                r.count * r.valuesPerElement
              );
            }
            function l(e, t) {
              return new Uint8Array(e, t.byteOffset, t.byteCount);
            }
            function d(e, t, i) {
              for (
                var a =
                    null != t.header
                      ? c(e, t.header)
                      : { byteOffset: 0, byteCount: 0, fields: { count: i } },
                  o = {
                    header: a,
                    byteOffset: a.byteCount,
                    byteCount: 0,
                    entries: Object.create(null)
                  },
                  u = a.byteCount,
                  s = 0;
                s < t.ordering.length;
                s++
              ) {
                var l = t.ordering[s],
                  d = n.clone(t[l]);
                if (((d.count = a.fields.count), "String" === d.valueType)) {
                  if (
                    ((d.byteOffset = u),
                    (d.byteCount = a.fields[l + "ByteCount"]),
                    "UTF-8" !== d.encoding)
                  )
                    throw new r(
                      "unsupported-encoding",
                      "Unsupported String encoding.",
                      { encoding: d.encoding }
                    );
                } else {
                  if (!v(d.valueType))
                    throw new r(
                      "unsupported-value-type",
                      "Unsupported binary valueType",
                      { valueType: d.valueType }
                    );
                  var f = h(d.valueType);
                  (u += u % f != 0 ? f - (u % f) : 0),
                    (d.byteOffset = u),
                    (d.byteCount = f * d.valuesPerElement * d.count);
                }
                (u += d.byteCount), (o.entries[l] = d);
              }
              return (o.byteCount = u - o.byteOffset), o;
            }
            function f(e, t, n) {
              if (
                (t !== e &&
                  p.error(
                    "Invalid " +
                      n +
                      " buffer size\n expected: " +
                      e +
                      ", actual: " +
                      t +
                      ")"
                  ),
                t < e)
              )
                throw new r("buffer-too-small", "Binary buffer is too small", {
                  expectedSize: e,
                  actualSize: t
                });
            }
            function v(e) {
              return t.valueType2TypedArrayClassMap.hasOwnProperty(e);
            }
            function h(e) {
              return (
                v(e) && t.valueType2TypedArrayClassMap[e].BYTES_PER_ELEMENT
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var p = i.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");
            (t.readHeader = c),
              (t.readStringArray = u),
              (t.createTypedView = s),
              (t.createRawView = l),
              (t.createAttributeDataIndex = d),
              (t.createGeometryDataIndex = function(e, t, r) {
                var i = c(e, t && t.header),
                  a = i.byteCount,
                  o = {
                    header: i,
                    byteOffset: i.byteCount,
                    byteCount: 0,
                    vertexAttributes: n.clone(t.vertexAttributes)
                  },
                  u = o.vertexAttributes;
                r || null == u.region || delete u.region;
                for (
                  var s = i.fields,
                    l = null != s.vertexCount ? s.vertexCount : s.count,
                    d = 0;
                  d < t.ordering.length;
                  d++
                ) {
                  var v = t.ordering[d];
                  null != u[v] &&
                    ((u[v].byteOffset = a),
                    (u[v].count = l),
                    (a += h(u[v].valueType) * u[v].valuesPerElement * l));
                }
                var p = s.faceCount;
                if (t.faces && p) {
                  o.faces = n.clone(t.faces);
                  var y = o.faces;
                  for (d = 0; d < t.ordering.length; d++) {
                    var g = t.ordering[d];
                    null != y[g] &&
                      ((y[g].byteOffset = a),
                      (y[g].count = p),
                      (a += h(y[g].valueType) * y[g].valuesPerElement * p));
                  }
                }
                var b = s.featureCount;
                if (t.featureAttributes && t.featureAttributeOrder && b) {
                  o.featureAttributes = n.clone(t.featureAttributes);
                  var m = o.featureAttributes;
                  for (d = 0; d < t.featureAttributeOrder.length; d++) {
                    var w = t.featureAttributeOrder[d];
                    (m[w].byteOffset = a), (m[w].count = b);
                    var I = h(m[w].valueType);
                    "UInt64" === m[w].valueType && (I = 8),
                      (a += I * m[w].valuesPerElement * b);
                  }
                }
                return (
                  f(a, e.byteLength, "geometry"),
                  (o.byteCount = a - o.byteOffset),
                  o
                );
              }),
              (t.readBinaryAttribute = function(e, t, n) {
                if ("lepcc-rgb" === e.encoding) return a.decodeRGB(t);
                if ("lepcc-intensity" === e.encoding)
                  return a.decodeIntensity(t);
                if (null != e.encoding && "" !== e.encoding)
                  throw new r(
                    "unknown-attribute-storage-info-encoding",
                    "Unknown Attribute Storage Info Encoding"
                  );
                e["attributeByteCounts "] &&
                  !e.attributeByteCounts &&
                  (p.warn("Warning: Trailing space in 'attributeByteCounts '."),
                  (e.attributeByteCounts = e["attributeByteCounts "])),
                  "ObjectIds" === e.ordering[0] &&
                    e.hasOwnProperty("objectIds") &&
                    (p.warn("Warning: Case error in objectIds"),
                    (e.ordering[0] = "objectIds"));
                var i = d(t, e, n);
                f(i.byteOffset + i.byteCount, t.byteLength, "attribute");
                var o = i.entries.attributeValues || i.entries.objectIds;
                if (o) {
                  if ("String" === o.valueType) {
                    var c = i.entries.attributeByteCounts,
                      v = s(t, c),
                      h = l(t, o);
                    return u(c.count, v, h);
                  }
                  return s(t, o);
                }
                throw new r(
                  "bad-attribute-storage-info",
                  "Bad attributeStorageInfo specification."
                );
              }),
              (t.valueType2TypedArrayClassMap = {
                Float32: Float32Array,
                Float64: Float64Array,
                UInt8: Uint8Array,
                Int8: Int8Array,
                UInt16: Uint16Array,
                Int16: Int16Array,
                UInt32: Uint32Array,
                Int32: Int32Array
              }),
              (t.valueType2ArrayBufferReader = {
                Float32: function(e, t) {
                  return new DataView(e, 0).getFloat32(t, !0);
                },
                Float64: function(e, t) {
                  return new DataView(e, 0).getFloat64(t, !0);
                },
                UInt8: function(e, t) {
                  return new DataView(e, 0).getUint8(t);
                },
                Int8: function(e, t) {
                  return new DataView(e, 0).getInt8(t);
                },
                UInt16: function(e, t) {
                  return new DataView(e, 0).getUint16(t, !0);
                },
                Int16: function(e, t) {
                  return new DataView(e, 0).getInt16(t, !0);
                },
                UInt32: function(e, t) {
                  return new DataView(e, 0).getUint32(t, !0);
                },
                Int32: function(e, t) {
                  return new DataView(e, 0).getInt32(t, !0);
                }
              }),
              (t.isValueType = v),
              (t.getBytesPerValue = h);
          }.apply(null, n)) || (e.exports = i);
    },
    2048: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(18),
        r(10),
        r(9),
        r(27),
        r(21),
        r(37),
        r(261),
        r(135),
        r(2032),
        r(41),
        r(820)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, a, o, c, u, s, l, d, f) {
            function v(e) {
              return (
                e && parseInt(e.substring(e.lastIndexOf("/") + 1, e.length), 10)
              );
            }
            function h(e, t) {
              var r,
                n = t[0],
                i = t[1],
                a = t[2],
                o = t[3],
                c = 0;
              n < e[0] && (c += (r = e[0] - n) * r);
              i < e[1] && (c += (r = e[1] - i) * r);
              a < e[2] && (c += (r = e[2] - a) * r);
              n > e[3] && (c += (r = n - e[3]) * r);
              i > e[4] && (c += (r = i - e[4]) * r);
              a > e[5] && (c += (r = a - e[5]) * r);
              if (c > o * o) return 0;
              if (c > 0) return 1;
              var u = 1 / 0;
              return (
                n - e[0] < u && (u = n - e[0]),
                i - e[1] < u && (u = i - e[1]),
                a - e[2] < u && (u = a - e[2]),
                e[3] - n < u && (u = e[3] - n),
                e[4] - i < u && (u = e[4] - i),
                e[5] - a < u && (u = e[5] - a),
                u > o ? 2 : 1
              );
            }
            function p(e, t, r) {
              for (
                var n = [],
                  i = r && r.missingFields,
                  a = r && r.originalFields,
                  o = 0,
                  c = e;
                o < c.length;
                o++
              ) {
                for (
                  var u = c[o], s = u.toLowerCase(), l = !1, d = 0, f = t;
                  d < f.length;
                  d++
                ) {
                  var v = f[d];
                  if (s === v.name.toLowerCase()) {
                    n.push(v.name), (l = !0), a && a.push(u);
                    break;
                  }
                }
                !l && i && i.push(u);
              }
              return n;
            }
            function y(e, t, r) {
              if (null != e.maxRecordCount && t.length > e.maxRecordCount) {
                var a = (function(e, t) {
                  for (
                    var r = e.length, n = Math.ceil(r / t), i = [], a = 0;
                    a < n;
                    a++
                  ) {
                    var o = Math.floor((r * a) / n),
                      c = Math.floor((r * (a + 1)) / n);
                    i.push(e.slice(o, c));
                  }
                  return i;
                })(t, e.maxRecordCount);
                return i
                  .all(
                    a.map(function(t) {
                      return y(e, t, r);
                    })
                  )
                  .then(m);
              }
              var o = new s({
                objectIds: t,
                outFields: r,
                orderByFields: [e.objectIdField]
              });
              return new u(e.parsedUrl.path).execute(o).then(function(e) {
                return e && e.features && e.features.length === t.length
                  ? e.features.map(function(e) {
                      return e.attributes;
                    })
                  : i.reject(
                      new n(
                        "scenelayer:feature-not-in-associated-layer",
                        "Feature not found in associated feature layer"
                      )
                    );
              });
            }
            function g(e, t, o, c, u) {
              for (var s = [], d = 0; d < t.attributeData.length; d++) {
                var f = t.attributeData[d],
                  v = e[d];
                if (v && -1 !== c.indexOf(v.name)) {
                  var h = a.makeAbsolute(f.href, t.baseUrl);
                  s.push({ url: h, storageInfo: v });
                }
              }
              return i
                .eachAlways(
                  s.map(function(e) {
                    return r(e.url, { responseType: "array-buffer" }).then(
                      function(t) {
                        return l.readBinaryAttribute(e.storageInfo, t.data);
                      }
                    );
                  })
                )
                .then(function(e) {
                  var t = [];
                  if (
                    !u.ignoreUnavailableFields &&
                    e.some(function(e) {
                      return null == e.value;
                    })
                  ) {
                    for (var r = [], a = 0; a < e.length; a++)
                      null == e[a].value &&
                        r.push({
                          name: s[a].storageInfo.name,
                          error: e[a].error
                        });
                    return i.reject(
                      new n(
                        "scenelayer:attribute-request-failed",
                        "Request for scene layer attributes failed",
                        { failedAttributes: r }
                      )
                    );
                  }
                  for (var c = 0, l = o; c < l.length; c++) {
                    var d = l[c],
                      f = {};
                    for (a = 0; a < e.length; a++)
                      null != e[a].value &&
                        (f[s[a].storageInfo.name] = b(e[a].value, d));
                    t.push(f);
                  }
                  return t;
                });
            }
            function b(e, t) {
              var r = e[t];
              return e instanceof Int16Array
                ? r === A
                  ? null
                  : r
                : e instanceof Int32Array
                  ? r === S
                    ? null
                    : r
                  : r != r
                    ? null
                    : r;
            }
            function m(e) {
              for (var t = [], r = 0, n = e; r < n.length; r++) {
                var i = n[r];
                t = t.concat(i);
              }
              return t;
            }
            function w(e) {
              var t = new o(v(e.store.indexCRS || e.store.geographicCRS));
              return t.equals(e.spatialReference) ? e.spatialReference : t;
            }
            function I(e) {
              var t = new o(v(e.store.vertexCRS || e.store.projectedCRS));
              return t.equals(e.spatialReference) ? e.spatialReference : t;
            }
            function C(e, t, r) {
              if (!c.canProject(e, t))
                throw new n(
                  "layerview:spatial-reference-incompatible",
                  "The spatial reference of this scene layer is incompatible with the spatial reference of the view",
                  {}
                );
              if ("local" === r && e.isGeographic)
                throw new n(
                  "layerview:local-gcs-not-supported",
                  "Geographic coordinate systems are not supported in local scenes",
                  {}
                );
            }
            function M(e, t, r) {
              var n = w(e),
                i = I(e);
              C(n, t, r), C(i, t, r);
            }
            function x(e) {
              return "mesh-3d" === e.type;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.DDS_ENCODING_STRING = "image/vnd-ms.dds"),
              (t.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS = [
                "image/jpeg",
                "image/png"
              ]),
              (t.extractWkid = v),
              (t.getAppropriateTextureEncoding = function(e, r) {
                if (Array.isArray(e)) {
                  if (r) {
                    var n = e.indexOf(t.DDS_ENCODING_STRING);
                    if (n > -1) return n;
                  }
                  for (var i = 0; i < e.length; i++)
                    if (
                      t.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(e[i]) >
                      -1
                    )
                      return i;
                  throw new Error(
                    "Could not find appropriate texture encoding (among " +
                      e.toString() +
                      ")"
                  );
                }
                return -1;
              }),
              (t.findIntersectingNodes = function e(t, r, n, i, a, o) {
                if (null != n) {
                  var c = n.mbs;
                  if (
                    (r !== i && ((c = P), d.mbsToMbs(n.mbs, i, c, r)),
                    0 !== h(t, c) && (o(n), n.children))
                  )
                    for (var u = 0; u < n.children.length; ++u)
                      e(t, r, a[n.children[u].id], i, a, o);
                }
              }),
              (t.buildTopNodeMap = function(e, t, r, n) {
                if ((void 0 === n && (n = Number.POSITIVE_INFINITY), t <= 0))
                  e.clear();
                else {
                  var i = new Map(),
                    a = Number.POSITIVE_INFINITY;
                  e.forEach(function(o, c) {
                    var u = r(o);
                    if (c < t) return (a = Math.min(a, u)), void i.set(o.id, u);
                    if (!(u <= a || u >= n)) {
                      i.set(o.id, u);
                      for (
                        var s = (a = i.get(e.front().id)), l = 0, d = 1;
                        d < t;
                        ++d
                      ) {
                        var f = e.data[d],
                          v = i.get(f.id);
                        v < a && ((l = d), (s = a), (a = v));
                      }
                      (e.data[l] = o), (a = s);
                    }
                  }),
                    (e.length = Math.min(e.length, t)),
                    e.sort(function(e, t) {
                      return i.get(t.id) - i.get(e.id);
                    });
                }
              });
            var P = [0, 0, 0, 0];
            (t.intersectBoundingBoxWithMbs = h),
              (t.findFieldsCaseInsensitive = p),
              (t.whenGraphicAttributes = function(e, t, r, a, o, c) {
                var u = !0 === (c && c.populateObjectId),
                  s = c.ignoreUnavailableFields ? void 0 : [],
                  l = 1 === a.length && "*" === a[0];
                !l &&
                  u &&
                  (a = (function(e, t) {
                    return e
                      .filter(function(e) {
                        return e.toLowerCase() !== t.toLowerCase();
                      })
                      .concat([t]);
                  })(a, r));
                var d = l ? a : p(a, e.fields, { missingFields: s });
                if (s && 0 !== s.length)
                  return i.reject(
                    new n(
                      "scenelayer:unknown-fields",
                      "This scene layer does not have the requested fields",
                      { unknownFields: s }
                    )
                  );
                if (0 === t.length) return i.resolve(t);
                var f = e.associatedLayer,
                  v = e.attributeStorageInfo,
                  h = l
                    ? e.fields.map(function(e) {
                        return e.name;
                      })
                    : d;
                if (f)
                  return (function(e, t, r, n) {
                    t.sort(function(e, t) {
                      return e.attributes[r] - t.attributes[r];
                    });
                    var i = t.map(function(e) {
                        return e.attributes[r];
                      }),
                      a = [],
                      o = p(n, e.fields, { originalFields: a });
                    return y(e, i, o).then(function(e) {
                      for (var r = 0; r < t.length; r++) {
                        var n = t[r],
                          i = e[r];
                        n.attributes = {};
                        for (var c = 0; c < a.length; c++)
                          n.attributes[a[c]] = i[o[c]];
                      }
                      return t;
                    });
                  })(f, t, r, h);
                var b = (function(e, t) {
                  for (var r = [], n = 0, i = e; n < i.length; n++) {
                    var a = i[n];
                    a in t.attributes || r.push(a);
                  }
                  return r;
                })(h, t[0]);
                if (0 === b.length) return i.resolve(t);
                if (v) {
                  var m = o();
                  return null == m
                    ? i.reject(
                        new n(
                          "scenelayer:feature-not-loaded",
                          "Tried to query attributes for unloaded features"
                        )
                      )
                    : g(v, m.node, m.indices, b, c).then(function(e) {
                        for (var r = 0; r < t.length; r++) {
                          for (var n = 0, i = h; n < i.length; n++) {
                            var a = i[n];
                            a in e[r] || (e[r][a] = t[r].attributes[a]);
                          }
                          t[r].attributes = e[r];
                        }
                        return t;
                      });
                }
                return i.reject(
                  new n(
                    "scenelayer:no-attribute-source",
                    "This scene layer does not have a source for attributes available"
                  )
                );
              });
            var A = -Math.pow(2, 15),
              S = -Math.pow(2, 31);
            (t.getCachedAttributeValue = b),
              (t.convertFlatRangesToOffsets = function(e, t, r) {
                void 0 === r && (r = 2);
                for (
                  var i = null != t ? t : e.length / r,
                    a = new Uint32Array(i + 1),
                    o = 0;
                  o < i;
                  o++
                ) {
                  var c = e[o * r],
                    u = 3 * c;
                  a[o] = u;
                  var s = (o - 1) * r + 1;
                  if (s >= 0 && c - 1 !== e[s])
                    throw new n("Face ranges are not continuous");
                }
                var l = 3 * (e[(i - 1) * r + 1] + 1);
                return (a[a.length - 1] = l), a;
              }),
              (t.getIndexCrs = w),
              (t.getVertexCrs = I),
              (t.getCacheKeySuffix = function(e, t) {
                return t === d.SphericalECEFSpatialReference
                  ? "@ECEF"
                  : e.equals(t)
                    ? ""
                    : null != t.wkid
                      ? "@" + t.wkid
                      : null;
              }),
              (t.checkSpatialReference = C),
              (t.checkSpatialReferences = M),
              (t.checkSceneLayerValid = function(e) {
                if (
                  null == e.store ||
                  null == e.store.defaultGeometrySchema ||
                  !(function(e) {
                    return !(
                      (null != e.geometryType &&
                        "triangles" !== e.geometryType) ||
                      (null != e.topology &&
                        "PerAttributeArray" !== e.topology) ||
                      null == e.vertexAttributes ||
                      null == e.vertexAttributes.position
                    );
                  })(e.store.defaultGeometrySchema)
                )
                  throw new n(
                    "scenelayer:unsupported-geometry-schema",
                    "The geometry schema of this scene layer is not supported.",
                    {}
                  );
              }),
              (t.checkSceneLayerCompatibleWithView = function(e, t) {
                M(e, t.spatialReference, t.viewingMode);
              }),
              (t.checkPointCloudLayerValid = function(e) {
                if (
                  null == e.store ||
                  null == e.store.defaultGeometrySchema ||
                  !(function(e) {
                    return !(
                      null == e.geometryType ||
                      "points" !== e.geometryType ||
                      (null != e.topology &&
                        "PerAttributeArray" !== e.topology) ||
                      (null != e.encoding &&
                        "" !== e.encoding &&
                        "lepcc-xyz" !== e.encoding) ||
                      null == e.vertexAttributes ||
                      null == e.vertexAttributes.position
                    );
                  })(e.store.defaultGeometrySchema)
                )
                  throw new n(
                    "pointcloud:unsupported-geometry-schema",
                    "The geometry schema of this point cloud scene layer is not supported.",
                    {}
                  );
              }),
              (t.checkPointCloudLayerCompatibleWithView = function(e, t) {
                C(e.spatialReference, t.spatialReference, t.viewingMode);
              }),
              (t.encodeSymbolColor = f.encodeSymbolColor),
              (t.rendererNeedsTextures = function(e) {
                if (
                  null == e ||
                  !(function(e) {
                    return (
                      "simple" === e.type ||
                      "class-breaks" === e.type ||
                      "unique-value" === e.type
                    );
                  })(e)
                )
                  return !0;
                if (
                  ("unique-value" === e.type || "class-breaks" === e.type) &&
                  null == e.defaultSymbol
                )
                  return !0;
                var t = e.getSymbols();
                if (0 === t.length) return !0;
                for (var r = 0, n = t; r < n.length; r++) {
                  var i = n[r];
                  if (!x(i) || 0 === i.symbolLayers.length) return !0;
                  for (var a = 0, o = i.symbolLayers.items; a < o.length; a++) {
                    var c = o[a];
                    if (
                      "fill" !== c.type ||
                      null == c.material ||
                      "replace" !== c.material.colorMixMode
                    )
                      return !0;
                  }
                }
                return !1;
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2058: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(10)]),
        void 0 ===
          (i = function(e, t, r) {
            function n(e, t, r) {
              return {
                identifier: String.fromCharCode.apply(
                  null,
                  new Uint8Array(e, r + l.identifierOffset, l.identifierLength)
                ),
                version: t.getUint16(r + l.versionOffset, s),
                checksum: t.getUint32(r + l.checksumOffset, s)
              };
            }
            function i(e, t) {
              return {
                sizeLo: e.getUint32(t + d.sizeLo, s),
                sizeHi: e.getUint32(t + d.sizeHi, s),
                minX: e.getFloat64(t + d.minX, s),
                minY: e.getFloat64(t + d.minY, s),
                minZ: e.getFloat64(t + d.minZ, s),
                maxX: e.getFloat64(t + d.maxX, s),
                maxY: e.getFloat64(t + d.maxY, s),
                maxZ: e.getFloat64(t + d.maxZ, s),
                errorX: e.getFloat64(t + d.errorX, s),
                errorY: e.getFloat64(t + d.errorY, s),
                errorZ: e.getFloat64(t + d.errorZ, s),
                count: e.getUint32(t + d.count, s),
                reserved: e.getUint32(t + d.reserved, s)
              };
            }
            function a(e, t, r) {
              var n = [];
              t = o(e, t, n);
              for (var i = [], a = 0; a < n.length; a++) {
                (i.length = 0), (t = o(e, t, i));
                for (var c = 0; c < i.length; c++) r.push(i[c] + n[a]);
              }
              return t;
            }
            function o(e, t, n) {
              var i = new DataView(e, t),
                a = i.getUint8(0),
                o = 31 & a,
                c = !!(32 & a),
                u = (192 & a) >> 6,
                l = 0;
              if (0 === u) (l = i.getUint32(1, s)), (t += 5);
              else if (1 === u) (l = i.getUint16(1, s)), (t += 3);
              else {
                if (2 !== u)
                  throw new r("lepcc-decode-error", "Bad count type");
                (l = i.getUint8(1)), (t += 2);
              }
              if (c) throw new r("lepcc-decode-error", "LUT not implemented");
              for (
                var d = Math.ceil((l * o) / 8),
                  f = new Uint8Array(e, t, d),
                  v = 0,
                  h = 0,
                  p = 0,
                  y = -1 >>> (32 - o),
                  g = 0;
                g < l;
                g++
              ) {
                for (; h < o; ) (v |= f[p] << h), (h += 8), (p += 1);
                (n[g] = v & y),
                  (v >>>= o),
                  (h -= o) + o > 32 && (v |= f[p - 1] >> (8 - h));
              }
              return t + p;
            }
            function c(e, t) {
              return {
                sizeLo: e.getUint32(t + f.sizeLo, s),
                sizeHi: e.getUint32(t + f.sizeHi, s),
                count: e.getUint32(t + f.count, s),
                colorMapCount: e.getUint16(t + f.colorMapCount, s),
                lookupMethod: e.getUint8(t + f.lookupMethod),
                compressionMethod: e.getUint8(t + f.compressionMethod)
              };
            }
            function u(e, t) {
              return {
                sizeLo: e.getUint32(t + v.sizeLo, s),
                sizeHi: e.getUint32(t + v.sizeHi, s),
                count: e.getUint32(t + v.count, s),
                scaleFactor: e.getUint16(t + v.scaleFactor, s),
                bitsPerPoint: e.getUint8(t + v.bitsPerPoint),
                reserved: e.getUint8(t + v.reserved)
              };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = !0,
              l = {
                identifierOffset: 0,
                identifierLength: 10,
                versionOffset: 10,
                checksumOffset: 12,
                byteCount: 16
              },
              d = {
                sizeLo: 0,
                sizeHi: 4,
                minX: 8,
                minY: 16,
                minZ: 24,
                maxX: 32,
                maxY: 40,
                maxZ: 48,
                errorX: 56,
                errorY: 64,
                errorZ: 72,
                count: 80,
                reserved: 84,
                byteCount: 88
              };
            t.decodeXYZ = function(e) {
              var t = new DataView(e, 0),
                o = 0,
                c = n(e, t, o),
                u = c.identifier,
                s = c.version;
              if (((o += l.byteCount), "LEPCC     " !== u))
                throw new r("lepcc-decode-error", "Bad identifier");
              if (s > 1) throw new r("lepcc-decode-error", "Unknown version");
              var f = i(t, o);
              if (
                ((o += d.byteCount),
                f.sizeHi * Math.pow(2, 32) + f.sizeLo !== e.byteLength)
              )
                throw new r("lepcc-decode-error", "Bad size");
              var v = new Float64Array(3 * f.count),
                h = [],
                p = [],
                y = [],
                g = [];
              if (
                (o = a(
                  e,
                  (o = a(e, (o = a(e, (o = a(e, o, h)), p)), y)),
                  g
                )) !== e.byteLength
              )
                throw new r("lepcc-decode-error", "Bad length");
              for (var b = 0, m = 0, w = 0; w < h.length; w++) {
                m += h[w];
                for (var I = 0, C = 0; C < p[w]; C++) {
                  I += y[b];
                  var M = g[b];
                  (v[3 * b] = Math.min(f.maxX, f.minX + 2 * f.errorX * I)),
                    (v[3 * b + 1] = Math.min(
                      f.maxY,
                      f.minY + 2 * f.errorY * m
                    )),
                    (v[3 * b + 2] = Math.min(
                      f.maxZ,
                      f.minZ + 2 * f.errorZ * M
                    )),
                    b++;
                }
              }
              return {
                errorX: f.errorX,
                errorY: f.errorY,
                errorZ: f.errorZ,
                result: v
              };
            };
            var f = {
              sizeLo: 0,
              sizeHi: 4,
              count: 8,
              colorMapCount: 12,
              lookupMethod: 14,
              compressionMethod: 15,
              byteCount: 16
            };
            t.decodeRGB = function(e) {
              var t = new DataView(e, 0),
                i = 0,
                a = n(e, t, i),
                o = a.identifier,
                u = a.version;
              if (((i += l.byteCount), "ClusterRGB" !== o))
                throw new r("lepcc-decode-error", "Bad identifier");
              if (u > 1) throw new r("lepcc-decode-error", "Unknown version");
              var s = c(t, i);
              if (
                ((i += f.byteCount),
                s.sizeHi * Math.pow(2, 32) + s.sizeLo !== e.byteLength)
              )
                throw new r("lepcc-decode-error", "Bad size");
              if (
                (2 !== s.lookupMethod && 1 !== s.lookupMethod) ||
                0 !== s.compressionMethod
              ) {
                if (0 === s.lookupMethod && 0 === s.compressionMethod) {
                  if (3 * s.count + i !== e.byteLength || 0 !== s.colorMapCount)
                    throw new r("lepcc-decode-error", "Bad count");
                  return new Uint8Array(e, i).slice();
                }
                if (s.lookupMethod <= 2 && 1 === s.compressionMethod) {
                  if (i + 3 !== e.byteLength || 1 !== s.colorMapCount)
                    throw new r("lepcc-decode-error", "Bad count");
                  for (
                    var d = t.getUint8(i),
                      v = t.getUint8(i + 1),
                      h = t.getUint8(i + 2),
                      p = new Uint8Array(3 * s.count),
                      y = 0;
                    y < s.count;
                    y++
                  )
                    (p[3 * y] = d), (p[3 * y + 1] = v), (p[3 * y + 2] = h);
                  return p;
                }
                throw new r(
                  "lepcc-decode-error",
                  "Bad method " + s.lookupMethod + "," + s.compressionMethod
                );
              }
              if (
                3 * s.colorMapCount + s.count + i !== e.byteLength ||
                s.colorMapCount > 256
              )
                throw new r("lepcc-decode-error", "Bad count");
              var g = new Uint8Array(e, i, 3 * s.colorMapCount),
                b = new Uint8Array(e, i + 3 * s.colorMapCount, s.count);
              for (p = new Uint8Array(3 * s.count), y = 0; y < s.count; y++) {
                var m = b[y];
                (p[3 * y] = g[3 * m]),
                  (p[3 * y + 1] = g[3 * m + 1]),
                  (p[3 * y + 2] = g[3 * m + 2]);
              }
              return p;
            };
            var v = {
              sizeLo: 0,
              sizeHi: 4,
              count: 8,
              scaleFactor: 12,
              bitsPerPoint: 14,
              reserved: 15,
              byteCount: 16
            };
            t.decodeIntensity = function(e) {
              var t = new DataView(e, 0),
                i = 0,
                a = n(e, t, i),
                c = a.identifier,
                s = a.version;
              if (((i += l.byteCount), "Intensity " !== c))
                throw new r("lepcc-decode-error", "Bad identifier");
              if (s > 1) throw new r("lepcc-decode-error", "Unknown version");
              var d = u(t, i);
              if (
                ((i += v.byteCount),
                d.sizeHi * Math.pow(2, 32) + d.sizeLo !== e.byteLength)
              )
                throw new r("lepcc-decode-error", "Bad size");
              var f = new Uint16Array(d.count);
              if (8 === d.bitsPerPoint) {
                if (d.count + i !== e.byteLength)
                  throw new r("lepcc-decode-error", "Bad size");
                for (
                  var h = new Uint8Array(e, i, d.count), p = 0;
                  p < d.count;
                  p++
                )
                  f[p] = h[p] * d.scaleFactor;
              } else if (16 === d.bitsPerPoint) {
                if (2 * d.count + i !== e.byteLength)
                  throw new r("lepcc-decode-error", "Bad size");
                for (
                  h = new Uint16Array(e, i, d.count), p = 0;
                  p < d.count;
                  p++
                )
                  f[p] = h[p] * d.scaleFactor;
              } else {
                if (o(e, i, (h = [])) !== e.byteLength)
                  throw new r("lepcc-decode-error", "Bad size");
                for (p = 0; p < d.count; p++) f[p] = h[p] * d.scaleFactor;
              }
              return f;
            };
          }.apply(null, n)) || (e.exports = i);
    },
    2089: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(7)]),
        void 0 ===
          (i = function(e, t, r) {
            function n(e, t, n, i, a, c, u, s, l, d, f) {
              return (
                (function(e, t, n) {
                  for (
                    var i = r.vec3d.dist2(e.maxVert[0], e.minVert[0]),
                      a = 0,
                      o = 1;
                    o < 7;
                    ++o
                  ) {
                    var c = r.vec3d.dist2(e.maxVert[o], e.minVert[o]);
                    c > i && ((i = c), (a = o));
                  }
                  r.vec3d.set(e.minVert[a], t), r.vec3d.set(e.maxVert[a], n);
                })(e, i, a),
                r.vec3d.dist2(i, a) < v
                  ? 1
                  : (r.vec3d.subtract(i, a, u),
                    r.vec3d.normalize(u),
                    (function(e, t, n, i) {
                      for (
                        var a = e.data,
                          o = e.offsetIdx,
                          c = e.strideIdx,
                          u = Number.NEGATIVE_INFINITY,
                          s = 0,
                          l = o;
                        l < a.length;
                        l += c
                      ) {
                        r.vec3d.set3(
                          a[l] - t[0],
                          a[l + 1] - t[1],
                          a[l + 2] - t[2],
                          x
                        );
                        var d = n[0] * x[0] + n[1] * x[1] + n[2] * x[2],
                          f = r.vec3d.length2(n),
                          v = r.vec3d.length2(x) - (d * d) / f;
                        v > u && ((u = v), (s = l));
                      }
                      return r.vec3d.set3(a[s], a[s + 1], a[s + 2], i), u;
                    })(t, i, u, c) < v
                      ? 2
                      : (r.vec3d.subtract(a, c, s),
                        r.vec3d.normalize(s),
                        r.vec3d.subtract(c, i, l),
                        r.vec3d.normalize(l),
                        r.vec3d.cross(s, u, n),
                        r.vec3d.normalize(n),
                        o(t, n, u, s, l, d),
                        0))
              );
            }
            function i(e, t, n, i, c, u, s, l, d, f) {
              a(e, t, n, i, c, y, g),
                void 0 !== y[0] &&
                  (r.vec3d.subtract(y, n, b),
                  r.vec3d.normalize(b),
                  r.vec3d.subtract(y, i, m),
                  r.vec3d.normalize(m),
                  r.vec3d.subtract(y, c, w),
                  r.vec3d.normalize(w),
                  r.vec3d.cross(m, u, I),
                  r.vec3d.normalize(I),
                  r.vec3d.cross(w, s, C),
                  r.vec3d.normalize(C),
                  r.vec3d.cross(b, l, M),
                  r.vec3d.normalize(M),
                  o(e, I, u, m, b, d),
                  o(e, C, s, w, m, d),
                  o(e, M, l, b, w, d)),
                void 0 !== g[0] &&
                  (r.vec3d.subtract(g, n, b),
                  r.vec3d.normalize(b),
                  r.vec3d.subtract(g, i, m),
                  r.vec3d.normalize(m),
                  r.vec3d.subtract(g, c, w),
                  r.vec3d.normalize(w),
                  r.vec3d.cross(m, u, I),
                  r.vec3d.normalize(I),
                  r.vec3d.cross(w, s, C),
                  r.vec3d.normalize(C),
                  r.vec3d.cross(b, l, M),
                  r.vec3d.normalize(M),
                  o(e, I, u, m, b, d),
                  o(e, C, s, w, m, d),
                  o(e, M, l, b, w, d));
            }
            function a(e, t, n, i, a, o, c) {
              !(function(e, t, n, i, a) {
                var o = e.data,
                  c = e.offsetIdx,
                  u = e.strideIdx;
                r.vec3d.set3(o[c], o[c + 1], o[c + 2], i),
                  r.vec3d.set(i, a),
                  (n[0] = r.vec3d.dot(U, t)),
                  (n[1] = n[0]);
                for (var s = c + u; s < o.length; s += u) {
                  r.vec3d.set3(o[s], o[s + 1], o[s + 2], U);
                  var l = r.vec3d.dot(U, t);
                  l < n[0] && ((n[0] = l), r.vec3d.set(U, i)),
                    l > n[1] && ((n[1] = l), r.vec3d.set(U, a));
                }
              })(e, t, P, c, o);
              var u = r.vec3.dot(n, t);
              P[1] - v <= u && (o[0] = void 0),
                P[0] + v >= u && (c[0] = void 0);
            }
            function o(e, t, n, i, a, o) {
              if (!(r.vec3d.length2(t) < v)) {
                r.vec3d.cross(n, t, A),
                  r.vec3d.cross(i, t, S),
                  r.vec3d.cross(a, t, j),
                  c(e, t, P),
                  (T[1] = P[0]),
                  (z[1] = P[1]),
                  (O[1] = z[1] - T[1]);
                for (var u = [n, i, a], s = [A, S, j], l = 0; l < 3; ++l) {
                  c(e, u[l], P),
                    (T[0] = P[0]),
                    (z[0] = P[1]),
                    c(e, s[l], P),
                    (T[2] = P[0]),
                    (z[2] = P[1]),
                    (O[0] = z[0] - T[0]),
                    (O[2] = z[2] - T[2]);
                  var d = f(O);
                  d < o.quality &&
                    (r.vec3d.set(u[l], o.b0),
                    r.vec3d.set(t, o.b1),
                    r.vec3d.set(s[l], o.b2),
                    (o.quality = d));
                }
              }
            }
            function c(e, t, r) {
              var n = e.data,
                i = e.offsetIdx,
                a = e.strideIdx;
              (r[0] = Number.POSITIVE_INFINITY),
                (r[1] = Number.NEGATIVE_INFINITY);
              for (var o = i; o < n.length; o += a) {
                var c = n[o] * t[0] + n[o + 1] * t[1] + n[o + 2] * t[2];
                (r[0] = Math.min(r[0], c)), (r[1] = Math.max(r[1], c));
              }
            }
            function u(e, t, n) {
              r.vec3d.set(e, n.center),
                r.vec3d.scale(t, 0.5, n.halfSize),
                r.quat4.identity(n.quaternion);
            }
            function s(e, t, n) {
              r.vec3d.set(t, F),
                Math.abs(t[0]) > Math.abs(t[1]) &&
                Math.abs(t[0]) > Math.abs(t[2])
                  ? (F[0] = 0)
                  : Math.abs(t[1]) > Math.abs(t[2])
                    ? (F[1] = 0)
                    : (F[2] = 0),
                r.vec3d.length2(F) < v && (F[0] = F[1] = F[2] = 1),
                r.vec3d.cross(t, F, V),
                r.vec3d.normalize(V),
                r.vec3d.cross(t, V, B),
                r.vec3d.normalize(B),
                l(e, t, V, B, L, E),
                r.vec3d.subtract(E, L, R),
                d(t, V, B, L, E, R, n);
            }
            function l(e, t, r, n, i, a) {
              c(e, t, P),
                (i[0] = P[0]),
                (a[0] = P[1]),
                c(e, r, P),
                (i[1] = P[0]),
                (a[1] = P[1]),
                c(e, n, P),
                (i[2] = P[0]),
                (a[2] = P[1]);
            }
            function d(e, t, n, i, a, o, c) {
              (_[0] = e[0]),
                (_[3] = e[1]),
                (_[6] = e[2]),
                (_[1] = t[0]),
                (_[4] = t[1]),
                (_[7] = t[2]),
                (_[2] = n[0]),
                (_[5] = n[1]),
                (_[8] = n[2]),
                r.quat4.fromRotationMatrix(_, c.quaternion),
                r.vec3d.add(i, a, k),
                r.vec3d.scale(k, 0.5),
                r.vec3d.scale(e, k[0], c.center),
                r.vec3d.scale(t, k[1], N),
                r.vec3d.add(c.center, N),
                r.vec3d.scale(n, k[2], N),
                r.vec3d.add(c.center, N),
                r.vec3d.scale(o, 0.5, c.halfSize);
            }
            function f(e) {
              return e[0] * e[1] + e[0] * e[2] + e[1] * e[2];
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var v = 1e-6,
              h = r.vec3d.create(),
              p = r.vec3d.create();
            t.computeOBB = function(e, t) {
              var a = e.data,
                o = e.strideIdx,
                c = a.length / o;
              if (!(c <= 0)) {
                var v = new D(e);
                r.vec3d.add(v.minProj, v.maxProj, h),
                  r.vec3d.scale(h, 0.5),
                  r.vec3d.subtract(v.maxProj, v.minProj, p);
                var y = f(p),
                  g = new q();
                (g.quality = y),
                  c < 14 &&
                    (e = {
                      data: new Float64Array(v.buffer, 112, 42),
                      size: 3,
                      offsetIdx: 0,
                      strideIdx: 3
                    });
                var b = r.vec3d.create(),
                  m = r.vec3d.create(),
                  w = r.vec3d.create(),
                  I = r.vec3d.create(),
                  C = r.vec3d.create(),
                  M = r.vec3d.create(),
                  x = r.vec3d.create();
                switch (n(v, e, x, b, m, w, I, C, M, g)) {
                  case 1:
                    return void u(h, p, t);
                  case 2:
                    return void s(e, I, t);
                }
                i(e, x, b, m, w, I, C, M, g), l(e, g.b0, g.b1, g.b2, L, E);
                var P = r.vec3d.create();
                r.vec3d.subtract(E, L, P),
                  (g.quality = f(P)),
                  g.quality < y ? d(g.b0, g.b1, g.b2, L, E, P, t) : u(h, p, t);
              }
            };
            var y = r.vec3d.create(),
              g = r.vec3d.create(),
              b = r.vec3d.create(),
              m = r.vec3d.create(),
              w = r.vec3d.create(),
              I = r.vec3d.create(),
              C = r.vec3d.create(),
              M = r.vec3d.create(),
              x = r.vec3d.create(),
              P = r.vec2d.create(),
              A = r.vec3d.create(),
              S = r.vec3d.create(),
              j = r.vec3d.create(),
              z = r.vec3d.create(),
              T = r.vec3d.create(),
              O = r.vec3d.create(),
              U = r.vec3d.create(),
              F = r.vec3d.create(),
              V = r.vec3d.create(),
              B = r.vec3d.create(),
              L = r.vec3d.create(),
              E = r.vec3d.create(),
              R = r.vec3d.create(),
              N = r.vec3d.create(),
              _ = r.mat3d.create(),
              k = r.vec3d.create(),
              D = (function() {
                return function(e) {
                  (this.minVert = []),
                    (this.maxVert = []),
                    (this.buffer = new ArrayBuffer(448));
                  var t = 0;
                  for (
                    this.minProj = new Float64Array(this.buffer, t, 7),
                      t += 56,
                      this.maxProj = new Float64Array(this.buffer, t, 7),
                      t += 56;
                    this.minVert.length < 7;

                  )
                    this.minVert.push(new Float64Array(this.buffer, t, 3)),
                      (t += 24);
                  for (; this.maxVert.length < 7; )
                    this.maxVert.push(new Float64Array(this.buffer, t, 3)),
                      (t += 24);
                  for (var n = 0; n < 7; ++n)
                    (this.minProj[n] = Number.POSITIVE_INFINITY),
                      (this.maxProj[n] = Number.NEGATIVE_INFINITY);
                  var i = [],
                    a = [],
                    o = e.data,
                    c = e.offsetIdx,
                    u = e.strideIdx;
                  for (n = c; n < o.length; n += u) {
                    var s = o[n];
                    s < this.minProj[0] && ((this.minProj[0] = s), (i[0] = n)),
                      s > this.maxProj[0] &&
                        ((this.maxProj[0] = s), (a[0] = n)),
                      (s = o[n + 1]) < this.minProj[1] &&
                        ((this.minProj[1] = s), (i[1] = n)),
                      s > this.maxProj[1] &&
                        ((this.maxProj[1] = s), (a[1] = n)),
                      (s = o[n + 2]) < this.minProj[2] &&
                        ((this.minProj[2] = s), (i[2] = n)),
                      s > this.maxProj[2] &&
                        ((this.maxProj[2] = s), (a[2] = n)),
                      (s = o[n] + o[n + 1] + o[n + 2]) < this.minProj[3] &&
                        ((this.minProj[3] = s), (i[3] = n)),
                      s > this.maxProj[3] &&
                        ((this.maxProj[3] = s), (a[3] = n)),
                      (s = o[n] + o[n + 1] - o[n + 2]) < this.minProj[4] &&
                        ((this.minProj[4] = s), (i[4] = n)),
                      s > this.maxProj[4] &&
                        ((this.maxProj[4] = s), (a[4] = n)),
                      (s = o[n] - o[n + 1] + o[n + 2]) < this.minProj[5] &&
                        ((this.minProj[5] = s), (i[5] = n)),
                      s > this.maxProj[5] &&
                        ((this.maxProj[5] = s), (a[5] = n)),
                      (s = o[n] - o[n + 1] - o[n + 2]) < this.minProj[6] &&
                        ((this.minProj[6] = s), (i[6] = n)),
                      s > this.maxProj[6] &&
                        ((this.maxProj[6] = s), (a[6] = n));
                  }
                  for (n = 0; n < 7; ++n) {
                    var l = i[n];
                    r.vec3d.set3(o[l], o[l + 1], o[l + 2], this.minVert[n]),
                      (l = a[n]),
                      r.vec3d.set3(o[l], o[l + 1], o[l + 2], this.maxVert[n]);
                  }
                };
              })(),
              q = (function() {
                return function() {
                  (this.b0 = r.vec3d.createFrom(1, 0, 0)),
                    (this.b1 = r.vec3d.createFrom(0, 1, 0)),
                    (this.b2 = r.vec3d.createFrom(0, 0, 1)),
                    (this.quality = 0);
                };
              })();
          }.apply(null, n)) || (e.exports = i);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/layers/LayerView": 2006,
      "esri/views/3d/layers/LayerView3D": 2011,
      "esri/views/3d/layers/support/layerViewUpdatingProperties": 2025,
      "esri/views/3d/support/orientedBoundingBox": 2029,
      "esri/views/3d/layers/i3s/I3SBinaryReader": 2032,
      "esri/views/3d/layers/i3s/I3SUtil": 2048,
      "esri/views/3d/layers/i3s/LEPCC": 2058,
      "esri/views/3d/support/dito": 2089
    });
  })();
