(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    2015: function(e, t, i) {
      var r, s;
      (r = [i.dj.c(e.i), t, i(34), i(2016), i(55)]),
        void 0 ===
          (s = function(e, t, i, r, s) {
            return (function() {
              function e(e) {
                (this._apiPromises = new Map()),
                  (this._processingItems = new Map()),
                  (this._isPaused = !1),
                  (this._scheduledNextHandle = null),
                  (this.concurrency = 1),
                  (this.ordered = !1),
                  e.concurrency && (this.concurrency = e.concurrency),
                  (this.ordered = !!e.ordered),
                  (this._queue = new r(
                    e.peeker ? { peeker: e.peeker } : void 0
                  )),
                  (this.process = e.process);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._processingItems.size + this._queue.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  this._queue.clear();
                  var e = [];
                  this._processingItems.forEach(function(t) {
                    return e.push(t.resultPromise);
                  }),
                    this._processingItems.clear(),
                    e.forEach(function(e) {
                      return e.cancel();
                    }),
                    (e.length = 0),
                    this._apiPromises.forEach(function(t) {
                      return e.push(t);
                    }),
                    this._apiPromises.clear(),
                    e.forEach(function(e) {
                      return e.cancel();
                    }),
                    this._cancelNext();
                }),
                (e.prototype.find = function(e, t) {
                  var i = this,
                    r = void 0;
                  return (
                    this._apiPromises.forEach(function(s, n) {
                      e.call(t, n) && (r = i._apiPromises.get(n).promise);
                    }),
                    r
                  );
                }),
                (e.prototype.get = function(e) {
                  var t = this._apiPromises.get(e);
                  return (t && t.promise) || void 0;
                }),
                (e.prototype.isOngoing = function(e) {
                  return this._processingItems.has(e);
                }),
                (e.prototype.has = function(e) {
                  return this._apiPromises.has(e);
                }),
                (e.prototype.pause = function() {
                  this._isPaused || ((this._isPaused = !0), this._cancelNext());
                }),
                (e.prototype.push = function(e) {
                  var t = this;
                  if (this._apiPromises.has(e))
                    return this._apiPromises.get(e).promise;
                  var r = new i(function(i) {
                    var r = t._processingItems.get(e);
                    r
                      ? r.resultPromise.cancel(i)
                      : (t._remove(e), t._scheduleNext());
                  });
                  return this._add(e, r), this._scheduleNext(), r.promise;
                }),
                (e.prototype.reset = function() {
                  var e = [];
                  this._processingItems.forEach(function(t) {
                    return e.push(t);
                  }),
                    this._processingItems.clear();
                  for (var t = 0, i = e; t < i.length; t++) {
                    var r = i[t];
                    r.resultPromise.isFulfilled()
                      ? this._processReset(r)
                      : ((r.isReset = !0), r.resultPromise.cancel());
                  }
                }),
                (e.prototype.resume = function() {
                  this._isPaused &&
                    ((this._isPaused = !1), this._scheduleNext());
                }),
                (e.prototype._scheduleNext = function() {
                  var e = this;
                  this._isPaused ||
                    this._scheduledNextHandle ||
                    (this._scheduledNextHandle = s.schedule(function() {
                      (e._scheduledNextHandle = null), e._next();
                    }));
                }),
                (e.prototype._next = function() {
                  for (
                    ;
                    this._queue.length > 0 &&
                    this._processingItems.size < this.concurrency;

                  )
                    this._process(this._queue.pop());
                }),
                (e.prototype._processResult = function(e, t) {
                  this._remove(e.item), this._scheduleNext(), e.dfd.resolve(t);
                }),
                (e.prototype._processError = function(e, t) {
                  e.isReset
                    ? this._processReset(e)
                    : (this._remove(e.item),
                      this._scheduleNext(),
                      e.dfd.reject(t));
                }),
                (e.prototype._processReset = function(e) {
                  this._remove(e.item),
                    this._add(e.item, e.dfd),
                    this._scheduleNext();
                }),
                (e.prototype._processOrdered = function(e, t) {
                  var i = this,
                    r = !1;
                  if (e.isReset) this._processReset(e);
                  else {
                    (e.result = t),
                      this._itemsToProcess || (this._itemsToProcess = []),
                      this._processingItems.forEach(function(e) {
                        r || (e.result ? i._itemsToProcess.push(e) : (r = !0));
                      });
                    for (
                      var s = 0, n = this._itemsToProcess;
                      s < n.length;
                      s++
                    ) {
                      var o = n[s];
                      !1 === o.result.ok
                        ? this._processError(o, o.result.error)
                        : this._processResult(o, o.result.value);
                    }
                    this._itemsToProcess.length = 0;
                  }
                }),
                (e.prototype._process = function(e) {
                  var t = this;
                  if (null != e) {
                    var i = this._apiPromises.get(e),
                      r = this.process(e);
                    if (
                      (function(e) {
                        return e && "function" == typeof e.then;
                      })(r)
                    ) {
                      var s = {
                        item: e,
                        resultPromise: r,
                        result: null,
                        dfd: i,
                        isReset: !1
                      };
                      this._processingItems.set(e, s),
                        this.ordered
                          ? r.then(
                              function(e) {
                                return t._processOrdered(s, {
                                  ok: !0,
                                  value: e
                                });
                              },
                              function(e) {
                                return t._processOrdered(s, {
                                  ok: !1,
                                  error: e
                                });
                              }
                            )
                          : r.then(
                              function(e) {
                                return t._processResult(s, e);
                              },
                              function(e) {
                                return t._processError(s, e);
                              }
                            );
                    } else i.resolve(r), this._remove(e);
                  }
                }),
                (e.prototype._add = function(e, t) {
                  this._apiPromises.set(e, t), this._queue.push(e);
                }),
                (e.prototype._remove = function(e) {
                  this._queue.remove(e),
                    this._apiPromises.delete(e),
                    this._processingItems.delete(e);
                }),
                (e.prototype._cancelNext = function() {
                  this._scheduledNextHandle &&
                    (this._scheduledNextHandle.remove(),
                    (this._scheduledNextHandle = null));
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = s);
    },
    2016: function(e, t, i) {
      var r, s;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (s = function(e, t) {
            return (function() {
              function e(e) {
                (this._items = []),
                  (this._itemSet = new Set()),
                  (this._peeker = function(e) {
                    return e[0];
                  }),
                  (this._length = 0),
                  e && e.peeker && (this._peeker = e.peeker);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  this._itemSet.clear(),
                    (this._items.length = 0),
                    (this._length = 0);
                }),
                (e.prototype.peek = function() {
                  if (0 !== this._length) return this._peeker(this._items);
                }),
                (e.prototype.push = function(e) {
                  this.contains(e) || this._add(e);
                }),
                (e.prototype.contains = function(e) {
                  return this._length > 0 && this._itemSet.has(e);
                }),
                (e.prototype.pop = function() {
                  if (0 !== this._length) {
                    var e = this.peek();
                    return this._remove(e), e;
                  }
                }),
                (e.prototype.remove = function(e) {
                  this.contains(e) && this._remove(e);
                }),
                (e.prototype._add = function(e) {
                  this._items.push(e), this._itemSet.add(e), this._length++;
                }),
                (e.prototype._remove = function(e) {
                  this._itemSet.delete(e),
                    this._items.splice(this._items.indexOf(e), 1),
                    this._length--;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = s);
    },
    2060: function(e, t, i) {
      var r, s;
      (r = [i.dj.c(e.i), t, i(84), i(85)]),
        void 0 ===
          (s = function(e, t, i, r) {
            return (function() {
              function e(e) {
                (this.sourceSpatialReference = e.sourceSpatialReference),
                  (this.destSpatialReference = e.destSpatialReference);
              }
              return (
                (e.prototype.adjust = function(e) {
                  var t = this._getVerticalUnitScale();
                  1 !== t && this._scaleVerticalUnits(e, t);
                }),
                (e.prototype._getVerticalUnitScale = function() {
                  return this.sourceSpatialReference &&
                    !this.sourceSpatialReference.equals(
                      this.destSpatialReference
                    )
                    ? i.getMetersPerVerticalUnitForSR(
                        this.sourceSpatialReference
                      ) /
                        i.getMetersPerVerticalUnitForSR(
                          this.destSpatialReference
                        )
                    : 1;
                }),
                (e.prototype._vertexListsScaleZ = function(e, t) {
                  for (var i = 0; i < e.length; ++i)
                    for (var r = e[i], s = 0; s < r.length; ++s) {
                      r[s][2] *= t;
                    }
                }),
                (e.prototype._scaleVerticalUnits = function(e, t) {
                  for (var i = 0; i < e.length; ++i) {
                    var s = e[i].geometry;
                    s &&
                      r.hasZ(s) &&
                      (this._geometryIsPoint(s)
                        ? null !== s.z && (s.z *= t)
                        : this._geometryIsPolyline(s)
                          ? this._vertexListsScaleZ(s.paths, t)
                          : this._geometryIsPolygon(s) &&
                            this._vertexListsScaleZ(s.rings, t));
                  }
                }),
                (e.prototype._geometryIsPoint = function(e) {
                  return "point" === e.type;
                }),
                (e.prototype._geometryIsPolygon = function(e) {
                  return "polygon" === e.type;
                }),
                (e.prototype._geometryIsPolyline = function(e) {
                  return "polyline" === e.type;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = s);
    },
    2300: function(e, t, i) {
      var r, s;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(13),
        i(3),
        i(24),
        i(10),
        i(17),
        i(4),
        i(11),
        i(180),
        i(9),
        i(26),
        i(1),
        i(139),
        i(312),
        i(2060),
        i(2301),
        i(2302),
        i(92)
      ]),
        void 0 ===
          (s = function(
            e,
            t,
            i,
            r,
            s,
            n,
            o,
            a,
            u,
            l,
            c,
            p,
            h,
            d,
            f,
            y,
            g,
            m,
            v,
            F,
            T
          ) {
            var _ = c.getLogger(
                "esri.layers.graphics.controllers.FeatureTileController3D"
              ),
              b = (function(e) {
                function t(t) {
                  var i = e.call(this) || this;
                  return (
                    (i.type = "feature-tile-3d"),
                    (i.serviceDataExtent = null),
                    (i.serviceDataExtentIsAccurate = !1),
                    (i.serviceDataCount = n.constants.NO_SERVICE_DATA_COUNT),
                    (i.suspended = !1),
                    (i.tileFetcher = null),
                    (i.handles = new u()),
                    (i.fetchDataInfoPromise = null),
                    i
                  );
                }
                var n;
                return (
                  i(t, e),
                  (n = t),
                  Object.defineProperty(t.prototype, "extent", {
                    set: function(e) {
                      if (
                        !e ||
                        e.spatialReference.equals(
                          this.layerView.view.spatialReference
                        )
                      ) {
                        var t = this._get("extent");
                        if (t !== e && !(t && e && t.equals(e))) {
                          var i = e ? e.clone() : null;
                          this._set("extent", i);
                        }
                      } else
                        _.error(
                          "#extent=",
                          "extent needs to be in the same spatial reference as the view"
                        );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "updating", {
                    get: function() {
                      return !!(
                        (this.tileFetcher && this.tileFetcher.updating) ||
                        this.fetchDataInfoPromise
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "displayLimitExceeded", {
                    get: function() {
                      return !(
                        !this.tileFetcher ||
                        !this.tileFetcher.displayLimitExceeded
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "filteredDataExtent", {
                    get: function() {
                      var e = this.serviceDataExtentIsAccurate
                        ? this.serviceDataExtent
                        : null;
                      return this.extent
                        ? e
                          ? e.clone().intersection(this.extent)
                          : this.extent
                        : e;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "displayFeatureLimit", {
                    set: function(e) {
                      this._set("displayFeatureLimit", e),
                        "snapshot" === this.mode &&
                          this._set(
                            "displayFeatureLimit",
                            s({}, e, { perTile: e.max })
                          ),
                        this.tileFetcher &&
                          (this.tileFetcher.displayFeatureLimit = e);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "mode", {
                    get: function() {
                      return this.serviceDataCount !==
                        n.constants.NO_SERVICE_DATA_COUNT &&
                        this.displayFeatureLimit &&
                        this.displayFeatureLimit.min &&
                        this.serviceDataCount <= this.displayFeatureLimit.min
                        ? "snapshot"
                        : "tiles";
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "tileDescriptors", {
                    get: function() {
                      return "snapshot" === this.mode
                        ? new o([{ id: "dummy-tile-full-extent" }])
                        : this.layerView.view.featureTiles.tiles;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(
                    t.prototype,
                    "suspendResumeExtentMode",
                    {
                      get: function() {
                        return "snapshot" === this.mode ? "computed" : "data";
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(t.prototype, "test", {
                    get: function() {
                      return {
                        fetchDataInfoPromise: this.fetchDataInfoPromise
                      };
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.initialize = function() {
                    var e = this,
                      t = h
                        .resolve()
                        .then(function() {
                          return e.verifyCapabilities();
                        })
                        .then(function() {
                          return e.fetchServiceDataInfo();
                        })
                        .then(function() {
                          return e.initializeTileFetcher();
                        });
                    this.addResolvingPromise(t);
                  }),
                  (t.prototype.verifyCapabilities = function() {
                    var e = this.layerView.layer;
                    if (!e.get("capabilities.operations.supportsQuery"))
                      throw new a(
                        "graphicscontroller:query-capability-required",
                        "Service requires query capabilities to be used as a feature layer",
                        { layer: e }
                      );
                  }),
                  (t.prototype.destroy = function() {
                    this.cancelFetchServiceDataInfo(),
                      this.tileFetcher &&
                        (this.tileFetcher.destroy(), (this.tileFetcher = null)),
                      this.handles &&
                        (this.handles.destroy(), (this.handles = null));
                  }),
                  (t.prototype.suspend = function() {
                    this.suspended ||
                      ((this.suspended = !0),
                      this.tileFetcher && this.tileFetcher.suspend());
                  }),
                  (t.prototype.resume = function() {
                    this.suspended &&
                      ((this.suspended = !1),
                      this.tileFetcher && this.tileFetcher.resume());
                  }),
                  (t.prototype.refresh = function() {
                    var e = this,
                      t = function() {
                        e.tileFetcher && e.tileFetcher.filtersChanged();
                      };
                    this.fetchServiceDataInfo().then(t, t);
                  }),
                  (t.prototype.initializeTileFetcher = function() {
                    var e = this,
                      t = this.layerView.view,
                      i = this.layerView.layer;
                    this.handles.add(
                      d.whenOnce(t.featureTiles, "tilingScheme", function() {
                        e.handles.add(t.featureTiles.addClient()),
                          (e.tileFetcher = new v.FeatureTileFetcher3D({
                            layer: i,
                            filterExtent: e.filteredDataExtent,
                            tilingScheme: t.featureTiles.tilingScheme,
                            tileDescriptors: e.tileDescriptors,
                            features: e.graphics,
                            displayFeatureLimit: e.displayFeatureLimit,
                            verticalScale: new m({
                              sourceSpatialReference: i.spatialReference,
                              destSpatialReference: t.spatialReference
                            })
                          })),
                          e.suspended
                            ? e.tileFetcher.suspend()
                            : e.tileFetcher.resume(),
                          e.handles.add(
                            [
                              i.watch("definitionExpression", function() {
                                return e.definitionExpressionChanged();
                              }),
                              i.watch("outFields", function(t, i) {
                                return e.attributesChanged(t, i);
                              }),
                              i.on("apply-edits", function(t) {
                                return e.tileFetcher.applyEdits(t);
                              }),
                              e.watch(
                                "filteredDataExtent",
                                function(t) {
                                  return (e.tileFetcher.filterExtent = t);
                                },
                                !0
                              ),
                              e.watch(
                                "tileDescriptors",
                                function(t) {
                                  return (e.tileFetcher.tileDescriptors = t);
                                },
                                !0
                              )
                            ],
                            "layer"
                          ),
                          e.handles.add(
                            d.init(T, "FEATURE_TILE_FETCH_SHOW_TILES", function(
                              i
                            ) {
                              i && e.tileFetcher && !e.tileFetcher.debugger
                                ? ((e.tileFetcher.debugger = new F.FeatureTileFetcher3DDebugger(
                                    e.tileFetcher,
                                    t.featureTiles.tilingScheme.toTileInfo(),
                                    t
                                  )),
                                  e.tileFetcher.debugger.update())
                                : !i &&
                                  e.tileFetcher &&
                                  e.tileFetcher.debugger &&
                                  (e.tileFetcher.debugger.destroy(),
                                  (e.tileFetcher.debugger = null));
                            })
                          );
                      })
                    );
                  }),
                  (t.prototype.definitionExpressionChanged = function() {
                    this.refresh();
                  }),
                  (t.prototype.attributesChanged = function(e, t) {
                    if (!e || -1 === e.indexOf("*"))
                      if (e && t)
                        for (
                          var i = new Set(e), r = 0, s = t;
                          r < s.length;
                          r++
                        ) {
                          var n = s[r];
                          if (!i.has(n)) return void this.refresh();
                        }
                      else this.refresh();
                  }),
                  (t.prototype.createDataInfoQuery = function() {
                    var e = this.layerView.layer,
                      t = e.createQuery();
                    return (
                      (t.outSpatialReference = this.layerView.view.spatialReference),
                      e.capabilities.query.supportsResultType &&
                        (t.resultType = "tile"),
                      t
                    );
                  }),
                  (t.prototype.fullExtentIsAccurate = function() {
                    var e = this.layerView.layer;
                    if (e.definitionExpression) return !1;
                    switch (e.type) {
                      case "feature":
                        return y.isHostedAgolService(e.url);
                      case "csv":
                        return !0;
                    }
                  }),
                  (t.prototype.fetchServiceDataExtent = function() {
                    var e = this,
                      t = this.layerView,
                      i = t.layer,
                      r = i.capabilities.query.supportsExtent,
                      s = l.clone(t.fullExtentInLocalViewSpatialReference),
                      o = i.fullExtent,
                      a = this.fullExtentIsAccurate(),
                      u = this.serviceDataCount,
                      c = null;
                    if (
                      r &&
                      u <= n.constants.MAX_FEATURE_COUNT_FOR_EXTENT &&
                      (!s || !a)
                    ) {
                      var p = this.createDataInfoQuery();
                      c = i
                        .queryExtent(p, {
                          timeout: n.constants.QUERY_EXTENT_TIMEOUT
                        })
                        .then(function(t) {
                          e._set("serviceDataExtentIsAccurate", !0),
                            e._set("serviceDataExtent", t.extent);
                        });
                    } else
                      s
                        ? (this._set("serviceDataExtentIsAccurate", a),
                          this._set("serviceDataExtent", s))
                        : o
                          ? (c = g
                              .projectGeometry(
                                o,
                                t.view.spatialReference,
                                i.portalItem
                              )
                              .then(function(t) {
                                e._set("serviceDataExtentIsAccurate", a),
                                  e._set("serviceDataExtent", t);
                              }))
                          : (this._set("serviceDataExtentIsAccurate", !1),
                            this._set("serviceDataExtent", null));
                    return (
                      c &&
                        (c = c.catch(function(t) {
                          (t && "cancel" === t.dojoType) ||
                            (e._set("serviceDataExtentIsAccurate", !!s && a),
                            e._set("serviceDataExtent", s));
                        })),
                      c
                    );
                  }),
                  (t.prototype.fetchServiceDataInfo = function() {
                    var e = this;
                    this.cancelFetchServiceDataInfo();
                    var t = this.layerView.layer
                        .queryFeatureCount(this.createDataInfoQuery(), {
                          timeout: n.constants.QUERY_COUNT_TIMEOUT
                        })
                        .then(function(t) {
                          return e._set("serviceDataCount", t), t;
                        })
                        .catch(function(t) {
                          if (t && "cancel" === t.dojoType) throw t;
                          var i = n.constants.NO_SERVICE_DATA_COUNT;
                          return e._set("serviceDataCount", i), i;
                        }),
                      i = t
                        .then(function() {
                          return e.fetchServiceDataExtent();
                        })
                        .catch(function(e) {
                          console.error(e);
                        })
                        .then(function() {
                          i === e.fetchDataInfoPromise &&
                            (e.fetchDataInfoPromise = null);
                        });
                    return (
                      i.isFulfilled() || (this.fetchDataInfoPromise = i),
                      t.catch(function() {})
                    );
                  }),
                  (t.prototype.cancelFetchServiceDataInfo = function() {
                    var e = this.fetchDataInfoPromise;
                    e && ((this.fetchDataInfoPromise = null), e.cancel());
                  }),
                  r(
                    [f.property({ readOnly: !0 })],
                    t.prototype,
                    "type",
                    void 0
                  ),
                  r(
                    [f.property({ constructOnly: !0 })],
                    t.prototype,
                    "graphics",
                    void 0
                  ),
                  r(
                    [f.property({ constructOnly: !0 })],
                    t.prototype,
                    "layerView",
                    void 0
                  ),
                  r([f.property()], t.prototype, "extent", null),
                  r(
                    [
                      f.property({
                        dependsOn: [
                          "tileFetcher.updating",
                          "fetchDataInfoPromise"
                        ]
                      })
                    ],
                    t.prototype,
                    "updating",
                    null
                  ),
                  r(
                    [
                      f.property({
                        dependsOn: ["tileFetcher.displayLimitExceeded"]
                      })
                    ],
                    t.prototype,
                    "displayLimitExceeded",
                    null
                  ),
                  r(
                    [f.property({ readOnly: !0 })],
                    t.prototype,
                    "serviceDataExtent",
                    void 0
                  ),
                  r(
                    [f.property({ readOnly: !0 })],
                    t.prototype,
                    "serviceDataExtentIsAccurate",
                    void 0
                  ),
                  r(
                    [f.property({ readOnly: !0 })],
                    t.prototype,
                    "serviceDataCount",
                    void 0
                  ),
                  r(
                    [
                      f.property({
                        readOnly: !0,
                        dependsOn: [
                          "extent",
                          "serviceDataExtent",
                          "serviceDataExtentIsAccurate"
                        ]
                      })
                    ],
                    t.prototype,
                    "filteredDataExtent",
                    null
                  ),
                  r([f.property()], t.prototype, "displayFeatureLimit", null),
                  r(
                    [
                      f.property({
                        readOnly: !0,
                        dependsOn: ["serviceDataCount", "displayFeatureLimit"]
                      })
                    ],
                    t.prototype,
                    "mode",
                    null
                  ),
                  r(
                    [f.property({ readOnly: !0, dependsOn: ["mode"] })],
                    t.prototype,
                    "tileDescriptors",
                    null
                  ),
                  r(
                    [f.property({ readOnly: !0, dependsOn: ["mode"] })],
                    t.prototype,
                    "suspendResumeExtentMode",
                    null
                  ),
                  r([f.property()], t.prototype, "tileFetcher", void 0),
                  r(
                    [f.property()],
                    t.prototype,
                    "fetchDataInfoPromise",
                    void 0
                  ),
                  (n = r(
                    [
                      f.subclass(
                        "esri.layers.graphics.controllers.FeatureTileController3D"
                      )
                    ],
                    t
                  ))
                );
              })(f.declared(n, p));
            return (
              (function(e) {
                !(function(t) {
                  (t.NO_SERVICE_DATA_COUNT = 1 / 0),
                    (t.reset = function() {
                      (e.constants.MAX_FEATURE_COUNT_FOR_EXTENT = 1e4),
                        (e.constants.QUERY_COUNT_TIMEOUT = 6e3),
                        (e.constants.QUERY_EXTENT_TIMEOUT = 1e4);
                    });
                })(e.constants || (e.constants = {}));
              })(b || (b = {})),
              b.constants.reset(),
              b
            );
          }.apply(null, r)) || (e.exports = s);
    },
    2301: function(e, t, i) {
      var r, s;
      (r = [
        i.dj.c(e.i),
        t,
        i(5),
        i(0),
        i(13),
        i(110),
        i(109),
        i(3),
        i(817),
        i(17),
        i(11),
        i(9),
        i(2015),
        i(265),
        i(26),
        i(1),
        i(35),
        i(85),
        i(778)
      ]),
        void 0 ===
          (s = function(
            e,
            t,
            i,
            r,
            s,
            n,
            o,
            a,
            u,
            l,
            c,
            p,
            h,
            d,
            f,
            y,
            g,
            m,
            v
          ) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var F = c.getLogger(
                "esri.views.3d.layers.support.FeatureTileFetcher3D"
              ),
              T = (function(e) {
                function t(t) {
                  var i = e.call(this, t) || this;
                  return (
                    (i.displayLimitExceeded = !1),
                    (i.displayLimitExceededThrottle = 1e3),
                    (i.handles = new l()),
                    (i.idToFeatureTile = new Map()),
                    (i.displayingFeatureReferences = new Map()),
                    (i.suspended = !0),
                    (i.pendingEdits = null),
                    i
                  );
                }
                return (
                  i(t, e),
                  Object.defineProperty(t.prototype, "displayFeatureLimit", {
                    set: function(e) {
                      var t = this._get("displayFeatureLimit");
                      if (
                        !(
                          e === t ||
                          (e &&
                            t &&
                            e.min === t.min &&
                            e.max === t.max &&
                            e.perTile === t.perTile)
                        )
                      ) {
                        var i = t ? t.perTile : 1 / 0,
                          r = e ? e.perTile : 1 / 0;
                        this._set("displayFeatureLimit", s({}, e)),
                          this.perTileLimitUpdated(i, r),
                          this.update();
                      }
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "updating", {
                    get: function() {
                      return this.fetchQueue.length > 0;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "filterExtent", {
                    set: function(e) {
                      if (
                        e &&
                        this.tilingScheme &&
                        !e.spatialReference.equals(
                          this.tilingScheme.spatialReference
                        )
                      )
                        F.error(
                          "#filterExtent=",
                          "extent needs to be in the same spatial reference as the tiling scheme"
                        );
                      else {
                        var t = this._get("filterExtent");
                        if (t !== e && !(t && e && t.equals(e))) {
                          var i = e ? e.clone() : null;
                          this._set("filterExtent", i), this.reclip(i, t);
                        }
                      }
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.initialize = function() {
                    var e = this;
                    (this.updateDisplayLimitExceededThrottled = d.throttle(
                      this.updateDisplayLimitExceeded,
                      this.displayLimitExceededThrottle,
                      this
                    )),
                      (this.capabilities = this.calculateCapabilities()),
                      (this.fetchQueue = this.createFetchQueue()),
                      this.handles.add(
                        f.on(
                          this,
                          "tileDescriptors",
                          "change",
                          function() {
                            return e.update();
                          },
                          function() {
                            return e.update();
                          }
                        )
                      ),
                      (this.objectIdField = this.layer.objectIdField),
                      this.update();
                  }),
                  (t.prototype.destroy = function() {
                    var e = this;
                    this.handles &&
                      (this.handles.destroy(), (this.handles = null)),
                      this.updateDisplayLimitExceededThrottled.remove(),
                      this.forEachFeatureTile(function(t) {
                        return e.cancelFetchTile(t);
                      }),
                      this.fetchQueue.clear(),
                      this.pendingEdits &&
                        (this.pendingEdits.edits.cancel(P),
                        (this.pendingEdits = null));
                  }),
                  Object.defineProperty(t.prototype, "paused", {
                    get: function() {
                      return this.suspended || !!this.pendingEdits;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.filtersChanged = function() {
                    var e = this;
                    this.fetchQueue.clear(),
                      this.forEachFeatureTile(function(t) {
                        e.resetFetchTile(t), e.queueFetchTile(t);
                      }),
                      this.update();
                  }),
                  (t.prototype.suspend = function() {
                    this.suspended || ((this.suspended = !0), this.pause());
                  }),
                  (t.prototype.resume = function() {
                    this.suspended && ((this.suspended = !1), this.unpause());
                  }),
                  (t.prototype.pause = function() {
                    this.paused &&
                      (this.fetchQueue.pause(), this.fetchQueue.reset());
                  }),
                  (t.prototype.unpause = function() {
                    this.paused || (this.update(), this.fetchQueue.resume());
                  }),
                  (t.prototype.getFeatureTileById = function(e) {
                    return this.idToFeatureTile.get(e) || null;
                  }),
                  (t.prototype.forEachFeatureTile = function(e) {
                    this.idToFeatureTile.forEach(e);
                  }),
                  (t.prototype.applyEdits = function(e) {
                    var t = this;
                    this.pendingEdits ||
                      ((this.pendingEdits = { edits: p.resolve(), count: 0 }),
                      this.pause()),
                      this.pendingEdits.count++,
                      (this.pendingEdits.edits = this.pendingEdits.edits.then(
                        function() {
                          return e.result
                            .catch(function(e) {
                              if (e === P) throw e;
                              return null;
                            })
                            .then(function(e) {
                              if (e)
                                return (
                                  t.applyEditsDeleteFeatures(e.deletedFeatures),
                                  t.applyEditsAddUpdateFeatures(
                                    e.addedFeatures,
                                    e.updatedFeatures
                                  )
                                );
                            })
                            .then(function() {
                              0 == --t.pendingEdits.count &&
                                ((t.pendingEdits = null), t.unpause());
                            });
                        }
                      ));
                  }),
                  (t.prototype.applyEditsDeleteFeatures = function(e) {
                    var t = this;
                    if (0 !== e.length) {
                      var i = new Set();
                      e.forEach(function(e) {
                        return i.add(e.objectId);
                      }),
                        this.forEachFeatureTile(function(e) {
                          if (e.features) {
                            var r = e.features.filter(function(e) {
                              return !i.has(t.getFeatureId(e));
                            });
                            r.length !== e.features.length && (e.features = r);
                          }
                        });
                    }
                  }),
                  (t.prototype.applyEditsAddUpdateFeatures = function(e, t) {
                    var i = this,
                      r = [],
                      s = new Set();
                    if (
                      (e.forEach(function(e) {
                        return r.push(e.objectId);
                      }),
                      t.forEach(function(e) {
                        r.push(e.objectId), s.add(e.objectId);
                      }),
                      0 !== r.length)
                    ) {
                      var n = [];
                      return (
                        this.forEachFeatureTile(function(e) {
                          var t = u.cancellable(function(t) {
                            return i.applyEditsAddUpdateTile(e, r, s, t);
                          });
                          t && n.push(t);
                        }),
                        p.all(n)
                      );
                    }
                  }),
                  (t.prototype.applyEditsAddUpdateTile = function(e, t, i, r) {
                    return n(this, void 0, void 0, function() {
                      var s,
                        n,
                        a,
                        u,
                        l,
                        c,
                        p,
                        h = this;
                      return o(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return e.features
                              ? (((s = this.createQuery(
                                  e
                                )).resultType = void 0),
                                (s.objectIds = t),
                                [4, r(this.queryFeatures(s))])
                              : [2];
                          case 1:
                            if (
                              ((n = o.sent()),
                              (a = null),
                              i.size > 0 &&
                                ((u = e.features.filter(function(e) {
                                  return !i.has(h.getFeatureId(e));
                                })).length !== e.features.length &&
                                  (a = u)),
                              n.features.length > 0)
                            )
                              for (
                                a || (a = e.features.slice()),
                                  this.verticalScale.adjust(n.features),
                                  l = 0,
                                  c = n.features;
                                l < c.length;
                                l++
                              )
                                (p = c[l]), a.push(p);
                            return a && (e.features = a), [2];
                        }
                      });
                    });
                  }),
                  (t.prototype.queryFeatures = function(e) {
                    return this.layer.queryFeaturesJSON
                      ? this.layer.queryFeaturesJSON(e).then(function(e) {
                          return {
                            features: m.fromFeatureSetJSON(e),
                            exceededTransferLimit: !!e.exceededTransferLimit
                          };
                        })
                      : this.layer.queryFeatures(e).then(function(e) {
                          return {
                            features: e.features,
                            exceededTransferLimit: !!e.exceededTransferLimit
                          };
                        });
                  }),
                  (t.prototype.calculateCapabilities = function() {
                    var e = this.layer,
                      t = !!(
                        e.capabilities &&
                        e.capabilities.query &&
                        e.capabilities.query.supportsPagination
                      ),
                      i = !!(
                        e.capabilities &&
                        e.capabilities.query &&
                        e.capabilities.query.supportsResultType
                      ),
                      r = !!(
                        e.capabilities &&
                        e.capabilities.query &&
                        e.capabilities.query.supportsQuantization
                      );
                    return {
                      supportsMultipleResolutions: this.calculateSupportsMultipleResolutions(),
                      supportsPagination: t,
                      supportsResultType: i,
                      supportsQuantization: r
                    };
                  }),
                  (t.prototype.calculateSupportsMultipleResolutions = function() {
                    var e = this.layer,
                      t = e.geometryType;
                    return (
                      "polyline" === t ||
                      ("polygon" === t &&
                        e.capabilities &&
                        e.capabilities.query &&
                        e.capabilities.query.supportsQuantization)
                    );
                  }),
                  (t.prototype.createFetchQueue = function() {
                    var e = this;
                    return new h({
                      concurrency: 6,
                      ordered: !0,
                      peeker: function(t) {
                        return e.highestPriorityTile(t);
                      },
                      process: function(t) {
                        return e.fetchTile(t);
                      }
                    });
                  }),
                  (t.prototype.highestPriorityTile = function(e) {
                    return e.reduce(function(e, t) {
                      return e &&
                        e.descriptor.loadPriority <= t.descriptor.loadPriority
                        ? e
                        : t;
                    }, null);
                  }),
                  (t.prototype.update = function() {
                    if (!this.suspended && this.constructed) {
                      var e = this.getListOfTiles();
                      this.markTilesNotAlive(e), this.addTiles(e);
                      var t = this.sortTiles(e);
                      this.removeTiles(t),
                        this.displayTiles(t),
                        this.queueFetchTiles(t),
                        this.updated();
                    }
                  }),
                  (t.prototype.markTilesNotAlive = function(e) {
                    for (var t = 0, i = e; t < i.length; t++) i[t].alive = 0;
                  }),
                  (t.prototype.addTiles = function(e) {
                    var t = this;
                    this.tileDescriptors.forEach(function(i) {
                      var r = t.getFeatureTileById(i.id);
                      r ? (r.alive = 1) : e.push(t.addTile(i));
                    });
                  }),
                  (t.prototype.removeTiles = function(e) {
                    for (var t = 0, i = e; t < i.length; t++) {
                      0 === (n = i[t]).alive ||
                        n.intersects(this.filterExtent) ||
                        this.clearTile(n);
                    }
                    for (var r = !1, s = e.length - 1; s >= 0; s--) {
                      var n;
                      (n = e[s]).displayingFeatures &&
                      n.displayingFeatures.length > 0 &&
                      this.displayFeatureLimit &&
                      this.displayingFeatureReferences.size <=
                        this.displayFeatureLimit.min
                        ? 0 === n.alive && (n.alive = 2)
                        : 0 === n.alive &&
                          (this.removeTile(n),
                          s !== e.length - 1 && (r = !0),
                          (e[s] = e[e.length - 1]),
                          e.pop());
                    }
                    r && this.sortTiles(e);
                  }),
                  (t.prototype.sortTiles = function(e) {
                    return (
                      e.sort(function(e, t) {
                        return (
                          e.descriptor.loadPriority - t.descriptor.loadPriority
                        );
                      }),
                      e
                    );
                  }),
                  (t.prototype.displayTiles = function(e) {
                    for (var t = 0, i = e.length - 1, r = null; t <= i; )
                      if (!r && this.isDisplayingFeaturesAtMaximumLimit()) {
                        var s = e[i--],
                          n = this.featureCountDifferenceWhenHidingTile(s);
                        this.displayFeatureLimit &&
                        this.displayingFeatureReferences.size - n >=
                          this.displayFeatureLimit.max
                          ? this.hideTile(s)
                          : (r = s);
                      } else {
                        s = e[t++];
                        (n = this.featureCountDifferenceWhenShowingTile(s)) >
                          0 &&
                          r &&
                          (this.hideTile(r), (r = null)),
                          this.showTile(s);
                      }
                    r && this.showTile(r);
                  }),
                  (t.prototype.queueFetchTiles = function(e) {
                    var t = e.length - 1;
                    if (this.isDisplayingFeaturesAtMaximumLimit())
                      for (var i = e.length - 1; i >= 0; i--) {
                        var r = e[i];
                        if (
                          r.displayingFeatures &&
                          r.displayingFeatures.length > 0
                        ) {
                          t = i;
                          break;
                        }
                      }
                    for (i = 0; i <= t; i++) this.queueFetchTile(e[i]);
                  }),
                  (t.prototype.reclip = function(e, t) {
                    var i = this;
                    if (this.constructed) {
                      var r = [];
                      this.forEachFeatureTile(function(s) {
                        s.displayingFeatures &&
                          0 !== s.displayingFeatures.length &&
                          (s.intersection(t, x),
                          s.intersection(e, D),
                          g.equals(x, D) || (r.push(s), i.hideTileFeatures(s)));
                      });
                      for (var s = 0, n = r; s < n.length; s++) {
                        var o = n[s];
                        this.showTile(o);
                      }
                      this.updated();
                    }
                  }),
                  (t.prototype.updated = function() {
                    this.notifyChange("updating"),
                      this.debugger && this.debugger.update(),
                      this.updateDisplayLimitExceededThrottled();
                  }),
                  (t.prototype.updateDisplayLimitExceeded = function() {
                    if (!this.updating) {
                      var e = !1;
                      this.forEachFeatureTile(function(t) {
                        ((t.perTileDisplayLimitExceeded && 2 !== t.alive) ||
                          (!t.displayingFeatures && !t.isFetchFetching)) &&
                          (e = !0);
                      }),
                        this._set("displayLimitExceeded", e);
                    }
                  }),
                  (t.prototype.perTileLimitUpdated = function(e, t) {
                    if (e !== t)
                      if (t < e)
                        for (
                          var i = 0, r = this.getListOfTiles();
                          i < r.length;
                          i++
                        ) {
                          (o = r[i]).features &&
                            o.features.length > t &&
                            ((o.features = o.features.slice(0, t)),
                            (o.perTileDisplayLimitExceeded = !0));
                        }
                      else
                        for (
                          var s = 0, n = this.getListOfTiles();
                          s < n.length;
                          s++
                        ) {
                          var o;
                          (o = n[s]).features &&
                            o.features.length >= e &&
                            (this.cancelFetchTile(o), this.resetFetchTile(o));
                        }
                  }),
                  (t.prototype.addTile = function(e) {
                    var t = new _(e);
                    return (
                      this.idToFeatureTile.set(t.id, t),
                      this.resetFetchTile(t),
                      this.referenceDisplayingFeaturesFromRelatedTiles(t),
                      t
                    );
                  }),
                  (t.prototype.referenceDisplayingFeaturesFromRelatedTiles = function(
                    e
                  ) {
                    var t = this;
                    this.forEachFeatureTile(function(i) {
                      if (i.displayingFeatures && t.tilesAreRelated(e, i)) {
                        e.displayingFeatures || (e.displayingFeatures = []);
                        for (
                          var r = 0, s = i.displayingFeatures;
                          r < s.length;
                          r++
                        ) {
                          var n = s[r];
                          e.displayingFeatures.push(n),
                            t.getDisplayingFeatureReference(n).ref();
                        }
                      }
                    });
                  }),
                  (t.prototype.tilesAreRelated = function(e, t) {
                    if (e === t) return !1;
                    var i = e.descriptor.lij,
                      r = t.descriptor.lij;
                    if (!i || !r) return !0;
                    var s = i[0] < r[0],
                      n = s ? i : r,
                      o = s ? r : i,
                      a = o[0] - n[0];
                    if (0 === a) return !1;
                    var u = 1 << a;
                    return (
                      Math.floor(o[1] / u) === n[1] &&
                      Math.floor(o[2] / u) === n[2]
                    );
                  }),
                  (t.prototype.removeTile = function(e) {
                    this.clearTile(e), this.idToFeatureTile.delete(e.id);
                  }),
                  (t.prototype.resetFetchTile = function(e) {
                    e.intersects(this.filterExtent)
                      ? (e.fetchStatus = 0)
                      : 0 === e.fetchStatus && (e.fetchStatus = 2);
                  }),
                  (t.prototype.cancelFetchTile = function(e) {
                    var t = e.fetchRequest;
                    t &&
                      ((e.fetchRequest = null),
                      (e.fetchStatus = 0),
                      t.cancel());
                  }),
                  (t.prototype.fetchTile = function(e) {
                    var t = this;
                    return u.cancellable(function(i) {
                      return t.fetchTileAll(e, i);
                    });
                  }),
                  (t.prototype.setPagingParameters = function(e, t, i) {
                    if (!this.capabilities.supportsPagination) return !1;
                    var r =
                      (this.capabilities.supportsResultType &&
                        this.layer.tileMaxRecordCount) ||
                      this.layer.maxRecordCount ||
                      E;
                    return (
                      (e.start = t),
                      i > 0 && this.capabilities.supportsResultType
                        ? ((e.maxRecordCountFactor = Math.ceil(i / r)),
                          (e.num = i))
                        : (e.num = Math.min(r, i)),
                      !0
                    );
                  }),
                  (t.prototype.fetchTileAll = function(e, t) {
                    return n(this, void 0, void 0, function() {
                      var i, r, s, n, a, u, l, c, p, h;
                      return o(this, function(o) {
                        switch (o.label) {
                          case 0:
                            (i = 0),
                              (r = []),
                              (s = !1),
                              (e.perTileDisplayLimitExceeded = !1),
                              (o.label = 1);
                          case 1:
                            return (
                              (n = this.createQuery(e)),
                              (a =
                                this.displayFeatureLimit &&
                                this.displayFeatureLimit.perTile),
                              (u = this.setPagingParameters(n, i, a)),
                              [4, t(this.queryFeatures(n))]
                            );
                          case 2:
                            return (
                              (l = o.sent()),
                              (c = l.features),
                              (p = l.exceededTransferLimit),
                              (s = p),
                              (r = 0 === r.length ? c : r.concat(c)),
                              !u || !p || (a > 0 && r.length >= a)
                                ? [3, 3]
                                : (e.needsDisplayUpdate
                                    ? (e.features = e.features.concat(c))
                                    : e.displayingFeatures
                                      ? (e.features = e.displayingFeatures.concat(
                                          c
                                        ))
                                      : (e.features = c),
                                  this.update(),
                                  (i += n.num),
                                  [3, 1])
                            );
                          case 3:
                            return (
                              t(null),
                              (h =
                                this.displayFeatureLimit &&
                                this.displayFeatureLimit.perTile) &&
                              r.length > h
                                ? ((e.perTileDisplayLimitExceeded = !0),
                                  (r = r.slice(0, h)))
                                : s && (e.perTileDisplayLimitExceeded = !0),
                              this.verticalScale.adjust(r),
                              [2, r]
                            );
                        }
                      });
                    });
                  }),
                  (t.prototype.createQuery = function(e) {
                    var t = this.tilingScheme.spatialReference,
                      i = e.descriptor.extent,
                      r = this.createDefaultQuery();
                    return (
                      i && (r.geometry = g.toExtent(i, t)),
                      this.setResolutionParams(r, e),
                      this.capabilities.supportsResultType &&
                        (r.resultType = "tile"),
                      r
                    );
                  }),
                  (t.prototype.createDefaultQuery = function() {
                    var e = this.tilingScheme.spatialReference,
                      t = this.layer.createQuery(),
                      i =
                        this.layer.capabilities && this.layer.capabilities.data;
                    return (
                      i && i.supportsZ && null == t.returnZ && (t.returnZ = !0),
                      (t.outSpatialReference = e),
                      t
                    );
                  }),
                  (t.prototype.setResolutionParams = function(e, t) {
                    if (this.capabilities.supportsMultipleResolutions) {
                      var i = this.layer,
                        r = i.geometryType,
                        s = t.descriptor.resolution;
                      null != s &&
                        ("polyline" === r && (e.maxAllowableOffset = s),
                        this.capabilities.supportsQuantization &&
                          (e.quantizationParameters = new v.default({
                            mode: "view",
                            originPosition: "upper-left",
                            tolerance: s,
                            extent: i.fullExtent
                          })));
                    }
                  }),
                  (t.prototype.queueFetchTile = function(e) {
                    var t = this;
                    if (e.isFetchPending) {
                      var i = !1,
                        r = this.fetchQueue
                          .push(e)
                          .then(function(t) {
                            (e.fetchRequest = null),
                              (e.fetchStatus = 2),
                              (e.features = t);
                          })
                          .catch(function(t) {
                            e.fetchRequest === r &&
                              ((e.fetchRequest = null), (e.fetchStatus = 2)),
                              t && "cancel" === t.dojoType
                                ? (i = !0)
                                : ((e.features = []),
                                  F.error(
                                    "#fetchTile()",
                                    t && t.message ? t.message : t
                                  ));
                          })
                          .then(function() {
                            i || t.update();
                          });
                      r.isFulfilled()
                        ? (e.fetchStatus = 2)
                        : ((e.fetchRequest = r), (e.fetchStatus = 1));
                    }
                  }),
                  (t.prototype.getDisplayingFeatureReference = function(e) {
                    return this.displayingFeatureReferences.get(
                      this.getFeatureId(e)
                    );
                  }),
                  (t.prototype.displayingFeatureNeedsReplacement = function(
                    e,
                    t,
                    i
                  ) {
                    return (
                      !!(
                        this.capabilities.supportsMultipleResolutions &&
                        i.descriptor.resolution > e.resolution
                      ) || !m.equals(e.feature, t)
                    );
                  }),
                  (t.prototype.showTile = function(e) {
                    if (!e.displayingFeatures || e.needsDisplayUpdate) {
                      if (!e.features) return void (e.displayingFeatures = []);
                      for (
                        var t = e.descriptor.resolution, i = 0, r = e.features;
                        i < r.length;
                        i++
                      ) {
                        var s = r[i],
                          n = this.getFeatureId(s),
                          o = this.displayingFeatureReferences.get(n);
                        if (o) {
                          if (
                            (o.ref(),
                            !this.displayingFeatureNeedsReplacement(o, s, e))
                          )
                            continue;
                          R.push(o.feature),
                            (o.feature = s),
                            (o.resolution = e.descriptor.resolution);
                        } else
                          this.displayingFeatureReferences.set(n, new b(s, t));
                        w.push(s);
                      }
                      this.hideTileFeatures(e),
                        R.length > 0 && this.features.removeMany(R),
                        w.length > 0 && this.features.addMany(w),
                        (R.length = 0),
                        (w.length = 0),
                        (e.displayingFeatures = e.features);
                    }
                  }),
                  (t.prototype.featureCountDifferenceWhenShowingTile = function(
                    e
                  ) {
                    if (!e.needsDisplayUpdate) return 0;
                    for (
                      var t = -this.featureCountDifferenceWhenHidingTile(e, !0),
                        i = 0,
                        r = e.features;
                      i < r.length;
                      i++
                    ) {
                      var s = r[i],
                        n = this.getDisplayingFeatureReference(s);
                      (!n || (n.isSingle && n.markedTile === e)) && t++;
                    }
                    return t;
                  }),
                  (t.prototype.getFeatureId = function(e) {
                    return null != e.objectId
                      ? e.objectId
                      : e.attributes[this.objectIdField];
                  }),
                  (t.prototype.featureCountDifferenceWhenHidingTile = function(
                    e,
                    t
                  ) {
                    if ((void 0 === t && (t = !1), !e.displayingFeatures))
                      return 0;
                    for (
                      var i = 0, r = 0, s = e.displayingFeatures;
                      r < s.length;
                      r++
                    ) {
                      var n = s[r],
                        o = this.getDisplayingFeatureReference(n);
                      o && o.isSingle && (t && (o.markedTile = e), i++);
                    }
                    return i;
                  }),
                  (t.prototype.hideTile = function(e) {
                    this.cancelFetchTile(e), this.hideTileFeatures(e);
                  }),
                  (t.prototype.hideTileFeatures = function(e) {
                    if (e.displayingFeatures) {
                      for (
                        var t = 0, i = e.displayingFeatures;
                        t < i.length;
                        t++
                      ) {
                        var r = i[t],
                          s = this.getFeatureId(r),
                          n = this.displayingFeatureReferences.get(s);
                        n &&
                          !n.unref() &&
                          (this.displayingFeatureReferences.delete(s),
                          S.push(n.feature));
                      }
                      S.length > 0 && this.features.removeMany(S),
                        (S.length = 0);
                    }
                    e.displayingFeatures = null;
                  }),
                  (t.prototype.clearTile = function(e) {
                    this.hideTile(e), (e.features = null);
                  }),
                  (t.prototype.isDisplayingFeaturesAtMaximumLimit = function() {
                    return (
                      this.displayFeatureLimit &&
                      this.displayingFeatureReferences.size >=
                        this.displayFeatureLimit.max
                    );
                  }),
                  (t.prototype.getListOfTiles = function() {
                    var e = new Array(this.idToFeatureTile.size),
                      t = 0;
                    return (
                      this.forEachFeatureTile(function(i) {
                        return (e[t++] = i);
                      }),
                      e
                    );
                  }),
                  r(
                    [y.property({ constructOnly: !0 })],
                    t.prototype,
                    "features",
                    void 0
                  ),
                  r([y.property()], t.prototype, "tileDescriptors", void 0),
                  r(
                    [y.property({ constructOnly: !0 })],
                    t.prototype,
                    "tilingScheme",
                    void 0
                  ),
                  r([y.property()], t.prototype, "displayFeatureLimit", null),
                  r(
                    [y.property({ constructOnly: !0 })],
                    t.prototype,
                    "layer",
                    void 0
                  ),
                  r(
                    [y.property({ readOnly: !0 })],
                    t.prototype,
                    "updating",
                    null
                  ),
                  r(
                    [y.property({ readOnly: !0 })],
                    t.prototype,
                    "displayLimitExceeded",
                    void 0
                  ),
                  r(
                    [y.property({ constructOnly: !0 })],
                    t.prototype,
                    "displayLimitExceededThrottle",
                    void 0
                  ),
                  r([y.property()], t.prototype, "filterExtent", null),
                  r(
                    [y.property({ constructOnly: !0 })],
                    t.prototype,
                    "verticalScale",
                    void 0
                  ),
                  r(
                    [
                      y.subclass(
                        "esri.views.3d.layers.support.FeatureTileFetcher3D"
                      )
                    ],
                    t
                  )
                );
              })(y.declared(a));
            t.FeatureTileFetcher3D = T;
            var _ = (function() {
              function e(e) {
                (this.descriptor = e),
                  (this.fetchRequest = null),
                  (this.fetchStatus = 0),
                  (this.features = null),
                  (this.displayingFeatures = null),
                  (this.perTileDisplayLimitExceeded = !1),
                  (this.alive = 1);
              }
              return (
                Object.defineProperty(e.prototype, "id", {
                  get: function() {
                    return this.descriptor.id;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "isFetchFetching", {
                  get: function() {
                    return 1 === this.fetchStatus;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "isFetchPending", {
                  get: function() {
                    return 0 === this.fetchStatus;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "isFetchDone", {
                  get: function() {
                    return 2 === this.fetchStatus;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "needsDisplayUpdate", {
                  get: function() {
                    return (
                      this.features && this.displayingFeatures !== this.features
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.intersects = function(e) {
                  return (
                    !e ||
                    !this.descriptor.extent ||
                    (g.fromExtent(e, x),
                    g.intersects(this.descriptor.extent, x))
                  );
                }),
                (e.prototype.intersection = function(e, t) {
                  return (
                    void 0 === t && (t = g.create()),
                    e || this.descriptor.extent
                      ? (e
                          ? (g.fromExtent(e, t),
                            this.descriptor.extent &&
                              g.intersection(t, this.descriptor.extent, t))
                          : g.set(t, this.descriptor.extent),
                        t)
                      : t
                  );
                }),
                e
              );
            })();
            t.FeatureTile = _;
            var b = (function() {
                function e(e, t) {
                  (this.feature = e),
                    (this.resolution = t),
                    (this.refCount = 1);
                }
                return (
                  Object.defineProperty(e.prototype, "isReferenced", {
                    get: function() {
                      return 0 !== this.refCount;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(e.prototype, "isSingle", {
                    get: function() {
                      return 1 === this.refCount;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.ref = function() {
                    this.refCount += 1;
                  }),
                  (e.prototype.unref = function() {
                    return (
                      !(this.refCount > 0) ||
                      ((this.refCount -= 1), this.isReferenced)
                    );
                  }),
                  e
                );
              })(),
              E = 2e3,
              x = g.create(),
              D = g.create(),
              w = [],
              R = [],
              S = [],
              P = {};
            t.default = T;
          }.apply(null, r)) || (e.exports = s);
    },
    2302: function(e, t, i) {
      var r, s;
      (r = [
        i.dj.c(e.i),
        t,
        i(43),
        i(49),
        i(160),
        i(188),
        i(162),
        i(127),
        i(272)
      ]),
        void 0 ===
          (s = function(e, t, i, r, s, n, o, a, u) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = [
                [0, 179, 255],
                [117, 62, 128],
                [0, 104, 255],
                [215, 189, 166],
                [32, 0, 193],
                [98, 162, 206],
                [102, 112, 129],
                [52, 125, 0],
                [142, 118, 246],
                [138, 83, 0],
                [92, 122, 255],
                [122, 55, 83],
                [0, 142, 255],
                [81, 40, 179],
                [0, 200, 244],
                [13, 24, 127],
                [0, 170, 147],
                [19, 58, 241],
                [22, 44, 35]
              ],
              c = (function() {
                function e(e, t, i) {
                  (this.loadingGraphics = new Map()),
                    (this.loadedGraphics = new Map()),
                    (this.pendingGraphics = new Map()),
                    (this._enabled = !0),
                    (this.tileFetcher = e),
                    (this.view = i),
                    (this.tilingScheme = new u(t)),
                    (this.loadedSymbols = l.map(function(e) {
                      return new o(
                        new s({
                          material: { color: [e[0], e[1], e[2], 0.6] },
                          outline: { color: "black", size: 1 }
                        })
                      );
                    })),
                    (this.loadingSymbols = [
                      new o(
                        new s({
                          material: { color: [200, 200, 200, 0.4] },
                          outline: { color: [30, 30, 30], size: 1 }
                        })
                      )
                    ]),
                    (this.pendingSymbols = [
                      new o(
                        new s({
                          material: { color: [100, 100, 100, 0.4] },
                          outline: { color: [30, 30, 30], size: 1 }
                        })
                      )
                    ]),
                    (this.dataExtentSymbol = new o(
                      new s({
                        material: { color: [0, 0, 0, 0] },
                        outline: { color: "green", size: 4 }
                      })
                    ));
                }
                return (
                  (e.prototype.destroy = function() {
                    this.enabled = !1;
                  }),
                  Object.defineProperty(e.prototype, "enabled", {
                    get: function() {
                      return this._enabled;
                    },
                    set: function(e) {
                      (this._enabled = e), this.update();
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.update = function() {
                    var e = this;
                    this._enabled
                      ? (this.synchronizeMaps(this.loadingGraphics, {
                          filter: function(e) {
                            return e.isFetchFetching;
                          },
                          symbols: this.loadingSymbols
                        }),
                        this.synchronizeMaps(this.loadedGraphics, {
                          filter: function(e) {
                            return !e.isFetchFetching;
                          },
                          symbols: this.loadedSymbols
                        }),
                        this.synchronizeMaps(this.pendingGraphics, {
                          filter: function(e) {
                            return !e.isFetchFetching;
                          },
                          symbols: this.pendingSymbols
                        }),
                        this.showDataExtent(this.tileFetcher.filterExtent))
                      : (this.loadingGraphics.forEach(function(t) {
                          e.view.graphics.removeMany(t);
                        }),
                        this.loadingGraphics.clear(),
                        this.loadedGraphics.forEach(function(t) {
                          e.view.graphics.removeMany(t);
                        }),
                        this.loadedGraphics.clear(),
                        this.pendingGraphics.forEach(function(t) {
                          e.view.graphics.removeMany(t);
                        }),
                        this.pendingGraphics.clear(),
                        this.dataExtentGraphic &&
                          (this.view.graphics.remove(this.dataExtentGraphic),
                          (this.dataExtentGraphic = null)));
                  }),
                  (e.prototype.showDataExtent = function(e) {
                    if (
                      (this.dataExtentGraphic &&
                        (this.view.graphics.remove(this.dataExtentGraphic),
                        (this.dataExtentGraphic = null)),
                      e)
                    ) {
                      var t = r.fromExtent(e);
                      (this.dataExtentGraphic = new i({
                        geometry: t,
                        symbol: this.dataExtentSymbol
                      })),
                        this.view.graphics.add(this.dataExtentGraphic);
                    }
                  }),
                  (e.prototype.synchronizeMaps = function(e, t) {
                    var r = this,
                      s = [];
                    e.forEach(function(e, i) {
                      var n = r.tileFetcher.getFeatureTileById(i);
                      (n && t.filter(n)) ||
                        (r.view.graphics.removeMany(e), s.push(i));
                    }),
                      s.forEach(function(t) {
                        return e.delete(t);
                      }),
                      this.tileFetcher.forEachFeatureTile(function(s) {
                        if (t.filter(s) && !e.has(s.id)) {
                          var o = s.descriptor.lij,
                            u = o[0],
                            l = o[1],
                            c = o[2];
                          r.tilingScheme.ensureMaxLod(u);
                          var p = r.tilingScheme.getExtentGeometry(u, l, c),
                            h = [
                              new i({
                                geometry: p,
                                symbol: t.symbols[u % t.symbols.length]
                              }),
                              new i({
                                geometry: p.center,
                                symbol: new n({
                                  verticalOffset: { screenLength: 40 / 0.75 },
                                  callout: {
                                    type: "line",
                                    color: "white",
                                    border: { color: "black" }
                                  },
                                  symbolLayers: [
                                    new a({
                                      text: u + "/" + l + "/" + c,
                                      halo: { color: "white", size: 1 / 0.75 },
                                      material: { color: "black" },
                                      size: 16
                                    })
                                  ]
                                })
                              })
                            ];
                          e.set(s.id, h), r.view.graphics.addMany(h);
                        }
                      });
                  }),
                  e
                );
              })();
            (t.FeatureTileFetcher3DDebugger = c), (t.default = c);
          }.apply(null, r)) || (e.exports = s);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/core/QueueProcessor": 2015,
      "esri/core/Queue": 2016,
      "esri/views/3d/layers/graphics/Graphics3DVerticalScale": 2060,
      "esri/layers/graphics/controllers/FeatureTileController3D": 2300,
      "esri/views/3d/layers/support/FeatureTileFetcher3D": 2301,
      "esri/views/3d/layers/support/FeatureTileFetcher3DDebugger": 2302
    });
  })();
