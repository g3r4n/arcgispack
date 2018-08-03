(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    1993: function(e, t, n) {
      var r, i;
      (r = [
        n(44),
        n(34),
        n(3),
        n(180),
        n(4),
        n(27),
        n(9),
        n(20),
        n(2191),
        n(261),
        n(18)
      ]),
        void 0 ===
          (i = function(e, t, n, r, i, o, s, c, a, l, u) {
            return e([n, r], {
              declaredClass: "esri.layers.graphics.sources.StreamLayerSource",
              getDefaults: function(e) {
                var t = this.inherited(arguments),
                  n = e.layer;
                return n && (t = i.mixin(t, { url: n.url })), t;
              },
              initialize: function() {
                this.addResolvingPromise(this._fetchLayers());
              },
              properties: {
                connectionInfo: {
                  get: function() {
                    if (this.layer.hasMemorySource || this.layer.socketUrl)
                      return { serviceSocketUrls: [this.layer.socketUrl] };
                    if (this.layerDefinition) {
                      var e,
                        t,
                        n,
                        r,
                        i = {},
                        s = this.layerDefinition,
                        c = [],
                        a = [],
                        l = [];
                      if (
                        (s.streamUrls &&
                          s.streamUrls.forEach(function(e) {
                            "ws" === e.transport &&
                              ((c = e.urls), (i.token = e.token));
                          }, this),
                        c.forEach(function(e) {
                          0 === e.lastIndexOf("wss", 0) ? l.push(e) : a.push(e);
                        }),
                        (e =
                          "https" === o.appUrl.scheme ||
                          0 === this.url.lastIndexOf("https:", 0)
                            ? l
                            : 0 === a.length
                              ? l
                              : a) && e.length > 1)
                      )
                        for (t = 0; t < e.length - 1; t++)
                          (r =
                            e[
                              (n =
                                t + Math.floor(Math.random() * (e.length - t)))
                            ]),
                            (e[n] = e[t]),
                            (e[t] = r);
                      return (i.serviceSocketUrls = e), i;
                    }
                  }
                },
                latestUrl: {
                  get: function() {
                    var e = this.layerDefinition,
                      t =
                        e.keepLatestArchive && e.keepLatestArchive.featuresUrl;
                    return t || null;
                  }
                },
                latestQueryTask: {
                  get: function() {
                    var e = this.latestUrl;
                    return e ? new l(e) : null;
                  }
                },
                layer: {},
                relatedFeaturesInfo: {
                  get: function() {
                    var e = (this.layerDefinition || {}).relatedFeatures;
                    return e && e.featuresUrl ? e : null;
                  }
                },
                relatedFeaturesQueryTask: {
                  get: function() {
                    var e = this.relatedFeaturesInfo,
                      t = e ? e.featuresUrl : null;
                    return t ? new l(t) : null;
                  }
                },
                parsedUrl: {
                  get: function() {
                    return this.url ? o.urlToObject(this.url) : null;
                  }
                },
                url: null
              },
              createWebSocketConnector: function(e) {
                var n = new t();
                return (
                  this.when(
                    function() {
                      var t,
                        r,
                        o,
                        s,
                        c = this.connectionInfo,
                        l = this.layer.spatialReference,
                        u = {};
                      try {
                        t = this.makeFilter();
                      } catch (e) {
                        return void n.reject(e);
                      }
                      if (c) {
                        if (
                          (c.socketUrl
                            ? (o = [c.socketUrl])
                            : c.serviceSocketUrls &&
                              (o = c.serviceSocketUrls.map(
                                function(e) {
                                  return e + "/" + this.layer.socketDirection;
                                }.bind(this)
                              )),
                          (u.socketUrls = o),
                          t && (t.where || t.geometry || t.outFields))
                        ) {
                          var h = t.geometry;
                          h &&
                            "string" != typeof h &&
                            (h = h.toJSON
                              ? JSON.stringify(h.toJSON())
                              : JSON.stringify(h)),
                            (r = i.mixin(r || {}, {
                              where: t.where,
                              geometry: h,
                              outFields: t.outFields
                            }));
                        }
                        c.token && (r = i.mixin(r || {}, { token: c.token })),
                          e &&
                            l &&
                            e.wkid !== l.wkid &&
                            (r = i.mixin(r || {}, { outSR: e.wkid })),
                          (u.queryParams = r),
                          (u.layerSource = this),
                          (s = new a(u)),
                          n.resolve(s);
                      } else n.reject(new Error("No web socket urls found"));
                    }.bind(this)
                  ),
                  n.promise
                );
              },
              getWebSocketToken: function() {
                return this._fetchStreamLayer().then(
                  function(e) {
                    var t = e.data,
                      n = null;
                    return (
                      t.streamUrls &&
                        t.streamUrls.some(function(e) {
                          if ("ws" === e.transport) return (n = e.token), !0;
                        }, this),
                      n
                    );
                  }.bind(this)
                );
              },
              makeFilter: function(e) {
                var t,
                  n = this.layer,
                  r = null;
                if (e) {
                  var o;
                  if (
                    ((t = {}),
                    e.hasOwnProperty("where") && (t.where = e.where),
                    e.hasOwnProperty("geometry"))
                  ) {
                    if ((o = e.geometry) && !o.hasOwnProperty("xmin"))
                      throw new Error(
                        "Cannot make filter. Only Extent is supported for the geometry filter"
                      );
                    o && !o.declaredClass && (o = new c(o)), (t.geometry = o);
                  }
                } else {
                  var s = n.filter || {};
                  t = { where: s.where, geometry: s.geometry };
                  var a =
                    (this.relatedFeaturesInfo &&
                      this.relatedFeaturesInfo.outFields) ||
                    n.outFields;
                  if (a && -1 === a.indexOf("*")) {
                    var l = n.fields.map(function(e) {
                      return e.name;
                    });
                    (r = a
                      .filter(function(e) {
                        return -1 !== l.indexOf(e);
                      })
                      .join(",")),
                      (t = i.mixin(t || {}, { outFields: r }));
                  }
                }
                return t;
              },
              _fetchLayers: function() {
                return this._fetchStreamLayer()
                  .then(
                    function(e) {
                      return (
                        e.ssl &&
                          (this.url = this.url.replace(/^http:/i, "https:")),
                        (this.layerDefinition = e.data),
                        this._fetchArchiveLayer()
                      );
                    }.bind(this)
                  )
                  .then(
                    function(e) {
                      return (
                        (this.archivedLayerDefinition = e && e.data),
                        this._fetchRelatedLayer()
                      );
                    }.bind(this)
                  )
                  .then(
                    function(e) {
                      this.relatedLayerDefinition = e && e.data;
                    }.bind(this)
                  );
              },
              _fetchStreamLayer: function() {
                return this._requestServiceDefinition({
                  url: this.layer.parsedUrl.path,
                  content: i.mixin({ f: "json" }, this.layer.parsedUrl.query)
                });
              },
              _fetchArchiveLayer: function() {
                var e = this.latestUrl;
                return e
                  ? this._requestServiceDefinition({ url: e })
                  : s.resolve();
              },
              _fetchRelatedLayer: function() {
                var e = this.relatedFeaturesInfo;
                return e
                  ? this._requestServiceDefinition({ url: e.featuresUrl })
                  : s.resolve();
              },
              _requestServiceDefinition: function(e) {
                return e && e.url
                  ? u(e.url, {
                      query: i.mixin(e.content || {}, { f: "json" }),
                      responseType: "json",
                      callbackParamName: "callback"
                    })
                  : s.reject(new Error("url is a required options property"));
              }
            });
          }.apply(null, r)) || (e.exports = i);
    },
    2191: function(e, t, n) {
      var r, i;
      (r = [n(86), n(34), n(3), n(53), n(180), n(9), n(26), n(10)]),
        void 0 ===
          (i = function(e, t, n, r, i, o, s, c) {
            return n.createSubclass([r, i], {
              declaredClass: "esri.layers.support.WebSocketConnector",
              initialize: function() {
                var e = null;
                if (
                  (this.socketUrls.length ||
                    (e = new Error(
                      "No urls passed to WebSocketConnector. No live connection possible"
                    )),
                  "WebSocket" in window ||
                    (e = new Error(
                      "The browser does not support Web Sockets. No live connection possible"
                    )),
                  e)
                ) {
                  var n = new t();
                  this.addResolvingPromise(n.promise), n.reject(e);
                }
                this.queryParams &&
                  this.queryParams.token &&
                  this._set("tokenNeeded", !0);
              },
              _socket: null,
              _connectPromise: null,
              _disconnectPromise: null,
              properties: {
                currentSocketUrl: { value: null, readOnly: !0 },
                layerSource: null,
                queryParams: null,
                socketUrls: { value: [] },
                tokenNeeded: { value: !1 },
                connectionError: { value: null, type: c, readOnly: !0 },
                connectionStatus: { value: "disconnected", readOnly: !0 }
              },
              connect: function() {
                var e = this.connectionStatus;
                return "connected" === e || "connecting" === e
                  ? this._connectPromise
                  : "disconnected" === this.connectionStatus
                    ? (this._set("connectionStatus", "connecting"),
                      this._connect())
                    : "disconnecting" === this.connectionStatus
                      ? ((this._connectPromise = null),
                        this._disconnectPromise ||
                          (this._disconnectPromise = s
                            .once(this, "connectionStatus")
                            .then(
                              function(e) {
                                if ("disconnected" === e.value)
                                  return this._connect();
                              }.bind(this)
                            )),
                        this._disconnectPromise)
                      : void 0;
              },
              disconnect: function() {
                var e = this.connectionStatus;
                "connected" === e
                  ? (this._set("connectionStatus", "disconnecting"),
                    this._socket
                      ? this._socket.close()
                      : this._set("connectionStatus", "disconnected"))
                  : "connecting" === e &&
                    this._connectPromise.then(
                      function() {
                        this.disconnect();
                      }.bind(this)
                    );
              },
              send: function(e) {
                this._socket &&
                  ("object" == typeof e && (e = JSON.stringify(e)),
                  this._socket.send(e));
              },
              _connect: function() {
                this._connectPromise && (this._connectPromise = null);
                var e = new t();
                return (
                  (this._connectPromise = e),
                  this._getWebSocketToken()
                    .then(
                      function(e) {
                        e && (this.queryParams.token = e);
                        var t = this._makeCurrentUrl(),
                          n = new WebSocket(t);
                        (n.onopen = this._handleSocketOpen.bind(this)),
                          (n.onclose = this._handleSocketClose.bind(this)),
                          (n.onmessage = this._handleSocketMessage.bind(this)),
                          (this._socket = n);
                      }.bind(this)
                    )
                    .catch(
                      function(e) {
                        var t = new c(
                          "web-socket-connector:connect",
                          "Could not get websocket token for secured service",
                          e
                        );
                        this._set("connectionError", t),
                          this._connectPromise.reject(t);
                      }.bind(this)
                    ),
                  e.promise
                );
              },
              _getWebSocketToken: function() {
                var e = this.queryParams,
                  t = e && e.token,
                  n = this.tokenNeeded;
                return t
                  ? o.resolve(t)
                  : n
                    ? this.layerSource.getWebSocketToken()
                    : o.resolve();
              },
              _makeCurrentUrl: function() {
                var t,
                  n,
                  r = this.queryParams,
                  i = this.socketUrls;
                return (
                  1 !== i.length && this.currentSocketUrl
                    ? (n =
                        i[
                          (t = i.indexOf(this.currentSocketUrl)) >= i.length - 1
                            ? 0
                            : t + 1
                        ])
                    : (n = i[0]),
                  this._set("currentSocketUrl", n),
                  r && (n += "?" + e.objectToQuery(r)),
                  n
                );
              },
              _handleSocketOpen: function() {
                this._set("connectionStatus", "connected"),
                  this._set("connectionError", null),
                  (this._disconnectPromise = null),
                  this._connectPromise && this._connectPromise.resolve();
              },
              _handleSocketClose: function(e) {
                var t,
                  n = null;
                this.queryParams && (this.queryParams.token = null),
                  (e.wasClean && !e.code) ||
                    (1001 === e.code
                      ? (t = "Service is going away.")
                      : 4400 === e.code
                        ? (t =
                            e.reason ||
                            "Invalid url parameters. Check filter properties.")
                        : 4404 === e.code
                          ? (t = "Service not found")
                          : 4401 === e.code || 4403 === e.code
                            ? (t = "Not authorized")
                            : e.wasClean || (t = e.reason || "Unknown reason"),
                    t &&
                      ((n = new c(
                        "web-socket-connector:connection closed",
                        "Connection failed: " + t
                      )),
                      this._set("connectionError", n),
                      this._connectPromise && this._connectPromise.reject(n))),
                  (this._connectPromise = null),
                  this._set("connectionStatus", "disconnected"),
                  (this._socket = null);
              },
              _handleSocketMessage: function(e) {
                this.emit("data-received", e.data);
              }
            });
          }.apply(null, r)) || (e.exports = i);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/layers/graphics/sources/StreamLayerSource": 1993,
      "esri/layers/support/WebSocketConnector": 2191
    });
  })();
