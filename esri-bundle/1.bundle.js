(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    2155: function(e, t, n) {
      var i, r;
      (i = [n.dj.c(e.i), t]),
        void 0 ===
          (r = function(e, t) {
            function n(e, t, n) {
              var r = e.safeWidth,
                o = e.width,
                a = e.values,
                l = e.noDataValue,
                s = i(e.dy * (e.y1 - n), 0, r),
                u = i(e.dx * (t - e.x0), 0, r),
                c = Math.floor(s),
                p = Math.floor(u),
                f = c * o + p,
                h = f + o,
                d = a[f],
                v = a[h],
                m = a[f + 1],
                y = a[h + 1];
              if (d !== l && v !== l && m !== l && y !== l) {
                var T = u - p,
                  x = d + (m - d) * T;
                return x + (v + (y - v) * T - x) * (s - c);
              }
            }
            function i(e, t, n) {
              return e < t ? t : e > n ? n : e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
              function e(e, t) {
                (this.tile = e), this.update(t);
              }
              return (
                (e.prototype.update = function(e) {
                  if (e) {
                    var t = this.tile.extent;
                    this.samplerData = {
                      values: e.values,
                      width: e.width,
                      height: e.height,
                      safeWidth: 0.99999999 * (e.width - 1),
                      noDataValue: e.noDataValue,
                      dx: (e.width - 1) / (t[2] - t[0]),
                      dy: (e.width - 1) / (t[3] - t[1]),
                      x0: t[0],
                      y1: t[3]
                    };
                  } else this.samplerData = null;
                }),
                (e.prototype.sample = function(e, t) {
                  if (this.samplerData) return n(this.samplerData, e, t);
                }),
                e
              );
            })();
            (t.ElevationTile = r), (t.sample = n), (t.default = r);
          }.apply(null, i)) || (e.exports = r);
    },
    329: function(e, t, n) {
      var i, r;
      (i = [
        n.dj.c(e.i),
        t,
        n(13),
        n(110),
        n(5),
        n(109),
        n(108),
        n(63),
        n(10),
        n(9),
        n(79),
        n(23),
        n(75),
        n(35),
        n(84),
        n(37),
        n(440),
        n(2155)
      ]),
        void 0 ===
          (r = function(e, t, n, i, r, o, a, l, s, u, c, p, f, h, d, v, m, y) {
            function T(e, t) {
              var n = e.lods.length - 1;
              if (t > 0) {
                var i = l.findIndex(e.lods, function(e) {
                  return e.resolution < t;
                });
                0 === i ? (n = 0) : i > 0 && (n = i - 1);
              }
              return n;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var x = (function() {
              function e() {}
              return (
                (e.prototype.queryAll = function(e, t, r) {
                  return i(this, void 0, void 0, function() {
                    var i, a, l, c, p;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return (e =
                            r && r.ignoreInvisibleLayers
                              ? e.filter(function(e) {
                                  return e.visible;
                                })
                              : e.slice()).length
                            ? ((i = g.fromGeometry(t)),
                              (a = !1),
                              (r && r.returnSampleInfo) || (a = !0),
                              (l = n(
                                { noDataValue: 0, maximumAutoTileRequests: 20 },
                                r,
                                { returnSampleInfo: !0, demResolution: "auto" }
                              )),
                              [4, this.query(e[e.length - 1], i, l)])
                            : [
                                2,
                                u.reject(
                                  new s(
                                    "elevation-query:invalid-layer",
                                    "Elevation queries require at least one elevation layer to fetch tiles from"
                                  )
                                )
                              ];
                        case 1:
                          return (
                            (c = o.sent()), [4, this._queryAllContinue(e, c, l)]
                          );
                        case 2:
                          return (
                            ((p = o.sent()).geometry = p.geometry.export()),
                            a && delete p.sampleInfo,
                            [2, p]
                          );
                      }
                    });
                  });
                }),
                (e.prototype.query = function(e, t, r) {
                  return i(this, void 0, void 0, function() {
                    var i;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return e
                            ? t &&
                              (t instanceof g ||
                                "point" === t.type ||
                                "multipoint" === t.type ||
                                "polyline" === t.type)
                              ? ((r = n(
                                  {
                                    noDataValue: 0,
                                    demResolution: "auto",
                                    minDemResolution: 0,
                                    maximumAutoTileRequests: 20,
                                    returnSampleInfo: !1
                                  },
                                  r
                                )),
                                (i = new _(e, t.spatialReference, r)),
                                [4, e.load()])
                              : [
                                  2,
                                  u.reject(
                                    new s(
                                      "elevation-query:invalid-geometry",
                                      "Only point, polyline and multipoint geometries can be used to query elevation"
                                    )
                                  )
                                ]
                            : [
                                2,
                                u.reject(
                                  new s(
                                    "elevation-query:invalid-layer",
                                    "Elevation queries require an elevation layer to fetch tiles from"
                                  )
                                )
                              ];
                        case 1:
                          return (
                            o.sent(),
                            this._createGeometryDescriptor(i, t),
                            [4, this._selectTiles(i)]
                          );
                        case 2:
                          return o.sent(), [4, this._populateElevationTiles(i)];
                        case 3:
                          return (
                            o.sent(),
                            this._sampleGeometryWithElevation(i),
                            [2, this._createQueryResult(i)]
                          );
                      }
                    });
                  });
                }),
                (e.prototype.createSampler = function(e, t, r) {
                  return i(this, void 0, void 0, function() {
                    return o(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return e
                            ? t && "extent" === t.type
                              ? ((r = n(
                                  {
                                    noDataValue: 0,
                                    demResolution: "auto",
                                    maximumAutoTileRequests: 20,
                                    returnSampleInfo: !1
                                  },
                                  r
                                )),
                                [4, this._createSampler(e, t, r)])
                              : [
                                  2,
                                  u.reject(
                                    new s(
                                      "elevation-query:invalid-extent",
                                      "Invalid or undefined extent"
                                    )
                                  )
                                ]
                            : [
                                2,
                                u.reject(
                                  new s(
                                    "elevation-query:invalid-layer",
                                    "Elevation queries require an elevation layer to fetch tiles from"
                                  )
                                )
                              ];
                        case 1:
                          return [2, i.sent()];
                      }
                    });
                  });
                }),
                (e.prototype.createSamplerAll = function(e, t, r) {
                  return i(this, void 0, void 0, function() {
                    var i, a;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return (e =
                            r && r.ignoreInvisibleLayers
                              ? e.filter(function(e) {
                                  return e.visible;
                                })
                              : e.slice()).length
                            ? t && "extent" === t.type
                              ? ((i = n(
                                  {
                                    noDataValue: 0,
                                    maximumAutoTileRequests: 20
                                  },
                                  r,
                                  {
                                    returnSampleInfo: !0,
                                    demResolution: "auto"
                                  }
                                )),
                                [4, this._createSampler(e[e.length - 1], t, i)])
                              : [
                                  2,
                                  u.reject(
                                    new s(
                                      "elevation-query:invalid-extent",
                                      "Invalid or undefined extent"
                                    )
                                  )
                                ]
                            : [
                                2,
                                u.reject(
                                  new s(
                                    "elevation-query:invalid-layer",
                                    "Elevation queries require at least one elevation layer to fetch tiles from"
                                  )
                                )
                              ];
                        case 1:
                          return (
                            (a = o.sent()),
                            [4, this._createSamplerAllContinue(e, t, a, i)]
                          );
                        case 2:
                          return [2, o.sent()];
                      }
                    });
                  });
                }),
                (e.prototype._createSampler = function(e, t, n, r) {
                  return i(this, void 0, void 0, function() {
                    var i, a, l;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return [4, e.load()];
                        case 1:
                          if (
                            (o.sent(),
                            (i = t.spatialReference),
                            (a = e.tileInfo.spatialReference),
                            !i.equals(a))
                          ) {
                            if (!v.canProject(i, a))
                              return [
                                2,
                                u.reject(
                                  new s(
                                    "elevation-query:invalid-extent",
                                    "Extent spatial reference (" +
                                      i.wkid +
                                      ") must be compatible with tile spatial reference (" +
                                      a.wkid +
                                      ")"
                                  )
                                )
                              ];
                            t = v.project(t, a);
                          }
                          return (
                            (l = new E(e, t, n, r)), [4, this._selectTiles(l)]
                          );
                        case 2:
                          return o.sent(), [4, this._populateElevationTiles(l)];
                        case 3:
                          return (
                            o.sent(),
                            [
                              2,
                              new m.MultiTileElevationSampler(
                                l.elevationTiles,
                                l.layer.tileInfo
                              )
                            ]
                          );
                      }
                    });
                  });
                }),
                (e.prototype._createSamplerAllContinue = function(e, t, n, r) {
                  return i(this, void 0, void 0, function() {
                    var i, a, l, s;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return (
                            e.pop(),
                            e.length
                              ? ((i = n.samplers.map(function(e) {
                                  return h.fromExtent(e.extent);
                                })),
                                [
                                  4,
                                  this._createSampler(e[e.length - 1], t, r, i)
                                ])
                              : [2, n]
                          );
                        case 1:
                          return 0 === (a = o.sent()).samplers.length
                            ? [2, n]
                            : ((l = n.samplers.concat(a.samplers)),
                              (s = new m.MultiTileElevationSampler(l)),
                              [4, this._createSamplerAllContinue(e, t, s, r)]);
                        case 2:
                          return [2, o.sent()];
                      }
                    });
                  });
                }),
                (e.prototype._queryAllContinue = function(e, t, n) {
                  return i(this, void 0, void 0, function() {
                    var i, r, a, l, s, u, c;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          if (
                            ((i = e.pop()),
                            t.geometry.coordinates.forEach(function(e, n) {
                              t.sampleInfo[n].demResolution >= 0 &&
                                !t.sampleInfo[n].source &&
                                (t.sampleInfo[n].source = i);
                            }),
                            !e.length)
                          )
                            return [2, t];
                          for (
                            r = t.geometry.coordinates, a = [], l = [], s = 0;
                            s < r.length;
                            s++
                          )
                            t.sampleInfo[s].demResolution < 0 &&
                              (a.push(r[s]), l.push(s));
                          return 0 === a.length
                            ? [2, t]
                            : ((u = t.geometry.clone(a)),
                              [4, this.query(e[e.length - 1], u, n)]);
                        case 1:
                          return (
                            (c = o.sent()),
                            l.forEach(function(e, n) {
                              (r[e].z = c.geometry.coordinates[n].z),
                                (t.sampleInfo[e].demResolution =
                                  c.sampleInfo[n].demResolution);
                            }),
                            [4, this._queryAllContinue(e, t, n)]
                          );
                        case 2:
                          return [2, o.sent()];
                      }
                    });
                  });
                }),
                (e.prototype._createQueryResult = function(e) {
                  var t = {
                    geometry: (e.outSpatialReference.equals(
                      e.geometry.spatialReference
                    )
                      ? e.geometry
                      : e.geometry.project(e.outSpatialReference)
                    ).export(),
                    noDataValue: e.options.noDataValue
                  };
                  return (
                    e.options.returnSampleInfo &&
                      (t.sampleInfo = this._extractSampleInfo(e)),
                    e.geometry.coordinates.forEach(function(e) {
                      (e.tile = null), (e.elevationTile = null);
                    }),
                    t
                  );
                }),
                (e.prototype._createGeometryDescriptor = function(e, t) {
                  var n,
                    i = e.layer.tileInfo.spatialReference;
                  if (!(n = t instanceof g ? t.project(i) : v.project(t, i)))
                    throw new s(
                      "elevation-query:spatial-reference-mismatch",
                      "Cannot query elevation in '" +
                        t.spatialReference.wkid +
                        "' on an elevation service in '" +
                        i.wkid +
                        "'"
                    );
                  e.geometry = g.fromGeometry(n);
                }),
                (e.prototype._selectTiles = function(e) {
                  return i(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (t = e.options.demResolution),
                            "geometry" === e.type &&
                              this._preselectOutsideLayerExtent(e),
                            "number" != typeof t
                              ? [3, 1]
                              : (this._selectTilesClosestResolution(e), [3, 6])
                          );
                        case 1:
                          return "finest-contiguous" !== t
                            ? [3, 3]
                            : [4, this._selectTilesFinestContiguous(e)];
                        case 2:
                          return n.sent(), [3, 6];
                        case 3:
                          return "auto" !== t
                            ? [3, 5]
                            : [4, this._selectTilesAuto(e)];
                        case 4:
                          return n.sent(), [3, 6];
                        case 5:
                          throw new s(
                            "elevation-query:invalid-dem-resolution",
                            "Invalid dem resolution value '" +
                              t +
                              '\', expected a number, "finest-contiguous" or "auto"'
                          );
                        case 6:
                          return [2];
                      }
                    });
                  });
                }),
                (e.prototype._preselectOutsideLayerExtent = function(e) {
                  var t = new y.ElevationTile(null);
                  (t.sample = function(t, n) {
                    return e.options.noDataValue;
                  }),
                    (e.outsideExtentTile = t);
                  var n = e.layer.fullExtent;
                  e.geometry.coordinates.forEach(function(e) {
                    var i = e.x,
                      r = e.y;
                    (i < n.xmin || i > n.xmax || r < n.ymin || r > n.ymax) &&
                      (e.elevationTile = t);
                  });
                }),
                (e.prototype._selectTilesClosestResolution = function(e) {
                  var t = e.layer.tileInfo,
                    n = this._findNearestDemResolutionLODIndex(
                      t,
                      e.options.demResolution
                    );
                  e.selectTilesAtLOD(n);
                }),
                (e.prototype._findNearestDemResolutionLODIndex = function(
                  e,
                  t
                ) {
                  for (
                    var n = t / d.getMetersPerUnitForSR(e.spatialReference),
                      i = e.lods[0],
                      r = 0,
                      o = 1;
                    o < e.lods.length;
                    o++
                  ) {
                    var a = e.lods[o];
                    Math.abs(a.resolution - n) < Math.abs(i.resolution - n) &&
                      ((i = a), (r = o));
                  }
                  return r;
                }),
                (e.prototype._selectTilesFinestContiguous = function(e) {
                  return i(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (t = T(
                              e.layer.tileInfo,
                              e.options.minDemResolution
                            )),
                            [4, this._selectTilesFinestContiguousAt(e, t)]
                          );
                        case 1:
                          return n.sent(), [2];
                      }
                    });
                  });
                }),
                (e.prototype._selectTilesFinestContiguousAt = function(e, t) {
                  return i(this, void 0, void 0, function() {
                    var n, i, r;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          if (((n = e.layer), e.selectTilesAtLOD(t), t < 0))
                            return [2];
                          (i = n.tilemapCache),
                            (r = e.getTilesToFetch()),
                            (o.label = 1);
                        case 1:
                          return (
                            o.trys.push([1, 6, , 8]),
                            i
                              ? [
                                  4,
                                  a(
                                    r.map(function(e) {
                                      return i.fetchAvailability(
                                        e.level,
                                        e.row,
                                        e.col
                                      );
                                    })
                                  )
                                ]
                              : [3, 3]
                          );
                        case 2:
                          return o.sent(), [3, 5];
                        case 3:
                          return [4, this._populateElevationTiles(e)];
                        case 4:
                          if ((o.sent(), !e.allElevationTilesFetched()))
                            throw (e.clearElevationTiles(),
                            new s("elevation-query:has-unavailable-tiles"));
                          o.label = 5;
                        case 5:
                          return [3, 8];
                        case 6:
                          return (
                            o.sent(),
                            [4, this._selectTilesFinestContiguousAt(e, t - 1)]
                          );
                        case 7:
                          return o.sent(), [3, 8];
                        case 8:
                          return [2];
                      }
                    });
                  });
                }),
                (e.prototype._populateElevationTiles = function(e) {
                  return i(this, void 0, void 0, function() {
                    var t, n, i, r;
                    return o(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (t = e.options.noDataValue),
                            (n = e.getTilesToFetch()),
                            (i = {}),
                            (r = n.map(function(n) {
                              return e.layer
                                .fetchTile(n.level, n.row, n.col, t)
                                .then(function(e) {
                                  return (i[n.id] = new y.ElevationTile(n, e));
                                });
                            })),
                            [4, u.eachAlways(r)]
                          );
                        case 1:
                          return o.sent(), e.populateElevationTiles(i), [2];
                      }
                    });
                  });
                }),
                (e.prototype._selectTilesAuto = function(e) {
                  return i(this, void 0, void 0, function() {
                    var t,
                      n,
                      r,
                      l,
                      s = this;
                    return o(this, function(u) {
                      switch (u.label) {
                        case 0:
                          return (
                            this._selectTilesAutoFinest(e),
                            this._reduceTilesForMaximumRequests(e),
                            (t = e.layer.tilemapCache)
                              ? ((n = e.getTilesToFetch()),
                                (r = {}),
                                (l = n.map(function(e) {
                                  return i(s, void 0, void 0, function() {
                                    var n;
                                    return o(this, function(i) {
                                      switch (i.label) {
                                        case 0:
                                          (n = {
                                            id: null,
                                            level: 0,
                                            row: 0,
                                            col: 0,
                                            extent: h.create()
                                          }),
                                            (i.label = 1);
                                        case 1:
                                          return (
                                            i.trys.push([1, 3, , 4]),
                                            [
                                              4,
                                              t.fetchAvailabilityUpsample(
                                                e.level,
                                                e.row,
                                                e.col,
                                                n
                                              )
                                            ]
                                          );
                                        case 2:
                                          return (
                                            i.sent(), (r[e.id] = n), [3, 4]
                                          );
                                        case 3:
                                          return i.sent(), [3, 4];
                                        case 4:
                                          return [2];
                                      }
                                    });
                                  });
                                })),
                                [4, a(l)])
                              : [3, 2]
                          );
                        case 1:
                          return u.sent(), e.remapTiles(r), [3, 3];
                        case 2:
                          return [2, this._selectTilesAutoPrefetchUpsample(e)];
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                (e.prototype._reduceTilesForMaximumRequests = function(e) {
                  var t = e.layer.tileInfo,
                    n = 0,
                    i = {},
                    r = function(e) {
                      e.id in i ? i[e.id]++ : ((i[e.id] = 1), n++);
                    },
                    o = function(e) {
                      var t = i[e.id];
                      1 === t ? (delete i[e.id], n--) : (i[e.id] = t - 1);
                    };
                  e.forEachTileToFetch(r, o);
                  for (
                    var a = !0;
                    a &&
                    ((a = !1),
                    e.forEachTileToFetch(function(i) {
                      n <= e.options.maximumAutoTileRequests ||
                        (o(i), t.upsampleTile(i) && (a = !0), r(i));
                    }, o),
                    a);

                  );
                }),
                (e.prototype._selectTilesAutoFinest = function(e) {
                  var t = T(e.layer.tileInfo, e.options.minDemResolution);
                  e.selectTilesAtLOD(t, e.options.maximumAutoTileRequests);
                }),
                (e.prototype._selectTilesAutoPrefetchUpsample = function(e) {
                  return i(this, void 0, void 0, function() {
                    var t, n;
                    return o(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (t = e.layer.tileInfo),
                            [4, this._populateElevationTiles(e)]
                          );
                        case 1:
                          return (
                            i.sent(),
                            (n = !1),
                            e.forEachTileToFetch(function(e, i) {
                              t.upsampleTile(e) ? (n = !0) : i();
                            }),
                            n
                              ? [4, this._selectTilesAutoPrefetchUpsample(e)]
                              : [3, 3]
                          );
                        case 2:
                          i.sent(), (i.label = 3);
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                (e.prototype._sampleGeometryWithElevation = function(e) {
                  e.geometry.coordinates.forEach(function(t) {
                    var n = t.elevationTile,
                      i = e.options.noDataValue;
                    if (n) {
                      var r = n.sample(t.x, t.y);
                      void 0 !== r ? (i = r) : (t.elevationTile = null);
                    }
                    t.z = i;
                  });
                }),
                (e.prototype._extractSampleInfo = function(e) {
                  var t = e.layer.tileInfo,
                    n = d.getMetersPerUnitForSR(t.spatialReference);
                  return e.geometry.coordinates.map(function(i) {
                    var r = -1;
                    return (
                      i.elevationTile &&
                        i.elevationTile !== e.outsideExtentTile &&
                        (r =
                          t.lodAt(i.elevationTile.tile.level).resolution * n),
                      { demResolution: r }
                    );
                  });
                }),
                e
              );
            })();
            t.ElevationQuery = x;
            var g = (function() {
              function e() {}
              return (
                (e.prototype.export = function() {
                  return this._exporter(
                    this.coordinates,
                    this.spatialReference
                  );
                }),
                (e.prototype.clone = function(t) {
                  var n = this,
                    i = new e();
                  return (
                    (i.geometry = this.geometry),
                    (i.spatialReference = this.spatialReference),
                    (i.coordinates =
                      t ||
                      this.coordinates.map(function(e) {
                        return n._cloneCoordinate(e);
                      })),
                    (i._exporter = this._exporter),
                    i
                  );
                }),
                (e.prototype.project = function(e) {
                  var t = this;
                  if (this.spatialReference.equals(e)) return this.clone();
                  if (v.canProject(this.spatialReference, e)) {
                    var n = e.isWGS84 ? v.xyToLngLat : v.lngLatToXY,
                      i = [0, 0],
                      r = this.coordinates.map(function(e) {
                        var r = t._cloneCoordinate(e);
                        return n(r.x, r.y, i), (r.x = i[0]), (r.y = i[1]), r;
                      }),
                      o = this.clone(r);
                    return (o.spatialReference = e), o;
                  }
                  return null;
                }),
                (e.prototype._cloneCoordinate = function(e) {
                  return {
                    x: e.x,
                    y: e.y,
                    z: e.z,
                    tile: null,
                    elevationTile: null
                  };
                }),
                (e.fromGeometry = function(t) {
                  var n = new e();
                  if (
                    ((n.geometry = t),
                    (n.spatialReference = t.spatialReference),
                    t instanceof e)
                  )
                    (n.coordinates = t.coordinates.map(function(e) {
                      return n._cloneCoordinate(e);
                    })),
                      (n._exporter = function(e, n) {
                        var i = t.clone(e);
                        return (i.spatialReference = n), i;
                      });
                  else
                    switch (t.type) {
                      case "point":
                        var i = t;
                        t.hasM
                          ? (n.coordinates = [{ x: i.x, y: i.y, m: i.m }])
                          : (n.coordinates = [{ x: i.x, y: i.y }]),
                          (n._exporter = function(e, n) {
                            return t.hasM
                              ? new p(e[0].x, e[0].y, e[0].z, e[0].m, n)
                              : new p(e[0].x, e[0].y, e[0].z, n);
                          });
                        break;
                      case "multipoint":
                        var r = t;
                        (n.coordinates = r.points.map(function(e) {
                          if (t.hasM) {
                            var n = t.hasZ ? 3 : 2;
                            return { x: e[0], y: e[1], m: e[n] };
                          }
                          return { x: e[0], y: e[1] };
                        })),
                          (n._exporter = function(e, n) {
                            return t.hasM
                              ? new c({
                                  points: e.map(function(e) {
                                    return [e.x, e.y, e.z, e.m];
                                  }),
                                  hasZ: !0,
                                  hasM: !0,
                                  spatiaReference: n
                                })
                              : new c(
                                  e.map(function(e) {
                                    return [e.x, e.y, e.z];
                                  }),
                                  n
                                );
                          });
                        break;
                      case "polyline":
                        var o = [],
                          a = [],
                          l = 0;
                        t.paths.forEach(function(e) {
                          a.push([l, l + e.length]),
                            (l += e.length),
                            o.push.apply(
                              o,
                              e.map(function(e) {
                                if (t.hasM) {
                                  var n = t.hasZ ? 3 : 2;
                                  return { x: e[0], y: e[1], m: e[n] };
                                }
                                return { x: e[0], y: e[1] };
                              })
                            );
                        }),
                          (n.coordinates = o),
                          (n._exporter = function(e, n) {
                            var i = t.hasM
                                ? e.map(function(e) {
                                    return [e.x, e.y, e.z, e.m];
                                  })
                                : e.map(function(e) {
                                    return [e.x, e.y, e.z];
                                  }),
                              r = a.map(function(e) {
                                return i.slice(e[0], e[1]);
                              });
                            return new f({
                              paths: r,
                              hasM: t.hasM,
                              hasZ: !0,
                              spatialReference: n
                            });
                          });
                    }
                  return n;
                }),
                e
              );
            })();
            t.GeometryDescriptor = g;
            var w = (function() {
                return function(e, t) {
                  (this.layer = e), (this.options = t);
                };
              })(),
              _ = (function(e) {
                function t(t, n, i) {
                  var r = e.call(this, t, i) || this;
                  return (r.type = "geometry"), (r.outSpatialReference = n), r;
                }
                return (
                  r(t, e),
                  (t.prototype.selectTilesAtLOD = function(e, t) {
                    if (e < 0)
                      this.geometry.coordinates.forEach(function(e) {
                        return (e.tile = null);
                      });
                    else {
                      var n = this.layer.tileInfo,
                        i = n.lods[e].level;
                      this.geometry.coordinates.forEach(function(e) {
                        e.tile = n.tileAt(i, e.x, e.y);
                      });
                    }
                  }),
                  (t.prototype.allElevationTilesFetched = function() {
                    return !this.geometry.coordinates.some(function(e) {
                      return !e.elevationTile;
                    });
                  }),
                  (t.prototype.clearElevationTiles = function() {
                    for (
                      var e = 0, t = this.geometry.coordinates;
                      e < t.length;
                      e++
                    ) {
                      var n = t[e];
                      n.elevationTile !== this.outsideExtentTile &&
                        (n.elevationTile = null);
                    }
                  }),
                  (t.prototype.populateElevationTiles = function(e) {
                    for (
                      var t = 0, n = this.geometry.coordinates;
                      t < n.length;
                      t++
                    ) {
                      var i = n[t];
                      !i.elevationTile &&
                        i.tile &&
                        (i.elevationTile = e[i.tile.id]);
                    }
                  }),
                  (t.prototype.remapTiles = function(e) {
                    for (
                      var t = 0, n = this.geometry.coordinates;
                      t < n.length;
                      t++
                    ) {
                      var i = n[t];
                      i.tile = e[i.tile.id];
                    }
                  }),
                  (t.prototype.getTilesToFetch = function() {
                    for (
                      var e = {}, t = [], n = 0, i = this.geometry.coordinates;
                      n < i.length;
                      n++
                    ) {
                      var r = i[n],
                        o = r.tile;
                      r.elevationTile ||
                        !r.tile ||
                        e[o.id] ||
                        ((e[o.id] = o), t.push(o));
                    }
                    return t;
                  }),
                  (t.prototype.forEachTileToFetch = function(e, t) {
                    for (
                      var n = 0, i = this.geometry.coordinates;
                      n < i.length;
                      n++
                    ) {
                      !(function(t) {
                        t.tile &&
                          !t.elevationTile &&
                          e(t.tile, function() {
                            return (t.tile = null);
                          });
                      })(i[n]);
                    }
                  }),
                  t
                );
              })(w),
              E = (function(e) {
                function t(t, n, i, r) {
                  var o = e.call(this, t, i) || this;
                  return (
                    (o.type = "extent"),
                    (o.elevationTiles = []),
                    (o.candidateTiles = []),
                    (o.fetchedCandidates = new Set()),
                    (o.extent = n.intersection(t.fullExtent)),
                    (o.maskExtents = r),
                    o
                  );
                }
                return (
                  r(t, e),
                  (t.prototype.selectTilesAtLOD = function(e, t) {
                    var n = this._maximumLodForRequests(t),
                      i = Math.min(n, e);
                    i < 0
                      ? (this.candidateTiles.length = 0)
                      : this._selectCandidateTilesCoveringExtentAt(i);
                  }),
                  (t.prototype._maximumLodForRequests = function(e) {
                    var t = this.layer.tileInfo;
                    if (!e) return t.lods.length - 1;
                    for (
                      var n = this.extent, i = t.lods.length - 1;
                      i >= 0;
                      i--
                    ) {
                      var r = t.lods[i],
                        o = r.resolution * t.size[0],
                        a = r.resolution * t.size[1];
                      if (Math.ceil(n.width / o) * Math.ceil(n.height / a) <= e)
                        return i;
                    }
                    return -1;
                  }),
                  (t.prototype.allElevationTilesFetched = function() {
                    return (
                      this.candidateTiles.length === this.elevationTiles.length
                    );
                  }),
                  (t.prototype.clearElevationTiles = function() {
                    (this.elevationTiles.length = 0),
                      this.fetchedCandidates.clear();
                  }),
                  (t.prototype.populateElevationTiles = function(e) {
                    for (
                      var t = 0, n = this.candidateTiles;
                      t < n.length;
                      t++
                    ) {
                      var i = n[t],
                        r = e[i.id];
                      r &&
                        (this.fetchedCandidates.add(i),
                        this.elevationTiles.push(r));
                    }
                  }),
                  (t.prototype.remapTiles = function(e) {
                    this.candidateTiles = this._uniqueNonOverlappingTiles(
                      this.candidateTiles.map(function(t) {
                        return e[t.id];
                      })
                    );
                  }),
                  (t.prototype.getTilesToFetch = function() {
                    return this.candidateTiles;
                  }),
                  (t.prototype.forEachTileToFetch = function(e, t) {
                    var n = this,
                      i = this.candidateTiles;
                    (this.candidateTiles = []),
                      i.forEach(function(i) {
                        if (n.fetchedCandidates.has(i)) t && t(i);
                        else {
                          var r = !1;
                          e(i, function() {
                            return (r = !0);
                          }),
                            r ? t && t(i) : n.candidateTiles.push(i);
                        }
                      }),
                      (this.candidateTiles = this._uniqueNonOverlappingTiles(
                        this.candidateTiles,
                        t
                      ));
                  }),
                  (t.prototype._uniqueNonOverlappingTiles = function(e, t) {
                    for (var n = {}, i = [], r = 0, o = e; r < o.length; r++) {
                      var a = o[r];
                      n[a.id] ? t && t(a) : ((n[a.id] = a), i.push(a));
                    }
                    var l = i.sort(function(e, t) {
                      return e.level - t.level;
                    });
                    return l.filter(function(e, n) {
                      for (var i = 0; i < n; i++)
                        if (h.contains(l[i].extent, e.extent))
                          return t && t(e), !1;
                      return !0;
                    });
                  }),
                  (t.prototype._selectCandidateTilesCoveringExtentAt = function(
                    e
                  ) {
                    this.candidateTiles.length = 0;
                    for (
                      var t = this.layer.tileInfo,
                        n = t.lods[e],
                        i = this.extent,
                        r = t.tileAt(n.level, i.xmin, i.ymin),
                        o = n.resolution * t.size[0],
                        a = n.resolution * t.size[1],
                        l = Math.ceil((i.xmax - r.extent[0]) / o),
                        s = Math.ceil((i.ymax - r.extent[1]) / a),
                        u = 0;
                      u < s;
                      u++
                    )
                      for (var c = 0; c < l; c++) {
                        var p = {
                          id: null,
                          level: r.level,
                          row: r.row - u,
                          col: r.col + c
                        };
                        t.updateTileInfo(p),
                          this._tileIsMasked(p) || this.candidateTiles.push(p);
                      }
                  }),
                  (t.prototype._tileIsMasked = function(e) {
                    return (
                      !!this.maskExtents &&
                      this.maskExtents.some(function(t) {
                        return h.contains(t, e.extent);
                      })
                    );
                  }),
                  t
                );
              })(w);
            (t.getFinestLodIndex = T), (t.default = x);
          }.apply(null, i)) || (e.exports = r);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/layers/support/ElevationQuery": 329,
      "esri/layers/support/ElevationTile": 2155
    });
  })();
