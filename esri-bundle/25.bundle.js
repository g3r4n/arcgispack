(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    1976: function(t, e, i) {
      var r, n;
      (r = [
        i.dj.c(t.i),
        e,
        i(5),
        i(0),
        i(17),
        i(1),
        i(2017),
        i(2018),
        i(2009),
        i(2044),
        i(2008)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, o, a, s, h, p, u) {
            return (function(t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e._handles = new n()), (e.container = new s()), e;
              }
              return (
                i(e, t),
                (e.prototype.hitTest = function(t, e) {
                  return null;
                }),
                (e.prototype.update = function(t) {
                  this._strategy.update(t), this.notifyChange("updating");
                }),
                (e.prototype.attach = function() {
                  this._strategy = new p({
                    container: this.container,
                    fetchSource: this.fetchBitmapSource.bind(this),
                    requestUpdate: this.requestUpdate.bind(this)
                  });
                }),
                (e.prototype.detach = function() {
                  this.container.removeAllChildren(),
                    this._strategy.destroy(),
                    this._handles.removeAll(),
                    (this._strategy = null);
                }),
                (e.prototype.moveStart = function() {}),
                (e.prototype.viewChange = function() {}),
                (e.prototype.moveEnd = function() {
                  this.requestUpdate();
                }),
                (e.prototype.fetchBitmapSource = function(t, e, i) {
                  var r = this;
                  return this.layer
                    .fetchImage(t, e, i, { timestamp: this.refreshTimestamp })
                    .then(function(t) {
                      return r.notifyChange("updating"), new a.default(t);
                    })
                    .catch(function(t) {
                      return (
                        "cancel" !== t.dojoType && console.error(t),
                        r.notifyChange("updating"),
                        t
                      );
                    });
                }),
                (e.prototype.doRefresh = function() {
                  this.requestUpdate();
                }),
                (e.prototype.isUpdating = function() {
                  return (
                    this.attached &&
                    (this._strategy.updating || this.updateRequested)
                  );
                }),
                r(
                  [o.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],
                  e
                )
              );
            })(o.declared(h, u));
          }.apply(null, r)) || (t.exports = n);
    },
    2006: function(t, e, i) {
      var r, n;
      (r = [
        i.dj.c(t.i),
        e,
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
          (n = function(t, e, i, r, n, o, a, s, h, p, u, d) {
            return (function(t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.handles = new a()),
                  (e.layer = null),
                  (e.parent = null),
                  (e.view = null),
                  e
                );
              }
              return (
                i(e, t),
                (e.prototype.initialize = function() {
                  var t = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(e) {
                      if ("layerview:create-error" !== e.name) {
                        var i = (t.layer && t.layer.id) || "no id",
                          r = (t.layer && t.layer.title) || "no title";
                        return (
                          h
                            .getLogger(t.declaredClass)
                            .error(
                              "#resolve()",
                              "Failed to resolve layer view (layer title: '" +
                                r +
                                "', id: '" +
                                i +
                                "')",
                              e
                            ),
                          u.reject(e)
                        );
                      }
                    });
                }),
                (e.prototype.destroy = function() {
                  this.layer = this.view = this.parent = null;
                }),
                Object.defineProperty(e.prototype, "suspended", {
                  get: function() {
                    return !this.canResume();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "updating", {
                  get: function() {
                    return !this.suspended && this.isUpdating();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "visible", {
                  get: function() {
                    return !0 === this.get("layer.visible");
                  },
                  set: function(t) {
                    void 0 !== t
                      ? this._override("visible", t)
                      : this._clearOverride("visible");
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "fullOpacity", {
                  get: function() {
                    var t = function(t) {
                      return null != t ? t : 1;
                    };
                    return (
                      t(this.get("layer.opacity")) *
                      t(this.get("parent.fullOpacity"))
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.canResume = function() {
                  return (
                    (!this.get("parent.suspended") &&
                      this.get("view.ready") &&
                      this.get("layer.loaded") &&
                      this.visible) ||
                    !1
                  );
                }),
                (e.prototype.isUpdating = function() {
                  return !1;
                }),
                r([d.property()], e.prototype, "layer", void 0),
                r([d.property()], e.prototype, "parent", void 0),
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
                  e.prototype,
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
                  e.prototype,
                  "updating",
                  null
                ),
                r([d.property()], e.prototype, "view", void 0),
                r(
                  [d.property({ dependsOn: ["layer.visible"] })],
                  e.prototype,
                  "visible",
                  null
                ),
                r(
                  [
                    d.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  e.prototype,
                  "fullOpacity",
                  null
                ),
                r([d.subclass("esri.views.layers.LayerView")], e)
              );
            })(d.declared(n, o, s, p));
          }.apply(null, r)) || (t.exports = n);
    },
    2008: function(t, e, i) {
      var r, n;
      (r = [i.dj.c(t.i), e, i(2), i(0), i(3), i(1)]),
        void 0 ===
          (n = function(t, e, i, r, n, o) {
            return (function(t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.refreshTimestamp = null), e;
              }
              return (
                i(e, t),
                (e.prototype.refresh = function(t) {
                  void 0 === t && (t = Date.now()),
                    this._set("refreshTimestamp", t),
                    this.doRefresh && this.doRefresh();
                }),
                r([o.property()], e.prototype, "layer", void 0),
                r(
                  [o.aliasOf("layer.refreshInterval")],
                  e.prototype,
                  "refreshInterval",
                  void 0
                ),
                r(
                  [o.property({ readOnly: !0 })],
                  e.prototype,
                  "refreshTimestamp",
                  void 0
                ),
                r([o.subclass("esri.layers.mixins.RefreshableLayerView")], e)
              );
            })(o.declared(n));
          }.apply(null, r)) || (t.exports = n);
    },
    2009: function(t, e, i) {
      var r, n;
      (r = [i.dj.c(t.i), e, i(5), i(0), i(26), i(1), i(2006)]),
        void 0 ===
          (n = function(t, e, i, r, n, o, a) {
            return (function(t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.attached = !1),
                  (e.lastUpdateId = -1),
                  (e.moving = !1),
                  (e.updateRequested = !1),
                  e
                );
              }
              return (
                i(e, t),
                (e.prototype.initialize = function() {
                  var t = this;
                  this.when(function() {
                    t.requestUpdate();
                  }),
                    n.init(
                      this,
                      "suspended",
                      function(e) {
                        (t.container.visible = !e),
                          !e &&
                            t.updateRequested &&
                            t.view.requestLayerViewUpdate(t);
                      },
                      !0
                    ),
                    n.init(
                      this,
                      "fullOpacity",
                      function(e) {
                        t.container.opacity = e;
                      },
                      !0
                    );
                  var e = function() {
                    this.notifyChange("rendering");
                  }.bind(this);
                  this.container.on("post-render", e),
                    this.container.on("will-render", e);
                }),
                (e.prototype.destroy = function() {
                  this.attached && ((this.attached = !1), this.detach()),
                    (this.updateRequested = !1),
                    (this.layer = null);
                }),
                Object.defineProperty(e.prototype, "rendering", {
                  get: function() {
                    return this.isRendering();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "updating", {
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
                (e.prototype.requestUpdate = function() {
                  this.updateRequested ||
                    ((this.updateRequested = !0),
                    this.suspended || this.view.requestLayerViewUpdate(this));
                }),
                (e.prototype.processUpdate = function(t) {
                  !this.isFulfilled() || this.isResolved()
                    ? (this._set("updateParameters", t),
                      this.updateRequested &&
                        !this.suspended &&
                        ((this.updateRequested = !1), this.update(t)))
                    : (this.updateRequested = !1);
                }),
                (e.prototype.isUpdating = function() {
                  return !1;
                }),
                (e.prototype.isRendering = function() {
                  return (
                    this.attached &&
                    (this.moving || this.container.renderRequested)
                  );
                }),
                (e.prototype.canResume = function() {
                  var t = this.inherited(arguments),
                    e = this.layer;
                  if (t && null != e.minScale && null != e.minScale) {
                    var i = this.view.scale,
                      r = e.minScale,
                      n = e.maxScale,
                      o = !r,
                      a = !n;
                    !o && i <= r && (o = !0),
                      !a && i >= n && (a = !0),
                      (t = o && a);
                  }
                  return t;
                }),
                r([o.property()], e.prototype, "attached", void 0),
                r([o.property()], e.prototype, "container", void 0),
                r([o.property()], e.prototype, "moving", void 0),
                r(
                  [o.property({ dependsOn: ["moving"] })],
                  e.prototype,
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
                  e.prototype,
                  "suspended",
                  void 0
                ),
                r(
                  [o.property({ readOnly: !0 })],
                  e.prototype,
                  "updateParameters",
                  void 0
                ),
                r([o.property()], e.prototype, "updateRequested", void 0),
                r(
                  [o.property({ dependsOn: ["updateRequested", "attached"] })],
                  e.prototype,
                  "updating",
                  null
                ),
                r([o.property()], e.prototype, "view", void 0),
                r([o.subclass("esri.views.2d.layers.LayerView2D")], e)
              );
            })(o.declared(a));
          }.apply(null, r)) || (t.exports = n);
    },
    2012: function(t, e, i) {
      var r, n;
      (r = [i.dj.c(t.i), e]),
        void 0 ===
          (n = function(t, e) {
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = (function() {
              function t() {
                this._listeners = {};
              }
              return (
                (t.prototype.on = function(t, e) {
                  var i = this;
                  null == this._listeners[t] &&
                    (this._listeners[t] = new Map());
                  var r = {};
                  return (
                    this._listeners[t].set(r, e),
                    {
                      remove: function() {
                        return i._listeners[t].delete(r);
                      }
                    }
                  );
                }),
                (t.prototype.once = function(t, e) {
                  var i = this.on(t, function(t) {
                    i.remove(), e(t);
                  });
                  return i;
                }),
                (t.prototype.emit = function(t, e) {
                  this.hasEventListener(t) &&
                    this._listeners[t].forEach(function(t) {
                      return t(e);
                    });
                }),
                (t.prototype.hasEventListener = function(t) {
                  return (
                    null != this._listeners[t] && this._listeners[t].size > 0
                  );
                }),
                t
              );
            })();
            e.default = i;
          }.apply(null, r)) || (t.exports = n);
    },
    2017: function(t, e, i) {
      var r, n;
      (r = [i.dj.c(t.i), e, i(5), i(59), i(2012)]),
        void 0 ===
          (n = function(t, e, i, r, n) {
            function o(t) {
              return t && "render" in t;
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var a = (function(t) {
              function e(e) {
                var i = t.call(this) || this;
                return (
                  (i._height = 0),
                  (i.pixelRatio = 1),
                  (i.resolution = 0),
                  (i.rotation = 0),
                  (i._width = 0),
                  (i.x = 0),
                  (i.y = 0),
                  (i.data = e),
                  i
                );
              }
              return (
                i(e, t),
                (e.prototype.release = function() {
                  this.data = null;
                }),
                Object.defineProperty(e.prototype, "data", {
                  get: function() {
                    return this._data;
                  },
                  set: function(t) {
                    (this._data = t),
                      (this._width = this._height = 0),
                      t &&
                        (o(t) ||
                          (t instanceof HTMLImageElement
                            ? ((this._width = t.naturalWidth),
                              (this._height = t.naturalHeight))
                            : t.width > 0 &&
                              t.height > 0 &&
                              ((this._width = t.width),
                              (this._height = t.height))));
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "height", {
                  get: function() {
                    return o(this._data) ? this._data.height : this._height;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "ready", {
                  get: function() {
                    return o(this._data)
                      ? this._data.width > 0 && this._data.height > 0
                      : this._width > 0;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "width", {
                  get: function() {
                    return o(this.data) ? this._data.width : this._width;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.draw = function(t, e, i, r, n, a, s, h, p) {
                  this.ready &&
                    (o(this._data)
                      ? this._data.render(t, e, i, r, n, a, s, h, p)
                      : (function(t) {
                          return t && !("render" in t);
                        })(this._data) &&
                        r &&
                        n &&
                        h &&
                        p &&
                        t.drawImage(this._data, e, i, r, n, a, s, h, p));
                }),
                (e.pool = new r(e, !0)),
                e
              );
            })(n.default);
            e.default = a;
          }.apply(null, r)) || (t.exports = n);
    },
    2018: function(t, e, i) {
      var r, n;
      (r = [i.dj.c(t.i), e, i(5), i(9), i(774), i(309), i(310)]),
        void 0 ===
          (n = function(t, e, i, r, n, o, a) {
            var s = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg" };
            return (function(t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e._childrenRenderParameters = {
                    context: null,
                    pixelRatio: 1,
                    state: new n(),
                    stationary: !0
                  }),
                  (e.hidpi = !1),
                  e
                );
              }
              return (
                i(e, t),
                (e.prototype.createElement = function() {
                  var t = document.createElement("canvas");
                  return t.setAttribute("class", "esri-display-object"), t;
                }),
                (e.prototype.setElement = function(t) {
                  this.element = t;
                }),
                (e.prototype.takeScreenshot = function(t) {
                  void 0 === t && (t = {});
                  var e = t.pixelRatio || 1,
                    i = {
                      context: null,
                      pixelRatio: e,
                      state: new n(),
                      stationary: !0
                    };
                  (i.opacity = this._childrenRenderParameters.opacity),
                    i.state.copy(this._childrenRenderParameters.state);
                  var o = Math.round(e * i.state.width),
                    h = Math.round(e * i.state.height),
                    p = { x: 0, y: 0, width: o, height: h },
                    u = { x: 0, y: 0, width: o, height: h },
                    d = t.area;
                  if (
                    (d &&
                      ((p.x = Math.round(e * d.x)),
                      (p.y = Math.round(e * d.y)),
                      (p.width = Math.round(e * d.width)),
                      (p.height = Math.round(e * d.height))),
                    void 0 !== t.width && void 0 !== t.height)
                  ) {
                    var l = t.width / t.height;
                    if (p.height * l < p.width) {
                      var c = p.height * l;
                      (p.x += Math.floor((p.width - c) / 2)),
                        (p.width = Math.floor(c));
                    } else {
                      var y = p.width / l;
                      (p.y += Math.floor((p.height - y) / 2)),
                        (p.height = Math.floor(y));
                    }
                    (u.width = t.width), (u.height = t.height);
                  } else (u.width = p.width), (u.height = p.height);
                  var f,
                    g = document.createElement("canvas"),
                    v = new Uint8Array(p.width * p.height * 4);
                  if (
                    ((g.width = u.width),
                    (g.height = u.height),
                    (i.context = g.getContext("2d")),
                    this.beforeRenderChildren(i, i),
                    void 0 !== t.rotation && null !== t.rotation)
                  ) {
                    var m = i.state,
                      w = m.clone();
                    (w.viewpoint.rotation = t.rotation),
                      (i.state = w),
                      this.renderChildren(i),
                      (i.state = m);
                  } else this.renderChildren(i);
                  this.afterRenderChildren(i, i);
                  try {
                    f = i.context.getImageData(u.x, u.y, u.width, u.height);
                  } catch (t) {
                    return r.reject(t);
                  }
                  (0 === p.x &&
                    0 === p.y &&
                    p.width === o &&
                    p.height === h &&
                    0 === u.x &&
                    0 === u.y &&
                    u.width === o &&
                    u.height === h) ||
                    a.resampleHermite(
                      v,
                      p.width,
                      p.height,
                      f.data,
                      u.width,
                      u.height,
                      !0
                    ),
                    i.context.putImageData(f, u.x, u.y);
                  var x = s[t.format ? t.format.toLowerCase() : "png"],
                    _ = {
                      dataURL: g.toDataURL(
                        x,
                        null != t.quality ? t.quality / 100 : 1
                      ),
                      x: u.x,
                      y: u.y,
                      width: u.width,
                      height: u.height
                    };
                  return t.returnByteBuffer && (_.data = v), r.resolve(_);
                }),
                (e.prototype.doRender = function(e) {
                  var i = this.element,
                    r = i.style;
                  if (this.visible) {
                    var n = e.state,
                      o = e.pixelRatio,
                      a = n.width,
                      s = n.height;
                    (i.width = a * (this.hidpi ? o : 1)),
                      (i.height = s * (this.hidpi ? o : 1)),
                      (r.display = "block"),
                      (r.opacity =
                        "" + Math.min(this.opacity, this.parent.opacity)),
                      (r.width = a + "px"),
                      (r.height = s + "px"),
                      t.prototype.doRender.call(this, e);
                  } else r.display = "none";
                }),
                (e.prototype.prepareChildrenRenderParameters = function(t) {
                  var e = this._childrenRenderParameters;
                  return (
                    (e.context = this.element.getContext("2d")),
                    (e.pixelRatio = t.pixelRatio),
                    e.state.copy(t.state),
                    (e.state.pixelRatio = this.hidpi ? t.pixelRatio : 1),
                    (e.stationary = t.stationary),
                    e
                  );
                }),
                (e.prototype.beforeRenderChildren = function(t, e) {
                  var i = e.context,
                    r = e.state;
                  if ((i.save(), r.spatialReference.isWrappable)) {
                    var n = r.width,
                      o = r.height,
                      a = r.rotation,
                      s = r.pixelRatio,
                      h = this.hidpi ? s : 1,
                      p = (a * Math.PI) / 180,
                      u = Math.abs(Math.cos(p)),
                      d = Math.abs(Math.sin(p)),
                      l = Math.round(n * h * u + o * h * d),
                      c = r.worldScreenWidth * h;
                    if (c < l) {
                      var y = n * h * 0.5,
                        f = o * h * 0.5;
                      p &&
                        (i.translate(y, f), i.rotate(p), i.translate(-y, -f)),
                        i.beginPath(),
                        i.rect(y - 0.5 * c, f - 0.5 * l, c, l),
                        i.closePath(),
                        p &&
                          (i.translate(y, f),
                          i.rotate(-p),
                          i.translate(-y, -f)),
                        i.clip("evenodd");
                    }
                  }
                }),
                (e.prototype.afterRenderChildren = function(t, e) {
                  e.context.restore();
                }),
                (e.prototype.renderChild = function(t, e) {
                  e.context.save(), t.processRender(e), e.context.restore();
                }),
                e
              );
            })(o);
          }.apply(null, r)) || (t.exports = n);
    },
    2019: function(t, e, i) {
      var r, n;
      (r = [i.dj.c(t.i), e, i(5), i(311)]),
        void 0 ===
          (n = function(t, e, i, r) {
            var n = [0, 0];
            return (function(t) {
              function e(e) {
                var i = t.call(this) || this;
                return (
                  (i.height = 0),
                  (i.resolution = 0),
                  (i.rotation = 0),
                  (i._source = null),
                  (i._sourceHandle = null),
                  (i.width = 0),
                  (i.x = 0),
                  (i.y = 0),
                  (i.source = e),
                  (i.requestRender = i.requestRender.bind(i)),
                  i
                );
              }
              return (
                i(e, t),
                Object.defineProperty(e.prototype, "source", {
                  get: function() {
                    return this._source;
                  },
                  set: function(t) {
                    this._sourceHandle &&
                      (this._sourceHandle.remove(),
                      (this._sourceHandle = null)),
                      (this._source = t),
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
                (e.prototype.doRender = function(t) {
                  this.source && this.source.ready && this.renderCanvas2D(t);
                }),
                (e.prototype.renderCanvas2D = function(t) {
                  var e = this.source,
                    i = t.context,
                    r = t.state,
                    o = r.resolution,
                    a = r.rotation,
                    s = (this.resolution / o) * r.pixelRatio;
                  if (!(s < 0.05)) {
                    i.save();
                    var h = r.toScreen(n, this.x, this.y),
                      p = h[0],
                      u = h[1];
                    if (
                      (s > 0.99 && s < 1.01
                        ? i.translate(Math.round(p), Math.round(u))
                        : (i.translate(p, u), i.scale(s, s)),
                      a)
                    ) {
                      var d = (a * Math.PI) / 180;
                      i.rotate(d);
                    }
                    e.rotation &&
                      (i.translate(0.5 * this.width, 0.5 * this.height),
                      i.rotate((-e.rotation * Math.PI) / 180),
                      i.translate(0.5 * -this.width, 0.5 * -this.height));
                    var l = e.resolution || this.resolution,
                      c = (this.x - e.x) / l,
                      y = -(this.y - e.y) / l,
                      f = (e.width || this.width) * (this.resolution / l),
                      g = (e.height || this.height) * (this.resolution / l);
                    i.clearRect(0, 0, this.width, this.height),
                      e.draw(
                        i,
                        Math.round(c),
                        Math.round(y),
                        Math.round(f),
                        Math.round(g),
                        0,
                        0,
                        this.width,
                        this.height
                      ),
                      i.restore();
                  }
                }),
                e
              );
            })(r);
          }.apply(null, r)) || (t.exports = n);
    },
    2020: function(t, e, i) {
      var r, n;
      (r = [i.dj.c(t.i), e]),
        void 0 ===
          (n = function(t, e) {
            function i(t) {
              return t * r;
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = Math.PI / 180;
            (e.snapToPixel = function(t, e, i) {
              var r = i.resolution,
                n = i.size;
              return (
                (t[0] = r * (Math.round(e[0] / r) + (n[0] % 2) * 0.5)),
                (t[1] = r * (Math.round(e[1] / r) + (n[1] % 2) * 0.5)),
                t
              );
            }),
              (e.getOuterSize = function(t, e) {
                var r = i(e.rotation),
                  n = Math.abs(Math.cos(r)),
                  o = Math.abs(Math.sin(r)),
                  a = e.size,
                  s = a[0],
                  h = a[1];
                return (
                  (t[0] = Math.round(h * o + s * n)),
                  (t[1] = Math.round(h * n + s * o)),
                  t
                );
              }),
              (e.getBBox = function(t, e, i, r) {
                var n = e[0],
                  o = e[1],
                  a = r[0],
                  s = r[1],
                  h = 0.5 * i;
                return (
                  (t[0] = n - h * a),
                  (t[1] = o - h * s),
                  (t[2] = n + h * a),
                  (t[3] = o + h * s),
                  t
                );
              }),
              (e.bboxIntersects = function(t, e) {
                var i = t[0],
                  r = t[1],
                  n = t[2],
                  o = t[3],
                  a = e[0],
                  s = e[1],
                  h = e[2],
                  p = e[3];
                return !(i > h || n < a || r > p || o < s);
              });
          }.apply(null, r)) || (t.exports = n);
    },
    2044: function(t, e, i) {
      var r, n;
      (r = [
        i.dj.c(t.i),
        e,
        i(13),
        i(9),
        i(20),
        i(35),
        i(98),
        i(124),
        i(2020),
        i(2019),
        i(773),
        i(259)
      ]),
        void 0 ===
          (n = function(t, e, i, r, n, o, a, s, h, p, u, d) {
            var l = o.create(),
              c = [0, 0],
              y = new d(0, 0, 0, 0),
              f = {
                container: null,
                fetchSource: null,
                requestUpdate: null,
                imageMaxWidth: 2048,
                imageMaxHeight: 2048,
                imageRotationSupported: !1,
                imageNormalizationSupported: !1,
                imageDataAccessRequired: !1,
                hidpi: !1
              };
            return (function() {
              function t(t) {
                (this._imagePromise = null),
                  (this.hidpi = f.hidpi),
                  (this.imageDataAccessRequired = f.imageDataAccessRequired),
                  (this.imageMaxWidth = f.imageMaxWidth),
                  (this.imageMaxHeight = f.imageMaxHeight),
                  (this.imageRotationSupported = f.imageRotationSupported),
                  (this.imageNormalizationSupported =
                    f.imageNormalizationSupported);
                var e = i({}, f, t);
                (this.container = e.container),
                  (this.disposeSource = e.disposeSource),
                  (this.fetchSource = e.fetchSource),
                  (this.requestUpdate = e.requestUpdate),
                  (this.imageMaxWidth = e.imageMaxWidth),
                  (this.imageMaxHeight = e.imageMaxHeight),
                  (this.imageRotationSupported = e.imageRotationSupported),
                  (this.imageNormalizationSupported =
                    e.imageNormalizationSupported),
                  (this.hidpi = e.hidpi);
              }
              return (
                (t.prototype.destroy = function() {}),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return null !== this._imagePromise;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.update = function(t) {
                  var e = this,
                    i = t.state,
                    r = a.getInfo(i.spatialReference),
                    n = this.hidpi ? t.pixelRatio : 1;
                  if (
                    (this._imagePromise &&
                      (this._imagePromise.cancel(),
                      (this._imagePromise = null)),
                    t.stationary)
                  ) {
                    this.imageRotationSupported
                      ? ((c[0] = i.width), (c[1] = i.height))
                      : h.getOuterSize(c, i);
                    var o =
                        Math.floor(c[0] * n) > this.imageMaxWidth ||
                        Math.floor(c[1] * n) > this.imageMaxHeight,
                      s =
                        r &&
                        (i.extent.xmin < r.valid[0] ||
                          i.extent.xmax > r.valid[1]),
                      p = !this.imageNormalizationSupported && s,
                      u = !o && !p,
                      d = this.imageRotationSupported ? i.rotation : 0;
                    if (u) this._imagePromise = this._singleExport(i, c, d, n);
                    else {
                      var l = Math.min(this.imageMaxWidth, this.imageMaxHeight);
                      p && (l = Math.min(i.worldScreenWidth, l)),
                        (this._imagePromise = this._tiledExport(i, l, d, n));
                    }
                    this._imagePromise
                      .then(function(t) {
                        e._imagePromise = null;
                        var i = e.container.children.slice();
                        e.container.removeAllChildren(),
                          t.forEach(e.container.addChild, e.container),
                          e.disposeSource &&
                            i.forEach(function(t) {
                              e.disposeSource(t.source);
                            }, e);
                      })
                      .catch(function(t) {
                        if (((e._imagePromise = null), "cancel" !== t.dojoType))
                          throw t;
                      });
                  }
                }),
                (t.prototype.updateExports = function(t, e) {
                  for (
                    var i = 0, r = this.container.children;
                    i < r.length;
                    i++
                  ) {
                    var n = r[i];
                    if (!n.visible || !n.attached) return;
                    t(n, e)
                      ? console.error(
                          "ExportStrategy.updateExports doesn't support promise yet"
                        )
                      : n.requestRender();
                  }
                }),
                (t.prototype._export = function(t, e, i, n, o) {
                  var a = this;
                  return r
                    .resolve()
                    .then(function() {
                      return a.fetchSource(
                        t,
                        Math.floor(e * o),
                        Math.floor(i * o),
                        {
                          allowImageDataAccess: a.imageDataAccessRequired,
                          rotation: n,
                          pixelRatio: o
                        }
                      );
                    })
                    .then(function(r) {
                      var a = new p(r);
                      return (
                        (a.x = r.x = t.xmin),
                        (a.y = r.y = t.ymax),
                        (a.resolution = r.resolution = t.width / e),
                        (r.rotation = n),
                        (r.pixelRatio = o),
                        (a.width = e),
                        (a.height = i),
                        a
                      );
                    });
                }),
                (t.prototype._singleExport = function(t, e, i, r) {
                  h.getBBox(l, t.center, t.resolution, e);
                  var o = new n(l[0], l[1], l[2], l[3], t.spatialReference);
                  return this._export(o, e[0], e[1], i, r).then(function(t) {
                    return [t];
                  });
                }),
                (t.prototype._tiledExport = function(t, e, i, o) {
                  var a = this,
                    h = s.create({
                      size: e,
                      spatialReference: t.spatialReference,
                      scales: [t.scale]
                    }),
                    p = new u(h),
                    d = p.getTileCoverage(t);
                  if (!d) return null;
                  var c = [];
                  return (
                    d.forEach(function(r, s, h, u) {
                      y.set(r, s, h, u), p.getTileBounds(l, y);
                      var d = new n(l[0], l[1], l[2], l[3], t.spatialReference);
                      c.push(a._export(d, e, e, i, o));
                    }),
                    r.all(c)
                  );
                }),
                t
              );
            })();
          }.apply(null, r)) || (t.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/layers/BaseDynamicLayerView2D": 1976,
      "esri/views/layers/LayerView": 2006,
      "esri/views/layers/RefreshableLayerView": 2008,
      "esri/views/2d/layers/LayerView2D": 2009,
      "esri/views/2d/support/Evented": 2012,
      "esri/views/2d/engine/BitmapSource": 2017,
      "esri/views/2d/engine/Canvas2DContainer": 2018,
      "esri/views/2d/engine/Bitmap": 2019,
      "esri/views/2d/viewStateUtils": 2020,
      "esri/views/2d/layers/support/ExportStrategy": 2044
    });
  })();
