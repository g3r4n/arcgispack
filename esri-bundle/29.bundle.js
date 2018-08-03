(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    1979: function(e, t, r) {
      var n, o;
      (n = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(13),
        r(109),
        r(110),
        r(43),
        r(24),
        r(10),
        r(53),
        r(9),
        r(26),
        r(1),
        r(2094),
        r(809),
        r(2133),
        r(2008)
      ]),
        void 0 ===
          (o = function(e, t, n, o, i, s, a, u, l, c, p, d, h, y, f, m, v, w) {
            function b(e) {
              return d.create(e);
            }
            var x = (function(e) {
                function t(t) {
                  return e.call(this) || this;
                }
                var i;
                return (
                  n(t, e),
                  (i = t),
                  Object.defineProperty(
                    t.prototype,
                    "controllerTypeForSource",
                    {
                      get: function() {
                        return this.layer.source &&
                          this.layer.source.isInstanceOf &&
                          this.layer.source.isInstanceOf(m)
                          ? "memory"
                          : "point" === this.layer.geometryType
                            ? "feature-tile-3d"
                            : "snapshot";
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(t.prototype, "asyncGraphicsUpdates", {
                    get: function() {
                      if (
                        this.controller &&
                        "feature-tile-3d" === this.controller.type
                      )
                        switch (this.controller.mode) {
                          case "snapshot":
                            return !1;
                          case "tiles":
                            return !0;
                          default:
                            this.controller.mode;
                        }
                      switch (
                        this.controller
                          ? this.controller.type
                          : this.controllerTypeForSource
                      ) {
                        case "feature-tile-3d":
                          return !0;
                        case "memory":
                        case "snapshot":
                          return !1;
                      }
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(
                    t.prototype,
                    "suspendResumeExtentMode",
                    {
                      get: function() {
                        if (
                          this.controller &&
                          "feature-tile-3d" === this.controller.type
                        )
                          return this.controller.suspendResumeExtentMode;
                        switch (
                          this.controller
                            ? this.controller.type
                            : this.controllerTypeForSource
                        ) {
                          case "feature-tile-3d":
                            return "data";
                          case "memory":
                          case "snapshot":
                            return "computed";
                        }
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(t.prototype, "displayLimitExceeded", {
                    get: function() {
                      return !(
                        !this.controller ||
                        "feature-tile-3d" !== this.controller.type ||
                        this.suspended ||
                        !this.controller.displayLimitExceeded
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.createController = function() {
                    return a(this, void 0, void 0, function() {
                      return s(this, function(e) {
                        switch (e.label) {
                          case 0:
                            switch (this.controllerTypeForSource) {
                              case "memory":
                                return [3, 1];
                              case "snapshot":
                                return [3, 3];
                              case "feature-tile-3d":
                                return [3, 5];
                            }
                            return [3, 7];
                          case 1:
                            return [4, this.createMemoryController()];
                          case 2:
                            return [2, e.sent()];
                          case 3:
                            return [4, this.createSnapshotController()];
                          case 4:
                            return [2, e.sent()];
                          case 5:
                            return [4, this.createFeatureTileController()];
                          case 6:
                            return [2, e.sent()];
                          case 7:
                            return this.controllerTypeForSource, [3, 8];
                          case 8:
                            return [2];
                        }
                      });
                    });
                  }),
                  (t.prototype.createMemoryController = function() {
                    return a(this, void 0, void 0, function() {
                      return s(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return [
                              4,
                              b(function(e) {
                                Promise.resolve()
                                  .then(
                                    function() {
                                      var t = [r(437)];
                                      e.apply(null, t);
                                    }.bind(this)
                                  )
                                  .catch(r.oe);
                              })
                            ];
                          case 1:
                            return [
                              2,
                              new (e.sent())({
                                layerView: this,
                                layer: this.layer,
                                graphics: this.layer.source
                              })
                            ];
                        }
                      });
                    });
                  }),
                  (t.prototype.createFeatureTileController = function() {
                    return a(this, void 0, void 0, function() {
                      var e,
                        t,
                        n = this;
                      return s(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return [
                              4,
                              b(function(e) {
                                r.e(61)
                                  .then(
                                    function() {
                                      var t = [r(2300)];
                                      e.apply(null, t);
                                    }.bind(this)
                                  )
                                  .catch(r.oe);
                              })
                            ];
                          case 1:
                            return (
                              (e = o.sent()),
                              (t = new e({
                                layerView: this,
                                graphics: new g(),
                                extent: this.clippingExtent
                              })),
                              this.handles.add([
                                t.watch(
                                  "suspendResumeExtentMode",
                                  function() {
                                    return n.notifyChange(
                                      "suspendResumeExtentMode"
                                    );
                                  },
                                  !0
                                ),
                                t.watch(
                                  "displayLimitExceeded",
                                  function() {
                                    return n.notifyChange(
                                      "displayLimitExceeded"
                                    );
                                  },
                                  !0
                                ),
                                t.watch(
                                  "mode",
                                  function() {
                                    return n.notifyChange(
                                      "asyncGraphicsUpdates"
                                    );
                                  },
                                  !0
                                )
                              ]),
                              this.handles.add(
                                h.init(t, "serviceDataExtent", function(e) {
                                  return (n.graphics3d.dataExtent = e);
                                })
                              ),
                              this.handles.add(
                                h.init(
                                  this,
                                  "suspended",
                                  function(e) {
                                    e ? t.suspend() : t.resume();
                                  },
                                  !0
                                )
                              ),
                              this.handles.add(
                                h.init(
                                  this.graphics3d.graphicsCore,
                                  "maxNumberOfFeatures",
                                  function(e) {
                                    var r = Math.ceil(F * e),
                                      n = Math.ceil(C * e),
                                      o = e;
                                    t.displayFeatureLimit = {
                                      min: r,
                                      max: o,
                                      perTile: n
                                    };
                                  }
                                )
                              ),
                              [2, t]
                            );
                        }
                      });
                    });
                  }),
                  (t.prototype.createSnapshotController = function() {
                    return a(this, void 0, void 0, function() {
                      var e, t, n;
                      return s(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return (
                              this.addResolvingPromise(
                                this.validateMaximumFeatureCount()
                              ),
                              [
                                4,
                                b(function(e) {
                                  r.e(5)
                                    .then(
                                      function() {
                                        var t = [r(1966)];
                                        e.apply(null, t);
                                      }.bind(this)
                                    )
                                    .catch(r.oe);
                                })
                              ]
                            );
                          case 1:
                            return (
                              (e = o.sent()),
                              (t = l.ofType(u)),
                              [
                                4,
                                (n = new e({
                                  layerView: this,
                                  layer: this.layer,
                                  graphics: new t(),
                                  maxPageSize: 300,
                                  defaultReturnZ: !0,
                                  extent: this.clippingExtent
                                })).when()
                              ]
                            );
                          case 2:
                            return (
                              o.sent(),
                              this.handles.add(
                                h.whenFalseOnce(this, "suspended", function() {
                                  n.startup();
                                })
                              ),
                              [2, n]
                            );
                        }
                      });
                    });
                  }),
                  (t.prototype.validateMaximumFeatureCount = function() {
                    return i.maximumFeatureCount < 0 || !this.layer.url
                      ? d.resolve()
                      : this.layer.queryFeatureCount().then(function(e) {
                          if (e > i.maximumFeatureCount)
                            throw new c(
                              "featurelayerview3d:maximum-feature-count-exceeded",
                              "The maximum number of allowed features (${maximumFeatureCount}) has been exceeded (layer has ${numberOfFeatures} features)",
                              {
                                maximumFeatureCount: i.maximumFeatureCount,
                                numberOfFeatures: e
                              }
                            );
                        });
                  }),
                  (t.prototype.doRefresh = function() {
                    !this.suspended &&
                      f.isRefreshable(this.controller) &&
                      this.controller.refresh();
                  }),
                  (t.maximumFeatureCount = -1),
                  o([y.property()], t.prototype, "layer", void 0),
                  o([y.property()], t.prototype, "controller", void 0),
                  o(
                    [y.property({ readOnly: !0, dependsOn: ["layer"] })],
                    t.prototype,
                    "controllerTypeForSource",
                    null
                  ),
                  o(
                    [
                      y.property({
                        readOnly: !0,
                        dependsOn: ["controllerTypeForSource", "controller"]
                      })
                    ],
                    t.prototype,
                    "asyncGraphicsUpdates",
                    null
                  ),
                  o(
                    [
                      y.property({
                        readOnly: !0,
                        dependsOn: ["controllerTypeForSource", "controller"]
                      })
                    ],
                    t.prototype,
                    "suspendResumeExtentMode",
                    null
                  ),
                  o(
                    [y.property({ dependsOn: ["suspended", "controller"] })],
                    t.prototype,
                    "displayLimitExceeded",
                    null
                  ),
                  (i = o(
                    [y.subclass("esri.views.3d.layers.FeatureLayerView3D")],
                    t
                  ))
                );
              })(y.declared(v, w)),
              g = (function(e) {
                function t() {
                  var t = (null !== e && e.apply(this, arguments)) || this;
                  return (t.items = new Set()), t;
                }
                var r;
                return (
                  n(t, e),
                  (r = t),
                  Object.defineProperty(t.prototype, "length", {
                    get: function() {
                      return this.items.size;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.addMany = function(e) {
                    for (var t = 0, r = e; t < r.length; t++) {
                      var n = r[t];
                      this.items.add(n);
                    }
                    this.emit("change", { added: e, removed: [], moved: [] });
                  }),
                  (t.prototype.removeMany = function(e) {
                    for (var t = 0, r = e; t < r.length; t++) {
                      var n = r[t];
                      this.items.delete(n);
                    }
                    return (
                      this.emit("change", { added: [], removed: e, moved: [] }),
                      e
                    );
                  }),
                  (t.prototype.removeAll = function() {
                    var e = this.toArray();
                    this.emit("change", { added: [], removed: e, moved: [] });
                  }),
                  (t.prototype.toArray = function() {
                    var e = [];
                    return (
                      this.items.forEach(function(t) {
                        return e.push(t);
                      }),
                      e
                    );
                  }),
                  (t.prototype.forEach = function(e) {
                    this.items.forEach(e);
                  }),
                  (t.prototype.some = function(e) {
                    return this.toArray().some(e);
                  }),
                  (t.prototype.find = function(e) {
                    var t = null;
                    return (
                      this.forEach(function(r) {
                        !t && e(r) && (t = r);
                      }),
                      t
                    );
                  }),
                  (t.prototype.filter = function(e) {
                    var t = new r();
                    return (
                      this.forEach(function(r) {
                        e(r) && t.items.add(r);
                      }),
                      t
                    );
                  }),
                  (r = o(
                    [
                      y.subclass(
                        "esri.views.3d.layers.FeatureLayerView3D.SetCollection"
                      )
                    ],
                    t
                  ))
                );
              })(y.declared(p)),
              F = 0.1,
              C = 0.25;
            return x;
          }.apply(null, n)) || (e.exports = o);
    },
    2008: function(e, t, r) {
      var n, o;
      (n = [r.dj.c(e.i), t, r(2), r(0), r(3), r(1)]),
        void 0 ===
          (o = function(e, t, r, n, o, i) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.refreshTimestamp = null), t;
              }
              return (
                r(t, e),
                (t.prototype.refresh = function(e) {
                  void 0 === e && (e = Date.now()),
                    this._set("refreshTimestamp", e),
                    this.doRefresh && this.doRefresh();
                }),
                n([i.property()], t.prototype, "layer", void 0),
                n(
                  [i.aliasOf("layer.refreshInterval")],
                  t.prototype,
                  "refreshInterval",
                  void 0
                ),
                n(
                  [i.property({ readOnly: !0 })],
                  t.prototype,
                  "refreshTimestamp",
                  void 0
                ),
                n([i.subclass("esri.layers.mixins.RefreshableLayerView")], t)
              );
            })(i.declared(o));
          }.apply(null, n)) || (e.exports = o);
    },
    2094: function(e, t, r) {
      var n, o;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (o = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.isRefreshable = function(e) {
                return e && e.refresh;
              });
          }.apply(null, n)) || (e.exports = o);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/FeatureLayerView3D": 1979,
      "esri/views/layers/RefreshableLayerView": 2008,
      "esri/layers/graphics/controllers/support/controllerUtils": 2094
    });
  })();
