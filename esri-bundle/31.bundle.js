(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    1981: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(0), i(17), i(1), i(2009), i(800)]),
        void 0 ===
          (n = function(e, t, i, r, n, p, o, a) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._handles = new n()),
                  (t.graphicsView = new a()),
                  (t.container = t.graphicsView.container),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.hitTest = function(e, t) {
                  return this.graphicsView.hitTest(e, t);
                }),
                (t.prototype.attach = function() {
                  var e = this;
                  this.layer
                    .createGraphicsController({ layerView: this })
                    .then(function(t) {
                      e._handles.add(
                        e.layer.on("graphic-update", function(t) {
                          return e.graphicsView.graphicUpdateHandler(t);
                        })
                      ),
                        (e.graphicsView.view = e.view),
                        (e.graphicsView.graphics = t.graphics);
                    });
                }),
                (t.prototype.detach = function() {
                  (this.graphicsView.graphics = null),
                    this._handles.removeAll();
                }),
                (t.prototype.update = function(e) {}),
                (t.prototype.moveStart = function() {}),
                (t.prototype.viewChange = function() {}),
                (t.prototype.moveEnd = function() {}),
                r([p.subclass("esri.views.2d.layers.GraphicsLayerView2D")], t)
              );
            })(p.declared(o));
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
          (n = function(e, t, i, r, n, p, o, a, s, d, u, l) {
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
                          s
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
                r([l.property()], t.prototype, "layer", void 0),
                r([l.property()], t.prototype, "parent", void 0),
                r(
                  [
                    l.property({
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
                    l.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                r([l.property()], t.prototype, "view", void 0),
                r(
                  [l.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                r(
                  [
                    l.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                r([l.subclass("esri.views.layers.LayerView")], t)
              );
            })(l.declared(n, p, a, d));
          }.apply(null, r)) || (e.exports = n);
    },
    2009: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(0), i(26), i(1), i(2006)]),
        void 0 ===
          (n = function(e, t, i, r, n, p, o) {
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
                      p = !r,
                      o = !n;
                    !p && i <= r && (p = !0),
                      !o && i >= n && (o = !0),
                      (e = p && o);
                  }
                  return e;
                }),
                r([p.property()], t.prototype, "attached", void 0),
                r([p.property()], t.prototype, "container", void 0),
                r([p.property()], t.prototype, "moving", void 0),
                r(
                  [p.property({ dependsOn: ["moving"] })],
                  t.prototype,
                  "rendering",
                  null
                ),
                r(
                  [
                    p.property({
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
                  [p.property({ readOnly: !0 })],
                  t.prototype,
                  "updateParameters",
                  void 0
                ),
                r([p.property()], t.prototype, "updateRequested", void 0),
                r(
                  [p.property({ dependsOn: ["updateRequested", "attached"] })],
                  t.prototype,
                  "updating",
                  null
                ),
                r([p.property()], t.prototype, "view", void 0),
                r([p.subclass("esri.views.2d.layers.LayerView2D")], t)
              );
            })(p.declared(o));
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/layers/GraphicsLayerView2D": 1981,
      "esri/views/layers/LayerView": 2006,
      "esri/views/2d/layers/LayerView2D": 2009
    });
  })();
