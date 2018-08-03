(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    2007: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (function(e) {
                (e[(e.FILL = 0)] = "FILL"),
                  (e[(e.LINE = 1)] = "LINE"),
                  (e[(e.MARKER = 2)] = "MARKER"),
                  (e[(e.TEXT = 3)] = "TEXT"),
                  (e[(e.LABEL = 4)] = "LABEL"),
                  (e[(e.NONE = 5)] = "NONE"),
                  (e[(e.UNKNOWN = 6)] = "UNKNOWN"),
                  (e[(e.COUNT = 7)] = "COUNT");
              })(t.WGLGeometryType || (t.WGLGeometryType = {})),
              (function(e) {
                (e[(e.SUCCEEDED = 0)] = "SUCCEEDED"),
                  (e[(e.FAILED_OUT_OF_MEMORY = 1)] = "FAILED_OUT_OF_MEMORY");
              })(
                t.WGLGeometryTransactionStatus ||
                  (t.WGLGeometryTransactionStatus = {})
              ),
              (function(e) {
                (e[(e.NONE = 0)] = "NONE"),
                  (e[(e.FILL = 1)] = "FILL"),
                  (e[(e.LINE = 2)] = "LINE"),
                  (e[(e.MARKER = 4)] = "MARKER"),
                  (e[(e.TEXT = 8)] = "TEXT"),
                  (e[(e.LABEL = 16)] = "LABEL"),
                  (e[(e.LABEL_ALPHA = 32)] = "LABEL_ALPHA"),
                  (e[(e.HITTEST = 64)] = "HITTEST"),
                  (e[(e.HIGHLIGHT = 128)] = "HIGHLIGHT"),
                  (e[(e.CLIP = 256)] = "CLIP"),
                  (e[(e.DEBUG = 512)] = "DEBUG"),
                  (e[(e.NUM_DRAW_PHASES = 12)] = "NUM_DRAW_PHASES");
              })(t.WGLDrawPhase || (t.WGLDrawPhase = {})),
              (function(e) {
                (e[(e.SIZE = 0)] = "SIZE"),
                  (e[(e.COLOR = 1)] = "COLOR"),
                  (e[(e.OPACITY = 2)] = "OPACITY"),
                  (e[(e.ROTATION = 3)] = "ROTATION");
              })(t.VVType || (t.VVType = {})),
              (function(e) {
                (e[(e.NONE = 0)] = "NONE"),
                  (e[(e.OPACITY = 1)] = "OPACITY"),
                  (e[(e.COLOR = 2)] = "COLOR"),
                  (e[(e.ROTATION = 4)] = "ROTATION"),
                  (e[(e.SIZE_MINMAX_VALUE = 8)] = "SIZE_MINMAX_VALUE"),
                  (e[(e.SIZE_SCALE_STOPS = 16)] = "SIZE_SCALE_STOPS"),
                  (e[(e.SIZE_FIELD_STOPS = 32)] = "SIZE_FIELD_STOPS"),
                  (e[(e.SIZE_UNIT_VALUE = 64)] = "SIZE_UNIT_VALUE");
              })(t.WGLVVFlag || (t.WGLVVFlag = {})),
              (function(e) {
                (e[(e.MINMAX_TARGETS_OUTLINE = 128)] =
                  "MINMAX_TARGETS_OUTLINE"),
                  (e[(e.SCALE_TARGETS_OUTLINE = 256)] =
                    "SCALE_TARGETS_OUTLINE"),
                  (e[(e.FIELD_TARGETS_OUTLINE = 512)] =
                    "FIELD_TARGETS_OUTLINE"),
                  (e[(e.UNIT_TARGETS_OUTLINE = 1024)] = "UNIT_TARGETS_OUTLINE");
              })(t.WGLVVTarget || (t.WGLVVTarget = {})),
              (function(e) {
                (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
                  (e[(e.BUTT = 1)] = "BUTT"),
                  (e[(e.ROUND = 2)] = "ROUND"),
                  (e[(e.SQUARE = 3)] = "SQUARE");
              })(t.CapType || (t.CapType = {})),
              (function(e) {
                (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
                  (e[(e.MITER = 1)] = "MITER"),
                  (e[(e.BEVEL = 2)] = "BEVEL"),
                  (e[(e.ROUND = 3)] = "ROUND");
              })(t.JoinType || (t.JoinType = {})),
              (function(e) {
                (e.SIMPLE_MARKER = "esriSMS"),
                  (e.SIMPLE_LINE = "esriSLS"),
                  (e.SIMPLE_FILL = "esriSFS"),
                  (e.PICTURE_MARKER = "esriPMS"),
                  (e.PICTURE_FILL = "esriPFS"),
                  (e.TEXT = "esriTS");
              })(t.EsriSymbolType || (t.EsriSymbolType = {})),
              (function(e) {
                (e.SIMPLE_MARKER = "simple-marker"),
                  (e.SIMPLE_LINE = "simple-line"),
                  (e.SIMPLE_FILL = "simple-fill"),
                  (e.PICTURE_MARKER = "picture-marker"),
                  (e.PICTURE_FILL = "picture-fill"),
                  (e.TEXT = "text");
              })(t.EsriSymbolTypeKebab || (t.EsriSymbolTypeKebab = {}));
          }.apply(null, r)) || (e.exports = n);
    },
    2010: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(222),
        i(184),
        i(10),
        i(11),
        i(39),
        i(136),
        i(2024),
        i(2007),
        i(2062)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, o, a, s, l, u, p) {
            function c(e) {
              for (var t = {}, i = 0, r = e; i < r.length; i++) {
                var n = r[i];
                t[n.name] = n.strideInBytes;
              }
              return t;
            }
            function f(e) {
              switch (e) {
                case u.WGLGeometryType.MARKER:
                  return T;
                case u.WGLGeometryType.FILL:
                  return V;
                case u.WGLGeometryType.LINE:
                  return L;
                case u.WGLGeometryType.TEXT:
                  return O;
                case u.WGLGeometryType.LABEL:
                  return b;
              }
              return null;
            }
            function v(e) {
              switch (e) {
                case "esriSMS":
                  return "simple-marker";
                case "esriPMS":
                  return "picture-marker";
                case "esriSLS":
                  return "simple-line";
                case "esriPLS":
                  return "picture-line";
                case "esriSFS":
                  return "simple-fill";
                case "esriPFS":
                  return "picture-fill";
                case "esriTS":
                  return "text";
              }
              return e;
            }
            function y(e) {
              var t = v(e.type);
              if (t) {
                switch (t) {
                  case "simple-marker":
                  case "picture-marker":
                  case "CIMPointSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function d(e) {
              var t = v(e.type);
              if (t) {
                switch (t) {
                  case "simple-fill":
                  case "picture-fill":
                  case "CIMPolygonSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function _(e) {
              var t = v(e.type);
              if (t) {
                switch (t) {
                  case "simple-line":
                  case "picture-line":
                  case "CIMLineSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function S(e) {
              var t = v(e.type);
              if (t) {
                switch (t) {
                  case "text":
                  case "CIMTextSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function h(e, t) {
              return !1;
            }
            function E(e) {
              return (e && e.length) || 0;
            }
            function m(e) {
              return "string" == typeof e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var I,
              g = o.getLogger("esri.views.2d.engine.webgl.Utils");
            (t.C_HITTEST_SEARCH_SIZE = 4),
              (t.C_VBO_GEOMETRY = "geometry"),
              (t.C_VBO_PERINSTANCE = "per_instance"),
              (t.C_VBO_PERINSTANCE_VV = "per_instance_vv"),
              (t.C_VBO_VISIBILITY = "visibility"),
              (t.C_VBO_VISIBILITY_RANGE = "visibilityRange"),
              (t.C_ICON_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 24, divisor: 0 }
              ]),
              (t.C_ICON_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 40, divisor: 0 }
              ]),
              (t.C_ICON_HEATMAP = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 28, divisor: 0 }
              ]),
              (t.C_FILL_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 24, divisor: 0 }
              ]),
              (t.C_FILL_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 32, divisor: 0 }
              ]),
              (t.C_LINE_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 32, divisor: 0 }
              ]),
              (t.C_LINE_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 44, divisor: 0 }
              ]),
              (t.C_TEXT_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 20, divisor: 0 },
                { name: t.C_VBO_VISIBILITY, strideInBytes: 1, divisor: 0 }
              ]),
              (t.C_TEXT_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 36, divisor: 0 },
                { name: t.C_VBO_VISIBILITY, strideInBytes: 1, divisor: 0 }
              ]),
              (t.C_LABEL_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 20, divisor: 0 },
                { name: t.C_VBO_VISIBILITY, strideInBytes: 1, divisor: 0 },
                { name: t.C_VBO_VISIBILITY_RANGE, strideInBytes: 2, divisor: 0 }
              ]),
              (t.C_ICON_STRIDE_SPEC = c(t.C_ICON_VERTEX_DEF)),
              (t.C_ICON_STRIDE_SPEC_VV = c(t.C_ICON_VERTEX_DEF_VV)),
              (t.C_ICON_STRIDE_SPEC_HEATMAP = c(t.C_ICON_HEATMAP)),
              (t.C_FILL_STRIDE_SPEC = c(t.C_FILL_VERTEX_DEF)),
              (t.C_FILL_STRIDE_SPEC_VV = c(t.C_FILL_VERTEX_DEF_VV)),
              (t.C_LINE_STRIDE_SPEC = c(t.C_LINE_VERTEX_DEF)),
              (t.C_LINE_STRIDE_SPEC_VV = c(t.C_LINE_VERTEX_DEF_VV)),
              (t.C_TEXT_STRIDE_SPEC = c(t.C_TEXT_VERTEX_DEF)),
              (t.C_TEXT_STRIDE_SPEC_VV = c(t.C_TEXT_VERTEX_DEF_VV)),
              (t.C_LABEL_STRIDE_SPEC = c(t.C_LABEL_VERTEX_DEF)),
              (t.getStrides = function(e, i, r) {
                switch ((void 0 === r && (r = !1), e)) {
                  case u.WGLGeometryType.MARKER:
                    return i
                      ? t.C_ICON_STRIDE_SPEC_VV
                      : r
                        ? t.C_ICON_STRIDE_SPEC_HEATMAP
                        : t.C_ICON_STRIDE_SPEC;
                  case u.WGLGeometryType.FILL:
                    return i ? t.C_FILL_STRIDE_SPEC_VV : t.C_FILL_STRIDE_SPEC;
                  case u.WGLGeometryType.LINE:
                    return i ? t.C_LINE_STRIDE_SPEC_VV : t.C_LINE_STRIDE_SPEC;
                  case u.WGLGeometryType.TEXT:
                    return i ? t.C_TEXT_STRIDE_SPEC_VV : t.C_TEXT_STRIDE_SPEC;
                  case u.WGLGeometryType.LABEL:
                    return t.C_LABEL_STRIDE_SPEC;
                }
                return null;
              });
            var T = [t.C_VBO_GEOMETRY],
              V = [t.C_VBO_GEOMETRY],
              L = [t.C_VBO_GEOMETRY],
              O = [t.C_VBO_GEOMETRY, t.C_VBO_VISIBILITY],
              b = [
                t.C_VBO_GEOMETRY,
                t.C_VBO_VISIBILITY,
                t.C_VBO_VISIBILITY_RANGE
              ];
            (t.getNamedBuffers = f),
              (t.getSymbolGeometryType = function(e) {
                return y(e)
                  ? u.WGLGeometryType.MARKER
                  : _(e)
                    ? u.WGLGeometryType.LINE
                    : d(e)
                      ? u.WGLGeometryType.FILL
                      : S(e)
                        ? u.WGLGeometryType.TEXT
                        : u.WGLGeometryType.UNKNOWN;
              }),
              (t.normalizeSymbolType = v),
              (t.isMarkerSymbol = y),
              (t.isFillSymbol = d),
              (t.isLineSymbol = _),
              (t.isPictureSymbol = function(e) {
                var t = v(e.type);
                if (t) {
                  switch (t) {
                    case "picture-marker":
                    case "picture-line":
                    case "picture-fill":
                      return !0;
                  }
                  return !1;
                }
                return !1;
              }),
              (t.isTextSymbol = S),
              (t.getTextProperties = function(e) {
                return p.TextProperties.pool.acquire(
                  e.color
                    ? l.copyAndPremultiply(e.color)
                    : [255, 255, 255, 255],
                  e.haloColor
                    ? l.copyAndPremultiply(e.haloColor)
                    : [255, 255, 255, 255],
                  a.pt2px(e.haloSize),
                  a.pt2px(e.font.size),
                  (e.angle * Math.PI) / 180,
                  e.xoffset / e.font.size,
                  e.yoffset / e.font.size,
                  "left" === e.horizontalAlignment
                    ? 0
                    : "right" === e.horizontalAlignment
                      ? 1
                      : 0.5,
                  "top" === e.verticalAlignment
                    ? 0
                    : "bottom" === e.verticalAlignment
                      ? 1
                      : 0.5
                );
              }),
              (t.isSameUniformValue = h),
              (t.isSameMaterialInfo = function(e, t) {
                if (e.materialKey !== t.materialKey) return !1;
                if (E(e.texBindingInfo) !== E(t.texBindingInfo)) return !1;
                if (E(e.materialParams) !== E(t.materialParams)) return !1;
                for (var i = e.texBindingInfo.length, r = 0; r < i; ++r) {
                  var n = e.texBindingInfo[r],
                    o = t.texBindingInfo[r];
                  if (
                    n.unit !== o.unit ||
                    n.pageId !== o.pageId ||
                    n.semantic !== o.semantic
                  )
                    return !1;
                }
                var a = e.materialParams.length;
                for (r = 0; r < a; ++r) {
                  var s = e.materialParams[r],
                    l = t.materialParams[r];
                  if (s.name !== l.name || (s.value, l.value, 1)) return !1;
                }
                return !0;
              }),
              (t.serializeString = function(e, t, i) {
                for (var r = 0, n = e.length, o = 0; o < n; ++o)
                  t && (t[i + r] = e.charCodeAt(o)), ++r;
                return t && (t[i + r] = 0), ++r;
              }),
              (t.deserializeString = function(e, t, i) {
                var r = 0;
                e.s = "";
                for (var n = !0; n; ) {
                  var o = t[i + r];
                  ++r, 0 !== o ? (e.s += String.fromCharCode(o)) : (n = !1);
                }
                return r;
              }),
              (t.isDefined = function(e) {
                return null !== e && void 0 !== e;
              }),
              (t.isNumber = function(e) {
                return "number" == typeof e;
              }),
              (t.isString = m),
              (t.isStringOrNull = function(e) {
                return null == e || m(e);
              }),
              (t.lerp = function(e, t, i) {
                return e + (t - e) * i;
              });
            var C = (function() {
              function e() {
                (this._arr = []), (this._push = this._push.bind(this));
              }
              return (
                (e.prototype._push = function(e, t) {
                  this._arr.push(t);
                }),
                (e.prototype.getKeys = function(e) {
                  return (
                    (this._arr.length = 0),
                    e && e.forEach(this._push),
                    this._arr
                  );
                }),
                e
              );
            })();
            t.KeysGetter = C;
            var R = (function() {
              function e() {
                (this._arr = []), (this._push = this._push.bind(this));
              }
              return (
                (e.prototype._push = function(e, t) {
                  this._arr.push(e);
                }),
                (e.prototype.getValues = function(e) {
                  return (
                    (this._arr.length = 0),
                    e && e.forEach(this._push),
                    this._arr
                  );
                }),
                e
              );
            })();
            (t.ValuesGetter = R),
              (t.getCapType = function(e) {
                switch (e) {
                  case "butt":
                    return u.CapType.BUTT;
                  case "round":
                    return u.CapType.ROUND;
                  case "square":
                    return u.CapType.SQUARE;
                  default:
                    return (
                      g.error(
                        new n(
                          "mapview-invalid-type",
                          "Cap type " +
                            e +
                            " is not a valid option. Defaulting to round"
                        )
                      ),
                      u.CapType.ROUND
                    );
                }
              }),
              (t.getJoinType = function(e) {
                switch (e) {
                  case "miter":
                    return u.JoinType.MITER;
                  case "bevel":
                    return u.JoinType.BEVEL;
                  case "round":
                    return u.JoinType.ROUND;
                  default:
                    return (
                      g.error(
                        new n(
                          "mapview-invalid-type",
                          "Join type " +
                            e +
                            " is not a valid option. Defaulting to round"
                        )
                      ),
                      u.JoinType.ROUND
                    );
                }
              }),
              (t.getVVType = function(e) {
                switch (e) {
                  case "opacity":
                    return u.VVType.OPACITY;
                  case "color":
                    return u.VVType.COLOR;
                  case "rotation":
                    return u.VVType.ROTATION;
                  case "size":
                    return u.VVType.SIZE;
                  default:
                    return g.error("Cannot interpret unknown vv: " + e), null;
                }
              }),
              (t.createArcadeFunction = function(e, t) {
                var n = e.valueExpression,
                  o = e.spatialReference,
                  a = e.layer,
                  l = s.createFunction(n),
                  u = new r();
                return function(e, r) {
                  u.repurposeFromGraphicLikeObject(e.geometry, e.attributes, a);
                  var n =
                      r &&
                      new i({ viewingMode: r.viewingMode, scale: r.scale }),
                    p = {
                      vars: { $feature: u, $view: n || {} },
                      spatialReference: o
                    },
                    c = s.executeFunction(l, p);
                  return t ? t(c) : c;
                };
              }),
              (t.copyMeshData = function(e, t, i, r, n, o, a) {
                for (var s in o)
                  for (
                    var l = o[s].stride,
                      u = o[s].data,
                      p = i[s].data,
                      c = (l * n.vertexCount) / 4,
                      f = (l * e) / 4,
                      v = (l * n.vertexFrom) / 4,
                      y = 0;
                    y < c;
                    ++y
                  )
                    p[y + f] = u[y + v];
                var d = n.indexCount;
                for (y = 0; y < d; ++y)
                  r[y + t] = a[y + n.indexFrom] - n.vertexFrom + e;
              }),
              (t.C_VBO_INFO = (((I = {})[t.C_VBO_GEOMETRY] = 35044),
              (I[t.C_VBO_VISIBILITY] = 35044),
              (I[t.C_VBO_VISIBILITY_RANGE] = 35048),
              I)),
              (t.createGeometryData = function(e, t) {
                for (var i = [], r = 0; r < 5; ++r) {
                  for (var n = {}, o = 0, a = f(r); o < a.length; o++) {
                    var s = a[o];
                    n[s] = { data: t(r, s) };
                  }
                  i.push({ data: e(r), buffers: n });
                }
                return i;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2024: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2028)]),
        void 0 ===
          (n = function(e, t, i) {
            function r(e, t) {
              return (
                Array.isArray(t)
                  ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]))
                  : ((e[0] = t.r), (e[1] = t.g), (e[2] = t.b), (e[3] = t.a)),
                e
              );
            }
            function n(e, t, i) {
              void 0 === t && (t = 0), void 0 === i && (i = !1);
              var r = e[t + 3];
              return (
                (e[t + 0] *= r),
                (e[t + 1] *= r),
                (e[t + 2] *= r),
                i || (e[t + 3] *= 255),
                e
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.white = [255, 255, 255, 1]);
            var o = [0, 0, 0, 0];
            (t.premultiplyAlpha = n),
              (t.copyAndPremultiply = function(e) {
                return n(r([], e));
              }),
              (t.premultiplyAlphaUint32 = function(e) {
                return n(r(o, e)), i.i8888to32(o[0], o[1], o[2], o[3]);
              }),
              (t.premultiplyAlphaRGBA = function(e) {
                var t = e.r,
                  r = e.g,
                  n = e.b,
                  o = e.a,
                  a = t * o,
                  s = r * o,
                  l = n * o,
                  u = 255 * o;
                return i.i8888to32(a, s, l, u);
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2028: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = new Float32Array(1),
              r = new Uint32Array(i.buffer);
            (t.nextHighestPowerOfTwo = function(e) {
              var t = e;
              return (
                t--,
                (t |= t >> 1),
                (t |= t >> 2),
                (t |= t >> 4),
                (t |= t >> 8),
                (t |= t >> 16),
                ++t
              );
            }),
              (t.toUint32 = function(e) {
                return (i[0] = e), r[0];
              }),
              (t.i1616to32 = function(e, t) {
                return (65535 & e) | (t << 16);
              }),
              (t.i8888to32 = function(e, t, i, r) {
                return (
                  (255 & e) | ((255 & t) << 8) | ((255 & i) << 16) | (r << 24)
                );
              }),
              (t.i8816to32 = function(e, t, i) {
                return (255 & e) | ((255 & t) << 8) | (i << 16);
              }),
              (t.numTo32 = function(e) {
                return 0 | e;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2038: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.serializeList = function(e, t) {
                if (null !== t) {
                  e.writeInt32(t.length);
                  for (var i = 0, r = t; i < r.length; i++) r[i].serialize(e);
                  return e;
                }
                e.writeInt32(0);
              }),
              (t.deserializeList = function(e, t, i) {
                for (
                  var r = e.readInt32(), n = new Array(r), o = 0;
                  o < n.length;
                  o++
                )
                  n[o] = t.deserialize(e, i);
                return n;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2053: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(39), i(2024), i(2007), i(2010), i(322)]),
        void 0 ===
          (n = function(e, t, i, r, n, o, a) {
            function s(e) {
              return o.isNumber(e.minDataValue) &&
                o.isNumber(e.maxDataValue) &&
                null != e.minSize &&
                null != e.maxSize
                ? n.WGLVVFlag.SIZE_MINMAX_VALUE
                : ((e.expression && "view.scale" === e.expression) ||
                    (e.valueExpression &&
                      "$view.scale" === e.valueExpression)) &&
                  Array.isArray(e.stops)
                  ? n.WGLVVFlag.SIZE_SCALE_STOPS
                  : (null != e.field ||
                      (e.expression && "view.scale" !== e.expression) ||
                      (e.valueExpression &&
                        "$view.scale" !== e.valueExpression)) &&
                    Array.isArray(e.stops)
                    ? n.WGLVVFlag.SIZE_FIELD_STOPS
                    : (null != e.field ||
                        (e.expression && "view.scale" !== e.expression) ||
                        (e.valueExpression &&
                          "$view.scale" !== e.valueExpression)) &&
                      null != e.valueUnit
                      ? n.WGLVVFlag.SIZE_UNIT_VALUE
                      : n.WGLVVFlag.NONE;
            }
            function l(e) {
              return { value: e.value, size: i.toPt(e.size) };
            }
            function u(e) {
              return e.map(function(e) {
                return l(e);
              });
            }
            function p(e) {
              if ("string" == typeof e || "number" == typeof e)
                return i.toPt(e);
              var t = e;
              return {
                type: "size",
                expression: t.expression,
                stops: u(t.stops)
              };
            }
            function c(e) {
              var t = {
                values: [0, 0, 0, 0, 0, 0, 0, 0],
                opacities: [0, 0, 0, 0, 0, 0, 0, 0]
              };
              if (o.isString(e.field))
                if (e.stops) {
                  if (e.stops.length > 8) return null;
                  for (var i = e.stops, r = 0; r < 8; ++r) {
                    var n = i[Math.min(r, i.length - 1)];
                    (t.values[r] = n.value), (t.opacities[r] = n.opacity);
                  }
                } else {
                  if (!e.opacityValues) return null;
                  if (
                    !o.isDefined(e.minDataValue) ||
                    !o.isDefined(e.maxDataValue)
                  )
                    return null;
                  if (2 !== e.opacityValues.length) return null;
                  (t.values[0] = e.minDataValue),
                    (t.opacities[0] = e.opacityValues[0]),
                    (t.values[1] = e.maxDataValue),
                    (t.opacities[1] = e.opacityValues[1]);
                  for (r = 2; r < 8; ++r)
                    (t.values[r] = e.maxDataValue),
                      (t.opacities[r] = e.opacityValues[1]);
                }
              else {
                if (
                  !(
                    (e.stops && e.stops.length >= 0) ||
                    (e.opacityValues && e.opacityValues.length >= 0)
                  )
                )
                  return null;
                var a =
                  e.stops && e.stops.length >= 0
                    ? e.stops[0].opacity
                    : e.opacityValues[0];
                for (r = 0; r < 8; r++)
                  (t.values[r] = 1 / 0), (t.opacities[r] = a);
              }
              return t;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getTypeOfSizeVisualVariable = s),
              (t.getVisualVariableSizeValueRepresentationRatio = function(
                e,
                t
              ) {
                if (!e || !t) return e;
                switch (t) {
                  case "radius":
                  case "distance":
                    return 2 * e;
                  case "diameter":
                  case "width":
                    return e;
                  case "area":
                    return Math.sqrt(e);
                }
                return e;
              }),
              (t.stopToSizeStop = l),
              (t.normalizeSizeStops = u),
              (t.normalizeSizeElement = p),
              (t.getVisualVariablesFields = function(e) {
                var t = e && e.length > 0 ? {} : null;
                return (
                  t &&
                    e.forEach(function(e) {
                      var i = e.type;
                      e.field && (t[i] = e.field);
                    }),
                  t
                );
              }),
              (t.convertVisualVariables = function(e) {
                var t = e && e.length > 0 ? {} : null,
                  o = t ? {} : null;
                if (!t) return { vvFields: t, vvRanges: o };
                for (var l = 0, f = e; l < f.length; l++) {
                  var v = f[l],
                    y = v.type;
                  if ((v.field && (t[y] = v.field), "size" === y)) {
                    o.size || (o.size = {});
                    var d = v;
                    switch (s(d)) {
                      case n.WGLVVFlag.SIZE_MINMAX_VALUE:
                        o.size.minMaxValue = {
                          minDataValue: d.minDataValue,
                          maxDataValue: d.maxDataValue,
                          minSize: p(d.minSize),
                          maxSize: p(d.maxSize)
                        };
                        break;
                      case n.WGLVVFlag.SIZE_SCALE_STOPS:
                        o.size.scaleStops = { stops: u(d.stops) };
                        break;
                      case n.WGLVVFlag.SIZE_FIELD_STOPS:
                        for (
                          var _ = [],
                            S = [],
                            h = u(d.stops),
                            E = h.length,
                            m = 0;
                          m < 6;
                          m++
                        ) {
                          var I = h[Math.min(m, E - 1)];
                          _.push(I.value), S.push(i.pt2px(I.size));
                        }
                        o.size.fieldStops = { values: _, sizes: S };
                        break;
                      case n.WGLVVFlag.SIZE_UNIT_VALUE:
                        o.size.unitValue = {
                          unit: d.valueUnit,
                          valueRepresentation: d.valueRepresentation
                        };
                    }
                  } else if ("color" === y) {
                    var g = a.convertVisualVariables([v], {
                      modelSize: null,
                      symbolSize: null,
                      unitInMeters: 1,
                      transformation: null
                    });
                    for (o.color = g.color, m = 0; m < 32; m += 4)
                      r.premultiplyAlpha(o.color.colors, m, !0);
                  } else if ("opacity" === y) o.opacity = c(v);
                  else if ("rotation" === y) {
                    var T = v;
                    o.rotation = { type: T.rotationType };
                  }
                }
                return { vvFields: t, vvRanges: o };
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2061: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(13), i(43), i(184), i(136), i(2007), i(2053)]),
        void 0 ===
          (n = function(e, t, i, r, n, o, a, s) {
            function l(e, t, n) {
              if (!e) return null;
              var a = 0,
                s = {},
                l = e.clone(),
                p = l.visualVariables,
                c = null;
              if ("simple" !== l.type) {
                var f = l.field,
                  v = l.valueExpression;
                if (!f && v) {
                  var y = "$$fake" + a++,
                    d = o.createFunction(v);
                  (s[y] = function(e, i) {
                    return (
                      u.repurposeFromGraphicLikeObject(
                        e.geometry,
                        e.attributes,
                        n
                      ),
                      o.executeFunction(d, {
                        vars: { $feature: u, $view: o.getViewInfo(i) },
                        spatialReference: t
                      })
                    );
                  }),
                    (l.field = y),
                    (l.valueExpression = null),
                    (c = function(e, t) {
                      return (
                        (t.attributes[y] = s[y](t)),
                        e.valueExpression
                          ? e.getSymbol(r.fromJSON(t))
                          : e.getSymbol(t)
                      );
                    });
                }
              }
              return (
                p &&
                  (l.visualVariables = p.map(function(e) {
                    if (e.normalizationField) {
                      var r = e.field,
                        l = e.normalizationField,
                        p = "$$fake" + a++;
                      return (
                        (s[p] = function(e, t) {
                          return e.attributes[r] / e.attributes[l];
                        }),
                        ((c = i({}, e)).field = p),
                        delete c.normalizationField,
                        c
                      );
                    }
                    if (
                      e.valueExpression &&
                      "$view.scale" !== e.valueExpression
                    ) {
                      var c,
                        f = e.valueExpression,
                        v = ((p = "$$fake" + a++), o.createFunction(f));
                      return (
                        (s[p] = function(e, i) {
                          return (
                            u.repurposeFromGraphicLikeObject(
                              e.geometry,
                              e.attributes,
                              n
                            ),
                            o.executeFunction(v, {
                              vars: { $feature: u, $view: o.getViewInfo(i) },
                              spatialReference: t
                            })
                          );
                        }),
                        ((c = i({}, e)).field = p),
                        delete c.valueExpression,
                        c
                      );
                    }
                    return e;
                  })),
                { renderer: l, normalizingFunctions: s, getSymbolFunction: c }
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var u = new n();
            (t.createRendererInfo = function(e, t, i) {
              var r = l(e, t, i) || {
                  renderer: null,
                  normalizingFunctions: null,
                  getSymbolFunction: null
                },
                n = r && r.normalizingFunctions,
                o = r && r.getSymbolFunction;
              e = (r && r.renderer) || e;
              var a = s.convertVisualVariables(e.visualVariables);
              return {
                renderer: e,
                vvFields: a.vvFields,
                vvRanges: a.vvRanges,
                getValue: function(e, t) {
                  var i = n[t];
                  return i ? i(e) : e.attributes[t];
                },
                getSymbol: function(e) {
                  return o
                    ? o(this.renderer, e)
                    : this.renderer.getSymbol
                      ? this.renderer.getSymbol.call(this.renderer, e)
                      : null;
                }
              };
            }),
              (t.getNormalizedRenderer = function(e, t, i) {
                var r = l(e, t, i) || {
                  renderer: null,
                  normalizingFunctions: null,
                  getSymbolFunction: null
                };
                return (r && r.renderer) || e;
              }),
              (t.getSymbol = function(e, t) {
                return e.getSymbol(t);
              }),
              (t.isRendererWebGLCompatible = function(e) {
                if (!e) return !1;
                if (
                  -1 ===
                  ["simple", "class-breaks", "unique-value", "heatmap"].indexOf(
                    e.type
                  )
                )
                  return !1;
                if (e.visualVariables)
                  for (var t = 0, i = e.visualVariables; t < i.length; t++) {
                    var r = i[t];
                    switch (r.type) {
                      case "color":
                      case "opacity":
                        if (r.stops && r.stops.length > 8) return !1;
                        break;
                      case "size":
                        if (
                          s.getTypeOfSizeVisualVariable(r) ===
                            a.WGLVVFlag.SIZE_FIELD_STOPS &&
                          r.stops &&
                          r.stops.length > 6
                        )
                          return !1;
                    }
                  }
                return !0;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2062: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(59)]),
        void 0 ===
          (n = function(e, t, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
              function e() {
                (this.color = [0, 0, 0, 0]),
                  (this.haloColor = [0, 0, 0, 0]),
                  (this.haloSize = 0),
                  (this.size = 12),
                  (this.angle = 0),
                  (this.offsetX = 0),
                  (this.offsetY = 0),
                  (this.hAnchor = 0),
                  (this.vAnchor = 0);
              }
              return (
                (e.prototype.acquire = function(e, t, i, r, n, o, a, s, l) {
                  (this.color = e),
                    (this.haloColor = t),
                    (this.haloSize = i),
                    (this.size = r),
                    (this.angle = n),
                    (this.offsetX = o),
                    (this.offsetY = a),
                    (this.hAnchor = s),
                    (this.vAnchor = l);
                }),
                (e.prototype.release = function() {
                  (this.color[0] = this.color[1] = this.color[2] = this.color[3] = 0),
                    (this.haloColor[0] = this.haloColor[1] = this.haloColor[2] = this.haloColor[3] = 0),
                    (this.haloSize = 0),
                    (this.size = 0),
                    (this.angle = 0),
                    (this.offsetX = 0),
                    (this.offsetY = 0),
                    (this.hAnchor = 0),
                    (this.vAnchor = 0);
                }),
                (e.pool = new i(e)),
                e
              );
            })();
            t.TextProperties = r;
          }.apply(null, r)) || (e.exports = n);
    },
    2068: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2007), i(2079), i(2103), i(2069), i(2038)]),
        void 0 ===
          (n = function(e, t, i, r, n, o, a) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function() {
              function e(e, t, i) {
                (this.unit = e), (this.pageId = t), (this.semantic = i);
              }
              return (
                (e.prototype.clone = function() {
                  return new e(this.unit, this.pageId, this.semantic);
                }),
                (e.prototype.serialize = function(e) {
                  return e.writeInt32(this.unit), e.writeInt32(this.pageId), e;
                }),
                (e.deserialize = function(t) {
                  return new e(t.readInt32(), t.readInt32(), "u_texture");
                }),
                e
              );
            })();
            t.TexBindingInfo = s;
            var l = (function() {
              function e(e, t) {
                (this.name = e), (this.value = t);
              }
              return (
                (e.prototype.clone = function() {
                  return new e(this.name, this.value);
                }),
                (e.prototype.serialize = function(e) {
                  return e.writeInt32(this.value), e;
                }),
                (e.deserialize = function(t) {
                  return new e("u_my_param", t.readInt32());
                }),
                e
              );
            })();
            t.MaterialParam = l;
            var u = (function() {
              function e() {
                (this.texBindingInfo = []), (this.materialParams = []);
              }
              return (
                (e.fromSprite = function(t, n, a) {
                  var l = new e(),
                    u = new o();
                  return (
                    (u.geometryType = n),
                    t
                      ? ((u.sdf = t.sdf),
                        (u.pattern = !0),
                        l.texBindingInfo.push(new s(1, t.page, "u_texture")))
                      : ((u.sdf = !1), (u.pattern = !1)),
                    0 === a
                      ? (u.vvOpacity = u.vvSizeMinMaxValue = u.vvSizeScaleStops = u.vvSizeFieldStops = u.vvSizeUnitValue = u.vvColor = u.vvRotation = !1)
                      : ((u.vvOpacity = 0 != (a & i.WGLVVFlag.OPACITY)),
                        (u.vvSizeMinMaxValue =
                          0 != (a & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                        (u.vvSizeScaleStops =
                          0 != (a & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                        (u.vvSizeFieldStops =
                          0 != (a & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                        (u.vvSizeUnitValue =
                          0 != (a & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                        (u.vvColor = 0 != (a & i.WGLVVFlag.COLOR)),
                        (u.vvRotation = 0 != (a & i.WGLVVFlag.ROTATION))),
                    (u.visibility = !1),
                    (l.materialKey = r.getMaterialKey(u)),
                    (l.materialKeyInfo = u),
                    l
                  );
                }),
                (e.fromGlyph = function(t, n, a) {
                  var l = new e(),
                    u = new o();
                  return (
                    (u.geometryType = n),
                    (u.sdf = !0),
                    (u.pattern = !1),
                    (u.visibility = !1),
                    (u.heatmap = !1),
                    l.texBindingInfo.push(new s(2, t.page, "u_texture")),
                    0 === a
                      ? (u.vvOpacity = u.vvSizeMinMaxValue = u.vvSizeScaleStops = u.vvSizeFieldStops = u.vvSizeUnitValue = u.vvColor = u.vvRotation = !1)
                      : ((u.vvOpacity = 0 != (a & i.WGLVVFlag.OPACITY)),
                        (u.vvSizeMinMaxValue =
                          0 != (a & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                        (u.vvSizeScaleStops =
                          0 != (a & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                        (u.vvSizeFieldStops =
                          0 != (a & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                        (u.vvSizeUnitValue =
                          0 != (a & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                        (u.vvColor = 0 != (a & i.WGLVVFlag.COLOR)),
                        (u.vvRotation = 0 != (a & i.WGLVVFlag.ROTATION))),
                    (l.materialKey = r.getMaterialKey(u)),
                    (l.materialKeyInfo = u),
                    l
                  );
                }),
                (e.prototype.copy = function(e) {
                  (this.materialParams = e.materialParams.map(function(e) {
                    return e.clone();
                  })),
                    (this.texBindingInfo = e.texBindingInfo.map(function(e) {
                      return e.clone();
                    })),
                    e.materialKeyInfo &&
                      ((this.materialKeyInfo = new o()),
                      this.materialKeyInfo.copy(e.materialKeyInfo)),
                    (this.materialKey = e.materialKey);
                }),
                (e.prototype.serialize = function(e) {
                  return (
                    e.writeInt32(this.materialKey),
                    a.serializeList(e, this.texBindingInfo),
                    a.serializeList(e, this.materialParams),
                    e
                  );
                }),
                (e.deserialize = function(t) {
                  var i = new e();
                  return (
                    (i.materialKey = t.readInt32()),
                    (i.texBindingInfo = a.deserializeList(t, s)),
                    (i.materialParams = a.deserializeList(t, l)),
                    (i.materialKeyInfo = new o()),
                    n(i.materialKeyInfo, i.materialKey),
                    i
                  );
                }),
                e
              );
            })();
            t.default = u;
          }.apply(null, r)) || (e.exports = n);
    },
    2069: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return (function() {
              function e() {
                (this.sdf = !1),
                  (this.vvSizeMinMaxValue = !1),
                  (this.vvSizeScaleStops = !1),
                  (this.vvSizeFieldStops = !1),
                  (this.vvSizeUnitValue = !1),
                  (this.vvColor = !1),
                  (this.vvRotation = !1),
                  (this.vvOpacity = !1),
                  (this.visibility = !1),
                  (this.pattern = !1),
                  (this.heatmap = !1);
              }
              return (
                (e.prototype.copy = function(e) {
                  (this.geometryType = e.geometryType),
                    (this.sdf = e.sdf),
                    (this.vvSizeMinMaxValue = e.vvSizeMinMaxValue),
                    (this.vvSizeScaleStops = e.vvSizeScaleStops),
                    (this.vvSizeFieldStops = e.vvSizeFieldStops),
                    (this.vvSizeUnitValue = e.vvSizeUnitValue),
                    (this.vvColor = e.vvColor),
                    (this.vvRotation = e.vvRotation),
                    (this.vvOpacity = e.vvOpacity),
                    (this.visibility = e.visibility),
                    (this.pattern = e.pattern),
                    (this.heatmap = e.heatmap);
                }),
                (e.prototype.hasVV = function() {
                  return (
                    void 0 === this._hasVV &&
                      (this._hasVV =
                        this.vvColor ||
                        this.vvOpacity ||
                        this.vvRotation ||
                        this.vvSizeMinMaxValue ||
                        this.vvSizeScaleStops ||
                        this.vvSizeFieldStops ||
                        this.vvSizeUnitValue),
                    this._hasVV
                  );
                }),
                (e.prototype.hasVVSize = function() {
                  return (
                    this.vvSizeMinMaxValue ||
                    this.vvSizeFieldStops ||
                    this.vvSizeScaleStops ||
                    this.vvSizeUnitValue
                  );
                }),
                (e.prototype.hasVVColor = function() {
                  return this.vvColor;
                }),
                (e.prototype.hasVVRotation = function() {
                  return this.vvRotation;
                }),
                (e.prototype.hasVVOpacity = function() {
                  return this.vvOpacity;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2079: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2007), i(2068), i(2069)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            function o(e) {
              if (e.geometryType === i.WGLGeometryType.UNKNOWN) return -1;
              var t =
                (function(e) {
                  var t = [];
                  return (
                    (t[0] = !!e.sdf),
                    (t[1] = !!e.vvSizeMinMaxValue),
                    (t[2] = !!e.vvSizeScaleStops),
                    (t[3] = !!e.vvSizeFieldStops),
                    (t[4] = !!e.vvSizeUnitValue),
                    (t[5] = !!e.vvColor),
                    (t[6] = !!e.vvRotation),
                    (t[7] = !!e.vvOpacity),
                    (t[8] = !!e.visibility),
                    (t[9] = !!e.pattern),
                    (t[10] = !!e.heatmap),
                    t.reduce(function(e, t, i) {
                      return t && (e |= 1 << (i + 2)), e;
                    }, 0)
                  );
                })(e) << 3;
              return e.geometryType + t;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createTextMaterialInfo = function(e, t, a) {
                var s = new r.default(),
                  l = new n();
                return (
                  (l.geometryType = a),
                  (l.sdf = !0),
                  (l.pattern = !1),
                  (l.visibility = !1),
                  (l.heatmap = !1),
                  s.texBindingInfo.push(
                    new r.TexBindingInfo(2, e.page, "u_texture")
                  ),
                  0 === t
                    ? (l.vvOpacity = l.vvSizeMinMaxValue = l.vvSizeScaleStops = l.vvSizeFieldStops = l.vvSizeUnitValue = l.vvColor = l.vvRotation = !1)
                    : ((l.vvOpacity = 0 != (t & i.WGLVVFlag.OPACITY)),
                      (l.vvSizeMinMaxValue =
                        0 != (t & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                      (l.vvSizeScaleStops =
                        0 != (t & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                      (l.vvSizeFieldStops =
                        0 != (t & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                      (l.vvSizeUnitValue =
                        0 != (t & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                      (l.vvColor = 0 != (t & i.WGLVVFlag.COLOR)),
                      (l.vvRotation = 0 != (t & i.WGLVVFlag.ROTATION))),
                  (s.materialKey = o(l)),
                  (s.materialKeyInfo = l),
                  s
                );
              }),
              (t.createMaterialInfo = function(e, t, a) {
                var s = new r.default(),
                  l = new n();
                if (((l.geometryType = t), e)) {
                  var u = e.spriteMosaicItem;
                  (l.sdf = u.sdf),
                    (l.pattern = !0),
                    s.texBindingInfo.push(
                      new r.TexBindingInfo(1, u.page, "u_texture")
                    );
                } else (l.sdf = !1), (l.pattern = !1);
                return (
                  0 === a
                    ? (l.vvOpacity = l.vvSizeMinMaxValue = l.vvSizeScaleStops = l.vvSizeFieldStops = l.vvSizeUnitValue = l.vvColor = l.vvRotation = !1)
                    : ((l.vvOpacity = 0 != (a & i.WGLVVFlag.OPACITY)),
                      (l.vvSizeMinMaxValue =
                        0 != (a & i.WGLVVFlag.SIZE_MINMAX_VALUE)),
                      (l.vvSizeScaleStops =
                        0 != (a & i.WGLVVFlag.SIZE_SCALE_STOPS)),
                      (l.vvSizeFieldStops =
                        0 != (a & i.WGLVVFlag.SIZE_FIELD_STOPS)),
                      (l.vvSizeUnitValue =
                        0 != (a & i.WGLVVFlag.SIZE_UNIT_VALUE)),
                      (l.vvColor = 0 != (a & i.WGLVVFlag.COLOR)),
                      (l.vvRotation = 0 != (a & i.WGLVVFlag.ROTATION))),
                  (l.visibility = !1),
                  (s.materialKey = o(l)),
                  (s.materialKeyInfo = l),
                  s
                );
              }),
              (t.getMaterialKey = o),
              (t.getMaterialVariations = function(e) {
                return {
                  geometryType: 7 & e,
                  variations: [
                    0 != (1 & (e >>= 3)),
                    0 != (2 & e),
                    0 != (4 & e),
                    0 != (8 & e),
                    0 != (16 & e),
                    0 != (32 & e),
                    0 != (64 & e),
                    0 != (128 & e),
                    0 != (256 & e),
                    0 != (512 & e),
                    0 != (1024 & e),
                    0 != (2048 & e),
                    0 != (4096 & e)
                  ]
                };
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2103: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return function(e, t) {
              return (
                (e.geometryType = 3 & t),
                (t >>= 2),
                (e.sdf = 0 != (4 & t)),
                (e.vvSizeMinMaxValue = 0 != (8 & t)),
                (e.vvSizeScaleStops = 0 != (16 & t)),
                (e.vvSizeFieldStops = 0 != (32 & t)),
                (e.vvSizeUnitValue = 0 != (64 & t)),
                (e.vvColor = 0 != (128 & t)),
                (e.vvRotation = 0 != (256 & t)),
                (e.vvOpacity = 0 != (512 & t)),
                (e.visibility = 0 != (1024 & t)),
                (e.pattern = 0 != (2048 & t)),
                (e.heatmap = 0 != (4096 & t)),
                e
              );
            };
          }.apply(null, r)) || (e.exports = n);
    },
    2112: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2026)]),
        void 0 ===
          (n = function(e, t, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
              function e() {
                (this._pool = []), (this._set = new i.default());
              }
              return (
                (e.prototype.acquire = function() {
                  if (0 === this._pool.length) return new i.default();
                  var e = this._pool.pop();
                  return this._set.delete(e), e;
                }),
                (e.prototype.release = function(e) {
                  e &&
                    !this._set.has(e) &&
                    (e.clear(),
                    this._pool.length < 5e4 &&
                      (this._pool.push(e), this._set.add(e)));
                }),
                (e.acquire = function() {
                  return n.acquire();
                }),
                (e.release = function(e) {
                  return n.release(e);
                }),
                e
              );
            })();
            t.default = r;
            var n = new r();
          }.apply(null, r)) || (e.exports = n);
    },
    2113: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2), i(0), i(3), i(777), i(1), i(2012)]),
        void 0 ===
          (n = function(e, t, i, r, n, o, a, s) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  this.handles.add([
                    this.tileStore.on("update", this.onTileUpdate.bind(this))
                  ]);
                }),
                (t.prototype.destroy = function() {}),
                Object.defineProperty(t.prototype, "supportsTileUpdates", {
                  get: function() {
                    return !1;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "spatialReference", {
                  get: function() {
                    var e = this.get("tileStore.spatialReference");
                    return (e && e.toJSON()) || null;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                r(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "supportsTileUpdates",
                  null
                ),
                r(
                  [a.property({ constructOnly: !0 })],
                  t.prototype,
                  "remoteClient",
                  void 0
                ),
                r(
                  [a.property({ constructOnly: !0 })],
                  t.prototype,
                  "service",
                  void 0
                ),
                r(
                  [a.property({ dependsOn: ["tileStore.spatialReference"] })],
                  t.prototype,
                  "spatialReference",
                  null
                ),
                r(
                  [a.property({ constructOnly: !0 })],
                  t.prototype,
                  "tileStore",
                  void 0
                ),
                r([a.subclass()], t)
              );
            })(a.declared(n, o, s.default));
            t.default = l;
          }.apply(null, r)) || (e.exports = n);
    },
    2283: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(420),
        i(10),
        i(11),
        i(2284),
        i(9),
        i(2112),
        i(1),
        i(21),
        i(189),
        i(225),
        i(775),
        i(2061),
        i(2010),
        i(2114),
        i(2150),
        i(2113)
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
            l,
            u,
            p,
            c,
            f,
            v,
            y,
            d,
            _,
            S,
            h,
            E
          ) {
            function m(e, t) {
              switch (e) {
                case "esriGeometryPoint":
                case "esriGeometryPolyline":
                case "esriGeometryMultipoint":
                  return !0;
                case "esriGeometryPolygon":
                  return (function(e) {
                    var t = e && e.getSymbols();
                    return (
                      (function(e) {
                        return (
                          e &&
                          ("unique-value" === e.type ||
                            "class-breaks" === e.type) &&
                          null !== e.backgroundFillSymbol
                        );
                      })(e) ||
                      t.some(function(e) {
                        return (
                          "simple-fill" === e.type || "picture-fill" === e.type
                        );
                      })
                    );
                  })(t);
                default:
                  return (
                    T.error(
                      new o("mapview-invalid-type", e + " is not supported")
                    ),
                    !1
                  );
              }
            }
            function I(e, t) {
              _.isMarkerSymbol(e) || _.isLineSymbol(e)
                ? t.add(e)
                : _.isFillSymbol(e) &&
                  (t.add(e),
                  (function(e) {
                    return e.outline && "none" !== e.outline.style;
                  })(e) && t.add(e.outline));
            }
            function g(e, t, i) {
              i.has(e) || i.set(e, new Set());
              for (var r = i.get(e), n = t.length, o = 0; o < n; o++) {
                var a = t.charCodeAt(o);
                r.add(a);
              }
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var T = a.getLogger(
                "esri.views.2d.layers.features.processors.SymbolProcessor"
              ),
              V = (function(e) {
                function t() {
                  var t = (null !== e && e.apply(this, arguments)) || this;
                  return (
                    (t._symbolToMosaicItemMap = new Map()),
                    (t._visualSetPromises = new Map()),
                    (t.type = "symbol"),
                    t
                  );
                }
                return (
                  i(t, e),
                  (t.prototype.destroy = function() {
                    this._visualSetPromises.forEach(function(e, t) {
                      e.cancel();
                    }),
                      this._visualSetPromises.clear(),
                      this._symbolToMosaicItemMap.clear(),
                      this.notifyChange("updating");
                  }),
                  Object.defineProperty(t.prototype, "supportsTileUpdates", {
                    get: function() {
                      return !0;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "labelingInfo", {
                    get: function() {
                      return this.configuration &&
                        this.configuration.labelingInfo
                        ? this.configuration.labelingInfo.map(function(e) {
                            return f.fromJSON(e);
                          })
                        : null;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "labelClassInfos", {
                    get: function() {
                      var e = this;
                      return this.labelingInfo
                        ? this.labelingInfo.map(function(t) {
                            return {
                              labelOptions: t.getOptions(e.spatialReference),
                              labelExpression: t.getLabelExpression(),
                              labelClass: t
                            };
                          })
                        : null;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "factory", {
                    get: function() {
                      if (!this.configuration) return null;
                      var e = { fields: this.fields };
                      return S.default.from(
                        this.renderer,
                        e,
                        this._symbolToMosaicItemMap,
                        this.service.geometryType,
                        this.service.objectIdField,
                        c.fromJSON(this.spatialReference),
                        this.configuration.devicePixelRatio,
                        this.labelingInfo
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "queryInfo", {
                    get: function() {
                      var e = this.configuration,
                        t = e.renderer,
                        i = e.definitionExpression,
                        r = e.outFields,
                        n = e.gdbVersion,
                        o = e.historicMoment,
                        a = this.service.geometryType,
                        s = this._getReturnCentroid(this.rendererInfo.renderer),
                        l = m(a, this.rendererInfo.renderer),
                        u =
                          "esriGeometryPoint" === a ||
                          "esriGeometryMultipoint" === a ||
                          s
                            ? 20
                            : 0,
                        p = null,
                        c = t.visualVariables;
                      return (
                        c &&
                          c.some(function(e) {
                            if (
                              "size" === e.type &&
                              e.field &&
                              !e.normalizationField
                            )
                              return (p = [e.field + " DESC"]), !0;
                          }),
                        {
                          definitionExpression: i,
                          orderByFields: p,
                          outFields: r,
                          pixelBuffer: u,
                          returnCentroid: s,
                          returnGeometry: l,
                          gdbVersion: n,
                          historicMoment: o
                        }
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "renderer", {
                    get: function() {
                      return this.configuration
                        ? v.fromJSON(this.configuration.renderer)
                        : null;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "rendererInfo", {
                    get: function() {
                      return this.configuration
                        ? d.createRendererInfo(
                            v.fromJSON(this.configuration.renderer),
                            this.tileStore.spatialReference,
                            { fields: this.service.fields }
                          )
                        : null;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "updating", {
                    get: function() {
                      return this._visualSetPromises.size > 0;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "fields", {
                    get: function() {
                      return this.service.fields;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.onTileData = function(e, t) {
                    var i = this,
                      r = t.addOrUpdate,
                      n = t.clear,
                      o = t.remove,
                      a = (r && r.length
                        ? this._processFeatures(e, r)
                        : l.resolve()
                      )
                        .then(function(t) {
                          var r = (t && t.message) || null,
                            a = (t && t.transferList) || null;
                          return i.remoteClient.invoke(
                            "tileRenderer.onTileData",
                            {
                              tileKey: e.id,
                              data: { addOrUpdate: r, remove: o, clear: n }
                            },
                            a
                          );
                        })
                        .catch(function(t) {
                          return i._handleError(e, t);
                        });
                    return (
                      this._visualSetPromises.set(e, a),
                      a.then(
                        function() {
                          return i._cleanPromise(e);
                        },
                        function() {
                          return i._cleanPromise(e);
                        }
                      ),
                      this.notifyChange("updating"),
                      a
                    );
                  }),
                  (t.prototype.onTileError = function(e, t) {
                    var i = this,
                      r = this.remoteClient.invoke("tileRenderer.onTileError", {
                        tileKey: e.id,
                        error: t
                      });
                    return (
                      this._visualSetPromises.set(e, r),
                      r.then(
                        function() {
                          return i._cleanPromise(e);
                        },
                        function() {
                          return i._cleanPromise(e);
                        }
                      ),
                      this.notifyChange("updating"),
                      r
                    );
                  }),
                  (t.prototype.onTileUpdate = function(e) {
                    for (var t = 0, i = e.removed; t < i.length; t++) {
                      var r = i[t],
                        n = this._visualSetPromises;
                      if (!n.has(r)) return;
                      n.get(r).cancel(),
                        n.delete(r),
                        this.notifyChange("updating");
                    }
                  }),
                  (t.prototype._cleanPromise = function(e) {
                    this._visualSetPromises.delete(e),
                      this.notifyChange("updating");
                  }),
                  (t.prototype._processFeatures = function(e, t) {
                    var i = this;
                    return t && t.length
                      ? this._getMosaicItems(e, t).then(function(r) {
                          return i._writeFeatures(e, t, r);
                        })
                      : l.resolve(null);
                  }),
                  (t.prototype._writeFeatures = function(e, t, i) {
                    for (
                      var r = this.factory,
                        n = r.createMeshData(t.length),
                        o = { viewingMode: "", scale: e.scale },
                        a = 0,
                        s = t;
                      a < s.length;
                      a++
                    ) {
                      var l = s[a];
                      r.write(n, l, o, i, this._symbolToMosaicItemMap);
                    }
                    return this._encodeDisplayData(n);
                  }),
                  (t.prototype._encodeDisplayData = function(e) {
                    var t = {},
                      i = new Array();
                    return e.encode(t, i), { message: t, transferList: i };
                  }),
                  (t.prototype._handleError = function(e, t) {
                    if (t && "cancel" !== t.dojoType)
                      return this.remoteClient.invoke(
                        "tileRenderer.onTileError",
                        { tileKey: e.id, error: t.message }
                      );
                  }),
                  (t.prototype._getReturnCentroid = function(e) {
                    function t(e) {
                      if (!e) return !1;
                      var t = e.type;
                      return (
                        "simple-marker" === t ||
                        "picture-marker" === t ||
                        "text" === t
                      );
                    }
                    if (
                      "esriGeometryPolygon" === this.service.geometryType &&
                      this.labelingInfo
                    )
                      return !0;
                    if ("esriGeometryPolygon" !== this.service.geometryType)
                      return !1;
                    switch (e.type) {
                      case "simple":
                        return t(e.symbol);
                      case "unique-value":
                        return (
                          t(e.defaultSymbol) ||
                          e.uniqueValueInfos.some(function(e) {
                            return t(e.symbol);
                          })
                        );
                      case "class-breaks":
                        return (
                          t(e.defaultSymbol) ||
                          e.classBreakInfos.some(function(e) {
                            return t(e.symbol);
                          })
                        );
                      default:
                        return !0;
                    }
                  }),
                  (t.prototype._getMosaicItems = function(e, t) {
                    for (
                      var i = u.default.acquire(),
                        r = s.acquire(),
                        o = this._createLabelFeatures(e.scale, t, r),
                        a = 0,
                        p = this.renderer.getSymbols();
                      a < p.length;
                      a++
                    ) {
                      var c = p[a];
                      if (_.isTextSymbol(c)) {
                        var f = c;
                        g(f, h.bidiText(f.text)[0], r);
                      } else I(c, i);
                    }
                    if (
                      this.renderer instanceof n.UniqueValueRenderer ||
                      this.renderer instanceof n.ClassBreaksRenderer
                    ) {
                      var v = this.renderer.backgroundFillSymbol;
                      v && I(v, i);
                    }
                    var y = this._symbolToMosaicItemMap,
                      d = s.acquire(),
                      S = [],
                      E = 0;
                    return (
                      i.forEach(function(e) {
                        y.has(e.id) ||
                          (d.set(E, e),
                          S.push({ symbol: e.toJSON(), id: E }),
                          E++);
                      }),
                      r.forEach(function(e, t) {
                        if (y.has(t.id)) {
                          var i = y.get(t.id).glyphMosaicItems,
                            r = [];
                          e.forEach(function(e) {
                            ((i && i.length < e) || !i[e]) && (r[e] = e);
                          }),
                            r.length > 0 &&
                              (d.set(E, t),
                              S.push({
                                symbol: t.toJSON(),
                                id: E,
                                glyphIds: r
                              }),
                              E++);
                        } else {
                          d.set(E, t);
                          var n = [];
                          e.forEach(function(e) {
                            return n.push(e);
                          }),
                            S.push({ symbol: t.toJSON(), id: E, glyphIds: n }),
                            E++;
                        }
                      }),
                      S.length > 0
                        ? this.remoteClient
                            .invoke("tileRenderer.getMaterialItems", S)
                            .then(function(e) {
                              for (var t = 0, i = e; t < i.length; t++) {
                                var r = i[t],
                                  n = d.get(r.id);
                                if (n)
                                  if (_.isTextSymbol(n))
                                    if (y.has(n.id)) {
                                      var a = y.get(n.id).glyphMosaicItems,
                                        l = r.mosaicItem.glyphMosaicItems;
                                      if (l)
                                        for (var u = 0; u < l.length; u++)
                                          null != l[u] && (a[u] = l[u]);
                                    } else y.set(n.id, r.mosaicItem);
                                  else y.set(n.id, r.mosaicItem);
                              }
                              return s.release(d), o;
                            })
                        : (u.default.release(i), s.release(r), l.resolve(o))
                    );
                  }),
                  (t.prototype._getLabelClassInfos = function(e) {
                    return this.labelClassInfos
                      .map(function(e, t) {
                        return { id: t, labelClassInfo: e };
                      })
                      .filter(function(t) {
                        var i = t.labelClassInfo;
                        return (
                          (!i.labelClass.minScale ||
                            i.labelClass.minScale >= e ||
                            0 === i.labelClass.minScale) &&
                          (!i.labelClass.maxScale ||
                            i.labelClass.maxScale <= e ||
                            0 === i.labelClass.maxScale)
                        );
                      });
                  }),
                  (t.prototype._createLabelFeatures = function(e, t, i) {
                    if (!this.labelingInfo || !t || 0 === t.length) return null;
                    var r = this._getLabelClassInfos(e);
                    if (0 === r.length) return null;
                    for (
                      var n = s.acquire(),
                        o = r.map(function(e) {
                          return e.id;
                        }),
                        a = new S.LabelGrid(
                          y.COLLISION_EARLY_REJECT_BUCKET_SIZE
                        ),
                        l = 0,
                        u = t;
                      l < u.length;
                      l++
                    ) {
                      var p = u[l],
                        c = this.service.geometryType,
                        f = 0,
                        v = 0;
                      if ("esriGeometryPoint" === c) {
                        var d = p.geometry;
                        (f = d.x), (v = d.y);
                      } else {
                        if ("esriGeometryPolygon" !== c) return null;
                        (f = p.centroid.x), (v = p.centroid.y);
                      }
                      var _ = p.attributes[this.service.objectIdField];
                      if (!a.checkOverlap(f, v)) {
                        for (
                          var E = new Array(r.length), m = 0;
                          m < r.length;
                          m++
                        ) {
                          var I = r[m].labelClassInfo,
                            T = h.bidiText(this._evaluateLabelExpression(p, I)),
                            V = T[0],
                            L = T[1];
                          g(I.labelClass.symbol, V, i),
                            (E[m] = { text: V, rtl: L });
                        }
                        n.set(_, { text: E, labelingInfo: o });
                      }
                    }
                    return n;
                  }),
                  (t.prototype._evaluateLabelExpression = function(e, t) {
                    return t.labelClass.symbol &&
                      f.evaluateWhere(t.labelClass.where, e.attributes) &&
                      t.labelExpression.expression
                      ? f.buildLabelText(
                          t.labelExpression.expression,
                          e,
                          this.fields,
                          t.labelOptions
                        )
                      : "";
                  }),
                  r(
                    [p.property({ readOnly: !0 })],
                    t.prototype,
                    "supportsTileUpdates",
                    null
                  ),
                  r([p.property()], t.prototype, "configuration", void 0),
                  r(
                    [p.property({ dependsOn: ["configuration"] })],
                    t.prototype,
                    "labelingInfo",
                    null
                  ),
                  r(
                    [p.property({ dependsOn: ["labelingInfo"] })],
                    t.prototype,
                    "labelClassInfos",
                    null
                  ),
                  r(
                    [
                      p.property({
                        dependsOn: ["configuration", "service", "fields"]
                      })
                    ],
                    t.prototype,
                    "factory",
                    null
                  ),
                  r(
                    [p.property({ constructOnly: !0 })],
                    t.prototype,
                    "queryInfo",
                    null
                  ),
                  r(
                    [p.property({ dependsOn: ["configuration"] })],
                    t.prototype,
                    "renderer",
                    null
                  ),
                  r(
                    [p.property({ dependsOn: ["configuration"] })],
                    t.prototype,
                    "rendererInfo",
                    null
                  ),
                  r(
                    [p.property({ readOnly: !0 })],
                    t.prototype,
                    "updating",
                    null
                  ),
                  r(
                    [p.property({ dependsOn: ["service"] })],
                    t.prototype,
                    "fields",
                    null
                  ),
                  r([p.subclass()], t)
                );
              })(p.declared(E.default));
            t.default = V;
          }.apply(null, r)) || (e.exports = n);
    },
    2284: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(59)]),
        void 0 ===
          (n = function(e, t, i) {
            var r = (function() {
                function e(e, t) {
                  void 0 === e && (e = 50),
                    void 0 === t && (t = 50),
                    (this._pool = new i(
                      Map,
                      !1,
                      function(e) {
                        return e.clear();
                      },
                      t,
                      e
                    ));
                }
                return (
                  (e.prototype.acquire = function() {
                    return this._pool.acquire();
                  }),
                  (e.prototype.release = function(e) {
                    this._pool.release(e);
                  }),
                  (e.acquire = function() {
                    return n.acquire();
                  }),
                  (e.release = function(e) {
                    return n.release(e);
                  }),
                  e
                );
              })(),
              n = new r(100);
            return r;
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/engine/webgl/enums": 2007,
      "esri/views/2d/engine/webgl/Utils": 2010,
      "esri/views/2d/engine/webgl/color": 2024,
      "esri/views/2d/engine/webgl/number": 2028,
      "esri/views/2d/engine/webgl/util/serializationUtils": 2038,
      "esri/views/2d/engine/webgl/visualVariablesUtils": 2053,
      "esri/views/2d/engine/webgl/rendererInfoUtils": 2061,
      "esri/views/2d/engine/webgl/SymbolProperties": 2062,
      "esri/views/2d/engine/webgl/MaterialInfo": 2068,
      "esri/views/2d/engine/webgl/MaterialKeyInfo": 2069,
      "esri/views/2d/engine/webgl/MaterialInfoUtils": 2079,
      "esri/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations": 2103,
      "esri/core/SetPool": 2112,
      "esri/views/2d/layers/features/processors/BaseProcessor": 2113,
      "esri/views/2d/layers/features/processors/SymbolProcessor": 2283,
      "esri/core/MapPool": 2284
    });
  })();
