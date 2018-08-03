(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    2006: function(e, t, i) {
      var r, n;
      (r = [
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
          (n = function(e, t, i, r, n, s, o, a, l, p, u, h) {
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
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(t) {
                      if ("layerview:create-error" !== t.name) {
                        var i = (e.layer && e.layer.id) || "no id",
                          r = (e.layer && e.layer.title) || "no title";
                        return (
                          l
                            .getLogger(e.declaredClass)
                            .error(
                              "#resolve()",
                              "Failed to resolve layer view (layer title: '" +
                                r +
                                "', id: '" +
                                i +
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
                r([h.property()], t.prototype, "layer", void 0),
                r([h.property()], t.prototype, "parent", void 0),
                r(
                  [
                    h.property({
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
                r(
                  [
                    h.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                r([h.property()], t.prototype, "view", void 0),
                r(
                  [h.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                r(
                  [
                    h.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                r([h.subclass("esri.views.layers.LayerView")], t)
              );
            })(h.declared(n, s, a, p));
          }.apply(null, r)) || (e.exports = n);
    },
    2011: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2), i(0), i(9), i(26), i(1), i(416), i(2006)]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, l) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.supportsHeightUnitConversion = !1), t;
              }
              return (
                i(t, e),
                (t.prototype.postscript = function(e) {
                  this.inherited(arguments),
                    a.mayHaveHeightModelInfo(this.layer) &&
                      this.addResolvingPromise(this._validateHeightModelInfo());
                }),
                (t.prototype._validateHeightModelInfo = function() {
                  var e = this;
                  return n.create(function(t, i) {
                    s.whenFalseOnce(
                      e.view.defaultsFromMap,
                      "isHeightModelInfoSearching",
                      function() {
                        var r = a.rejectLayerError(
                          e.layer,
                          e.view.heightModelInfo,
                          e.supportsHeightUnitConversion
                        );
                        r ? i(r) : t();
                      }
                    );
                  });
                }),
                r([o.property()], t.prototype, "view", void 0),
                r([o.subclass("esri.views.3d.layers.LayerView3D")], t)
              );
            })(o.declared(l));
          }.apply(null, r)) || (e.exports = n);
    },
    2027: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(9), i(37), i(312)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.toViewIfLocal = function(e) {
                var t = e.view.spatialReference,
                  s = e.layer.fullExtent,
                  o = s && s.spatialReference;
                return o
                  ? o.equals(t)
                    ? i.resolve(s.clone())
                    : r.canProject(o, t)
                      ? i.resolve(r.project(s, t))
                      : e.view.state.isLocal
                        ? n
                            .projectGeometry(s, t, e.layer.portalItem)
                            .then(function(t) {
                              if (!e.destroyed && t) return t;
                            })
                            .catch(function() {
                              return null;
                            })
                        : i.resolve(null)
                  : i.resolve(null);
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2033: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            function i(e, t) {
              if (!e || e.symbol) return null;
              var i = t.renderer;
              return e && i && i.getObservationRenderer
                ? i.getObservationRenderer(e)
                : i;
            }
            function r(e, t) {
              if (e.symbol) return e.symbol;
              var r = i(e, t);
              return r && r.getSymbol(e, t);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getRenderer = i),
              (t.getSymbol = r),
              (t.getRenderingInfo = function(e, t) {
                var n = i(e, t),
                  s = r(e, t);
                if (!s) return null;
                var o = { renderer: n, symbol: s };
                if (n) {
                  if (
                    (n.colorInfo && (o.color = n.getColor(e).toRgba()),
                    n.sizeInfo)
                  ) {
                    var a = n.getSize(e);
                    o.size = [a, a, a];
                  }
                  if (n.visualVariables) {
                    a = ["proportional", "proportional", "proportional"];
                    for (
                      var l = 0, p = n.getVisualVariableValues(e, t);
                      l < p.length;
                      l++
                    ) {
                      var u = p[l],
                        h = u.variable,
                        d = u.value;
                      if ("color" === h.type) o.color = d.toRgba();
                      else if ("size" === h.type)
                        if ("outline" === h.target) o.outlineSize = d;
                        else {
                          var c = h.axis,
                            y = h.useSymbolValue ? "symbolValue" : d;
                          "width" === c
                            ? (a[0] = y)
                            : "depth" === c
                              ? (a[1] = y)
                              : "height" === c
                                ? (a[2] = y)
                                : (a[0] = a[1] =
                                    "width-and-depth" === c ? y : (a[2] = y));
                        }
                      else
                        "opacity" === h.type
                          ? (o.opacity = d)
                          : "rotation" === h.type && "tilt" === h.axis
                            ? (o.tilt = d)
                            : "rotation" === h.type && "roll" === h.axis
                              ? (o.roll = d)
                              : "rotation" === h.type && (o.heading = d);
                    }
                    (isFinite(a[0]) || isFinite(a[1]) || isFinite(a[2])) &&
                      (o.size = a);
                  }
                }
                return o;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2047: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
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
                (e.prototype.addRenderGeometry = function(e, t, i) {
                  this.items.push({
                    type: "renderGeometry",
                    highlightId: i,
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
                    var i = this.items[t];
                    i.highlightId === e &&
                      (this.removeHighlight(i), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeObject = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var i = this.items[t];
                    "object" === i.type &&
                      i.object === e &&
                      (this.removeHighlight(i), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeRenderGeometry = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var i = this.items[t];
                    "renderGeometry" === i.type &&
                      i.renderGeometry === e &&
                      (this.removeHighlight(i), this.items.splice(t, 1));
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
          }.apply(null, r)) || (e.exports = n);
    },
    2064: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(3),
        i(17),
        i(26),
        i(1),
        i(60),
        i(792)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, l, p) {
            var u = -0.3 * l.earthRadius;
            return (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t.suspended = !0),
                  (t._frustumVisibilityDirty = !0),
                  (t.extent = null),
                  (t.extentIntersectionDirty = !0),
                  (t._isVisibleBelowSurface = !1),
                  (t.handles = new s()),
                  (t.layerView = null),
                  t
                );
              }
              return (
                i(t, e),
                Object.defineProperty(t.prototype, "frustumVisibilityDirty", {
                  get: function() {
                    return this._frustumVisibilityDirty;
                  },
                  set: function(e) {
                    e !== this._frustumVisibilityDirty &&
                      ((this._frustumVisibilityDirty = e),
                      this.notifyChange("updating"));
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return this.frustumVisibilityDirty;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.setup = function(e) {
                  var t = this;
                  (this.layerView = e),
                    (this.extentIntersection = new p.FrustumExtentIntersection({
                      renderCoordsHelper: e.view.renderCoordsHelper
                    }));
                  var i = e.view,
                    r = i.basemapTerrain;
                  this.handles.add([
                    i.on("resize", function() {
                      return t.viewChange();
                    }),
                    i.state.watch(
                      "camera",
                      function() {
                        return t.viewChange();
                      },
                      !0
                    ),
                    r.on("elevation-bounds-change", function() {
                      return t.elevationBoundsChange();
                    })
                  ]),
                    "local" === i.viewingMode
                      ? (this.isVisibleBelowSurface = !0)
                      : this.handles.add(
                          o.init(r, ["opacity", "wireframe"], function() {
                            return (t.isVisibleBelowSurface = r.isSeeThrough());
                          })
                        );
                }),
                (t.prototype.destroy = function() {
                  (this.layerView = null),
                    (this.extent = null),
                    (this.extentIntersection = null),
                    this.handles &&
                      (this.handles.destroy(), (this.handles = null));
                }),
                (t.prototype.needsIdleUpdate = function() {
                  return this.frustumVisibilityDirty;
                }),
                (t.prototype.setExtent = function(e) {
                  (this.extent = e),
                    (this.extentIntersectionDirty = !0),
                    (this.frustumVisibilityDirty = !0);
                }),
                (t.prototype.viewChange = function() {
                  this.frustumVisibilityDirty = !0;
                }),
                (t.prototype.elevationBoundsChange = function() {
                  (this.frustumVisibilityDirty = !0),
                    (this.extentIntersectionDirty = !0);
                }),
                Object.defineProperty(t.prototype, "isVisibleBelowSurface", {
                  set: function(e) {
                    (this._isVisibleBelowSurface = e),
                      (this.frustumVisibilityDirty = !0),
                      (this.extentIntersectionDirty = !0);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.idleUpdate = function(e) {
                  e.done() ||
                    (this.frustumVisibilityDirty &&
                      (this.updateSuspendFrustumVisible(),
                      (this.frustumVisibilityDirty = !1)));
                }),
                (t.prototype.updateExtentIntersection = function() {
                  if (this.extentIntersectionDirty) {
                    this.extentIntersectionDirty = !1;
                    var e,
                      t = this.layerView.view;
                    if (this._isVisibleBelowSurface) e = u;
                    else {
                      var i = t.basemapTerrain.getElevationBounds(),
                        r = i[0],
                        n = i[1];
                      e = r - Math.max(1, (n - r) * (1.2 - 1));
                    }
                    this.extentIntersection.update(
                      this.extent,
                      t.spatialReference,
                      e
                    );
                  }
                }),
                (t.prototype.updateSuspendFrustumVisible = function() {
                  if (this.extent) {
                    this.updateExtentIntersection();
                    var e = this.layerView.view.frustum;
                    this._set(
                      "suspended",
                      !this.extentIntersection.isVisibleInFrustum(e)
                    );
                  } else this._set("suspended", !1);
                }),
                r(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "suspended",
                  void 0
                ),
                r(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "updating",
                  null
                ),
                r(
                  [
                    a.subclass(
                      "esri.views.3d.layers.graphics.Graphics3DFrustumVisibility"
                    )
                  ],
                  t
                )
              );
            })(a.declared(n));
          }.apply(null, r)) || (e.exports = n);
    },
    2065: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2066)]),
        void 0 ===
          (n = function(e, t, i) {
            return (function() {
              function e() {
                (this.graphicsCore = null), (this.highlights = []);
              }
              return (
                (e.prototype.destroy = function() {
                  this.highlights.forEach(function(e) {
                    return e.highlightSet.removeAll();
                  }),
                    (this.highlights = null);
                }),
                (e.prototype.setup = function(e) {
                  this.graphicsCore = e;
                }),
                (e.prototype.acquireSet = function(e, t) {
                  var r = this,
                    n = new i(e, t);
                  return (
                    this.highlights.push(n),
                    {
                      set: n,
                      handle: {
                        remove: function() {
                          return r.releaseSet(n);
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
                (e.prototype.setUids = function(e, t) {
                  var i = this.graphicsCore.graphics;
                  t.forEach(function(t) {
                    e.ids.add(t);
                    var r = i[t];
                    r && r.addHighlight(e.highlightSet, e.options);
                  });
                }),
                (e.prototype.setObjectIds = function(e, t) {
                  var i = this.graphicsCore.graphics;
                  for (var r in (t.forEach(function(t) {
                    return e.ids.add(t);
                  }),
                  i)) {
                    var n = i[r];
                    n &&
                      e.hasGraphic(n) &&
                      n.addHighlight(e.highlightSet, e.options);
                  }
                }),
                (e.prototype.graphicCreated = function(e) {
                  this.highlights.forEach(function(t) {
                    t.hasGraphic(e) &&
                      e.addHighlight(t.highlightSet, t.options);
                  });
                }),
                (e.prototype.graphicDeleted = function(e) {
                  this.highlights.forEach(function(t) {
                    t.hasGraphic(e) && e.removeHighlight(t.highlightSet);
                  });
                }),
                (e.prototype.allGraphicsDeleted = function() {
                  this.highlights.forEach(function(e) {
                    return e.highlightSet.removeAll();
                  });
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2066: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2047)]),
        void 0 ===
          (n = function(e, t, i) {
            return (function() {
              function e(e, t) {
                (this.highlightSet = new i()),
                  (this.ids = new Set()),
                  (this.options = e),
                  (this.objectIdField = t);
              }
              return (
                (e.prototype.hasGraphic = function(e) {
                  if (this.objectIdField) {
                    var t = e.graphic.attributes[this.objectIdField];
                    return this.ids.has(t);
                  }
                  return this.ids.has(e.graphic.uid);
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2067: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.attributeLookup = function(e, t) {
                for (
                  var i = t.toLowerCase(), r = 0, n = Object.keys(e);
                  r < n.length;
                  r++
                ) {
                  var s = n[r];
                  if (s.toLowerCase() === i) return e[s];
                }
                return null;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2095: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(43),
        i(3),
        i(24),
        i(17),
        i(9),
        i(26),
        i(1),
        i(37),
        i(135),
        i(427),
        i(801),
        i(803),
        i(2064),
        i(2065),
        i(804),
        i(805),
        i(56),
        i(2067)
      ]),
        void 0 ===
          (n = function(
            e,
            t,
            i,
            r,
            n,
            s,
            o,
            a,
            l,
            p,
            u,
            h,
            d,
            c,
            y,
            g,
            f,
            v,
            b,
            m,
            w,
            x
          ) {
            var E = (function(e) {
                function t(t) {
                  var i = e.call(this) || this;
                  return (
                    (i._handles = new a()),
                    (i.highlights = new v()),
                    (i.suspendResumeExtentMode = "computed"),
                    (i.dataExtent = null),
                    (i.suspendResumeExtent = null),
                    i
                  );
                }
                return (
                  i(t, e),
                  Object.defineProperty(t.prototype, "suspended", {
                    get: function() {
                      return (
                        (this.scaleVisibility &&
                          this.scaleVisibility.suspended) ||
                        (this.frustumVisibility &&
                          this.frustumVisibility.suspended)
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "updating", {
                    get: function() {
                      return !!(
                        (this.graphicsCore && this.graphicsCore.updating) ||
                        (this.frustumVisibility &&
                          this.frustumVisibility.updating) ||
                        (this.scaleVisibility && this.scaleVisibility.updating)
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.normalizeCtorArgs = function(e) {
                    var t =
                        !e.queryGraphicUIDsInExtent &&
                        (e.scaleVisibilityEnabled ||
                          e.elevationAlignmentEnabled)
                          ? new m({
                              spatialReference: e.owner.view.spatialReference
                            })
                          : null,
                      i = e.frustumVisibilityEnabled ? new f() : null,
                      r = e.scaleVisibilityEnabled ? new b() : null,
                      n = e.elevationAlignmentEnabled ? new g() : null,
                      s = new y({
                        owner: e.owner,
                        layer: e.layer,
                        asyncUpdates: e.asyncGraphicsUpdates,
                        basemapTerrain: e.owner.view.basemapTerrain,
                        elevationFeatureExpressionEnabled:
                          e.elevationFeatureExpressionEnabled
                      }),
                      o = e.updateClippingExtent,
                      a = e.queryGraphicUIDsInExtent,
                      l = e.suspendResumeExtentMode,
                      p = e.dataExtent;
                    return {
                      graphicsCore: s,
                      frustumVisibility: i,
                      scaleVisibility: r,
                      elevationAlignment: n,
                      spatialIndex: t,
                      updateClippingExtent: o,
                      suspendResumeExtentMode: l,
                      dataExtent: p,
                      queryGraphicUIDsInExtent:
                        a ||
                        function(e, i, r) {
                          return t.queryGraphicUIDsInExtent(e, i, r);
                        }
                    };
                  }),
                  (t.prototype.initialize = function() {
                    var e = this;
                    this.scaleVisibility &&
                      this._handles.add(
                        this.layer.watch(["minScale", "maxScale"], function() {
                          return e.scaleVisibility.layerMinMaxScaleChangeHandler();
                        })
                      ),
                      this.elevationAlignment &&
                        this._handles.add(
                          this.layer.watch("elevationInfo", function() {
                            return e.graphicsCore.elevationInfoChange();
                          })
                        ),
                      this.graphicsCore &&
                        (this._handles.add(
                          this.layer.watch("labelsVisible", function() {
                            return e.graphicsCore.updateVisibilityInfo();
                          })
                        ),
                        this._handles.add(
                          this.layer.watch("labelingInfo", function() {
                            return e.graphicsCore.updateLabelingInfo();
                          })
                        )),
                      (this.idleClients = [
                        this.frustumVisibility,
                        this.scaleVisibility,
                        this.elevationAlignment,
                        this.graphicsCore
                      ]);
                  }),
                  (t.prototype.setup = function() {
                    var e = this;
                    this.frustumVisibility &&
                      this.frustumVisibility.setup(this.owner);
                    var t = this.owner.view.basemapTerrain,
                      i = this.owner.view.elevationProvider;
                    return (
                      this.scaleVisibility &&
                        this.scaleVisibility.setup(
                          this.owner,
                          this.layer,
                          this.queryGraphicUIDsInExtent,
                          this.graphicsCore,
                          t
                        ),
                      this.elevationAlignment &&
                        this.elevationAlignment.setup(
                          this.owner,
                          this.queryGraphicUIDsInExtent,
                          this.graphicsCore,
                          i
                        ),
                      this.highlights &&
                        this.highlights.setup(this.graphicsCore),
                      this._set(
                        "labeling",
                        this.owner.view.labeler.addGraphicsOwner(
                          this.graphicsCore,
                          this.scaleVisibility,
                          this.spatialIndex
                        )
                      ),
                      this.graphicsCore.setup({
                        elevationAlignment: this.elevationAlignment,
                        scaleVisibility: this.scaleVisibility,
                        spatialIndex: this.spatialIndex,
                        labeling: this.labeling,
                        highlights: this.highlights
                      }),
                      this._handles.add([
                        this.layer.watch("renderer", function(t) {
                          return e.graphicsCore.rendererChange(t);
                        }),
                        this.owner.watch("fullOpacity", function() {
                          return e.graphicsCore.opacityChange();
                        })
                      ]),
                      this._handles.add(
                        this.layer.on("graphic-update", function(t) {
                          return e.graphicsCore.graphicUpdateHandler(t);
                        })
                      ),
                      this.setupSuspendResumeExtent(),
                      this._handles.add(
                        this.owner.view.resourceController.registerIdleFrameWorker(
                          {
                            needsUpdate: function() {
                              return e.needsIdleUpdate();
                            },
                            idleFrame: function(t) {
                              return e.idleUpdate(t);
                            }
                          }
                        )
                      ),
                      this.updateClippingExtent &&
                        (this._handles.add(
                          this.owner.view.watch("clippingArea", function() {
                            return e._updateClippingExtent();
                          })
                        ),
                        this._updateClippingExtent()),
                      this.graphicsCore.labelsEnabled
                        ? this.graphicsCore.updateLabelingInfo()
                        : l.resolve()
                    );
                  }),
                  (t.prototype.destroy = function() {
                    this._handles &&
                      (this._handles.destroy(), (this._handles = null)),
                      this.frustumVisibility &&
                        (this.frustumVisibility.destroy(),
                        this._set("frustumVisibility", null)),
                      this.scaleVisibility &&
                        (this.scaleVisibility.destroy(),
                        this._set("scaleVisibility", null)),
                      this.elevationAlignment &&
                        (this.elevationAlignment.destroy(),
                        this._set("elevationAlignment", null)),
                      this.graphicsCore &&
                        (this.graphicsCore.destroy(),
                        this._set("graphicsCore", null)),
                      this.spatialIndex &&
                        (this.spatialIndex.destroy(),
                        this._set("spatialIndex", null)),
                      this.highlights &&
                        (this.highlights.destroy(),
                        this._set("highlights", null)),
                      this._set("layer", null),
                      this._set("owner", null);
                  }),
                  (t.prototype.highlight = function(e, t, i) {
                    var r = this;
                    if (e instanceof d) {
                      var s = this.highlights.acquireSet(t, i),
                        a = s.set,
                        l = s.handle;
                      return (
                        this.owner.queryObjectIds(e).then(function(e) {
                          return r.highlights.setObjectIds(a, e);
                        }),
                        l
                      );
                    }
                    if ("number" == typeof e) return this.highlight([e], t, i);
                    if (e instanceof n) return this.highlight([e], t, i);
                    if (
                      (e instanceof o && (e = e.toArray()),
                      Array.isArray(e) && e.length > 0)
                    ) {
                      if (e[0] instanceof n) {
                        var p = e;
                        if (
                          !i ||
                          !p[0].attributes ||
                          null === x.attributeLookup(p[0].attributes, i)
                        ) {
                          var u = p.map(function(e) {
                              return e.uid;
                            }),
                            h = this.highlights.acquireSet(t, null),
                            c = h.set;
                          l = h.handle;
                          return this.highlights.setUids(c, u), l;
                        }
                        e = p.map(function(e) {
                          return x.attributeLookup(e.attributes, i);
                        });
                      }
                      if ("number" == typeof e[0]) {
                        var y = e,
                          g = this.highlights.acquireSet(t, i);
                        (c = g.set), (l = g.handle);
                        return this.highlights.setObjectIds(c, y), l;
                      }
                    }
                    return { remove: function() {} };
                  }),
                  (t.prototype.needsIdleUpdate = function() {
                    for (var e = 0, t = this.idleClients; e < t.length; e++) {
                      var i = t[e];
                      if (i && i.needsIdleUpdate()) return !0;
                    }
                    return !1;
                  }),
                  (t.prototype.idleUpdate = function(e) {
                    for (var t = 0, i = this.idleClients; t < i.length; t++) {
                      var r = i[t];
                      r && r.idleUpdate(e);
                    }
                  }),
                  (t.prototype._updateClippingExtent = function() {
                    var e = this.owner.view.clippingArea;
                    this.graphicsCore.setClippingExtent(
                      e,
                      this.owner.view.spatialReference
                    ) &&
                      (this.updateClippingExtent(e) ||
                        this.graphicsCore.recreateAllGraphics());
                  }),
                  (t.prototype.setupSuspendResumeExtent = function() {
                    var e = this;
                    (this.frustumVisibility || this.scaleVisibility) &&
                      this._handles.add(
                        p.init(this, "suspendResumeExtentMode", function(t) {
                          switch (
                            (e._handles.remove(C), e.suspendResumeExtentMode)
                          ) {
                            case "computed":
                              e._handles.add(
                                p.init(
                                  e.graphicsCore,
                                  "computedExtent",
                                  function(t) {
                                    return e.updateSuspendResumeExtent(t);
                                  }
                                ),
                                C
                              );
                              break;
                            case "data":
                              e._handles.add(
                                p.init(e, "dataExtent", function(t) {
                                  return e.updateSuspendResumeExtent(t);
                                }),
                                C
                              );
                              break;
                            default:
                              e.suspendResumeExtentMode;
                          }
                        })
                      );
                  }),
                  (t.prototype.updateSuspendResumeExtent = function(e) {
                    e
                      ? this.suspendResumeExtentChanged(
                          this.extentToSuspendResumeRect(
                            e,
                            this.suspendResumeExtent
                          )
                        )
                      : this.suspendResumeExtentChanged(null);
                  }),
                  (t.prototype.extentToSuspendResumeRect = function(e, t) {
                    var i = this.owner.view.spatialReference;
                    if (!e.spatialReference.equals(i)) {
                      if (!h.canProject(e, i)) return;
                      e = h.project(e, i);
                    }
                    return w.enlargeExtent(
                      e,
                      t,
                      c.SUSPEND_RESUME_EXTENT_OPTIMISM
                    );
                  }),
                  (t.prototype.suspendResumeExtentChanged = function(e) {
                    this.frustumVisibility &&
                      this.frustumVisibility.setExtent(e),
                      this.scaleVisibility && this.scaleVisibility.setExtent(e);
                  }),
                  r(
                    [u.property({ aliasOf: "graphicsCore.layer" })],
                    t.prototype,
                    "layer",
                    void 0
                  ),
                  r(
                    [u.property({ aliasOf: "graphicsCore.owner" })],
                    t.prototype,
                    "owner",
                    void 0
                  ),
                  r(
                    [u.property({ constructOnly: !0 })],
                    t.prototype,
                    "updateClippingExtent",
                    void 0
                  ),
                  r(
                    [u.property({ constructOnly: !0 })],
                    t.prototype,
                    "queryGraphicUIDsInExtent",
                    void 0
                  ),
                  r(
                    [u.property({ constructOnly: !0 })],
                    t.prototype,
                    "graphicsCore",
                    void 0
                  ),
                  r(
                    [u.property({ constructOnly: !0 })],
                    t.prototype,
                    "spatialIndex",
                    void 0
                  ),
                  r(
                    [u.property({ constructOnly: !0 })],
                    t.prototype,
                    "scaleVisibility",
                    void 0
                  ),
                  r(
                    [u.property({ constructOnly: !0 })],
                    t.prototype,
                    "elevationAlignment",
                    void 0
                  ),
                  r(
                    [u.property({ constructOnly: !0 })],
                    t.prototype,
                    "frustumVisibility",
                    void 0
                  ),
                  r(
                    [u.property({ readOnly: !0 })],
                    t.prototype,
                    "labeling",
                    void 0
                  ),
                  r(
                    [u.property({ readOnly: !0 })],
                    t.prototype,
                    "highlights",
                    void 0
                  ),
                  r(
                    [u.property()],
                    t.prototype,
                    "suspendResumeExtentMode",
                    void 0
                  ),
                  r([u.property()], t.prototype, "dataExtent", void 0),
                  r(
                    [
                      u.property({
                        readOnly: !0,
                        dependsOn: [
                          "scaleVisibility.suspended",
                          "frustumVisibility.suspended"
                        ]
                      })
                    ],
                    t.prototype,
                    "suspended",
                    null
                  ),
                  r(
                    [
                      u.property({
                        readOnly: !0,
                        dependsOn: [
                          "graphicsCore.updating",
                          "frustumVisibility.updating",
                          "scaleVisibility.updating"
                        ]
                      })
                    ],
                    t.prototype,
                    "updating",
                    null
                  ),
                  r(
                    [
                      u.subclass(
                        "esri.views.3d.layers.graphics.Graphics3DFeatureLikeLayerView"
                      )
                    ],
                    t
                  )
                );
              })(u.declared(s)),
              C = "suspendResumeExtentMode";
            return E;
          }.apply(null, r)) || (e.exports = n);
    },
    2096: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.stats = function(e, t) {
                var i = t.graphics3DGraphics,
                  r = "null",
                  n = e.suspendResumeExtent;
                n &&
                  (r = [n[0], n[1], n[2], n[3]]
                    .map(function(e) {
                      return e.toPrecision(4);
                    })
                    .join(", "));
                var s = "null",
                  o = t.computedExtent;
                return (
                  o &&
                    (s = [o.xmin, o.ymin, o.xmax, o.ymax]
                      .map(function(e) {
                        return e.toPrecision(4);
                      })
                      .join(", ")),
                  {
                    numCollection: e.loadedGraphics.length,
                    numGraphics: Object.keys(i).length,
                    graphicsUpdating: t.updating,
                    resumeExtent: r,
                    computedExtent: s,
                    updating: e.updating,
                    suspended: e.suspended
                  }
                );
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2133: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(109),
        i(110),
        i(10),
        i(9),
        i(26),
        i(1),
        i(85),
        i(794),
        i(2033),
        i(2011),
        i(2095),
        i(2096),
        i(2027)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, l, p, u, h, d, c, y, g, f) {
            return (function(e) {
              function t(t) {
                var i = e.call(this) || this;
                return (
                  (i.controller = null),
                  (i.asyncGraphicsUpdates = !1),
                  (i.suspendResumeExtentMode = "computed"),
                  (i.supportsDraping = !0),
                  (i.overlayUpdating = !1),
                  (i.fullExtentInLocalViewSpatialReference = null),
                  (i.suspendResumeExtent = null),
                  (i._queryEngine = null),
                  (i._controllerCreated = !1),
                  (i._controllerClientSideFiltering = !1),
                  (i.clippingExtent = null),
                  (i.supportsHeightUnitConversion = !0),
                  i
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this._set(
                    "graphics3d",
                    new y({
                      owner: this,
                      layer: this.layer,
                      frustumVisibilityEnabled: !0,
                      scaleVisibilityEnabled: !0,
                      elevationAlignmentEnabled: !0,
                      elevationFeatureExpressionEnabled: !0,
                      asyncGraphicsUpdates: this.asyncGraphicsUpdates,
                      suspendResumeExtentMode: this.suspendResumeExtentMode,
                      updateClippingExtent: function(t) {
                        return e.updateClippingExtent(t);
                      }
                    })
                  ),
                    this.handles.add([
                      this.watch("asyncGraphicsUpdates", function(t) {
                        e.graphics3d.graphicsCore.asyncUpdates = t;
                      }),
                      this.watch("suspendResumeExtentMode", function(t) {
                        e.graphics3d.suspendResumeExtentMode = t;
                      })
                    ]),
                    (this.drawingOrder = this.view.getDrawingOrder(
                      this.layer.uid
                    )),
                    this.addResolvingPromise(
                      this.graphics3d
                        .setup()
                        .then(function() {
                          return e.validateGeometryType();
                        })
                        .then(function() {
                          return f.toViewIfLocal(e);
                        })
                        .then(function(t) {
                          e.fullExtentInLocalViewSpatialReference = t;
                        })
                        .then(function() {
                          return e.initializeController();
                        })
                    ),
                    this.notifyChange("updating");
                }),
                (t.prototype.destroy = function() {
                  this.controller &&
                    (this.controller.destroy(), (this.controller = null)),
                    this.graphics3d &&
                      (this.graphics3d.destroy(),
                      this._set("graphics3d", null)),
                    (this.loadedGraphics = null);
                }),
                Object.defineProperty(t.prototype, "drawingOrder", {
                  set: function(e) {
                    this.graphics3d.graphicsCore.setDrawingOrder(e),
                      this._set("drawingOrder", e);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.getRenderingInfo = function(e) {
                  var t = d.getRenderingInfo(e, {
                    renderer: this.layer.renderer
                  });
                  if (t && t.color) {
                    var i = t.color;
                    (i[0] = i[0] / 255),
                      (i[1] = i[1] / 255),
                      (i[2] = i[2] / 255);
                  }
                  return t;
                }),
                (t.prototype.getGraphicFromGraphicUid = function(e) {
                  var t = this,
                    i = null;
                  return (
                    this.loadedGraphics &&
                      this.loadedGraphics.some(function(r) {
                        return (
                          r.uid === e &&
                          ((i = u.hydrateGraphic(r, t.layer)), !0)
                        );
                      }),
                    a.create(function(e, t) {
                      null !== i ? e(i) : t();
                    })
                  );
                }),
                Object.defineProperty(t.prototype, "graphics3DGraphics", {
                  get: function() {
                    return this.graphics3d
                      ? this.graphics3d.graphicsCore.graphics3DGraphics
                      : null;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "graphics3DGraphicsKeys", {
                  get: function() {
                    return this.graphics3d
                      ? this.graphics3d.graphicsCore.graphics3DGraphicsKeys
                      : null;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "symbolUpdateType", {
                  get: function() {
                    return this.graphics3d
                      ? this.graphics3d.graphicsCore.symbolUpdateType
                      : null;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.whenGraphicBounds = function(e, t) {
                  return this.graphics3d
                    ? this.graphics3d.graphicsCore.whenGraphicBounds(e, t)
                    : null;
                }),
                (t.prototype.queryFeatures = function(e) {
                  return this._queryEngine
                    ? this._queryEngine.queryFeatures(e)
                    : this._rejectQuery();
                }),
                (t.prototype.queryObjectIds = function(e) {
                  return this._queryEngine
                    ? this._queryEngine.queryObjectIds(e)
                    : this._rejectQuery();
                }),
                (t.prototype.queryFeatureCount = function(e) {
                  return this._queryEngine
                    ? this._queryEngine.queryFeatureCount(e)
                    : this._rejectQuery();
                }),
                (t.prototype.queryExtent = function(e) {
                  return this._queryEngine
                    ? this._queryEngine.queryExtent(e)
                    : this._rejectQuery();
                }),
                (t.prototype.highlight = function(e, t) {
                  return this.graphics3d.highlight(
                    e,
                    t,
                    this.layer.objectIdField
                  );
                }),
                (t.prototype.getStats = function() {
                  var e = g.stats(this, this.graphics3d.graphicsCore);
                  return (
                    (e.elevationUpdating = this.graphics3d.elevationAlignment.updating),
                    (e.visibilityFrustum = !this.graphics3d.frustumVisibility
                      .suspended),
                    (e.visibilityScale = !this.graphics3d.scaleVisibility
                      .suspended),
                    e
                  );
                }),
                (t.prototype.canResume = function() {
                  return !(
                    !this.inherited(arguments) ||
                    (this.graphics3d && this.graphics3d.suspended)
                  );
                }),
                (t.prototype.isUpdating = function() {
                  return (
                    !(!this.graphics3d || this.graphics3d.destroyed) &&
                    (!this._controllerCreated ||
                      (this.controller && this.controller.updating) ||
                      this.overlayUpdating ||
                      !(
                        this.view.basemapTerrain &&
                        this.view.basemapTerrain.ready
                      ) ||
                      this.graphics3d.updating)
                  );
                }),
                (t.prototype.initializeController = function() {
                  return s(this, void 0, void 0, function() {
                    var e;
                    return n(this, function(t) {
                      switch (t.label) {
                        case 0:
                          return [4, this.createController()];
                        case 1:
                          return [4, (e = t.sent()).when()];
                        case 2:
                          return (
                            t.sent(), this.setControllerWhenInitialized(e), [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.setControllerWhenInitialized = function(e) {
                  return s(this, void 0, void 0, function() {
                    return n(this, function(t) {
                      switch (t.label) {
                        case 0:
                          return t.trys.push([0, 2, , 3]), [4, this.when()];
                        case 1:
                          return t.sent(), [3, 3];
                        case 2:
                          return t.sent(), [3, 3];
                        case 3:
                          return (
                            (this._controllerCreated = !0),
                            this.notifyChange("updating"),
                            this.isResolved()
                              ? [
                                  4,
                                  l.whenTrueOnce(
                                    this.view,
                                    "basemapTerrain.ready"
                                  )
                                ]
                              : [2]
                          );
                        case 4:
                          return (
                            t.sent(),
                            (this.controller = e),
                            (this.loadedGraphics = e.graphics),
                            (this._queryEngine = new h({
                              layer: this.layer,
                              features: this.loadedGraphics,
                              objectIdField: this.layer.objectIdField,
                              dataSpatialReference: this.view.spatialReference
                            })),
                            this.notifyChange("updating"),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.updateClippingExtent = function(e) {
                  if (((this.clippingExtent = e), !this.controller)) return !1;
                  switch (this.controller.type) {
                    case "memory":
                    case "stream":
                      return !1;
                    case "snapshot":
                      return (
                        !this._controllerClientSideFiltering &&
                        (this.controller.extent
                          ? ((this.controller.extent = null),
                            (this._controllerClientSideFiltering = !0),
                            !0)
                          : ((this.controller.extent = e), !0))
                      );
                    case "feature-tile-3d":
                      return (this.controller.extent = e), !0;
                  }
                }),
                (t.prototype.validateGeometryType = function() {
                  var e = this.layer;
                  switch (e.geometryType) {
                    case "multipatch":
                    case "multipoint":
                      return a.reject(
                        new o(
                          "featurelayerview3d:unsupported-geometry-type",
                          "Unsupported geometry type ${geometryType}",
                          { geometryType: e.geometryType }
                        )
                      );
                  }
                }),
                (t.prototype._rejectQuery = function() {
                  return a.reject(
                    new o(
                      "featurelayerview3d:query",
                      "Not ready to execute query"
                    )
                  );
                }),
                r([p.property()], t.prototype, "loadedGraphics", void 0),
                r(
                  [p.property({ dependsOn: ["graphics3d.suspended"] })],
                  t.prototype,
                  "suspended",
                  void 0
                ),
                r(
                  [
                    p.property({
                      dependsOn: [
                        "graphics3d.updating",
                        "controller.updating",
                        "overlayUpdating"
                      ]
                    })
                  ],
                  t.prototype,
                  "updating",
                  void 0
                ),
                r([p.property()], t.prototype, "controller", void 0),
                r([p.property()], t.prototype, "graphics3d", void 0),
                r(
                  [p.property({ readOnly: !0 })],
                  t.prototype,
                  "asyncGraphicsUpdates",
                  void 0
                ),
                r(
                  [p.property({ readOnly: !0 })],
                  t.prototype,
                  "suspendResumeExtentMode",
                  void 0
                ),
                r(
                  [
                    p.property({ aliasOf: "graphics3d.graphicsCore.hasDraped" })
                  ],
                  t.prototype,
                  "hasDraped",
                  void 0
                ),
                r(
                  [p.property({ readOnly: !0, type: Boolean })],
                  t.prototype,
                  "supportsDraping",
                  void 0
                ),
                r(
                  [p.property({ type: Boolean })],
                  t.prototype,
                  "overlayUpdating",
                  void 0
                ),
                r([p.property()], t.prototype, "drawingOrder", null),
                r(
                  [p.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],
                  t
                )
              );
            })(p.declared(c));
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/layers/LayerView": 2006,
      "esri/views/3d/layers/LayerView3D": 2011,
      "esri/views/3d/layers/support/projectExtentUtils": 2027,
      "esri/renderers/support/renderingInfoUtils": 2033,
      "esri/views/3d/webgl-engine/lib/HighlightSet": 2047,
      "esri/views/3d/layers/graphics/Graphics3DFrustumVisibility": 2064,
      "esri/views/3d/layers/graphics/Graphics3DHighlights": 2065,
      "esri/views/3d/layers/graphics/Graphics3DHighlightSet": 2066,
      "esri/views/3d/layers/support/attributeUtils": 2067,
      "esri/views/3d/layers/graphics/Graphics3DFeatureLikeLayerView": 2095,
      "esri/views/3d/layers/graphics/stats": 2096,
      "esri/views/3d/layers/FeatureLikeLayerView3D": 2133
    });
  })();
