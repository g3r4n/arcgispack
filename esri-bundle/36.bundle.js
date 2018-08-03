(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    1988: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(13),
        i(5),
        i(0),
        i(17),
        i(11),
        i(9),
        i(1),
        i(796),
        i(2017),
        i(2018),
        i(2009),
        i(2044),
        i(2008)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, a, o, s, h, p, u, d, l, c, y) {
            var f = o.getLogger("esri.views.2d.layers.MapImageLayerView2D");
            return (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t._handles = new a()),
                  (t.container = new d()),
                  (t.container.hidpi = !0),
                  t
                );
              }
              return (
                r(t, e),
                (t.prototype.hitTest = function(e, t) {
                  return null;
                }),
                (t.prototype.update = function(e) {
                  this.strategy.update(e), this.notifyChange("updating");
                }),
                (t.prototype.attach = function() {
                  var e = this,
                    t = this.layer,
                    i = t.imageMaxWidth,
                    r = t.imageMaxHeight,
                    n = t.version,
                    a = n >= 10.3,
                    o = n >= 10;
                  (this.strategy = new c({
                    container: this.container,
                    fetchSource: this.fetchImage.bind(this),
                    requestUpdate: this.requestUpdate.bind(this),
                    imageMaxWidth: i,
                    imageMaxHeight: r,
                    imageRotationSupported: a,
                    imageNormalizationSupported: o,
                    hidpi: !0
                  })),
                    (this._exportImageParameters = new p({
                      layer: this.layer
                    })),
                    this._handles.add(
                      this._exportImageParameters.watch("version", function(t) {
                        e._exportImageVersion !== t &&
                          ((e._exportImageVersion = t), e.requestUpdate());
                      })
                    );
                }),
                (t.prototype.detach = function() {
                  this.container.removeAllChildren(),
                    this.strategy.destroy(),
                    this._handles.removeAll(),
                    (this._exportImageParameters.layer = null),
                    this._exportImageParameters.destroy(),
                    (this._exportImageParameters = null);
                }),
                (t.prototype.moveStart = function() {}),
                (t.prototype.viewChange = function() {}),
                (t.prototype.moveEnd = function() {
                  this.requestUpdate();
                }),
                (t.prototype.doRefresh = function() {
                  this.requestUpdate();
                }),
                (t.prototype.isUpdating = function() {
                  return (
                    this.attached &&
                    (this.strategy.updating || this.updateRequested)
                  );
                }),
                (t.prototype.getPopupData = function(e) {
                  var t = this.view.scale;
                  return this.layer.allSublayers
                    .filter(function(e) {
                      var i = 0 === e.minScale || t <= e.minScale,
                        r = 0 === e.maxScale || t >= e.maxScale;
                      return (
                        e.popupTemplate && e.popupEnabled && e.visible && i && r
                      );
                    })
                    .map(function(t) {
                      var i = t.createQuery();
                      return (
                        (i.geometry = e),
                        (i.outFields = t.popupTemplate.requiredFields),
                        t.queryFeatures(i).then(function(e) {
                          return e.features;
                        })
                      );
                    });
                }),
                (t.prototype.fetchImage = function(e, t, r, n) {
                  var a = this;
                  return (
                    this._exportImageParameters.scale !== this.view.scale &&
                      ((this._exportImageParameters.scale = this.view.scale),
                      (this._exportImageVersion = this._exportImageParameters.version)),
                    (n = i({ timestamp: this.refreshTimestamp }, n)),
                    this.layer
                      .fetchImage(e, t, r, n)
                      .then(function(e) {
                        return a.notifyChange("updating"), new u.default(e);
                      })
                      .catch(function(e) {
                        return (
                          "cancel" !== e.dojoType && f.error(e),
                          a.notifyChange("updating"),
                          s.reject(e)
                        );
                      })
                  );
                }),
                n([h.subclass("esri.views.2d.layers.MapImageLayerView2D")], t)
              );
            })(h.declared(l, y));
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
          (n = function(e, t, i, r, n, a, o, s, h, p, u, d) {
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
            })(d.declared(n, a, s, p));
          }.apply(null, r)) || (e.exports = n);
    },
    2008: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2), i(0), i(3), i(1)]),
        void 0 ===
          (n = function(e, t, i, r, n, a) {
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
                r([a.property()], t.prototype, "layer", void 0),
                r(
                  [a.aliasOf("layer.refreshInterval")],
                  t.prototype,
                  "refreshInterval",
                  void 0
                ),
                r(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "refreshTimestamp",
                  void 0
                ),
                r([a.subclass("esri.layers.mixins.RefreshableLayerView")], t)
              );
            })(a.declared(n));
          }.apply(null, r)) || (e.exports = n);
    },
    2009: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(0), i(26), i(1), i(2006)]),
        void 0 ===
          (n = function(e, t, i, r, n, a, o) {
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
                      a = !r,
                      o = !n;
                    !a && i <= r && (a = !0),
                      !o && i >= n && (o = !0),
                      (e = a && o);
                  }
                  return e;
                }),
                r([a.property()], t.prototype, "attached", void 0),
                r([a.property()], t.prototype, "container", void 0),
                r([a.property()], t.prototype, "moving", void 0),
                r(
                  [a.property({ dependsOn: ["moving"] })],
                  t.prototype,
                  "rendering",
                  null
                ),
                r(
                  [
                    a.property({
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
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "updateParameters",
                  void 0
                ),
                r([a.property()], t.prototype, "updateRequested", void 0),
                r(
                  [a.property({ dependsOn: ["updateRequested", "attached"] })],
                  t.prototype,
                  "updating",
                  null
                ),
                r([a.property()], t.prototype, "view", void 0),
                r([a.subclass("esri.views.2d.layers.LayerView2D")], t)
              );
            })(a.declared(o));
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
            function a(e) {
              return e && "render" in e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = (function(e) {
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
                        (a(e) ||
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
                    return a(this._data) ? this._data.height : this._height;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "ready", {
                  get: function() {
                    return a(this._data)
                      ? this._data.width > 0 && this._data.height > 0
                      : this._width > 0;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "width", {
                  get: function() {
                    return a(this.data) ? this._data.width : this._width;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.draw = function(e, t, i, r, n, o, s, h, p) {
                  this.ready &&
                    (a(this._data)
                      ? this._data.render(e, t, i, r, n, o, s, h, p)
                      : (function(e) {
                          return e && !("render" in e);
                        })(this._data) &&
                        r &&
                        n &&
                        h &&
                        p &&
                        e.drawImage(this._data, t, i, r, n, o, s, h, p));
                }),
                (t.pool = new r(t, !0)),
                t
              );
            })(n.default);
            t.default = o;
          }.apply(null, r)) || (e.exports = n);
    },
    2018: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(9), i(774), i(309), i(310)]),
        void 0 ===
          (n = function(e, t, i, r, n, a, o) {
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
                  var a = Math.round(t * i.state.width),
                    h = Math.round(t * i.state.height),
                    p = { x: 0, y: 0, width: a, height: h },
                    u = { x: 0, y: 0, width: a, height: h },
                    d = e.area;
                  if (
                    (d &&
                      ((p.x = Math.round(t * d.x)),
                      (p.y = Math.round(t * d.y)),
                      (p.width = Math.round(t * d.width)),
                      (p.height = Math.round(t * d.height))),
                    void 0 !== e.width && void 0 !== e.height)
                  ) {
                    var l = e.width / e.height;
                    if (p.height * l < p.width) {
                      var c = p.height * l;
                      (p.x += Math.floor((p.width - c) / 2)),
                        (p.width = Math.floor(c));
                    } else {
                      var y = p.width / l;
                      (p.y += Math.floor((p.height - y) / 2)),
                        (p.height = Math.floor(y));
                    }
                    (u.width = e.width), (u.height = e.height);
                  } else (u.width = p.width), (u.height = p.height);
                  var f,
                    g = document.createElement("canvas"),
                    v = new Uint8Array(p.width * p.height * 4);
                  if (
                    ((g.width = u.width),
                    (g.height = u.height),
                    (i.context = g.getContext("2d")),
                    this.beforeRenderChildren(i, i),
                    void 0 !== e.rotation && null !== e.rotation)
                  ) {
                    var m = i.state,
                      w = m.clone();
                    (w.viewpoint.rotation = e.rotation),
                      (i.state = w),
                      this.renderChildren(i),
                      (i.state = m);
                  } else this.renderChildren(i);
                  this.afterRenderChildren(i, i);
                  try {
                    f = i.context.getImageData(u.x, u.y, u.width, u.height);
                  } catch (e) {
                    return r.reject(e);
                  }
                  (0 === p.x &&
                    0 === p.y &&
                    p.width === a &&
                    p.height === h &&
                    0 === u.x &&
                    0 === u.y &&
                    u.width === a &&
                    u.height === h) ||
                    o.resampleHermite(
                      v,
                      p.width,
                      p.height,
                      f.data,
                      u.width,
                      u.height,
                      !0
                    ),
                    i.context.putImageData(f, u.x, u.y);
                  var x = s[e.format ? e.format.toLowerCase() : "png"],
                    _ = {
                      dataURL: g.toDataURL(
                        x,
                        null != e.quality ? e.quality / 100 : 1
                      ),
                      x: u.x,
                      y: u.y,
                      width: u.width,
                      height: u.height
                    };
                  return e.returnByteBuffer && (_.data = v), r.resolve(_);
                }),
                (t.prototype.doRender = function(t) {
                  var i = this.element,
                    r = i.style;
                  if (this.visible) {
                    var n = t.state,
                      a = t.pixelRatio,
                      o = n.width,
                      s = n.height;
                    (i.width = o * (this.hidpi ? a : 1)),
                      (i.height = s * (this.hidpi ? a : 1)),
                      (r.display = "block"),
                      (r.opacity =
                        "" + Math.min(this.opacity, this.parent.opacity)),
                      (r.width = o + "px"),
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
                      a = r.height,
                      o = r.rotation,
                      s = r.pixelRatio,
                      h = this.hidpi ? s : 1,
                      p = (o * Math.PI) / 180,
                      u = Math.abs(Math.cos(p)),
                      d = Math.abs(Math.sin(p)),
                      l = Math.round(n * h * u + a * h * d),
                      c = r.worldScreenWidth * h;
                    if (c < l) {
                      var y = n * h * 0.5,
                        f = a * h * 0.5;
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
                (t.prototype.afterRenderChildren = function(e, t) {
                  t.context.restore();
                }),
                (t.prototype.renderChild = function(e, t) {
                  t.context.save(), e.processRender(t), t.context.restore();
                }),
                t
              );
            })(a);
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
                    a = r.resolution,
                    o = r.rotation,
                    s = (this.resolution / a) * r.pixelRatio;
                  if (!(s < 0.05)) {
                    i.save();
                    var h = r.toScreen(n, this.x, this.y),
                      p = h[0],
                      u = h[1];
                    if (
                      (s > 0.99 && s < 1.01
                        ? i.translate(Math.round(p), Math.round(u))
                        : (i.translate(p, u), i.scale(s, s)),
                      o)
                    ) {
                      var d = (o * Math.PI) / 180;
                      i.rotate(d);
                    }
                    t.rotation &&
                      (i.translate(0.5 * this.width, 0.5 * this.height),
                      i.rotate((-t.rotation * Math.PI) / 180),
                      i.translate(0.5 * -this.width, 0.5 * -this.height));
                    var l = t.resolution || this.resolution,
                      c = (this.x - t.x) / l,
                      y = -(this.y - t.y) / l,
                      f = (t.width || this.width) * (this.resolution / l),
                      g = (t.height || this.height) * (this.resolution / l);
                    i.clearRect(0, 0, this.width, this.height),
                      t.draw(
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
                t
              );
            })(r);
          }.apply(null, r)) || (e.exports = n);
    },
    2020: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            function i(e) {
              return e * r;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = Math.PI / 180;
            (t.snapToPixel = function(e, t, i) {
              var r = i.resolution,
                n = i.size;
              return (
                (e[0] = r * (Math.round(t[0] / r) + (n[0] % 2) * 0.5)),
                (e[1] = r * (Math.round(t[1] / r) + (n[1] % 2) * 0.5)),
                e
              );
            }),
              (t.getOuterSize = function(e, t) {
                var r = i(t.rotation),
                  n = Math.abs(Math.cos(r)),
                  a = Math.abs(Math.sin(r)),
                  o = t.size,
                  s = o[0],
                  h = o[1];
                return (
                  (e[0] = Math.round(h * a + s * n)),
                  (e[1] = Math.round(h * n + s * a)),
                  e
                );
              }),
              (t.getBBox = function(e, t, i, r) {
                var n = t[0],
                  a = t[1],
                  o = r[0],
                  s = r[1],
                  h = 0.5 * i;
                return (
                  (e[0] = n - h * o),
                  (e[1] = a - h * s),
                  (e[2] = n + h * o),
                  (e[3] = a + h * s),
                  e
                );
              }),
              (t.bboxIntersects = function(e, t) {
                var i = e[0],
                  r = e[1],
                  n = e[2],
                  a = e[3],
                  o = t[0],
                  s = t[1],
                  h = t[2],
                  p = t[3];
                return !(i > h || n < o || r > p || a < s);
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2044: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
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
          (n = function(e, t, i, r, n, a, o, s, h, p, u, d) {
            var l = a.create(),
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
              function e(e) {
                (this._imagePromise = null),
                  (this.hidpi = f.hidpi),
                  (this.imageDataAccessRequired = f.imageDataAccessRequired),
                  (this.imageMaxWidth = f.imageMaxWidth),
                  (this.imageMaxHeight = f.imageMaxHeight),
                  (this.imageRotationSupported = f.imageRotationSupported),
                  (this.imageNormalizationSupported =
                    f.imageNormalizationSupported);
                var t = i({}, f, e);
                (this.container = t.container),
                  (this.disposeSource = t.disposeSource),
                  (this.fetchSource = t.fetchSource),
                  (this.requestUpdate = t.requestUpdate),
                  (this.imageMaxWidth = t.imageMaxWidth),
                  (this.imageMaxHeight = t.imageMaxHeight),
                  (this.imageRotationSupported = t.imageRotationSupported),
                  (this.imageNormalizationSupported =
                    t.imageNormalizationSupported),
                  (this.hidpi = t.hidpi);
              }
              return (
                (e.prototype.destroy = function() {}),
                Object.defineProperty(e.prototype, "updating", {
                  get: function() {
                    return null !== this._imagePromise;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.update = function(e) {
                  var t = this,
                    i = e.state,
                    r = o.getInfo(i.spatialReference),
                    n = this.hidpi ? e.pixelRatio : 1;
                  if (
                    (this._imagePromise &&
                      (this._imagePromise.cancel(),
                      (this._imagePromise = null)),
                    e.stationary)
                  ) {
                    this.imageRotationSupported
                      ? ((c[0] = i.width), (c[1] = i.height))
                      : h.getOuterSize(c, i);
                    var a =
                        Math.floor(c[0] * n) > this.imageMaxWidth ||
                        Math.floor(c[1] * n) > this.imageMaxHeight,
                      s =
                        r &&
                        (i.extent.xmin < r.valid[0] ||
                          i.extent.xmax > r.valid[1]),
                      p = !this.imageNormalizationSupported && s,
                      u = !a && !p,
                      d = this.imageRotationSupported ? i.rotation : 0;
                    if (u) this._imagePromise = this._singleExport(i, c, d, n);
                    else {
                      var l = Math.min(this.imageMaxWidth, this.imageMaxHeight);
                      p && (l = Math.min(i.worldScreenWidth, l)),
                        (this._imagePromise = this._tiledExport(i, l, d, n));
                    }
                    this._imagePromise
                      .then(function(e) {
                        t._imagePromise = null;
                        var i = t.container.children.slice();
                        t.container.removeAllChildren(),
                          e.forEach(t.container.addChild, t.container),
                          t.disposeSource &&
                            i.forEach(function(e) {
                              t.disposeSource(e.source);
                            }, t);
                      })
                      .catch(function(e) {
                        if (((t._imagePromise = null), "cancel" !== e.dojoType))
                          throw e;
                      });
                  }
                }),
                (e.prototype.updateExports = function(e, t) {
                  for (
                    var i = 0, r = this.container.children;
                    i < r.length;
                    i++
                  ) {
                    var n = r[i];
                    if (!n.visible || !n.attached) return;
                    e(n, t)
                      ? console.error(
                          "ExportStrategy.updateExports doesn't support promise yet"
                        )
                      : n.requestRender();
                  }
                }),
                (e.prototype._export = function(e, t, i, n, a) {
                  var o = this;
                  return r
                    .resolve()
                    .then(function() {
                      return o.fetchSource(
                        e,
                        Math.floor(t * a),
                        Math.floor(i * a),
                        {
                          allowImageDataAccess: o.imageDataAccessRequired,
                          rotation: n,
                          pixelRatio: a
                        }
                      );
                    })
                    .then(function(r) {
                      var o = new p(r);
                      return (
                        (o.x = r.x = e.xmin),
                        (o.y = r.y = e.ymax),
                        (o.resolution = r.resolution = e.width / t),
                        (r.rotation = n),
                        (r.pixelRatio = a),
                        (o.width = t),
                        (o.height = i),
                        o
                      );
                    });
                }),
                (e.prototype._singleExport = function(e, t, i, r) {
                  h.getBBox(l, e.center, e.resolution, t);
                  var a = new n(l[0], l[1], l[2], l[3], e.spatialReference);
                  return this._export(a, t[0], t[1], i, r).then(function(e) {
                    return [e];
                  });
                }),
                (e.prototype._tiledExport = function(e, t, i, a) {
                  var o = this,
                    h = s.create({
                      size: t,
                      spatialReference: e.spatialReference,
                      scales: [e.scale]
                    }),
                    p = new u(h),
                    d = p.getTileCoverage(e);
                  if (!d) return null;
                  var c = [];
                  return (
                    d.forEach(function(r, s, h, u) {
                      y.set(r, s, h, u), p.getTileBounds(l, y);
                      var d = new n(l[0], l[1], l[2], l[3], e.spatialReference);
                      c.push(o._export(d, t, t, i, a));
                    }),
                    r.all(c)
                  );
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/layers/MapImageLayerView2D": 1988,
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
