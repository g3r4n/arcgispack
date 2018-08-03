(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    1995: function(e, t, n) {
      var r, o;
      (r = [
        n.dj.c(e.i),
        t,
        n(2),
        n(0),
        n(109),
        n(110),
        n(43),
        n(24),
        n(9),
        n(1),
        n(2133),
        n(2099)
      ]),
        void 0 ===
          (o = function(e, t, r, o, i, c, a, l, s, p, u, d) {
            return (function(e) {
              function t() {
                return e.call(this) || this;
              }
              return (
                r(t, e),
                (t.prototype.createController = function() {
                  return c(this, void 0, void 0, function() {
                    var e, t, r;
                    return i(this, function(o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (e = l.ofType(a)),
                            [
                              4,
                              s.create(function(e) {
                                n.e(11)
                                  .then(
                                    function() {
                                      var t = [n(1968)];
                                      e.apply(null, t);
                                    }.bind(this)
                                  )
                                  .catch(n.oe);
                              })
                            ]
                          );
                        case 1:
                          return (
                            (t = o.sent()),
                            [
                              4,
                              (r = new t({
                                layer: this.layer,
                                layerView: this,
                                graphics: new e()
                              })).when()
                            ]
                          );
                        case 2:
                          return o.sent(), [2, r];
                      }
                    });
                  });
                }),
                o([p.property()], t.prototype, "controller", void 0),
                o(
                  [
                    p.property({ aliasOf: "controller.graphics", readOnly: !0 })
                  ],
                  t.prototype,
                  "graphics",
                  void 0
                ),
                o([p.subclass("esri.views.3d.layers.StreamLayerView3D")], t)
              );
            })(p.declared(d, u));
          }.apply(null, r)) || (e.exports = o);
    },
    2099: function(e, t, n) {
      var r, o;
      (r = [
        n.dj.c(e.i),
        t,
        n(2),
        n(0),
        n(3),
        n(10),
        n(53),
        n(17),
        n(9),
        n(26),
        n(1)
      ]),
        void 0 ===
          (o = function(e, t, n, r, o, i, c, a, l, s, p) {
            return (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t._handles = new a()),
                  (t.connectionError = null),
                  (t.connectionStatus = "disconnected"),
                  (t.filter = null),
                  t._handles.add(
                    s.on(t, "controller", "data-received", function(e) {
                      t.emit("data-received", e);
                    })
                  ),
                  t
                );
              }
              return (
                n(t, e),
                (t.prototype.connect = function() {
                  return this.controller.connection.connect();
                }),
                (t.prototype.disconnect = function() {
                  this.controller.connection.disconnect();
                }),
                (t.prototype.updateFilter = function(e) {
                  return "connected" !== this.connectionStatus
                    ? l.reject(
                        new i(
                          "stream-layer-view: updateFilter",
                          "Cannot update filter. The connection with the stream service is closed"
                        )
                      )
                    : this.controller
                        .updateFilter(e)
                        .then(function(e) {
                          return e;
                        })
                        .catch(function(e) {
                          throw e;
                        });
                }),
                r(
                  [
                    p.property({
                      aliasOf: "controller.connection.connectionError",
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "connectionError",
                  void 0
                ),
                r(
                  [
                    p.property({
                      aliasOf: "controller.connection.connectionStatus",
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "connectionStatus",
                  void 0
                ),
                r([p.property()], t.prototype, "controller", void 0),
                r(
                  [p.property({ aliasOf: "controller.filter", readOnly: !0 })],
                  t.prototype,
                  "filter",
                  void 0
                ),
                r([p.subclass("esri.views.layers.StreamLayerView")], t)
              );
            })(p.declared(o, c));
          }.apply(null, r)) || (e.exports = o);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/StreamLayerView3D": 1995,
      "esri/views/layers/StreamLayerView": 2099
    });
  })();
