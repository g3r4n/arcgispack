(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    2006: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(3),
        i(53),
        i(17),
        i(308),
        i(11),
        i(180),
        i(9),
        i(1)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d, h, u) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handles = new a()),
                  (t.layer = null),
                  (t.parent = null),
                  (t.view = null),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(t) {
                      if ("layerview:create-error" !== t.name) {
                        var i = (e.layer && e.layer.id) || "no id",
                          n = (e.layer && e.layer.title) || "no title";
                        return (
                          l
                            .getLogger(e.declaredClass)
                            .error(
                              "#resolve()",
                              "Failed to resolve layer view (layer title: '" +
                                n +
                                "', id: '" +
                                i +
                                "')",
                              t
                            ),
                          h.reject(t)
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
                n([u.property()], t.prototype, "layer", void 0),
                n([u.property()], t.prototype, "parent", void 0),
                n(
                  [
                    u.property({
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
                    u.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                n([u.property()], t.prototype, "view", void 0),
                n(
                  [u.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                n(
                  [
                    u.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                n([u.subclass("esri.views.layers.LayerView")], t)
              );
            })(u.declared(r, o, s, d));
          }.apply(null, n)) || (e.exports = r);
    },
    2049: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(2100),
        i(2231),
        i(2232),
        i(2233),
        i(2230),
        i(2234),
        i(2235),
        i(2236),
        i(2034)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d, h) {
            var u = new h();
            return (
              h.parse(n, u),
              h.parse(i, u),
              h.parse(o, u),
              h.parse(l, u),
              h.parse(s, u),
              h.parse(a, u),
              h.parse(d, u),
              h.parse(r, u),
              u
            );
          }.apply(null, n)) || (e.exports = r);
    },
    2054: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (r = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = new Uint32Array(1),
              n = new Uint8Array(i.buffer);
            t.int32To4Bytes = function(e) {
              return (i[0] = 0 | e), [n[0], n[1], n[2], n[3]];
            };
          }.apply(null, n)) || (e.exports = r);
    },
    2075: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (r = function(e, t) {
            return (function() {
              function e(e) {
                (this._array = []),
                  e <= 0 && console.error("strideInBytes must be positive!"),
                  (this._stride = e);
              }
              return (
                Object.defineProperty(e.prototype, "array", {
                  get: function() {
                    return this._array;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "index", {
                  get: function() {
                    return (4 * this._array.length) / this._stride;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "itemSize", {
                  get: function() {
                    return this._stride;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "sizeInBytes", {
                  get: function() {
                    return 4 * this._array.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.reset = function() {
                  this.array.length = 0;
                }),
                (e.prototype.toBuffer = function() {
                  return new Uint32Array(this._array).buffer;
                }),
                (e.i1616to32 = function(e, t) {
                  return (65535 & e) | (t << 16);
                }),
                (e.i8888to32 = function(e, t, i, n) {
                  return (
                    (255 & e) | ((255 & t) << 8) | ((255 & i) << 16) | (n << 24)
                  );
                }),
                (e.i8816to32 = function(e, t, i) {
                  return (255 & e) | ((255 & t) << 8) | (i << 16);
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2091: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (r = function(e, t) {
            return (function() {
              function e(e) {
                if (((this._cache = {}), (this._lruQueue = []), e <= 0))
                  throw new Error("LRU cache size must be bigger than zero!");
                this._maxSize = e;
              }
              return (
                (e.prototype.has = function(e) {
                  return void 0 !== this._cache[e];
                }),
                (e.prototype.insert = function(e, t) {
                  null === this.use(e)
                    ? (this._collect(),
                      (this._cache[e] = t),
                      this._lruQueue.unshift(e))
                    : (this._cache[e] = t);
                }),
                (e.prototype.use = function(e) {
                  var t = this._cache[e];
                  return t
                    ? (this._lruQueue.splice(this._lruQueue.indexOf(e), 1),
                      this._lruQueue.unshift(e),
                      t)
                    : null;
                }),
                (e.prototype.print = function() {
                  for (var e = 0, t = this._lruQueue; e < t.length; e++) {
                    var i = t[e];
                    console.log("key: " + i + ", value: " + this._cache[i]);
                  }
                }),
                (e.prototype._collect = function() {
                  if (!(this._lruQueue.length < this._maxSize)) {
                    var e = this._lruQueue.pop(),
                      t = this._cache[e];
                    t && t.release && t.release(), delete this._cache[e];
                  }
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2105: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t]),
        void 0 ===
          (r = function(e, t) {
            return (function() {
              function e(e, t, i, n) {
                void 0 === e && (e = 0),
                  void 0 === t && (t = 0),
                  void 0 === i && (i = 0),
                  void 0 === n && (n = 0),
                  (this.x = e),
                  (this.y = t),
                  (this.width = i),
                  (this.height = n);
              }
              return (
                Object.defineProperty(e.prototype, "isEmpty", {
                  get: function() {
                    return this.width <= 0 || this.height <= 0;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2135: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(34),
        i(15),
        i(108),
        i(18),
        i(2091),
        i(9),
        i(313),
        i(260),
        i(259),
        i(415),
        i(2222),
        i(2223),
        i(2224),
        i(2225),
        i(2226),
        i(267),
        i.dj.m(e)
      ]),
        void 0 ===
          (r = function(
            e,
            t,
            i,
            n,
            r,
            o,
            a,
            s,
            l,
            d,
            h,
            u,
            c,
            f,
            _,
            p,
            m,
            v,
            g
          ) {
            var y = new a(10),
              x = new Map();
            return (function() {
              function t(e, t, i, n, r) {
                void 0 === n && (n = !1),
                  (this.devicePixelRatio = i),
                  (this.allowUpdates = n),
                  (this._spriteMosaic = null),
                  (this._glyphMosaic = null),
                  (this._connection = null),
                  (this._tileIndex = null),
                  (this._updateQueue = new Map()),
                  (this._ongoingRequests = new Map()),
                  (this._vectorTileLayer = e),
                  (this._styleRepository = e.styleRepository),
                  (this._requestUpdate = t);
              }
              return (
                (t.prototype.destroy = function() {
                  this.stop(),
                    (this._vectorTileLayer = this._requestUpdate = this._styleRepository = null),
                    this._spriteMosaic &&
                      (this._spriteMosaic.dispose(),
                      (this._spriteMosaic = null)),
                    this._glyphMosaic &&
                      (this._glyphMosaic.dispose(), (this._glyphMosaic = null));
                }),
                Object.defineProperty(t.prototype, "initialized", {
                  get: function() {
                    return (
                      this._broadcastPromise &&
                      this._broadcastPromise.isFulfilled()
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "spriteMosaic", {
                  get: function() {
                    return this._spriteMosaic;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "glyphMosaic", {
                  get: function() {
                    return this._glyphMosaic;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "ongoingRequestCount", {
                  get: function() {
                    return this._ongoingRequests.size;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.start = function() {
                  var t = this;
                  this.stop();
                  var o = this._styleRepository,
                    a = new p(o.sprite, this.devicePixelRatio);
                  a.devicePixelRatio = this.devicePixelRatio;
                  var s = a.load().then(function() {
                      (t._spriteMosaic = new _(1024, 1024, 250)),
                        t._spriteMosaic.setSpriteSource(a),
                        n("stable-symbol-rendering") &&
                          t._spriteMosaic.preloadSpriteItems();
                    }),
                    h = new f(o.glyphs);
                  this._glyphMosaic = new c(1024, 1024, h);
                  var u = this._fetchTileMap(
                      this._vectorTileLayer.tileIndexUrl
                    ),
                    m = d
                      .open(l.getAbsMid("./WorkerTileHandler", e, g), {
                        client: this
                      })
                      .then(function(e) {
                        t._connection = e;
                      }),
                    v = new i(function(e) {
                      s.isFulfilled() || s.cancel(),
                        u.isFulfilled() || u.cancel(),
                        m.isFulfilled() || m.cancel();
                    });
                  return (
                    r([s, u, m]).then(function(e) {
                      r(t._connection.broadcast("setLayers", o.styleJSON)).then(
                        function() {
                          v.resolve();
                        }
                      );
                    }),
                    (this._broadcastPromise = v.promise),
                    this._broadcastPromise
                  );
                }),
                (t.prototype.stop = function() {
                  this._broadcastPromise &&
                    !this._broadcastPromise.isFulfilled() &&
                    this._broadcastPromise.cancel(),
                    this._updateQueue.forEach(function(e) {
                      return e.cancel();
                    }),
                    this._ongoingRequests.forEach(function(e) {
                      return e.cancel();
                    }),
                    this._connection &&
                      (this._connection.close(), (this._connection = null));
                }),
                (t.prototype.updateTile = function(e, t) {
                  var i = this;
                  if (!this.allowUpdates) return s.resolve(null);
                  if (
                    !this._broadcastPromise.isFulfilled() ||
                    !this._connection
                  )
                    return s.reject(new Error("no connection"));
                  var n = Math.round(u.degToByte(t.state.rotation));
                  if (e.rotation === n) return s.resolve(null);
                  var r,
                    o = e.key;
                  return (
                    this._updateQueue.has(o.id) &&
                      (r = this._updateQueue.get(o.id)).cancel(),
                    (e.rotation = n),
                    (r = this._connection
                      .invoke("update", { key: e.id, rotation: n }, null, {
                        client: e.client
                      })
                      .then(function(t) {
                        return e.updateSymbolData(t), t;
                      })
                      .always(function() {
                        i._updateQueue.delete(o.id);
                      })),
                    this._updateQueue.set(e.id, r),
                    r
                  );
                }),
                (t.prototype.getVectorTileWithLRC = function(e, t, i, n) {
                  var r = this;
                  void 0 === n && (n = 0);
                  var o = new h(e, t, i, 0);
                  return this.getRefKey(o).then(function(e) {
                    var t = new v(
                      o,
                      e,
                      r._vectorTileLayer.tileInfo,
                      r._styleRepository,
                      0
                    );
                    return e
                      ? r.getTileData(t.key, 0).then(function(e) {
                          return t.setData(e.tileData, e.client), t;
                        })
                      : (t.setData(null, null), t);
                  });
                }),
                (t.prototype.getTileData = function(e, t) {
                  var i = this;
                  return this._broadcastPromise.isFulfilled() &&
                    this._connection
                    ? this.getRefKey(e).then(function(n) {
                        if (!n) return s.resolve(null);
                        var r = Math.round(u.degToByte(t));
                        return i
                          ._getTileData(i._connection, e, n, r)
                          .then(function(e) {
                            return e && e.tileData
                              ? { tileData: e.tileData, client: e.client }
                              : s.reject("No data");
                          });
                      })
                    : s.reject(new Error("no connection"));
                }),
                (t.prototype.getRefKey = function(e) {
                  return this._tileIndex
                    ? this._tileIndex.dataKey(e)
                    : s.resolve(e);
                }),
                (t.prototype.fetchTileData = function(e) {
                  var t = h.pool.acquire(e),
                    i = this._vectorTileLayer.getTileUrl(t.level, t.row, t.col);
                  return (
                    h.pool.release(t),
                    o(i, {
                      callbackParamName: "callback",
                      responseType: "array-buffer"
                    }).then(function(e) {
                      return { result: e.data, transferList: [e.data] };
                    })
                  );
                }),
                (t.prototype.getSprites = function(e) {
                  return this._spriteMosaic.getSpriteItems(e);
                }),
                (t.prototype.getGlyphs = function(e) {
                  return this._glyphMosaic.getGlyphItems(
                    e.tileID,
                    e.font,
                    e.codePoints
                  );
                }),
                (t.prototype.getStyleRepository = function() {
                  return this._styleRepository;
                }),
                (t.prototype.getTileIndex = function() {
                  return this._tileIndex;
                }),
                (t.prototype._getTileData = function(e, t, i, n) {
                  var r = this,
                    o = { client: null },
                    a = this._ongoingRequests.get(t.id);
                  return (
                    a ||
                    ((a = this._connection
                      .invoke(
                        "getTile",
                        {
                          key: t.id,
                          refKey: i.id,
                          rotation: n,
                          cacheTile: this.allowUpdates
                        },
                        null,
                        o
                      )
                      .then(function(e) {
                        return (
                          r._ongoingRequests.delete(t.id),
                          { tileData: e, client: o.client }
                        );
                      })
                      .catch(function(e) {
                        return (
                          r._ongoingRequests.delete(t.id),
                          r._connection.invoke(
                            "destructTileData",
                            t.id,
                            null,
                            o
                          ),
                          s.reject(e)
                        );
                      })),
                    this._ongoingRequests.set(t.id, a),
                    a)
                  );
                }),
                (t.prototype._fetchTileMap = function(e) {
                  var t = this;
                  if (
                    this._vectorTileLayer.capabilities.operations
                      .supportsTileMap &&
                    this._vectorTileLayer.tilemapCache
                  )
                    return (
                      (this._tileIndex = new m(
                        this._vectorTileLayer.tilemapCache
                      )),
                      s.resolve()
                    );
                  if (!e) return s.resolve();
                  if (y.has(e))
                    return (this._tileIndex = y.use(e)), s.resolve();
                  if (x.has(e))
                    return x.get(e).then(function(e) {
                      t._tileIndex = new m(e.data);
                    });
                  var i = o(e, {
                    callbackParamName: "callback",
                    responseType: "json"
                  });
                  return (
                    i.then(function(i) {
                      (t._tileIndex = new m(i.data)),
                        x.delete(e),
                        y.insert(e, t._tileIndex);
                    }),
                    x.set(e, i),
                    i
                  );
                }),
                t
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2136: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(2105)]),
        void 0 ===
          (r = function(e, t, i) {
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
                    var n = null, r = -1, o = 0;
                    o < this._free.length;
                    ++o
                  ) {
                    var a = this._free[o];
                    e <= a.width &&
                      t <= a.height &&
                      (null === n || (a.y <= n.y && a.x <= n.x)) &&
                      ((n = a), (r = o));
                  }
                  return null === n
                    ? new i()
                    : (this._free.splice(r, 1),
                      n.width < n.height
                        ? (n.width > e &&
                            this._free.push(
                              new i(n.x + e, n.y, n.width - e, t)
                            ),
                          n.height > t &&
                            this._free.push(
                              new i(n.x, n.y + t, n.width, n.height - t)
                            ))
                        : (n.width > e &&
                            this._free.push(
                              new i(n.x + e, n.y, n.width - e, n.height)
                            ),
                          n.height > t &&
                            this._free.push(
                              new i(n.x, n.y + t, e, n.height - t)
                            )),
                      new i(n.x, n.y, e, t));
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
          }.apply(null, n)) || (e.exports = r);
    },
    2137: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(417),
        i(415),
        i(2229),
        i(2237),
        i(2228),
        i(2238),
        i(2239),
        i(2240),
        i(2243),
        i(93)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d, h, u) {
            return (function() {
              function e() {
                (this._extrudeRotateVector = new Float32Array([0, 0, 1])),
                  (this._extrudeScaleVector = new Float32Array([1, 1, 1])),
                  (this._state = { rotation: 0, width: 0, height: 0 }),
                  (this._cachedWidth = 0),
                  (this._cachedHeight = 0),
                  (this._cachedRotation = 0);
              }
              return (
                (e.prototype.initialize = function(e, t, i) {
                  void 0 === i && (i = !0),
                    (this._SpriteMosaic = e),
                    (this._glyphMosaic = t),
                    (this._ignoreSpeed = !i),
                    (this._backgroundRenderer = new r()),
                    (this._lineRenderer = new l()),
                    (this._fillRenderer = new s()),
                    (this._symbolRenderer = new d()),
                    (this._circleRenderer = new o()),
                    (this._tileInfoRenderer = new h()),
                    (this._fadeRecorder = new a.FadeRecorder(300)),
                    (this._extrudeMatrix = new Float32Array(16)),
                    (this._extrudeNoRotationMatrix = new Float32Array(16)),
                    (this._backgroundColor = new Float32Array([1, 0, 0, 1]));
                }),
                (e.prototype.dispose = function() {
                  this._backgroundRenderer &&
                    (this._backgroundRenderer.dispose(),
                    (this._backgroundRenderer = null)),
                    this._lineRenderer &&
                      (this._lineRenderer.dispose(),
                      (this._lineRenderer = null)),
                    this._fillRenderer &&
                      (this._fillRenderer.dispose(),
                      (this._fillRenderer = null)),
                    this._symbolRenderer &&
                      (this._symbolRenderer.dispose(),
                      (this._symbolRenderer = null)),
                    this._circleRenderer &&
                      (this._circleRenderer.dispose(),
                      (this._circleRenderer = null)),
                    this._tileInfoRenderer &&
                      (this._tileInfoRenderer.dispose(),
                      (this._tileInfoRenderer = null)),
                    this._hittestFBO &&
                      (this._hittestFBO.dispose(), (this._hittestFBO = null));
                }),
                (e.prototype.setStateParams = function(e, t, r) {
                  this._fadeRecorder.recordLevel(r),
                    (this._state = e),
                    (this._state.width === this._cachedWidth &&
                      this._state.height === this._cachedHeight &&
                      this._state.rotation === this._cachedRotation) ||
                      ((this._extrudeScaleVector[0] = 2 / e.width),
                      (this._extrudeScaleVector[1] = -2 / e.height),
                      i.identity(this._extrudeMatrix),
                      i.rotate(
                        this._extrudeMatrix,
                        this._extrudeMatrix,
                        -e.rotation * n.C_DEG_TO_RAD,
                        this._extrudeRotateVector
                      ),
                      i.scale(
                        this._extrudeMatrix,
                        this._extrudeMatrix,
                        this._extrudeScaleVector
                      ),
                      i.transpose(this._extrudeMatrix, this._extrudeMatrix),
                      i.identity(this._extrudeNoRotationMatrix),
                      i.scale(
                        this._extrudeNoRotationMatrix,
                        this._extrudeNoRotationMatrix,
                        this._extrudeScaleVector
                      ),
                      i.transpose(
                        this._extrudeNoRotationMatrix,
                        this._extrudeNoRotationMatrix
                      ),
                      (this._cachedWidth = this._state.width),
                      (this._cachedHeight = this._state.height),
                      (this._cachedRotation = this._state.rotation));
                }),
                (e.prototype.drawClippingMasks = function(e, t) {
                  if (0 !== t.length) {
                    e.setDepthWriteEnabled(!1),
                      e.setDepthTestEnabled(!1),
                      e.setStencilTestEnabled(!0),
                      e.setBlendingEnabled(!1),
                      e.setColorMask(!1, !1, !1, !1),
                      e.setStencilOp(7680, 7680, 7681),
                      e.setStencilWriteMask(255),
                      e.setClearStencil(0);
                    var i = e.gl;
                    e.clear(i.STENCIL_BUFFER_BIT);
                    for (var n = 0, r = t; n < r.length; n++) {
                      var o = r[n];
                      o.attached &&
                        o.visible &&
                        (e.setStencilFunctionSeparate(
                          1032,
                          519,
                          o.stencilData.reference,
                          o.stencilData.mask
                        ),
                        this._backgroundRenderer.renderSolidColor(e, {
                          u_matrix: o.tileTransform.transform,
                          u_normalized_origin: o.tileTransform.displayCoord,
                          u_coord_range: o.coordRange,
                          u_depth: 0,
                          u_color: this._backgroundColor
                        }));
                    }
                    e.setColorMask(!0, !0, !0, !0), e.setBlendingEnabled(!0);
                  }
                }),
                (e.prototype.renderDebug = function(e, t) {
                  var i = t.key;
                  this._backgroundColor.set([
                    i.col % 2,
                    i.row % 2,
                    i.col % 2 == 0 && i.row % 2 == 0 ? 1 : 0,
                    0.5
                  ]),
                    this._backgroundRenderer.renderSolidColor(e, {
                      u_matrix: t.tileTransform.transform,
                      u_normalized_origin: t.tileTransform.displayCoord,
                      u_coord_range: t.coordRange,
                      u_depth: 0,
                      u_color: this._backgroundColor
                    });
                }),
                (e.prototype.renderBucket = function(e, t, i, n, r, o, a, s) {
                  if (
                    !(
                      (void 0 !== a.minzoom && a.minzoom > i) ||
                      (void 0 !== a.maxzoom && a.maxzoom <= i)
                    )
                  )
                    switch (t.type) {
                      case 0:
                        2 !== r && this._renderBackground(e, t, i, r, o, a, s);
                        break;
                      case 1:
                        2 !== r && this._renderFill(e, t, i, r, o, a, s);
                        break;
                      case 2:
                        (1 !== r && 3 !== r) ||
                          this._renderLine(e, t, i, r, o, a, s);
                        break;
                      case 3:
                        (2 !== r && 3 !== r) ||
                          this._renderSymbol(e, t, i, r, n, o, a, s);
                        break;
                      case 4:
                        (2 !== r && 3 !== r) ||
                          this._renderCircle(e, t, i, r, n, o, a, s);
                    }
                }),
                (e.prototype.renderTileInfo = function(e, t) {
                  this._tileInfoRenderer.render(e, t);
                }),
                (e.prototype.needsRedraw = function() {
                  return this._fadeRecorder.needsRedraw();
                }),
                (e.prototype.hitTest = function(e, t, i, n, r, o, a) {
                  var s = [0, 0],
                    l = [0, 0],
                    d = e.state;
                  d.toMap(s, [0, 0]), d.toMap(l, [o, o]);
                  var h = n.filter(function(e) {
                    return !(
                      s[0] > e.bounds[2] ||
                      l[0] < e.bounds[0] ||
                      s[1] < e.bounds[3] ||
                      l[1] > e.bounds[1]
                    );
                  });
                  if (0 === h.length) return [];
                  h.sort(function(e, t) {
                    return e.key.level - t.key.level;
                  });
                  for (var c = h.length, f = 1; f <= c; f++) {
                    (y = h[f - 1]).attached &&
                      ((y.stencilData.reference = f),
                      (y.stencilData.mask = 255));
                  }
                  a(d, r, h);
                  var _ = e.context;
                  this._hittestFBO ||
                    (this._hittestFBO = u.create(_, {
                      colorTarget: 0,
                      depthStencilTarget: 3,
                      width: o,
                      height: o
                    }));
                  var p = _.getViewport(),
                    m = _.getBoundFramebufferObject();
                  _.bindFramebuffer(this._hittestFBO),
                    _.setViewport(0, 0, o, o);
                  var v = _.gl;
                  _.setDepthWriteEnabled(!0),
                    _.setStencilWriteMask(255),
                    _.setClearColor(1, 1, 1, 1),
                    _.setClearDepth(1),
                    _.setClearStencil(0),
                    _.clear(
                      v.COLOR_BUFFER_BIT |
                        v.DEPTH_BUFFER_BIT |
                        v.STENCIL_BUFFER_BIT
                    ),
                    _.setDepthWriteEnabled(!1),
                    this.drawClippingMasks(_, h),
                    _.setBlendingEnabled(!1),
                    _.setStencilWriteMask(0),
                    _.setStencilOp(7680, 7680, 7681),
                    _.setDepthFunction(515),
                    _.setDepthTestEnabled(!0),
                    _.setDepthWriteEnabled(!0),
                    _.setStencilTestEnabled(!0);
                  for (var g = 0; g < c; g++) {
                    var y;
                    (y = h[g]).attached && y.doRender(e);
                  }
                  _.setStencilTestEnabled(!1),
                    _.setDepthTestEnabled(!1),
                    this._readbackBuffer ||
                      ((this._readbackBuffer = new Uint8Array(4 * o * o)),
                      (this._readbackBuffer32 = new Uint32Array(
                        this._readbackBuffer.buffer
                      ))),
                    this._hittestFBO.readPixels(
                      0,
                      0,
                      o,
                      o,
                      6408,
                      5121,
                      this._readbackBuffer
                    );
                  var x = new Set(),
                    b = o * o,
                    w = Math.round(b / 2),
                    D = this._readbackBuffer32[w];
                  4294967295 !== D && x.add(D);
                  for (f = 0; f < b; f++)
                    4294967295 !== (D = this._readbackBuffer32[f]) && x.add(D);
                  _.bindFramebuffer(m),
                    _.setViewport(p.x, p.y, p.width, p.height);
                  var z = [];
                  return (
                    x.forEach(function(e) {
                      z.push(e);
                    }),
                    z
                  );
                }),
                (e.prototype._renderBackground = function(e, t, i, n, r, o, a) {
                  this._backgroundRenderer.render(
                    e,
                    t,
                    i,
                    n,
                    r,
                    o,
                    this._SpriteMosaic,
                    this._SpriteMosaic.pixelRatio,
                    a
                  );
                }),
                (e.prototype._renderLine = function(e, t, i, n, r, o, a) {
                  this._lineRenderer.render(
                    e,
                    t,
                    i,
                    n,
                    this._state,
                    r,
                    o,
                    this._SpriteMosaic,
                    this._extrudeMatrix,
                    this._SpriteMosaic.pixelRatio,
                    a
                  );
                }),
                (e.prototype._renderFill = function(e, t, i, n, r, o, a) {
                  this._fillRenderer.render(
                    e,
                    t,
                    i,
                    this._state.rotation,
                    n,
                    r,
                    o,
                    this._SpriteMosaic,
                    this._extrudeMatrix,
                    this._SpriteMosaic.pixelRatio,
                    a
                  );
                }),
                (e.prototype._renderCircle = function(e, t, i, n, r, o, a, s) {
                  var l = !0;
                  r === o.key.level && (l = !1),
                    e.setStencilTestEnabled(l),
                    this._circleRenderer.render(
                      e,
                      t,
                      i,
                      n,
                      this._state.rotation,
                      o,
                      a,
                      this._extrudeMatrix,
                      s
                    );
                }),
                (e.prototype._renderSymbol = function(e, t, i, n, r, o, a, s) {
                  var l = !0;
                  r === o.key.level && (l = !1),
                    e.setStencilTestEnabled(l),
                    this._symbolRenderer.render(
                      e,
                      t,
                      i,
                      n,
                      this._state.rotation,
                      this._fadeRecorder.getFadeValues(this._ignoreSpeed),
                      o,
                      a,
                      this._SpriteMosaic,
                      this._glyphMosaic,
                      this._extrudeMatrix,
                      this._extrudeNoRotationMatrix,
                      this._SpriteMosaic.pixelRatio,
                      s
                    );
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2138: function(e, t, i) {
      var n, r;
      (n = [i(263)]),
        void 0 ===
          (r = function(e) {
            var t = {
              create: function() {
                var t = new e.ARRAY_TYPE(9);
                return (
                  (t[0] = 1),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 1),
                  (t[5] = 0),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 1),
                  t
                );
              },
              fromMat4: function(e, t) {
                return (
                  (e[0] = t[0]),
                  (e[1] = t[1]),
                  (e[2] = t[2]),
                  (e[3] = t[4]),
                  (e[4] = t[5]),
                  (e[5] = t[6]),
                  (e[6] = t[8]),
                  (e[7] = t[9]),
                  (e[8] = t[10]),
                  e
                );
              },
              clone: function(t) {
                var i = new e.ARRAY_TYPE(9);
                return (
                  (i[0] = t[0]),
                  (i[1] = t[1]),
                  (i[2] = t[2]),
                  (i[3] = t[3]),
                  (i[4] = t[4]),
                  (i[5] = t[5]),
                  (i[6] = t[6]),
                  (i[7] = t[7]),
                  (i[8] = t[8]),
                  i
                );
              },
              copy: function(e, t) {
                return (
                  (e[0] = t[0]),
                  (e[1] = t[1]),
                  (e[2] = t[2]),
                  (e[3] = t[3]),
                  (e[4] = t[4]),
                  (e[5] = t[5]),
                  (e[6] = t[6]),
                  (e[7] = t[7]),
                  (e[8] = t[8]),
                  e
                );
              },
              fromValues: function(t, i, n, r, o, a, s, l, d) {
                var h = new e.ARRAY_TYPE(9);
                return (
                  (h[0] = t),
                  (h[1] = i),
                  (h[2] = n),
                  (h[3] = r),
                  (h[4] = o),
                  (h[5] = a),
                  (h[6] = s),
                  (h[7] = l),
                  (h[8] = d),
                  h
                );
              },
              set: function(e, t, i, n, r, o, a, s, l, d) {
                return (
                  (e[0] = t),
                  (e[1] = i),
                  (e[2] = n),
                  (e[3] = r),
                  (e[4] = o),
                  (e[5] = a),
                  (e[6] = s),
                  (e[7] = l),
                  (e[8] = d),
                  e
                );
              },
              identity: function(e) {
                return (
                  (e[0] = 1),
                  (e[1] = 0),
                  (e[2] = 0),
                  (e[3] = 0),
                  (e[4] = 1),
                  (e[5] = 0),
                  (e[6] = 0),
                  (e[7] = 0),
                  (e[8] = 1),
                  e
                );
              },
              transpose: function(e, t) {
                if (e === t) {
                  var i = t[1],
                    n = t[2],
                    r = t[5];
                  (e[1] = t[3]),
                    (e[2] = t[6]),
                    (e[3] = i),
                    (e[5] = t[7]),
                    (e[6] = n),
                    (e[7] = r);
                } else
                  (e[0] = t[0]),
                    (e[1] = t[3]),
                    (e[2] = t[6]),
                    (e[3] = t[1]),
                    (e[4] = t[4]),
                    (e[5] = t[7]),
                    (e[6] = t[2]),
                    (e[7] = t[5]),
                    (e[8] = t[8]);
                return e;
              },
              invert: function(e, t) {
                var i = t[0],
                  n = t[1],
                  r = t[2],
                  o = t[3],
                  a = t[4],
                  s = t[5],
                  l = t[6],
                  d = t[7],
                  h = t[8],
                  u = h * a - s * d,
                  c = -h * o + s * l,
                  f = d * o - a * l,
                  _ = i * u + n * c + r * f;
                return _
                  ? ((_ = 1 / _),
                    (e[0] = u * _),
                    (e[1] = (-h * n + r * d) * _),
                    (e[2] = (s * n - r * a) * _),
                    (e[3] = c * _),
                    (e[4] = (h * i - r * l) * _),
                    (e[5] = (-s * i + r * o) * _),
                    (e[6] = f * _),
                    (e[7] = (-d * i + n * l) * _),
                    (e[8] = (a * i - n * o) * _),
                    e)
                  : null;
              },
              adjoint: function(e, t) {
                var i = t[0],
                  n = t[1],
                  r = t[2],
                  o = t[3],
                  a = t[4],
                  s = t[5],
                  l = t[6],
                  d = t[7],
                  h = t[8];
                return (
                  (e[0] = a * h - s * d),
                  (e[1] = r * d - n * h),
                  (e[2] = n * s - r * a),
                  (e[3] = s * l - o * h),
                  (e[4] = i * h - r * l),
                  (e[5] = r * o - i * s),
                  (e[6] = o * d - a * l),
                  (e[7] = n * l - i * d),
                  (e[8] = i * a - n * o),
                  e
                );
              },
              determinant: function(e) {
                var t = e[0],
                  i = e[1],
                  n = e[2],
                  r = e[3],
                  o = e[4],
                  a = e[5],
                  s = e[6],
                  l = e[7],
                  d = e[8];
                return (
                  t * (d * o - a * l) +
                  i * (-d * r + a * s) +
                  n * (l * r - o * s)
                );
              },
              multiply: function(e, t, i) {
                var n = t[0],
                  r = t[1],
                  o = t[2],
                  a = t[3],
                  s = t[4],
                  l = t[5],
                  d = t[6],
                  h = t[7],
                  u = t[8],
                  c = i[0],
                  f = i[1],
                  _ = i[2],
                  p = i[3],
                  m = i[4],
                  v = i[5],
                  g = i[6],
                  y = i[7],
                  x = i[8];
                return (
                  (e[0] = c * n + f * a + _ * d),
                  (e[1] = c * r + f * s + _ * h),
                  (e[2] = c * o + f * l + _ * u),
                  (e[3] = p * n + m * a + v * d),
                  (e[4] = p * r + m * s + v * h),
                  (e[5] = p * o + m * l + v * u),
                  (e[6] = g * n + y * a + x * d),
                  (e[7] = g * r + y * s + x * h),
                  (e[8] = g * o + y * l + x * u),
                  e
                );
              }
            };
            return (
              (t.mul = t.multiply),
              (t.translate = function(e, t, i) {
                var n = t[0],
                  r = t[1],
                  o = t[2],
                  a = t[3],
                  s = t[4],
                  l = t[5],
                  d = t[6],
                  h = t[7],
                  u = t[8],
                  c = i[0],
                  f = i[1];
                return (
                  (e[0] = n),
                  (e[1] = r),
                  (e[2] = o),
                  (e[3] = a),
                  (e[4] = s),
                  (e[5] = l),
                  (e[6] = c * n + f * a + d),
                  (e[7] = c * r + f * s + h),
                  (e[8] = c * o + f * l + u),
                  e
                );
              }),
              (t.rotate = function(e, t, i) {
                var n = t[0],
                  r = t[1],
                  o = t[2],
                  a = t[3],
                  s = t[4],
                  l = t[5],
                  d = t[6],
                  h = t[7],
                  u = t[8],
                  c = Math.sin(i),
                  f = Math.cos(i);
                return (
                  (e[0] = f * n + c * a),
                  (e[1] = f * r + c * s),
                  (e[2] = f * o + c * l),
                  (e[3] = f * a - c * n),
                  (e[4] = f * s - c * r),
                  (e[5] = f * l - c * o),
                  (e[6] = d),
                  (e[7] = h),
                  (e[8] = u),
                  e
                );
              }),
              (t.scale = function(e, t, i) {
                var n = i[0],
                  r = i[1];
                return (
                  (e[0] = n * t[0]),
                  (e[1] = n * t[1]),
                  (e[2] = n * t[2]),
                  (e[3] = r * t[3]),
                  (e[4] = r * t[4]),
                  (e[5] = r * t[5]),
                  (e[6] = t[6]),
                  (e[7] = t[7]),
                  (e[8] = t[8]),
                  e
                );
              }),
              (t.fromTranslation = function(e, t) {
                return (
                  (e[0] = 1),
                  (e[1] = 0),
                  (e[2] = 0),
                  (e[3] = 0),
                  (e[4] = 1),
                  (e[5] = 0),
                  (e[6] = t[0]),
                  (e[7] = t[1]),
                  (e[8] = 1),
                  e
                );
              }),
              (t.fromRotation = function(e, t) {
                var i = Math.sin(t),
                  n = Math.cos(t);
                return (
                  (e[0] = n),
                  (e[1] = i),
                  (e[2] = 0),
                  (e[3] = -i),
                  (e[4] = n),
                  (e[5] = 0),
                  (e[6] = 0),
                  (e[7] = 0),
                  (e[8] = 1),
                  e
                );
              }),
              (t.fromScaling = function(e, t) {
                return (
                  (e[0] = t[0]),
                  (e[1] = 0),
                  (e[2] = 0),
                  (e[3] = 0),
                  (e[4] = t[1]),
                  (e[5] = 0),
                  (e[6] = 0),
                  (e[7] = 0),
                  (e[8] = 1),
                  e
                );
              }),
              (t.fromMat2d = function(e, t) {
                return (
                  (e[0] = t[0]),
                  (e[1] = t[1]),
                  (e[2] = 0),
                  (e[3] = t[2]),
                  (e[4] = t[3]),
                  (e[5] = 0),
                  (e[6] = t[4]),
                  (e[7] = t[5]),
                  (e[8] = 1),
                  e
                );
              }),
              (t.fromQuat = function(e, t) {
                var i = t[0],
                  n = t[1],
                  r = t[2],
                  o = t[3],
                  a = i + i,
                  s = n + n,
                  l = r + r,
                  d = i * a,
                  h = n * a,
                  u = n * s,
                  c = r * a,
                  f = r * s,
                  _ = r * l,
                  p = o * a,
                  m = o * s,
                  v = o * l;
                return (
                  (e[0] = 1 - u - _),
                  (e[3] = h - v),
                  (e[6] = c + m),
                  (e[1] = h + v),
                  (e[4] = 1 - d - _),
                  (e[7] = f - p),
                  (e[2] = c - m),
                  (e[5] = f + p),
                  (e[8] = 1 - d - u),
                  e
                );
              }),
              (t.normalFromMat4 = function(e, t) {
                var i = t[0],
                  n = t[1],
                  r = t[2],
                  o = t[3],
                  a = t[4],
                  s = t[5],
                  l = t[6],
                  d = t[7],
                  h = t[8],
                  u = t[9],
                  c = t[10],
                  f = t[11],
                  _ = t[12],
                  p = t[13],
                  m = t[14],
                  v = t[15],
                  g = i * s - n * a,
                  y = i * l - r * a,
                  x = i * d - o * a,
                  b = n * l - r * s,
                  w = n * d - o * s,
                  D = r * d - o * l,
                  z = h * p - u * _,
                  M = h * m - c * _,
                  A = h * v - f * _,
                  T = u * m - c * p,
                  P = u * v - f * p,
                  S = c * v - f * m,
                  I = g * S - y * P + x * T + b * A - w * M + D * z;
                return I
                  ? ((I = 1 / I),
                    (e[0] = (s * S - l * P + d * T) * I),
                    (e[1] = (l * A - a * S - d * M) * I),
                    (e[2] = (a * P - s * A + d * z) * I),
                    (e[3] = (r * P - n * S - o * T) * I),
                    (e[4] = (i * S - r * A + o * M) * I),
                    (e[5] = (n * A - i * P - o * z) * I),
                    (e[6] = (p * D - m * w + v * b) * I),
                    (e[7] = (m * x - _ * D - v * y) * I),
                    (e[8] = (_ * w - p * x + v * g) * I),
                    e)
                  : null;
              }),
              (t.str = function(e) {
                return (
                  "mat3(" +
                  e[0] +
                  ", " +
                  e[1] +
                  ", " +
                  e[2] +
                  ", " +
                  e[3] +
                  ", " +
                  e[4] +
                  ", " +
                  e[5] +
                  ", " +
                  e[6] +
                  ", " +
                  e[7] +
                  ", " +
                  e[8] +
                  ")"
                );
              }),
              (t.frob = function(e) {
                return Math.sqrt(
                  Math.pow(e[0], 2) +
                    Math.pow(e[1], 2) +
                    Math.pow(e[2], 2) +
                    Math.pow(e[3], 2) +
                    Math.pow(e[4], 2) +
                    Math.pow(e[5], 2) +
                    Math.pow(e[6], 2) +
                    Math.pow(e[7], 2) +
                    Math.pow(e[8], 2)
                );
              }),
              (t.add = function(e, t, i) {
                return (
                  (e[0] = t[0] + i[0]),
                  (e[1] = t[1] + i[1]),
                  (e[2] = t[2] + i[2]),
                  (e[3] = t[3] + i[3]),
                  (e[4] = t[4] + i[4]),
                  (e[5] = t[5] + i[5]),
                  (e[6] = t[6] + i[6]),
                  (e[7] = t[7] + i[7]),
                  (e[8] = t[8] + i[8]),
                  e
                );
              }),
              (t.subtract = function(e, t, i) {
                return (
                  (e[0] = t[0] - i[0]),
                  (e[1] = t[1] - i[1]),
                  (e[2] = t[2] - i[2]),
                  (e[3] = t[3] - i[3]),
                  (e[4] = t[4] - i[4]),
                  (e[5] = t[5] - i[5]),
                  (e[6] = t[6] - i[6]),
                  (e[7] = t[7] - i[7]),
                  (e[8] = t[8] - i[8]),
                  e
                );
              }),
              (t.sub = t.subtract),
              (t.multiplyScalar = function(e, t, i) {
                return (
                  (e[0] = t[0] * i),
                  (e[1] = t[1] * i),
                  (e[2] = t[2] * i),
                  (e[3] = t[3] * i),
                  (e[4] = t[4] * i),
                  (e[5] = t[5] * i),
                  (e[6] = t[6] * i),
                  (e[7] = t[7] * i),
                  (e[8] = t[8] * i),
                  e
                );
              }),
              (t.multiplyScalarAndAdd = function(e, t, i, n) {
                return (
                  (e[0] = t[0] + i[0] * n),
                  (e[1] = t[1] + i[1] * n),
                  (e[2] = t[2] + i[2] * n),
                  (e[3] = t[3] + i[3] * n),
                  (e[4] = t[4] + i[4] * n),
                  (e[5] = t[5] + i[5] * n),
                  (e[6] = t[6] + i[6] * n),
                  (e[7] = t[7] + i[7] * n),
                  (e[8] = t[8] + i[8] * n),
                  e
                );
              }),
              (t.exactEquals = function(e, t) {
                return (
                  e[0] === t[0] &&
                  e[1] === t[1] &&
                  e[2] === t[2] &&
                  e[3] === t[3] &&
                  e[4] === t[4] &&
                  e[5] === t[5] &&
                  e[6] === t[6] &&
                  e[7] === t[7] &&
                  e[8] === t[8]
                );
              }),
              (t.equals = function(t, i) {
                var n = t[0],
                  r = t[1],
                  o = t[2],
                  a = t[3],
                  s = t[4],
                  l = t[5],
                  d = t[6],
                  h = t[7],
                  u = t[8],
                  c = i[0],
                  f = i[1],
                  _ = i[2],
                  p = i[3],
                  m = i[4],
                  v = i[5],
                  g = t[6],
                  y = i[7],
                  x = i[8];
                return (
                  Math.abs(n - c) <=
                    e.EPSILON * Math.max(1, Math.abs(n), Math.abs(c)) &&
                  Math.abs(r - f) <=
                    e.EPSILON * Math.max(1, Math.abs(r), Math.abs(f)) &&
                  Math.abs(o - _) <=
                    e.EPSILON * Math.max(1, Math.abs(o), Math.abs(_)) &&
                  Math.abs(a - p) <=
                    e.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) &&
                  Math.abs(s - m) <=
                    e.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) &&
                  Math.abs(l - v) <=
                    e.EPSILON * Math.max(1, Math.abs(l), Math.abs(v)) &&
                  Math.abs(d - g) <=
                    e.EPSILON * Math.max(1, Math.abs(d), Math.abs(g)) &&
                  Math.abs(h - y) <=
                    e.EPSILON * Math.max(1, Math.abs(h), Math.abs(y)) &&
                  Math.abs(u - x) <=
                    e.EPSILON * Math.max(1, Math.abs(u), Math.abs(x))
                );
              }),
              t
            );
          }.apply(null, n)) || (e.exports = r);
    },
    2222: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(15), i(9), i(2105), i(2136), i(50)]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a) {
            var s;
            return (
              i("stable-symbol-rendering") && (s = new Set()),
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
                    (this._binPack = new o(e - 4, t - 4)),
                    this._glyphData.push(new Uint8Array(e * t)),
                    this._dirties.push(!0),
                    this._textures.push(void 0);
                }
                return (
                  (e.prototype.getGlyphItems = function(e, t, a) {
                    for (
                      var l = this,
                        d = [],
                        h = this._glyphSource,
                        u = new Set(),
                        c = 0,
                        f = a;
                      c < f.length;
                      c++
                    ) {
                      var _ = f[c],
                        p = Math.floor(_ * (1 / 256));
                      u.add(p);
                    }
                    var m = [];
                    return (
                      u.forEach(function(e) {
                        if (e <= 256) {
                          var i = t + e;
                          if (l._rangePromises.has(i))
                            m.push(l._rangePromises.get(i));
                          else {
                            var n = h.getRange(t, e).always(function() {
                              l._rangePromises.delete(i);
                            });
                            l._rangePromises.set(i, n), m.push(n);
                          }
                        }
                      }),
                      n.all(m).then(function(e) {
                        var n,
                          c = l._glyphIndex[t];
                        if (
                          (c || ((c = {}), (l._glyphIndex[t] = c)),
                          i("stable-symbol-rendering"))
                        ) {
                          s.clear();
                          for (var f = 0, _ = a; f < _.length; f++) {
                            var p = _[f];
                            s.add(p);
                          }
                          var m = [];
                          u.forEach(function(e) {
                            m.push(e);
                          }),
                            m.sort(),
                            (n = []);
                          for (var v = 0, g = m; v < g.length; v++)
                            for (var y = g[v], x = 0; x < 256; ++x)
                              n.push(256 * y + x);
                        } else n = a;
                        for (var b = 0, w = n; b < w.length; b++) {
                          var D = c[(p = w[b])];
                          if (D)
                            (i("stable-symbol-rendering") && !s.has(p)) ||
                              (d[p] = {
                                rect: D.rect,
                                metrics: D.metrics,
                                page: D.page
                              });
                          else {
                            var z = h.getGlyph(t, p);
                            if (z && z.metrics) {
                              var M = z.metrics,
                                A = void 0;
                              if (0 === M.width) A = new r(0, 0, 0, 0);
                              else {
                                var T = M.width + 6,
                                  P = M.height + 6,
                                  S = T % 4 ? 4 - (T % 4) : 4,
                                  I = P % 4 ? 4 - (P % 4) : 4;
                                1 === S && (S = 5),
                                  1 === I && (I = 5),
                                  (A = l._binPack.allocate(T + S, P + I))
                                    .isEmpty &&
                                    (l._dirties[l._currentPage] ||
                                      (l._glyphData[l._currentPage] = null),
                                    (l._currentPage = l._glyphData.length),
                                    l._glyphData.push(
                                      new Uint8Array(l.width * l.height)
                                    ),
                                    l._dirties.push(!0),
                                    l._textures.push(void 0),
                                    (l._binPack = new o(
                                      l.width - 4,
                                      l.height - 4
                                    )),
                                    (A = l._binPack.allocate(T + S, P + I)));
                                var V = l._glyphData[l._currentPage],
                                  R = z.bitmap,
                                  O = void 0,
                                  C = void 0;
                                if (R)
                                  for (var k = 0; k < P; k++) {
                                    (O = T * k),
                                      (C = l.width * (A.y + k + 1) + A.x);
                                    for (var U = 0; U < T; U++)
                                      V[C + U + 1] = R[O + U];
                                  }
                              }
                              (c[p] = {
                                rect: A,
                                metrics: M,
                                tileIDs: null,
                                page: l._currentPage
                              }),
                                (i("stable-symbol-rendering") && !s.has(p)) ||
                                  (d[p] = {
                                    rect: A,
                                    metrics: M,
                                    page: l._currentPage
                                  }),
                                (l._dirties[l._currentPage] = !0);
                            }
                          }
                        }
                        return d;
                      })
                    );
                  }),
                  (e.prototype.removeGlyphs = function(e) {
                    for (var t in this._glyphIndex) {
                      var i = this._glyphIndex[t];
                      if (i) {
                        var n = void 0;
                        for (var r in i)
                          if (
                            ((n = i[r]).tileIDs.delete(e), 0 === n.tileIDs.size)
                          ) {
                            for (
                              var o = this._glyphData[n.page],
                                a = n.rect,
                                s = void 0,
                                l = void 0,
                                d = 0;
                              d < a.height;
                              d++
                            )
                              for (
                                s = this.width * (a.y + d) + a.x, l = 0;
                                l < a.width;
                                l++
                              )
                                o[s + l] = 0;
                            delete i[r], (this._dirties[n.page] = !0);
                          }
                      }
                    }
                  }),
                  (e.prototype.bind = function(e, t, i, n) {
                    void 0 === n && (n = 0),
                      this._textures[i] ||
                        (this._textures[i] = new a(
                          e,
                          {
                            pixelFormat: 6406,
                            dataType: 5121,
                            width: this.width,
                            height: this.height
                          },
                          new Uint8Array(this.width * this.height)
                        ));
                    var r = this._textures[i];
                    r.setSamplingMode(t),
                      this._dirties[i] && r.setData(this._glyphData[i]),
                      e.bindTexture(r, n),
                      (this._dirties[i] = !1);
                  }),
                  (e.prototype.dispose = function() {
                    this._binPack = null;
                    for (var e = 0, t = this._textures; e < t.length; e++) {
                      var i = t[e];
                      i && i.dispose();
                    }
                    this._textures.length = 0;
                  }),
                  e
                );
              })()
            );
          }.apply(null, n)) || (e.exports = r);
    },
    2223: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(18), i(784), i(9)]),
        void 0 ===
          (r = function(e, t, i, n, r) {
            var o = (function() {
                function e(e) {
                  if (((this._metrics = []), (this._bitmaps = []), e))
                    for (; e.next(); )
                      switch (e.tag()) {
                        case 1:
                          for (var t = e.getMessage(); t.next(); )
                            switch (t.tag()) {
                              case 3:
                                for (
                                  var i = t.getMessage(),
                                    n = void 0,
                                    r = void 0,
                                    o = void 0,
                                    a = void 0,
                                    s = void 0,
                                    l = void 0,
                                    d = void 0;
                                  i.next();

                                )
                                  switch (i.tag()) {
                                    case 1:
                                      n = i.getUInt32();
                                      break;
                                    case 2:
                                      r = i.getBytes();
                                      break;
                                    case 3:
                                      o = i.getUInt32();
                                      break;
                                    case 4:
                                      a = i.getUInt32();
                                      break;
                                    case 5:
                                      s = i.getSInt32();
                                      break;
                                    case 6:
                                      l = i.getSInt32();
                                      break;
                                    case 7:
                                      d = i.getUInt32();
                                      break;
                                    default:
                                      i.skip();
                                  }
                                n &&
                                  ((this._metrics[n] = {
                                    width: o,
                                    height: a,
                                    left: s,
                                    top: l,
                                    advance: d
                                  }),
                                  (this._bitmaps[n] = r));
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
              a = (function() {
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
                  var a = this._getFontStack(e);
                  if (a.getRange(t)) return r.resolve();
                  var s = 256 * t,
                    l = s + 255,
                    d = this._baseURL
                      .replace("{fontstack}", e)
                      .replace("{range}", s + "-" + l);
                  return i(d, {
                    callbackParamName: "callback",
                    responseType: "array-buffer"
                  })
                    .then(function(e) {
                      a.addRange(
                        t,
                        new o(
                          new n(new Uint8Array(e.data), new DataView(e.data))
                        )
                      );
                    })
                    .catch(function() {
                      a.addRange(t, new o());
                    });
                }),
                (e.prototype.getGlyph = function(e, t) {
                  var i = this._getFontStack(e);
                  if (i) {
                    var n = Math.floor(t / 256);
                    if (!(n > 256)) {
                      var r = i.getRange(n);
                      if (r)
                        return {
                          metrics: r.getMetrics(t),
                          bitmap: r.getBitmap(t)
                        };
                    }
                  }
                }),
                (e.prototype._getFontStack = function(e) {
                  var t = this._glyphInfo[e];
                  return t || (t = this._glyphInfo[e] = new a()), t;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2224: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(415), i(2105), i(2136), i(50)]),
        void 0 ===
          (r = function(e, t, i, n, r, o) {
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
                  (this._mosaicRects = {}),
                  (this.pixelRatio = 1),
                  (e <= 0 || t <= 0) &&
                    console.error(
                      "Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"
                    ),
                  (this._pageWidth = e),
                  (this._pageHeight = t),
                  i > 0 && (this._maxItemSize = i),
                  (this._binPack = new r(e - 4, t - 4));
              }
              return (
                (e.prototype.getWidth = function(e) {
                  return e >= this._size.length ? -1 : this._size[e][0];
                }),
                (e.prototype.getHeight = function(e) {
                  return e >= this._size.length ? -1 : this._size[e][1];
                }),
                (e.prototype.setSpriteSource = function(e) {
                  if (
                    (this.dispose(),
                    (this.pixelRatio = e.devicePixelRatio),
                    0 === this._mosaicsData.length)
                  ) {
                    this._binPack = new r(
                      this._pageWidth - 4,
                      this._pageHeight - 4
                    );
                    var t = Math.floor(this._pageWidth),
                      i = Math.floor(this._pageHeight),
                      n = new Uint32Array(t * i);
                    (this._mosaicsData[0] = n),
                      this._dirties.push(!0),
                      this._size.push([this._pageWidth, this._pageHeight]),
                      this._textures.push(void 0);
                  }
                  this._sprites = e;
                }),
                (e.prototype.getSpriteItem = function(e, t) {
                  void 0 === t && (t = !1);
                  var i = this._mosaicRects[e];
                  if (i) return i;
                  if (!this._sprites || "loaded" !== this._sprites.loadStatus)
                    return null;
                  var n = this._sprites.getSpriteInfo(e);
                  if (
                    !n ||
                    !n.width ||
                    !n.height ||
                    n.width < 0 ||
                    n.height < 0
                  )
                    return null;
                  var r = n.width,
                    o = n.height,
                    a = this._allocateImage(r, o),
                    s = a[0],
                    l = a[1],
                    d = a[2];
                  return s.width <= 0
                    ? null
                    : (this._copy(s, n, l, d, t),
                      (i = {
                        rect: s,
                        width: r,
                        height: o,
                        anchorX: 0,
                        anchorY: 0,
                        sdf: n.sdf,
                        pixelRatio: n.pixelRatio,
                        page: l
                      }),
                      (this._mosaicRects[e] = i),
                      i);
                }),
                (e.prototype.preloadSpriteItems = function() {
                  for (
                    var e = 0, t = this._sprites.spriteNames;
                    e < t.length;
                    e++
                  ) {
                    var i = t[e];
                    this.getSpriteItem(i, !0);
                  }
                }),
                (e.prototype.getSpriteItems = function(e) {
                  for (var t = {}, i = 0, n = e; i < n.length; i++) {
                    var r = n[i];
                    t[r] = this.getSpriteItem(r);
                  }
                  return t;
                }),
                (e.prototype.getMosaicItemPosition = function(e, t) {
                  var i = this.getSpriteItem(e, t),
                    n = i && i.rect;
                  if (!n) return null;
                  (n.width = i.width), (n.height = i.height);
                  var r = i.width,
                    o = i.height;
                  return {
                    size: [i.width, i.height],
                    tl: [
                      (n.x + 2) / this._size[i.page][0],
                      (n.y + 2) / this._size[i.page][1]
                    ],
                    br: [
                      (n.x + 2 + r) / this._size[i.page][0],
                      (n.y + 2 + o) / this._size[i.page][1]
                    ],
                    page: i.page
                  };
                }),
                (e.prototype.bind = function(e, t, i, n) {
                  void 0 === i && (i = 0),
                    void 0 === n && (n = 0),
                    this._textures[i] ||
                      (this._textures[i] = new o(
                        e,
                        {
                          pixelFormat: 6408,
                          dataType: 5121,
                          width: this._size[i][0],
                          height: this._size[i][1]
                        },
                        new Uint8Array(this._mosaicsData[i].buffer)
                      ));
                  var r = this._textures[i];
                  r.setSamplingMode(t),
                    this._dirties[i] &&
                      r.setData(new Uint8Array(this._mosaicsData[i].buffer)),
                    e.bindTexture(r, n),
                    (this._dirties[i] = !1);
                }),
                (e._copyBits = function(e, t, i, n, r, o, a, s, l, d, h) {
                  var u = n * t + i,
                    c = s * o + a;
                  if (h) {
                    c -= o;
                    for (
                      var f = -1;
                      f <= d;
                      u = (((++f + d) % d) + n) * t + i, c += o
                    )
                      for (var _ = -1; _ <= l; _++)
                        r[c + _] = e[u + ((_ + l) % l)];
                  } else
                    for (f = 0; f < d; f++) {
                      for (_ = 0; _ < l; _++) r[c + _] = e[u + _];
                      (u += t), (c += o);
                    }
                }),
                (e.prototype._copy = function(t, i, n, r, o, a) {
                  if (
                    this._sprites &&
                    "loaded" === this._sprites.loadStatus &&
                    !(n >= this._mosaicsData.length)
                  ) {
                    var s = new Uint32Array(
                        a ? a.buffer : this._sprites.image.buffer
                      ),
                      l = this._mosaicsData[n];
                    (l && s) ||
                      console.error(
                        "Source or target images are uninitialized!"
                      );
                    var d = a ? i.width : this._sprites.width;
                    e._copyBits(
                      s,
                      d,
                      i.x,
                      i.y,
                      l,
                      r[0],
                      t.x + 2,
                      t.y + 2,
                      i.width,
                      i.height,
                      o
                    ),
                      (this._dirties[n] = !0);
                  }
                }),
                (e.prototype._allocateImage = function(e, t) {
                  (e += 2), (t += 2);
                  var o = Math.max(e, t);
                  if (this._maxItemSize && this._maxItemSize < o) {
                    var a = Math.pow(2, Math.ceil(i.log2(e))),
                      s = Math.pow(2, Math.ceil(i.log2(t))),
                      l = new n(0, 0, e, t);
                    return (
                      this._mosaicsData.push(new Uint32Array(a * s)),
                      this._dirties.push(!0),
                      this._size.push([a, s]),
                      this._textures.push(void 0),
                      [l, this._mosaicsData.length - 1, [a, s]]
                    );
                  }
                  var d = e % 4 ? 4 - (e % 4) : 4,
                    h = t % 4 ? 4 - (t % 4) : 4;
                  1 === d && (d = 5), 1 === h && (h = 5);
                  var u = this._binPack.allocate(e + d, t + h);
                  return u.width <= 0
                    ? (this._dirties[this._currentPage] ||
                        (this._mosaicsData[this._currentPage] = null),
                      (this._currentPage = this._mosaicsData.length),
                      this._mosaicsData.push(
                        new Uint32Array(this._pageWidth * this._pageHeight)
                      ),
                      this._dirties.push(!0),
                      this._size.push([this._pageWidth, this._pageHeight]),
                      this._textures.push(void 0),
                      (this._binPack = new r(
                        this._pageWidth - 4,
                        this._pageHeight - 4
                      )),
                      this._allocateImage(e, t))
                    : [
                        u,
                        this._currentPage,
                        [this._pageWidth, this._pageHeight]
                      ];
                }),
                (e.prototype.dispose = function() {
                  (this._binPack = null), (this._mosaicRects = {});
                  for (var e = 0, t = this._textures; e < t.length; e++) {
                    var i = t[e];
                    i && i.dispose();
                  }
                  this._textures.length = 0;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2225: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(5), i(0), i(34), i(74), i(18), i(9), i(27)]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l) {
            return (function() {
              function e(e, t) {
                (this.baseURL = e),
                  (this.devicePixelRatio = t),
                  (this._isRetina = !1),
                  (this._spritesData = {}),
                  (this.image = null),
                  (this.width = null),
                  (this.height = null),
                  (this.loadStatus = "not-loaded");
              }
              return (
                Object.defineProperty(e.prototype, "spriteNames", {
                  get: function() {
                    var e = [];
                    for (var t in this._spritesData) e.push(t);
                    return e.sort(), e;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.getSpriteInfo = function(e) {
                  return this._spritesData[e];
                }),
                (e.prototype.load = function() {
                  var e = this;
                  return (
                    (this.loadStatus = "loading"),
                    this.baseURL
                      ? this._loadSprites()
                          .then(function() {
                            return (e.loadStatus = "loaded"), e;
                          })
                          .catch(function(t) {
                            return (e.loadStatus = "failed"), e;
                          })
                      : s.resolve(this)
                  );
                }),
                (e.prototype._loadSprites = function() {
                  var e = this;
                  this._isRetina = this.devicePixelRatio > 1.15;
                  var t = this.baseURL,
                    i = this._isRetina ? "@2x" : "";
                  return a(t + i + ".json", {
                    callbackParamName: "callback",
                    responseType: "json"
                  }).then(function(n) {
                    var a = Object.keys(n.data);
                    if (
                      !a ||
                      0 === a.length ||
                      (1 === a.length && "_ssl" === a[0])
                    )
                      return s.resolve(null);
                    e._spritesData = n.data;
                    var d = new r(),
                      h = new Image();
                    (h.crossOrigin = "anonymous"),
                      (h.onload = function() {
                        (h.onload = null),
                          (e.width = h.width),
                          (e.height = h.height);
                        var t = document.createElement("canvas");
                        (t.width = h.width), (t.height = h.height);
                        var i = t.getContext("2d");
                        i.drawImage(h, 0, 0, h.width, h.height);
                        for (
                          var n,
                            r = i.getImageData(0, 0, h.width, h.height),
                            o = new Uint8Array(r.data),
                            a = 0;
                          a < o.length;
                          a += 4
                        )
                          (n = o[a + 3] / 255),
                            (o[a] = o[a] * n),
                            (o[a + 1] = o[a + 1] * n),
                            (o[a + 2] = o[a + 2] * n);
                        (e.image = o), d.resolve();
                      });
                    var u = "" + t + i + ".png";
                    if (o.id) {
                      var c = o.id.findCredential(u);
                      c && c.token && (u += "?token=" + c.token);
                    }
                    return (h.src = l.addProxy(u)), d;
                  });
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2226: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(9), i(435), i(259)]),
        void 0 ===
          (r = function(e, t, i, n, r) {
            return (function() {
              function e(e) {
                if (e instanceof n) this._tilemapCache = e;
                else {
                  if (!(e && "index" in e)) throw new Error("Invalid tilemap!");
                  this._tilemap = e.index;
                }
              }
              return (
                (e.prototype.dataKey = function(e) {
                  if (this._tilemapCache) {
                    var t = e.level,
                      i = e.row,
                      n = e.col,
                      o = new r(e);
                    return this._tilemapCache
                      .fetchAvailabilityUpsample(t, i, n, o)
                      .then(function() {
                        return o;
                      })
                      .catch(function(e) {
                        if (e && "cancel" === e.dojoType) throw e;
                        return (o.level = t), (o.row = i), (o.col = n), o;
                      });
                  }
                  return this._getIndexedDataKey(e);
                }),
                (e.prototype.forEach = function(e, t, i, n, r) {
                  (this._callback = r),
                    (this._maxLevel = t + e),
                    this._forEach(this._tilemap, t, i, n);
                }),
                (e.prototype._forEach = function(e, t, i, n) {
                  0 !== e &&
                    (this._callback(t, i, n),
                    t !== this._maxLevel &&
                      "object" == typeof e &&
                      (this._forEach(e[0], t + 1, 2 * i, 2 * n),
                      this._forEach(e[1], t + 1, 2 * i, 2 * n + 1),
                      this._forEach(e[2], t + 1, 2 * i + 1, 2 * n),
                      this._forEach(e[3], t + 1, 2 * i + 1, 2 * n + 1)));
                }),
                (e.prototype._getIndexedDataKey = function(e) {
                  var t = [e];
                  if (
                    e.level < 0 ||
                    e.row < 0 ||
                    e.col < 0 ||
                    e.row >> e.level > 0 ||
                    e.col >> e.level > 0
                  )
                    return i.resolve(null);
                  for (var n = e; 0 !== n.level; )
                    (n = new r(n.level - 1, n.row >> 1, n.col >> 1, n.world)),
                      t.push(n);
                  var o,
                    a,
                    s = this._tilemap,
                    l = t.pop();
                  if (1 === s) return i.resolve(l);
                  for (; t.length; )
                    if (
                      ((a = (1 & (o = t.pop()).col) + ((1 & o.row) << 1)), s)
                    ) {
                      if (0 === s[a]) {
                        l = null;
                        break;
                      }
                      if (1 === s[a]) {
                        l = o;
                        break;
                      }
                      (l = o), (s = s[a]);
                    }
                  return i.resolve(l);
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2228: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(159)]),
        void 0 ===
          (r = function(e, t, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
              return function(e, t, i, n) {
                (this.fadeSpeed = e),
                  (this.minfadeLevel = t),
                  (this.maxfadeLevel = i),
                  (this.fadeChange = n);
              };
            })();
            t.FadeProperties = n;
            var r = (function() {
              function e(e) {
                void 0 === e && (e = 300),
                  (this._levelSnapshots = []),
                  (this._duration = e);
              }
              return (
                (e.prototype.recordLevel = function(e) {
                  var t = i(),
                    n = this._levelSnapshots;
                  0 === n.length &&
                    (n.push({ level: e, now: 0 }),
                    n.push({ level: e, now: 0 })),
                    (2 !== n.length && n[0].level === e) ||
                      n.push({ level: e, now: t });
                }),
                (e.prototype.needsRedraw = function() {
                  if (0 === this._levelSnapshots.length) return !1;
                  for (
                    var e = this._duration,
                      t = this._levelSnapshots,
                      i = t.length,
                      n = t[i - 1],
                      r = -1;
                    i > r + 1 && t[r + 1].now + e < n.now;

                  )
                    r++;
                  for (r < 0 && (r = 0); r < i; r++)
                    if (t[r].level !== n.level) return !0;
                  return !1;
                }),
                (e.prototype.getFadeValues = function(e) {
                  void 0 === e && (e = !1);
                  for (
                    var t = this._duration, n = i(), r = this._levelSnapshots;
                    r.length > 3 && r[1].now + t < n;

                  )
                    r.shift();
                  r[1].now + t < n && (r[0].level = r[1].level);
                  var o = r[0].level,
                    a = r[r.length - 1],
                    s = a.level,
                    l = Math.min(o, s),
                    d = Math.max(o, s),
                    h = (a.level - r[1].level) / ((a.now - r[1].now) / t),
                    u = ((n - a.now) / t) * h;
                  return e
                    ? {
                        fadeSpeed: 0,
                        minfadeLevel: l,
                        maxfadeLevel: d,
                        fadeChange: 0
                      }
                    : {
                        fadeSpeed: h,
                        minfadeLevel: l,
                        maxfadeLevel: d,
                        fadeChange: u
                      };
                }),
                e
              );
            })();
            t.FadeRecorder = r;
          }.apply(null, n)) || (e.exports = r);
    },
    2229: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(2138),
        i(2039),
        i(2075),
        i(2054),
        i(2049),
        i(77),
        i(2035),
        i(91)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d) {
            return (function() {
              function e() {
                (this._solidAttributeLocations = { a_pos: 0 }),
                  (this._attributeLocations = { a_pos: 0, a_id: 1 }),
                  (this._patternMatrix = i.create()),
                  (this._color = n.create()),
                  (this._solidrendererInitialized = !1),
                  (this._rendererInitialized = !1),
                  this._color.set([1, 0, 0, 1]);
              }
              return (
                (e.prototype.dispose = function() {
                  this._solidVertexArrayObject &&
                    (this._solidVertexArrayObject.dispose(),
                    (this._solidVertexArrayObject = null)),
                    this._vertexArrayObject &&
                      (this._vertexArrayObject.dispose(),
                      (this._vertexArrayObject = null));
                }),
                (e.prototype.renderSolidColor = function(e, t) {
                  this._solidrendererInitialized ||
                    this._initializeSolidRenderer(e),
                    e.bindVAO(this._solidVertexArrayObject);
                  var i = this._shaderVariations.getProgram(
                    [!1, !1],
                    void 0,
                    void 0,
                    this._solidAttributeLocations
                  );
                  e.bindProgram(i),
                    i.setUniformMatrix4fv("u_transformMatrix", t.u_matrix),
                    i.setUniform2fv(
                      "u_normalized_origin",
                      t.u_normalized_origin
                    ),
                    i.setUniform1f("u_coord_range", t.u_coord_range || 4096),
                    i.setUniform1f("u_depth", t.u_depth || 0),
                    i.setUniform4fv("u_color", t.u_color || this._color),
                    e.drawArrays(5, 0, 4),
                    e.bindVAO();
                }),
                (e.prototype.render = function(e, t, n, r, a, s, l, d, h) {
                  this._rendererInitialized || this._initialize(e);
                  var u = s.getPaintValue("background-color", n),
                    c = h * s.getPaintValue("background-opacity", n),
                    f = s.getPaintValue("background-pattern", n),
                    _ = void 0 !== f,
                    p = u[3] * c,
                    m = _ || p < 1;
                  if ((!m || 0 !== r) && (m || 1 !== r)) {
                    var v = 3 === r,
                      g = this._shaderVariations.getProgram(
                        [_, v],
                        void 0,
                        void 0,
                        this._attributeLocations
                      );
                    if (
                      (e.bindVAO(this._vertexArrayObject),
                      e.bindProgram(g),
                      g.setUniform1f("u_coord_range", a.coordRange),
                      g.setUniform1f("u_depth", s.z || 0),
                      g.setUniformMatrix4fv(
                        "u_transformMatrix",
                        a.tileTransform.transform
                      ),
                      g.setUniform2fv(
                        "u_normalized_origin",
                        a.tileTransform.displayCoord
                      ),
                      _)
                    ) {
                      var y = l.getMosaicItemPosition(f, !0);
                      if (!y) return;
                      var x =
                        512 * Math.pow(2, Math.floor(n) - a.key.level) * d;
                      i.identity(this._patternMatrix);
                      var b = x / y.size[0],
                        w = x / y.size[1];
                      (this._patternMatrix[0] = b),
                        (this._patternMatrix[4] = w),
                        l.bind(e, 9729, 0),
                        g.setUniformMatrix3fv(
                          "u_pattern_matrix",
                          this._patternMatrix
                        ),
                        g.setUniform1f("u_opacity", c),
                        g.setUniform2f("u_pattern_tl", y.tl[0], y.tl[1]),
                        g.setUniform2f("u_pattern_br", y.br[0], y.br[1]),
                        g.setUniform1i("u_texture", 0);
                    } else
                      (this._color[0] = p * u[0]),
                        (this._color[1] = p * u[1]),
                        (this._color[2] = p * u[2]),
                        (this._color[3] = p),
                        g.setUniform4fv("u_color", this._color);
                    if (v) {
                      var D = o.int32To4Bytes(t.layerID);
                      g.setUniform4f("u_id", D[0], D[1], D[2], D[3]);
                    }
                    e.drawArrays(5, 0, 4), e.bindVAO();
                  }
                }),
                (e.prototype._initializeSolidRenderer = function(e) {
                  if (this._solidrendererInitialized) return !0;
                  if (!this._shaderVariations) {
                    var t = new l(
                      "background",
                      ["backgroundVS", "backgroundFS"],
                      [],
                      a,
                      e
                    );
                    t.addDefine("PATTERN", "PATTERN", [!0, !0], "PATTERN"),
                      t.addDefine("ID", "ID", [!0, !0], "ID"),
                      (this._shaderVariations = t);
                  }
                  var i = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]),
                    n = s.createVertex(e, 35044, i),
                    r = new d(
                      e,
                      { a_pos: 0 },
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
                      { geometry: n }
                    );
                  return (
                    (this._solidVertexArrayObject = r),
                    (this._solidrendererInitialized = !0),
                    !0
                  );
                }),
                (e.prototype._initialize = function(e) {
                  if (this._rendererInitialized) return !0;
                  if (!this._shaderVariations) {
                    var t = new l(
                      "background",
                      ["backgroundVS", "backgroundFS"],
                      [],
                      a,
                      e
                    );
                    t.addDefine("PATTERN", "PATTERN", [!0, !0], "PATTERN"),
                      t.addDefine("ID", "ID", [!0, !0], "ID"),
                      (this._shaderVariations = t);
                  }
                  var i = [];
                  i.push(r.i1616to32(0, 0)),
                    i.push(r.i1616to32(1, 0)),
                    i.push(r.i1616to32(0, 1)),
                    i.push(r.i1616to32(1, 1));
                  var n = new Uint32Array(i),
                    o = s.createVertex(e, 35044, n),
                    h = new d(
                      e,
                      { a_pos: 0 },
                      {
                        geometry: [
                          {
                            name: "a_pos",
                            count: 2,
                            type: 5122,
                            offset: 0,
                            stride: 4,
                            normalized: !1,
                            divisor: 0
                          }
                        ]
                      },
                      { geometry: o }
                    );
                  return (
                    (this._vertexArrayObject = h),
                    (this._rendererInitialized = !0),
                    !0
                  );
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2230: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name="myShaderVS">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link module:esri/views/vectorTiles/renderers/vtShaderSnippets vtShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require("dojo/text!...").\n--\x3e\n<snippets>\n\n  <snippet name="rgba2float"><![CDATA[\n    // TODO consider moving this snippet into a util.xml file\n    const vec4 rgba2float_factors = vec4(\n        255.0 / (256.0),\n        255.0 / (256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n      );\n\n    float rgba2float(vec4 rgba) {\n      // Convert components from 0->1 back to 0->255 and then\n      // add the components together with their corresponding\n      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n      return dot(rgba, rgba2float_factors);\n    }\n  ]]></snippet>\n\n  <snippet name="iconVS">\n    <![CDATA[\n      attribute vec2 a_pos;\n      attribute vec2 a_vertexOffset;\n      attribute vec4 a_tex;\n      attribute vec4 a_levelInfo;\n\n    #ifdef DD\n      attribute vec4 a_color;\n      attribute mediump float a_size;\n    #endif // DD\n      uniform lowp vec4 u_color;\n      uniform mediump float u_size;\n\n    #ifdef ID\n      uniform mediump vec4 u_id;\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      varying lowp vec4 v_color;\n\n      // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n      // relative to the tile\'s upper left corner\n      // the extrusion vector.\n      uniform highp mat4 u_transformMatrix;\n\n      // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n      uniform highp mat4 u_extrudeMatrix;\n\n      // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n      uniform highp vec2 u_normalized_origin;\n\n      // the size of the mosaic given in pixels\n      uniform vec2 u_mosaicSize;\n\n      // the z of the layer. Given by the order of the layers in the style\n      uniform mediump float u_depth;\n\n      // the map\'s rotation from the north\n      uniform mediump float u_mapRotation;\n      uniform mediump float u_level;\n\n      // indicate whether the current set of iconst should be kept upright when the map is rotated\n      uniform lowp float u_keepUpright;\n\n      // the rate of the change in the opacity (fade) of the icons\n      uniform mediump float u_fadeSpeed;\n\n      // the low level we transition (to/from)\n      uniform mediump float u_minfadeLevel;\n\n      // the high level we transition (to/from)\n      uniform mediump float u_maxfadeLevel;\n\n      // the amount of fade given teh current time past the last recorded level\n      uniform mediump float u_fadeChange;\n\n      // the opacity of the layer given by the painter\n      uniform mediump float u_opacity;\n\n      // the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\n      varying mediump vec2 v_tex;\n\n      // the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n      // opacity of the layer given by the painter\n      varying lowp float v_transparency;\n\n      varying mediump vec2 v_size;\n\n      // the vertex offsets are given in integers, therefore in order to maintain a reasonable precision we multiply the values\n      // by 8 and then at the shader devide by the same number\n      const float C_OFFSET_PRECISION = 1.0 / 8.0;\n\n      const float C_256_TO_RAD = 3.14159265359 / 128.0;\n      const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\n      const float tileCoordRatio = 1.0 / 8.0;\n\n      void main()\n      {\n        mediump float a_labelMinLevel = a_levelInfo[0];\n        mediump float a_angle         = a_levelInfo[1];\n        mediump float a_minLevel      = a_levelInfo[2];\n        mediump float a_maxLevel      = a_levelInfo[3];\n\n        // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane\n        mediump float delta_z = 0.0;\n\n        // If the label rotates with the map, and if the rotated label is upside down, hide it\n        mediump float rotated = mod(a_angle + u_mapRotation, 256.0);\n        delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated)); //ie. z += (flip > 0) && (64 <= rotated) && (rotated < 192)\n\n        // u_level is the current service level adjusted for the change in font size\n        delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)\n        delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)\n\n        // calculate the alpha given the change in the fade and the fade-speed\n        lowp float alpha = clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0);\n\n        // if the speed is positive we are zooming in and therefore we need to \'fade-in\'. Else we need to \'fade-out\'\n        v_transparency = (u_fadeSpeed >= 0.0 ? alpha : 1.0 - alpha);\n\n        // now deal with the min/max fade-levels. If we exceeded the level we simply snap to 0 or 1\n        if (u_maxfadeLevel < a_labelMinLevel)\n        {\n          v_transparency = 0.0;\n        }\n        if (u_minfadeLevel >= a_labelMinLevel)\n        {\n          v_transparency = 1.0;\n        }\n\n        // if label had been faded out, clip it\n        delta_z += step(v_transparency, 0.0);\n\n        vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\n\n        v_size = abs(offset);\n\n      #ifdef SDF\n        offset = (120.0 / 86.0) * offset;\n      #endif // SDF\n\n      #ifdef DD\n        mediump float icon_size = a_size * u_size;\n      #else\n        mediump float icon_size = u_size;\n      #endif // DD\n        gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * icon_size * vec4(offset, delta_z, 0.0);\n\n      #ifdef DD\n        v_color = a_color * u_color;\n      #else\n        v_color = u_color;\n      #endif // DD\n\n      #ifdef ID\n        v_id = u_id / 255.0;\n      #endif // ID\n\n        v_tex = a_tex.xy / u_mosaicSize;\n        v_transparency *= v_color.w;\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="iconFS">\n    <![CDATA[\n      precision mediump float;\n\n      uniform lowp sampler2D u_texture; // SDF texture\n    #ifdef SDF\n      uniform lowp vec4 u_color; // a color to override the one of the vertex\n      uniform lowp vec4 u_outlineColor;\n      uniform mediump float u_outlineSize;\n    #endif // SDF\n\n      varying mediump vec2 v_tex;\n      // the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n      // opacity of the layer given by the painter\n      varying lowp float v_transparency;\n\n      varying mediump vec2 v_size;\n\n      varying lowp vec4 v_color;\n\n    #ifdef ID\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      // we need the conversion function from RGBA to float\n      $rgba2float\n\n      vec4 mixColors(vec4 color1, vec4 color2) {\n        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending)\n        // we use pre-multiplied colors hence the need for this kind of mixing. At lease we save ourselves an extra division...\n        float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n        vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n\n        return vec4(compositeColor, compositeAlpha);\n      }\n\n      void main()\n      {\n      #ifdef SDF\n        lowp vec4 fillPixelColor = v_color;\n\n        // calculate the distance from the edge [-0.5, 0.5]\n        float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\n\n        // the soft edge ratio is about 1.5 pixels allocated for the soft edge.\n        // 1 / 86 represents a single pixel given the size of the SDF is 128 and we add 4 pixels margins to deal with\n        // other non SDF types.\n        // The rasterized geometry takes only 86 pixels because of the extra 16 pixels margin for the outline.\n        const float sofetEdgeRatio = 0.248062016; // ==> (32.0 / 86.0) / 1.5;\n        float size = max(v_size.x, v_size.y);\n        float dist = d * sofetEdgeRatio * size;\n\n        // set the fragment\'s transparency according to the distance from the edge\n        fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n\n        // count for the outline\n        // therefore tint the entire icon area.\n        if (u_outlineSize > 0.25) {\n          lowp vec4 outlinePixelColor = u_outlineColor;\n          // the outline limit ratio is derived from the 16 pixels allocated for the outline and the fact that 1/86 represents\n          // a single pixel.\n          const float outlineLimitRatio = (16.0 / 86.0);\n          float clampedOutlineSize = sofetEdgeRatio * min(u_outlineSize, outlineLimitRatio * max(v_size.x, v_size.y));\n\n          outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\n\n          // finally combine the outline and the fill colors\n          gl_FragColor = v_transparency * mixColors(fillPixelColor, outlinePixelColor);\n        }\n        else {\n          gl_FragColor = v_transparency * fillPixelColor;\n        }\n      #else // not an SDF\n        lowp vec4 texColor = texture2D(u_texture, v_tex);\n        gl_FragColor = v_transparency * texColor;\n      #endif // SDF\n\n      #ifdef ID\n        if (gl_FragColor.a < 1.0 / 255.0) {\n          discard;\n        }\n        gl_FragColor = v_id;\n      #endif // ID\n      }\n    ]]>\n  </snippet>\n\n</snippets>\n\n';
    },
    2231: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  // YF TODO: (doc)\n--\x3e\n<snippets>\n  <snippet name="backgroundVS">\n    <![CDATA[\n    precision mediump float;\n\n    attribute vec2 a_pos;\n\n  #ifdef ID\n    uniform mediump vec4 u_id;\n    varying mediump vec4 v_id;\n  #endif // ID\n\n    uniform highp mat4 u_transformMatrix;\n    uniform mediump vec2 u_normalized_origin;\n    uniform mediump float u_coord_range;\n    uniform mediump float u_depth;\n\n  #ifdef PATTERN\n    uniform mediump mat3 u_pattern_matrix; // can we use medium precision?\n    varying mediump vec2 v_tileTextureCoord;\n  #endif // PATTERN\n\n    void main() {\n      gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(u_coord_range * a_pos, 0.0, 1.0);\n\n  #ifdef PATTERN\n      // calculate the texture coordinates of the current vertex. It will of course get interpolated.\n      // The pattern matrix is a 3x3 scale matrix which \'tiles\' the texture inside the tile, translating from tile coordinates\n      v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n  #endif // PATTERN\n\n  #ifdef ID\n      v_id = u_id / 255.0;\n  #endif // ID\n    }\n    ]]>\n  </snippet>\n\n  <snippet name="backgroundFS">\n    <![CDATA[\n  #ifdef PATTERN\n    uniform lowp float u_opacity;\n    uniform mediump vec2 u_pattern_tl;\n    uniform mediump vec2 u_pattern_br;\n    uniform sampler2D u_texture;\n\n    varying mediump vec2 v_tileTextureCoord;\n  #else\n    uniform lowp vec4 u_color;\n  #endif // PATTERN\n\n  #ifdef ID\n    varying mediump vec4 v_id;\n  #endif // ID\n\n    void main() {\n  #ifdef PATTERN\n      // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.\n      mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n\n      // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.\n      // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however\n      // we need to only sample from area that has our sprite in the mosaic.\n      mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n\n      // sample the sprite mosaic\n      lowp vec4 color = texture2D(u_texture, samplePos);\n      gl_FragColor = u_opacity * color;\n  #else\n      gl_FragColor = u_color;\n  #endif // PATTERN\n\n  #ifdef ID\n      if (gl_FragColor.a < 1.0 / 255.0) {\n        discard;\n      }\n      gl_FragColor = v_id;\n  #endif // ID\n    }\n    ]]>\n  </snippet>\n</snippets>\n';
    },
    2232: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name="myShaderVS">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link module:esri/views/vectorTiles/renderers/vtShaderSnippets vtShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require("dojo/text!...").\n--\x3e\n<snippets>\n\n  <snippet name="circleVS">\n    <![CDATA[\n      precision mediump float;\n\n      attribute vec2 a_pos;\n      attribute vec4 a_color;\n      attribute vec4 a_stroke_color;\n      attribute vec4 a_data;\n\n      const float sizePrecision = 0.25; // 1/4\n      const float blurPrecision = 0.03125; // 1/32\n\n      varying lowp vec4 v_color;\n      varying lowp vec4 v_stroke_color;\n      varying mediump float v_blur;\n      varying mediump float v_stroke_width;\n      varying mediump float v_radius;\n      varying mediump vec2 v_offset;\n\n    #ifdef ID\n      uniform mediump vec4 u_id;\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n      // relative to the tile\'s upper left corner\n      // the extrusion vector.\n      uniform highp mat4 u_transformMatrix;\n\n      // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n      uniform highp mat4 u_extrudeMatrix;\n\n      // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n      uniform highp vec2 u_normalized_origin;\n\n      // the z of the layer. Given by the order of the layers in the style\n      uniform mediump float u_depth;\n\n      // the opacity of the layer given by the painter\n      uniform mediump float u_radius;\n      uniform lowp vec4 u_color;\n      uniform mediump float u_blur;\n      uniform mediump float u_stroke_width;\n      uniform lowp vec4 u_stroke_color;\n\n      uniform mediump float u_antialiasingWidth; // antialiasing (factors in the pixel_ratio for high res devices)\n\n      void main()\n      {\n        v_color = a_color * u_color;\n        v_stroke_color = a_stroke_color * u_stroke_color;\n        v_stroke_width = a_data[1] * sizePrecision * u_stroke_width;\n        v_radius = a_data[2] * u_radius;\n        v_blur = max(a_data[0] * blurPrecision + u_blur, u_antialiasingWidth / (v_radius + v_stroke_width));\n\n        mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n        v_offset = offset;\n\n      #ifdef ID\n        v_id = u_id / 255.0;\n      #endif // ID\n\n        gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos * 0.5, 0.0, 1.0) + u_extrudeMatrix * (v_radius + v_stroke_width) * vec4(offset, 0.0, 0.0);\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="circleFS">\n    <![CDATA[\n      precision lowp float;\n\n      varying lowp vec4 v_color;\n      varying lowp vec4 v_stroke_color;\n      varying mediump float v_blur;\n      varying mediump float v_stroke_width;\n      varying mediump float v_radius;\n      varying mediump vec2 v_offset;\n\n    #ifdef ID\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      void main()\n      {\n        mediump float dist = length(v_offset);\n\n        mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\n\n        lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\n\n        gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n\n      #ifdef ID\n        if (gl_FragColor.a < 1.0 / 255.0) {\n          discard;\n        }\n        gl_FragColor = v_id;\n      #endif // ID\n      }\n    ]]>\n  </snippet>\n\n</snippets>\n\n';
    },
    2233: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  // YF TODO: (doc)\n--\x3e\n<snippets>\n  <snippet name="fillVS">\n    <![CDATA[\n      precision mediump float;\n\n      attribute vec2 a_pos;\n\n      uniform highp mat4 u_transformMatrix;\n      uniform highp vec2 u_normalized_origin;\n      uniform mediump float u_depth;\n\n    #ifdef PATTERN\n      uniform mediump mat3 u_pattern_matrix;\n      varying mediump vec2 v_tileTextureCoord;\n    #endif // PATTERN\n\n    #ifdef ID\n      uniform mediump vec4 u_id;\n      varying mediump vec4 v_id;\n    #endif // ID\n\n    #ifdef DD\n      attribute vec4 a_color;\n    #else\n      uniform lowp vec4 u_color;\n    #endif // DD\n      varying lowp vec4 v_color;\n\n      void main()\n      {\n      #ifdef DD\n        v_color = a_color;\n      #else\n        v_color = u_color;\n      #endif // DD\n\n      #ifdef ID\n        v_id = u_id / 255.0;\n      #endif // ID\n\n      #ifdef PATTERN\n        // calculate the texture coordinates of the current vertex. It will of course get interpolated.\n        // The pattern matrix is a 3x3 scale matrix which \'tiles\' the texture inside the tile, translating from tile coordinates\n        // (-4k to 8k -1) to texture coordinates.\n        v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n      #endif // PATTERN\n\n        gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0, 1.0);\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="fillFS">\n    <![CDATA[\n      precision lowp float;\n\n    #ifdef PATTERN\n      uniform mediump vec2 u_pattern_tl;\n      uniform mediump vec2 u_pattern_br;\n      uniform lowp sampler2D u_texture;\n      varying mediump vec2 v_tileTextureCoord;\n    #endif // PATTERN\n\n    #ifdef ID\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      varying lowp vec4 v_color;\n\n      vec4 mixColors(vec4 color1, vec4 color2) {\n        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending)\n        // we use pre-multiplied colors hence the need for this kind of mixing. At lease we save ourselves an extra division...\n        float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n        vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n\n        return vec4(compositeColor, compositeAlpha);\n      }\n      void main()\n      {\n      #ifdef PATTERN\n        // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.\n        mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n\n        // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.\n        // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however\n        // we need to only sample from area that has our sprite in the mosaic.\n        mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n\n        // sample the sprite mosaic\n        lowp vec4 color = texture2D(u_texture, samplePos);\n        gl_FragColor = v_color[3] * color;\n      #else\n        gl_FragColor = v_color;\n      #endif // PATTERN\n\n      #ifdef ID\n        if (gl_FragColor.a < 1.0 / 255.0) {\n          discard;\n        }\n        gl_FragColor = v_id;\n      #endif // ID\n      }\n    ]]>\n  </snippet>\n</snippets>\n';
    },
    2234: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  // YF TODO: (doc)\n--\x3e\n<snippets>\n  <snippet name="lineVS">\n    <![CDATA[\n      /* The implementation of the renderer is based on the article and implementation of MB described here:\n      * https://www.mapbox.com/blog/drawing-antialiased-lines/\n      */\n\n      attribute vec2 a_pos;\n      attribute vec4 a_offsetAndNormal;\n      attribute vec2 a_accumulatedDistance;\n\n      // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n      // relative to the tile\'s upper left corner\n      // the extrusion vector.\n      uniform highp mat4 u_transformMatrix;\n\n      // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n      uniform highp mat4 u_extrudeMatrix;\n\n      // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n      uniform highp vec2 u_normalized_origin;\n\n      uniform mediump float u_blur;\n      uniform mediump float u_antialiasing; // the feather distance at which the line edge fades out\n\n      // the z of the layer. Given by the order of the layers in the style\n      uniform mediump float u_depth;\n\n      // the interpolated normal to the line. the information is packed into the two LSBs of the vertex coordinate\n      varying mediump vec2 v_normal;\n\n      // the accumulated distance along the line. We need this information in order to render the dashes.\n      varying highp float v_accumulatedDistance;\n\n      const float scale = 1.0 / 31.0;\n\n    #ifdef DD\n      attribute vec4 a_color;\n      attribute mediump float a_width;\n    #endif // DD\n      uniform lowp vec4 u_color;\n      uniform mediump float u_width;\n\n    #ifdef ID\n      uniform mediump vec4 u_id;\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      varying lowp vec4 v_color;\n      varying mediump float v_lineHalfWidth; // the inset and outset of the line\n      varying mediump float v_blur;\n\n    #ifndef PATTERN\n      uniform mediump vec2 u_dasharray;\n      varying mediump vec2 v_dasharray;\n    #endif\n\n      void main()\n      {\n        v_normal = a_offsetAndNormal.zw * scale;\n\n      #ifdef DD\n        v_lineHalfWidth = a_width * u_width;\n      #else\n        v_lineHalfWidth = u_width;\n      #endif // DD\n\n        v_lineHalfWidth += u_antialiasing;\n        v_lineHalfWidth *= 0.5;\n\n      #ifndef PATTERN\n      #ifdef DD\n        v_dasharray = u_dasharray * a_width;\n      #else\n        v_dasharray = u_dasharray * u_width;\n      #endif // DD\n      #endif\n\n        // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n        // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n        mediump vec2 dist = v_lineHalfWidth * a_offsetAndNormal.xy * scale;\n\n        // transform the vertex\n        gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);\n\n        // the accumulated distance will be used to calculate the dashes (or the no-data...)\n        v_accumulatedDistance = a_accumulatedDistance.x;\n\n        v_blur = u_blur + u_antialiasing;\n\n        #ifdef DD\n          v_color = a_color * u_color;\n        #else\n          v_color = u_color;\n        #endif // DD\n\n        #ifdef ID\n          v_id = u_id / 255.0;\n        #endif // ID\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="lineFS">\n    <![CDATA[\n      varying mediump vec2 v_normal;\n      varying highp float v_accumulatedDistance;\n\n      varying mediump float v_lineHalfWidth;\n      varying lowp vec4 v_color;\n\n      varying mediump float v_blur;\n\n    #ifdef PATTERN\n      uniform mediump vec2 u_pattern_tl;\n      uniform mediump vec2 u_pattern_br;\n      uniform mediump vec2 u_spriteSize;\n      uniform sampler2D u_texture;\n\n      // Horizontal scale is used to scale the horizontal texture coordinate v_normal.x before adding it as an offset to the\n      // accumulated distance. Most vertices will have v_normal.x == 0, because the pattern must be sampled only depending on\n      // the v_accumulatedDistance value. But tessellation at caps can have vertices with v_normal.x != 0, thus allowing to\n      // "keep moving" for a few more pixel even when the line has ended or has not started yet.\n      const mediump float tileCoordRatio = 8.0;\n    #else\n      varying mediump vec2 v_dasharray;\n    #endif\n\n    #ifdef ID\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      void main()\n      {\n        // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,\n        // and any value in between will be inside the line (the sign represent the direction - right or left).\n        // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels\n        mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n\n        // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.\n        // We need to count for both sides of the line.\n        lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n\n      #ifdef PATTERN\n        // we need to calculate the relative portion of the line texture along the line given the accumulated distance aliong the line\n        // The computed value should is anumber btween 0 and 1 which will later be used to interpolate btween the BR and TL values\n        mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * v_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);\n\n        // in order to calculate the texture coordinates perpendicular to the line (Y axis), we use the interpolated normal values\n        // which range from -1.0 to 1.0. On the line\'s centerline, the value of the interpolated normal is 0.0, however the relative\n        // texture value should be 0.5 (given that at the bottom of the line, the texture coordinate must be equal to 0.0)\n        // (TL) ---------------------------      --\x3e left edge of line. Interpolated normal is 1.0\n        //              | -> line-width / 2\n        //      - - - - - - - - - - - - - -\n        //              | -> line-width / 2\n        //      ---------------------------- (BR)--\x3e right edge of line. Interpolated normal is -1.0\n\n        mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / u_spriteSize.y);\n\n        // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates\n        mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));\n\n        // get the color from the texture\n        lowp vec4 color = texture2D(u_texture, texCoord);\n\n        // finally write the fragment value\n        gl_FragColor = alpha * v_color[3] * color;\n      #else\n        // now calculate the dashes given the accumulated distance of the line:\n        // start with calculating a normalized position along the line\n        lowp float dashPos =  mod(v_accumulatedDistance, v_dasharray.x + v_dasharray.y);\n\n        // calculate the contribution to the alpha of the dash part. It is provided by the shortest portion of the position along the dash.\n        // we must clamp since the value might be bigger than 1 or smaller than zero (when over a dash).\n        //   | <--- pos along the dash part\n        // -------_______-------_______\n        // when the dashPos is over the \'gap\' part of the dash dasharray.x - dashPos is negative and therefore the alpha will\n        // get clamped to zero.\n        // when dasharray.x - dashPos is positive, or when dashPos is smaller than 1.0, it gives us a soft edge to each dash part.\n        // along the direction of the line.\n        lowp float dashAlpha = clamp(min(dashPos, v_dasharray.x - dashPos) + 0.5, 0.0, 1.0);\n\n        // if we don\'t have a no-data part to the dash then it is a solid line\n        dashAlpha = max(sign(-v_dasharray.y), dashAlpha);\n        // finally multiply the fragment\'s alpha by the calculated dash-alpha\n        alpha *= dashAlpha;\n\n        // output the fragment color\n        gl_FragColor = alpha * v_color;\n      #endif // PATTERN\n\n      #ifdef ID\n        if (gl_FragColor.a < 1.0 / 255.0) {\n          discard;\n        }\n        gl_FragColor = v_id;\n      #endif // ID\n      }\n    ]]>\n  </snippet>\n</snippets>\n';
    },
    2235: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  // YF TODO: (doc)\n--\x3e\n<snippets>\n  <snippet name="outlineVS">\n    <![CDATA[\n      attribute vec2 a_pos;\n      attribute vec2 a_offset;\n      attribute vec2 a_xnormal;\n\n    #ifdef DD\n      attribute vec4 a_color;\n    #else\n      uniform lowp vec4 u_color;\n    #endif // DD\n      varying lowp vec4 v_color;\n\n    #ifdef ID\n      uniform mediump vec4 u_id;\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      uniform highp mat4 u_transformMatrix;\n      uniform highp mat4 u_extrudeMatrix;\n      uniform highp vec2 u_normalized_origin;\n      uniform mediump float u_depth;\n      uniform mediump float u_outline_width;\n\n      varying lowp vec2 v_normal;\n\n      const float scale = 1.0 / 15.0;\n\n      void main()\n      {\n      #ifdef DD\n        v_color = a_color;\n      #else\n        v_color = u_color;\n      #endif // DD\n\n      #ifdef ID\n        v_id = u_id / 255.0;\n      #endif // ID\n\n        v_normal = a_xnormal;\n\n        // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n        // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n        mediump vec4 dist = vec4(u_outline_width * a_offset * scale, 0.0, 0.0);\n\n        // Remove the texture normal bit of the position before scaling it with the\n        // model/view matrix. Add the extrusion vector *after* the model/view matrix\n        // because we\'re extruding the line in pixel space, regardless of the current\n        // tile\'s zoom level.\n        gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * dist;\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="outlineFS">\n    <![CDATA[\n      varying lowp vec4 v_color;\n      varying mediump vec2 v_normal;\n\n    #ifdef ID\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      void main()\n      {\n        // Calculate the distance of the pixel from the line in pixels.\n        lowp float dist = abs(v_normal.y);\n\n        lowp float alpha = smoothstep(1.0, 0.0, dist);\n        gl_FragColor = alpha * v_color;\n\n      #ifdef ID\n        if (gl_FragColor.a < 1.0 / 255.0) {\n          discard;\n        }\n        gl_FragColor = v_id;\n      #endif // ID\n      }\n    ]]>\n  </snippet>\n</snippets>\n';
    },
    2236: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Add your GLSL snippets to this file. You should start from\n  importing your old GLSL files. For instance, if you have a\n  file such as myShader.vs.glsl you should create a new <snippet name="myShaderVS">\n  and then copy and paste the GLSL source as the content. You will then convert your\n  code to use the {@link module:esri/views/vectorTiles/renderers/vtShaderSnippets vtShaderSnippets}\n  instance to access the GLSL code, instead of importing it directly with require("dojo/text!...").\n--\x3e\n<snippets>\n\n  <snippet name="rgba2float"><![CDATA[\n    // TODO this snippet should only be in views/3d/webgl-engine/materials/internal/Util.xml\n\n    // Factors to convert rgba back to float\n    const vec4 toFloat = vec4(\n        255.0 / (256.0),\n        255.0 / (256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n      );\n\n    float rgba2float(vec4 rgba) {\n      // Convert components from 0->1 back to 0->255 and then\n      // add the components together with their corresponding\n      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n      return dot(rgba, toFloat);\n    }\n  ]]></snippet>\n\n  <snippet name="textVS">\n    <![CDATA[\n      attribute vec2 a_pos;\n      attribute vec2 a_vertexOffset;\n      attribute vec4 a_tex;\n      attribute vec4 a_levelInfo;\n\n      uniform lowp vec4 u_color; // always defined as halo does not support data driven but text does\n    #ifdef DD\n      attribute vec4 a_color;\n    #endif // DD\n      varying lowp vec4 v_color;\n\n      uniform mediump float u_size;\n    #ifdef DD\n      attribute mediump float a_size;\n    #endif // DD\n      varying mediump float v_size;\n\n    #ifdef ID\n      uniform mediump vec4 u_id;\n      varying mediump vec4 v_id;\n    #endif // ID\n\n\n      // attribute bool a_visible; // --\x3e a one bit controlling the visibility of the vertex\n\n      // the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n      // relative to the tile\'s upper left corner\n      // the extrusion vector.\n      uniform highp mat4 u_transformMatrix;\n\n      // the extrude matrix which is responsible for the \'anti-zoom\' as well as the rotation\n      uniform highp mat4 u_extrudeMatrix;\n\n      // u_normalized_origin is the tile\'s upper left corner given in normalized coordinates\n      uniform highp vec2 u_normalized_origin;\n\n      // the size of the mosaic given in pixels\n      uniform vec2 u_mosaicSize;\n\n      // the z of the layer. Given by the order of the layers in the style\n      uniform mediump float u_depth;\n\n      // the map\'s rotation from the north\n      uniform mediump float u_mapRotation;\n      uniform mediump float u_level;\n\n      // indicate whether the current set of iconst should be kept upright when the map is rotated\n      uniform lowp float u_keepUpright;\n\n      // the rate of the change in the opacity (fade) of the icons\n      uniform mediump float u_fadeSpeed;\n\n      // the low level we transition (to/from)\n      uniform mediump float u_minfadeLevel;\n\n      // the high level we transition (to/from)\n      uniform mediump float u_maxfadeLevel;\n\n      // the amount of fade given teh current time past the last recorded level\n      uniform mediump float u_fadeChange;\n\n      // the opacity of the layer given by the painter\n      uniform mediump float u_opacity;\n\n      // the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\n      varying lowp vec2 v_tex;\n\n      // the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n      // opacity of the layer given by the painter\n      varying lowp float v_transparency;\n\n      // the vertex offsets are given in integers, therefore in order to maintain a reasonable precision we multiply the values\n      // by 8 and then at the shader divide by the same number\n      const float offsetPrecision = 1.0 / 8.0;\n\n      // outline position and appearance\n      const mediump float edgePos = 0.75; // defined by the SDF encoding\n      uniform mediump float u_edgeDistance;\n      uniform mediump float u_edgeBlur;\n      uniform mediump float u_antialiasingWidth; // antialiasing (factors in the pixel_ratio for high res devices)\n\n      varying mediump float v_edgeDistance; // will factor in the size\n      varying mediump float v_edgeWidth; // will factor in the size\n\n      uniform lowp float u_halo; // needed to avoid using the color attribute for halo\n\n      void main()\n      {\n        mediump float a_labelMinLevel = a_levelInfo[0];\n        mediump float a_angle        = a_levelInfo[1];\n        mediump float a_minLevel    = a_levelInfo[2];\n        mediump float a_maxLevel    = a_levelInfo[3];\n\n        // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane\n        mediump float delta_z = 0.0;\n\n        // TODO: force clipping the vertex in case that the vertex isn\'t visible\n        //delta_z += a_visible ? 0.0 : 1.0;\n\n        // If the label rotates with the map, and if the rotated label is upside down, hide it\n        mediump float rotated = mod(a_angle + u_mapRotation, 256.0);\n        delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated)); //ie. z += (flip > 0) && (64 <= rotated) && (rotated < 192)\n\n        // u_level is the current service level adjusted for the change in font size\n        delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)\n        delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)\n\n        // calculate the alpha given the change in the fade and the fade-speed\n        lowp float alpha = clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0);\n\n        // if the speed is positive we are zooming in and therefore we need to \'fade-in\'. Else we need to \'fade-out\'\n        v_transparency = (u_fadeSpeed >= 0.0 ? alpha : 1.0 - alpha);\n\n        // now deal with the min/max fade-levels. If we exceeded the level we simply snap to 0 or 1\n        if (u_maxfadeLevel < a_labelMinLevel)\n        {\n          v_transparency = 0.0;\n        }\n        if (u_minfadeLevel >= a_labelMinLevel)\n        {\n          v_transparency = 1.0;\n        }\n\n        // if label has been faded out, clip it\n        delta_z += step(v_transparency, 0.0);\n\n        v_tex = a_tex.xy / u_mosaicSize;\n\n      #ifdef DD\n        if (u_halo > 0.5)\n        {\n          v_color = u_color;\n        }\n        else\n        {\n          v_color = a_color * u_color;\n          // opacity already factored in a_color\n        }\n      #else\n        v_color = u_color;\n      #endif // DD\n\n      #ifdef DD\n        v_size = a_size * u_size;\n      #else\n        v_size = u_size;\n      #endif // DD\n\n      #ifdef ID\n        v_id = u_id / 255.0;\n      #endif // ID\n\n        v_edgeDistance = edgePos - u_edgeDistance / v_size;\n        v_edgeWidth = (u_antialiasingWidth + u_edgeBlur) / v_size;\n\n        gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * v_size * vec4(offsetPrecision * a_vertexOffset, delta_z, 0.0);\n      }\n    ]]>\n  </snippet>\n\n  <snippet name="textFS">\n    <![CDATA[\n      uniform lowp sampler2D u_texture;\n      uniform mediump float u_edgeDistance;\n\n      varying lowp vec2 v_tex;\n      varying lowp float v_transparency;\n      varying lowp vec4 v_color;\n      varying mediump float v_edgeWidth;\n      varying mediump float v_edgeDistance;\n\n    #ifdef ID\n      varying mediump vec4 v_id;\n    #endif // ID\n\n      // this is taken from http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf\n      // and https://www.mapbox.com/blog/text-signed-distance-fields/\n      // http://metalbyexample.com/rendering-text-in-metal-with-signed-distance-fields/\n\n      void main()\n      {\n        // read the distance from the SDF texture\n        lowp float dist = texture2D(u_texture, v_tex).a;\n\n        // use a smooth-step in order to calculate the geometry of the shape given by the distance field\n        mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist) * v_transparency;\n\n        gl_FragColor = alpha * v_color;\n\n      #ifdef ID\n        if (gl_FragColor.a < 1.0 / 255.0) {\n          discard;\n        }\n        gl_FragColor = v_id;\n      #endif // ID\n      }\n    ]]>\n  </snippet>\n\n</snippets>\n\n';
    },
    2237: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(417),
        i(776),
        i(2039),
        i(415),
        i(2054),
        i(2049),
        i(2035),
        i(91)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d) {
            return (function() {
              function e() {
                (this._attributeLocations = {
                  a_pos: 0,
                  a_color: 1,
                  a_stroke_color: 2,
                  a_data: 3
                }),
                  (this._initialized = !1),
                  (this._viewProjMat = i.create()),
                  (this._offsetVector = n.create()),
                  (this._color = r.create()),
                  (this._strokeColor = r.create());
              }
              return (
                (e.prototype.dispose = function() {}),
                (e.prototype.render = function(e, t, n, r, s, l, d, h, u) {
                  if (0 !== t.triangleElementCount) {
                    this._initialized || this._initialize(e);
                    var c = d.hasDataDrivenRadius
                        ? 1
                        : d.getPaintValue("circle-radius", n),
                      f = d.hasDataDrivenColor
                        ? [1, 1, 1, 1]
                        : d.getPaintValue("circle-color", n),
                      _ = d.hasDataDrivenOpacity
                        ? 1
                        : d.getPaintValue("circle-opacity", n),
                      p = d.hasDataDrivenStrokeWidth
                        ? 1
                        : d.getPaintValue("circle-stroke-width", n),
                      m = d.hasDataDrivenStrokeColor
                        ? [1, 1, 1, 1]
                        : d.getPaintValue("circle-stroke-color", n),
                      v = d.hasDataDrivenStrokeOpacity
                        ? 1
                        : d.getPaintValue("circle-stroke-opacity", n),
                      g = d.hasDataDrivenBlur
                        ? 0
                        : d.getPaintValue("circle-blur", n),
                      y = _ * f[3] * u;
                    (this._color[0] = y * f[0]),
                      (this._color[1] = y * f[1]),
                      (this._color[2] = y * f[2]),
                      (this._color[3] = y),
                      (y = v * m[3] * u),
                      (this._strokeColor[0] = y * m[0]),
                      (this._strokeColor[1] = y * m[1]),
                      (this._strokeColor[2] = y * m[2]),
                      (this._strokeColor[3] = y);
                    var x = l.tileTransform.transform,
                      b = d.getPaintValue("circle-translate", n);
                    if (0 !== b[0] || 0 !== b[1]) {
                      i.copy(this._viewProjMat, l.tileTransform.transform);
                      var w = b[0],
                        D = b[1],
                        z = 0,
                        M = 0,
                        A = l.coordRange / 512,
                        T = ((1 << l.key.level) / Math.pow(2, n)) * A;
                      if (1 === d.getPaintValue("circle-translate-anchor", n)) {
                        var P = -o.C_DEG_TO_RAD * s,
                          S = Math.sin(P),
                          I = Math.cos(P);
                        (z = T * (w * I - D * S)), (M = T * (w * S + D * I));
                      } else (z = T * w), (M = T * D);
                      (this._offsetVector[0] = z),
                        (this._offsetVector[1] = M),
                        (this._offsetVector[2] = 0),
                        i.translate(
                          this._viewProjMat,
                          this._viewProjMat,
                          this._offsetVector
                        ),
                        (x = this._viewProjMat);
                    }
                    var V = this._getCircleVAO(e, l);
                    if (V) {
                      e.bindVAO(V);
                      var R = 3 === r,
                        O = this._shaderVariations.getProgram(
                          [R],
                          void 0,
                          void 0,
                          this._attributeLocations
                        );
                      if (
                        (e.bindProgram(O),
                        O.setUniformMatrix4fv("u_transformMatrix", x),
                        O.setUniformMatrix4fv("u_extrudeMatrix", h),
                        O.setUniform2fv(
                          "u_normalized_origin",
                          l.tileTransform.displayCoord
                        ),
                        O.setUniform1f("u_depth", d.z),
                        O.setUniform1f("u_radius", c),
                        O.setUniform4fv("u_color", this._color),
                        O.setUniform1f("u_blur", g),
                        O.setUniform1f("u_stroke_width", p),
                        O.setUniform4fv("u_stroke_color", this._strokeColor),
                        O.setUniform1f("u_antialiasingWidth", 1.2),
                        R)
                      ) {
                        var C = a.int32To4Bytes(t.layerID);
                        O.setUniform4f("u_id", C[0], C[1], C[2], C[3]);
                      }
                      e.drawElements(
                        4,
                        t.triangleElementCount,
                        5125,
                        12 * t.triangleElementStart
                      ),
                        e.bindVAO();
                    }
                  }
                }),
                (e.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = new l("circle", ["circleVS", "circleFS"], [], s, e);
                  return (
                    t.addDefine("ID", "ID", [!0, !0], "ID"),
                    (this._shaderVariations = t),
                    (this._vertexAttributes = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_color",
                          count: 4,
                          type: 5121,
                          offset: 4,
                          stride: 16,
                          normalized: !0,
                          divisor: 0
                        },
                        {
                          name: "a_stroke_color",
                          count: 4,
                          type: 5121,
                          offset: 8,
                          stride: 16,
                          normalized: !0,
                          divisor: 0
                        },
                        {
                          name: "a_data",
                          count: 4,
                          type: 5121,
                          offset: 12,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._initialized = !0),
                    !0
                  );
                }),
                (e.prototype._getCircleVAO = function(e, t) {
                  if (t.circleVertexArrayObject)
                    return t.circleVertexArrayObject;
                  var i = t.circleVertexBuffer,
                    n = t.circleIndexBuffer;
                  return i && n
                    ? ((t.circleVertexArrayObject = new d(
                        e,
                        this._attributeLocations,
                        this._vertexAttributes,
                        { geometry: i },
                        n
                      )),
                      t.circleVertexArrayObject)
                    : null;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2238: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(2138),
        i(417),
        i(776),
        i(2039),
        i(415),
        i(2054),
        i(2049),
        i(2035),
        i(91)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d, h) {
            return (function() {
              function e() {
                (this._fillAttributeLocations = { a_pos: 0 }),
                  (this._fillAttributeLocationsDD = { a_pos: 0, a_color: 1 }),
                  (this._outlineAttributeLocations = {
                    a_pos: 0,
                    a_offset: 1,
                    a_xnormal: 2
                  }),
                  (this._outlineAttributeLocationsDD = {
                    a_pos: 0,
                    a_offset: 1,
                    a_xnormal: 2,
                    a_color: 3
                  }),
                  (this._initialized = !1),
                  (this._viewProjMat = n.create()),
                  (this._offsetVector = r.create()),
                  (this._patternMatrix = i.create()),
                  (this._color = o.create()),
                  (this._outlineColor = o.create());
              }
              return (
                (e.prototype.dispose = function() {}),
                (e.prototype.render = function(
                  e,
                  t,
                  i,
                  r,
                  o,
                  l,
                  d,
                  h,
                  u,
                  c,
                  f
                ) {
                  if (0 !== t.triangleElementCount) {
                    this._initialized || this._initialize(e);
                    var _ = void 0 !== d.getPaintValue("fill-pattern", i),
                      p = d.hasDataDrivenColor
                        ? [1, 1, 1, 1]
                        : d.getPaintValue("fill-color", i),
                      m = d.hasDataDrivenOpacity
                        ? 1
                        : d.getPaintValue("fill-opacity", i),
                      v = m * p[3] * f;
                    (this._color[0] = v * p[0]),
                      (this._color[1] = v * p[1]),
                      (this._color[2] = v * p[2]),
                      (this._color[3] = v);
                    var g,
                      y = 3 === o;
                    y && (g = s.int32To4Bytes(t.layerID));
                    var x = l.tileTransform.transform,
                      b = l.coordRange / 512,
                      w = d.getPaintValue("fill-translate", i);
                    if (0 !== w[0] || 0 !== w[1]) {
                      n.copy(this._viewProjMat, l.tileTransform.transform);
                      var D = w[0],
                        z = w[1],
                        M = 0,
                        A = 0,
                        T = ((1 << l.key.level) / Math.pow(2, i)) * b;
                      if (1 === d.getPaintValue("fill-translate-anchor", i)) {
                        var P = -a.C_DEG_TO_RAD * r,
                          S = Math.sin(P),
                          I = Math.cos(P);
                        (M = T * (D * I - z * S)), (A = T * (D * S + z * I));
                      } else (M = T * D), (A = T * z);
                      (this._offsetVector[0] = M),
                        (this._offsetVector[1] = A),
                        (this._offsetVector[2] = 0),
                        n.translate(
                          this._viewProjMat,
                          this._viewProjMat,
                          this._offsetVector
                        ),
                        (x = this._viewProjMat);
                    }
                    if (
                      (this._drawFill(e, t, i, o, l, d, h, x, c, f, y, g),
                      d.getPaintValue("fill-antialias", i) &&
                        !_ &&
                        t.outlineElementCount > 0 &&
                        (1 === o || 3 === o))
                    ) {
                      var V = d.hasDataDrivenOutline;
                      if (d.outlineUsesFillColor) {
                        if (1 !== this._color[3]) return;
                        (this._outlineColor[0] = this._color[0]),
                          (this._outlineColor[1] = this._color[1]),
                          (this._outlineColor[2] = this._color[2]),
                          (this._outlineColor[3] = this._color[3]);
                      } else {
                        var R = d.hasDataDrivenOutlineColor
                            ? [1, 1, 1, 1]
                            : d.getPaintValue("fill-outline-color", i),
                          O = m * R[3] * f;
                        (this._outlineColor[0] = O * R[0]),
                          (this._outlineColor[1] = O * R[1]),
                          (this._outlineColor[2] = O * R[2]),
                          (this._outlineColor[3] = O);
                      }
                      var C = 0.75 / c,
                        k = this._getOutlineVAO(e, l, V);
                      if (k) {
                        e.bindVAO(k);
                        var U = this._outlineShaderVariations.getProgram(
                          [V, y],
                          void 0,
                          void 0,
                          V
                            ? this._outlineAttributeLocationsDD
                            : this._outlineAttributeLocations
                        );
                        e.bindProgram(U),
                          U.setUniformMatrix4fv("u_transformMatrix", x),
                          U.setUniformMatrix4fv("u_extrudeMatrix", u),
                          U.setUniform2fv(
                            "u_normalized_origin",
                            l.tileTransform.displayCoord
                          ),
                          U.setUniform1f("u_depth", d.z + 1 / 65536),
                          U.setUniform1f("u_outline_width", C),
                          U.setUniform4fv("u_color", this._outlineColor),
                          y && U.setUniform4f("u_id", g[0], g[1], g[2], g[3]),
                          e.drawElements(
                            4,
                            t.outlineElementCount,
                            5125,
                            12 * t.outlineElementStart
                          ),
                          e.bindVAO();
                      }
                    }
                  }
                }),
                (e.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = new d("fill", ["fillVS", "fillFS"], [], l, e);
                  t.addDefine("PATTERN", "PATTERN", [!0, !0], "PATTERN"),
                    t.addDefine("DD", "DD", [!0, !1], "DD"),
                    t.addDefine("ID", "ID", [!0, !0], "ID"),
                    (this._fillShaderVariations = t),
                    (this._fillVertexAttributes = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 4,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._fillVertexAttributesDD = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 8,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_color",
                          count: 4,
                          type: 5121,
                          offset: 4,
                          stride: 8,
                          normalized: !0,
                          divisor: 0
                        }
                      ]
                    });
                  var i = new d(
                    "outline",
                    ["outlineVS", "outlineFS"],
                    [],
                    l,
                    e
                  );
                  return (
                    i.addDefine("DD", "DD", [!0, !1], "DD"),
                    i.addDefine("ID", "ID", [!0, !0], "ID"),
                    (this._outlineShaderVariations = i),
                    (this._outlineVertexAttributes = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 8,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_offset",
                          count: 2,
                          type: 5120,
                          offset: 4,
                          stride: 8,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_xnormal",
                          count: 2,
                          type: 5120,
                          offset: 6,
                          stride: 8,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._outlineVertexAttributesDD = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 12,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_offset",
                          count: 2,
                          type: 5120,
                          offset: 4,
                          stride: 12,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_xnormal",
                          count: 2,
                          type: 5120,
                          offset: 6,
                          stride: 12,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_color",
                          count: 4,
                          type: 5121,
                          offset: 8,
                          stride: 12,
                          normalized: !0,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._initialized = !0),
                    !0
                  );
                }),
                (e.prototype._drawFill = function(
                  e,
                  t,
                  n,
                  r,
                  o,
                  a,
                  s,
                  l,
                  d,
                  h,
                  u,
                  c
                ) {
                  var f = a.getPaintValue("fill-pattern", n),
                    _ = void 0 !== f,
                    p = a.hasDataDrivenOpacity
                      ? 1
                      : h * a.getPaintValue("fill-opacity", n),
                    m = a.hasDataDrivenColor
                      ? [1, 1, 1, 1]
                      : a.getPaintValue("fill-color", n),
                    v = p * m[3] * h;
                  (this._color[0] = v * m[0]),
                    (this._color[1] = v * m[1]),
                    (this._color[2] = v * m[2]),
                    (this._color[3] = v);
                  var g = a.hasDataDrivenFill,
                    y = !1;
                  if (
                    (!_ && (!g && 1 === v) && (y = !0),
                    (!_ || 0 !== r) && (!y || 1 !== r) && (_ || y || 0 !== r))
                  ) {
                    var x = this._getFillVAO(e, o, g);
                    if (x) {
                      e.bindVAO(x);
                      var b = this._fillShaderVariations.getProgram(
                        [_, g, u],
                        void 0,
                        void 0,
                        g
                          ? this._fillAttributeLocationsDD
                          : this._fillAttributeLocations
                      );
                      if ((e.bindProgram(b), _)) {
                        var w = s.getMosaicItemPosition(f, !0);
                        if (w) {
                          var D =
                            o.coordRange /
                            512 /
                            Math.pow(2, Math.round(n) - o.key.level) /
                            d;
                          i.identity(this._patternMatrix);
                          var z = 1 / (w.size[0] * D),
                            M = 1 / (w.size[1] * D);
                          (this._patternMatrix[0] = z),
                            (this._patternMatrix[4] = M),
                            s.bind(e, 9729, w.page, 1),
                            b.setUniformMatrix3fv(
                              "u_pattern_matrix",
                              this._patternMatrix
                            ),
                            b.setUniform2f("u_pattern_tl", w.tl[0], w.tl[1]),
                            b.setUniform2f("u_pattern_br", w.br[0], w.br[1]),
                            b.setUniform1i("u_texture", 1);
                        }
                      }
                      b.setUniformMatrix4fv("u_transformMatrix", l),
                        b.setUniform2fv(
                          "u_normalized_origin",
                          o.tileTransform.displayCoord
                        ),
                        b.setUniform1f("u_depth", a.z + 1 / 65536),
                        b.setUniform4fv("u_color", this._color),
                        u && b.setUniform4f("u_id", c[0], c[1], c[2], c[3]),
                        e.drawElements(
                          4,
                          t.triangleElementCount,
                          5125,
                          12 * t.triangleElementStart
                        ),
                        e.bindVAO();
                    }
                  }
                }),
                (e.prototype._getFillVAO = function(e, t, i) {
                  if (i) {
                    if (t.fillDDVertexArrayObject)
                      return t.fillDDVertexArrayObject;
                    var n = t.fillDDVertexBuffer,
                      r = t.fillIndexBuffer;
                    return n && r
                      ? ((t.fillDDVertexArrayObject = new h(
                          e,
                          this._fillAttributeLocationsDD,
                          this._fillVertexAttributesDD,
                          { geometry: n },
                          r
                        )),
                        t.fillDDVertexArrayObject)
                      : null;
                  }
                  if (t.fillVertexArrayObject) return t.fillVertexArrayObject;
                  (n = t.fillVertexBuffer), (r = t.fillIndexBuffer);
                  return n && r
                    ? ((t.fillVertexArrayObject = new h(
                        e,
                        this._fillAttributeLocations,
                        this._fillVertexAttributes,
                        { geometry: n },
                        r
                      )),
                      t.fillVertexArrayObject)
                    : null;
                }),
                (e.prototype._getOutlineVAO = function(e, t, i) {
                  if (i) {
                    if (t.outlineDDVertexArrayObject)
                      return t.outlineDDVertexArrayObject;
                    var n = t.outlineDDVertexBuffer,
                      r = t.outlineIndexBuffer;
                    return n && r
                      ? ((t.outlineDDVertexArrayObject = new h(
                          e,
                          this._outlineAttributeLocationsDD,
                          this._outlineVertexAttributesDD,
                          { geometry: n },
                          r
                        )),
                        t.outlineDDVertexArrayObject)
                      : null;
                  }
                  if (t.outlineVertexArrayObject)
                    return t.outlineVertexArrayObject;
                  (n = t.outlineVertexBuffer), (r = t.outlineIndexBuffer);
                  return n && r
                    ? ((t.outlineVertexArrayObject = new h(
                        e,
                        this._outlineAttributeLocations,
                        this._outlineVertexAttributes,
                        { geometry: n },
                        r
                      )),
                      t.outlineVertexArrayObject)
                    : null;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2239: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(417),
        i(418),
        i(776),
        i(2039),
        i(415),
        i(2054),
        i(2049),
        i(2035),
        i(91)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d, h) {
            return (function() {
              function e() {
                (this._attributeLocations = {
                  a_pos: 0,
                  a_offsetAndNormal: 1,
                  a_accumulatedDistance: 2
                }),
                  (this._attributeLocationsDD = {
                    a_pos: 0,
                    a_offsetAndNormal: 1,
                    a_accumulatedDistance: 2,
                    a_color: 3,
                    a_width: 4
                  }),
                  (this._initialized = !1),
                  (this._viewProjMat = i.create()),
                  (this._offsetVector = r.create()),
                  (this._color = o.create()),
                  (this._dashArray = n.create());
              }
              return (
                (e.prototype.dispose = function() {}),
                (e.prototype.render = function(
                  e,
                  t,
                  n,
                  r,
                  o,
                  l,
                  d,
                  h,
                  u,
                  c,
                  f
                ) {
                  if (0 !== t.triangleElementCount) {
                    this._initialized || this._initialize(e);
                    var _ = l.tileTransform.transform,
                      p = l.coordRange / 512,
                      m = d.getPaintValue("line-translate", n);
                    if (0 !== m[0] || 0 !== m[1]) {
                      i.copy(this._viewProjMat, l.tileTransform.transform);
                      var v = m[0],
                        g = m[1],
                        y = 0,
                        x = 0,
                        b = ((1 << l.key.level) / Math.pow(2, n)) * p,
                        w = o.rotation;
                      if (1 === d.getPaintValue("line-translate-anchor", n)) {
                        var D = -a.C_DEG_TO_RAD * w,
                          z = Math.sin(D),
                          M = Math.cos(D);
                        (y = b * (v * M - g * z)), (x = b * (v * z + g * M));
                      } else (y = b * v), (x = b * g);
                      (this._offsetVector[0] = y),
                        (this._offsetVector[1] = x),
                        (this._offsetVector[2] = 0),
                        i.translate(
                          this._viewProjMat,
                          this._viewProjMat,
                          this._offsetVector
                        ),
                        (_ = this._viewProjMat);
                    }
                    var A = d.getPaintValue("line-pattern", n),
                      T = void 0 !== A,
                      P = 1 / c,
                      S = d.getPaintValue("line-blur", n),
                      I = d.hasDataDrivenColor
                        ? [1, 1, 1, 1]
                        : d.getPaintValue("line-color", n),
                      V = d.hasDataDrivenOpacity
                        ? 1
                        : d.getPaintValue("line-opacity", n),
                      R = d.hasDataDrivenWidth
                        ? 1
                        : d.getPaintValue("line-width", n),
                      O = V * I[3] * f;
                    (this._color[0] = O * I[0]),
                      (this._color[1] = O * I[1]),
                      (this._color[2] = O * I[2]),
                      (this._color[3] = O);
                    var C,
                      k = d.hasDataDrivenLine,
                      U = 3 === r;
                    U && (C = s.int32To4Bytes(t.layerID));
                    var L = this._getLineVAO(e, l, k);
                    if (L) {
                      e.bindVAO(L);
                      var j = this._shaderVariations.getProgram(
                        [T, k, U],
                        void 0,
                        void 0,
                        k
                          ? this._attributeLocationsDD
                          : this._attributeLocations
                      );
                      if (
                        (e.bindProgram(j),
                        j.setUniformMatrix4fv("u_transformMatrix", _),
                        j.setUniformMatrix4fv("u_extrudeMatrix", u),
                        j.setUniform2fv(
                          "u_normalized_origin",
                          l.tileTransform.displayCoord
                        ),
                        j.setUniform1f("u_depth", d.z),
                        j.setUniform1f("u_blur", S),
                        j.setUniform1f("u_antialiasing", P),
                        j.setUniform4fv("u_color", this._color),
                        j.setUniform1f("u_width", R),
                        U && j.setUniform4f("u_id", C[0], C[1], C[2], C[3]),
                        T)
                      ) {
                        var F = h.getMosaicItemPosition(A, !0);
                        F &&
                          (h.bind(e, 9729, F.page, 1),
                          j.setUniform2f("u_pattern_tl", F.tl[0], F.br[1]),
                          j.setUniform2f("u_pattern_br", F.br[0], F.tl[1]),
                          j.setUniform2f(
                            "u_spriteSize",
                            p * F.size[0],
                            F.size[1]
                          ),
                          j.setUniform1i("u_texture", 1));
                      } else {
                        var E = d.getPaintValue("line-dasharray", n);
                        E.length < 2 && (E = [1, -1]);
                        var B = p;
                        (this._dashArray[0] = B * E[0]),
                          (this._dashArray[1] = B * E[1]),
                          j.setUniform2fv("u_dasharray", this._dashArray);
                      }
                      e.drawElements(
                        4,
                        t.triangleElementCount,
                        5125,
                        12 * t.triangleElementStart
                      ),
                        e.bindVAO();
                    }
                  }
                }),
                (e.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = new d("line", ["lineVS", "lineFS"], [], l, e);
                  return (
                    t.addDefine("PATTERN", "PATTERN", [!0, !0], "PATTERN"),
                    t.addDefine("DD", "DD", [!0, !1], "DD"),
                    t.addDefine("ID", "ID", [!0, !0], "ID"),
                    (this._shaderVariations = t),
                    (this._vertexAttributes = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 12,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_offsetAndNormal",
                          count: 4,
                          type: 5120,
                          offset: 4,
                          stride: 12,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_accumulatedDistance",
                          count: 2,
                          type: 5123,
                          offset: 8,
                          stride: 12,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._vertexAttributesDD = {
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
                          name: "a_offsetAndNormal",
                          count: 4,
                          type: 5120,
                          offset: 4,
                          stride: 20,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_accumulatedDistance",
                          count: 2,
                          type: 5122,
                          offset: 8,
                          stride: 20,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_color",
                          count: 4,
                          type: 5121,
                          offset: 12,
                          stride: 20,
                          normalized: !0,
                          divisor: 0
                        },
                        {
                          name: "a_width",
                          count: 1,
                          type: 5126,
                          offset: 16,
                          stride: 20,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._initialized = !0),
                    !0
                  );
                }),
                (e.prototype._getLineVAO = function(e, t, i) {
                  if (i) {
                    if (t.lineDDVertexArrayObject)
                      return t.lineDDVertexArrayObject;
                    var n = t.lineDDVertexBuffer,
                      r = t.lineIndexBuffer;
                    return n && r
                      ? ((t.lineDDVertexArrayObject = new h(
                          e,
                          this._attributeLocationsDD,
                          this._vertexAttributesDD,
                          { geometry: n },
                          r
                        )),
                        t.lineDDVertexArrayObject)
                      : null;
                  }
                  if (t.lineVertexArrayObject) return t.lineVertexArrayObject;
                  (n = t.lineVertexBuffer), (r = t.lineIndexBuffer);
                  return n && r
                    ? ((t.lineVertexArrayObject = new h(
                        e,
                        this._attributeLocations,
                        this._vertexAttributes,
                        { geometry: n },
                        r
                      )),
                      t.lineVertexArrayObject)
                    : null;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2240: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(2241), i(2242)]),
        void 0 ===
          (r = function(e, t, i, n) {
            return (function() {
              function e() {
                (this._iconRenderer = new i()), (this._sdfRenderer = new n());
              }
              return (
                (e.prototype.dispose = function() {
                  this._iconRenderer &&
                    (this._iconRenderer.dispose(), (this._iconRenderer = null)),
                    this._sdfRenderer &&
                      (this._sdfRenderer.dispose(), (this._sdfRenderer = null));
                }),
                (e.prototype.render = function(
                  e,
                  t,
                  i,
                  n,
                  r,
                  o,
                  a,
                  s,
                  l,
                  d,
                  h,
                  u,
                  c,
                  f
                ) {
                  t.hasData() &&
                    (t.markerPerPageElementsMap.size > 0 &&
                      this._iconRenderer.render(
                        e,
                        t,
                        i,
                        n,
                        r,
                        o,
                        a,
                        s,
                        l,
                        h,
                        u,
                        f
                      ),
                    t.glyphPerPageElementsMap.size > 0 &&
                      this._sdfRenderer.render(
                        e,
                        t,
                        i,
                        n,
                        r,
                        o,
                        a,
                        s,
                        d,
                        h,
                        u,
                        c,
                        f
                      ));
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2241: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(417),
        i(776),
        i(2039),
        i(415),
        i(2054),
        i(2049),
        i(2035),
        i(91)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d) {
            return (function() {
              function e() {
                (this._attributeLocations = {
                  a_pos: 0,
                  a_vertexOffset: 1,
                  a_tex: 2,
                  a_levelInfo: 3
                }),
                  (this._attributeLocationsDD = {
                    a_pos: 0,
                    a_vertexOffset: 1,
                    a_tex: 2,
                    a_levelInfo: 3,
                    a_color: 4,
                    a_size: 5
                  }),
                  (this._spritesTextureSize = new Float32Array(2)),
                  (this._initialized = !1),
                  (this._viewProjMat = i.create()),
                  (this._offsetVector = n.create()),
                  (this._extrudeMat = i.create()),
                  (this._color = r.create());
              }
              return (
                (e.prototype.dispose = function() {}),
                (e.prototype.render = function(
                  e,
                  t,
                  n,
                  r,
                  s,
                  l,
                  d,
                  h,
                  u,
                  c,
                  f,
                  _
                ) {
                  var p = this;
                  this._initialized || this._initialize(e);
                  var m = h.hasDataDrivenIconSize
                      ? 1
                      : h.getLayoutValue("icon-size", n),
                    v = h.hasDataDrivenIconColor
                      ? [1, 1, 1, 1]
                      : h.getPaintValue("icon-color", n),
                    g = h.hasDataDrivenIconOpacity
                      ? 1
                      : h.getPaintValue("icon-opacity", n),
                    y = v[3] * g * _;
                  (this._color[0] = y * v[0]),
                    (this._color[1] = y * v[1]),
                    (this._color[2] = y * v[2]),
                    (this._color[3] = y);
                  var x = h.getLayoutValue("icon-rotation-alignment", n);
                  2 === x &&
                    (x = 1 === h.getLayoutValue("symbol-placement", n) ? 0 : 1);
                  var b = 0 === x,
                    w = t.isSDF,
                    D = h.hasDataDrivenIcon,
                    z = 3 === r,
                    M = o.degToByte(s),
                    A = d.tileTransform.transform,
                    T = h.getPaintValue("icon-translate", n);
                  if (0 !== T[0] || 0 !== T[1]) {
                    i.copy(this._viewProjMat, d.tileTransform.transform);
                    var P = T[0],
                      S = T[1],
                      I = 0,
                      V = 0,
                      R = d.coordRange / 512,
                      O = ((1 << d.key.level) / Math.pow(2, n)) * R;
                    if (1 === h.getPaintValue("icon-translate-anchor", n)) {
                      var C = -o.C_DEG_TO_RAD * s,
                        k = Math.sin(C),
                        U = Math.cos(C);
                      (I = O * (P * U - S * k)), (V = O * (P * k + S * U));
                    } else (I = O * P), (V = O * S);
                    (this._offsetVector[0] = I),
                      (this._offsetVector[1] = V),
                      (this._offsetVector[2] = 0),
                      i.translate(
                        this._viewProjMat,
                        this._viewProjMat,
                        this._offsetVector
                      ),
                      (A = this._viewProjMat);
                  }
                  b ? i.copy(this._extrudeMat, c) : i.copy(this._extrudeMat, f);
                  var L = this._getIconVAO(e, d, D);
                  if (L) {
                    e.bindVAO(L);
                    var j = this._shaderVariations.getProgram(
                      [w, D, z],
                      void 0,
                      void 0,
                      D ? this._attributeLocationsDD : this._attributeLocations
                    );
                    if ((e.bindProgram(j), w)) {
                      var F = h.getPaintValue("icon-halo-color", n),
                        E = h.getPaintValue("icon-halo-width", n);
                      j.setUniform4f("u_outlineColor", F[0], F[1], F[2], F[3]),
                        j.setUniform1f("u_outlineSize", E);
                    }
                    if (
                      (j.setUniformMatrix4fv("u_transformMatrix", A),
                      j.setUniformMatrix4fv(
                        "u_extrudeMatrix",
                        this._extrudeMat
                      ),
                      j.setUniform2fv(
                        "u_normalized_origin",
                        d.tileTransform.displayCoord
                      ),
                      j.setUniform1f("u_depth", h.z),
                      j.setUniform1f("u_mapRotation", M),
                      j.setUniform1f("u_keepUpright", 0),
                      j.setUniform1f("u_level", 10 * n),
                      j.setUniform1f("u_fadeSpeed", 10 * l.fadeSpeed),
                      j.setUniform1f("u_minfadeLevel", 10 * l.minfadeLevel),
                      j.setUniform1f("u_maxfadeLevel", 10 * l.maxfadeLevel),
                      j.setUniform1f("u_fadeChange", 10 * (n + l.fadeChange)),
                      j.setUniform1i("u_texture", 1),
                      j.setUniform1f("u_size", m),
                      j.setUniform4fv("u_color", this._color),
                      z)
                    ) {
                      var B = a.int32To4Bytes(t.layerID);
                      j.setUniform4f("u_id", B[0], B[1], B[2], B[3]);
                    }
                    t.markerPerPageElementsMap.forEach(function(t, i) {
                      (p._spritesTextureSize[0] = u.getWidth(i) / 4),
                        (p._spritesTextureSize[1] = u.getHeight(i) / 4),
                        j.setUniform2fv("u_mosaicSize", p._spritesTextureSize),
                        u.bind(e, 9729, i, 1),
                        e.drawElements(4, t[1], 5125, 12 * t[0]);
                    }),
                      e.bindVAO();
                  }
                }),
                (e.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = new l("icon", ["iconVS", "iconFS"], [], s, e);
                  return (
                    t.addDefine("SDF", "SDF", [!0, !0], "SDF"),
                    t.addDefine("DD", "DD", [!0, !1], "DD"),
                    t.addDefine("ID", "ID", [!0, !0], "ID"),
                    (this._shaderVariations = t),
                    (this._vertexAttributes = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_vertexOffset",
                          count: 2,
                          type: 5122,
                          offset: 4,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_tex",
                          count: 4,
                          type: 5121,
                          offset: 8,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_levelInfo",
                          count: 4,
                          type: 5121,
                          offset: 12,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._vertexAttributesDD = {
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
                          name: "a_vertexOffset",
                          count: 2,
                          type: 5122,
                          offset: 4,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_tex",
                          count: 4,
                          type: 5121,
                          offset: 8,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_levelInfo",
                          count: 4,
                          type: 5121,
                          offset: 12,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_color",
                          count: 4,
                          type: 5121,
                          offset: 16,
                          stride: 24,
                          normalized: !0,
                          divisor: 0
                        },
                        {
                          name: "a_size",
                          count: 1,
                          type: 5126,
                          offset: 20,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._initialized = !0),
                    !0
                  );
                }),
                (e.prototype._getIconVAO = function(e, t, i) {
                  if (i) {
                    if (t.iconDDVertexArrayObject)
                      return t.iconDDVertexArrayObject;
                    var n = t.iconDDVertexBuffer,
                      r = t.iconIndexBuffer;
                    return n && r
                      ? ((t.iconDDVertexArrayObject = new d(
                          e,
                          this._attributeLocationsDD,
                          this._vertexAttributesDD,
                          { geometry: n },
                          r
                        )),
                        t.iconDDVertexArrayObject)
                      : null;
                  }
                  if (t.iconVertexArrayObject) return t.iconVertexArrayObject;
                  (n = t.iconVertexBuffer), (r = t.iconIndexBuffer);
                  return n && r
                    ? ((t.iconVertexArrayObject = new d(
                        e,
                        this._attributeLocations,
                        this._vertexAttributes,
                        { geometry: n },
                        r
                      )),
                      t.iconVertexArrayObject)
                    : null;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2242: function(e, t, i) {
      var n, r;
      (n = [
        i.dj.c(e.i),
        t,
        i(15),
        i(417),
        i(776),
        i(2039),
        i(415),
        i(2054),
        i(2049),
        i(2035),
        i(91)
      ]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s, l, d, h) {
            return (function() {
              function e() {
                (this._attributeLocations = {
                  a_pos: 0,
                  a_vertexOffset: 1,
                  a_tex: 2,
                  a_levelInfo: 3
                }),
                  (this._attributeLocationsDD = {
                    a_pos: 0,
                    a_vertexOffset: 1,
                    a_tex: 2,
                    a_levelInfo: 3,
                    a_color: 4,
                    a_size: 5
                  }),
                  (this._initialized = !1),
                  (this._viewProjMat = n.create()),
                  (this._offsetVector = r.create()),
                  (this._extrudeMat = n.create()),
                  (this._haloColor = o.create()),
                  (this._sdfColor = o.create()),
                  (this._scaleVec = r.create());
              }
              return (
                (e.prototype.dispose = function() {}),
                (e.prototype.render = function(
                  e,
                  t,
                  r,
                  o,
                  l,
                  d,
                  h,
                  u,
                  c,
                  f,
                  _,
                  p,
                  m
                ) {
                  var v = this;
                  if (!i("esri-vector-tiles-avoid-text")) {
                    this._initialized || this._initialize(e);
                    var g = a.degToByte(l),
                      y = u.getLayoutValue("text-rotation-alignment", r);
                    2 === y &&
                      (y =
                        1 === u.getLayoutValue("symbol-placement", r) ? 0 : 1);
                    var x = 0 === y,
                      b = u.getLayoutValue("text-keep-upright", r) && x,
                      w = 3 === o,
                      D = (0.8 * 3) / p,
                      z = u.hasDataDrivenTextSize
                        ? 1
                        : u.getLayoutValue("text-size", r),
                      M = u.hasDataDrivenTextColor
                        ? [1, 1, 1, 1]
                        : u.getPaintValue("text-color", r),
                      A = u.hasDataDrivenTextOpacity
                        ? 1
                        : u.getPaintValue("text-opacity", r),
                      T = M[3] * A * m;
                    (this._sdfColor[0] = T * M[0]),
                      (this._sdfColor[1] = T * M[1]),
                      (this._sdfColor[2] = T * M[2]),
                      (this._sdfColor[3] = T),
                      this._glyphTextureSize ||
                        (this._glyphTextureSize = new Float32Array([
                          c.width / 4,
                          c.height / 4
                        ]));
                    var P = h.tileTransform.transform,
                      S = u.getPaintValue("text-translate", r);
                    if (0 !== S[0] || 0 !== S[1]) {
                      n.copy(this._viewProjMat, h.tileTransform.transform);
                      var I = S[0],
                        V = S[1],
                        R = 0,
                        O = 0,
                        C = h.coordRange / 512,
                        k = ((1 << h.key.level) / Math.pow(2, r)) * C;
                      if (1 === u.getPaintValue("text-translate-anchor", r)) {
                        var U = -a.C_DEG_TO_RAD * l,
                          L = Math.sin(U),
                          j = Math.cos(U);
                        (R = k * (I * j - V * L)), (O = k * (I * L + V * j));
                      } else (R = k * I), (O = k * V);
                      (this._offsetVector[0] = R),
                        (this._offsetVector[1] = O),
                        (this._offsetVector[2] = 0),
                        n.translate(
                          this._viewProjMat,
                          this._viewProjMat,
                          this._offsetVector
                        ),
                        (P = this._viewProjMat);
                    }
                    x
                      ? n.copy(this._extrudeMat, f)
                      : n.copy(this._extrudeMat, _),
                      (this._scaleVec[0] = 1 / 24),
                      (this._scaleVec[1] = 1 / 24),
                      (this._scaleVec[2] = 1),
                      n.scale(
                        this._extrudeMat,
                        this._extrudeMat,
                        this._scaleVec
                      );
                    var F = u.hasDataDrivenText,
                      E = this._getSDFVAO(e, h, F);
                    if (E) {
                      e.bindVAO(E);
                      var B = this._shaderVariations.getProgram(
                        [F, w],
                        void 0,
                        void 0,
                        F
                          ? this._attributeLocationsDD
                          : this._attributeLocations
                      );
                      if (
                        (e.bindProgram(B),
                        B.setUniformMatrix4fv("u_transformMatrix", P),
                        B.setUniformMatrix4fv(
                          "u_extrudeMatrix",
                          this._extrudeMat
                        ),
                        B.setUniform2fv(
                          "u_normalized_origin",
                          h.tileTransform.displayCoord
                        ),
                        B.setUniform1f("u_depth", u.z + 1 / 65536),
                        B.setUniform2fv("u_mosaicSize", this._glyphTextureSize),
                        B.setUniform1f("u_mapRotation", g),
                        B.setUniform1f("u_keepUpright", b ? 1 : 0),
                        B.setUniform1f("u_level", 10 * r),
                        B.setUniform1f("u_fadeSpeed", 10 * d.fadeSpeed),
                        B.setUniform1f("u_minfadeLevel", 10 * d.minfadeLevel),
                        B.setUniform1f("u_maxfadeLevel", 10 * d.maxfadeLevel),
                        B.setUniform1f("u_fadeChange", 10 * (r + d.fadeChange)),
                        B.setUniform1i("u_texture", 0),
                        B.setUniform1f("u_size", z),
                        B.setUniform1f("u_antialiasingWidth", D),
                        w)
                      ) {
                        var N = s.int32To4Bytes(t.layerID);
                        B.setUniform4f("u_id", N[0], N[1], N[2], N[3]);
                      }
                      t.glyphPerPageElementsMap.forEach(function(t, i) {
                        c.bind(e, 9729, i, 0);
                        var n = u.getPaintValue("text-halo-color", r),
                          o = u.getPaintValue("text-halo-width", r);
                        if (n[3] > 0 && o > 0) {
                          var a = n[3] * A * m;
                          (v._haloColor[0] = a * n[0]),
                            (v._haloColor[1] = a * n[1]),
                            (v._haloColor[2] = a * n[2]),
                            (v._haloColor[3] = a);
                          var s = 3 * u.getPaintValue("text-halo-blur", r),
                            l = 3 * o;
                          B.setUniform4fv("u_color", v._haloColor),
                            B.setUniform1f("u_halo", 1),
                            B.setUniform1f("u_edgeDistance", l),
                            B.setUniform1f("u_edgeBlur", s),
                            e.drawElements(4, t[1], 5125, 12 * t[0]);
                        }
                        v._sdfColor[3] > 0 &&
                          (B.setUniform4fv("u_color", v._sdfColor),
                          B.setUniform1f("u_halo", 0),
                          B.setUniform1f("u_edgeDistance", 0),
                          B.setUniform1f("u_edgeBlur", 0),
                          e.drawElements(4, t[1], 5125, 12 * t[0]));
                      }),
                        e.bindVAO();
                    }
                  }
                }),
                (e.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = new d("text", ["textVS", "textFS"], [], l, e);
                  return (
                    t.addDefine("DD", "DD", [!0, !1], "DD"),
                    t.addDefine("ID", "ID", [!0, !0], "ID"),
                    (this._shaderVariations = t),
                    (this._vertexAttributes = {
                      geometry: [
                        {
                          name: "a_pos",
                          count: 2,
                          type: 5122,
                          offset: 0,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_vertexOffset",
                          count: 2,
                          type: 5122,
                          offset: 4,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_tex",
                          count: 4,
                          type: 5121,
                          offset: 8,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_levelInfo",
                          count: 4,
                          type: 5121,
                          offset: 12,
                          stride: 16,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._vertexAttributesDD = {
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
                          name: "a_vertexOffset",
                          count: 2,
                          type: 5122,
                          offset: 4,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_tex",
                          count: 4,
                          type: 5121,
                          offset: 8,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_levelInfo",
                          count: 4,
                          type: 5121,
                          offset: 12,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        },
                        {
                          name: "a_color",
                          count: 4,
                          type: 5121,
                          offset: 16,
                          stride: 24,
                          normalized: !0,
                          divisor: 0
                        },
                        {
                          name: "a_size",
                          count: 1,
                          type: 5126,
                          offset: 20,
                          stride: 24,
                          normalized: !1,
                          divisor: 0
                        }
                      ]
                    }),
                    (this._initialized = !0),
                    !0
                  );
                }),
                (e.prototype._getSDFVAO = function(e, t, i) {
                  if (i) {
                    if (t.textDDVertexArrayObject)
                      return t.textDDVertexArrayObject;
                    var n = t.textDDVertexBuffer,
                      r = t.textIndexBuffer;
                    return n && r
                      ? ((t.textDDVertexArrayObject = new h(
                          e,
                          this._attributeLocationsDD,
                          this._vertexAttributesDD,
                          { geometry: n },
                          r
                        )),
                        t.textDDVertexArrayObject)
                      : null;
                  }
                  if (t.textVertexArrayObject) return t.textVertexArrayObject;
                  (n = t.textVertexBuffer), (r = t.textIndexBuffer);
                  return n && r
                    ? ((t.textVertexArrayObject = new h(
                        e,
                        this._attributeLocations,
                        this._vertexAttributes,
                        { geometry: n },
                        r
                      )),
                      t.textVertexArrayObject)
                    : null;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    },
    2243: function(e, t, i) {
      var n, r;
      (n = [i.dj.c(e.i), t, i(415), i(2049), i(77), i(72), i(50), i(91)]),
        void 0 ===
          (r = function(e, t, i, n, r, o, a, s) {
            return (function() {
              function e() {
                (this._initialized = !1),
                  (this._maxWidth = 0),
                  (this._color = new Float32Array([1, 0, 0, 1]));
              }
              return (
                (e.prototype.dispose = function() {
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
                      (this._tileInfoVertexArrayObject = null));
                }),
                (e.prototype.render = function(e, t) {
                  this._initialized || this._initialize(e),
                    e.bindVAO(this._outlineVertexArrayObject),
                    e.bindProgram(this._outlineProgram),
                    this._outlineProgram.setUniformMatrix4fv(
                      "u_transformMatrix",
                      t.tileTransform.transform
                    ),
                    this._outlineProgram.setUniform2fv(
                      "u_normalized_origin",
                      t.tileTransform.displayCoord
                    ),
                    this._outlineProgram.setUniform1f(
                      "u_coord_range",
                      t.coordRange
                    ),
                    this._outlineProgram.setUniform1f("u_depth", 0),
                    this._outlineProgram.setUniform4fv("u_color", this._color),
                    e.setLineWidth(2),
                    e.drawArrays(3, 0, 4),
                    e.bindVAO();
                  var i = this._getTexture(e, t);
                  i &&
                    (e.bindVAO(this._tileInfoVertexArrayObject),
                    e.bindProgram(this._tileInfoProgram),
                    e.bindTexture(i, 0),
                    this._tileInfoProgram.setUniformMatrix4fv(
                      "u_transformMatrix",
                      t.tileTransform.transform
                    ),
                    this._tileInfoProgram.setUniform2fv(
                      "u_normalized_origin",
                      t.tileTransform.displayCoord
                    ),
                    this._tileInfoProgram.setUniform1f("u_depth", 0),
                    this._tileInfoProgram.setUniform1f(
                      "u_coord_ratio",
                      t.coordRange / 512
                    ),
                    this._tileInfoProgram.setUniform2f("u_delta", 8, 8),
                    this._tileInfoProgram.setUniform2f(
                      "u_dimensions",
                      i.descriptor.width,
                      i.descriptor.height
                    ),
                    e.drawArrays(5, 0, 4),
                    e.bindVAO());
                }),
                (e.prototype._initialize = function(e) {
                  if (this._initialized) return !0;
                  var t = { a_pos: 0 },
                    i = new o(e, n.backgroundVS, n.backgroundFS, t),
                    a = new o(e, n.tileInfoVS, n.tileInfoFS, t),
                    l = {
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
                    d = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]),
                    h = r.createVertex(e, 35044, d),
                    u = new s(e, t, l, { geometry: h }),
                    c = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]),
                    f = r.createVertex(e, 35044, c),
                    _ = new s(e, t, l, { geometry: f });
                  return (
                    (this._outlineProgram = i),
                    (this._tileInfoProgram = a),
                    (this._outlineVertexArrayObject = u),
                    (this._tileInfoVertexArrayObject = _),
                    (this._initialized = !0),
                    !0
                  );
                }),
                (e.prototype._getTexture = function(e, t) {
                  if (t.texture) return t.texture;
                  this._canvas ||
                    ((this._canvas = document.createElement("canvas")),
                    this._canvas.setAttribute("id", "canvas2d"),
                    this._canvas.setAttribute("width", "256"),
                    this._canvas.setAttribute("height", "32"),
                    this._canvas.setAttribute("style", "display:none"));
                  var n = t.key.id,
                    r = this._canvas.getContext("2d");
                  (r.font = "24px sans-serif"),
                    (r.textAlign = "left"),
                    (r.textBaseline = "middle");
                  var o = r.measureText(n),
                    s = Math.pow(2, Math.ceil(i.log2(o.width + 2)));
                  return (
                    s > this._maxWidth && (this._maxWidth = s),
                    r.clearRect(0, 0, this._maxWidth, 32),
                    (r.fillStyle =
                      t.key.level > t.refKey.level ? "red" : "blue"),
                    r.fillText(n, 0, 16),
                    (t.texture = new a(
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
                e
              );
            })();
          }.apply(null, n)) || (e.exports = r);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/layers/LayerView": 2006,
      "esri/views/vectorTiles/renderers/vtShaderSnippets": 2049,
      "esri/views/vectorTiles/renderers/rendererUtils": 2054,
      "esri/views/vectorTiles/MemoryBuffer": 2075,
      "esri/core/LRUCache": 2091,
      "esri/views/vectorTiles/Rect": 2105,
      "esri/views/vectorTiles/TileHandler": 2135,
      "esri/views/vectorTiles/RectangleBinPack": 2136,
      "esri/views/vectorTiles/renderers/Renderer": 2137,
      "esri/core/libs/gl-matrix/mat3": 2138,
      "esri/views/vectorTiles/GlyphMosaic": 2222,
      "esri/views/vectorTiles/GlyphSource": 2223,
      "esri/views/vectorTiles/SpriteMosaic": 2224,
      "esri/views/vectorTiles/SpriteSource": 2225,
      "esri/views/vectorTiles/TileIndex": 2226,
      "esri/views/vectorTiles/renderers/FadeRecorder": 2228,
      "esri/views/vectorTiles/renderers/BackgroundRenderer": 2229,
      "dojo/text!esri/views/vectorTiles/renderers/shaders/iconShaders.xml": 2230,
      "dojo/text!esri/views/vectorTiles/renderers/shaders/backgroundShaders.xml": 2231,
      "dojo/text!esri/views/vectorTiles/renderers/shaders/circleShaders.xml": 2232,
      "dojo/text!esri/views/vectorTiles/renderers/shaders/fillShaders.xml": 2233,
      "dojo/text!esri/views/vectorTiles/renderers/shaders/lineShaders.xml": 2234,
      "dojo/text!esri/views/vectorTiles/renderers/shaders/outlineShaders.xml": 2235,
      "dojo/text!esri/views/vectorTiles/renderers/shaders/textShaders.xml": 2236,
      "esri/views/vectorTiles/renderers/CircleRenderer": 2237,
      "esri/views/vectorTiles/renderers/FillRenderer": 2238,
      "esri/views/vectorTiles/renderers/LineRenderer": 2239,
      "esri/views/vectorTiles/renderers/SymbolRenderer": 2240,
      "esri/views/vectorTiles/renderers/IconRenderer": 2241,
      "esri/views/vectorTiles/renderers/SDFRenderer": 2242,
      "esri/views/vectorTiles/renderers/TileInfoRenderer": 2243
    });
  })();
