(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    1992: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(43),
        i(17),
        i(11),
        i(111),
        i(9),
        i(70),
        i(26),
        i(1),
        i(821),
        i(48),
        i(35),
        i(264),
        i(85),
        i(2033),
        i(2011),
        i(2095),
        i(2060),
        i(2097),
        i(2048),
        i(2189),
        i(2025),
        i(7),
        i(2190),
        i(2029),
        i(41)
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
            u,
            d,
            h,
            p,
            c,
            y,
            f,
            g,
            v,
            m,
            b,
            _,
            x,
            E,
            w,
            I,
            C,
            S,
            V,
            A
          ) {
            var D = o.getLogger(
                "esri.views.3d.layers.SceneLayerGraphicsView3D"
              ),
              j = (function(e) {
                function t(t) {
                  var i = e.call(this) || this;
                  return (
                    (i._nodesAddedToStage = {}),
                    (i._handles = new s()),
                    (i._controllerCreated = !1),
                    (i.overlayUpdating = !1),
                    (i.supportsDraping = !0),
                    (i._queryEngine = null),
                    (i._memCache = new w(50)),
                    (i._usedMemory = 0),
                    (i.loadedGraphics = new S()),
                    (i.supportsHeightUnitConversion = !0),
                    (i._coordinatesOutsideExtentErrors = 0),
                    (i._maxCoordinatesOutsideExtentErrors = 20),
                    (i._definitionExpressionErrors = 0),
                    (i._maxDefinitionExpressionErrors = 20),
                    i
                  );
                }
                return (
                  i(t, e),
                  (t.prototype.initialize = function() {
                    var e = this;
                    E.checkSpatialReferences(
                      this.layer,
                      this.view.spatialReference,
                      this.view.viewingMode
                    ),
                      this._handles.add([
                        d.init(this.layer, "rangeInfos", function(t) {
                          return e._rangeInfosChanged(t);
                        }),
                        this.layer.watch("renderer", function(t, i) {
                          return e._rendererChange(t, i);
                        }),
                        this.layer.watch("objectIdFilter", function() {
                          return e._objectIdFilterChange();
                        }),
                        this.watch(
                          "_controller.parsedDefinitionExpression",
                          function() {
                            return e._definitionExpressionChange();
                          }
                        )
                      ]),
                      (this.graphics3d = new b({
                        owner: this,
                        layer: this.layer,
                        asyncGraphicsUpdates: !0,
                        frustumVisibilityEnabled: !1,
                        elevationAlignmentEnabled: !0,
                        elevationFeatureExpressionEnabled: !1,
                        suspendResumeExtentMode: "data",
                        dataExtent: this.layer.fullExtent,
                        updateClippingExtent: function(t) {
                          return e._updateClippingExtent(t);
                        },
                        queryGraphicUIDsInExtent: function(t, i, r) {
                          return e._queryGraphicUIDsInExtent(t, i, r);
                        }
                      })),
                      this.supportsHeightUnitConversion &&
                        (this._verticalScale = new _({
                          sourceSpatialReference: this.layer.spatialReference,
                          destSpatialReference: this.view.spatialReference
                        })),
                      this.addResolvingPromise(this.graphics3d.setup()),
                      (this.drawingOrder = this.view.getDrawingOrder(
                        this.layer.uid
                      )),
                      this._createController(),
                      this.when(function() {
                        e._handles.add(
                          e.graphics3d.graphicsCore.watch(
                            "maxNumberOfFeatures",
                            function(t) {
                              e._controller.featureTarget = t;
                            }
                          )
                        );
                      });
                  }),
                  (t.prototype.destroy = function() {
                    this.graphics3d &&
                      (this.graphics3d.destroy(), (this.graphics3d = null)),
                      this._controller &&
                        (this._controller.destroy(), (this._controller = null)),
                      (this._elevationUpdateNodes = null),
                      (this._nodesAddedToStage = null),
                      (this._usedMemory = 0),
                      this._handles &&
                        (this._handles.destroy(), (this._handles = null));
                  }),
                  Object.defineProperty(t.prototype, "displayLimitExceeded", {
                    get: function() {
                      return (
                        !this.suspended &&
                        !!this._controller &&
                        !this._controller.leafsReached
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.whenGraphicAttributes = function(e, t) {
                    var i = this;
                    return E.whenGraphicAttributes(
                      this.layer,
                      [e],
                      this._getObjectIdField(),
                      t,
                      function() {
                        var t = i._findGraphicNodeAndIndex(e);
                        return { node: t.node, indices: [t.index] };
                      },
                      { ignoreUnavailableFields: !0, populateObjectId: !0 }
                    ).then(function(e) {
                      return e[0];
                    });
                  }),
                  (t.prototype.getGraphicFromGraphicUid = function(e) {
                    if (!this.loadedGraphics) return l.reject();
                    var t = g.hydrateGraphic(
                        this.loadedGraphics.find(function(t) {
                          return t.uid === e;
                        }),
                        this.layer
                      ),
                      i = this._getObjectIdField();
                    return t && t.attributes && t.attributes[i]
                      ? ((t.layer = this.layer),
                        (t.sourceLayer = this.layer),
                        l.resolve(t))
                      : l.reject();
                  }),
                  (t.prototype.whenGraphicBounds = function(e, t) {
                    return this.graphics3d.graphicsCore.whenGraphicBounds(e, t);
                  }),
                  (t.prototype.canResume = function() {
                    return (
                      this.inherited(arguments) &&
                      (!this._controller || this._controller.rootNodeVisible)
                    );
                  }),
                  (t.prototype.isUpdating = function() {
                    return (
                      this.overlayUpdating ||
                      !this._controllerCreated ||
                      (this._controller && this._controller.updating) ||
                      (!this.graphics3d.destroyed && this.graphics3d.updating)
                    );
                  }),
                  (t.prototype.getRenderingInfo = function(e) {
                    var t = v.getRenderingInfo(e, {
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
                  Object.defineProperty(t.prototype, "symbolUpdateType", {
                    get: function() {
                      return this.graphics3d.graphicsCore.symbolUpdateType;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype._findGraphicNodeAndIndex = function(e) {
                    for (
                      var t = e.attributes[this.layer.objectIdField],
                        i = 0,
                        r = Object.keys(this._nodesAddedToStage);
                      i < r.length;
                      i++
                    ) {
                      var n = r[i],
                        s = this._nodesAddedToStage[n].bundle,
                        o = this._findGraphicIndex(s, t);
                      if (o >= 0)
                        return {
                          node: this._controller.nodeIndex[n],
                          index: o
                        };
                    }
                    return null;
                  }),
                  (t.prototype._forAllFeatures = function(e, t) {
                    for (
                      var i = 0, r = Object.keys(this._nodesAddedToStage);
                      i < r.length;
                      i++
                    ) {
                      for (
                        var n = r[i],
                          s = this._nodesAddedToStage[n].bundle,
                          o = 0;
                        o < s.length;
                        o++
                      )
                        for (var a = s[o].graphics, l = 0; l < a.length; l++) {
                          var u = a[l],
                            d = s[o].featureIds[l];
                          u.visible && e(d, o, u);
                        }
                      null != t && t({ nodeId: n });
                    }
                  }),
                  (t.prototype._getGraphicIndices = function(e, t) {
                    for (
                      var i = this._nodesAddedToStage[e],
                        r = this._getObjectIdField(),
                        n = [],
                        s = 0,
                        o = t;
                      s < o.length;
                      s++
                    ) {
                      var a = o[s].attributes[r],
                        l = this._findGraphicIndex(i.bundle, a);
                      l >= 0 && n.push(l);
                    }
                    return n;
                  }),
                  (t.prototype._findGraphicIndex = function(e, t) {
                    for (var i = 0; i < e.length; i++)
                      for (var r = 0, n = e[i].featureIds; r < n.length; r++) {
                        if (n[r] === t) return i;
                      }
                    return -1;
                  }),
                  (t.prototype._queryGraphicUIDsInExtent = function(e, t, i) {
                    if (this._controller) {
                      var r = this._controller.crsIndex;
                      A.boundingRectToBoundingRect(e, t, F, r);
                      var n = U;
                      c.fromRect(n, F),
                        (n[2] = -1 / 0),
                        (n[5] = 1 / 0),
                        null == this._elevationUpdateNodes &&
                          (this._elevationUpdateNodes = new a({
                            initialSize: 10
                          }));
                      var s = this._elevationUpdateNodes;
                      s.clear(),
                        this._controller.updateElevationChanged(n, r, s);
                      for (var o = 0; o < s.length; o++) {
                        var l = s.data[o],
                          d = this._nodesAddedToStage[l.id];
                        if (null != d) {
                          if (!d.spatialIndex && d.bundle.length >= R) {
                            var h = new p.PooledRBush(
                              9,
                              u("csp-restrictions")
                                ? function(e) {
                                    return {
                                      minX: e.extent[0],
                                      minY: e.extent[1],
                                      maxX: e.extent[2],
                                      maxY: e.extent[3]
                                    };
                                  }
                                : [
                                    ".extent[0]",
                                    ".extent[1]",
                                    ".extent[2]",
                                    ".extent[3]"
                                  ]
                            );
                            T.length = 0;
                            for (var f = 0, v = d.bundle; f < v.length; f++) {
                              for (
                                var m = v[f],
                                  b = y.empty(),
                                  _ = 0,
                                  x = m.graphics;
                                _ < x.length;
                                _++
                              ) {
                                var E = x[_];
                                g.expandAABR(E.geometry, b);
                              }
                              (m.extent = b), T.push(m);
                            }
                            h.load(T), (d.spatialIndex = h);
                          }
                          if (d.spatialIndex) {
                            var w = F;
                            A.boundingRectToBoundingRect(
                              e,
                              t,
                              F,
                              this.view.spatialReference
                            ),
                              (G.minX = w[0]),
                              (G.minY = w[1]),
                              (G.maxX = w[2]),
                              (G.maxY = w[3]),
                              d.spatialIndex.search(G, function(e) {
                                for (
                                  var t = 0, r = e.graphics;
                                  t < r.length;
                                  t++
                                ) {
                                  var n = r[t];
                                  i(n.uid);
                                }
                              });
                          } else
                            for (var I = 0, C = d.bundle; I < C.length; I++)
                              for (
                                var S = 0, V = (m = C[I]).graphics;
                                S < V.length;
                                S++
                              ) {
                                E = V[S];
                                i(E.uid);
                              }
                        }
                      }
                    }
                  }),
                  (t.prototype.highlight = function(e, t) {
                    return this.graphics3d.highlight(
                      e,
                      t,
                      this.layer.objectIdField
                    );
                  }),
                  (t.prototype._createController = function() {
                    var e = this,
                      t = {
                        addNodeData: function(t, i) {
                          return e._addNodeData(t, i);
                        },
                        isNodeLoaded: function(t) {
                          return e._isNodeLoaded(t);
                        },
                        removeNodeData: function(t) {
                          return e._removeNodeData(t);
                        },
                        getLoadedNodeIDs: function() {
                          return e._getLoadedNodeIDs();
                        },
                        getLoadedAttributes: function(t) {
                          return e._getLoadedAttributes(t);
                        },
                        getAttributeData: function(t) {
                          return e._getAttributeData(t);
                        },
                        setAttributeData: function(t, i, r) {
                          return e._setAttributeData(t.id, i, r);
                        },
                        getMemoryUsage: function() {
                          return e.view.resourceController.usedMemory;
                        }
                      },
                      i = {
                        loadCachedNodeData: function(t, i) {
                          return e._loadCachedNodeData(t, i);
                        },
                        addCachedNodeData: function(t, i, r) {
                          return e._addCachedNodeData(t, i, r);
                        }
                      };
                    this.layer
                      .createGraphicsController({
                        layerView: this,
                        layerViewRequiredFunctions: t,
                        layerViewOptionalFunctions: i
                      })
                      .then(function(t) {
                        (e._controller = t),
                          t.watch("rootNodeVisible", function() {
                            e.notifyChange("suspended");
                          });
                      })
                      .always(function() {
                        (e._controllerCreated = !0), e.notifyChange("updating");
                      });
                  }),
                  (t.prototype._addNodeData = function(e, t) {
                    var i = t.allGeometryData,
                      r = t.attributeDataInfo,
                      s = this._controller.crsIndex,
                      o = this.view.spatialReference,
                      a = [0, 0, 0],
                      u = this._getObjectIdField();
                    (e.memory = 4096),
                      null == this._nodesAddedToStage[e.id] &&
                        (this._nodesAddedToStage[e.id] = {
                          bundle: [],
                          attributeData: r ? r.attributeData : null,
                          loadedAttributes: r ? r.loadedAttributes : null
                        });
                    var d = [];
                    this._nodesAddedToStage[e.id].bundle = d;
                    for (
                      var h =
                          this.layer.fullExtent &&
                          (function(e, t) {
                            return (
                              (e.xmin -= t),
                              (e.ymin -= t),
                              (e.xmax += t),
                              (e.ymax += t),
                              e.hasZ && ((e.zmin -= t), (e.zmax += t)),
                              e.hasM && ((e.mmin -= t), (e.mmax += t)),
                              e
                            );
                          })(this.layer.fullExtent.clone(), 0.5),
                        p = [],
                        c = [],
                        y = 0;
                      y < i.length;
                      y++
                    ) {
                      var v = i[y],
                        m = v.featureDataPosition,
                        b = m.length,
                        _ = v.geometries || [O[b]],
                        x = v.featureIds;
                      h &&
                        !f.extentContainsCoords3D(h, m) &&
                        (this._coordinatesOutsideExtentErrors <
                          this._maxCoordinatesOutsideExtentErrors &&
                          D.error(
                            "Service Error: Coordinates outside of layer extent"
                          ),
                        this._coordinatesOutsideExtentErrors + 1 ===
                          this._maxCoordinatesOutsideExtentErrors &&
                          D.error(
                            "Maximum number of errors reached. Further errors are ignored."
                          ),
                        this._coordinatesOutsideExtentErrors++);
                      for (var E = 0; E < _.length; E++) {
                        var w = _[E];
                        if ("points" === w.params.type) {
                          var I = [],
                            C = x[E < x.length ? E : 0],
                            S = {};
                          null != C && (S[u] = C);
                          var j = void 0;
                          "Embedded" === w.type &&
                            (j = w.params.vertexAttributes.position);
                          for (var R = 0; R < j.length; R += b) {
                            for (var F = 0; F < b; F++) a[F] = m[F] + j[R + F];
                            A.bufferToBuffer(a, s, 0, M, o, 0, 1);
                            var U = g.makeDehydratedPoint(M[0], M[1], M[2], o);
                            b < 3 && (U.z = void 0),
                              I.push({
                                uid: n.generateUID(),
                                geometry: U,
                                attributes: S,
                                visible: !0
                              }),
                              e.obb || c.push(U.x, U.y, U.z ? U.z : 0);
                          }
                          (e.memory += 16 * j.length),
                            p.push.apply(p, I),
                            d.push({ featureIds: v.featureIds, graphics: I });
                        }
                      }
                    }
                    (e.numFeatures = p.length), (e.memory /= 1048576);
                    var G = this._nodesAddedToStage[e.id];
                    if (
                      (this._setBundleAttributes(
                        G.bundle,
                        G.loadedAttributes,
                        G.attributeData
                      ),
                      c.length > 0)
                    ) {
                      var T = this.view.renderSpatialReference,
                        N = this._controller.crsVertex;
                      A.bufferToBuffer(c, o, 0, c, T, 0, c.length / 3);
                      var z = { data: c, size: 3, offsetIdx: 0, strideIdx: 3 };
                      (e.obb = V.compute(z)),
                        A.vectorToVector(e.obb.center, T, e.obb.center, N),
                        this._controller.updateVisibility(e.id);
                    }
                    return this._controller.isGeometryVisible(e)
                      ? (this._verticalScale && this._verticalScale.adjust(p),
                        (this._usedMemory += e.memory),
                        this.loadedGraphics.addMany(p),
                        this._filterNode(G),
                        l.resolve())
                      : (this._memCache.put(
                          e.id,
                          this._nodesAddedToStage[e.id],
                          e.memory
                        ),
                        delete this._nodesAddedToStage[e.id],
                        l.resolve());
                  }),
                  (t.prototype._isNodeLoaded = function(e) {
                    return null != this._nodesAddedToStage[e.id];
                  }),
                  (t.prototype._removeAllNodeData = function() {
                    var e = this;
                    Object.keys(this._nodesAddedToStage).forEach(function(t) {
                      var i = e._nodesAddedToStage[t];
                      if (i) {
                        var r = e._controller.nodeIndex[t];
                        e._memCache.put(t, i, r.memory);
                      }
                    }),
                      (this._nodesAddedToStage = {}),
                      (this._usedMemory = 0),
                      this.loadedGraphics.clear();
                  }),
                  (t.prototype._removeNodeData = function(e) {
                    var t = this,
                      i = [];
                    e.forEach(function(e) {
                      var r = t._removeNodeStageData(e, i);
                      r && t._memCache.put(e.id, r, e.memory);
                    }),
                      this.loadedGraphics.removeUnorderedMany(i);
                  }),
                  (t.prototype._removeNodeStageData = function(e, t) {
                    var i = this._nodesAddedToStage[e.id];
                    if (!i) return null;
                    for (var r = 0, n = i.bundle; r < n.length; r++) {
                      var s = n[r];
                      t.push.apply(t, s.graphics);
                    }
                    return (
                      delete this._nodesAddedToStage[e.id],
                      (this._usedMemory -= e.memory),
                      this._usedMemory < 9.5367431640625e-7 &&
                        (this._usedMemory = 0),
                      i
                    );
                  }),
                  (t.prototype._loadCachedNodeData = function(e, t) {
                    return l.resolve(this._memCache.get(e.id));
                  }),
                  (t.prototype._addCachedNodeData = function(e, t, i) {
                    for (var r = [], n = 0, s = t.bundle; n < s.length; n++) {
                      var o = s[n];
                      r.push.apply(r, o.graphics);
                    }
                    return (
                      (this._nodesAddedToStage[e.id] = t),
                      this._setAttributeData(
                        e.id,
                        i.loadedAttributes,
                        i.attributeData
                      ),
                      (this._usedMemory += e.memory),
                      this.loadedGraphics.addMany(r),
                      this._filterNode(t),
                      l.resolve()
                    );
                  }),
                  (t.prototype._getLoadedNodeIDs = function() {
                    return Object.keys(this._nodesAddedToStage);
                  }),
                  (t.prototype._getLoadedAttributes = function(e) {
                    var t = this._nodesAddedToStage[e.id];
                    if (t) return t.loadedAttributes;
                  }),
                  (t.prototype._getAttributeData = function(e) {
                    var t = this._nodesAddedToStage[e.id];
                    if (t) return t.attributeData;
                  }),
                  (t.prototype._setAttributeData = function(e, t, i) {
                    var r = this._nodesAddedToStage[e];
                    if (
                      r &&
                      ((r.loadedAttributes = t),
                      (r.attributeData = i),
                      this._setBundleAttributes(r.bundle, t, i),
                      this._filterNode(r),
                      this.graphics3d.graphicsCore.labelsEnabled)
                    ) {
                      var n = r.bundle.map(function(e) {
                        return e.graphics.length && e.graphics[0].uid;
                      });
                      this.graphics3d.graphicsCore.updateLabelingInfo(n);
                    }
                  }),
                  (t.prototype._setBundleAttributes = function(e, t, i) {
                    for (var r = 0; r < e.length; r++)
                      for (var n = 0, s = e[r].graphics; n < s.length; n++) {
                        var o = s[n];
                        if ((o.attributes || (o.attributes = {}), t))
                          for (var a = 0, l = t; a < l.length; a++) {
                            var u = l[a].name;
                            i[u] &&
                              (o.attributes[u] = E.getCachedAttributeValue(
                                i[u],
                                r
                              ));
                          }
                      }
                  }),
                  (t.prototype._updateClippingExtent = function(e) {
                    return (
                      this._controller &&
                        this._controller.updateClippingArea(e),
                      !1
                    );
                  }),
                  (t.prototype._getObjectIdField = function() {
                    return this.layer.objectIdField || "OBJECTID";
                  }),
                  (t.prototype._rendererChange = function(e, t) {
                    var i = e ? e.requiredFields : [],
                      r = t ? t.requiredFields : [];
                    (i.length === r.length &&
                      i.every(function(e, t) {
                        return i[t] === r[t];
                      })) ||
                      this._reloadAllNodes();
                  }),
                  (t.prototype._rangeInfosChanged = function(e) {
                    null != e &&
                      e.length > 0 &&
                      D.warn(
                        "Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering."
                      );
                  }),
                  (t.prototype._objectIdFilterChange = function() {
                    var e = this;
                    Object.keys(this._nodesAddedToStage).forEach(function(t) {
                      return e._filterNode(e._nodesAddedToStage[t]);
                    });
                  }),
                  (t.prototype._reloadAllNodes = function() {
                    this._removeAllNodeData(),
                      this._controller && this._controller.restartNodeLoading();
                  }),
                  (t.prototype._definitionExpressionChange = function() {
                    this._definitionExpressionErrors = 0;
                  }),
                  (t.prototype._evaluateClause = function(e, t) {
                    try {
                      return !!e.calculateValue(t);
                    } catch (e) {
                      return (
                        this._definitionExpressionErrors <
                          this._maxDefinitionExpressionErrors &&
                          D.error(
                            "Error while evaluating definitionExpression: " + e
                          ),
                        this._definitionExpressionErrors++,
                        this._definitionExpressionErrors ===
                          this._maxDefinitionExpressionErrors &&
                          D.error("Further errors are ignored"),
                        !1
                      );
                    }
                  }),
                  (t.prototype._filterNode = function(e) {
                    var t = this._getObjectIdField(),
                      i = null;
                    if (this.layer.objectIdFilter) {
                      var r = this.layer.objectIdFilter.ids,
                        n = "include" === this.layer.objectIdFilter.method;
                      i = function(e) {
                        return r.indexOf(e) >= 0 === n;
                      };
                    }
                    for (
                      var s = this._controller.parsedDefinitionExpression,
                        o = 0,
                        a = e.bundle;
                      o < a.length;
                      o++
                    )
                      for (var l = 0, u = a[o].graphics; l < u.length; l++) {
                        var d = u[l],
                          h = d.visible;
                        i && !i(d.attributes[t])
                          ? (d.visible = !1)
                          : (d.visible = !s || this._evaluateClause(s, d)),
                          h !== d.visible &&
                            ((N.graphic = d),
                            (N.property = "visible"),
                            (N.oldValue = h),
                            (N.newValue = d.visible),
                            this.layer.graphicChanged(N));
                      }
                  }),
                  (t.prototype.queryExtent = function(e) {
                    return this._ensureQueryEngine().queryExtent(e);
                  }),
                  (t.prototype.queryFeatureCount = function(e) {
                    return this._ensureQueryEngine().queryFeatureCount(e);
                  }),
                  (t.prototype.queryFeatures = function(e) {
                    return this._ensureQueryEngine().queryFeatures(e);
                  }),
                  (t.prototype.queryObjectIds = function(e) {
                    return this._ensureQueryEngine().queryObjectIds(e);
                  }),
                  (t.prototype._ensureQueryEngine = function() {
                    return (
                      this._queryEngine ||
                        (this._queryEngine = this._createQueryEngine()),
                      this._queryEngine
                    );
                  }),
                  (t.prototype._createQueryEngine = function() {
                    var e = this,
                      t = { id: 0, index: 0, graphic: null },
                      i = this;
                    return new x(
                      this.layer,
                      {
                        forAll: function(i, r) {
                          e._forAllFeatures(function(e, r, n) {
                            (t.id = e), (t.index = r), (t.graphic = n), i(t);
                          }, r);
                        },
                        createGraphic: function(e) {
                          return g.hydrateGraphic(e.graphic, i.layer);
                        },
                        requestFields: function(t, i, r) {
                          return E.whenGraphicAttributes(
                            e.layer,
                            i,
                            e._getObjectIdField(),
                            r,
                            function() {
                              var r = e._getGraphicIndices(t.nodeId, i);
                              return {
                                node: e._controller.nodeIndex[t.nodeId],
                                indices: r
                              };
                            },
                            { ignoreUnavailableFields: !1 }
                          );
                        },
                        createExtentBuilder: function() {
                          var t = c.empty(),
                            i = e.layer.spatialReference;
                          return {
                            add: function(e) {
                              return g.expandAABB(e.graphic.geometry, t);
                            },
                            getExtent: function() {
                              return c.toExtent(t, i);
                            }
                          };
                        }
                      },
                      {
                        enableObjectId: !0,
                        enableOutFields: !!this.layer.objectIdField
                      }
                    );
                  }),
                  (t.prototype.getUsedMemory = function() {
                    var e = this._usedMemory;
                    return (
                      this._controller &&
                        (e +=
                          (512 *
                            Object.keys(this._controller.nodeIndex).length) /
                          1048576),
                      e
                    );
                  }),
                  (t.prototype.getUnloadedMemory = function() {
                    return this._controller
                      ? this._controller.getUnloadedMemoryEstimate()
                      : 0;
                  }),
                  (t.prototype.getCachedMemory = function() {
                    return this._memCache.getSize();
                  }),
                  (t.prototype.removeCachedData = function() {
                    this._memCache.getSize() > 0
                      ? this._memCache.clear()
                      : (this.suspended && this._removeAllNodeData(),
                        this._memCache.clear());
                  }),
                  (t.prototype.getStats = function() {
                    var e = this.inherited(arguments) || {};
                    return (
                      (e.index = this._controller
                        ? Object.keys(this._controller.nodeIndex).length
                        : 0),
                      (e.nodes = Object.keys(this._nodesAddedToStage).length),
                      (e.features = this.loadedGraphics.length),
                      (e.cache =
                        this._memCache.getSize().toFixed(2) +
                        "MB, " +
                        Math.round(100 * this._memCache.getHitRate()) +
                        "% hit"),
                      this._controller && this._controller.updateStats(e),
                      e
                    );
                  }),
                  r([h.property()], t.prototype, "graphics3d", void 0),
                  r([h.property()], t.prototype, "drawingOrder", void 0),
                  r(
                    [
                      h.property({
                        aliasOf: "graphics3d.graphicsCore.hasDraped"
                      })
                    ],
                    t.prototype,
                    "hasDraped",
                    void 0
                  ),
                  r(
                    [h.property({ type: Boolean })],
                    t.prototype,
                    "overlayUpdating",
                    void 0
                  ),
                  r(
                    [h.property({ type: Boolean })],
                    t.prototype,
                    "supportsDraping",
                    void 0
                  ),
                  r([h.property()], t.prototype, "loadedGraphics", void 0),
                  r([h.property()], t.prototype, "layer", void 0),
                  r([h.property()], t.prototype, "_controller", void 0),
                  r(
                    [
                      h.property({
                        dependsOn: [
                          "_controller.updating",
                          "graphics3d.updating",
                          "overlayUpdating"
                        ]
                      })
                    ],
                    t.prototype,
                    "updating",
                    void 0
                  ),
                  r(
                    [h.property(I.updatingPercentage)],
                    t.prototype,
                    "updatingPercentage",
                    void 0
                  ),
                  r(
                    [h.property({ aliasOf: "_controller.updatingPercentage" })],
                    t.prototype,
                    "updatingPercentageValue",
                    void 0
                  ),
                  r(
                    [
                      h.property({
                        dependsOn: ["suspended", "_controller.leafsReached"]
                      })
                    ],
                    t.prototype,
                    "displayLimitExceeded",
                    null
                  ),
                  r(
                    [
                      h.subclass(
                        "esri.views.3d.layers.SceneLayerGraphicsView3D"
                      )
                    ],
                    t
                  )
                );
              })(h.declared(m)),
              O = {
                2: {
                  type: "Embedded",
                  params: {
                    type: "points",
                    vertexAttributes: { position: [0, 0] }
                  }
                },
                3: {
                  type: "Embedded",
                  params: {
                    type: "points",
                    vertexAttributes: { position: [0, 0, 0] }
                  }
                }
              },
              R = 100,
              F = y.create(),
              U = c.create(c.POSITIVE_INFINITY),
              G = { minX: 0, minY: 0, maxX: 0, maxY: 0 },
              M = C.vec3d.create(),
              T = [],
              N = {
                graphic: null,
                property: null,
                oldValue: null,
                newValue: null
              };
            return j;
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
                      var l = 0, u = n.getVisualVariableValues(e, t);
                      l < u.length;
                      l++
                    ) {
                      var d = u[l],
                        h = d.variable,
                        p = d.value;
                      if ("color" === h.type) o.color = p.toRgba();
                      else if ("size" === h.type)
                        if ("outline" === h.target) o.outlineSize = p;
                        else {
                          var c = h.axis,
                            y = h.useSymbolValue ? "symbolValue" : p;
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
                          ? (o.opacity = p)
                          : "rotation" === h.type && "tilt" === h.axis
                            ? (o.tilt = p)
                            : "rotation" === h.type && "roll" === h.axis
                              ? (o.roll = p)
                              : "rotation" === h.type && (o.heading = p);
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
    2060: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(84), i(85)]),
        void 0 ===
          (n = function(e, t, i, r) {
            return (function() {
              function e(e) {
                (this.sourceSpatialReference = e.sourceSpatialReference),
                  (this.destSpatialReference = e.destSpatialReference);
              }
              return (
                (e.prototype.adjust = function(e) {
                  var t = this._getVerticalUnitScale();
                  1 !== t && this._scaleVerticalUnits(e, t);
                }),
                (e.prototype._getVerticalUnitScale = function() {
                  return this.sourceSpatialReference &&
                    !this.sourceSpatialReference.equals(
                      this.destSpatialReference
                    )
                    ? i.getMetersPerVerticalUnitForSR(
                        this.sourceSpatialReference
                      ) /
                        i.getMetersPerVerticalUnitForSR(
                          this.destSpatialReference
                        )
                    : 1;
                }),
                (e.prototype._vertexListsScaleZ = function(e, t) {
                  for (var i = 0; i < e.length; ++i)
                    for (var r = e[i], n = 0; n < r.length; ++n) {
                      r[n][2] *= t;
                    }
                }),
                (e.prototype._scaleVerticalUnits = function(e, t) {
                  for (var i = 0; i < e.length; ++i) {
                    var n = e[i].geometry;
                    n &&
                      r.hasZ(n) &&
                      (this._geometryIsPoint(n)
                        ? null !== n.z && (n.z *= t)
                        : this._geometryIsPolyline(n)
                          ? this._vertexListsScaleZ(n.paths, t)
                          : this._geometryIsPolygon(n) &&
                            this._vertexListsScaleZ(n.rings, t));
                  }
                }),
                (e.prototype._geometryIsPoint = function(e) {
                  return "point" === e.type;
                }),
                (e.prototype._geometryIsPolygon = function(e) {
                  return "polygon" === e.type;
                }),
                (e.prototype._geometryIsPolyline = function(e) {
                  return "polyline" === e.type;
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
          (n = function(e, t, i, r, n, s, o, a, l, u) {
            var d = -0.3 * l.earthRadius;
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
                    (this.extentIntersection = new u.FrustumExtentIntersection({
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
                    if (this._isVisibleBelowSurface) e = d;
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
            u,
            d,
            h,
            p,
            c,
            y,
            f,
            g,
            v,
            m,
            b,
            _,
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
                          ? new b({
                              spatialReference: e.owner.view.spatialReference
                            })
                          : null,
                      i = e.frustumVisibilityEnabled ? new g() : null,
                      r = e.scaleVisibilityEnabled ? new m() : null,
                      n = e.elevationAlignmentEnabled ? new f() : null,
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
                      u = e.dataExtent;
                    return {
                      graphicsCore: s,
                      frustumVisibility: i,
                      scaleVisibility: r,
                      elevationAlignment: n,
                      spatialIndex: t,
                      updateClippingExtent: o,
                      suspendResumeExtentMode: l,
                      dataExtent: u,
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
                    if (e instanceof p) {
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
                        var u = e;
                        if (
                          !i ||
                          !u[0].attributes ||
                          null === x.attributeLookup(u[0].attributes, i)
                        ) {
                          var d = u.map(function(e) {
                              return e.uid;
                            }),
                            h = this.highlights.acquireSet(t, null),
                            c = h.set;
                          l = h.handle;
                          return this.highlights.setUids(c, d), l;
                        }
                        e = u.map(function(e) {
                          return x.attributeLookup(e.attributes, i);
                        });
                      }
                      if ("number" == typeof e[0]) {
                        var y = e,
                          f = this.highlights.acquireSet(t, i);
                        (c = f.set), (l = f.handle);
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
                        u.init(this, "suspendResumeExtentMode", function(t) {
                          switch (
                            (e._handles.remove(w), e.suspendResumeExtentMode)
                          ) {
                            case "computed":
                              e._handles.add(
                                u.init(
                                  e.graphicsCore,
                                  "computedExtent",
                                  function(t) {
                                    return e.updateSuspendResumeExtent(t);
                                  }
                                ),
                                w
                              );
                              break;
                            case "data":
                              e._handles.add(
                                u.init(e, "dataExtent", function(t) {
                                  return e.updateSuspendResumeExtent(t);
                                }),
                                w
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
                    return _.enlargeExtent(
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
                    [d.property({ aliasOf: "graphicsCore.layer" })],
                    t.prototype,
                    "layer",
                    void 0
                  ),
                  r(
                    [d.property({ aliasOf: "graphicsCore.owner" })],
                    t.prototype,
                    "owner",
                    void 0
                  ),
                  r(
                    [d.property({ constructOnly: !0 })],
                    t.prototype,
                    "updateClippingExtent",
                    void 0
                  ),
                  r(
                    [d.property({ constructOnly: !0 })],
                    t.prototype,
                    "queryGraphicUIDsInExtent",
                    void 0
                  ),
                  r(
                    [d.property({ constructOnly: !0 })],
                    t.prototype,
                    "graphicsCore",
                    void 0
                  ),
                  r(
                    [d.property({ constructOnly: !0 })],
                    t.prototype,
                    "spatialIndex",
                    void 0
                  ),
                  r(
                    [d.property({ constructOnly: !0 })],
                    t.prototype,
                    "scaleVisibility",
                    void 0
                  ),
                  r(
                    [d.property({ constructOnly: !0 })],
                    t.prototype,
                    "elevationAlignment",
                    void 0
                  ),
                  r(
                    [d.property({ constructOnly: !0 })],
                    t.prototype,
                    "frustumVisibility",
                    void 0
                  ),
                  r(
                    [d.property({ readOnly: !0 })],
                    t.prototype,
                    "labeling",
                    void 0
                  ),
                  r(
                    [d.property({ readOnly: !0 })],
                    t.prototype,
                    "highlights",
                    void 0
                  ),
                  r(
                    [d.property()],
                    t.prototype,
                    "suspendResumeExtentMode",
                    void 0
                  ),
                  r([d.property()], t.prototype, "dataExtent", void 0),
                  r(
                    [
                      d.property({
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
                      d.property({
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
                      d.subclass(
                        "esri.views.3d.layers.graphics.Graphics3DFeatureLikeLayerView"
                      )
                    ],
                    t
                  )
                );
              })(d.declared(s)),
              w = "suspendResumeExtentMode";
            return E;
          }.apply(null, r)) || (e.exports = n);
    },
    2097: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(108), i(10), i(9), i(85), i(112)]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o) {
            return (function() {
              function e(e, t, i) {
                (this._layer = e), (this._support = t), (this._options = i);
              }
              return (
                (e.prototype.queryExtent = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e).then(function() {
                    var i = 0,
                      r = t._support.createExtentBuilder();
                    return (
                      t._forAllQueried(e, function(e) {
                        i++, r.add(e);
                      }),
                      { count: i, extent: 0 === i ? null : r.getExtent() }
                    );
                  });
                }),
                (e.prototype.queryFeatureCount = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e).then(function() {
                    var i = 0;
                    return (
                      t._forAllQueried(e, function() {
                        return i++;
                      }),
                      i
                    );
                  });
                }),
                (e.prototype.queryFeatures = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e)
                    .then(function() {
                      var s = [],
                        o = e && e.outFields,
                        a = [];
                      return t._forAllQueried(
                        e,
                        function(e) {
                          return a.push(t._support.createGraphic(e));
                        },
                        function(e) {
                          o &&
                            (s.push(t._support.requestFields(e, a, o)),
                            (a = []));
                        }
                      ) > 0 && !e.num
                        ? n.reject(
                            new r(
                              "Unsupported Query",
                              "Large feature query, use Query.num and Query.start to batch"
                            )
                          )
                        : (o || s.push(n.resolve(a)), i(s));
                    })
                    .then(function(e) {
                      for (var i = [], r = 0; r < e.length; ++r)
                        for (var n = e[r], a = 0; a < n.length; ++a)
                          i.push(s.hydrateGraphic(n[a], t._layer));
                      var l = new o();
                      return (l.features = i), l;
                    });
                }),
                (e.prototype.queryObjectIds = function(e) {
                  var t = this;
                  return this._rejectUnsupported(e).then(function() {
                    var i = [];
                    return (
                      t._forAllQueried(e, function(e) {
                        return i.push(e.id);
                      }),
                      i
                    );
                  });
                }),
                (e.defaultExtentBuilder = function(e) {
                  var t = null;
                  return {
                    add: function(i) {
                      var r = e(i);
                      r && (t = null != t ? t.union(r) : r.clone());
                    },
                    getExtent: function() {
                      return t;
                    }
                  };
                }),
                (e.prototype._forAllQueried = function(e, t, i) {
                  var r = [];
                  if (e && e.objectIds) {
                    var n = e.objectIds;
                    r.push(function(e) {
                      return n.indexOf(e.id) >= 0;
                    });
                  }
                  var s = (e && e.start) || 0,
                    o = (e && e.num) || 1e4;
                  return (
                    r.push(function() {
                      return o <= 0 ? (--o, !1) : s > 0 ? (--s, !1) : (--o, !0);
                    }),
                    this._support.forAll(function(e) {
                      for (var i = 0, n = r; i < n.length; i++)
                        if (!(0, n[i])(e)) return;
                      t(e);
                    }, i),
                    Math.max(0, -o)
                  );
                }),
                (e.prototype._rejectUnsupported = function(e) {
                  if (null == e) return n.resolve();
                  var t = function(e) {
                    return n.reject(
                      new r(
                        "Unsupported Query",
                        "Unsupported property '" + e + "'"
                      )
                    );
                  };
                  return null != e.distance
                    ? t("distance")
                    : null != e.geometryPrecision
                      ? t("geometryPrecision")
                      : e.groupByFieldsForStatistics &&
                        e.groupByFieldsForStatistics.length
                        ? t("groupByFieldsForStatistics")
                        : null != e.maxAllowableOffset
                          ? t("maxAllowableOffset")
                          : e.multipatchOption
                            ? t("multipatchOption")
                            : e.orderByFields && e.orderByFields.length
                              ? t("orderByFields")
                              : e.outSpatialReference
                                ? t("outSpatialReference")
                                : e.outStatistics && e.outStatistics.length
                                  ? t("outStatistics")
                                  : e.pixelSize
                                    ? t("pixelSize")
                                    : e.quantizationParameters
                                      ? t("quantizationParameters")
                                      : e.relationParameter
                                        ? t("relationParameter")
                                        : e.returnDistinctValues
                                          ? t("returnDistinctValues")
                                          : e.text
                                            ? t("text")
                                            : e.timeExtent
                                              ? t("timeExtent")
                                              : e.where
                                                ? t("where")
                                                : e.geometry
                                                  ? t("geometry")
                                                  : !this._options
                                                      .enableOutFields &&
                                                    e.outFields &&
                                                    e.outFields.length
                                                    ? t("outFields")
                                                    : !this._options
                                                        .enableObjectId &&
                                                      e.objectIds &&
                                                      e.objectIds.length
                                                      ? t("objectIds")
                                                      : n.resolve();
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2189: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return (function() {
              function e(e) {
                void 0 === e && (e = 10),
                  (this.maxSize = e),
                  (this._db = new Map()),
                  (this._size = 0),
                  (this._age = 0),
                  (this._hit = 0),
                  (this._miss = 0);
              }
              return (
                (e.prototype.put = function(e, t, i) {
                  if (!i || i < 0)
                    console.warn(
                      "Refusing to cache entry with invalid size " + i
                    );
                  else {
                    if (this._db.has(e)) {
                      var r = this._db.get(e);
                      (this._size += i - r.sizeMB),
                        (r.entry = t),
                        (r.lastUsed = this._age),
                        (r.sizeMB = i);
                    } else
                      this._db.set(e, {
                        entry: t,
                        sizeMB: i,
                        lastUsed: this._age
                      }),
                        (this._size += i);
                    ++this._age,
                      this._size > this.maxSize && this._removeEntries();
                  }
                }),
                (e.prototype.get = function(e) {
                  if (this._db.has(e)) {
                    var t = this._db.get(e);
                    return (
                      (t.lastUsed = this._age),
                      ++this._age,
                      ++this._hit,
                      t.entry
                    );
                  }
                  return ++this._miss, null;
                }),
                (e.prototype.clear = function() {
                  this._db.clear(),
                    (this._size = 0),
                    (this._age = 0),
                    (this._hit = 0),
                    (this._miss = 0);
                }),
                (e.prototype.getSize = function() {
                  return this._size;
                }),
                (e.prototype.getHitRate = function() {
                  return this._hit / (this._hit + this._miss);
                }),
                (e.prototype._removeEntries = function() {
                  var e = [];
                  this._db.forEach(function(t, i) {
                    e.push([t.lastUsed, i]);
                  }),
                    e.sort(function(e, t) {
                      return e[0] - t[0];
                    });
                  for (var t = 0, i = e; t < i.length; t++) {
                    var r = i[t];
                    if (
                      ((this._size -= this._db.get(r[1]).sizeMB),
                      this._db.delete(r[1]),
                      this._size < 0.9 * this.maxSize)
                    )
                      return;
                  }
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2190: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(111), i(161)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.array = new r()), t;
              }
              return (
                i(t, e),
                (t.prototype.clear = function() {
                  this.array.length > 0 &&
                    this.emit("change", { added: [], removed: this.toArray() }),
                    this.array.clear();
                }),
                Object.defineProperty(t.prototype, "length", {
                  get: function() {
                    return this.array.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.getItemAt = function(e) {
                  return this.array.data[e];
                }),
                (t.prototype.push = function(e) {
                  var t = this.array.push(e);
                  return this.emit("change", { added: [e], removed: [] }), t;
                }),
                (t.prototype.addMany = function(e) {
                  var t = this.array.pushArray(e);
                  return this.emit("change", { added: e, removed: [] }), t;
                }),
                (t.prototype.pushNew = function() {
                  var e = this.array.pushNew();
                  return this.emit("change", { added: [e], removed: [] }), e;
                }),
                (t.prototype.pop = function() {
                  var e = this.array.pop();
                  return (
                    void 0 !== e &&
                      this.emit("change", { added: [], removed: [e] }),
                    e
                  );
                }),
                (t.prototype.removeMany = function(e) {
                  var t = this.array.removeMany(e);
                  return (
                    t.length > 0 &&
                      this.emit("change", { added: [], removed: t }),
                    t
                  );
                }),
                (t.prototype.removeUnordered = function(e) {
                  var t = this.array.removeUnordered(e);
                  return (
                    void 0 !== t &&
                      this.emit("change", { added: [], removed: [t] }),
                    t
                  );
                }),
                (t.prototype.removeUnorderedMany = function(e) {
                  var t = this.array.removeUnorderedMany(e);
                  return (
                    t.length > 0 &&
                      this.emit("change", { added: [], removed: t }),
                    t
                  );
                }),
                (t.prototype.toArray = function() {
                  return this.array.toArray();
                }),
                (t.prototype.some = function(e, t) {
                  return this.array.some(e, t);
                }),
                (t.prototype.find = function(e, t) {
                  return this.array.find(e, t);
                }),
                (t.prototype.filter = function(e, i, r) {
                  return (
                    (r = r || new t()), this.array.filter(e, i, r.array), r
                  );
                }),
                (t.prototype.forEach = function(e, t) {
                  this.array.forEach(e, t);
                }),
                t
              );
            })(n.Evented);
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/SceneLayerGraphicsView3D": 1992,
      "esri/renderers/support/renderingInfoUtils": 2033,
      "esri/views/3d/webgl-engine/lib/HighlightSet": 2047,
      "esri/views/3d/layers/graphics/Graphics3DVerticalScale": 2060,
      "esri/views/3d/layers/graphics/Graphics3DFrustumVisibility": 2064,
      "esri/views/3d/layers/graphics/Graphics3DHighlights": 2065,
      "esri/views/3d/layers/graphics/Graphics3DHighlightSet": 2066,
      "esri/views/3d/layers/support/attributeUtils": 2067,
      "esri/views/3d/layers/graphics/Graphics3DFeatureLikeLayerView": 2095,
      "esri/views/3d/layers/i3s/I3SQueryEngine": 2097,
      "esri/views/3d/layers/i3s/MemCache": 2189,
      "esri/views/3d/support/EventedArray": 2190
    });
  })();
