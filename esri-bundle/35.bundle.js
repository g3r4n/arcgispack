(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    1987: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(43),
        i(18),
        i(24),
        i(17),
        i(9),
        i(55),
        i(26),
        i(1),
        i(20),
        i(37),
        i(438),
        i(2019),
        i(2017),
        i(2018),
        i(779),
        i(2009),
        i(800),
        i(2008)
      ]),
        void 0 ===
          (n = function(
            e,
            t,
            i,
            r,
            n,
            o,
            a,
            s,
            h,
            l,
            p,
            d,
            u,
            c,
            y,
            f,
            v,
            g,
            w,
            m,
            _,
            b
          ) {
            var x = a.ofType(n);
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._handles = new s()),
                  (t._bitmapIndex = new Map()),
                  (t._mapImageContainer = new g()),
                  (t._featuresMap = new Map()),
                  (t.allVisiblePoints = new x()),
                  (t.allVisiblePolylines = new x()),
                  (t.allVisiblePolygons = new x()),
                  (t.allVisibleMapImages = new a()),
                  (t.container = new w()),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.hitTest = function(e, t) {
                  var i = this;
                  if (
                    this.suspended ||
                    (!this._pointsView &&
                      !this._polylinesView &&
                      !this._polygonsView)
                  )
                    return h.resolve();
                  var r = [
                    this._pointsView.hitTest(e, t),
                    this._polylinesView.hitTest(e, t),
                    this._polygonsView.hitTest(e, t)
                  ];
                  return h.all(r).then(function(e) {
                    return (
                      e.filter(function(e) {
                        return (
                          e && ((e.layer = i.layer), (e.sourceLayer = i.layer)),
                          !!e
                        );
                      })[0] || null
                    );
                  });
                }),
                (t.prototype.update = function(e) {}),
                (t.prototype.attach = function() {
                  var e = this;
                  this._handles.add(
                    this.allVisibleMapImages.on("change", function(t) {
                      t.added.forEach(function(t) {
                        return e._addMapImage(t);
                      }),
                        t.removed.forEach(function(t) {
                          return e._removeMapImage(t);
                        });
                    })
                  ),
                    this.container.addChild(this._mapImageContainer),
                    (this._polygonsView = new _({
                      view: this.view,
                      graphics: this.allVisiblePolygons
                    })),
                    this.container.addChild(this._polygonsView.container),
                    (this._polylinesView = new _({
                      view: this.view,
                      graphics: this.allVisiblePolylines
                    })),
                    this.container.addChild(this._polylinesView.container),
                    (this._pointsView = new _({
                      view: this.view,
                      graphics: this.allVisiblePoints
                    })),
                    this.container.addChild(this._pointsView.container),
                    this.watch("layer.visibleSublayers", function() {
                      return e._refreshCollections();
                    }),
                    this._fetchService();
                }),
                (t.prototype.detach = function() {
                  this._handles.removeAll(),
                    this._mapImageContainer.removeAllChildren(),
                    this.container.removeAllChildren(),
                    this._bitmapIndex.clear(),
                    (this._polygonsView.graphics = null),
                    (this._pointsView.graphics = null),
                    (this._polylinesView.graphics = null),
                    (this._pointsView = null),
                    (this._polylinesView = null),
                    (this._polygonsView = null);
                }),
                (t.prototype.moveStart = function() {}),
                (t.prototype.viewChange = function() {}),
                (t.prototype.moveEnd = function() {}),
                (t.prototype._addMapImage = function(e) {
                  var t = this;
                  this.view.spatialReference.isWGS84 &&
                    o(e.href, { responseType: "image" }).then(function(i) {
                      var r = u.fromJSON(e.extent);
                      c.canProject(r, t.view.spatialReference) &&
                        (r = c.project(r, t.view.spatialReference));
                      var n = new v.default(i.data);
                      (n.x = r.xmin),
                        (n.y = r.ymax),
                        (n.resolution = r.width / n.width),
                        (n.rotation = e.rotation);
                      var o = new f(n);
                      (o.x = n.x),
                        (o.y = n.y),
                        (o.resolution = n.resolution),
                        (o.width = n.width),
                        (o.height = n.height),
                        t._mapImageContainer.addChild(o),
                        t._bitmapIndex.set(e, o);
                    });
                }),
                (t.prototype._fetchService = function() {
                  var e = this;
                  return this._getParsedKML().then(function(t) {
                    e._fetchSublayerService(e.layer, t);
                  });
                }),
                (t.prototype._fetchSublayerService = function(e, t) {
                  var i = this,
                    r = e.sublayers;
                  r &&
                    r.forEach(function(e) {
                      p.whenTrueOnce(e, "visible")
                        .then(function() {
                          return e.load();
                        })
                        .then(function() {
                          return e.networkLink
                            ? i._getParsedKML()
                            : (i._featuresMap.set(
                                e,
                                i._getGraphicsForSublayer(e, t)
                              ),
                              i._handles.remove("refresh-collections"),
                              i._handles.add(
                                l.schedule(function() {
                                  return i._refreshCollections();
                                }),
                                "refresh-collections"
                              ),
                              t);
                        })
                        .then(function(t) {
                          i._fetchSublayerService(e, t);
                        });
                    });
                }),
                (t.prototype._getParsedKML = function() {
                  return y
                    .fetchService(
                      this.layer.url,
                      this.view.spatialReference,
                      this.layer.refreshInterval
                    )
                    .then(function(e) {
                      return y.parseKML(e.data);
                    });
                }),
                (t.prototype._getGraphicsForSublayer = function(e, t) {
                  var i = null;
                  return t.sublayers.some(function(t) {
                    return (i = t), t.id === e.id;
                  })
                    ? {
                        points: i.points && y.getGraphics(i.points),
                        polylines: i.polylines && y.getGraphics(i.polylines),
                        polygons: i.polygons && y.getGraphics(i.polygons),
                        mapImages: i.mapImages
                      }
                    : null;
                }),
                (t.prototype._refreshCollections = function() {
                  var e = this,
                    t = this.get("layer.visibleSublayers");
                  this.allVisiblePoints.removeAll(),
                    this.allVisiblePolylines.removeAll(),
                    this.allVisiblePolygons.removeAll(),
                    this.allVisibleMapImages.removeAll(),
                    t &&
                      t.length &&
                      t.forEach(function(t) {
                        var i = e._featuresMap.get(t);
                        i &&
                          (e.allVisiblePoints.addMany(i.points),
                          e.allVisiblePolylines.addMany(i.polylines),
                          e.allVisiblePolygons.addMany(i.polygons),
                          e.allVisibleMapImages.addMany(i.mapImages));
                      });
                }),
                (t.prototype._removeMapImage = function(e) {
                  var t = this._bitmapIndex.get(e);
                  t &&
                    (this._mapImageContainer.removeChild(t),
                    this._bitmapIndex.delete(e));
                }),
                r([d.subclass("esri.views.2d.layers.KMLLayerView2D")], t)
              );
            })(d.declared(m, b));
          }.apply(null, r)) || (e.exports = n);
    },
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
          (n = function(e, t, i, r, n, o, a, s, h, l, p, d) {
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
                          r = (e.layer && e.layer.title) || "no title";
                        return (
                          h
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
                          p.reject(t)
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
                r([d.property()], t.prototype, "layer", void 0),
                r([d.property()], t.prototype, "parent", void 0),
                r(
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
                r(
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
                r([d.property()], t.prototype, "view", void 0),
                r(
                  [d.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                r(
                  [
                    d.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                r([d.subclass("esri.views.layers.LayerView")], t)
              );
            })(d.declared(n, o, s, l));
          }.apply(null, r)) || (e.exports = n);
    },
    2008: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2), i(0), i(3), i(1)]),
        void 0 ===
          (n = function(e, t, i, r, n, o) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.refreshTimestamp = null), t;
              }
              return (
                i(t, e),
                (t.prototype.refresh = function(e) {
                  void 0 === e && (e = Date.now()),
                    this._set("refreshTimestamp", e),
                    this.doRefresh && this.doRefresh();
                }),
                r([o.property()], t.prototype, "layer", void 0),
                r(
                  [o.aliasOf("layer.refreshInterval")],
                  t.prototype,
                  "refreshInterval",
                  void 0
                ),
                r(
                  [o.property({ readOnly: !0 })],
                  t.prototype,
                  "refreshTimestamp",
                  void 0
                ),
                r([o.subclass("esri.layers.mixins.RefreshableLayerView")], t)
              );
            })(o.declared(n));
          }.apply(null, r)) || (e.exports = n);
    },
    2009: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(0), i(26), i(1), i(2006)]),
        void 0 ===
          (n = function(e, t, i, r, n, o, a) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.attached = !1),
                  (t.lastUpdateId = -1),
                  (t.moving = !1),
                  (t.updateRequested = !1),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.when(function() {
                    e.requestUpdate();
                  }),
                    n.init(
                      this,
                      "suspended",
                      function(t) {
                        (e.container.visible = !t),
                          !t &&
                            e.updateRequested &&
                            e.view.requestLayerViewUpdate(e);
                      },
                      !0
                    ),
                    n.init(
                      this,
                      "fullOpacity",
                      function(t) {
                        e.container.opacity = t;
                      },
                      !0
                    );
                  var t = function() {
                    this.notifyChange("rendering");
                  }.bind(this);
                  this.container.on("post-render", t),
                    this.container.on("will-render", t);
                }),
                (t.prototype.destroy = function() {
                  this.attached && ((this.attached = !1), this.detach()),
                    (this.updateRequested = !1),
                    (this.layer = null);
                }),
                Object.defineProperty(t.prototype, "rendering", {
                  get: function() {
                    return this.isRendering();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return (
                      !this.suspended &&
                      (!this.attached ||
                        this.updateRequested ||
                        this.isUpdating())
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.requestUpdate = function() {
                  this.updateRequested ||
                    ((this.updateRequested = !0),
                    this.suspended || this.view.requestLayerViewUpdate(this));
                }),
                (t.prototype.processUpdate = function(e) {
                  !this.isFulfilled() || this.isResolved()
                    ? (this._set("updateParameters", e),
                      this.updateRequested &&
                        !this.suspended &&
                        ((this.updateRequested = !1), this.update(e)))
                    : (this.updateRequested = !1);
                }),
                (t.prototype.isUpdating = function() {
                  return !1;
                }),
                (t.prototype.isRendering = function() {
                  return (
                    this.attached &&
                    (this.moving || this.container.renderRequested)
                  );
                }),
                (t.prototype.canResume = function() {
                  var e = this.inherited(arguments),
                    t = this.layer;
                  if (e && null != t.minScale && null != t.minScale) {
                    var i = this.view.scale,
                      r = t.minScale,
                      n = t.maxScale,
                      o = !r,
                      a = !n;
                    !o && i <= r && (o = !0),
                      !a && i >= n && (a = !0),
                      (e = o && a);
                  }
                  return e;
                }),
                r([o.property()], t.prototype, "attached", void 0),
                r([o.property()], t.prototype, "container", void 0),
                r([o.property()], t.prototype, "moving", void 0),
                r(
                  [o.property({ dependsOn: ["moving"] })],
                  t.prototype,
                  "rendering",
                  null
                ),
                r(
                  [
                    o.property({
                      dependsOn: [
                        "view.scale",
                        "layer.minScale",
                        "layer.maxScale"
                      ]
                    })
                  ],
                  t.prototype,
                  "suspended",
                  void 0
                ),
                r(
                  [o.property({ readOnly: !0 })],
                  t.prototype,
                  "updateParameters",
                  void 0
                ),
                r([o.property()], t.prototype, "updateRequested", void 0),
                r(
                  [o.property({ dependsOn: ["updateRequested", "attached"] })],
                  t.prototype,
                  "updating",
                  null
                ),
                r([o.property()], t.prototype, "view", void 0),
                r([o.subclass("esri.views.2d.layers.LayerView2D")], t)
              );
            })(o.declared(a));
          }.apply(null, r)) || (e.exports = n);
    },
    2012: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e() {
                this._listeners = {};
              }
              return (
                (e.prototype.on = function(e, t) {
                  var i = this;
                  null == this._listeners[e] &&
                    (this._listeners[e] = new Map());
                  var r = {};
                  return (
                    this._listeners[e].set(r, t),
                    {
                      remove: function() {
                        return i._listeners[e].delete(r);
                      }
                    }
                  );
                }),
                (e.prototype.once = function(e, t) {
                  var i = this.on(e, function(e) {
                    i.remove(), t(e);
                  });
                  return i;
                }),
                (e.prototype.emit = function(e, t) {
                  this.hasEventListener(e) &&
                    this._listeners[e].forEach(function(e) {
                      return e(t);
                    });
                }),
                (e.prototype.hasEventListener = function(e) {
                  return (
                    null != this._listeners[e] && this._listeners[e].size > 0
                  );
                }),
                e
              );
            })();
            t.default = i;
          }.apply(null, r)) || (e.exports = n);
    },
    2017: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(59), i(2012)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            function o(e) {
              return e && "render" in e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = (function(e) {
              function t(t) {
                var i = e.call(this) || this;
                return (
                  (i._height = 0),
                  (i.pixelRatio = 1),
                  (i.resolution = 0),
                  (i.rotation = 0),
                  (i._width = 0),
                  (i.x = 0),
                  (i.y = 0),
                  (i.data = t),
                  i
                );
              }
              return (
                i(t, e),
                (t.prototype.release = function() {
                  this.data = null;
                }),
                Object.defineProperty(t.prototype, "data", {
                  get: function() {
                    return this._data;
                  },
                  set: function(e) {
                    (this._data = e),
                      (this._width = this._height = 0),
                      e &&
                        (o(e) ||
                          (e instanceof HTMLImageElement
                            ? ((this._width = e.naturalWidth),
                              (this._height = e.naturalHeight))
                            : e.width > 0 &&
                              e.height > 0 &&
                              ((this._width = e.width),
                              (this._height = e.height))));
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "height", {
                  get: function() {
                    return o(this._data) ? this._data.height : this._height;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "ready", {
                  get: function() {
                    return o(this._data)
                      ? this._data.width > 0 && this._data.height > 0
                      : this._width > 0;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "width", {
                  get: function() {
                    return o(this.data) ? this._data.width : this._width;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.draw = function(e, t, i, r, n, a, s, h, l) {
                  this.ready &&
                    (o(this._data)
                      ? this._data.render(e, t, i, r, n, a, s, h, l)
                      : (function(e) {
                          return e && !("render" in e);
                        })(this._data) &&
                        r &&
                        n &&
                        h &&
                        l &&
                        e.drawImage(this._data, t, i, r, n, a, s, h, l));
                }),
                (t.pool = new r(t, !0)),
                t
              );
            })(n.default);
            t.default = a;
          }.apply(null, r)) || (e.exports = n);
    },
    2018: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(9), i(774), i(309), i(310)]),
        void 0 ===
          (n = function(e, t, i, r, n, o, a) {
            var s = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg" };
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._childrenRenderParameters = {
                    context: null,
                    pixelRatio: 1,
                    state: new n(),
                    stationary: !0
                  }),
                  (t.hidpi = !1),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.createElement = function() {
                  var e = document.createElement("canvas");
                  return e.setAttribute("class", "esri-display-object"), e;
                }),
                (t.prototype.setElement = function(e) {
                  this.element = e;
                }),
                (t.prototype.takeScreenshot = function(e) {
                  void 0 === e && (e = {});
                  var t = e.pixelRatio || 1,
                    i = {
                      context: null,
                      pixelRatio: t,
                      state: new n(),
                      stationary: !0
                    };
                  (i.opacity = this._childrenRenderParameters.opacity),
                    i.state.copy(this._childrenRenderParameters.state);
                  var o = Math.round(t * i.state.width),
                    h = Math.round(t * i.state.height),
                    l = { x: 0, y: 0, width: o, height: h },
                    p = { x: 0, y: 0, width: o, height: h },
                    d = e.area;
                  if (
                    (d &&
                      ((l.x = Math.round(t * d.x)),
                      (l.y = Math.round(t * d.y)),
                      (l.width = Math.round(t * d.width)),
                      (l.height = Math.round(t * d.height))),
                    void 0 !== e.width && void 0 !== e.height)
                  ) {
                    var u = e.width / e.height;
                    if (l.height * u < l.width) {
                      var c = l.height * u;
                      (l.x += Math.floor((l.width - c) / 2)),
                        (l.width = Math.floor(c));
                    } else {
                      var y = l.width / u;
                      (l.y += Math.floor((l.height - y) / 2)),
                        (l.height = Math.floor(y));
                    }
                    (p.width = e.width), (p.height = e.height);
                  } else (p.width = l.width), (p.height = l.height);
                  var f,
                    v = document.createElement("canvas"),
                    g = new Uint8Array(l.width * l.height * 4);
                  if (
                    ((v.width = p.width),
                    (v.height = p.height),
                    (i.context = v.getContext("2d")),
                    this.beforeRenderChildren(i, i),
                    void 0 !== e.rotation && null !== e.rotation)
                  ) {
                    var w = i.state,
                      m = w.clone();
                    (m.viewpoint.rotation = e.rotation),
                      (i.state = m),
                      this.renderChildren(i),
                      (i.state = w);
                  } else this.renderChildren(i);
                  this.afterRenderChildren(i, i);
                  try {
                    f = i.context.getImageData(p.x, p.y, p.width, p.height);
                  } catch (e) {
                    return r.reject(e);
                  }
                  (0 === l.x &&
                    0 === l.y &&
                    l.width === o &&
                    l.height === h &&
                    0 === p.x &&
                    0 === p.y &&
                    p.width === o &&
                    p.height === h) ||
                    a.resampleHermite(
                      g,
                      l.width,
                      l.height,
                      f.data,
                      p.width,
                      p.height,
                      !0
                    ),
                    i.context.putImageData(f, p.x, p.y);
                  var _ = s[e.format ? e.format.toLowerCase() : "png"],
                    b = {
                      dataURL: v.toDataURL(
                        _,
                        null != e.quality ? e.quality / 100 : 1
                      ),
                      x: p.x,
                      y: p.y,
                      width: p.width,
                      height: p.height
                    };
                  return e.returnByteBuffer && (b.data = g), r.resolve(b);
                }),
                (t.prototype.doRender = function(t) {
                  var i = this.element,
                    r = i.style;
                  if (this.visible) {
                    var n = t.state,
                      o = t.pixelRatio,
                      a = n.width,
                      s = n.height;
                    (i.width = a * (this.hidpi ? o : 1)),
                      (i.height = s * (this.hidpi ? o : 1)),
                      (r.display = "block"),
                      (r.opacity =
                        "" + Math.min(this.opacity, this.parent.opacity)),
                      (r.width = a + "px"),
                      (r.height = s + "px"),
                      e.prototype.doRender.call(this, t);
                  } else r.display = "none";
                }),
                (t.prototype.prepareChildrenRenderParameters = function(e) {
                  var t = this._childrenRenderParameters;
                  return (
                    (t.context = this.element.getContext("2d")),
                    (t.pixelRatio = e.pixelRatio),
                    t.state.copy(e.state),
                    (t.state.pixelRatio = this.hidpi ? e.pixelRatio : 1),
                    (t.stationary = e.stationary),
                    t
                  );
                }),
                (t.prototype.beforeRenderChildren = function(e, t) {
                  var i = t.context,
                    r = t.state;
                  if ((i.save(), r.spatialReference.isWrappable)) {
                    var n = r.width,
                      o = r.height,
                      a = r.rotation,
                      s = r.pixelRatio,
                      h = this.hidpi ? s : 1,
                      l = (a * Math.PI) / 180,
                      p = Math.abs(Math.cos(l)),
                      d = Math.abs(Math.sin(l)),
                      u = Math.round(n * h * p + o * h * d),
                      c = r.worldScreenWidth * h;
                    if (c < u) {
                      var y = n * h * 0.5,
                        f = o * h * 0.5;
                      l &&
                        (i.translate(y, f), i.rotate(l), i.translate(-y, -f)),
                        i.beginPath(),
                        i.rect(y - 0.5 * c, f - 0.5 * u, c, u),
                        i.closePath(),
                        l &&
                          (i.translate(y, f),
                          i.rotate(-l),
                          i.translate(-y, -f)),
                        i.clip("evenodd");
                    }
                  }
                }),
                (t.prototype.afterRenderChildren = function(e, t) {
                  t.context.restore();
                }),
                (t.prototype.renderChild = function(e, t) {
                  t.context.save(), e.processRender(t), t.context.restore();
                }),
                t
              );
            })(o);
          }.apply(null, r)) || (e.exports = n);
    },
    2019: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(311)]),
        void 0 ===
          (n = function(e, t, i, r) {
            var n = [0, 0];
            return (function(e) {
              function t(t) {
                var i = e.call(this) || this;
                return (
                  (i.height = 0),
                  (i.resolution = 0),
                  (i.rotation = 0),
                  (i._source = null),
                  (i._sourceHandle = null),
                  (i.width = 0),
                  (i.x = 0),
                  (i.y = 0),
                  (i.source = t),
                  (i.requestRender = i.requestRender.bind(i)),
                  i
                );
              }
              return (
                i(t, e),
                Object.defineProperty(t.prototype, "source", {
                  get: function() {
                    return this._source;
                  },
                  set: function(e) {
                    this._sourceHandle &&
                      (this._sourceHandle.remove(),
                      (this._sourceHandle = null)),
                      (this._source = e),
                      this._source &&
                        (this._sourceHandle = this._source.on(
                          "update",
                          this.requestRender
                        )),
                      this.requestRender();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.doRender = function(e) {
                  this.source && this.source.ready && this.renderCanvas2D(e);
                }),
                (t.prototype.renderCanvas2D = function(e) {
                  var t = this.source,
                    i = e.context,
                    r = e.state,
                    o = r.resolution,
                    a = r.rotation,
                    s = (this.resolution / o) * r.pixelRatio;
                  if (!(s < 0.05)) {
                    i.save();
                    var h = r.toScreen(n, this.x, this.y),
                      l = h[0],
                      p = h[1];
                    if (
                      (s > 0.99 && s < 1.01
                        ? i.translate(Math.round(l), Math.round(p))
                        : (i.translate(l, p), i.scale(s, s)),
                      a)
                    ) {
                      var d = (a * Math.PI) / 180;
                      i.rotate(d);
                    }
                    t.rotation &&
                      (i.translate(0.5 * this.width, 0.5 * this.height),
                      i.rotate((-t.rotation * Math.PI) / 180),
                      i.translate(0.5 * -this.width, 0.5 * -this.height));
                    var u = t.resolution || this.resolution,
                      c = (this.x - t.x) / u,
                      y = -(this.y - t.y) / u,
                      f = (t.width || this.width) * (this.resolution / u),
                      v = (t.height || this.height) * (this.resolution / u);
                    i.clearRect(0, 0, this.width, this.height),
                      t.draw(
                        i,
                        Math.round(c),
                        Math.round(y),
                        Math.round(f),
                        Math.round(v),
                        0,
                        0,
                        this.width,
                        this.height
                      ),
                      i.restore();
                  }
                }),
                t
              );
            })(r);
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/layers/KMLLayerView2D": 1987,
      "esri/views/layers/LayerView": 2006,
      "esri/views/layers/RefreshableLayerView": 2008,
      "esri/views/2d/layers/LayerView2D": 2009,
      "esri/views/2d/support/Evented": 2012,
      "esri/views/2d/engine/BitmapSource": 2017,
      "esri/views/2d/engine/Canvas2DContainer": 2018,
      "esri/views/2d/engine/Bitmap": 2019
    });
  })();
