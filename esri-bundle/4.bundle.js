(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    2006: function(e, t, r) {
      var i, n;
      (i = [
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
          (n = function(e, t, r, i, n, o, a, l, s, p, u, d) {
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
                r(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(t) {
                      if ("layerview:create-error" !== t.name) {
                        var r = (e.layer && e.layer.id) || "no id",
                          i = (e.layer && e.layer.title) || "no title";
                        return (
                          s
                            .getLogger(e.declaredClass)
                            .error(
                              "#resolve()",
                              "Failed to resolve layer view (layer title: '" +
                                i +
                                "', id: '" +
                                r +
                                "')",
                              t
                            ),
                          u.reject(t)
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
                i([d.property()], t.prototype, "layer", void 0),
                i([d.property()], t.prototype, "parent", void 0),
                i(
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
                i(
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
                i([d.property()], t.prototype, "view", void 0),
                i(
                  [d.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                i(
                  [
                    d.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                i([d.subclass("esri.views.layers.LayerView")], t)
              );
            })(d.declared(n, o, l, p));
          }.apply(null, i)) || (e.exports = n);
    },
    2008: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2), r(0), r(3), r(1)]),
        void 0 ===
          (n = function(e, t, r, i, n, o) {
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
                i([o.property()], t.prototype, "layer", void 0),
                i(
                  [o.aliasOf("layer.refreshInterval")],
                  t.prototype,
                  "refreshInterval",
                  void 0
                ),
                i(
                  [o.property({ readOnly: !0 })],
                  t.prototype,
                  "refreshTimestamp",
                  void 0
                ),
                i([o.subclass("esri.layers.mixins.RefreshableLayerView")], t)
              );
            })(o.declared(n));
          }.apply(null, i)) || (e.exports = n);
    },
    2011: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2), r(0), r(9), r(26), r(1), r(416), r(2006)]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a, l, s) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.supportsHeightUnitConversion = !1), t;
              }
              return (
                r(t, e),
                (t.prototype.postscript = function(e) {
                  this.inherited(arguments),
                    l.mayHaveHeightModelInfo(this.layer) &&
                      this.addResolvingPromise(this._validateHeightModelInfo());
                }),
                (t.prototype._validateHeightModelInfo = function() {
                  var e = this;
                  return n.create(function(t, r) {
                    o.whenFalseOnce(
                      e.view.defaultsFromMap,
                      "isHeightModelInfoSearching",
                      function() {
                        var i = l.rejectLayerError(
                          e.layer,
                          e.view.heightModelInfo,
                          e.supportsHeightUnitConversion
                        );
                        i ? r(i) : t();
                      }
                    );
                  });
                }),
                i([a.property()], t.prototype, "view", void 0),
                i([a.subclass("esri.views.3d.layers.LayerView3D")], t)
              );
            })(a.declared(s));
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
    2042: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(5), r(0), r(10), r(1), r(2011), r(2025), r(220)]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a, l, s) {
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
                  var r = s.checkIfTileInfoSupportedForView(
                    e,
                    t,
                    this.view.spatialReference,
                    this.view.basemapTerrain.manifold
                  );
                  if (r) {
                    var i = { layer: this.layer, error: r },
                      o = void 0;
                    switch (r.name) {
                      case "tilingscheme:local-gcs-not-supported":
                        o = new n(
                          "layerview:local-gcs-not-supported",
                          "Geographic coordinate systems are not supported in local scenes",
                          i
                        );
                        break;
                      case "tilingscheme:spatial-reference-mismatch":
                      case "tilingscheme:global-unsupported-spatial-reference":
                        o = new n(
                          "layerview:spatial-reference-incompatible",
                          "The spatial reference of this layer does not meet the requirements of the view",
                          i
                        );
                        break;
                      default:
                        o = new n(
                          "layerview:tiling-scheme-unsupported",
                          "The tiling scheme of this layer is not supported by SceneView",
                          i
                        );
                    }
                    return o;
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
                  [o.property({ readOnly: !0 })],
                  t.prototype,
                  "imageFormatIsOpaque",
                  null
                ),
                i(
                  [o.property(l.updatingPercentage)],
                  t.prototype,
                  "updatingPercentage",
                  void 0
                ),
                i(
                  [o.property(l.updatingPercentageValue)],
                  t.prototype,
                  "updatingPercentageValue",
                  void 0
                ),
                i([o.property()], t.prototype, "fullExtent", void 0),
                i(
                  [
                    o.property({
                      readOnly: !0,
                      dependsOn: ["fullOpacity", "imageFormatIsOpaque"]
                    })
                  ],
                  t.prototype,
                  "isOpaque",
                  null
                ),
                i([o.property()], t.prototype, "layer", void 0),
                i([o.property()], t.prototype, "minDataLevel", void 0),
                i([o.property()], t.prototype, "maxDataLevel", void 0),
                i([o.property()], t.prototype, "tileInfo", void 0),
                i([o.subclass("esri.views.3d.layers.TiledLayerView3D")], t)
              );
            })(o.declared(a));
          }.apply(null, i)) || (e.exports = n);
    },
    2082: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(315), r(10), r(9), r(139)]),
        void 0 ===
          (n = function(e, t, r, i, n, o) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.checkArcGISServiceVersionCompatibility = function(e) {
                if (!o.isHostedAgolService(e.url)) {
                  if (e.version < 10.22) {
                    var t = new i(
                      "layerview:service-version-too-old",
                      "Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: " +
                        e.version,
                      { minVersion: 10.22, detectedVersion: e.version }
                    );
                    return n.reject(t);
                  }
                  if (
                    10.22 !== e.version ||
                    o.isHostedSecuredProxyService(e.url, e.get("portalItem.id"))
                  )
                    return n.resolve();
                  var a = (function(e) {
                      var t = null,
                        r = e.search(/\/rest\/services\//i);
                      return r > 0 && (t = e.substring(0, r + 6)), t;
                    })(e.url),
                    l = new i(
                      "tiledlayerview3d:service-missing-cors-patch",
                      "Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied."
                    );
                  return r(a + "self?f=json", {
                    headers: { "X-Requested-With": null },
                    timeout: 1e4,
                    handleAs: "json"
                  })
                    .then(function(e) {
                      if (!e || e.error) throw l;
                    })
                    .catch(function() {
                      throw l;
                    });
                }
              }),
              (t.throwIfError = function(e) {
                if (e) throw e;
              });
          }.apply(null, i)) || (e.exports = n);
    },
    446: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(0),
        r(9),
        r(26),
        r(1),
        r(2042),
        r(2082),
        r(220),
        r(2008)
      ]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a, l, s, p, u) {
            return (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, "formatIsTransparent", {
                  get: function() {
                    return "jpg" !== this.get("layer.tileInfo.format");
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.initialize = function() {
                  var e = this,
                    t = this._getTileInfoSupportError(
                      this.tileInfo,
                      this.layer.fullExtent
                    );
                  if (t) this.addResolvingPromise(n.reject(t));
                  else {
                    var r = o
                      .whenTrueOnce(
                        this.view,
                        "basemapTerrain.tilingSchemeLocked"
                      )
                      .then(function() {
                        var t = e.view.basemapTerrain.tilingScheme;
                        s.throwIfError(
                          e._getTileInfoCompatibilityError(e.tileInfo, t)
                        );
                      });
                    this.addResolvingPromise(r);
                  }
                  this.addResolvingPromise(
                    s.checkArcGISServiceVersionCompatibility(this.layer)
                  ),
                    this._updateMinMaxDataLevel(),
                    (this.maxDataLevel = Math.min(
                      this.maxDataLevel,
                      p.getKnownTiledServiceLevelCap(this.layer.url)
                    ));
                }),
                (t.prototype.doRefresh = function() {
                  this.suspended || this.emit("data-changed");
                }),
                i(
                  [
                    a.property({
                      readOnly: !0,
                      dependsOn: ["layer.tileInfo.format"]
                    })
                  ],
                  t.prototype,
                  "formatIsTransparent",
                  null
                ),
                i(
                  [a.property({ aliasOf: "layer.fullExtent" })],
                  t.prototype,
                  "fullExtent",
                  void 0
                ),
                i([a.property()], t.prototype, "layer", void 0),
                i(
                  [a.property({ aliasOf: "layer.tileInfo" })],
                  t.prototype,
                  "tileInfo",
                  void 0
                ),
                i([a.subclass("esri.views.3d.layers.TileLayerView3D")], t)
              );
            })(a.declared(l, u));
          }.apply(null, i)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/TileLayerView3D": 446,
      "esri/views/layers/LayerView": 2006,
      "esri/views/layers/RefreshableLayerView": 2008,
      "esri/views/3d/layers/LayerView3D": 2011,
      "esri/views/3d/layers/support/layerViewUpdatingProperties": 2025,
      "esri/views/3d/layers/TiledLayerView3D": 2042,
      "esri/views/3d/layers/support/tiledLayerUtils": 2082
    });
  })();
