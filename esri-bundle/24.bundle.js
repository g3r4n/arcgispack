(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    1975: function(e, n, t) {
      var r, i;
      (r = [
        t.dj.c(e.i),
        n,
        t(109),
        t(110),
        t(38),
        t(269),
        t(9),
        t(84),
        t(227),
        t(434)
      ]),
        void 0 ===
          (i = function(e, n, t, r, i, a, o, s, u, c) {
            function l(e, n, t) {
              var r = s.getMetersPerUnitForSR(n.spatialReference),
                a = e.demResolution.min / r,
                o = Math.round(n.width / a),
                u = Math.round(n.height / a),
                c = o + 1,
                l = u + 1,
                f = new Float64Array(c * l * 3),
                p = new Float32Array(c * l * 2),
                h = 0,
                v = 0,
                w = new Uint32Array(o * u * 2 * 3),
                m = 0,
                y = 0;
              d.spatialReference = n.spatialReference;
              for (var b = 0; b < l; b++)
                for (var R = n.ymin + n.height * (b / u), g = 0; g < c; g++) {
                  var A = n.xmin + n.width * (g / o);
                  (d.x = A),
                    (d.y = R),
                    (f[h++] = A),
                    (f[h++] = R),
                    (f[h++] = e.elevationAt(d) || 0);
                  var M = g / o,
                    x = b / u;
                  (p[v++] = M),
                    (p[v++] = x),
                    b !== u &&
                      g !== o &&
                      ((w[y++] = m + 1),
                      (w[y++] = m + c + 1),
                      (w[y++] = m + c),
                      (w[y++] = m),
                      (w[y++] = m + 1),
                      (w[y++] = m + c)),
                    m++;
                }
              return new i.Mesh({
                vertexAttributes: { position: f, uv: p },
                components: [
                  {
                    faces: w,
                    shading: "smooth",
                    material: (t && t.material) || null
                  }
                ],
                spatialReference: n.spatialReference
              });
            }
            function f(e) {
              return r(this, void 0, void 0, function() {
                return t(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return (function(e) {
                        return c.isOfType(e, "elevation");
                      })(e)
                        ? [4, e.load()]
                        : [3, 2];
                    case 1:
                      return [2, n.sent()];
                    case 2:
                      return [4, e.load()];
                    case 3:
                      return (
                        n.sent(),
                        [
                          4,
                          o.eachAlways(
                            e.layers.map(function(e) {
                              return e.load();
                            })
                          )
                        ]
                      );
                    case 4:
                      return n.sent(), [2, e];
                  }
                });
              });
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
              (n.create = function(e, n, i) {
                return r(this, void 0, void 0, function() {
                  var r;
                  return t(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return e instanceof u || e instanceof a
                          ? [4, f(e)]
                          : [3, 3];
                      case 1:
                        return [
                          4,
                          t
                            .sent()
                            .createElevationSampler(n, {
                              demResolution:
                                (i && i.demResolution) || "finest-contiguous"
                            })
                        ];
                      case 2:
                        return (r = t.sent()), [3, 4];
                      case 3:
                        (r = e), (t.label = 4);
                      case 4:
                        return [2, l(r, n, i)];
                    }
                  });
                });
              });
            var d = new i.Point();
          }.apply(null, r)) || (e.exports = i);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/geometry/support/meshUtils/elevation": 1975
    });
  })();
