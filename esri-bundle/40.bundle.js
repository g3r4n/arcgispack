(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    1994: function(e, t, n) {
      var r, o;
      (r = [n.dj.c(e.i), t, n(2), n(0), n(1), n(1967), n(2099)]),
        void 0 ===
          (o = function(e, t, n, r, o, i, c) {
            return (function(e) {
              function t() {
                return e.call(this) || this;
              }
              return (
                n(t, e),
                r(
                  [
                    o.property({ aliasOf: "controller.graphics", readOnly: !0 })
                  ],
                  t.prototype,
                  "graphics",
                  void 0
                ),
                r([o.subclass("esri.views.2d.layers.StreamLayerView2D")], t)
              );
            })(o.declared(c, i));
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
      "esri/views/2d/layers/StreamLayerView2D": 1994,
      "esri/views/layers/StreamLayerView": 2099
    });
  })();
