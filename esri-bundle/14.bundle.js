(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    2050: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(11), r(2285)]),
        void 0 ===
          (s = function(e, t, r, i) {
            var s = r.getLogger("esri/views/2d/engine/webgl/WGLDisplayRecord");
            return (function() {
              function e(e, t, r) {
                (this.id = e),
                  (this.geometryType = t),
                  (this._materialInfo = r),
                  (this.meshData = null),
                  (this.symbolLevel = 0),
                  (this.zOrder = 0),
                  (this.vertexFrom = 0),
                  (this.vertexCount = 0),
                  (this.indexFrom = 0),
                  (this.indexCount = 0);
              }
              return (
                Object.defineProperty(e.prototype, "sortKey", {
                  get: function() {
                    return (
                      void 0 === this._sortKey && this._computeSortKey(),
                      this._sortKey
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "materialInfo", {
                  get: function() {
                    return "number" == typeof this._materialInfo
                      ? (s.warn(
                          "Tried to read materialInfo, but found an index! Was materialInfo deserialized correctly?"
                        ),
                        null)
                      : this._materialInfo;
                  },
                  set: function(e) {
                    this._materialInfo = e;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.copy = function() {
                  var t = new e(this.id, this.geometryType, this._materialInfo);
                  return (
                    (t.vertexFrom = this.vertexFrom),
                    (t.vertexCount = this.vertexCount),
                    (t.indexFrom = this.indexFrom),
                    (t.indexCount = this.indexCount),
                    (t.zOrder = this.zOrder),
                    (t.symbolLevel = this.symbolLevel),
                    (t.meshData = this.meshData),
                    t
                  );
                }),
                (e.prototype.setMeshDataFromBuffers = function(e, t, r) {
                  var s = new i();
                  for (var n in t) {
                    for (
                      var o = t[n].stride, a = t[n].data, l = [], h = 0;
                      h < (o * e.vertexCount) / 4;
                      ++h
                    )
                      l[h] = a[h + (o * e.vertexFrom) / 4];
                    s.vertexData.set(n, l);
                  }
                  s.indexData.length = 0;
                  for (h = 0; h < e.indexCount; ++h)
                    s.indexData[h] = r[h + e.indexFrom] - e.vertexFrom;
                  (s.vertexCount = e.vertexCount), (this.meshData = s);
                }),
                (e.prototype.readMeshDataFromBuffers = function(e, t) {
                  for (var r in (this.meshData
                    ? this.meshData.clear()
                    : (this.meshData = new i()),
                  e)) {
                    for (
                      var s = e[r].stride, n = e[r].data, o = [], a = 0;
                      a < (s * this.vertexCount) / 4;
                      ++a
                    )
                      o[a] = n[a + (s * this.vertexFrom) / 4];
                    this.meshData.vertexData.set(r, o);
                  }
                  this.meshData.indexData.length = 0;
                  for (a = 0; a < this.indexCount; ++a)
                    this.meshData.indexData[a] =
                      t[a + this.indexFrom] - this.vertexFrom;
                  this.meshData.vertexCount = this.vertexCount;
                }),
                (e.prototype.writeMeshDataToBuffers = function(e, t, r, i) {
                  for (var s in t)
                    for (
                      var n = t[s].stride,
                        o = this.meshData.vertexData.get(s),
                        a = t[s].data,
                        l = 0;
                      l < (n * this.meshData.vertexCount) / 4;
                      ++l
                    )
                      a[l + (n * e) / 4] = o[l];
                  for (l = 0; l < this.meshData.indexData.length; ++l)
                    i[l + r] = this.meshData.indexData[l] + e;
                  (this.vertexFrom = e),
                    (this.vertexCount = this.meshData.vertexCount),
                    (this.indexFrom = r),
                    (this.indexCount = this.meshData.indexData.length);
                }),
                (e.writeAllMeshDataToBuffers = function(e, t, r) {
                  for (var i = 0, s = 0, n = 0, o = e; n < o.length; n++) {
                    var a = o[n];
                    a.writeMeshDataToBuffers(i, t, s, r),
                      (i += a.vertexCount),
                      (s += a.indexCount);
                  }
                }),
                (e.prototype._computeSortKey = function() {
                  this._sortKey =
                    ((31 & this.symbolLevel) << 12) |
                    ((127 & this.zOrder) << 4) |
                    (7 & this.geometryType);
                }),
                (e.prototype.serialize = function(e) {
                  return (
                    e.writeInt32(this.geometryType),
                    e.writeInt32(this._materialInfo),
                    e.writeInt32(this.symbolLevel),
                    e.writeInt32(this.zOrder),
                    e.writeInt32(this.vertexFrom),
                    e.writeInt32(this.vertexCount),
                    e.writeInt32(this.indexFrom),
                    e.writeInt32(this.indexCount),
                    e
                  );
                }),
                (e.deserialize = function(t, r) {
                  var i = t.readInt32(),
                    s =
                      (r.store && r.store.get(t.readInt32())) || t.readInt32(),
                    n = new e(r.id, i, s);
                  return (
                    (n.symbolLevel = t.readInt32()),
                    (n.zOrder = t.readInt32()),
                    (n.vertexFrom = t.readInt32()),
                    (n.vertexCount = t.readInt32()),
                    (n.indexFrom = t.readInt32()),
                    (n.indexCount = t.readInt32()),
                    n
                  );
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = s);
    },
    2073: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(5)]),
        void 0 ===
          (s = function(e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              return function() {};
            })();
            t.default = i;
          }.apply(null, i)) || (e.exports = s);
    },
    2114: function(e, t, r) {
      var i, s;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(10),
        r(11),
        r(128),
        r(775),
        r(2007),
        r(2068),
        r(2010),
        r(2053),
        r(2115),
        r(2287),
        r(2288),
        r(2292),
        r(2147),
        r(2148),
        r(2293),
        r(2038),
        r(2151),
        r(2117)
      ]),
        void 0 ===
          (s = function(
            e,
            t,
            r,
            i,
            s,
            n,
            o,
            a,
            l,
            h,
            u,
            p,
            c,
            d,
            g,
            _,
            f,
            m,
            v,
            y,
            x
          ) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var w = s.getLogger("esri.views.2d.engine.webgl.WGLMeshFactory"),
              E = {
                esriGeometryPoint: [
                  "above-right",
                  "above-center",
                  "above-left",
                  "center-center",
                  "center-left",
                  "center-right",
                  "below-center",
                  "below-left",
                  "below-right"
                ],
                esriGeometryPolygon: ["always-horizontal"],
                esriGeometryPolyline: null,
                esriGeometryMultipoint: null,
                esriGeometryEnvelope: null
              },
              T = (function() {
                function e() {
                  (this._materials = []), (this._materialsIndex = new Map());
                }
                return (
                  (e.prototype.insert = function(e) {
                    var t = this._materials.length;
                    return this._materials.push(e), t;
                  }),
                  (e.prototype._hashGlyph = function(e, t, r) {
                    return "G-" + t + "-" + r + "-" + e.page;
                  }),
                  (e.prototype._hashSprite = function(e, t, r) {
                    return "S-" + t + "-" + r + "-" + (e ? e.page : -1);
                  }),
                  (e.prototype.createSpriteMaterial = function(e, t, r) {
                    var i = this._hashSprite(e, t, r);
                    if (this._materialsIndex.has(i))
                      return this._materialsIndex.get(i);
                    var s = this._materials.length,
                      n = l.default.fromSprite(e, t, r);
                    return (
                      this._materials.push(n), this._materialsIndex.set(i, s), s
                    );
                  }),
                  (e.prototype.createGlyphMaterial = function(e, t, r) {
                    var i = this._hashGlyph(e, t, r);
                    if (this._materialsIndex.has(i))
                      return this._materialsIndex.get(i);
                    var s = this._materials.length,
                      n = l.default.fromGlyph(e, t, r);
                    return (
                      this._materials.push(n), this._materialsIndex.set(i, s), s
                    );
                  }),
                  (e.prototype.get = function(e) {
                    return this._materials[e];
                  }),
                  (e.prototype.serialize = function(e) {
                    return v.serializeList(e, this._materials), e;
                  }),
                  (e.deserialize = function(t) {
                    var r = new e();
                    return (r._materials = v.deserializeList(t, l.default)), r;
                  }),
                  e
                );
              })();
            t.MaterialStore = T;
            var L = (function() {
              function e(e) {
                (this._bucketSize = e),
                  (this._rowsLength = o.TILE_SIZE / e),
                  (this._colsLength = o.TILE_SIZE / e),
                  (this._grid = this._initGrid());
              }
              return (
                (e.prototype.checkOverlap = function(e, t) {
                  var r = Math.floor(e / this._bucketSize),
                    i = Math.floor(t / this._bucketSize);
                  return (
                    r < 0 ||
                    r >= this._rowsLength ||
                    i < 0 ||
                    i >= this._colsLength ||
                    !!this._grid[i][r] ||
                    ((this._grid[i][r] = !0), !1)
                  );
                }),
                (e.prototype.reset = function() {
                  this._grid = this._initGrid();
                }),
                (e.prototype._initGrid = function() {
                  for (var e = [], t = 0; t < this._rowsLength; t++)
                    e.push(new Array(this._colsLength));
                  return e;
                }),
                e
              );
            })();
            t.LabelGrid = L;
            var b = (function() {
                function e(e, t, r) {
                  (this.displayObjects = e),
                    (this.vertexVectorsMap = t),
                    (this._materials = r);
                }
                return (
                  (e.prototype.get = function(e) {
                    return this.vertexVectorsMap[e];
                  }),
                  (e.prototype.pushDisplayObject = function(e) {
                    this.displayObjects.push(e);
                  }),
                  (e.prototype.encode = function(e, t) {
                    var r = v
                        .serializeList(
                          new x.default(Uint32Array, this._guessSize()),
                          this.displayObjects
                        )
                        .buffer(),
                      i = this._materials
                        .serialize(new x.default(Uint32Array))
                        .buffer(),
                      s = {};
                    for (var n in (t.push(r),
                    t.push(i),
                    this.vertexVectorsMap)) {
                      var o = this.vertexVectorsMap[n];
                      (s[n] = {}), o.transfer(s[n], t);
                    }
                    (e.displayObjects = r),
                      (e.materialStore = i),
                      (e.vertexBuffersMap = s),
                      this.destroy();
                  }),
                  (e.prototype.destroy = function() {
                    (this.vertexVectorsMap = null),
                      (this.displayObjects = null);
                  }),
                  (e.prototype._guessSize = function() {
                    for (
                      var e = this.displayObjects,
                        t = Math.min(e.length, 4),
                        r = 0,
                        i = 0;
                      i < t;
                      i++
                    )
                      r = Math.max(r, e[i].displayRecords.length);
                    return 2 * (12 * e.length + e.length * r * 40);
                  }),
                  e
                );
              })(),
              S = (function() {
                function e() {
                  this._vvMap = new Map();
                }
                return (
                  (e.prototype.set = function(e, t) {
                    this._vvMap.set(e, t);
                  }),
                  (e.prototype.getValue = function(e, t, r) {
                    return this._vvMap.has(e) ? this._vvMap.get(e)(t, r) : 0;
                  }),
                  e
                );
              })(),
              G = (function() {
                function e(e, t, r, s, n, o, a, l, h, u) {
                  var p = this;
                  (this._labelsDebugTemplate = null),
                    (this._matcher = e),
                    (this._materials = r),
                    (this._geometryType = s),
                    (this._idField = n),
                    (this._pixelRatio = h),
                    (this._vvMap = null),
                    (this._vvFlags = a),
                    (this._vvBuf = new ArrayBuffer(16)),
                    (this._vvBufU32 = new Uint32Array(this._vvBuf)),
                    (this._vvBufF32 = new Float32Array(this._vvBuf)),
                    this._createVVFunctionMap(o, t, l),
                    u &&
                      (this._validateLabelingInfo(u)
                        ? (this._labelTemplates = u.map(function(e) {
                            return g.default.fromText(
                              p._materials,
                              0,
                              e.symbol,
                              h,
                              e.labelPlacement
                            );
                          }))
                        : w.error(
                            new i(
                              "mapview-labeling:unsupported-geometry",
                              "LabelingInfo failed validation - unable to create labels for layer."
                            )
                          ));
                }
                return (
                  (e.from = function(t, r, s, n, o, a, l, h) {
                    switch (t.type) {
                      case "simple":
                        return e._fromSimpleRenderer(t, r, s, n, o, a, l, h);
                      case "unique-value":
                      case "uniqueValue":
                        return e._fromUniqueValueRenderer(
                          t,
                          r,
                          s,
                          n,
                          o,
                          a,
                          l,
                          h
                        );
                      case "class-breaks":
                      case "classBreaks":
                        return e._fromClassBreaksRenderer(
                          t,
                          r,
                          s,
                          n,
                          o,
                          a,
                          l,
                          h
                        );
                      default:
                        return (
                          w.error(
                            new i(
                              "mapview-mesh:invalid-renderer",
                              "Unable to handle unknown renderer type"
                            )
                          ),
                          null
                        );
                    }
                  }),
                  Object.defineProperty(e.prototype, "materials", {
                    get: function() {
                      return this._materials;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.createMeshData = function(e) {
                    var t = new Array(5),
                      r = this._matcher.getDefault(),
                      i = new Array(),
                      s = !!y.getMarkerVVFlags(this._vvFlags),
                      n = !!y.getFillVVFlags(this._vvFlags),
                      o = !!y.getLineVVFlags(
                        this._vvFlags,
                        "esriGeometryPolyline" !== this._geometryType
                      ),
                      l = !!y.getTextVVFlags(this._vvFlags);
                    return (
                      !this._labelTemplates &&
                      r &&
                      1 === r.length &&
                      r[0] instanceof f.default
                        ? ((t[a.WGLGeometryType.MARKER] = new c.VertexVectors(
                            a.WGLGeometryType.MARKER,
                            s,
                            e
                          )),
                          (t[a.WGLGeometryType.FILL] = new c.VertexVectors(
                            a.WGLGeometryType.FILL,
                            n,
                            0
                          )),
                          (t[a.WGLGeometryType.LINE] = new c.VertexVectors(
                            a.WGLGeometryType.LINE,
                            o,
                            0
                          )),
                          (t[a.WGLGeometryType.TEXT] = new c.VertexVectors(
                            a.WGLGeometryType.TEXT,
                            l,
                            0
                          )),
                          (t[a.WGLGeometryType.LABEL] = new c.VertexVectors(
                            a.WGLGeometryType.LABEL,
                            !1,
                            0
                          )))
                        : ((t[a.WGLGeometryType.MARKER] = new c.VertexVectors(
                            a.WGLGeometryType.MARKER,
                            s,
                            e
                          )),
                          (t[a.WGLGeometryType.FILL] = new c.VertexVectors(
                            a.WGLGeometryType.FILL,
                            n,
                            e
                          )),
                          (t[a.WGLGeometryType.LINE] = new c.VertexVectors(
                            a.WGLGeometryType.LINE,
                            o,
                            e
                          )),
                          (t[a.WGLGeometryType.TEXT] = new c.VertexVectors(
                            a.WGLGeometryType.TEXT,
                            l,
                            e
                          )),
                          (t[a.WGLGeometryType.LABEL] = new c.VertexVectors(
                            a.WGLGeometryType.LABEL,
                            !1,
                            this._labelTemplates &&
                            this._labelTemplates.length > 0
                              ? e
                              : 0
                          ))),
                      new b(i, t, this._materials)
                    );
                  }),
                  (e.prototype.write = function(e, t, r, i, s) {
                    var n = e,
                      o =
                        (1 === this._matcher.size() &&
                          this._matcher.getDefault()) ||
                        this._matcher.match(t, r),
                      a = t.attributes[this._idField],
                      l = new p(a),
                      h = !!i && !!this._labelTemplates && i.has(a);
                    if (
                      (this._computeVV(t, r), o && (t.geometry || t.centroid))
                    ) {
                      for (
                        var u = l.displayRecords, c = 0, d = o;
                        c < d.length;
                        c++
                      ) {
                        var g = d[c],
                          _ = n.get(g.geometryType);
                        g.writeMesh(
                          u,
                          _,
                          this._geometryType,
                          a,
                          t,
                          this._pixelRatio,
                          this._vvBufU32
                        );
                      }
                      if (h) {
                        var f = this._getLabelReference(o);
                        this._writeLabelMesh(l, n, a, t, s, i.get(a), f);
                      }
                      n.pushDisplayObject(l);
                    }
                  }),
                  (e.prototype._hasBadLabelClass = function(e, t) {
                    var r = e.labelPlacement,
                      s = E[t];
                    if (!s)
                      return (
                        w.error(
                          new i(
                            "mapview-labeling:unsupported-geometry-type",
                            "Unable to create labels for WebGL Feature Layer, " +
                              t +
                              " is not supported"
                          )
                        ),
                        !0
                      );
                    if (
                      !s.some(function(e) {
                        return e === r;
                      })
                    ) {
                      var n = s[0];
                      r &&
                        w.warn(
                          "Found invalid label placement type " +
                            r +
                            " for " +
                            t +
                            ". Defaulting to " +
                            n
                        ),
                        (e.labelPlacement = n);
                    }
                    return !1;
                  }),
                  (e.prototype._validateLabelingInfo = function(e) {
                    var t = this;
                    return !e.some(function(e) {
                      return t._hasBadLabelClass(e, t._geometryType);
                    });
                  }),
                  (e.prototype._getLabelReference = function(e) {
                    for (var t = 0, r = e; t < r.length; t++) {
                      var i = r[t];
                      if (i instanceof f.default) return i;
                    }
                    return null;
                  }),
                  (e.prototype._writeLabelMesh = function(e, t, r, i, s, n, a) {
                    for (
                      var l = e.displayRecords,
                        h = 0,
                        u = 0,
                        p = -1,
                        c = -1,
                        d = 0;
                      d < n.labelingInfo.length;
                      d++
                    ) {
                      var g = n.labelingInfo[d],
                        _ = n.text[d],
                        f = this._labelTemplates[g],
                        m = t.get(f.geometryType),
                        v = s.get(f.symbolId).glyphMosaicItems,
                        y = l.length;
                      f.bindReferenceTemplate(a);
                      var x = f.computeAnchor(this._geometryType, i);
                      if (
                        (0 === d &&
                          ((p = Math.floor(x[0] / o.COLLISION_BUCKET_SIZE)),
                          (c = Math.floor(x[1] / o.COLLISION_BUCKET_SIZE))),
                        !f.computeGlyphs(v, _))
                      ) {
                        var w = f.bounds;
                        f.writeMesh(
                          l,
                          m,
                          this._geometryType,
                          r,
                          i,
                          this._pixelRatio,
                          this._vvBufU32
                        ),
                          (e.anchor = x),
                          e.addMetric(w, y, l.length - y, g);
                        var E = w.center;
                        (h = Math.max(w.halfWidth + Math.abs(E[0]), h)),
                          (u = Math.max(w.halfHeight + Math.abs(E[1]), u));
                      }
                    }
                    if (e.metrics.length) {
                      var T = 2.5 * Math.max(h, u),
                        L = T - (e.anchor[0] % o.COLLISION_BUCKET_SIZE),
                        b = T - (e.anchor[1] % o.COLLISION_BUCKET_SIZE),
                        S = Math.ceil(Math.abs(L / o.COLLISION_BUCKET_SIZE)),
                        G = Math.ceil(Math.abs(b / o.COLLISION_BUCKET_SIZE));
                      (e.xBucket = p),
                        (e.yBucket = c),
                        (e.xOverflow = S),
                        (e.yOverflow = G);
                    }
                  }),
                  (e.prototype._debugLabels = function(e, t, r, i, s) {
                    var n = i[0] + s.center[0],
                      o = i[1] + s.center[1],
                      a = {
                        geometry: {
                          paths: [
                            [
                              [n - s.width / 2, o + s.height / 2],
                              [0, -s.height],
                              [s.width, 0],
                              [0, s.height],
                              [-s.width, 0]
                            ]
                          ]
                        },
                        attributes: {}
                      },
                      l = this._getLabelDebugTemplate(),
                      h = t.get(l.geometryType);
                    l.writeMesh(
                      e,
                      h,
                      "esriGeometryPolyline",
                      r,
                      a,
                      this._pixelRatio,
                      this._vvBufU32
                    );
                  }),
                  (e.prototype._getLabelDebugTemplate = function() {
                    return (
                      this._labelsDebugTemplate ||
                        (this._labelsDebugTemplate = this._createLabelsDebugTemplate()),
                      this._labelsDebugTemplate
                    );
                  }),
                  (e.prototype._createLabelsDebugTemplate = function() {
                    var e = new n({
                      style: "solid",
                      width: 1,
                      color: [255, 0, 0, 1]
                    });
                    return _.default.fromSimpleLine(
                      this._materials,
                      0,
                      e,
                      null,
                      this._pixelRatio
                    );
                  }),
                  (e.prototype._isErrorVV = function(e) {
                    return null === e || isNaN(e) || e === 1 / 0;
                  }),
                  (e.prototype._computeVV = function(e, t) {
                    if (!this._vvMap) return 0;
                    var r = this._vvMap.getValue(a.VVType.SIZE, e, t),
                      i = this._vvMap.getValue(a.VVType.COLOR, e, t),
                      s = this._vvMap.getValue(a.VVType.OPACITY, e, t),
                      n = this._vvMap.getValue(a.VVType.ROTATION, e, t);
                    return (
                      (this._vvBufF32[a.VVType.SIZE] = this._isErrorVV(r)
                        ? NaN
                        : r),
                      (this._vvBufF32[a.VVType.COLOR] = this._isErrorVV(i)
                        ? NaN
                        : i),
                      (this._vvBufF32[a.VVType.OPACITY] = this._isErrorVV(s)
                        ? NaN
                        : s),
                      (this._vvBufF32[a.VVType.ROTATION] = this._isErrorVV(n)
                        ? NaN
                        : n),
                      0
                    );
                  }),
                  (e.prototype._createVVFunctionMap = function(e, t, r) {
                    if (e && e.length)
                      for (var i = 0, s = e; i < s.length; i++) {
                        var n = s[i],
                          o = h.getVVType(n.type),
                          a = this._createGetValueFunction(n, t, r);
                        a &&
                          (this._vvMap || (this._vvMap = new S()),
                          this._vvMap.set(o, a));
                      }
                  }),
                  (e.prototype._createGetValueFunction = function(e, t, r) {
                    if (h.getVVType(e.type) === a.VVType.SIZE) {
                      var i = e,
                        s = u.getTypeOfSizeVisualVariable(i);
                      if (s === a.WGLVVFlag.SIZE_SCALE_STOPS) return null;
                      var n =
                        s === a.WGLVVFlag.SIZE_UNIT_VALUE &&
                        function(e) {
                          return u.getVisualVariableSizeValueRepresentationRatio(
                            e,
                            i.valueRepresentation
                          );
                        };
                      return this._createNormalizedFunction(e, t, r, n);
                    }
                    return this._createNormalizedFunction(e, t, r);
                  }),
                  (e.prototype._createNormalizedFunction = function(
                    e,
                    t,
                    r,
                    s
                  ) {
                    var n = e.field;
                    if (n) {
                      if ("string" == typeof n) {
                        var o = e.normalizationField;
                        return o
                          ? function(e) {
                              if (e.attributes[n] && e.attributes[o]) {
                                var t = e.attributes[n] / e.attributes[o];
                                return s ? s(t) : t;
                              }
                            }
                          : s
                            ? function(e) {
                                return s(e.attributes[n]);
                              }
                            : function(e) {
                                return e.attributes[n];
                              };
                      }
                      return "function" == typeof n
                        ? (w.error(
                            new i(
                              "mapview-rendering:unsupported-feature",
                              "Function field types are not currently supported. Please use a valueExpression instead"
                            )
                          ),
                          function(e) {})
                        : (w.error(
                            new i(
                              "mapview-rendering:invalid-type",
                              "The field for a vv must be a string or a number, but got " +
                                typeof n
                            )
                          ),
                          function(e) {});
                    }
                    if (
                      e.valueExpression &&
                      "$view.scale" !== e.valueExpression
                    ) {
                      var a = {
                        valueExpression: e.valueExpression,
                        spatialReference: r,
                        layer: t
                      };
                      return h.createArcadeFunction(a, s);
                    }
                    return (
                      w.error(
                        "Unable to create a normalized function for visual variable: " +
                          e
                      ),
                      function(e) {}
                    );
                  }),
                  (e._fromSimpleRenderer = function(t, r, i, s, n, o, a, l) {
                    var h = t.getSymbols(),
                      u = t.visualVariables,
                      p = y.getVVFlags(u),
                      c = new m.default(),
                      g = new T();
                    if (h.length) {
                      var _ = h[0];
                      c.setDefault(d.createMeshTemplates([], g, _, i, p, a));
                    }
                    return new e(c, r, g, s, n, u, p, o, a, l);
                  }),
                  (e._fromUniqueValueRenderer = function(
                    t,
                    r,
                    i,
                    s,
                    n,
                    o,
                    a,
                    l
                  ) {
                    var h = t.uniqueValueInfos,
                      u = t.visualVariables,
                      p = y.getVVFlags(u),
                      c = [t.field];
                    t.field2 && c.push(t.field2), t.field3 && c.push(t.field3);
                    for (
                      var g = t.valueExpression,
                        _ = g
                          ? {
                              valueExpression: g,
                              spatialReference: o,
                              layer: r
                            }
                          : null,
                        f = new m.MapMatcher(c, t.fieldDelimiter, _),
                        v = new T(),
                        x = t.backgroundFillSymbol,
                        w = x && d.createMeshTemplates([], v, x, i, p, a),
                        E = 0,
                        L = h;
                      E < L.length;
                      E++
                    ) {
                      var b = L[E],
                        S = d.createMeshTemplates([], v, b.symbol, i, p, a);
                      f.add(b.value, w ? w.concat(S) : S);
                    }
                    var G = t.defaultSymbol;
                    if (G) {
                      var I = d.createMeshTemplates([], v, G, i, p, a);
                      f.setDefault(w ? w.concat(I) : I);
                    }
                    return new e(f, r, v, s, n, u, p, o, a, l);
                  }),
                  (e._fromClassBreaksRenderer = function(
                    t,
                    r,
                    i,
                    s,
                    n,
                    o,
                    a,
                    l
                  ) {
                    for (
                      var h = t.isMaxInclusive,
                        u = t.visualVariables,
                        p = t.valueExpression,
                        c = t.normalizationField,
                        g = t.normalizationTotal,
                        _ = t.normalizationType,
                        f = y.getVVFlags(u),
                        v = t.field,
                        x = p
                          ? {
                              valueExpression: p,
                              spatialReference: o,
                              layer: r
                            }
                          : null,
                        w = {
                          normalizationField: c,
                          normalizationTotal: g,
                          normalizationType: _
                        },
                        E = new m.IntervalMatcher(v, h, x, w),
                        L = new T(),
                        b = t.backgroundFillSymbol,
                        S = b && d.createMeshTemplates([], L, b, i, f, a, !0),
                        G = 0,
                        I = t.classBreakInfos;
                      G < I.length;
                      G++
                    ) {
                      var V = I[G],
                        N = V.symbol,
                        O = d.createMeshTemplates([], L, N, i, f, a),
                        C = { min: V.minValue, max: V.maxValue };
                      E.add(C, S ? S.concat(O) : O);
                    }
                    var R = t.defaultSymbol;
                    if (R) {
                      var M = d.createMeshTemplates([], L, R, i, f, a);
                      E.setDefault(S ? S.concat(M) : M);
                    }
                    return new e(E, r, L, s, n, u, f, o, a, l);
                  }),
                  e
                );
              })();
            t.default = G;
          }.apply(null, i)) || (e.exports = s);
    },
    2115: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(418), r(2050), r(2286), r(2038)]),
        void 0 ===
          (s = function(e, t, r, i, s, n) {
            return (function() {
              function e(e) {
                (this.xBucket = -1),
                  (this.yBucket = -1),
                  (this.xOverflow = -1),
                  (this.yOverflow = -1),
                  (this.id = e),
                  (this.displayRecords = []),
                  (this.metrics = []),
                  (this.anchor = null);
              }
              return (
                (e.prototype.copy = function() {
                  var t = new e(this.id);
                  return t.set(this), t;
                }),
                (e.prototype.set = function(e) {
                  (this.id = e.id),
                    (this.displayRecords = e.displayRecords),
                    (this.metrics = e.metrics),
                    (this.anchor = e.anchor),
                    (this.xBucket = e.xBucket),
                    (this.yBucket = e.yBucket),
                    (this.xOverflow = e.xOverflow),
                    (this.yOverflow = e.yOverflow);
                }),
                (e.prototype.addMetric = function(e, t, r, i) {
                  this.metrics.push(new s.default(e, { from: t, count: r }, i));
                }),
                (e.prototype.serialize = function(e) {
                  return (
                    e.writeInt32(this.id),
                    n.serializeList(e, this.metrics),
                    n.serializeList(e, this.displayRecords),
                    this.anchor
                      ? (e.writeF32(this.anchor[0]),
                        e.writeF32(this.anchor[1]),
                        e.writeInt32(this.xBucket),
                        e.writeInt32(this.yBucket),
                        e.writeInt32(this.xOverflow),
                        e.writeInt32(this.yOverflow))
                      : (e.writeF32(0), e.writeF32(0)),
                    e
                  );
                }),
                (e.deserialize = function(t, o) {
                  var a = o.store,
                    l = t.readInt32(),
                    h = new e(l),
                    u = { id: l, store: a },
                    p = n.deserializeList(t, s.default);
                  p.length && (h.metrics = p),
                    (h.displayRecords = n.deserializeList(t, i, u));
                  var c = t.readF32(),
                    d = t.readF32();
                  return (
                    (c || d) &&
                      ((h.anchor = r.fromValues(c, d)),
                      (h.xBucket = t.readInt32()),
                      (h.yBucket = t.readInt32()),
                      (h.xOverflow = t.readInt32()),
                      (h.yOverflow = t.readInt32())),
                    h
                  );
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = s);
    },
    2116: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(418)]),
        void 0 ===
          (s = function(e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e(e, t, i, s) {
                (this.width = i),
                  (this.height = s),
                  (this.center = r.fromValues(e, t));
              }
              return (
                Object.defineProperty(e.prototype, "x", {
                  get: function() {
                    return this.center[0];
                  },
                  set: function(e) {
                    this.center[0] = e;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "y", {
                  get: function() {
                    return this.center[1];
                  },
                  set: function(e) {
                    this.center[1] = e;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "halfWidth", {
                  get: function() {
                    return this.width / 2;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "halfHeight", {
                  get: function() {
                    return this.height / 2;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.serialize = function(e) {
                  return (
                    e.writeF32(this.center[0]),
                    e.writeF32(this.center[1]),
                    e.writeInt32(this.width),
                    e.writeInt32(this.height),
                    e
                  );
                }),
                (e.deserialize = function(t) {
                  return new e(
                    t.readF32(),
                    t.readF32(),
                    t.readInt32(),
                    t.readInt32()
                  );
                }),
                e
              );
            })();
            t.default = i;
          }.apply(null, i)) || (e.exports = s);
    },
    2117: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (s = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
              function e(e, t) {
                this._pos = 0;
                var r = t ? this._roundToNearest4(t) : 40;
                (this._array = new ArrayBuffer(r)),
                  (this._buffer = new e(this._array)),
                  (this._ctor = e);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._pos;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype._roundToNearest4 = function(e) {
                  var t = Math.round(e);
                  return t + (4 - (t % 4));
                }),
                (e.prototype._ensureSize = function(e) {
                  if (this._pos + e >= this._buffer.length) {
                    var t = this._roundToNearest4(
                        1.5 * (this._array.byteLength + 4 * e)
                      ),
                      r = new ArrayBuffer(t),
                      i = new this._ctor(r);
                    i.set(this._buffer, 0),
                      (this._array = r),
                      (this._buffer = i);
                  }
                }),
                (e.prototype.writeInt32 = function(e) {
                  this._ensureSize(1);
                  var t = this._pos;
                  return (this._buffer[this._pos++] = e), t;
                }),
                (e.prototype.writeF32 = function(e) {
                  this._ensureSize(1);
                  var t = this._pos;
                  return (
                    (new Float32Array(this._array, 4 * this._pos, 1)[0] = e),
                    this._pos++,
                    t
                  );
                }),
                (e.prototype.writeUint32 = function(e) {
                  this._ensureSize(1);
                  var t = this._pos;
                  return (this._buffer[this._pos++] = e), t;
                }),
                (e.prototype.push = function(e) {
                  this._ensureSize(1);
                  var t = this._pos;
                  return (this._buffer[this._pos++] = e), t;
                }),
                (e.prototype.writeRegion = function(e) {
                  this._ensureSize(e.length);
                  var t = this._pos;
                  return (
                    this._buffer.set(e, this._pos), (this._pos += e.length), t
                  );
                }),
                (e.prototype.buffer = function() {
                  var e = this._array.slice(0, 4 * this._pos);
                  return this.destroy(), e;
                }),
                (e.prototype.destroy = function() {
                  (this._array = null), (this._buffer = null);
                }),
                e
              );
            })();
            t.default = r;
          }.apply(null, i)) || (e.exports = s);
    },
    2147: function(e, t, r) {
      var i, s;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(11),
        r(2024),
        r(775),
        r(2007),
        r(2007),
        r(2125),
        r(2028),
        r(2084),
        r(2010),
        r(2050),
        r(2073)
      ]),
        void 0 ===
          (s = function(e, t, r, i, s, n, o, a, l, h, u, p, c, d) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var g = i.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),
              _ = l.allocTriangles(20),
              f = l.allocTriangles(20),
              m = [l.allocExtrudeVectors(), l.allocExtrudeVectors()],
              v = l.allocExtrudeVectors(),
              y = n.TILE_SIZE + 8,
              x = new l.Tessellator({ distanceAlongCorrection: !0 }),
              w = new u.TileClipper(0, 0, 0, 1, 8);
            w.setExtent(512);
            var E = (function(e) {
              function t(t, r, i, s, n, a, l, h, u, p, c) {
                var d = e.call(this) || this;
                (d.capType = a),
                  (d.joinType = l),
                  (d.fillColor = h),
                  (d.tl = u),
                  (d.br = p),
                  (d.hasPattern = c),
                  (d.geometryType = o.WGLGeometryType.LINE);
                var g = 1 / n;
                return (
                  (d.halfWidth = s > 0 ? 0.5 * (s + g) : 0),
                  (d._materialStore = t),
                  (d.vvFlags = r),
                  (d.materialId = d._materialStore.createSpriteMaterial(
                    i,
                    d.geometryType,
                    r
                  )),
                  d
                );
              }
              return (
                r(t, e),
                (t.fromSimpleLine = function(e, r, i, n, o) {
                  var a = i.color,
                    l = p.getCapType(i.cap || "round"),
                    u = p.getJoinType(i.join || "round"),
                    c =
                      (a && "none" !== i.style && s.premultiplyAlphaRGBA(a)) ||
                      0;
                  if (("none" === i.style && (c = 0), !n))
                    return new t(e, r, n, i.width, o, l, u, c, 0, 0, !1);
                  var d = n.rect,
                    g = n.width,
                    _ = n.height,
                    f = d.x + 1,
                    m = d.y + 1,
                    v = d.x + 1 + g,
                    y = d.y + 1 + _,
                    x = h.i1616to32(f, m),
                    w = h.i1616to32(v, y);
                  return new t(e, r, n, i.width, o, l, u, c, x, w, !0);
                }),
                (t.fromPictureLineSymbol = function(e, t, r, i) {
                  return (
                    g.error("PictureLineSymbol support does not exist!"), null
                  );
                }),
                (t.prototype.writeMesh = function(e, t, r, i, s, n, o) {
                  if (
                    this.vvFlags & a.WGLVVFlag.COLOR ||
                    0 !== this.fillColor
                  ) {
                    var l = this._materialStore.get(this.materialId),
                      h = t.indexVector,
                      u = t.get("geometry"),
                      p = this.halfWidth,
                      d = new c(i, this.geometryType, this.materialId),
                      _ = this._getOffset(u, l);
                    switch (
                      ((d.vertexFrom = _),
                      (d.indexFrom = h.length),
                      e.push(d),
                      r)
                    ) {
                      case "esriGeometryPolyline":
                        var f = s.geometry.paths,
                          m = this._clipLines(f);
                        return void this._write(d, h, u, _, i, p, m, l, o);
                      case "esriGeometryPolygon":
                        var v = s.geometry.rings;
                        m = this._clipLines(v);
                        return void this._write(d, h, u, _, i, p, m, l, o);
                      default:
                        g.error("Unable to handle geometryType: " + r);
                    }
                  }
                }),
                (t.prototype._clipLines = function(e) {
                  for (var t = [], r = !1, i = 0; i < e.length; ) {
                    var s = [],
                      n = e[i];
                    w.reset(2);
                    var o = n[0],
                      a = o[0],
                      l = o[1];
                    if (r) w.moveTo(a, l);
                    else {
                      if (a < -8 || a > y || l < -8 || l > y) {
                        r = !0;
                        continue;
                      }
                      s.push({ x: a, y: l });
                    }
                    for (var h = !1, u = n.length, p = 1; p < u; ++p)
                      if (((a += n[p][0]), (l += n[p][1]), r)) w.lineTo(a, l);
                      else {
                        if (a < -8 || a > y || l < -8 || l > y) {
                          h = !0;
                          break;
                        }
                        s.push({ x: a, y: l });
                      }
                    if (h) r = !0;
                    else {
                      if (r) {
                        var c = w.resultWithStarts();
                        if (c)
                          for (var d = 0, g = c; d < g.length; d++) {
                            var _ = g[d];
                            t.push(_);
                          }
                      } else t.push({ line: s, start: 0 });
                      i++, (r = !1);
                    }
                  }
                  return t;
                }),
                (t.prototype._getOffset = function(e, t) {
                  var r = t.materialKeyInfo.hasVV() ? 11 : 8;
                  return e.length / r;
                }),
                (t.prototype._write = function(e, t, r, i, s, n, o, a, h) {
                  for (var u = 0, p = 0, c = o; p < c.length; p++) {
                    var d = c[p],
                      g = d.line,
                      f = d.start;
                    if (!(g.length < 2))
                      for (
                        var y = g[0],
                          w = g[g.length - 1],
                          E = w.x - y.x,
                          T = w.y - y.y,
                          L = E * E + T * T < 1e-6,
                          b = f % 65535,
                          S = m[1],
                          G = 0;
                        G < g.length;
                        G++
                      ) {
                        var I = g[G],
                          V = S === m[G % 2] ? m[(G + 1) % 2] : m[G % 2],
                          N = 0 === G,
                          O = G === g.length - 1;
                        if (
                          (O && L && !this.hasPattern
                            ? l.copyExtrudeVectors(V, v)
                            : (this._computeExtrudeVectors(V, G, g, L),
                              (u += this._writeVertices(
                                r,
                                s,
                                n,
                                I.x,
                                I.y,
                                V,
                                b,
                                u,
                                a,
                                h
                              )),
                              !V.capCenter ||
                                (L && O) ||
                                this._writePieIndices(e, t, i, V),
                              L &&
                                N &&
                                !this.hasPattern &&
                                l.copyExtrudeVectors(v, V)),
                          N || this._writeBridgeIndices(e, t, i, S, V),
                          !O)
                        ) {
                          var C = g[G + 1],
                            R = [C.x - I.x, C.y - I.y],
                            M = l.length(R),
                            U = [R[0] / M, R[1] / M],
                            F = b + M;
                          if (F > 65535) {
                            var D = (65535 - b) / (F - b),
                              A = I.x + (C.x - I.x) * D,
                              P = I.y + (C.y - I.y) * D,
                              k = S;
                            x.buttCap(k, U, U),
                              (u += this._writeVertices(
                                r,
                                s,
                                n,
                                A,
                                P,
                                k,
                                65535,
                                u,
                                a,
                                h
                              )),
                              x.bridge(_, V, k),
                              this._writeBridgeIndices(e, t, i, V, k),
                              x.buttCap(k, U, U),
                              (b = F - 65535);
                          } else (b = F), (S = V);
                        }
                      }
                  }
                  e.vertexCount = u;
                }),
                (t.prototype._writeVertices = function(
                  e,
                  t,
                  r,
                  i,
                  s,
                  n,
                  o,
                  a,
                  l,
                  u
                ) {
                  for (
                    var p = 0,
                      c = h.i1616to32(i, s),
                      d = n.vectors,
                      g = d.items,
                      _ = d.count;
                    p < _;
                    ++p
                  ) {
                    var f = g[p].vector,
                      m = f[0],
                      v = f[1],
                      y = g[p].texCoords,
                      x = y[0],
                      w = y[1],
                      E = g[p].direction,
                      T = E[0],
                      L = E[1],
                      b = h.i1616to32(o, 31 * r),
                      S = h.i8888to32(
                        Math.round(31 * m),
                        Math.round(31 * v),
                        Math.round(31 * x),
                        Math.round(31 * w)
                      ),
                      G = h.i8888to32(
                        Math.round(31 * T),
                        Math.round(31 * L),
                        0,
                        0
                      );
                    e.push(c),
                      e.push(t),
                      e.push(this.fillColor),
                      e.push(S),
                      e.push(b),
                      e.push(this.tl),
                      e.push(this.br),
                      e.push(G),
                      this._writeVV(e, u, l),
                      (g[p].base = { index: a + p, point: [i, s] });
                  }
                  return p;
                }),
                (t.prototype._writeVV = function(e, t, r) {
                  r.materialKeyInfo.hasVV() &&
                    (e.push(t[o.VVType.SIZE]),
                    e.push(t[o.VVType.COLOR]),
                    e.push(t[o.VVType.OPACITY]));
                }),
                (t.prototype._writeBridgeIndices = function(e, t, r, i, s) {
                  x.bridge(_, i, s);
                  for (var n = 0; n < _.count; ++n) {
                    var o = _.items[n];
                    t.push(r + o.v1.base.index),
                      t.push(r + o.v2.base.index),
                      t.push(r + o.v3.base.index),
                      (e.indexCount += 3);
                  }
                }),
                (t.prototype._writePieIndices = function(e, t, r, i) {
                  x.pie(f, i);
                  for (var s = 0; s < f.count; ++s) {
                    var n = f.items[s];
                    t.push(r + n.v1.base.index),
                      t.push(r + n.v2.base.index),
                      t.push(r + n.v3.base.index),
                      (e.indexCount += 3);
                  }
                }),
                (t.prototype._computeExtrudeVectors = function(e, t, r, i) {
                  var s = r[t],
                    n = [void 0, void 0],
                    o = [void 0, void 0];
                  if (t > 0 && t < r.length - 1) {
                    var a = r[(t + r.length - 1) % r.length],
                      h = r[(t + 1) % r.length];
                    l.normalize(n, [s.x - a.x, s.y - a.y]),
                      l.normalize(o, [h.x - s.x, h.y - s.y]);
                  } else if (0 === t) {
                    h = r[(t + 1) % r.length];
                    if ((l.normalize(o, [h.x - s.x, h.y - s.y]), i)) {
                      var u = r[r.length - 2];
                      l.normalize(n, [s.x - u.x, s.y - u.y]);
                    } else n = o;
                  } else {
                    if (t !== r.length - 1)
                      return void console.error(
                        "Vertex index 'i' out of range."
                      );
                    a = r[(t + r.length - 1) % r.length];
                    if ((l.normalize(n, [s.x - a.x, s.y - a.y]), i)) {
                      var p = r[1];
                      l.normalize(o, [p.x - s.x, p.y - s.y]);
                    } else o = n;
                  }
                  i || 0 !== t
                    ? i || t !== r.length - 1
                      ? this._computeJoinExtrudeVectors(e, n, o)
                      : this._computeCapExtrudeVectors(
                          e,
                          n,
                          o,
                          l.CapPosition.END
                        )
                    : this._computeCapExtrudeVectors(
                        e,
                        n,
                        o,
                        l.CapPosition.START
                      );
                }),
                (t.prototype._computeCapExtrudeVectors = function(e, t, r, i) {
                  switch (this.capType) {
                    case o.CapType.BUTT:
                      return void x.buttCap(e, t, r);
                    case o.CapType.ROUND:
                      var s = l.getNumberOfSlices(Math.PI),
                        n = i === l.CapPosition.START ? -1 : 1;
                      return void x.roundCap(e, t, r, i, s, n);
                    case o.CapType.SQUARE:
                      return void x.squareCap(e, t, r, i);
                    default:
                      return (
                        g.error(
                          "Encountered unknown cap type: " +
                            this.capType +
                            ", defaulting to BUTT"
                        ),
                        void x.buttCap(e, t, r)
                      );
                  }
                }),
                (t.prototype._computeJoinExtrudeVectors = function(e, t, r) {
                  var i = l.getRads(t, r);
                  if (i > Math.PI - 0.05) x.rectJoin(e, t, r);
                  else if (this.joinType === o.JoinType.MITER || i < 0.1)
                    i < 0.05
                      ? x.fastMiterJoin(e, t, r)
                      : i < l.MITER_SAFE_RADS
                        ? x.miterJoin(e, t, r)
                        : x.bevelJoin(e, t, r, l.SYSTEM_MAG_LIMIT);
                  else if (this.joinType === o.JoinType.BEVEL)
                    x.bevelJoin(e, t, r, 1);
                  else if (this.joinType === o.JoinType.ROUND) {
                    var s = l.getNumberOfSlices(i);
                    i < 2.3
                      ? s < 2 || i < 0.5
                        ? x.bevelJoin(e, t, r, 1)
                        : x.roundJoin(e, t, r, s)
                      : x.unitRoundJoin(e, t, r, s);
                  }
                }),
                t
              );
            })(d.default);
            t.default = E;
          }.apply(null, i)) || (e.exports = s);
    },
    2148: function(e, t, r) {
      var i, s;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(11),
        r(39),
        r(786),
        r(418),
        r(2024),
        r(775),
        r(2007),
        r(2028),
        r(2050),
        r(2073)
      ]),
        void 0 ===
          (s = function(e, t, r, i, s, n, o, a, l, h, u, p, c) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var d = i.getLogger("esri.views.2d.engine.webgl.WGLMeshTemplate"),
              g = (function(e) {
                function t(t, r, i, s, a, l, p, c, d, g, _) {
                  var f = e.call(this) || this;
                  f.geometryType = h.WGLGeometryType.MARKER;
                  var m = o.create(),
                    v = n.create(),
                    y = _.sdf ? 0.5 : 1;
                  n.translate(v, v, new Float32Array([y * i, y * -s])),
                    a && n.rotate(v, v, (3.14159265359 / 180) * a),
                    (f._materialStore = t),
                    (f.vvFlags = r),
                    (f._materialId = t.createSpriteMaterial(
                      _,
                      f.geometryType,
                      r
                    )),
                    (f._fillColor = l),
                    (f._outlineColor = d),
                    (f._sizeOutlineWidth = u.i8888to32(p, c, g, 0));
                  var x = Math.round(_.rect.x / 4),
                    w = Math.round(_.rect.y / 4),
                    E = x + Math.round(_.rect.width / 4),
                    T = w + Math.round(_.rect.height / 4);
                  return (
                    m.set([-0.5 * p, -0.5 * c]),
                    o.transformMat2d(m, m, v),
                    (f._offsetAndTexUpperLeft = u.i8888to32(m[0], m[1], x, w)),
                    m.set([0.5 * p, -0.5 * c]),
                    o.transformMat2d(m, m, v),
                    (f._offsetAndTexUpperRight = u.i8888to32(m[0], m[1], E, w)),
                    m.set([-0.5 * p, 0.5 * c]),
                    o.transformMat2d(m, m, v),
                    (f._offsetAndTexBottomLeft = u.i8888to32(m[0], m[1], x, T)),
                    m.set([0.5 * p, 0.5 * c]),
                    o.transformMat2d(m, m, v),
                    (f._offsetAndTexBottomRight = u.i8888to32(
                      m[0],
                      m[1],
                      E,
                      T
                    )),
                    (f.height = c),
                    (f.width = p),
                    (f.xOffset = i),
                    (f.yOffset = s),
                    f
                  );
                }
                return (
                  r(t, e),
                  (t.fromPictureMarker = function(e, r, i, n, o) {
                    var a = Math.round(s.pt2px(i.width)),
                      h = Math.round(s.pt2px(i.height)),
                      u = l.PICTURE_FILL_COLOR;
                    return new t(
                      e,
                      r,
                      Math.round(s.pt2px(i.xoffset || 0)),
                      Math.round(s.pt2px(i.yoffset || 0)),
                      i.angle,
                      u,
                      a,
                      h,
                      0,
                      0,
                      n
                    );
                  }),
                  (t.fromSimpleMarker = function(e, r, i, n, o) {
                    var l = a.premultiplyAlphaRGBA(i.color),
                      h = Math.round(s.pt2px(i.size)),
                      u = h,
                      p = Math.round(s.pt2px(i.xoffset || 0)),
                      c = Math.round(s.pt2px(i.yoffset || 0)),
                      d = i.outline,
                      g = 0 | (d && d.color && a.premultiplyAlphaRGBA(d.color)),
                      _ = 0 | (d && d.width && Math.round(s.pt2px(d.width)));
                    return new t(e, r, p, c, i.angle, l, h, u, g, _, n);
                  }),
                  (t.prototype.writeMesh = function(e, t, r, i, s, n, o) {
                    var a = this._materialStore.get(this._materialId),
                      l = t.indexVector,
                      h = t.get("geometry"),
                      u = new p(i, this.geometryType, this._materialId),
                      c = this._getOffset(h, a);
                    switch (
                      (e.push(u),
                      (u.vertexFrom = c),
                      (u.indexFrom = l.length),
                      r)
                    ) {
                      case "esriGeometryPoint":
                        var g = s.geometry,
                          _ = g.x,
                          f = g.y;
                        return (
                          this._writeVertices(
                            u,
                            h,
                            i,
                            this._getPos(_, f),
                            a,
                            o
                          ),
                          void this._writeIndices(u, l, c)
                        );
                      case "esriGeometryPolyline":
                        var m = s.geometry.paths;
                        return void this._writeMany(u, l, h, c, i, m[0], a, o);
                      case "esriGeometryPolygon":
                        var v = s.centroid;
                        if (v) {
                          (_ = v.x), (f = v.y);
                          this._writeVertices(
                            u,
                            h,
                            i,
                            this._getPos(_, f),
                            a,
                            o
                          ),
                            this._writeIndices(u, l, c);
                        } else
                          d.error(
                            "Tried to render polygon geometries as markers, but found no centroid!"
                          );
                        return;
                      case "esriGeometryMultipoint":
                        var y = s.geometry.points;
                        return void this._writeMany(u, l, h, c, i, y, a, o);
                      case "esriGeometryEnvelope":
                      default:
                        d.error("Unable to handle geometryType: " + r);
                    }
                  }),
                  (t.prototype._getPos = function(e, t) {
                    return u.i1616to32(e, t);
                  }),
                  (t.prototype._writeMany = function(e, t, r, i, s, n, o, a) {
                    for (
                      var l = 0, h = 0, u = 0, p = 0, c = n;
                      p < c.length;
                      p++
                    ) {
                      var d = c[p],
                        g = d[0],
                        _ = d[1];
                      this._writeVertices(
                        e,
                        r,
                        s,
                        this._getPos(g + l, _ + h),
                        o,
                        a
                      ),
                        this._writeIndices(e, t, i + u),
                        (l += g),
                        (h += _),
                        (u += 4);
                    }
                  }),
                  (t.prototype._getOffset = function(e, t) {
                    var r = t.materialKeyInfo.hasVV() ? 10 : 6;
                    return e.length / r;
                  }),
                  (t.prototype._writeVertices = function(e, t, r, i, s, n) {
                    t.push(i),
                      t.push(this._offsetAndTexUpperLeft),
                      t.push(r),
                      t.push(this._fillColor),
                      t.push(this._outlineColor),
                      t.push(this._sizeOutlineWidth),
                      this._writeVV(t, n, s),
                      t.push(i),
                      t.push(this._offsetAndTexUpperRight),
                      t.push(r),
                      t.push(this._fillColor),
                      t.push(this._outlineColor),
                      t.push(this._sizeOutlineWidth),
                      this._writeVV(t, n, s),
                      t.push(i),
                      t.push(this._offsetAndTexBottomLeft),
                      t.push(r),
                      t.push(this._fillColor),
                      t.push(this._outlineColor),
                      t.push(this._sizeOutlineWidth),
                      this._writeVV(t, n, s),
                      t.push(i),
                      t.push(this._offsetAndTexBottomRight),
                      t.push(r),
                      t.push(this._fillColor),
                      t.push(this._outlineColor),
                      t.push(this._sizeOutlineWidth),
                      this._writeVV(t, n, s),
                      (e.vertexCount += 4);
                  }),
                  (t.prototype._writeVV = function(e, t, r) {
                    r.materialKeyInfo.hasVV() &&
                      (e.push(t[h.VVType.SIZE]),
                      e.push(t[h.VVType.COLOR]),
                      e.push(t[h.VVType.OPACITY]),
                      e.push(t[h.VVType.ROTATION]));
                  }),
                  (t.prototype._writeIndices = function(e, t, r) {
                    var i = r;
                    t.push(i + 0),
                      t.push(i + 1),
                      t.push(i + 2),
                      t.push(i + 1),
                      t.push(i + 3),
                      t.push(i + 2),
                      (e.indexCount += 6);
                  }),
                  t
                );
              })(c.default);
            t.default = g;
          }.apply(null, i)) || (e.exports = s);
    },
    2149: function(e, t, r) {
      var i, s;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(11),
        r(39),
        r(2024),
        r(775),
        r(2007),
        r(2037),
        r(2028),
        r(2083),
        r(2050),
        r(2116),
        r(2073),
        r(2150)
      ]),
        void 0 ===
          (s = function(e, t, r, i, s, n, o, a, l, h, u, p, c, d, g) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var _ = i.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate"),
              f = 10,
              m = 24,
              v = 1.2 * m,
              y = 10 * m,
              x = (function() {
                function e(e, t, r, i, s, n, o, a, l) {
                  (this.materialId = e),
                    (this.vertexOffsetUpperLeft = t),
                    (this.vertexOffsetUpperRight = r),
                    (this.vertexOffsetLowerLeft = i),
                    (this.vertexOffsetLowerRight = s),
                    (this.texFontSizeUpperLeft = n),
                    (this.texFontSizeUpperRight = o),
                    (this.texFontSizeLowerLeft = a),
                    (this.texFontSizeLowerRight = l);
                }
                return (
                  (e.from = function(t, r, i, s, n) {
                    var o,
                      a,
                      u = t.glyphMosaicItem,
                      p = u.rect,
                      c = u.metrics,
                      d = Math.round(p.x / 4),
                      g = Math.round(p.y / 4),
                      _ = d + Math.round(p.width / 4),
                      f = g + Math.round(p.height / 4);
                    if (t.codePoint) {
                      var m = t.x + 0 + c.left,
                        v = t.y + -17 - c.top;
                      (o = new l.Point(m - 4, v - 4)),
                        (a = new l.Point(o.x + p.width, o.y + p.height));
                    } else {
                      (m = t.x), (v = t.y);
                      (o = new l.Point(m, v)),
                        (a = new l.Point(o.x + c.width, o.y + c.height));
                    }
                    var y = new l.Point(o.x, a.y),
                      x = new l.Point(a.x, o.y);
                    if (i) {
                      var w = Math.cos(i),
                        E = Math.sin(i);
                      o.rotate(w, E),
                        a.rotate(w, E),
                        y.rotate(w, E),
                        x.rotate(w, E);
                    }
                    return new e(
                      r,
                      h.i1616to32(8 * o.x, 8 * o.y),
                      h.i1616to32(8 * x.x, 8 * x.y),
                      h.i1616to32(8 * y.x, 8 * y.y),
                      h.i1616to32(8 * a.x, 8 * a.y),
                      h.i8888to32(d, g, s, n),
                      h.i8888to32(_, g, s, n),
                      h.i8888to32(d, f, s, n),
                      h.i8888to32(_, f, s, n)
                    );
                  }),
                  e
                );
              })();
            t.ComputedGlyph = x;
            var w = (function(e) {
              function t(t, r, i) {
                var l = e.call(this) || this;
                l.geometryType = a.WGLGeometryType.TEXT;
                var h = i.haloColor;
                (l.color = 0 | (i.color && n.premultiplyAlphaRGBA(i.color))),
                  (l.textSize = s.pt2px(i.font.size));
                var u = i.xoffset / i.font.size,
                  p = i.yoffset / i.font.size;
                return (
                  (l.shapingXOffset = u * m),
                  (l.shapingYOffset = p * m),
                  (l.haloColor = 0 | (h && n.premultiplyAlphaRGBA(h))),
                  (l.haloSize = f * s.pt2px(s.toPt(i.haloSize || 0))),
                  (l.textPropColor = l.color || o.PICTURE_FILL_COLOR),
                  (l.textPropSize = s.pt2px(i.font.size)),
                  (l.textPropAngle = (i.angle * Math.PI) / 180),
                  (l.xOffset = s.pt2px(i.xoffset)),
                  (l.yOffset = s.pt2px(i.yoffset)),
                  (l.textPropHAnchor =
                    "left" === i.horizontalAlignment
                      ? 0
                      : "right" === i.horizontalAlignment
                        ? 1
                        : 0.5),
                  (l.textPropVAnchor =
                    "top" === i.verticalAlignment
                      ? 0
                      : "bottom" === i.verticalAlignment
                        ? 1
                        : 0.5),
                  (l.textPropHaloColor = l.haloColor || 4294967295),
                  (l.textPropHaloSize = s.pt2px(s.toPt(i.haloSize || 0))),
                  (l._materialStore = t),
                  (l.vvFlags = r),
                  l
                );
              }
              return (
                r(t, e),
                (t.fromText = function(e, r, i, s, n) {
                  var o = new t(e, r, i);
                  return o.computeGlyphs(n, i.text, !1), o;
                }),
                (t.prototype.writeMesh = function(e, t, r, i, s, n, o) {
                  var a = t.indexVector,
                    l = t.get("geometry"),
                    h = t.get("visibility"),
                    u = this._getOffset(l);
                  switch (r) {
                    case "esriGeometryPoint":
                      var p = s.geometry,
                        c = p.x,
                        d = p.y;
                      return void this._writeVertices(
                        e,
                        a,
                        l,
                        h,
                        u,
                        i,
                        c,
                        d,
                        o
                      );
                    case "esriGeometryPolygon":
                      if (s.centroid) {
                        var g = s.centroid;
                        (c = g.x), (d = g.y);
                        return void this._writeVertices(
                          e,
                          a,
                          l,
                          h,
                          u,
                          i,
                          c,
                          d,
                          o
                        );
                      }
                    default:
                      _.error("Unable to handle geometryType: " + r);
                  }
                }),
                (t.prototype.computeGlyphs = function(e, t, r) {
                  if (!t || !t.length) return (this._computedGlyphs = []), null;
                  for (
                    var i = this.shapingXOffset,
                      s = this.shapingYOffset,
                      n = this.textPropHAnchor,
                      o = this.textPropVAnchor,
                      l = this._computeShaping(e, y, v, 0, i, s, n, o, 0.5),
                      h = g.bidiText(t),
                      p = h[0],
                      d = h[1],
                      _ = l.getShaping(p, d),
                      f = new Array(_.length),
                      w = 0;
                    w < _.length;
                    w++
                  ) {
                    var E = this.textPropAngle,
                      T = this.textSize,
                      L = this.haloSize,
                      b = _[w].glyphMosaicItem,
                      S = this._materialStore.createGlyphMaterial(
                        b,
                        a.WGLGeometryType.TEXT,
                        this.vvFlags
                      );
                    f[w] = x.from(_[w], S, E, T, L);
                  }
                  if (((this._computedGlyphs = f), !r)) return null;
                  var G = u.getBox(_);
                  return (
                    (G.width *= this.textSize / m),
                    (G.height *= this.textSize / m),
                    new c.default(G.x, G.y, G.width, G.height)
                  );
                }),
                (t.prototype._computeShaping = function(
                  e,
                  t,
                  r,
                  i,
                  s,
                  n,
                  o,
                  a,
                  l
                ) {
                  return (
                    (this._shaping = new u([e], y, v, 0, [s, n], o, a, 0.5)),
                    this._shaping
                  );
                }),
                (t.prototype._getOffset = function(e) {
                  var t = !!this.vvFlags ? 9 : 5;
                  return e.length / t;
                }),
                (t.prototype._writeVertices = function(
                  e,
                  t,
                  r,
                  i,
                  s,
                  n,
                  o,
                  a,
                  l
                ) {
                  var u = this._computedGlyphs,
                    c = o,
                    d = a,
                    g = h.i1616to32(2 * c, 2 * d),
                    _ = h.i1616to32(2 * c + 1, 2 * d),
                    f = 0;
                  if (this.haloSize)
                    for (var m = 0; m < u.length; m++, f += 4) {
                      var v = u[m].materialId,
                        y = this._materialStore.get(v);
                      ((x = new p(n, this.geometryType, v)).vertexFrom = s + f),
                        (x.indexFrom = t.length),
                        this._writeVertex(
                          x,
                          r,
                          i,
                          n,
                          _,
                          this.haloColor,
                          u[m],
                          y,
                          l
                        ),
                        this._writeIndices(x, t, s + f),
                        e.push(x);
                    }
                  for (m = 0; m < u.length; m++, f += 4) {
                    var x;
                    (v = u[m].materialId), (y = this._materialStore.get(v));
                    ((x = new p(n, this.geometryType, v)).vertexFrom = s + f),
                      (x.indexFrom = t.length),
                      this._writeVertex(x, r, i, n, g, this.color, u[m], y, l),
                      this._writeIndices(x, t, s + f),
                      e.push(x);
                  }
                }),
                (t.prototype._writeVertex = function(
                  e,
                  t,
                  r,
                  i,
                  s,
                  n,
                  o,
                  a,
                  l
                ) {
                  t.push(s),
                    t.push(i),
                    t.push(n),
                    t.push(o.vertexOffsetUpperLeft),
                    t.push(o.texFontSizeUpperLeft),
                    this._writeVV(t, l, a),
                    t.push(s),
                    t.push(i),
                    t.push(n),
                    t.push(o.vertexOffsetUpperRight),
                    t.push(o.texFontSizeUpperRight),
                    this._writeVV(t, l, a),
                    t.push(s),
                    t.push(i),
                    t.push(n),
                    t.push(o.vertexOffsetLowerLeft),
                    t.push(o.texFontSizeLowerLeft),
                    this._writeVV(t, l, a),
                    t.push(s),
                    t.push(i),
                    t.push(n),
                    t.push(o.vertexOffsetLowerRight),
                    t.push(o.texFontSizeLowerRight),
                    this._writeVV(t, l, a),
                    r.push(4294967295),
                    (e.vertexCount += 4);
                }),
                (t.prototype._writeVV = function(e, t, r) {
                  r.materialKeyInfo.hasVV() &&
                    (e.push(t[a.VVType.SIZE]),
                    e.push(t[a.VVType.COLOR]),
                    e.push(t[a.VVType.OPACITY]),
                    e.push(t[a.VVType.ROTATION]));
                }),
                (t.prototype._writeIndices = function(e, t, r) {
                  t.push(r + 0),
                    t.push(r + 1),
                    t.push(r + 2),
                    t.push(r + 1),
                    t.push(r + 3),
                    t.push(r + 2),
                    (e.indexCount += 6);
                }),
                t
              );
            })(d.default);
            t.default = w;
          }.apply(null, i)) || (e.exports = s);
    },
    2150: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(2076)]),
        void 0 ===
          (s = function(e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = new r();
            t.bidiText = function(e) {
              return i.hasBidiChar(e)
                ? ((t = "rtl" === i.checkContextual(e) ? "IDNNN" : "ICNNN"),
                  [i.bidiTransform(e, t, "VLYSN"), !0])
                : [e, !1];
              var t;
            };
          }.apply(null, i)) || (e.exports = s);
    },
    2151: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(2007), r(2053)]),
        void 0 ===
          (s = function(e, t, r, i) {
            function s(e, t) {
              void 0 === t && (t = !1);
              var i =
                  r.WGLVVFlag.SIZE_FIELD_STOPS |
                  r.WGLVVFlag.SIZE_MINMAX_VALUE |
                  r.WGLVVFlag.SIZE_SCALE_STOPS |
                  r.WGLVVFlag.SIZE_UNIT_VALUE,
                s =
                  (e &
                    (r.WGLVVTarget.FIELD_TARGETS_OUTLINE |
                      r.WGLVVTarget.MINMAX_TARGETS_OUTLINE |
                      r.WGLVVTarget.SCALE_TARGETS_OUTLINE |
                      r.WGLVVTarget.UNIT_TARGETS_OUTLINE)) >>>
                  4;
              return t ? i & s : i & ~s;
            }
            function n(e) {
              var t = s(e, !1);
              return (
                e &
                (r.WGLVVFlag.COLOR |
                  r.WGLVVFlag.OPACITY |
                  r.WGLVVFlag.ROTATION |
                  t)
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getVVFlags = function(e) {
                if (!e) return r.WGLVVFlag.NONE;
                for (var t = 0, s = 0, n = e; s < n.length; s++) {
                  var o = n[s];
                  if ("size" === o.type) {
                    var a = i.getTypeOfSizeVisualVariable(o);
                    (t |= a), "outline" === o.target && (t |= a << 4);
                  } else
                    "color" === o.type
                      ? (t |= r.WGLVVFlag.COLOR)
                      : "opacity" === o.type
                        ? (t |= r.WGLVVFlag.OPACITY)
                        : "rotation" === o.type && (t |= r.WGLVVFlag.ROTATION);
                }
                return t;
              }),
              (t.getSizeFlagsMask = s),
              (t.getMarkerVVFlags = n),
              (t.getFillVVFlags = function(e) {
                return e & (r.WGLVVFlag.COLOR | r.WGLVVFlag.OPACITY);
              }),
              (t.getLineVVFlags = function(e, t) {
                if (t) return e & s(e, !0);
                var i = s(e, !1);
                return e & (r.WGLVVFlag.COLOR | r.WGLVVFlag.OPACITY | i);
              }),
              (t.getTextVVFlags = function(e) {
                return n(e);
              });
          }.apply(null, i)) || (e.exports = s);
    },
    2152: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (s = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = 8,
              i = -3;
            (t.getFullyQualifiedFontName = function(e) {
              var t =
                (function(e) {
                  if (!e.weight) return "";
                  switch (e.weight.toLowerCase()) {
                    case "bold":
                    case "bolder":
                      return "-bold";
                  }
                  return "";
                })(e) +
                (function(e) {
                  if (!e.style) return "";
                  switch (e.style.toLowerCase()) {
                    case "italic":
                    case "oblic":
                      return "-italic";
                  }
                  return "";
                })(e);
              return (
                (function(e) {
                  var t = e
                    .toLowerCase()
                    .split(" ")
                    .join("-");
                  switch (t) {
                    case "serif":
                      return "noto-serif";
                    case "sans-serif":
                      return "arial-unicode-ms";
                    case "monospace":
                      return "ubuntu-mono";
                    case "fantasy":
                      return "cabin-sketch";
                    case "cursive":
                      return "redressed";
                    default:
                      return t;
                  }
                })(e.family) + (t.length > 0 ? t : "-regular")
              );
            }),
              (t.getFontDecorationOffset = function(e) {
                switch (e.decoration.toLowerCase()) {
                  case "underline":
                    return r;
                  case "line-through":
                    return i;
                }
                return NaN;
              });
          }.apply(null, i)) || (e.exports = s);
    },
    2285: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (s = function(e, t) {
            return (function() {
              function e() {
                (this.vertexData = new Map()),
                  (this.vertexCount = 0),
                  (this.indexData = []);
              }
              return (
                (e.prototype.clear = function() {
                  this.vertexData.clear(),
                    (this.vertexCount = 0),
                    (this.indexData = []);
                }),
                (e.prototype.update = function(e, t, r) {
                  for (var i in e) this.vertexData.set(i, e[i]);
                  for (var i in this.vertexData)
                    null === e[i] && this.vertexData.delete(i);
                  (this.vertexCount = t), (this.indexData = r);
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = s);
    },
    2286: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(2116)]),
        void 0 ===
          (s = function(e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e(e, t, r, i, s) {
                void 0 === i && (i = 255),
                  void 0 === s && (s = 0),
                  (this.bounds = e),
                  (this.range = t),
                  (this.index = r),
                  (this.minZoom = i),
                  (this.maxZoom = s);
              }
              return (
                (e.prototype.serialize = function(e) {
                  return (
                    this.bounds.serialize(e),
                    e.writeInt32(this.range.from),
                    e.writeInt32(this.range.count),
                    e.writeInt32(this.index),
                    e
                  );
                }),
                (e.deserialize = function(t) {
                  return new e(
                    r.default.deserialize(t),
                    { from: t.readInt32(), count: t.readInt32() },
                    t.readInt32()
                  );
                }),
                e
              );
            })();
            t.default = i;
          }.apply(null, i)) || (e.exports = s);
    },
    2287: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(2010), r(2117)]),
        void 0 ===
          (s = function(e, t, r, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function() {
              function e(e, t) {
                (this.data = e), (this.stride = t), (this.vertexCount = 0);
              }
              return (
                (e.prototype.transfer = function(e, t) {
                  var r = this.data.buffer();
                  (e.vertexCount = this.vertexCount),
                    (e.data = r),
                    (e.stride = this.stride),
                    t.push(r);
                }),
                e
              );
            })();
            t.default = s;
            var n = (function() {
              function e(e, t, n) {
                (this.geometryType = e),
                  (this.indexVector = new i.default(Uint32Array, n)),
                  (this.namedVectors = {});
                var o = r.getStrides(e, t);
                for (var a in o) {
                  var l = o[a],
                    h = l / 4,
                    u = new i.default(Uint32Array, h * n);
                  this.namedVectors[a] = new s(u, l);
                }
              }
              return (
                (e.prototype.get = function(e) {
                  return this.namedVectors[e].data;
                }),
                (e.prototype.transfer = function(e, t) {
                  var r = this.indexVector.buffer(),
                    i = {};
                  for (var s in (t.push(r), this.namedVectors)) {
                    var n = this.namedVectors[s];
                    (i[s] = {}), n.transfer(i[s], t);
                  }
                  (e.geometryType = this.geometryType),
                    (e.indexBuffer = r),
                    (e.namedBuffers = i),
                    this.destroy();
                }),
                (e.prototype.destroy = function() {
                  (this.indexVector = null), (this.namedVectors = null);
                }),
                e
              );
            })();
            t.VertexVectors = n;
          }.apply(null, i)) || (e.exports = s);
    },
    2288: function(e, t, r) {
      var i, s;
      (i = [
        r.dj.c(e.i),
        t,
        r(11),
        r(2007),
        r(2289),
        r(2147),
        r(2148),
        r(2149),
        r(2151)
      ]),
        void 0 ===
          (s = function(e, t, r, i, s, n, o, a, l) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var h = r.getLogger(
              "esri.views.2d.engine.webgl.mesh.templates.meshTemplateUtils"
            );
            t.createMeshTemplates = function(e, t, r, u, p, c, d) {
              if ((void 0 === d && (d = !1), -1 !== r.type.indexOf("3d")))
                return h.error("3D symbols are not supported with MapView"), e;
              var g = u.get(r.id);
              switch (
                (g ||
                  h.error(
                    "Couldn't find texture resources for symbol: " + r.id + "!"
                  ),
                r.type)
              ) {
                case i.EsriSymbolTypeKebab.SIMPLE_MARKER:
                  return (
                    e.push(
                      o.default.fromSimpleMarker(
                        t,
                        l.getMarkerVVFlags(p),
                        r,
                        g.spriteMosaicItem,
                        c
                      )
                    ),
                    e
                  );
                case i.EsriSymbolTypeKebab.PICTURE_MARKER:
                  return (
                    e.push(
                      o.default.fromPictureMarker(
                        t,
                        l.getMarkerVVFlags(p),
                        r,
                        g.spriteMosaicItem,
                        c
                      )
                    ),
                    e
                  );
                case i.EsriSymbolTypeKebab.SIMPLE_FILL:
                  var _ = r;
                  if (
                    (e.push(
                      s.default.fromSimpleFill(
                        t,
                        l.getFillVVFlags(p),
                        _,
                        g.spriteMosaicItem,
                        c,
                        d
                      )
                    ),
                    _.outline)
                  ) {
                    var f = u.get(_.outline.id);
                    e.push(
                      n.default.fromSimpleLine(
                        t,
                        l.getLineVVFlags(p, !0),
                        _.outline,
                        f && f.spriteMosaicItem,
                        c
                      )
                    );
                  }
                  return e;
                case i.EsriSymbolTypeKebab.PICTURE_FILL:
                  var m = r;
                  return (
                    e.push(
                      s.default.fromPictureFill(
                        t,
                        l.getFillVVFlags(p),
                        m,
                        g.spriteMosaicItem,
                        c,
                        d
                      )
                    ),
                    m.outline &&
                      ((f = u.get(m.outline.id)),
                      e.push(
                        n.default.fromSimpleLine(
                          t,
                          l.getLineVVFlags(p, !0),
                          m.outline,
                          f && f.spriteMosaicItem,
                          c
                        )
                      )),
                    e
                  );
                case i.EsriSymbolTypeKebab.SIMPLE_LINE:
                  return (
                    e.push(
                      n.default.fromSimpleLine(
                        t,
                        l.getLineVVFlags(p, !1),
                        r,
                        g.spriteMosaicItem,
                        c
                      )
                    ),
                    e
                  );
                case i.EsriSymbolTypeKebab.TEXT:
                  return (
                    e.push(
                      a.default.fromText(
                        t,
                        l.getTextVVFlags(p),
                        r,
                        c,
                        g.glyphMosaicItems
                      )
                    ),
                    e
                  );
                default:
                  return (
                    h.error(
                      "Unable to create mesh template for unknown symbol type: " +
                        r.type
                    ),
                    e
                  );
              }
            };
          }.apply(null, i)) || (e.exports = s);
    },
    2289: function(e, t, r) {
      var i, s;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(15),
        r(11),
        r(316),
        r(2024),
        r(775),
        r(2007),
        r(2007),
        r(2028),
        r(2084),
        r(2050),
        r(2290),
        r(2073)
      ]),
        void 0 ===
          (s = function(e, t, r, i, s, n, o, a, l, h, u, p, c, d, g) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var _ = s.getLogger(
                "esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"
              ),
              f = [],
              m = [],
              v = (function(e) {
                function t(t, r, s, n, o, a, h, u) {
                  var c = e.call(this) || this;
                  (c.fillColor = n),
                    (c.tl = o),
                    (c.br = a),
                    (c.aux = h),
                    (c.isBFS = u),
                    (c.geometryType = l.WGLGeometryType.FILL),
                    (c.useLibtess = !1);
                  var g = i("esri-featurelayer-webgl");
                  return (
                    (c.useLibtess =
                      "libtess" === ((g || {}).tesselator || "libtess")),
                    c.useLibtess && (c._tesselator = new d.default()),
                    (c.vvFlags = r),
                    (c._materialStore = t),
                    (c.materialId = c._materialStore.createSpriteMaterial(
                      s,
                      c.geometryType,
                      r
                    )),
                    (c._tileClipper = new p.TileClipper(0, 0, 0, 1, 8)),
                    c._tileClipper.setExtent(512),
                    c
                  );
                }
                return (
                  r(t, e),
                  (t.fromSimpleFill = function(e, r, i, s, n, a) {
                    void 0 === a && (a = !1);
                    var l = i.color,
                      h =
                        (l &&
                          "none" !== i.style &&
                          o.premultiplyAlphaRGBA(l)) ||
                        0;
                    if (!s) return new t(e, r, null, h, 0, 0, 0, a);
                    var p = s.rect,
                      c = s.width,
                      d = s.height,
                      g = p.x + 1,
                      _ = p.y + 1,
                      f = p.x + 1 + c,
                      m = p.y + 1 + d;
                    return new t(
                      e,
                      r,
                      s,
                      h,
                      u.i1616to32(g, _),
                      u.i1616to32(f, m),
                      u.i8888to32(
                        u.nextHighestPowerOfTwo(f - g),
                        u.nextHighestPowerOfTwo(m - _),
                        0,
                        0
                      ),
                      a
                    );
                  }),
                  (t.fromPictureFill = function(e, r, i, s, n, o) {
                    void 0 === o && (o = !1);
                    var l = a.PICTURE_FILL_COLOR,
                      h = s.rect,
                      p = s.width,
                      c = s.height,
                      d = h.x + 1,
                      g = h.y + 1,
                      _ = h.x + 1 + p,
                      f = h.y + 1 + c;
                    return new t(
                      e,
                      r,
                      s,
                      l,
                      u.i1616to32(d, g),
                      u.i1616to32(_, f),
                      u.i8888to32(
                        u.nextHighestPowerOfTwo(i.width),
                        u.nextHighestPowerOfTwo(i.height),
                        0,
                        0
                      ),
                      o
                    );
                  }),
                  (t.prototype.writeMesh = function(e, t, r, i, s, n, o) {
                    if (
                      ((f.length = 0),
                      this.vvFlags & h.WGLVVFlag.COLOR || 0 !== this.fillColor)
                    ) {
                      if ("esriGeometryPolygon" !== r)
                        return void _.error(
                          "Unable to handle geometryType: " + r
                        );
                      var a = s.geometry,
                        l = this._isClippingRequired(a),
                        u = l ? this._clip(a, !this.useLibtess) : a.rings;
                      return this.useLibtess
                        ? this._writeMeshLibtess(e, t, r, i, u, l, n, o)
                        : this._writeMeshEarcut(e, t, r, i, u, l, n, o);
                    }
                  }),
                  (t.prototype._isClippingRequired = function(e) {
                    for (var t = 0, r = e.rings; t < r.length; t++) {
                      var i = r[t],
                        s = i.length;
                      if (!(s < 3)) {
                        var n = i[0][0],
                          o = i[0][1];
                        if (n < -8 || n > 520 || o < -8 || o > 520) return !0;
                        for (var a = 1; a < s; ++a)
                          if (
                            ((n += i[a][0]),
                            (o += i[a][1]),
                            n < -8 || n > 520 || o < -8 || o > 520)
                          )
                            return !0;
                      }
                    }
                    return !1;
                  }),
                  (t.prototype._clip = function(e, t) {
                    var r, i;
                    this._tileClipper.reset(3);
                    for (var s = 0, n = e.rings; s < n.length; s++) {
                      var o = n[s],
                        a = o.length;
                      if (!(a < 3)) {
                        (r = o[0][0]),
                          (i = o[0][1]),
                          this._tileClipper.moveTo(r, i);
                        for (var l = 1; l < a; ++l)
                          (r += o[l][0]),
                            (i += o[l][1]),
                            this._tileClipper.lineTo(r, i);
                        this._tileClipper.close();
                      }
                    }
                    return this._tileClipper.result(t);
                  }),
                  (t.prototype._writeMeshLibtess = function(
                    e,
                    t,
                    r,
                    i,
                    s,
                    n,
                    o,
                    a
                  ) {
                    if (s && s.length) {
                      var l = this._materialStore.get(this.materialId),
                        h = [],
                        u = t.indexVector,
                        p = t.get("geometry"),
                        d = new c(i, this.geometryType, this.materialId),
                        g = this._getOffset(p, l),
                        _ = n;
                      (d.vertexFrom = g),
                        (d.indexFrom = u.length),
                        e.push(d),
                        this._tesselator.beginPolygon(f, h);
                      for (var m = 0, v = s; m < v.length; m++) {
                        var y = v[m];
                        if (!(y.length < 3)) {
                          this._tesselator.beginContour();
                          var x = void 0,
                            w = void 0;
                          _
                            ? ((x = y[0].x), (w = y[0].y))
                            : ((x = y[0][0]), (w = y[0][1]));
                          var E = [x, w, 0];
                          this._tesselator.addVertex(E, E);
                          for (var T = 1; T < y.length - 1; T++) {
                            _
                              ? ((x = y[T].x), (w = y[T].y))
                              : ((x += y[T][0]), (w += y[T][1]));
                            var L = [x, w, 0];
                            this._tesselator.addVertex(L, L);
                          }
                          this._tesselator.endContour();
                        }
                      }
                      this._tesselator.endPolygon(),
                        this._writeVerticesLibTess(d, p, i, f, l, a),
                        this._writeIndicesLibTess(d, u, g, h);
                    }
                  }),
                  (t.prototype._writeMeshEarcut = function(
                    e,
                    t,
                    r,
                    i,
                    s,
                    n,
                    o,
                    a
                  ) {
                    if (s && s.length) {
                      var l = this._materialStore.get(this.materialId),
                        h = t.indexVector,
                        u = t.get("geometry"),
                        p = new c(i, this.geometryType, this.materialId),
                        d = this._getOffset(u, l);
                      (p.vertexFrom = d), (p.indexFrom = h.length), e.push(p);
                      for (
                        var g = 0, _ = 0, v = n, y = 0, x = s;
                        y < x.length;
                        y++
                      ) {
                        var w = x[y],
                          E = _,
                          T = void 0,
                          L = void 0;
                        v
                          ? ((T = w[0].x), (L = w[0].y))
                          : ((T = w[0][0]), (L = w[0][1])),
                          (f[_++] = T),
                          (f[_++] = L);
                        for (var b = 0, S = 1; S < w.length; ++S) {
                          var G = void 0,
                            I = void 0;
                          if (v) {
                            var V = T,
                              N = L;
                            (G = (T = w[S].x) - V), (I = (L = w[S].y) - N);
                          } else (T += G = w[S][0]), (L += I = w[S][1]);
                          (b -= G * (L + L + I)), (f[_++] = T), (f[_++] = L);
                        }
                        b > 0
                          ? (E - g > 0 &&
                              (this._write(p, h, u, d, i, f, m, g, E, l, a),
                              (g = E)),
                            (m.length = 0))
                          : b < 0 && E - g > 0
                            ? m.push(0.5 * (E - g))
                            : (_ = E);
                      }
                      _ - g > 0 && this._write(p, h, u, d, i, f, m, g, _, l, a),
                        (f.length = m.length = 0);
                    }
                  }),
                  (t.prototype._write = function(
                    e,
                    t,
                    r,
                    i,
                    s,
                    o,
                    a,
                    l,
                    h,
                    u,
                    p
                  ) {
                    var c = n(o.slice(l, h), a, 2);
                    if (c.length) {
                      var d = this._getOffset(r, u);
                      this._writeVertices(e, r, s, o, a, u, p),
                        this._writeIndices(e, t, d, c);
                    }
                  }),
                  (t.prototype._getOffset = function(e, t) {
                    var r = t.materialKeyInfo.hasVV() ? 8 : 6;
                    return e.length / r;
                  }),
                  (t.prototype._writeVertices = function(e, t, r, i, s, n, o) {
                    for (var a = 0; a < i.length; a += 2) {
                      var l = u.i1616to32(i[a], i[a + 1]);
                      t.push(l),
                        t.push(r),
                        t.push(this.fillColor),
                        t.push(this.tl),
                        t.push(this.br),
                        t.push(this.aux),
                        this._writeVV(t, o, n),
                        e.vertexCount++;
                    }
                  }),
                  (t.prototype._writeIndices = function(e, t, r, i) {
                    for (var s = r, n = 0; n < i.length; n += 3)
                      t.push(s + i[n]),
                        t.push(s + i[n + 1]),
                        t.push(s + i[n + 2]),
                        (e.indexCount += 3);
                  }),
                  (t.prototype._writeVerticesLibTess = function(
                    e,
                    t,
                    r,
                    i,
                    s,
                    n
                  ) {
                    for (var o = 0; o < i.length; o += 2) {
                      var a = u.i1616to32(i[o], i[o + 1]);
                      t.push(a),
                        t.push(r),
                        t.push(this.fillColor),
                        t.push(this.tl),
                        t.push(this.br),
                        t.push(this.aux),
                        this._writeVV(t, n, s),
                        e.vertexCount++;
                    }
                  }),
                  (t.prototype._writeIndicesLibTess = function(e, t, r, i) {
                    for (var s = r, n = 0; n < i.length; n++)
                      t.push(s + i[n]), e.indexCount++;
                  }),
                  (t.prototype._writeVV = function(e, t, r) {
                    r.materialKeyInfo.hasVV() &&
                      (this.isBFS
                        ? (e.push(4294967295), e.push(4294967295))
                        : (e.push(t[l.VVType.COLOR]),
                          e.push(t[l.VVType.OPACITY])));
                  }),
                  t
                );
              })(g.default);
            t.default = v;
          }.apply(null, i)) || (e.exports = s);
    },
    2290: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(11), r(2291)]),
        void 0 ===
          (s = function(e, t, r, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = r.getLogger(
                "esri.views.2d.engine.webgl.mesh.templates.Tesselator"
              ),
              n = (function() {
                function e() {
                  (this._currentVertexIndex = 0),
                    (this._indexCounter = 0),
                    (this._triangleIndices = [-1, -1, -1]),
                    (this.glu = new i.GluTesselator()),
                    this.glu.gluTessCallback(
                      i.gluEnum.GLU_TESS_BEGIN,
                      this._begincallback.bind(this)
                    ),
                    this.glu.gluTessCallback(
                      i.gluEnum.GLU_TESS_VERTEX_DATA,
                      this._vertexCallback.bind(this)
                    ),
                    this.glu.gluTessCallback(
                      i.gluEnum.GLU_TESS_END,
                      this._endcallback.bind(this)
                    ),
                    this.glu.gluTessCallback(
                      i.gluEnum.GLU_TESS_COMBINE,
                      this._combinecallback.bind(this)
                    ),
                    this.glu.gluTessCallback(
                      i.gluEnum.GLU_TESS_ERROR,
                      this._errorcallback.bind(this)
                    ),
                    this.glu.gluTessCallback(
                      i.gluEnum.GLU_TESS_EDGE_FLAG,
                      this._edgeCallback.bind(this)
                    ),
                    this.glu.gluTessProperty(
                      i.gluEnum.GLU_TESS_WINDING_RULE,
                      i.windingRule.GLU_TESS_WINDING_ODD
                    );
                }
                return (
                  (e.prototype.beginPolygon = function(e, t) {
                    (this._triangleIndices[0] = -1),
                      (this._triangleIndices[1] = -1),
                      (this._triangleIndices[2] = -1),
                      (this._currentVertexIndex = 0),
                      (this._indexCounter = 0),
                      this.glu.gluTessBeginPolygon(e),
                      (this._indices = t);
                  }),
                  (e.prototype.endPolygon = function() {
                    this.glu.gluTessEndPolygon();
                  }),
                  (e.prototype.beginContour = function() {
                    this.glu.gluTessBeginContour();
                  }),
                  (e.prototype.endContour = function() {
                    this.glu.gluTessEndContour();
                  }),
                  (e.prototype.addVertex = function(e, t) {
                    this.glu.gluTessVertex(e, t);
                  }),
                  (e.prototype._vertexCallback = function(e, t) {
                    if (
                      ((t[t.length] = e[0]),
                      (t[t.length] = e[1]),
                      (this._triangleIndices[this._currentVertexIndex] = -1),
                      this._currentVertexIndex >= 2)
                    ) {
                      for (var r = 0; r < 3; r++)
                        -1 === this._triangleIndices[r] &&
                          (this._triangleIndices[r] = this._indexCounter++),
                          (this._indices[
                            this._indices.length
                          ] = this._triangleIndices[r]);
                      this._currentVertexIndex = 0;
                    } else this._currentVertexIndex++;
                  }),
                  (e.prototype._begincallback = function(e) {
                    (this._triangleIndices[0] = -1),
                      (this._triangleIndices[1] = -1),
                      (this._triangleIndices[2] = -1),
                      (this._currentVertexIndex = 0);
                  }),
                  (e.prototype._endcallback = function() {
                    this._currentVertexIndex = 0;
                  }),
                  (e.prototype._errorcallback = function(e) {
                    s.error("Encountered error during tesselation: " + e);
                  }),
                  (e.prototype._combinecallback = function(e, t, r) {
                    return [e[0], e[1], e[2]];
                  }),
                  (e.prototype._edgeCallback = function(e) {}),
                  e
                );
              })();
            t.default = n;
          }.apply(null, i)) || (e.exports = s);
    },
    2291: function(e, t, r) {
      var i;
      /**
       * @license
       * Copyright 2000, Silicon Graphics, Inc. All Rights Reserved.
       * Copyright 2015, Google Inc. All Rights Reserved.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to
       * deal in the Software without restriction, including without limitation the
       * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
       * sell copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice including the dates of first publication and
       * either this permission notice or a reference to http://oss.sgi.com/projects/FreeB/
       * shall be included in all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
       * SILICON GRAPHICS, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
       * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
       * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       *
       * Original Code. The Original Code is: OpenGL Sample Implementation,
       * Version 1.2.1, released January 26, 2000, developed by Silicon Graphics,
       * Inc. The Original Code is Copyright (c) 1991-2000 Silicon Graphics, Inc.
       * Copyright in any portions created by third parties is as indicated
       * elsewhere herein. All Rights Reserved.
       */ void 0 ===
        (i = function() {
          "use strict";
          var e = {
            DEBUG: !1,
            assert: function(t, r) {
              if (e.DEBUG && !t)
                throw new Error("Assertion failed" + (r ? ": " + r : ""));
            },
            GLU_TESS_MAX_COORD: 1e150,
            TRUE_PROJECT: !1,
            GLU_TESS_DEFAULT_TOLERANCE: 0,
            windingRule: {
              GLU_TESS_WINDING_ODD: 100130,
              GLU_TESS_WINDING_NONZERO: 100131,
              GLU_TESS_WINDING_POSITIVE: 100132,
              GLU_TESS_WINDING_NEGATIVE: 100133,
              GLU_TESS_WINDING_ABS_GEQ_TWO: 100134
            },
            primitiveType: {
              GL_LINE_LOOP: 2,
              GL_TRIANGLES: 4,
              GL_TRIANGLE_STRIP: 5,
              GL_TRIANGLE_FAN: 6
            },
            errorType: {
              GLU_TESS_MISSING_BEGIN_POLYGON: 100151,
              GLU_TESS_MISSING_END_POLYGON: 100153,
              GLU_TESS_MISSING_BEGIN_CONTOUR: 100152,
              GLU_TESS_MISSING_END_CONTOUR: 100154,
              GLU_TESS_COORD_TOO_LARGE: 100155,
              GLU_TESS_NEED_COMBINE_CALLBACK: 100156
            },
            gluEnum: {
              GLU_TESS_BEGIN: 100100,
              GLU_TESS_VERTEX: 100101,
              GLU_TESS_END: 100102,
              GLU_TESS_ERROR: 100103,
              GLU_TESS_EDGE_FLAG: 100104,
              GLU_TESS_COMBINE: 100105,
              GLU_TESS_BEGIN_DATA: 100106,
              GLU_TESS_VERTEX_DATA: 100107,
              GLU_TESS_END_DATA: 100108,
              GLU_TESS_ERROR_DATA: 100109,
              GLU_TESS_EDGE_FLAG_DATA: 100110,
              GLU_TESS_COMBINE_DATA: 100111,
              GLU_TESS_MESH: 100112,
              GLU_TESS_TOLERANCE: 100142,
              GLU_TESS_WINDING_RULE: 100140,
              GLU_TESS_BOUNDARY_ONLY: 100141,
              GLU_INVALID_ENUM: 100900,
              GLU_INVALID_VALUE: 100901
            }
          };
          return (
            e.PQHandle,
            (e.geom = {}),
            (e.geom.vertEq = function(e, t) {
              return e.s === t.s && e.t === t.t;
            }),
            (e.geom.vertLeq = function(e, t) {
              return e.s < t.s || (e.s === t.s && e.t <= t.t);
            }),
            (e.geom.edgeEval = function(t, r, i) {
              e.assert(e.geom.vertLeq(t, r) && e.geom.vertLeq(r, i));
              var s = r.s - t.s,
                n = i.s - r.s;
              return s + n > 0
                ? s < n
                  ? r.t - t.t + (t.t - i.t) * (s / (s + n))
                  : r.t - i.t + (i.t - t.t) * (n / (s + n))
                : 0;
            }),
            (e.geom.edgeSign = function(t, r, i) {
              e.assert(e.geom.vertLeq(t, r) && e.geom.vertLeq(r, i));
              var s = r.s - t.s,
                n = i.s - r.s;
              return s + n > 0 ? (r.t - i.t) * s + (r.t - t.t) * n : 0;
            }),
            (e.geom.transLeq = function(e, t) {
              return e.t < t.t || (e.t === t.t && e.s <= t.s);
            }),
            (e.geom.transEval = function(t, r, i) {
              e.assert(e.geom.transLeq(t, r) && e.geom.transLeq(r, i));
              var s = r.t - t.t,
                n = i.t - r.t;
              return s + n > 0
                ? s < n
                  ? r.s - t.s + (t.s - i.s) * (s / (s + n))
                  : r.s - i.s + (i.s - t.s) * (n / (s + n))
                : 0;
            }),
            (e.geom.transSign = function(t, r, i) {
              e.assert(e.geom.transLeq(t, r) && e.geom.transLeq(r, i));
              var s = r.t - t.t,
                n = i.t - r.t;
              return s + n > 0 ? (r.s - i.s) * s + (r.s - t.s) * n : 0;
            }),
            (e.geom.edgeGoesLeft = function(t) {
              return e.geom.vertLeq(t.dst(), t.org);
            }),
            (e.geom.edgeGoesRight = function(t) {
              return e.geom.vertLeq(t.org, t.dst());
            }),
            (e.geom.vertL1dist = function(e, t) {
              return Math.abs(e.s - t.s) + Math.abs(e.t - t.t);
            }),
            (e.geom.vertCCW = function(e, t, r) {
              return (
                e.s * (t.t - r.t) + t.s * (r.t - e.t) + r.s * (e.t - t.t) >= 0
              );
            }),
            (e.geom.interpolate_ = function(e, t, r, i) {
              return (e = e < 0 ? 0 : e) <= (r = r < 0 ? 0 : r)
                ? 0 === r
                  ? (t + i) / 2
                  : t + (e / (e + r)) * (i - t)
                : i + (r / (e + r)) * (t - i);
            }),
            (e.geom.edgeIntersect = function(t, r, i, s, n) {
              var o, a, l;
              e.geom.vertLeq(t, r) || ((l = t), (t = r), (r = l)),
                e.geom.vertLeq(i, s) || ((l = i), (i = s), (s = l)),
                e.geom.vertLeq(t, i) ||
                  ((l = t), (t = i), (i = l), (l = r), (r = s), (s = l)),
                e.geom.vertLeq(i, r)
                  ? e.geom.vertLeq(r, s)
                    ? ((o = e.geom.edgeEval(t, i, r)) +
                        (a = e.geom.edgeEval(i, r, s)) <
                        0 && ((o = -o), (a = -a)),
                      (n.s = e.geom.interpolate_(o, i.s, a, r.s)))
                    : ((o = e.geom.edgeSign(t, i, r)) +
                        (a = -e.geom.edgeSign(t, s, r)) <
                        0 && ((o = -o), (a = -a)),
                      (n.s = e.geom.interpolate_(o, i.s, a, s.s)))
                  : (n.s = (i.s + r.s) / 2),
                e.geom.transLeq(t, r) || ((l = t), (t = r), (r = l)),
                e.geom.transLeq(i, s) || ((l = i), (i = s), (s = l)),
                e.geom.transLeq(t, i) ||
                  ((l = t), (t = i), (i = l), (l = r), (r = s), (s = l)),
                e.geom.transLeq(i, r)
                  ? e.geom.transLeq(r, s)
                    ? ((o = e.geom.transEval(t, i, r)) +
                        (a = e.geom.transEval(i, r, s)) <
                        0 && ((o = -o), (a = -a)),
                      (n.t = e.geom.interpolate_(o, i.t, a, r.t)))
                    : ((o = e.geom.transSign(t, i, r)) +
                        (a = -e.geom.transSign(t, s, r)) <
                        0 && ((o = -o), (a = -a)),
                      (n.t = e.geom.interpolate_(o, i.t, a, s.t)))
                  : (n.t = (i.t + r.t) / 2);
            }),
            (e.mesh = {}),
            (e.mesh.makeEdge = function(t) {
              var r = e.mesh.makeEdgePair_(t.eHead);
              return (
                e.mesh.makeVertex_(r, t.vHead),
                e.mesh.makeVertex_(r.sym, t.vHead),
                e.mesh.makeFace_(r, t.fHead),
                r
              );
            }),
            (e.mesh.meshSplice = function(t, r) {
              var i = !1,
                s = !1;
              t !== r &&
                (r.org !== t.org &&
                  ((s = !0), e.mesh.killVertex_(r.org, t.org)),
                r.lFace !== t.lFace &&
                  ((i = !0), e.mesh.killFace_(r.lFace, t.lFace)),
                e.mesh.splice_(r, t),
                s || (e.mesh.makeVertex_(r, t.org), (t.org.anEdge = t)),
                i || (e.mesh.makeFace_(r, t.lFace), (t.lFace.anEdge = t)));
            }),
            (e.mesh.deleteEdge = function(t) {
              var r = t.sym,
                i = !1;
              t.lFace !== t.rFace() &&
                ((i = !0), e.mesh.killFace_(t.lFace, t.rFace())),
                t.oNext === t
                  ? e.mesh.killVertex_(t.org, null)
                  : ((t.rFace().anEdge = t.oPrev()),
                    (t.org.anEdge = t.oNext),
                    e.mesh.splice_(t, t.oPrev()),
                    i || e.mesh.makeFace_(t, t.lFace)),
                r.oNext === r
                  ? (e.mesh.killVertex_(r.org, null),
                    e.mesh.killFace_(r.lFace, null))
                  : ((t.lFace.anEdge = r.oPrev()),
                    (r.org.anEdge = r.oNext),
                    e.mesh.splice_(r, r.oPrev())),
                e.mesh.killEdge_(t);
            }),
            (e.mesh.addEdgeVertex = function(t) {
              var r = e.mesh.makeEdgePair_(t),
                i = r.sym;
              return (
                e.mesh.splice_(r, t.lNext),
                (r.org = t.dst()),
                e.mesh.makeVertex_(i, r.org),
                (r.lFace = i.lFace = t.lFace),
                r
              );
            }),
            (e.mesh.splitEdge = function(t) {
              var r = e.mesh.addEdgeVertex(t).sym;
              return (
                e.mesh.splice_(t.sym, t.sym.oPrev()),
                e.mesh.splice_(t.sym, r),
                (t.sym.org = r.org),
                (r.dst().anEdge = r.sym),
                (r.sym.lFace = t.rFace()),
                (r.winding = t.winding),
                (r.sym.winding = t.sym.winding),
                r
              );
            }),
            (e.mesh.connect = function(t, r) {
              var i = !1,
                s = e.mesh.makeEdgePair_(t),
                n = s.sym;
              return (
                r.lFace !== t.lFace &&
                  ((i = !0), e.mesh.killFace_(r.lFace, t.lFace)),
                e.mesh.splice_(s, t.lNext),
                e.mesh.splice_(n, r),
                (s.org = t.dst()),
                (n.org = r.org),
                (s.lFace = n.lFace = t.lFace),
                (t.lFace.anEdge = n),
                i || e.mesh.makeFace_(s, t.lFace),
                s
              );
            }),
            (e.mesh.zapFace = function(t) {
              var r,
                i = t.anEdge,
                s = i.lNext;
              do {
                if (
                  ((s = (r = s).lNext), (r.lFace = null), null === r.rFace())
                ) {
                  r.oNext === r
                    ? e.mesh.killVertex_(r.org, null)
                    : ((r.org.anEdge = r.oNext), e.mesh.splice_(r, r.oPrev()));
                  var n = r.sym;
                  n.oNext === n
                    ? e.mesh.killVertex_(n.org, null)
                    : ((n.org.anEdge = n.oNext), e.mesh.splice_(n, n.oPrev())),
                    e.mesh.killEdge_(r);
                }
              } while (r !== i);
              var o = t.prev,
                a = t.next;
              (a.prev = o), (o.next = a);
            }),
            (e.mesh.meshUnion = function(e, t) {
              var r = e.fHead,
                i = e.vHead,
                s = e.eHead,
                n = t.fHead,
                o = t.vHead,
                a = t.eHead;
              return (
                n.next !== n &&
                  ((r.prev.next = n.next),
                  (n.next.prev = r.prev),
                  (n.prev.next = r),
                  (r.prev = n.prev)),
                o.next !== o &&
                  ((i.prev.next = o.next),
                  (o.next.prev = i.prev),
                  (o.prev.next = i),
                  (i.prev = o.prev)),
                a.next !== a &&
                  ((s.sym.next.sym.next = a.next),
                  (a.next.sym.next = s.sym.next),
                  (a.sym.next.sym.next = s),
                  (s.sym.next = a.sym.next)),
                e
              );
            }),
            (e.mesh.deleteMesh = function(e) {}),
            (e.mesh.makeEdgePair_ = function(t) {
              var r = new e.GluHalfEdge(),
                i = new e.GluHalfEdge(),
                s = t.sym.next;
              return (
                (i.next = s),
                (s.sym.next = r),
                (r.next = t),
                (t.sym.next = i),
                (r.sym = i),
                (r.oNext = r),
                (r.lNext = i),
                (i.sym = r),
                (i.oNext = i),
                (i.lNext = r),
                r
              );
            }),
            (e.mesh.splice_ = function(e, t) {
              var r = e.oNext,
                i = t.oNext;
              (r.sym.lNext = t),
                (i.sym.lNext = e),
                (e.oNext = i),
                (t.oNext = r);
            }),
            (e.mesh.makeVertex_ = function(t, r) {
              var i = r.prev,
                s = new e.GluVertex(r, i);
              (i.next = s), (r.prev = s), (s.anEdge = t);
              var n = t;
              do {
                (n.org = s), (n = n.oNext);
              } while (n !== t);
            }),
            (e.mesh.makeFace_ = function(t, r) {
              var i = r.prev,
                s = new e.GluFace(r, i);
              (i.next = s), (r.prev = s), (s.anEdge = t), (s.inside = r.inside);
              var n = t;
              do {
                (n.lFace = s), (n = n.lNext);
              } while (n !== t);
            }),
            (e.mesh.killEdge_ = function(e) {
              var t = e.next,
                r = e.sym.next;
              (t.sym.next = r), (r.sym.next = t);
            }),
            (e.mesh.killVertex_ = function(e, t) {
              var r = e.anEdge,
                i = r;
              do {
                (i.org = t), (i = i.oNext);
              } while (i !== r);
              var s = e.prev,
                n = e.next;
              (n.prev = s), (s.next = n);
            }),
            (e.mesh.killFace_ = function(e, t) {
              var r = e.anEdge,
                i = r;
              do {
                (i.lFace = t), (i = i.lNext);
              } while (i !== r);
              var s = e.prev,
                n = e.next;
              (n.prev = s), (s.next = n);
            }),
            (e.normal = {}),
            (e.normal.S_UNIT_X_ = 1),
            (e.normal.S_UNIT_Y_ = 0),
            (e.normal.projectPolygon = function(t, r, i, s) {
              var n = !1,
                o = [r, i, s];
              0 === r &&
                0 === i &&
                0 === s &&
                (e.normal.computeNormal_(t, o), (n = !0));
              var a,
                l = e.normal.longAxis_(o),
                h = t.mesh.vHead;
              if (e.TRUE_PROJECT) {
                e.normal.normalize_(o);
                var u = [0, 0, 0],
                  p = [0, 0, 0];
                (u[l] = 0),
                  (u[(l + 1) % 3] = e.normal.S_UNIT_X_),
                  (u[(l + 2) % 3] = e.normal.S_UNIT_Y_);
                var c = e.normal.dot_(u, o);
                for (
                  u[0] -= c * o[0],
                    u[1] -= c * o[1],
                    u[2] -= c * o[2],
                    e.normal.normalize_(u),
                    p[0] = o[1] * u[2] - o[2] * u[1],
                    p[1] = o[2] * u[0] - o[0] * u[2],
                    p[2] = o[0] * u[1] - o[1] * u[0],
                    e.normal.normalize_(p),
                    a = h.next;
                  a !== h;
                  a = a.next
                )
                  (a.s = e.normal.dot_(a.coords, u)),
                    (a.t = e.normal.dot_(a.coords, p));
              } else {
                var d = (l + 1) % 3,
                  g = (l + 2) % 3,
                  _ = o[l] > 0 ? 1 : -1;
                for (a = h.next; a !== h; a = a.next)
                  (a.s = a.coords[d]), (a.t = _ * a.coords[g]);
              }
              n && e.normal.checkOrientation_(t);
            }),
            (e.normal.dot_ = function(e, t) {
              return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
            }),
            (e.normal.normalize_ = function(t) {
              var r = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
              e.assert(r > 0),
                (r = Math.sqrt(r)),
                (t[0] /= r),
                (t[1] /= r),
                (t[2] /= r);
            }),
            (e.normal.longAxis_ = function(e) {
              var t = 0;
              return (
                Math.abs(e[1]) > Math.abs(e[0]) && (t = 1),
                Math.abs(e[2]) > Math.abs(e[t]) && (t = 2),
                t
              );
            }),
            (e.normal.computeNormal_ = function(t, r) {
              var i,
                s = [
                  -2 * e.GLU_TESS_MAX_COORD,
                  -2 * e.GLU_TESS_MAX_COORD,
                  -2 * e.GLU_TESS_MAX_COORD
                ],
                n = [
                  2 * e.GLU_TESS_MAX_COORD,
                  2 * e.GLU_TESS_MAX_COORD,
                  2 * e.GLU_TESS_MAX_COORD
                ],
                o = [],
                a = [],
                l = t.mesh.vHead;
              for (i = l.next; i !== l; i = i.next)
                for (var h = 0; h < 3; ++h) {
                  var u = i.coords[h];
                  u < n[h] && ((n[h] = u), (a[h] = i)),
                    u > s[h] && ((s[h] = u), (o[h] = i));
                }
              var p = 0;
              if (
                (s[1] - n[1] > s[0] - n[0] && (p = 1),
                s[2] - n[2] > s[p] - n[p] && (p = 2),
                n[p] >= s[p])
              )
                return (r[0] = 0), (r[1] = 0), void (r[2] = 1);
              var c = 0,
                d = a[p],
                g = o[p],
                _ = [0, 0, 0],
                f = [
                  d.coords[0] - g.coords[0],
                  d.coords[1] - g.coords[1],
                  d.coords[2] - g.coords[2]
                ],
                m = [0, 0, 0];
              for (i = l.next; i !== l; i = i.next) {
                (m[0] = i.coords[0] - g.coords[0]),
                  (m[1] = i.coords[1] - g.coords[1]),
                  (m[2] = i.coords[2] - g.coords[2]),
                  (_[0] = f[1] * m[2] - f[2] * m[1]),
                  (_[1] = f[2] * m[0] - f[0] * m[2]),
                  (_[2] = f[0] * m[1] - f[1] * m[0]);
                var v = _[0] * _[0] + _[1] * _[1] + _[2] * _[2];
                v > c && ((c = v), (r[0] = _[0]), (r[1] = _[1]), (r[2] = _[2]));
              }
              c <= 0 &&
                ((r[0] = r[1] = r[2] = 0), (r[e.normal.longAxis_(f)] = 1));
            }),
            (e.normal.checkOrientation_ = function(e) {
              for (
                var t = 0, r = e.mesh.fHead, i = r.next;
                i !== r;
                i = i.next
              ) {
                var s = i.anEdge;
                if (!(s.winding <= 0))
                  do {
                    (t += (s.org.s - s.dst().s) * (s.org.t + s.dst().t)),
                      (s = s.lNext);
                  } while (s !== i.anEdge);
              }
              if (t < 0)
                for (var n = e.mesh.vHead, o = n.next; o !== n; o = o.next)
                  o.t = -o.t;
            }),
            (e.render = {}),
            (e.render.renderMesh = function(t, r, i) {
              for (
                var s = !1, n = -1, o = r.fHead.prev;
                o !== r.fHead;
                o = o.prev
              )
                if (o.inside) {
                  s ||
                    (t.callBeginCallback(e.primitiveType.GL_TRIANGLES),
                    (s = !0));
                  var a = o.anEdge;
                  e.assert(
                    a.lNext.lNext.lNext === a,
                    "renderMesh called with non-triangulated mesh"
                  );
                  do {
                    if (i) {
                      var l = a.rFace().inside ? 0 : 1;
                      n !== l && ((n = l), t.callEdgeFlagCallback(!!n));
                    }
                    t.callVertexCallback(a.org.data), (a = a.lNext);
                  } while (a !== o.anEdge);
                }
              s && t.callEndCallback();
            }),
            (e.render.renderBoundary = function(t, r) {
              for (var i = r.fHead.next; i !== r.fHead; i = i.next)
                if (i.inside) {
                  t.callBeginCallback(e.primitiveType.GL_LINE_LOOP);
                  var s = i.anEdge;
                  do {
                    t.callVertexCallback(s.org.data), (s = s.lNext);
                  } while (s !== i.anEdge);
                  t.callEndCallback();
                }
            }),
            (e.sweep = {}),
            (e.sweep.SENTINEL_COORD_ = 4 * e.GLU_TESS_MAX_COORD),
            (e.sweep.TOLERANCE_NONZERO_ = !1),
            (e.sweep.computeInterior = function(t) {
              (t.fatalError = !1),
                e.sweep.removeDegenerateEdges_(t),
                e.sweep.initPriorityQ_(t),
                e.sweep.initEdgeDict_(t);
              for (var r; null !== (r = t.pq.extractMin()); ) {
                for (;;) {
                  var i = t.pq.minimum();
                  if (null === i || !e.geom.vertEq(i, r)) break;
                  (i = t.pq.extractMin()),
                    e.sweep.spliceMergeVertices_(t, r.anEdge, i.anEdge);
                }
                e.sweep.sweepEvent_(t, r);
              }
              var s = t.dict.getMin().getKey();
              (t.event = s.eUp.org),
                e.sweep.doneEdgeDict_(t),
                e.sweep.donePriorityQ_(t),
                e.sweep.removeDegenerateFaces_(t.mesh),
                t.mesh.checkMesh();
            }),
            (e.sweep.addWinding_ = function(e, t) {
              (e.winding += t.winding), (e.sym.winding += t.sym.winding);
            }),
            (e.sweep.edgeLeq_ = function(t, r, i) {
              var s = t.event,
                n = r.eUp,
                o = i.eUp;
              return n.dst() === s
                ? o.dst() === s
                  ? e.geom.vertLeq(n.org, o.org)
                    ? e.geom.edgeSign(o.dst(), n.org, o.org) <= 0
                    : e.geom.edgeSign(n.dst(), o.org, n.org) >= 0
                  : e.geom.edgeSign(o.dst(), s, o.org) <= 0
                : o.dst() === s
                  ? e.geom.edgeSign(n.dst(), s, n.org) >= 0
                  : e.geom.edgeEval(n.dst(), s, n.org) >=
                    e.geom.edgeEval(o.dst(), s, o.org);
            }),
            (e.sweep.deleteRegion_ = function(t, r) {
              r.fixUpperEdge && e.assert(0 === r.eUp.winding),
                (r.eUp.activeRegion = null),
                t.dict.deleteNode(r.nodeUp),
                (r.nodeUp = null);
            }),
            (e.sweep.fixUpperEdge_ = function(t, r) {
              e.assert(t.fixUpperEdge),
                e.mesh.deleteEdge(t.eUp),
                (t.fixUpperEdge = !1),
                (t.eUp = r),
                (r.activeRegion = t);
            }),
            (e.sweep.topLeftRegion_ = function(t) {
              var r = t.eUp.org;
              do {
                t = t.regionAbove();
              } while (t.eUp.org === r);
              if (t.fixUpperEdge) {
                var i = e.mesh.connect(
                  t.regionBelow().eUp.sym,
                  t.eUp.lNext
                );
                e.sweep.fixUpperEdge_(t, i), (t = t.regionAbove());
              }
              return t;
            }),
            (e.sweep.topRightRegion_ = function(e) {
              var t = e.eUp.dst();
              do {
                e = e.regionAbove();
              } while (e.eUp.dst() === t);
              return e;
            }),
            (e.sweep.addRegionBelow_ = function(t, r, i) {
              var s = new e.ActiveRegion();
              return (
                (s.eUp = i),
                (s.nodeUp = t.dict.insertBefore(r.nodeUp, s)),
                (i.activeRegion = s),
                s
              );
            }),
            (e.sweep.isWindingInside_ = function(t, r) {
              switch (t.windingRule) {
                case e.windingRule.GLU_TESS_WINDING_ODD:
                  return 0 != (1 & r);
                case e.windingRule.GLU_TESS_WINDING_NONZERO:
                  return 0 !== r;
                case e.windingRule.GLU_TESS_WINDING_POSITIVE:
                  return r > 0;
                case e.windingRule.GLU_TESS_WINDING_NEGATIVE:
                  return r < 0;
                case e.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO:
                  return r >= 2 || r <= -2;
              }
              return e.assert(!1), !1;
            }),
            (e.sweep.computeWinding_ = function(t, r) {
              (r.windingNumber = r.regionAbove().windingNumber + r.eUp.winding),
                (r.inside = e.sweep.isWindingInside_(t, r.windingNumber));
            }),
            (e.sweep.finishRegion_ = function(t, r) {
              var i = r.eUp,
                s = i.lFace;
              (s.inside = r.inside),
                (s.anEdge = i),
                e.sweep.deleteRegion_(t, r);
            }),
            (e.sweep.finishLeftRegions_ = function(t, r, i) {
              for (var s = r, n = r.eUp; s !== i; ) {
                s.fixUpperEdge = !1;
                var o = s.regionBelow(),
                  a = o.eUp;
                if (a.org !== n.org) {
                  if (!o.fixUpperEdge) {
                    e.sweep.finishRegion_(t, s);
                    break;
                  }
                  (a = e.mesh.connect(
                    n.lPrev(),
                    a.sym
                  )),
                    e.sweep.fixUpperEdge_(o, a);
                }
                n.oNext !== a &&
                  (e.mesh.meshSplice(a.oPrev(), a), e.mesh.meshSplice(n, a)),
                  e.sweep.finishRegion_(t, s),
                  (n = o.eUp),
                  (s = o);
              }
              return n;
            }),
            (e.sweep.addRightEdges_ = function(t, r, i, s, n, o) {
              var a = !0,
                l = i;
              do {
                e.assert(e.geom.vertLeq(l.org, l.dst())),
                  e.sweep.addRegionBelow_(t, r, l.sym),
                  (l = l.oNext);
              } while (l !== s);
              null === n && (n = r.regionBelow().eUp.rPrev());
              for (
                var h, u = r, p = n;
                (l = (h = u.regionBelow()).eUp.sym).org === p.org;

              )
                l.oNext !== p &&
                  (e.mesh.meshSplice(l.oPrev(), l),
                  e.mesh.meshSplice(p.oPrev(), l)),
                  (h.windingNumber = u.windingNumber - l.winding),
                  (h.inside = e.sweep.isWindingInside_(t, h.windingNumber)),
                  (u.dirty = !0),
                  !a &&
                    e.sweep.checkForRightSplice_(t, u) &&
                    (e.sweep.addWinding_(l, p),
                    e.sweep.deleteRegion_(t, u),
                    e.mesh.deleteEdge(p)),
                  (a = !1),
                  (u = h),
                  (p = l);
              (u.dirty = !0),
                e.assert(u.windingNumber - l.winding === h.windingNumber),
                o && e.sweep.walkDirtyRegions_(t, u);
            }),
            (e.sweep.callCombine_ = function(t, r, i, s, n) {
              var o = [r.coords[0], r.coords[1], r.coords[2]];
              (r.data = null),
                (r.data = t.callCombineCallback(o, i, s)),
                null === r.data &&
                  (n
                    ? t.fatalError ||
                      (t.callErrorCallback(
                        e.errorType.GLU_TESS_NEED_COMBINE_CALLBACK
                      ),
                      (t.fatalError = !0))
                    : (r.data = i[0]));
            }),
            (e.sweep.spliceMergeVertices_ = function(t, r, i) {
              var s = [null, null, null, null];
              (s[0] = r.org.data),
                (s[1] = i.org.data),
                e.sweep.callCombine_(t, r.org, s, [0.5, 0.5, 0, 0], !1),
                e.mesh.meshSplice(r, i);
            }),
            (e.sweep.vertexWeights_ = function(t, r, i, s, n) {
              var o = e.geom.vertL1dist(r, t),
                a = e.geom.vertL1dist(i, t),
                l = n,
                h = n + 1;
              (s[l] = (0.5 * a) / (o + a)),
                (s[h] = (0.5 * o) / (o + a)),
                (t.coords[0] += s[l] * r.coords[0] + s[h] * i.coords[0]),
                (t.coords[1] += s[l] * r.coords[1] + s[h] * i.coords[1]),
                (t.coords[2] += s[l] * r.coords[2] + s[h] * i.coords[2]);
            }),
            (e.sweep.getIntersectData_ = function(t, r, i, s, n, o) {
              var a = [0, 0, 0, 0],
                l = [i.data, s.data, n.data, o.data];
              (r.coords[0] = r.coords[1] = r.coords[2] = 0),
                e.sweep.vertexWeights_(r, i, s, a, 0),
                e.sweep.vertexWeights_(r, n, o, a, 2),
                e.sweep.callCombine_(t, r, l, a, !0);
            }),
            (e.sweep.checkForRightSplice_ = function(t, r) {
              var i = r.regionBelow(),
                s = r.eUp,
                n = i.eUp;
              if (e.geom.vertLeq(s.org, n.org)) {
                if (e.geom.edgeSign(n.dst(), s.org, n.org) > 0) return !1;
                e.geom.vertEq(s.org, n.org)
                  ? s.org !== n.org &&
                    (t.pq.remove(s.org.pqHandle),
                    e.sweep.spliceMergeVertices_(t, n.oPrev(), s))
                  : (e.mesh.splitEdge(n.sym),
                    e.mesh.meshSplice(s, n.oPrev()),
                    (r.dirty = i.dirty = !0));
              } else {
                if (e.geom.edgeSign(s.dst(), n.org, s.org) < 0) return !1;
                (r.regionAbove().dirty = r.dirty = !0),
                  e.mesh.splitEdge(s.sym),
                  e.mesh.meshSplice(n.oPrev(), s);
              }
              return !0;
            }),
            (e.sweep.checkForLeftSplice_ = function(t, r) {
              var i,
                s = r.regionBelow(),
                n = r.eUp,
                o = s.eUp;
              if (
                (e.assert(!e.geom.vertEq(n.dst(), o.dst())),
                e.geom.vertLeq(n.dst(), o.dst()))
              ) {
                if (e.geom.edgeSign(n.dst(), o.dst(), n.org) < 0) return !1;
                (r.regionAbove().dirty = r.dirty = !0),
                  (i = e.mesh.splitEdge(n)),
                  e.mesh.meshSplice(o.sym, i),
                  (i.lFace.inside = r.inside);
              } else {
                if (e.geom.edgeSign(o.dst(), n.dst(), o.org) > 0) return !1;
                (r.dirty = s.dirty = !0),
                  (i = e.mesh.splitEdge(o)),
                  e.mesh.meshSplice(n.lNext, o.sym),
                  (i.rFace().inside = r.inside);
              }
              return !0;
            }),
            (e.sweep.checkForIntersect_ = function(t, r) {
              var i = r.regionBelow(),
                s = r.eUp,
                n = i.eUp,
                o = s.org,
                a = n.org,
                l = s.dst(),
                h = n.dst(),
                u = new e.GluVertex();
              if (
                (e.assert(!e.geom.vertEq(h, l)),
                e.assert(e.geom.edgeSign(l, t.event, o) <= 0),
                e.assert(e.geom.edgeSign(h, t.event, a) >= 0),
                e.assert(o !== t.event && a !== t.event),
                e.assert(!r.fixUpperEdge && !i.fixUpperEdge),
                o === a)
              )
                return !1;
              if (Math.min(o.t, l.t) > Math.max(a.t, h.t)) return !1;
              if (e.geom.vertLeq(o, a)) {
                if (e.geom.edgeSign(h, o, a) > 0) return !1;
              } else if (e.geom.edgeSign(l, a, o) < 0) return !1;
              e.geom.edgeIntersect(l, o, h, a, u),
                e.assert(Math.min(o.t, l.t) <= u.t),
                e.assert(u.t <= Math.max(a.t, h.t)),
                e.assert(Math.min(h.s, l.s) <= u.s),
                e.assert(u.s <= Math.max(a.s, o.s)),
                e.geom.vertLeq(u, t.event) &&
                  ((u.s = t.event.s), (u.t = t.event.t));
              var p = e.geom.vertLeq(o, a) ? o : a;
              if (
                (e.geom.vertLeq(p, u) && ((u.s = p.s), (u.t = p.t)),
                e.geom.vertEq(u, o) || e.geom.vertEq(u, a))
              )
                return e.sweep.checkForRightSplice_(t, r), !1;
              if (
                (!e.geom.vertEq(l, t.event) &&
                  e.geom.edgeSign(l, t.event, u) >= 0) ||
                (!e.geom.vertEq(h, t.event) &&
                  e.geom.edgeSign(h, t.event, u) <= 0)
              ) {
                if (h === t.event)
                  return (
                    e.mesh.splitEdge(s.sym),
                    e.mesh.meshSplice(n.sym, s),
                    (s = (r = e.sweep.topLeftRegion_(r)).regionBelow().eUp),
                    e.sweep.finishLeftRegions_(t, r.regionBelow(), i),
                    e.sweep.addRightEdges_(t, r, s.oPrev(), s, s, !0),
                    !0
                  );
                if (l === t.event) {
                  e.mesh.splitEdge(n.sym),
                    e.mesh.meshSplice(s.lNext, n.oPrev()),
                    (i = r);
                  var c = (r = e.sweep.topRightRegion_(r))
                    .regionBelow()
                    .eUp.rPrev();
                  return (
                    (i.eUp = n.oPrev()),
                    (n = e.sweep.finishLeftRegions_(t, i, null)),
                    e.sweep.addRightEdges_(t, r, n.oNext, s.rPrev(), c, !0),
                    !0
                  );
                }
                return (
                  e.geom.edgeSign(l, t.event, u) >= 0 &&
                    ((r.regionAbove().dirty = r.dirty = !0),
                    e.mesh.splitEdge(s.sym),
                    (s.org.s = t.event.s),
                    (s.org.t = t.event.t)),
                  e.geom.edgeSign(h, t.event, u) <= 0 &&
                    ((r.dirty = i.dirty = !0),
                    e.mesh.splitEdge(n.sym),
                    (n.org.s = t.event.s),
                    (n.org.t = t.event.t)),
                  !1
                );
              }
              return (
                e.mesh.splitEdge(s.sym),
                e.mesh.splitEdge(n.sym),
                e.mesh.meshSplice(n.oPrev(), s),
                (s.org.s = u.s),
                (s.org.t = u.t),
                (s.org.pqHandle = t.pq.insert(s.org)),
                e.sweep.getIntersectData_(t, s.org, o, l, a, h),
                (r.regionAbove().dirty = r.dirty = i.dirty = !0),
                !1
              );
            }),
            (e.sweep.walkDirtyRegions_ = function(t, r) {
              for (var i = r.regionBelow(); ; ) {
                for (; i.dirty; ) (r = i), (i = i.regionBelow());
                if (
                  !r.dirty &&
                  ((i = r), null === (r = r.regionAbove()) || !r.dirty)
                )
                  return;
                r.dirty = !1;
                var s = r.eUp,
                  n = i.eUp;
                if (
                  (s.dst() !== n.dst() &&
                    e.sweep.checkForLeftSplice_(t, r) &&
                    (i.fixUpperEdge
                      ? (e.sweep.deleteRegion_(t, i),
                        e.mesh.deleteEdge(n),
                        (n = (i = r.regionBelow()).eUp))
                      : r.fixUpperEdge &&
                        (e.sweep.deleteRegion_(t, r),
                        e.mesh.deleteEdge(s),
                        (s = (r = i.regionAbove()).eUp))),
                  s.org !== n.org)
                )
                  if (
                    s.dst() === n.dst() ||
                    r.fixUpperEdge ||
                    i.fixUpperEdge ||
                    (s.dst() !== t.event && n.dst() !== t.event)
                  )
                    e.sweep.checkForRightSplice_(t, r);
                  else if (e.sweep.checkForIntersect_(t, r)) return;
                s.org === n.org &&
                  s.dst() === n.dst() &&
                  (e.sweep.addWinding_(n, s),
                  e.sweep.deleteRegion_(t, r),
                  e.mesh.deleteEdge(s),
                  (r = i.regionAbove()));
              }
            }),
            (e.sweep.connectRightVertex_ = function(t, r, i) {
              var s,
                n = i.oNext,
                o = r.regionBelow(),
                a = r.eUp,
                l = o.eUp,
                h = !1;
              (a.dst() !== l.dst() && e.sweep.checkForIntersect_(t, r),
              e.geom.vertEq(a.org, t.event) &&
                (e.mesh.meshSplice(n.oPrev(), a),
                (n = (r = e.sweep.topLeftRegion_(r)).regionBelow().eUp),
                e.sweep.finishLeftRegions_(t, r.regionBelow(), o),
                (h = !0)),
              e.geom.vertEq(l.org, t.event) &&
                (e.mesh.meshSplice(i, l.oPrev()),
                (i = e.sweep.finishLeftRegions_(t, o, null)),
                (h = !0)),
              h)
                ? e.sweep.addRightEdges_(t, r, i.oNext, n, n, !0)
                : ((s = e.geom.vertLeq(l.org, a.org) ? l.oPrev() : a),
                  (s = e.mesh.connect(
                    i.lPrev(),
                    s
                  )),
                  e.sweep.addRightEdges_(t, r, s, s.oNext, s.oNext, !1),
                  (s.sym.activeRegion.fixUpperEdge = !0),
                  e.sweep.walkDirtyRegions_(t, r));
            }),
            (e.sweep.connectLeftDegenerate_ = function(t, r, i) {
              var s = r.eUp;
              if (e.geom.vertEq(s.org, i))
                return (
                  e.assert(e.sweep.TOLERANCE_NONZERO_),
                  void (
                    e.sweep.TOLERANCE_NONZERO_ &&
                    e.sweep.spliceMergeVertices_(t, s, i.anEdge)
                  )
                );
              if (!e.geom.vertEq(s.dst(), i))
                return (
                  e.mesh.splitEdge(s.sym),
                  r.fixUpperEdge &&
                    (e.mesh.deleteEdge(s.oNext), (r.fixUpperEdge = !1)),
                  e.mesh.meshSplice(i.anEdge, s),
                  void e.sweep.sweepEvent_(t, i)
                );
              if (
                (e.assert(e.sweep.TOLERANCE_NONZERO_),
                e.sweep.TOLERANCE_NONZERO_)
              ) {
                var n = (r = e.sweep.topRightRegion_(r)).regionBelow(),
                  o = n.eUp.sym,
                  a = o.oNext,
                  l = a;
                n.fixUpperEdge &&
                  (e.assert(a !== o),
                  e.sweep.deleteRegion_(t, n),
                  e.mesh.deleteEdge(o),
                  (o = a.oPrev())),
                  e.mesh.meshSplice(i.anEdge, o),
                  e.geom.edgeGoesLeft(a) || (a = null),
                  e.sweep.addRightEdges_(t, r, o.oNext, l, a, !0);
              }
            }),
            (e.sweep.connectLeftVertex_ = function(t, r) {
              var i = new e.ActiveRegion();
              i.eUp = r.anEdge.sym;
              var s = t.dict.search(i).getKey(),
                n = s.regionBelow(),
                o = s.eUp,
                a = n.eUp;
              if (0 !== e.geom.edgeSign(o.dst(), r, o.org)) {
                var l,
                  h = e.geom.vertLeq(a.dst(), o.dst()) ? s : n;
                s.inside || h.fixUpperEdge
                  ? ((l =
                      h === s
                        ? e.mesh.connect(
                            r.anEdge.sym,
                            o.lNext
                          )
                        : e.mesh.connect(
                            a.dNext(),
                            r.anEdge
                          ).sym),
                    h.fixUpperEdge
                      ? e.sweep.fixUpperEdge_(h, l)
                      : e.sweep.computeWinding_(
                          t,
                          e.sweep.addRegionBelow_(t, s, l)
                        ),
                    e.sweep.sweepEvent_(t, r))
                  : e.sweep.addRightEdges_(t, s, r.anEdge, r.anEdge, null, !0);
              } else e.sweep.connectLeftDegenerate_(t, s, r);
            }),
            (e.sweep.sweepEvent_ = function(t, r) {
              t.event = r;
              for (var i = r.anEdge; null === i.activeRegion; )
                if ((i = i.oNext) === r.anEdge)
                  return void e.sweep.connectLeftVertex_(t, r);
              var s = e.sweep.topLeftRegion_(i.activeRegion),
                n = s.regionBelow(),
                o = n.eUp,
                a = e.sweep.finishLeftRegions_(t, n, null);
              a.oNext === o
                ? e.sweep.connectRightVertex_(t, s, a)
                : e.sweep.addRightEdges_(t, s, a.oNext, o, o, !0);
            }),
            (e.sweep.addSentinel_ = function(t, r) {
              var i = new e.ActiveRegion(),
                s = e.mesh.makeEdge(t.mesh);
              (s.org.s = e.sweep.SENTINEL_COORD_),
                (s.org.t = r),
                (s.dst().s = -e.sweep.SENTINEL_COORD_),
                (s.dst().t = r),
                (t.event = s.dst()),
                (i.eUp = s),
                (i.windingNumber = 0),
                (i.inside = !1),
                (i.fixUpperEdge = !1),
                (i.sentinel = !0),
                (i.dirty = !1),
                (i.nodeUp = t.dict.insert(i));
            }),
            (e.sweep.initEdgeDict_ = function(t) {
              (t.dict = new e.Dict(t, e.sweep.edgeLeq_)),
                e.sweep.addSentinel_(t, -e.sweep.SENTINEL_COORD_),
                e.sweep.addSentinel_(t, e.sweep.SENTINEL_COORD_);
            }),
            (e.sweep.doneEdgeDict_ = function(t) {
              for (var r, i = 0; null !== (r = t.dict.getMin().getKey()); )
                r.sentinel || (e.assert(r.fixUpperEdge), e.assert(1 == ++i)),
                  e.assert(0 === r.windingNumber),
                  e.sweep.deleteRegion_(t, r);
              t.dict = null;
            }),
            (e.sweep.removeDegenerateEdges_ = function(t) {
              for (var r, i = t.mesh.eHead, s = i.next; s !== i; s = r) {
                r = s.next;
                var n = s.lNext;
                e.geom.vertEq(s.org, s.dst()) &&
                  s.lNext.lNext !== s &&
                  (e.sweep.spliceMergeVertices_(t, n, s),
                  e.mesh.deleteEdge(s),
                  (n = (s = n).lNext)),
                  n.lNext === s &&
                    (n !== s &&
                      ((n !== r && n !== r.sym) || (r = r.next),
                      e.mesh.deleteEdge(n)),
                    (s !== r && s !== r.sym) || (r = r.next),
                    e.mesh.deleteEdge(s));
              }
            }),
            (e.sweep.initPriorityQ_ = function(t) {
              var r = new e.PriorityQ();
              t.pq = r;
              var i,
                s = t.mesh.vHead;
              for (i = s.next; i !== s; i = i.next) i.pqHandle = r.insert(i);
              r.init();
            }),
            (e.sweep.donePriorityQ_ = function(e) {
              e.pq.deleteQ(), (e.pq = null);
            }),
            (e.sweep.removeDegenerateFaces_ = function(t) {
              for (var r, i = t.fHead.next; i !== t.fHead; i = r) {
                r = i.next;
                var s = i.anEdge;
                e.assert(s.lNext !== s),
                  s.lNext.lNext === s &&
                    (e.sweep.addWinding_(s.oNext, s), e.mesh.deleteEdge(s));
              }
            }),
            (e.tessmono = {}),
            (e.tessmono.tessellateMonoRegion_ = function(t) {
              var r = t.anEdge;
              for (
                e.assert(r.lNext !== r && r.lNext.lNext !== r);
                e.geom.vertLeq(r.dst(), r.org);
                r = r.lPrev()
              );
              for (; e.geom.vertLeq(r.org, r.dst()); r = r.lNext);
              for (var i = r.lPrev(); r.lNext !== i; )
                if (e.geom.vertLeq(r.dst(), i.org)) {
                  for (
                    ;
                    i.lNext !== r &&
                    (e.geom.edgeGoesLeft(i.lNext) ||
                      e.geom.edgeSign(i.org, i.dst(), i.lNext.dst()) <= 0);

                  )
                    i = e.mesh.connect(
                      i.lNext,
                      i
                    ).sym;
                  i = i.lPrev();
                } else {
                  for (
                    ;
                    i.lNext !== r &&
                    (e.geom.edgeGoesRight(r.lPrev()) ||
                      e.geom.edgeSign(r.dst(), r.org, r.lPrev().org) >= 0);

                  )
                    r = e.mesh.connect(
                      r,
                      r.lPrev()
                    ).sym;
                  r = r.lNext;
                }
              for (e.assert(i.lNext !== r); i.lNext.lNext !== r; )
                i = e.mesh.connect(
                  i.lNext,
                  i
                ).sym;
            }),
            (e.tessmono.tessellateInterior = function(t) {
              for (var r, i = t.fHead.next; i !== t.fHead; i = r)
                (r = i.next), i.inside && e.tessmono.tessellateMonoRegion_(i);
            }),
            (e.tessmono.discardExterior = function(t) {
              for (var r, i = t.fHead.next; i !== t.fHead; i = r)
                (r = i.next), i.inside || e.mesh.zapFace(i);
            }),
            (e.tessmono.setWindingNumber = function(t, r, i) {
              for (var s, n = t.eHead.next; n !== t.eHead; n = s)
                (s = n.next),
                  n.rFace().inside !== n.lFace.inside
                    ? (n.winding = n.lFace.inside ? r : -r)
                    : i
                      ? e.mesh.deleteEdge(n)
                      : (n.winding = 0);
            }),
            (e.Dict = function(t, r) {
              (this.head_ = new e.DictNode()),
                (this.frame_ = t),
                (this.leq_ = r);
            }),
            (e.Dict.prototype.deleteDict_ = function() {}),
            (e.Dict.prototype.insertBefore = function(t, r) {
              do {
                t = t.prev;
              } while (null !== t.key && !this.leq_(this.frame_, t.key, r));
              var i = new e.DictNode(r, t.next, t);
              return (t.next.prev = i), (t.next = i), i;
            }),
            (e.Dict.prototype.insert = function(e) {
              return this.insertBefore(this.head_, e);
            }),
            (e.Dict.prototype.deleteNode = function(e) {
              (e.next.prev = e.prev), (e.prev.next = e.next);
            }),
            (e.Dict.prototype.search = function(e) {
              var t = this.head_;
              do {
                t = t.next;
              } while (null !== t.key && !this.leq_(this.frame_, e, t.key));
              return t;
            }),
            (e.Dict.prototype.getMin = function() {
              return this.head_.next;
            }),
            (e.Dict.prototype.getMax = function() {
              return this.head_.prev;
            }),
            (e.DictNode = function(e, t, r) {
              (this.key = e || null),
                (this.next = t || this),
                (this.prev = r || this);
            }),
            (e.DictNode.prototype.getKey = function() {
              return this.key;
            }),
            (e.DictNode.prototype.getSuccessor = function() {
              return this.next;
            }),
            (e.DictNode.prototype.getPredecessor = function() {
              return this.prev;
            }),
            (e.GluTesselator = function() {
              (this.state_ = e.GluTesselator.tessState_.T_DORMANT),
                (this.lastEdge_ = null),
                (this.mesh = null),
                (this.errorCallback_ = null),
                (this.normal_ = [0, 0, 0]),
                (this.windingRule = e.windingRule.GLU_TESS_WINDING_ODD),
                (this.fatalError = !1),
                (this.dict = null),
                (this.pq = null),
                (this.event = null),
                (this.combineCallback_ = null),
                (this.boundaryOnly_ = !1),
                (this.beginCallback_ = null),
                (this.edgeFlagCallback_ = null),
                (this.vertexCallback_ = null),
                (this.endCallback_ = null),
                (this.meshCallback_ = null),
                (this.polygonData_ = null);
            }),
            (e.GluTesselator.tessState_ = {
              T_DORMANT: 0,
              T_IN_POLYGON: 1,
              T_IN_CONTOUR: 2
            }),
            (e.GluTesselator.prototype.gluDeleteTess = function() {
              this.requireState_(e.GluTesselator.tessState_.T_DORMANT);
            }),
            (e.GluTesselator.prototype.gluTessProperty = function(t, r) {
              switch (t) {
                case e.gluEnum.GLU_TESS_TOLERANCE:
                  return;
                case e.gluEnum.GLU_TESS_WINDING_RULE:
                  var i = r;
                  switch (i) {
                    case e.windingRule.GLU_TESS_WINDING_ODD:
                    case e.windingRule.GLU_TESS_WINDING_NONZERO:
                    case e.windingRule.GLU_TESS_WINDING_POSITIVE:
                    case e.windingRule.GLU_TESS_WINDING_NEGATIVE:
                    case e.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO:
                      return void (this.windingRule = i);
                  }
                  break;
                case e.gluEnum.GLU_TESS_BOUNDARY_ONLY:
                  return void (this.boundaryOnly_ = !!r);
                default:
                  return void this.callErrorCallback(
                    e.gluEnum.GLU_INVALID_ENUM
                  );
              }
              this.callErrorCallback(e.gluEnum.GLU_INVALID_VALUE);
            }),
            (e.GluTesselator.prototype.gluGetTessProperty = function(t) {
              switch (t) {
                case e.gluEnum.GLU_TESS_TOLERANCE:
                  return 0;
                case e.gluEnum.GLU_TESS_WINDING_RULE:
                  var r = this.windingRule;
                  return (
                    e.assert(
                      r === e.windingRule.GLU_TESS_WINDING_ODD ||
                        r === e.windingRule.GLU_TESS_WINDING_NONZERO ||
                        r === e.windingRule.GLU_TESS_WINDING_POSITIVE ||
                        r === e.windingRule.GLU_TESS_WINDING_NEGATIVE ||
                        r === e.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO
                    ),
                    r
                  );
                case e.gluEnum.GLU_TESS_BOUNDARY_ONLY:
                  return (
                    e.assert(
                      !0 === this.boundaryOnly_ || !1 === this.boundaryOnly_
                    ),
                    this.boundaryOnly_
                  );
                default:
                  this.callErrorCallback(e.gluEnum.GLU_INVALID_ENUM);
              }
              return !1;
            }),
            (e.GluTesselator.prototype.gluTessNormal = function(e, t, r) {
              (this.normal_[0] = e),
                (this.normal_[1] = t),
                (this.normal_[2] = r);
            }),
            (e.GluTesselator.prototype.gluTessCallback = function(t, r) {
              var i = r || null;
              switch (t) {
                case e.gluEnum.GLU_TESS_BEGIN:
                case e.gluEnum.GLU_TESS_BEGIN_DATA:
                  return void (this.beginCallback_ = i);
                case e.gluEnum.GLU_TESS_EDGE_FLAG:
                case e.gluEnum.GLU_TESS_EDGE_FLAG_DATA:
                  return void (this.edgeFlagCallback_ = i);
                case e.gluEnum.GLU_TESS_VERTEX:
                case e.gluEnum.GLU_TESS_VERTEX_DATA:
                  return void (this.vertexCallback_ = i);
                case e.gluEnum.GLU_TESS_END:
                case e.gluEnum.GLU_TESS_END_DATA:
                  return void (this.endCallback_ = i);
                case e.gluEnum.GLU_TESS_ERROR:
                case e.gluEnum.GLU_TESS_ERROR_DATA:
                  return void (this.errorCallback_ = i);
                case e.gluEnum.GLU_TESS_COMBINE:
                case e.gluEnum.GLU_TESS_COMBINE_DATA:
                  return void (this.combineCallback_ = i);
                case e.gluEnum.GLU_TESS_MESH:
                  return void (this.meshCallback_ = i);
                default:
                  return void this.callErrorCallback(
                    e.gluEnum.GLU_INVALID_ENUM
                  );
              }
            }),
            (e.GluTesselator.prototype.gluTessVertex = function(t, r) {
              var i = !1,
                s = [0, 0, 0];
              this.requireState_(e.GluTesselator.tessState_.T_IN_CONTOUR);
              for (var n = 0; n < 3; ++n) {
                var o = t[n];
                o < -e.GLU_TESS_MAX_COORD &&
                  ((o = -e.GLU_TESS_MAX_COORD), (i = !0)),
                  o > e.GLU_TESS_MAX_COORD &&
                    ((o = e.GLU_TESS_MAX_COORD), (i = !0)),
                  (s[n] = o);
              }
              i && this.callErrorCallback(e.errorType.GLU_TESS_COORD_TOO_LARGE),
                this.addVertex_(s, r);
            }),
            (e.GluTesselator.prototype.gluTessBeginPolygon = function(t) {
              this.requireState_(e.GluTesselator.tessState_.T_DORMANT),
                (this.state_ = e.GluTesselator.tessState_.T_IN_POLYGON),
                (this.mesh = new e.GluMesh()),
                (this.polygonData_ = t);
            }),
            (e.GluTesselator.prototype.gluTessBeginContour = function() {
              this.requireState_(e.GluTesselator.tessState_.T_IN_POLYGON),
                (this.state_ = e.GluTesselator.tessState_.T_IN_CONTOUR),
                (this.lastEdge_ = null);
            }),
            (e.GluTesselator.prototype.gluTessEndContour = function() {
              this.requireState_(e.GluTesselator.tessState_.T_IN_CONTOUR),
                (this.state_ = e.GluTesselator.tessState_.T_IN_POLYGON);
            }),
            (e.GluTesselator.prototype.gluTessEndPolygon = function() {
              if (
                (this.requireState_(e.GluTesselator.tessState_.T_IN_POLYGON),
                (this.state_ = e.GluTesselator.tessState_.T_DORMANT),
                e.normal.projectPolygon(
                  this,
                  this.normal_[0],
                  this.normal_[1],
                  this.normal_[2]
                ),
                e.sweep.computeInterior(this),
                !this.fatalError)
              ) {
                var t = this.mesh;
                if (
                  (this.boundaryOnly_
                    ? e.tessmono.setWindingNumber(t, 1, !0)
                    : e.tessmono.tessellateInterior(t),
                  this.mesh.checkMesh(),
                  this.beginCallback_ ||
                    this.endCallback_ ||
                    this.vertexCallback_ ||
                    this.edgeFlagCallback_)
                )
                  if (this.boundaryOnly_)
                    e.render.renderBoundary(this, this.mesh);
                  else {
                    var r = !!this.edgeFlagCallback_;
                    e.render.renderMesh(this, this.mesh, r);
                  }
                if (this.meshCallback_)
                  return (
                    e.tessmono.discardExterior(this.mesh),
                    this.meshCallback_(this.mesh),
                    (this.mesh = null),
                    void (this.polygonData_ = null)
                  );
              }
              e.mesh.deleteMesh(this.mesh),
                (this.polygonData_ = null),
                (this.mesh = null);
            }),
            (e.GluTesselator.prototype.requireState_ = function(e) {
              this.state_ !== e && this.gotoState_(e);
            }),
            (e.GluTesselator.prototype.gotoState_ = function(t) {
              for (; this.state_ !== t; )
                if (this.state_ < t)
                  switch (this.state_) {
                    case e.GluTesselator.tessState_.T_DORMANT:
                      this.callErrorCallback(
                        e.errorType.GLU_TESS_MISSING_BEGIN_POLYGON
                      ),
                        this.gluTessBeginPolygon(null);
                      break;
                    case e.GluTesselator.tessState_.T_IN_POLYGON:
                      this.callErrorCallback(
                        e.errorType.GLU_TESS_MISSING_BEGIN_CONTOUR
                      ),
                        this.gluTessBeginContour();
                  }
                else
                  switch (this.state_) {
                    case e.GluTesselator.tessState_.T_IN_CONTOUR:
                      this.callErrorCallback(
                        e.errorType.GLU_TESS_MISSING_END_CONTOUR
                      ),
                        this.gluTessEndContour();
                      break;
                    case e.GluTesselator.tessState_.T_IN_POLYGON:
                      this.callErrorCallback(
                        e.errorType.GLU_TESS_MISSING_END_POLYGON
                      ),
                        this.gluTessEndPolygon();
                  }
            }),
            (e.GluTesselator.prototype.addVertex_ = function(t, r) {
              var i = this.lastEdge_;
              null === i
                ? ((i = e.mesh.makeEdge(this.mesh)),
                  e.mesh.meshSplice(i, i.sym))
                : (e.mesh.splitEdge(i), (i = i.lNext)),
                (i.org.data = r),
                (i.org.coords[0] = t[0]),
                (i.org.coords[1] = t[1]),
                (i.org.coords[2] = t[2]),
                (i.winding = 1),
                (i.sym.winding = -1),
                (this.lastEdge_ = i);
            }),
            (e.GluTesselator.prototype.callBeginCallback = function(e) {
              this.beginCallback_ && this.beginCallback_(e, this.polygonData_);
            }),
            (e.GluTesselator.prototype.callVertexCallback = function(e) {
              this.vertexCallback_ &&
                this.vertexCallback_(e, this.polygonData_);
            }),
            (e.GluTesselator.prototype.callEdgeFlagCallback = function(e) {
              this.edgeFlagCallback_ &&
                this.edgeFlagCallback_(e, this.polygonData_);
            }),
            (e.GluTesselator.prototype.callEndCallback = function() {
              this.endCallback_ && this.endCallback_(this.polygonData_);
            }),
            (e.GluTesselator.prototype.callCombineCallback = function(e, t, r) {
              return (
                (this.combineCallback_ &&
                  this.combineCallback_(e, t, r, this.polygonData_)) ||
                null
              );
            }),
            (e.GluTesselator.prototype.callErrorCallback = function(e) {
              this.errorCallback_ && this.errorCallback_(e, this.polygonData_);
            }),
            (e.GluFace = function(e, t) {
              (this.next = e || this),
                (this.prev = t || this),
                (this.anEdge = null),
                (this.inside = !1);
            }),
            (e.GluHalfEdge = function(e) {
              (this.next = e || this),
                (this.sym = null),
                (this.oNext = null),
                (this.lNext = null),
                (this.org = null),
                (this.lFace = null),
                (this.activeRegion = null),
                (this.winding = 0);
            }),
            (e.GluHalfEdge.prototype.rFace = function() {
              return this.sym.lFace;
            }),
            (e.GluHalfEdge.prototype.dst = function() {
              return this.sym.org;
            }),
            (e.GluHalfEdge.prototype.oPrev = function() {
              return this.sym.lNext;
            }),
            (e.GluHalfEdge.prototype.lPrev = function() {
              return this.oNext.sym;
            }),
            (e.GluHalfEdge.prototype.dPrev = function() {
              return this.lNext.sym;
            }),
            (e.GluHalfEdge.prototype.rPrev = function() {
              return this.sym.oNext;
            }),
            (e.GluHalfEdge.prototype.dNext = function() {
              return this.rPrev().sym;
            }),
            (e.GluHalfEdge.prototype.rNext = function() {
              return this.oPrev().sym;
            }),
            (e.GluMesh = function() {
              (this.vHead = new e.GluVertex()),
                (this.fHead = new e.GluFace()),
                (this.eHead = new e.GluHalfEdge()),
                (this.eHeadSym = new e.GluHalfEdge()),
                (this.eHead.sym = this.eHeadSym),
                (this.eHeadSym.sym = this.eHead);
            }),
            (e.GluMesh.prototype.checkMesh = function() {
              if (e.DEBUG) {
                var t,
                  r,
                  i = this.fHead,
                  s = this.vHead,
                  n = this.eHead,
                  o = i;
                for (o = i; (r = o.next) !== i; o = r) {
                  e.assert(r.prev === o), (t = r.anEdge);
                  do {
                    e.assert(t.sym !== t),
                      e.assert(t.sym.sym === t),
                      e.assert(t.lNext.oNext.sym === t),
                      e.assert(t.oNext.sym.lNext === t),
                      e.assert(t.lFace === r),
                      (t = t.lNext);
                  } while (t !== r.anEdge);
                }
                e.assert(r.prev === o && null === r.anEdge);
                var a,
                  l = s;
                for (l = s; (a = l.next) !== s; l = a) {
                  e.assert(a.prev === l), (t = a.anEdge);
                  do {
                    e.assert(t.sym !== t),
                      e.assert(t.sym.sym === t),
                      e.assert(t.lNext.oNext.sym === t),
                      e.assert(t.oNext.sym.lNext === t),
                      e.assert(t.org === a),
                      (t = t.oNext);
                  } while (t !== a.anEdge);
                }
                e.assert(a.prev === l && null === a.anEdge && null === a.data);
                var h = n;
                for (h = n; (t = h.next) !== n; h = t)
                  e.assert(t.sym.next === h.sym),
                    e.assert(t.sym !== t),
                    e.assert(t.sym.sym === t),
                    e.assert(null !== t.org),
                    e.assert(null !== t.dst()),
                    e.assert(t.lNext.oNext.sym === t),
                    e.assert(t.oNext.sym.lNext === t);
                e.assert(
                  t.sym.next === h.sym &&
                    t.sym === this.eHeadSym &&
                    t.sym.sym === t &&
                    null === t.org &&
                    null === t.dst() &&
                    null === t.lFace &&
                    null === t.rFace()
                );
              }
            }),
            (e.GluVertex = function(e, t) {
              (this.next = e || this),
                (this.prev = t || this),
                (this.anEdge = null),
                (this.data = null),
                (this.coords = [0, 0, 0]),
                (this.s = 0),
                (this.t = 0),
                (this.pqHandle = 0);
            }),
            (e.PriorityQ = function() {
              (this.verts_ = []),
                (this.order_ = null),
                (this.size_ = 0),
                (this.initialized_ = !1),
                (this.heap_ = new e.PriorityQHeap());
            }),
            (e.PriorityQ.prototype.deleteQ = function() {
              (this.heap_ = null), (this.order_ = null), (this.verts_ = null);
            }),
            (e.PriorityQ.prototype.init = function() {
              this.order_ = [];
              for (var t = 0; t < this.size_; t++) this.order_[t] = t;
              var r = (function(t) {
                return function(r, i) {
                  return e.geom.vertLeq(t[r], t[i]) ? 1 : -1;
                };
              })(this.verts_);
              if (
                (this.order_.sort(r),
                (this.initialized_ = !0),
                this.heap_.init(),
                e.DEBUG)
              ) {
                var i = 0 + this.size_ - 1;
                for (t = 0; t < i; ++t)
                  e.assert(
                    e.geom.vertLeq(
                      this.verts_[this.order_[t + 1]],
                      this.verts_[this.order_[t]]
                    )
                  );
              }
            }),
            (e.PriorityQ.prototype.insert = function(e) {
              if (this.initialized_) return this.heap_.insert(e);
              var t = this.size_++;
              return (this.verts_[t] = e), -(t + 1);
            }),
            (e.PriorityQ.prototype.extractMin = function() {
              if (0 === this.size_) return this.heap_.extractMin();
              var t = this.verts_[this.order_[this.size_ - 1]];
              if (!this.heap_.isEmpty()) {
                var r = this.heap_.minimum();
                if (e.geom.vertLeq(r, t)) return this.heap_.extractMin();
              }
              do {
                --this.size_;
              } while (
                this.size_ > 0 &&
                null === this.verts_[this.order_[this.size_ - 1]]
              );
              return t;
            }),
            (e.PriorityQ.prototype.minimum = function() {
              if (0 === this.size_) return this.heap_.minimum();
              var t = this.verts_[this.order_[this.size_ - 1]];
              if (!this.heap_.isEmpty()) {
                var r = this.heap_.minimum();
                if (e.geom.vertLeq(r, t)) return r;
              }
              return t;
            }),
            (e.PriorityQ.prototype.remove = function(t) {
              if (t >= 0) this.heap_.remove(t);
              else
                for (
                  t = -(t + 1),
                    e.assert(t < this.verts_.length && null !== this.verts_[t]),
                    this.verts_[t] = null;
                  this.size_ > 0 &&
                  null === this.verts_[this.order_[this.size_ - 1]];

                )
                  --this.size_;
            }),
            (e.PriorityQHeap = function() {
              (this.heap_ = e.PriorityQHeap.reallocNumeric_(
                [0],
                e.PriorityQHeap.INIT_SIZE_ + 1
              )),
                (this.verts_ = [null, null]),
                (this.handles_ = [0, 0]),
                (this.size_ = 0),
                (this.max_ = e.PriorityQHeap.INIT_SIZE_),
                (this.freeList_ = 0),
                (this.initialized_ = !1),
                (this.heap_[1] = 1);
            }),
            (e.PriorityQHeap.INIT_SIZE_ = 32),
            (e.PriorityQHeap.reallocNumeric_ = function(e, t) {
              for (var r = new Array(t), i = 0; i < e.length; i++) r[i] = e[i];
              for (; i < t; i++) r[i] = 0;
              return r;
            }),
            (e.PriorityQHeap.prototype.init = function() {
              for (var e = this.size_; e >= 1; --e) this.floatDown_(e);
              this.initialized_ = !0;
            }),
            (e.PriorityQHeap.prototype.insert = function(t) {
              var r,
                i = ++this.size_;
              return (
                2 * i > this.max_ &&
                  ((this.max_ *= 2),
                  (this.handles_ = e.PriorityQHeap.reallocNumeric_(
                    this.handles_,
                    this.max_ + 1
                  ))),
                0 === this.freeList_
                  ? (r = i)
                  : ((r = this.freeList_),
                    (this.freeList_ = this.handles_[this.freeList_])),
                (this.verts_[r] = t),
                (this.handles_[r] = i),
                (this.heap_[i] = r),
                this.initialized_ && this.floatUp_(i),
                r
              );
            }),
            (e.PriorityQHeap.prototype.isEmpty = function() {
              return 0 === this.size_;
            }),
            (e.PriorityQHeap.prototype.minimum = function() {
              return this.verts_[this.heap_[1]];
            }),
            (e.PriorityQHeap.prototype.extractMin = function() {
              var e = this.heap_,
                t = this.verts_,
                r = this.handles_,
                i = e[1],
                s = t[i];
              return (
                this.size_ > 0 &&
                  ((e[1] = e[this.size_]),
                  (r[e[1]] = 1),
                  (t[i] = null),
                  (r[i] = this.freeList_),
                  (this.freeList_ = i),
                  --this.size_ > 0 && this.floatDown_(1)),
                s
              );
            }),
            (e.PriorityQHeap.prototype.remove = function(t) {
              var r = this.heap_,
                i = this.verts_,
                s = this.handles_;
              e.assert(t >= 1 && t <= this.max_ && null !== i[t]);
              var n = s[t];
              if (((r[n] = r[this.size_]), (s[r[n]] = n), n <= --this.size_))
                if (n <= 1) this.floatDown_(n);
                else {
                  var o = i[r[n]],
                    a = i[r[n >> 1]];
                  e.geom.vertLeq(a, o) ? this.floatDown_(n) : this.floatUp_(n);
                }
              (i[t] = null), (s[t] = this.freeList_), (this.freeList_ = t);
            }),
            (e.PriorityQHeap.prototype.floatDown_ = function(t) {
              for (
                var r = this.heap_,
                  i = this.verts_,
                  s = this.handles_,
                  n = t,
                  o = r[n];
                ;

              ) {
                var a = n << 1;
                a < this.size_ &&
                  e.geom.vertLeq(i[r[a + 1]], i[r[a]]) &&
                  (a += 1),
                  e.assert(a <= this.max_);
                var l = r[a];
                if (a > this.size_ || e.geom.vertLeq(i[o], i[l]))
                  return (r[n] = o), void (s[o] = n);
                (r[n] = l), (s[l] = n), (n = a);
              }
            }),
            (e.PriorityQHeap.prototype.floatUp_ = function(t) {
              for (
                var r = this.heap_,
                  i = this.verts_,
                  s = this.handles_,
                  n = t,
                  o = r[n];
                ;

              ) {
                var a = n >> 1,
                  l = r[a];
                if (0 === a || e.geom.vertLeq(i[l], i[o]))
                  return (r[n] = o), void (s[o] = n);
                (r[n] = l), (s[l] = n), (n = a);
              }
            }),
            (e.ActiveRegion = function() {
              (this.eUp = null),
                (this.nodeUp = null),
                (this.windingNumber = 0),
                (this.inside = !1),
                (this.sentinel = !1),
                (this.dirty = !1),
                (this.fixUpperEdge = !1);
            }),
            (e.ActiveRegion.prototype.regionBelow = function() {
              return this.nodeUp.getPredecessor().getKey();
            }),
            (e.ActiveRegion.prototype.regionAbove = function() {
              return this.nodeUp.getSuccessor().getKey();
            }),
            e
          );
        }.apply(null, [])) || (e.exports = i);
    },
    2292: function(e, t, r) {
      var i, s;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(11),
        r(39),
        r(786),
        r(418),
        r(432),
        r(2024),
        r(2007),
        r(2152),
        r(2028),
        r(2083),
        r(2050),
        r(2116),
        r(2073),
        r(2149)
      ]),
        void 0 ===
          (s = function(e, t, r, i, s, n, o, a, l, h, u, p, c, d, g, _, f) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var m = i.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),
              v = 24,
              y = 10,
              x = 1.2 * v,
              w = 10 * v,
              E = p.i8888to32(255, 255, 255, 255),
              T = { xOffset: 0, yOffset: 0, width: 0, height: 0 },
              L = (function(e) {
                function t(t, r, i) {
                  var n = e.call(this) || this;
                  (n.geometryType = h.WGLGeometryType.LABEL),
                    (n.vvFlags = 0),
                    (n._textBoxVerticalOffset = 0),
                    (n._textBoxHorizontalOffset = 0),
                    (n._refTemplate = T),
                    (n._xOffset = r.xoffset),
                    (n._yOffset = -r.yoffset),
                    (n._decorationOffset = u.getFontDecorationOffset(r.font));
                  var a = r.haloColor;
                  n._color = 0 | (r.color && l.premultiplyAlphaRGBA(r.color));
                  var p = r.xoffset / r.font.size,
                    c = r.yoffset / r.font.size;
                  (n._shapingXOffset = p * v),
                    (n._shapingYOffset = c * v),
                    (n._haloColor = 0 | (a && l.premultiplyAlphaRGBA(a))),
                    (n._haloSize = y * s.pt2px(s.toPt(r.haloSize || 0))),
                    (n._textPropSize = s.pt2px(r.font.size)),
                    (n._textPropAngle = (r.angle * Math.PI) / 180),
                    (n._textPropHJustification =
                      "left" === r.horizontalAlignment
                        ? 0
                        : "right" === r.horizontalAlignment
                          ? 1
                          : 0.5);
                  var d = 0,
                    g = 0.5;
                  switch (i) {
                    case "above-center":
                    case "above-left":
                    case "above-right":
                      (d = -0.5), (g = 0);
                      break;
                    case "below-center":
                    case "below-left":
                    case "below-right":
                      (d = 0.5), (g = 1);
                  }
                  var _ = 0,
                    f = 0.5;
                  switch (i) {
                    case "above-left":
                    case "center-left":
                    case "below-left":
                      (_ = -0.5), (f = 1);
                      break;
                    case "above-right":
                    case "center-right":
                    case "below-right":
                      (_ = 0.5), (f = 0);
                  }
                  return (
                    (n._textPropHAnchorPlacement = f),
                    (n._textPropVAnchorPlacement = g),
                    (n._placementDirection = [_, d]),
                    (n._materialStore = t),
                    (n.symbolId = r.id),
                    (n.anchor = o.create()),
                    n
                  );
                }
                return (
                  r(t, e),
                  (t.fromText = function(e, r, i, s, n, o) {
                    return new t(e, i, n);
                  }),
                  Object.defineProperty(t.prototype, "bounds", {
                    get: function() {
                      return this._bounds;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.computeGlyphs = function(e, t) {
                    var r = t.text;
                    if (!r || !r.length) return (this._computedGlyphs = []), 1;
                    var i = this._shapingXOffset,
                      s = this._shapingYOffset,
                      a = this._computeShaping(
                        e,
                        w,
                        x,
                        0,
                        i,
                        s,
                        this._textPropHAnchorPlacement,
                        this._textPropVAnchorPlacement,
                        this._textPropHJustification
                      ).getShaping(r, t.rtl);
                    isNaN(this._decorationOffset) ||
                      c.addDecoration(a, this._decorationOffset);
                    for (
                      var l = new Array(a.length), u = 0;
                      u < a.length;
                      u++
                    ) {
                      var p = this._textPropAngle,
                        d = this._textPropSize,
                        _ = this._haloSize,
                        m = a[u].glyphMosaicItem,
                        y = this._materialStore.createGlyphMaterial(
                          m,
                          h.WGLGeometryType.LABEL,
                          this.vvFlags
                        );
                      l[u] = f.ComputedGlyph.from(a[u], y, p, d, _);
                    }
                    if (((this._computedGlyphs = l), !a || 0 === a.length))
                      return 2;
                    var E = c.getBox(a),
                      T = this._textPropSize / v;
                    (E.width *= T),
                      (E.height *= T),
                      (E.x *= T),
                      (E.y *= T),
                      this._placementDirection[0] < 0
                        ? (this._textBoxHorizontalOffset = -E.x - E.width)
                        : this._placementDirection[0] > 0 &&
                          (this._textBoxHorizontalOffset = -E.x),
                      this._placementDirection[1] < 0
                        ? (this._textBoxVerticalOffset = -E.y)
                        : this._placementDirection[1] > 0 &&
                          (this._textBoxVerticalOffset = -E.y + E.height);
                    var L = E.width / 2,
                      b = E.height / 2;
                    if (this._textPropAngle) {
                      var S = o.fromValues(-L, -b),
                        G = o.fromValues(L, b),
                        I = n.create();
                      n.rotate(I, I, this._textPropAngle),
                        o.transformMat2d(S, S, I),
                        o.transformMat2d(G, G, I);
                      var V = Math.abs(G[0] - S[0]),
                        N = Math.abs(G[1] - S[1]);
                      (E.width = V), (E.height = N);
                    }
                    var O = new g.default(
                      E.x,
                      E.y,
                      E.width + 10,
                      E.height + 10
                    );
                    this._bounds = O;
                    var C =
                        this._placementDirection[0] *
                        (this._refTemplate.width + this._bounds.width),
                      R =
                        this._placementDirection[1] *
                        (this._refTemplate.height + this._bounds.height);
                    return (
                      (this._bounds.center[0] = C + this._xOffset),
                      (this._bounds.center[1] = R + this._yOffset),
                      0
                    );
                  }),
                  (t.prototype.bindReferenceTemplate = function(e) {
                    this._refTemplate = e || T;
                  }),
                  (t.prototype.computeAnchor = function(e, t) {
                    var r = this._refTemplate.xOffset,
                      i = this._refTemplate.yOffset;
                    switch (e) {
                      case "esriGeometryPoint":
                        var s = t.geometry,
                          n = s.x,
                          a = s.y;
                        this._setAnchor(n, a);
                        break;
                      case "esriGeometryMultipoint":
                        var l = t.geometry,
                          h = this._computeAnchorMultipoint(l.points);
                        (n = h.x), (a = h.y);
                        this._setAnchor(n, a);
                        break;
                      case "esriGeometryPolygon":
                        if (t.centroid) {
                          var u = t.centroid,
                            p = u.x,
                            c = u.y;
                          this._setAnchor(p, c);
                          break;
                        }
                        l = t.geometry;
                        if (!(d = this._computeAnchorRings(l.rings))) break;
                        (n = d.x), (a = d.y);
                        this._setAnchor(n, a);
                        break;
                      case "esriGeometryPolyline":
                        var d;
                        l = t.geometry;
                        if (!(d = this._computeAnchorRings(l.paths))) break;
                        (n = d.x), (a = d.y);
                        this._setAnchor(n, a);
                        break;
                      default:
                        m.error("Unable to handle geometryType: " + e);
                    }
                    return o.fromValues(this.anchor[0] + r, this.anchor[1] + i);
                  }),
                  (t.prototype.writeMesh = function(e, t, r, i, s, n, o) {
                    var a = t.indexVector,
                      l = t.get("geometry"),
                      h = t.get("visibility"),
                      u = t.get("visibilityRange"),
                      c = this._getOffset(l),
                      d =
                        this._placementDirection[0] *
                          (this._refTemplate.width + 10) +
                        this._textBoxHorizontalOffset,
                      g =
                        this._placementDirection[1] *
                          (this._refTemplate.height + 10) +
                        this._textBoxVerticalOffset,
                      _ = p.i8888to32(
                        this._refTemplate.xOffset,
                        -this._refTemplate.yOffset,
                        d,
                        g
                      );
                    this._writeVertices(
                      e,
                      a,
                      l,
                      h,
                      u,
                      i,
                      c,
                      _,
                      this.anchor[0],
                      this.anchor[1]
                    );
                  }),
                  (t.prototype._setAnchor = function(e, t) {
                    (this.anchor[0] = e), (this.anchor[1] = t);
                  }),
                  (t.prototype._computeAnchorMultipoint = function(e) {
                    return e.length && e[0].length
                      ? { x: e[0][0], y: e[0][1] }
                      : null;
                  }),
                  (t.prototype._computeAnchorRings = function(e) {
                    if (!e.length || !e[0].length || !e[0][0].length)
                      return null;
                    var t = a.ringsCentroid(e, !1);
                    return { x: t[0], y: t[1] };
                  }),
                  (t.prototype._computeShaping = function(
                    e,
                    t,
                    r,
                    i,
                    s,
                    n,
                    o,
                    a,
                    l
                  ) {
                    return (
                      (this._shaping = new c([e], w, x, 0, [s, n], o, a, l)),
                      this._shaping
                    );
                  }),
                  (t.prototype._getOffset = function(e) {
                    return e.length / 5;
                  }),
                  (t.prototype._writeVertices = function(
                    e,
                    t,
                    r,
                    i,
                    s,
                    n,
                    o,
                    a,
                    l,
                    h
                  ) {
                    var u = this._computedGlyphs,
                      c = l,
                      g = h,
                      _ = p.i1616to32(2 * c, 2 * g),
                      f = p.i1616to32(2 * c + 1, 2 * g),
                      m = 0,
                      v = (16711680 & n) >> 16,
                      y = (65280 & n) >> 8,
                      x = 255 & n,
                      w = p.i8888to32(0, v, y, x);
                    if (this._haloSize)
                      for (var E = 0; E < u.length; E++, m += 4) {
                        var T = u[E].materialId,
                          L = this._materialStore.get(T);
                        ((b = new d(n, this.geometryType, T)).vertexFrom =
                          o + m),
                          (b.indexFrom = t.length),
                          this._writeGlyph(
                            b,
                            r,
                            i,
                            s,
                            w,
                            f,
                            this._haloColor,
                            a,
                            u[E],
                            L
                          ),
                          this._writeIndices(b, t, o + m),
                          e.push(b);
                      }
                    for (E = 0; E < u.length; E++, m += 4) {
                      var b;
                      (T = u[E].materialId), (L = this._materialStore.get(T));
                      ((b = new d(n, this.geometryType, T)).vertexFrom = o + m),
                        (b.indexFrom = t.length),
                        this._writeGlyph(
                          b,
                          r,
                          i,
                          s,
                          w,
                          _,
                          this._color,
                          a,
                          u[E],
                          L
                        ),
                        this._writeIndices(b, t, o + m),
                        e.push(b);
                    }
                  }),
                  (t.prototype._writeGlyph = function(
                    e,
                    t,
                    r,
                    i,
                    s,
                    n,
                    o,
                    a,
                    l,
                    h
                  ) {
                    t.push(n),
                      t.push(o),
                      t.push(l.vertexOffsetUpperLeft),
                      t.push(l.texFontSizeUpperLeft),
                      t.push(a),
                      t.push(n),
                      t.push(o),
                      t.push(l.vertexOffsetUpperRight),
                      t.push(l.texFontSizeUpperRight),
                      t.push(a),
                      t.push(n),
                      t.push(o),
                      t.push(l.vertexOffsetLowerLeft),
                      t.push(l.texFontSizeLowerLeft),
                      t.push(a),
                      t.push(n),
                      t.push(o),
                      t.push(l.vertexOffsetLowerRight),
                      t.push(l.texFontSizeLowerRight),
                      t.push(a),
                      r.push(4294967295),
                      i.push(E),
                      i.push(E),
                      (e.vertexCount += 4);
                  }),
                  (t.prototype._writeIndices = function(e, t, r) {
                    t.push(r + 0),
                      t.push(r + 1),
                      t.push(r + 2),
                      t.push(r + 1),
                      t.push(r + 3),
                      t.push(r + 2),
                      (e.indexCount += 6);
                  }),
                  t
                );
              })(_.default);
            t.default = L;
          }.apply(null, i)) || (e.exports = s);
    },
    2293: function(e, t, r) {
      var i, s;
      (i = [r.dj.c(e.i), t, r(5), r(11), r(2010)]),
        void 0 ===
          (s = function(e, t, r, i, s) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = i.getLogger("esri/views/2d/engine/webgl/util/Matcher"),
              o = (function() {
                function e() {
                  this._defaultResult = null;
                }
                return (
                  (e.prototype.size = function() {
                    return 1;
                  }),
                  (e.prototype.getDefault = function() {
                    return this._defaultResult;
                  }),
                  (e.prototype.setDefault = function(e) {
                    this._defaultResult = e;
                  }),
                  (e.prototype.match = function(e, t) {
                    return this.getDefault();
                  }),
                  e
                );
              })();
            t.default = o;
            var a = (function(e) {
              function t(t, r, i, n) {
                var o = e.call(this) || this;
                return (
                  (o._intervals = []),
                  (o._isMaxInclusive = r),
                  i
                    ? (o._getValue = s.createArcadeFunction(i))
                    : t && t.length
                      ? "function" == typeof t
                        ? ((o._field = null), (o._getValue = t))
                        : ((o._field = t),
                          (o._normalizationInfo = n),
                          (o._getValue = o._getValueFromField.bind(o)))
                      : (o._field = null),
                  o
                );
              }
              return (
                r(t, e),
                (t.prototype.add = function(e, t) {
                  this._intervals.push({ interval: e, result: t }),
                    this._intervals.sort(function(e, t) {
                      return e.interval.min - t.interval.min;
                    });
                }),
                (t.prototype.size = function() {
                  return e.prototype.size.call(this) + this._intervals.length;
                }),
                (t.prototype.match = function(e, t) {
                  if (!this._getValue) return this.getDefault();
                  var r = this._getValue(e, t);
                  if (!r && (null === r || void 0 === r || isNaN(r)))
                    return this.getDefault();
                  for (var i = 0; i < this._intervals.length; i++) {
                    var s = this._intervals[i],
                      n = s.interval,
                      o = s.result,
                      a = r >= n.min,
                      l = this._isMaxInclusive ? r <= n.max : r < n.max;
                    if (a && l) return o;
                  }
                  return this.getDefault();
                }),
                (t.prototype._needsNormalization = function() {
                  var e = this._normalizationInfo;
                  return (
                    e &&
                    (e.normalizationField ||
                      e.normalizationTotal ||
                      e.normalizationType)
                  );
                }),
                (t.prototype._getValueFromField = function(e) {
                  var t = e.attributes[this._field];
                  if (!this._needsNormalization()) return t;
                  var r = this._normalizationInfo,
                    i = r.normalizationField,
                    s = r.normalizationTotal,
                    o = r.normalizationType,
                    a = !!i && e.attributes[i];
                  if (o)
                    switch (o) {
                      case "field":
                        return a ? t / a : void 0;
                      case "log":
                        return Math.log(t) * Math.LOG10E;
                      case "percent-of-total":
                        return (t / s) * 100;
                      default:
                        return void n.error(
                          "Found unknown normalization type: " + o
                        );
                    }
                  else
                    n.error("Normalization is required, but no type was set!");
                }),
                t
              );
            })(o);
            t.IntervalMatcher = a;
            var l = (function(e) {
              function t(t, r, i) {
                var n = e.call(this) || this;
                return (
                  (n._resultsMap = new Map()),
                  i
                    ? (n._getValue = s.createArcadeFunction(i))
                    : t && t.length
                      ? "function" == typeof t[0]
                        ? ((n._fields = null), (n._getValue = t[0]))
                        : ((n._fields = t),
                          (n._seperator = r || ""),
                          (n._getValue = n._getValueFromFields.bind(n)))
                      : (n._fields = null),
                  n
                );
              }
              return (
                r(t, e),
                (t.prototype.add = function(e, t) {
                  this._resultsMap.set(e.toString(), t);
                }),
                (t.prototype.size = function() {
                  return e.prototype.size.call(this) + this._resultsMap.size;
                }),
                (t.prototype.match = function(e, t) {
                  if (!this._getValue) return this.getDefault();
                  var r = this._getValue(e, t);
                  if (!r && (null === r || void 0 === r))
                    return this.getDefault();
                  var i = r.toString();
                  return this._resultsMap.has(i)
                    ? this._resultsMap.get(i)
                    : this.getDefault();
                }),
                (t.prototype._getValueFromFields = function(e) {
                  for (var t = [], r = 0, i = this._fields; r < i.length; r++) {
                    var s = i[r],
                      n = e.attributes[s];
                    t.push(n);
                  }
                  return t.join(this._seperator);
                }),
                t
              );
            })(o);
            t.MapMatcher = l;
          }.apply(null, i)) || (e.exports = s);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/engine/webgl/WGLDisplayRecord": 2050,
      "esri/views/2d/engine/webgl/mesh/templates/WGLMeshTemplate": 2073,
      "esri/views/2d/engine/webgl/mesh/factories/WGLMeshFactory": 2114,
      "esri/views/2d/engine/webgl/WGLDisplayObject": 2115,
      "esri/views/2d/engine/webgl/collisions/BoundingBox": 2116,
      "esri/views/2d/engine/webgl/util/Writer": 2117,
      "esri/views/2d/engine/webgl/mesh/templates/WGLLineTemplate": 2147,
      "esri/views/2d/engine/webgl/mesh/templates/WGLMarkerTemplate": 2148,
      "esri/views/2d/engine/webgl/mesh/templates/WGLTextTemplate": 2149,
      "esri/views/2d/engine/webgl/util/BidiText": 2150,
      "esri/views/2d/engine/webgl/util/vvFlagUtils": 2151,
      "esri/views/2d/engine/webgl/fontUtils": 2152,
      "esri/views/2d/engine/webgl/MeshData": 2285,
      "esri/views/2d/engine/webgl/collisions/Metric": 2286,
      "esri/views/2d/engine/webgl/mesh/VertexVector": 2287,
      "esri/views/2d/engine/webgl/mesh/templates/meshTemplateUtils": 2288,
      "esri/views/2d/engine/webgl/mesh/templates/WGLFillTemplate": 2289,
      "esri/views/2d/engine/webgl/mesh/Tesselator": 2290,
      "esri/core/libs/libtess/libtess": 2291,
      "esri/views/2d/engine/webgl/mesh/templates/WGLLabelTemplate": 2292,
      "esri/views/2d/engine/webgl/util/Matcher": 2293
    });
  })();
