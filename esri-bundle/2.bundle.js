(window.webpackJsonp = window.webpackJsonp || []).push([
  [2, 21],
  {
    1963: function(e, r, a) {
      var t, n;
      (t = [
        a.dj.c(e.i),
        r,
        a(13),
        a(18),
        a(24),
        a(10),
        a(9),
        a(781),
        a(126),
        a(2074)
      ]),
        void 0 ===
          (n = function(e, r, a, t, n, i, o, l, y, c) {
            function u(e) {
              switch (e.type) {
                case "Map Service":
                  return (function(e) {
                    return p(e).then(function(e) {
                      return e
                        ? { className: "TileLayer" }
                        : { className: "MapImageLayer" };
                    });
                  })(e);
                case "Feature Service":
                  return (function(e) {
                    return L(e).then(function(e) {
                      if ("object" == typeof e) {
                        var r = { outFields: ["*"] };
                        return (
                          null != e.id && (r.layerId = e.id),
                          { className: "FeatureLayer", properties: r }
                        );
                      }
                      return { className: "GroupLayer" };
                    });
                  })(e);
                case "Feature Collection":
                  return (function(e) {
                    return e
                      .load()
                      .then(function() {
                        return e.fetchData();
                      })
                      .then(function(e) {
                        if (e && Array.isArray(e.layers)) {
                          if (c.isMapNotesLayer(e))
                            return { className: "MapNotesLayer" };
                          if (1 === e.layers.length)
                            return { className: "FeatureLayer" };
                        }
                        return { className: "GroupLayer" };
                      });
                  })(e);
                case "Scene Service":
                  return (function(e) {
                    return L(e).then(function(r) {
                      if ("object" == typeof r) {
                        var a = {},
                          t = void 0;
                        if (
                          (null != r.id
                            ? ((a.layerId = r.id),
                              (t = e.url + "/layers/" + r.id))
                            : (t = e.url),
                          Array.isArray(e.typeKeywords) &&
                            e.typeKeywords.length > 0)
                        )
                          for (
                            var n = {
                                IntegratedMesh: "IntegratedMeshLayer",
                                "3DObject": "SceneLayer",
                                Point: "SceneLayer",
                                PointCloud: "PointCloudLayer"
                              },
                              i = 0,
                              o = Object.keys(n);
                            i < o.length;
                            i++
                          ) {
                            var l = o[i];
                            if (-1 !== e.typeKeywords.indexOf(l))
                              return { className: n[l] };
                          }
                        return d(t).then(function(e) {
                          var r = "SceneLayer";
                          return (
                            null != e && "IntegratedMesh" === e.layerType
                              ? (r = "IntegratedMeshLayer")
                              : null != e &&
                                "PointCloud" === e.layerType &&
                                (r = "PointCloudLayer"),
                            { className: r, properties: a }
                          );
                        });
                      }
                      return { className: "GroupLayer" };
                    });
                  })(e);
                case "Image Service":
                  return (function(e) {
                    return p(e).then(function(r) {
                      var a = new n(e.typeKeywords);
                      return r
                        ? a.find(function(e) {
                            return "elevation 3d layer" === e.toLowerCase();
                          })
                          ? { className: "ElevationLayer" }
                          : { className: "TileLayer" }
                        : { className: "ImageryLayer" };
                    });
                  })(e);
                case "Stream Service":
                  return { className: "StreamLayer" };
                case "Vector Tile Service":
                  return { className: "VectorTileLayer" };
                case "KML":
                  return { className: "KMLLayer" };
                case "WMTS":
                  return { className: "WMTSLayer" };
                case "WMS":
                  return { className: "WMSLayer" };
                default:
                  return o.reject(
                    new i(
                      "portal:unknown-item-type",
                      "Unknown item type '${type}'",
                      { type: e.type }
                    )
                  );
              }
            }
            function s(e) {
              return (0, l.layerLookupMap[e.className])().then(function(r) {
                return { constructor: r, properties: e.properties };
              });
            }
            function p(e) {
              return d(e.url).then(function(e) {
                return e.tileInfo;
              });
            }
            function L(e) {
              return !e.url || e.url.match(/\/\d+$/)
                ? o.resolve({})
                : e
                    .load()
                    .then(function() {
                      return e.fetchData();
                    })
                    .then(function(r) {
                      return r && Array.isArray(r.layers)
                        ? 1 === r.layers.length && { id: r.layers[0].id }
                        : d(e.url).then(function(e) {
                            return e && Array.isArray(e.layers)
                              ? 1 === e.layers.length && { id: e.layers[0].id }
                              : {};
                          });
                    });
            }
            function d(e) {
              return t(e, {
                responseType: "json",
                callbackParamName: "callback",
                query: { f: "json" }
              }).then(function(e) {
                return e.data;
              });
            }
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.fromItem = function(e) {
                return (
                  !e.portalItem ||
                    e.portalItem instanceof y ||
                    (e.portalItem.constructor &&
                      e.portalItem.constructor._meta) ||
                    (e = a({}, e, { portalItem: new y(e.portalItem) })),
                  (function(e) {
                    return e
                      .load()
                      .then(u)
                      .then(s);
                  })(e.portalItem).then(function(r) {
                    var t = a({ portalItem: e.portalItem }, r.properties),
                      n = r.constructor;
                    return (
                      "esri.layers.FeatureLayer" === n.declaredClass &&
                        (t.outFields = ["*"]),
                      o.resolve(new n(t))
                    );
                  })
                );
              }),
              (r.selectLayerClassPath = u);
          }.apply(null, t)) || (e.exports = n);
    },
    2074: function(e, r, a) {
      var t, n;
      (t = [a.dj.c(e.i), r]),
        void 0 ===
          (n = function(e, r) {
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.isMapNotesLayer = function(e) {
                var r = ["TITLE", "DESCRIPTION", "IMAGE_URL", "IMAGE_LINK_URL"],
                  a =
                    e.layers ||
                    (e.featureCollection && e.featureCollection.layers);
                if (a && Array.isArray(a)) {
                  var t = a[0];
                  return (
                    t.layerDefinition.fields &&
                      t.layerDefinition.fields.forEach(function(e) {
                        var a = r.indexOf(e.name);
                        a > -1 && r.splice(a, 1);
                      }),
                    !r.length
                  );
                }
              });
          }.apply(null, t)) || (e.exports = n);
    },
    330: function(e, r, a) {
      var t, n;
      (t = [
        a.dj.c(e.i),
        r,
        a(15),
        a(9),
        a(36),
        a(781),
        a(126),
        a(2074),
        a(1963),
        a(426)
      ]),
        void 0 ===
          (n = function(e, r, a, t, n, i, o, l, y, c) {
            function u(e, r) {
              return (function(e, r) {
                var a = r.context,
                  t = (function(e) {
                    var r;
                    switch (e.origin) {
                      case "web-scene":
                        switch (e.layerContainerType) {
                          case "basemap":
                            r = S;
                            break;
                          case "ground":
                            r = f;
                            break;
                          default:
                            r = d;
                        }
                        break;
                      default:
                        switch (e.layerContainerType) {
                          case "basemap":
                            r = I;
                            break;
                          default:
                            r = v;
                        }
                    }
                    return r;
                  })(a),
                  n = e.layerType || e.type;
                !n && r && r.defaultLayerType && (n = r.defaultLayerType);
                var c = t[n],
                  u = c ? i.layerLookupMap[c] : i.layerLookupMap.UnknownLayer;
                if ("Feature Collection" === e.type) {
                  if (e.itemId) {
                    var s = new o({ id: e.itemId, portal: a && a.portal });
                    return s
                      .load()
                      .then(y.selectLayerClassPath)
                      .then(function(e) {
                        var r = e.className || "UnknownLayer";
                        return i.layerLookupMap[r];
                      })
                      .then(function(e) {
                        return e();
                      });
                  }
                } else
                  "ArcGISFeatureLayer" === n &&
                    l.isMapNotesLayer(e) &&
                    (u = i.layerLookupMap.MapNotesLayer);
                return e.wmtsInfo && (u = i.layerLookupMap.WMTSLayer), u();
              })(e, r).then(function(a) {
                return (function(e, r, a) {
                  var n,
                    i,
                    o = {};
                  return (
                    r.itemId &&
                      (o.portalItem = {
                        id: r.itemId,
                        portal: a.context.portal
                      }),
                    (i = n = new e(o)).read(r, a.context),
                    c.loadStyleRenderer(i, a.context).then(function() {
                      return t.resolve(n);
                    })
                  );
                })(a, e, r);
              });
            }
            function s(e, r, a) {
              return r && r.filter
                ? a.then(function(e) {
                    var a = r.filter(e);
                    return void 0 === a
                      ? t.resolve(e)
                      : a instanceof n
                        ? t.resolve(a)
                        : a;
                  })
                : a;
            }
            function p(e, r, a) {
              if (!r) return [];
              for (var n = [], i = [], o = 0; o < r.length; o++) {
                var l = r[o],
                  y = u(l, a);
                if ((n.push(y), i.push(null), "GroupLayer" === l.layerType)) {
                  var c = l;
                  if (
                    c.layers &&
                    Array.isArray(c.layers) &&
                    c.layers.length > 0
                  ) {
                    var p = c.layers.map(function(e) {
                      return u(e, a);
                    });
                    n.push.apply(n, p);
                    for (var d = 0; d < p.length; d++) i.push(y);
                  }
                }
              }
              var f = {};
              return n.map(function(r, n) {
                var o = function(e, r) {
                    f[r.id] = n;
                    var a = e.findIndex(function(e) {
                      if (!e.id) return !1;
                      var r = f[e.id];
                      return void 0 !== r && n < r;
                    });
                    a < 0 && (a = void 0), e.add(r, a);
                  },
                  l = s(0, a, r).then(function(r) {
                    return null !== i[n]
                      ? i[n].then(function(e) {
                          return o(e.layers, r), t.resolve(r);
                        })
                      : (o(e, r), t.resolve(r));
                  });
                return (
                  L &&
                    (l = l.catch(function(e) {
                      return (
                        console.error(e.toString ? e.toString() : e),
                        t.reject(e)
                      );
                    })),
                  l
                );
              });
            }
            Object.defineProperty(r, "__esModule", { value: !0 });
            var L = a("dojo-debug-messages"),
              d = {
                ArcGISFeatureLayer: "FeatureLayer",
                ArcGISImageServiceLayer: "ImageryLayer",
                ArcGISMapServiceLayer: "MapImageLayer",
                PointCloudLayer: "PointCloudLayer",
                ArcGISSceneServiceLayer: "SceneLayer",
                IntegratedMeshLayer: "IntegratedMeshLayer",
                ArcGISTiledElevationServiceLayer: "ElevationLayer",
                ArcGISTiledImageServiceLayer: "TileLayer",
                ArcGISTiledMapServiceLayer: "TileLayer",
                GroupLayer: "GroupLayer",
                WebTiledLayer: "WebTileLayer",
                CSV: "CSVLayer",
                VectorTileLayer: "VectorTileLayer",
                WMS: "WMSLayer",
                DefaultTileLayer: "TileLayer"
              },
              f = {
                ArcGISTiledElevationServiceLayer: "ElevationLayer",
                DefaultTileLayer: "ElevationLayer"
              },
              S = {
                ArcGISTiledMapServiceLayer: "TileLayer",
                ArcGISTiledImageServiceLayer: "TileLayer",
                OpenStreetMap: "OpenStreetMapLayer",
                WebTiledLayer: "WebTileLayer",
                VectorTileLayer: "VectorTileLayer",
                ArcGISImageServiceLayer: "UnsupportedLayer",
                WMS: "UnsupportedLayer",
                ArcGISMapServiceLayer: "UnsupportedLayer",
                DefaultTileLayer: "TileLayer"
              },
              v = {
                ArcGISFeatureLayer: "FeatureLayer",
                ArcGISImageServiceLayer: "ImageryLayer",
                ArcGISImageServiceVectorLayer: "UnsupportedLayer",
                ArcGISMapServiceLayer: "MapImageLayer",
                ArcGISStreamLayer: "StreamLayer",
                ArcGISTiledImageServiceLayer: "TileLayer",
                ArcGISTiledMapServiceLayer: "TileLayer",
                VectorTileLayer: "VectorTileLayer",
                WebTiledLayer: "WebTileLayer",
                CSV: "CSVLayer",
                GeoRSS: "GeoRSSLayer",
                KML: "KMLLayer",
                WMS: "WMSLayer",
                BingMapsAerial: "BingMapsLayer",
                BingMapsRoad: "BingMapsLayer",
                BingMapsHybrid: "BingMapsLayer",
                DefaultTileLayer: "TileLayer"
              },
              I = {
                ArcGISImageServiceLayer: "ImageryLayer",
                ArcGISImageServiceVectorLayer: "UnsupportedLayer",
                ArcGISMapServiceLayer: "MapImageLayer",
                ArcGISTiledImageServiceLayer: "TileLayer",
                ArcGISTiledMapServiceLayer: "TileLayer",
                OpenStreetMap: "OpenStreetMapLayer",
                VectorTileLayer: "VectorTileLayer",
                WebTiledLayer: "WebTileLayer",
                BingMapsAerial: "BingMapsLayer",
                BingMapsRoad: "BingMapsLayer",
                BingMapsHybrid: "BingMapsLayer",
                WMS: "WMSLayer",
                DefaultTileLayer: "TileLayer"
              };
            (r.createLayer = u),
              (r.processLayer = s),
              (r.populateLayers = p),
              (r.populateOperationalLayers = function(e, r, a) {
                return p(e, r, a);
              });
          }.apply(null, t)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/portal/support/layersCreator": 330,
      "esri/portal/support/portalLayers": 1963,
      "esri/portal/support/mapNotesUtils": 2074
    });
  })();
