(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    2014: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2015), r(181)]),
        void 0 ===
          (n = function(e, t, r, i) {
            var n = new Set(),
              s = [],
              o = new Map(),
              a = [0, 0];
            return (function() {
              function e(e) {
                var t = this;
                (this._keysToRequests = new Map()), (this.tileInfoView = null);
                var i =
                  e.strategy && "scale-first" !== e.strategy
                    ? this._peekByCenterFirst.bind(this)
                    : this._peekByScaleFirst.bind(this);
                (this.tileInfoView = e.tileInfoView),
                  e.tileServers && e.tileServers.length > 0
                    ? (this._queues = e.tileServers.map(function(n) {
                        return new r({
                          concurrency: e.concurrency || 6,
                          process: function(r) {
                            var i = t._keysToRequests.get(r);
                            return e.process(i, n);
                          },
                          peeker: i
                        });
                      }))
                    : (this._queues = [
                        new r({
                          concurrency: e.concurrency || 6,
                          process: function(r) {
                            var i = t._keysToRequests.get(r);
                            return e.process(i);
                          },
                          peeker: i
                        })
                      ]);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._queues.reduce(function(e, t) {
                      return e + t.length;
                    }, 0);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "onGoingCount", {
                  get: function() {
                    return this._keysToRequests.size;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].clear();
                  this._keysToRequests.clear();
                }),
                (e.prototype.find = function(e, t) {
                  for (
                    var r = this, i = 0, n = this._queues;
                    i < n.length;
                    i++
                  ) {
                    var s = n[i].find(function(t) {
                      return e(r._keysToRequests.get(t).key);
                    });
                    if (s) return s;
                  }
                }),
                (e.prototype.get = function(e) {
                  for (
                    var t = "string" == typeof e ? e : e.id,
                      r = 0,
                      i = this._queues;
                    r < i.length;
                    r++
                  ) {
                    var n = i[r].get(t);
                    if (n) return n;
                  }
                }),
                (e.prototype.getRequest = function(e) {
                  var t = "string" == typeof e ? e : e.id;
                  return this._keysToRequests.get(t);
                }),
                (e.prototype.has = function(e) {
                  return "string" == typeof e
                    ? this._keysToRequests.has(e)
                    : this._keysToRequests.has(e.id);
                }),
                (e.prototype.isOngoing = function(e) {
                  var t = "string" == typeof e ? e : e.id;
                  return (
                    this.has(t) &&
                    this._queues.some(function(e) {
                      return e.isOngoing(t);
                    })
                  );
                }),
                (e.prototype.pause = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].pause();
                }),
                (e.prototype.push = function(e) {
                  var t = this,
                    r = e.key.id;
                  if (this.has(r)) return this.get(r);
                  var i = this._queues[e.key.row % this._queues.length].push(r),
                    n = function() {
                      return t._keysToRequests.delete(r);
                    };
                  return this._keysToRequests.set(r, e), i.then(n, n), i;
                }),
                (e.prototype.reset = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].reset();
                }),
                (e.prototype.resume = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].resume();
                }),
                (e.prototype._peekByScaleFirst = function(e) {
                  if (!this.state) return e[0];
                  for (
                    var t = this.tileInfoView,
                      r = Number.NEGATIVE_INFINITY,
                      i = Number.POSITIVE_INFINITY,
                      a = 0,
                      u = e;
                    a < u.length;
                    a++
                  ) {
                    var l = u[a],
                      h = this._keysToRequests.get(l),
                      c = this.tileInfoView.getTileScale(h.key);
                    o.has(c) ||
                      (o.set(c, []),
                      (r = Math.max(c, r)),
                      (i = Math.min(c, i))),
                      o.get(c).push(h.key),
                      n.add(c);
                  }
                  var f = this.state.scale;
                  o.has(f) ||
                    ((function(e, t) {
                      (e.length = 0),
                        t.forEach(function(t) {
                          return e.push(t);
                        });
                    })(s, n),
                    s.sort(),
                    (f = s.reduce(function(e, t, r, i) {
                      return Math.abs(t - f) < Math.abs(e - f) ? t : e;
                    }, s[0]))),
                    (f = Math.min(f, r)),
                    (f = Math.max(f, i));
                  var p = o.get(f),
                    d = t.getClosestInfoForScale(f),
                    y = d.getColumnForX(this.state.center[0]),
                    m = d.getRowForY(this.state.center[1]);
                  return (
                    p.sort(function(e, t) {
                      var r = d.denormalizeCol(e.col, e.world),
                        i = d.denormalizeCol(t.col, t.world);
                      return (
                        Math.sqrt(
                          (y - r) * (y - r) + (m - e.row) * (m - e.row)
                        ) -
                        Math.sqrt((y - i) * (y - i) + (m - t.row) * (m - t.row))
                      );
                    }),
                    n.clear(),
                    o.clear(),
                    p[0].id
                  );
                }),
                (e.prototype._peekByCenterFirst = function(e) {
                  if (!this.state) return e[0];
                  for (
                    var t = this.tileInfoView,
                      r = this.state.center,
                      n = Number.POSITIVE_INFINITY,
                      s = null,
                      o = 0,
                      u = e;
                    o < u.length;
                    o++
                  ) {
                    var l = u[o],
                      h = this._keysToRequests.get(l);
                    t.getTileCoords(a, h.key);
                    var c = i.distance(a, r);
                    c < n && ((n = c), (s = h.key));
                  }
                  return s.id;
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = n);
    },
    2015: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(34), r(2016), r(55)]),
        void 0 ===
          (n = function(e, t, r, i, n) {
            return (function() {
              function e(e) {
                (this._apiPromises = new Map()),
                  (this._processingItems = new Map()),
                  (this._isPaused = !1),
                  (this._scheduledNextHandle = null),
                  (this.concurrency = 1),
                  (this.ordered = !1),
                  e.concurrency && (this.concurrency = e.concurrency),
                  (this.ordered = !!e.ordered),
                  (this._queue = new i(
                    e.peeker ? { peeker: e.peeker } : void 0
                  )),
                  (this.process = e.process);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._processingItems.size + this._queue.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  this._queue.clear();
                  var e = [];
                  this._processingItems.forEach(function(t) {
                    return e.push(t.resultPromise);
                  }),
                    this._processingItems.clear(),
                    e.forEach(function(e) {
                      return e.cancel();
                    }),
                    (e.length = 0),
                    this._apiPromises.forEach(function(t) {
                      return e.push(t);
                    }),
                    this._apiPromises.clear(),
                    e.forEach(function(e) {
                      return e.cancel();
                    }),
                    this._cancelNext();
                }),
                (e.prototype.find = function(e, t) {
                  var r = this,
                    i = void 0;
                  return (
                    this._apiPromises.forEach(function(n, s) {
                      e.call(t, s) && (i = r._apiPromises.get(s).promise);
                    }),
                    i
                  );
                }),
                (e.prototype.get = function(e) {
                  var t = this._apiPromises.get(e);
                  return (t && t.promise) || void 0;
                }),
                (e.prototype.isOngoing = function(e) {
                  return this._processingItems.has(e);
                }),
                (e.prototype.has = function(e) {
                  return this._apiPromises.has(e);
                }),
                (e.prototype.pause = function() {
                  this._isPaused || ((this._isPaused = !0), this._cancelNext());
                }),
                (e.prototype.push = function(e) {
                  var t = this;
                  if (this._apiPromises.has(e))
                    return this._apiPromises.get(e).promise;
                  var i = new r(function(r) {
                    var i = t._processingItems.get(e);
                    i
                      ? i.resultPromise.cancel(r)
                      : (t._remove(e), t._scheduleNext());
                  });
                  return this._add(e, i), this._scheduleNext(), i.promise;
                }),
                (e.prototype.reset = function() {
                  var e = [];
                  this._processingItems.forEach(function(t) {
                    return e.push(t);
                  }),
                    this._processingItems.clear();
                  for (var t = 0, r = e; t < r.length; t++) {
                    var i = r[t];
                    i.resultPromise.isFulfilled()
                      ? this._processReset(i)
                      : ((i.isReset = !0), i.resultPromise.cancel());
                  }
                }),
                (e.prototype.resume = function() {
                  this._isPaused &&
                    ((this._isPaused = !1), this._scheduleNext());
                }),
                (e.prototype._scheduleNext = function() {
                  var e = this;
                  this._isPaused ||
                    this._scheduledNextHandle ||
                    (this._scheduledNextHandle = n.schedule(function() {
                      (e._scheduledNextHandle = null), e._next();
                    }));
                }),
                (e.prototype._next = function() {
                  for (
                    ;
                    this._queue.length > 0 &&
                    this._processingItems.size < this.concurrency;

                  )
                    this._process(this._queue.pop());
                }),
                (e.prototype._processResult = function(e, t) {
                  this._remove(e.item), this._scheduleNext(), e.dfd.resolve(t);
                }),
                (e.prototype._processError = function(e, t) {
                  e.isReset
                    ? this._processReset(e)
                    : (this._remove(e.item),
                      this._scheduleNext(),
                      e.dfd.reject(t));
                }),
                (e.prototype._processReset = function(e) {
                  this._remove(e.item),
                    this._add(e.item, e.dfd),
                    this._scheduleNext();
                }),
                (e.prototype._processOrdered = function(e, t) {
                  var r = this,
                    i = !1;
                  if (e.isReset) this._processReset(e);
                  else {
                    (e.result = t),
                      this._itemsToProcess || (this._itemsToProcess = []),
                      this._processingItems.forEach(function(e) {
                        i || (e.result ? r._itemsToProcess.push(e) : (i = !0));
                      });
                    for (
                      var n = 0, s = this._itemsToProcess;
                      n < s.length;
                      n++
                    ) {
                      var o = s[n];
                      !1 === o.result.ok
                        ? this._processError(o, o.result.error)
                        : this._processResult(o, o.result.value);
                    }
                    this._itemsToProcess.length = 0;
                  }
                }),
                (e.prototype._process = function(e) {
                  var t = this;
                  if (null != e) {
                    var r = this._apiPromises.get(e),
                      i = this.process(e);
                    if (
                      (function(e) {
                        return e && "function" == typeof e.then;
                      })(i)
                    ) {
                      var n = {
                        item: e,
                        resultPromise: i,
                        result: null,
                        dfd: r,
                        isReset: !1
                      };
                      this._processingItems.set(e, n),
                        this.ordered
                          ? i.then(
                              function(e) {
                                return t._processOrdered(n, {
                                  ok: !0,
                                  value: e
                                });
                              },
                              function(e) {
                                return t._processOrdered(n, {
                                  ok: !1,
                                  error: e
                                });
                              }
                            )
                          : i.then(
                              function(e) {
                                return t._processResult(n, e);
                              },
                              function(e) {
                                return t._processError(n, e);
                              }
                            );
                    } else r.resolve(i), this._remove(e);
                  }
                }),
                (e.prototype._add = function(e, t) {
                  this._apiPromises.set(e, t), this._queue.push(e);
                }),
                (e.prototype._remove = function(e) {
                  this._queue.remove(e),
                    this._apiPromises.delete(e),
                    this._processingItems.delete(e);
                }),
                (e.prototype._cancelNext = function() {
                  this._scheduledNextHandle &&
                    (this._scheduledNextHandle.remove(),
                    (this._scheduledNextHandle = null));
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = n);
    },
    2016: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return (function() {
              function e(e) {
                (this._items = []),
                  (this._itemSet = new Set()),
                  (this._peeker = function(e) {
                    return e[0];
                  }),
                  (this._length = 0),
                  e && e.peeker && (this._peeker = e.peeker);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  this._itemSet.clear(),
                    (this._items.length = 0),
                    (this._length = 0);
                }),
                (e.prototype.peek = function() {
                  if (0 !== this._length) return this._peeker(this._items);
                }),
                (e.prototype.push = function(e) {
                  this.contains(e) || this._add(e);
                }),
                (e.prototype.contains = function(e) {
                  return this._length > 0 && this._itemSet.has(e);
                }),
                (e.prototype.pop = function() {
                  if (0 !== this._length) {
                    var e = this.peek();
                    return this._remove(e), e;
                  }
                }),
                (e.prototype.remove = function(e) {
                  this.contains(e) && this._remove(e);
                }),
                (e.prototype._add = function(e) {
                  this._items.push(e), this._itemSet.add(e), this._length++;
                }),
                (e.prototype._remove = function(e) {
                  this._itemSet.delete(e),
                    this._items.splice(this._items.indexOf(e), 1),
                    this._length--;
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = n);
    },
    2026: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        n = r(321),
        s = r(223),
        o = r(785),
        a = r(266);
      r(328),
        (t.Set = s.default.Set),
        a.default("es6-set") ||
          (t.Set = (((i = (function() {
            function e(e) {
              if (((this._setData = []), (this[Symbol.toStringTag] = "Set"), e))
                if (o.isArrayLike(e))
                  for (var t = 0; t < e.length; t++) this.add(e[t]);
                else
                  try {
                    for (
                      var r = n.__values(e), i = r.next();
                      !i.done;
                      i = r.next()
                    ) {
                      var s = i.value;
                      this.add(s);
                    }
                  } catch (e) {
                    a = { error: e };
                  } finally {
                    try {
                      i && !i.done && (u = r.return) && u.call(r);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
              var a, u;
            }
            return (
              (e.prototype.add = function(e) {
                return this.has(e) ? this : (this._setData.push(e), this);
              }),
              (e.prototype.clear = function() {
                this._setData.length = 0;
              }),
              (e.prototype.delete = function(e) {
                var t = this._setData.indexOf(e);
                return -1 !== t && (this._setData.splice(t, 1), !0);
              }),
              (e.prototype.entries = function() {
                return new o.ShimIterator(
                  this._setData.map(function(e) {
                    return [e, e];
                  })
                );
              }),
              (e.prototype.forEach = function(e, t) {
                for (var r = this.values(), i = r.next(); !i.done; )
                  e.call(t, i.value, i.value, this), (i = r.next());
              }),
              (e.prototype.has = function(e) {
                return this._setData.indexOf(e) > -1;
              }),
              (e.prototype.keys = function() {
                return new o.ShimIterator(this._setData);
              }),
              Object.defineProperty(e.prototype, "size", {
                get: function() {
                  return this._setData.length;
                },
                enumerable: !0,
                configurable: !0
              }),
              (e.prototype.values = function() {
                return new o.ShimIterator(this._setData);
              }),
              (e.prototype[Symbol.iterator] = function() {
                return new o.ShimIterator(this._setData);
              }),
              e
            );
          })())[Symbol.species] = i),
          i)),
        (t.default = t.Set);
    },
    2052: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(773), r(259), r(2014), r(2023)]),
        void 0 ===
          (n = function(e, t, r, i, n, s) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.TileInfoView = r),
              (t.TileKey = i),
              (t.TileQueue = n),
              (t.TileStrategy = s);
          }.apply(null, i)) || (e.exports = n);
    },
    2086: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2026), r(224), r(35), r(778), r(259)]),
        void 0 ===
          (n = function(e, t, r, i, n, s, o) {
            function a(e, t) {
              var r = e.bounds,
                i = t.bounds;
              return (
                e.key.id !== t.key.id &&
                e.key.world === t.key.world &&
                r[0] <= i[0] &&
                r[1] <= i[1] &&
                r[2] >= i[2] &&
                r[3] >= i[3]
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.isParentOf = a),
              (t.isChildOf = function(e, t) {
                return a(t, e);
              });
            var u = (function() {
              function e(e, t) {
                (this.bounds = n.create()),
                  (this.key = new o(0, 0, 0, 0)),
                  (this.objectIds = new r.default()),
                  this.key.set(t);
                var i = e.getLODInfoAt(this.key);
                (this.tileInfoView = e),
                  this.tileInfoView.getTileBounds(this.bounds, this.key, !0),
                  (this.resolution = i.resolution),
                  (this.scale = i.scale);
              }
              return (
                Object.defineProperty(e.prototype, "id", {
                  get: function() {
                    return this.key.id;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clone = function() {
                  return new e(this.tileInfoView, this.id);
                }),
                (e.prototype.createChildTiles = function() {
                  for (
                    var t = this.key.getChildKeys(), r = i.acquire(), n = 0;
                    n < t.length;
                    n++
                  )
                    r[n] = new e(this.tileInfoView, t[n]);
                  return r;
                }),
                (e.prototype.getQuantizationParameters = function() {
                  return s.default.fromJSON({
                    mode: "view",
                    originPosition: "upperLeft",
                    tolerance: this.resolution,
                    extent: {
                      xmin: this.bounds[0],
                      ymin: this.bounds[1],
                      xmax: this.bounds[2],
                      ymax: this.bounds[3],
                      spatialReference: this.tileInfoView.tileInfo
                        .spatialReference
                    }
                  });
                }),
                e
              );
            })();
            (t.Tile = u), (t.default = u);
          }.apply(null, i)) || (e.exports = n);
    },
    2090: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2026), r(10), r(2091), r(424), r(2130)]),
        void 0 ===
          (n = function(e, t, r, i, n, s, o) {
            function a(e) {
              return e
                ? t.invalidClauseCache.has(e)
                  ? t.invalidClauseCache.use(e)
                  : t.whereClausesCache.has(e)
                    ? t.whereClausesCache.get(e)
                    : ((r = o.create(e)), t.whereClausesCache.set(e, r), r)
                : null;
              var r;
            }
            function u(e, t, r, n) {
              void 0 === n && (n = !0);
              for (var s = [], o = 0, c = t; o < c.length; o++) {
                var f = c[o];
                if ("*" !== f && !e.has(f))
                  if (n) {
                    var p = l(f);
                    try {
                      var d = a(p);
                      if (!d.isStandardized())
                        throw new i(h, "expression is not standard", {
                          clause: d
                        });
                      u(e, d.getFields(), "expression contains missing fields");
                    } catch (e) {
                      var y = e && e.details;
                      if (y && y.clause) throw e;
                      y && y.missingFields
                        ? Array.prototype.push.apply(s, y.missingFields)
                        : s.push(f);
                    }
                  } else s.push(f);
              }
              if (s.length) throw new i(h, r, { missingFields: s });
            }
            function l(e) {
              return e.split(c)[0];
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.invalidClauseCache = new n(500)),
              (t.whereClausesCache = new s(50));
            var h = "feature-store:unsupported-query",
              c = " as ",
              f = new r.default([
                "esriFieldTypeSmallInteger",
                "esriFieldTypeInteger",
                "esriFieldTypeSingle",
                "esriFieldTypeDouble",
                "esriFieldTypeLong"
              ]);
            (t.validateWhere = function(e, r) {
              if (!r) return !0;
              var n;
              try {
                (n = o.create(r)), t.whereClausesCache.set(r, n);
              } catch (e) {
                throw (t.invalidClauseCache.insert(r, null),
                new i(h, "invalid SQL expression", { where: r }));
              }
              if (!n.isStandardized())
                throw new i(h, "where clause is not standard", { where: r });
              return (
                u(e, n.getFields(), "where clause contains missing fields"), !0
              );
            }),
              (t.getWhereClause = a),
              (t.validateFields = u),
              (t.getExpressionFromFieldName = l),
              (t.getAliasFromFieldName = function(e) {
                return e.split(c)[1];
              }),
              (t.hasInvalidFieldType = function(e, t) {
                var r = !1;
                if (
                  -1 !==
                  a(e)
                    .getFields()
                    .indexOf(e)
                ) {
                  var i = t.get(e);
                  r = !f.has(i.type);
                }
                return r;
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2091: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return (function() {
              function e(e) {
                if (((this._cache = {}), (this._lruQueue = []), e <= 0))
                  throw new Error("LRU cache size must be bigger than zero!");
                this._maxSize = e;
              }
              return (
                (e.prototype.has = function(e) {
                  return void 0 !== this._cache[e];
                }),
                (e.prototype.insert = function(e, t) {
                  null === this.use(e)
                    ? (this._collect(),
                      (this._cache[e] = t),
                      this._lruQueue.unshift(e))
                    : (this._cache[e] = t);
                }),
                (e.prototype.use = function(e) {
                  var t = this._cache[e];
                  return t
                    ? (this._lruQueue.splice(this._lruQueue.indexOf(e), 1),
                      this._lruQueue.unshift(e),
                      t)
                    : null;
                }),
                (e.prototype.print = function() {
                  for (var e = 0, t = this._lruQueue; e < t.length; e++) {
                    var r = t[e];
                    console.log("key: " + r + ", value: " + this._cache[r]);
                  }
                }),
                (e.prototype._collect = function() {
                  if (!(this._lruQueue.length < this._maxSize)) {
                    var e = this._lruQueue.pop(),
                      t = this._cache[e];
                    t && t.release && t.release(), delete this._cache[e];
                  }
                }),
                e
              );
            })();
          }.apply(null, i)) || (e.exports = n);
    },
    2128: function(e, t, r) {
      var i, n;
      (i = [r(822)]),
        void 0 ===
          (n = function(e) {
            "use strict";
            function t(e, r) {
              if (!(this instanceof t)) return new t(e, r);
              (this._maxEntries = Math.max(4, e || 9)),
                (this._minEntries = Math.max(
                  2,
                  Math.ceil(0.4 * this._maxEntries)
                )),
                r &&
                  ("function" == typeof r
                    ? (this.toBBox = r)
                    : this._initFormat(r)),
                this.clear();
            }
            function r(e, t, r) {
              if (!r) return t.indexOf(e);
              for (var i = 0; i < t.length; i++) if (r(e, t[i])) return i;
              return -1;
            }
            function i(e, t) {
              n(e, 0, e.children.length, t, e);
            }
            function n(e, t, r, i, n) {
              n || (n = d(null)),
                (n.minX = 1 / 0),
                (n.minY = 1 / 0),
                (n.maxX = -1 / 0),
                (n.maxY = -1 / 0);
              for (var o, a = t; a < r; a++)
                (o = e.children[a]), s(n, e.leaf ? i(o) : o);
              return n;
            }
            function s(e, t) {
              return (
                (e.minX = Math.min(e.minX, t.minX)),
                (e.minY = Math.min(e.minY, t.minY)),
                (e.maxX = Math.max(e.maxX, t.maxX)),
                (e.maxY = Math.max(e.maxY, t.maxY)),
                e
              );
            }
            function o(e, t) {
              return e.minX - t.minX;
            }
            function a(e, t) {
              return e.minY - t.minY;
            }
            function u(e) {
              return (e.maxX - e.minX) * (e.maxY - e.minY);
            }
            function l(e) {
              return e.maxX - e.minX + (e.maxY - e.minY);
            }
            function h(e, t) {
              return (
                (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) *
                (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY))
              );
            }
            function c(e, t) {
              var r = Math.max(e.minX, t.minX),
                i = Math.max(e.minY, t.minY),
                n = Math.min(e.maxX, t.maxX),
                s = Math.min(e.maxY, t.maxY);
              return Math.max(0, n - r) * Math.max(0, s - i);
            }
            function f(e, t) {
              return (
                e.minX <= t.minX &&
                e.minY <= t.minY &&
                t.maxX <= e.maxX &&
                t.maxY <= e.maxY
              );
            }
            function p(e, t) {
              return (
                t.minX <= e.maxX &&
                t.minY <= e.maxY &&
                t.maxX >= e.minX &&
                t.maxY >= e.minY
              );
            }
            function d(e) {
              return {
                children: e,
                height: 1,
                leaf: !0,
                minX: 1 / 0,
                minY: 1 / 0,
                maxX: -1 / 0,
                maxY: -1 / 0
              };
            }
            function y(t, r, i, n, s) {
              for (var o, a = [r, i]; a.length; )
                (i = a.pop()) - (r = a.pop()) <= n ||
                  ((o = r + Math.ceil((i - r) / n / 2) * n),
                  e(t, o, r, i, s),
                  a.push(r, o, o, i));
            }
            return (
              (t.prototype = {
                all: function() {
                  return this._all(this.data, []);
                },
                search: function(e) {
                  var t = this.data,
                    r = [],
                    i = this.toBBox;
                  if (!p(e, t)) return r;
                  for (var n, s, o, a, u = []; t; ) {
                    for (n = 0, s = t.children.length; n < s; n++)
                      (o = t.children[n]),
                        p(e, (a = t.leaf ? i(o) : o)) &&
                          (t.leaf
                            ? r.push(o)
                            : f(e, a)
                              ? this._all(o, r)
                              : u.push(o));
                    t = u.pop();
                  }
                  return r;
                },
                collides: function(e) {
                  var t = this.data,
                    r = this.toBBox;
                  if (!p(e, t)) return !1;
                  for (var i, n, s, o, a = []; t; ) {
                    for (i = 0, n = t.children.length; i < n; i++)
                      if (
                        ((s = t.children[i]), p(e, (o = t.leaf ? r(s) : s)))
                      ) {
                        if (t.leaf || f(e, o)) return !0;
                        a.push(s);
                      }
                    t = a.pop();
                  }
                  return !1;
                },
                load: function(e) {
                  if (!e || !e.length) return this;
                  if (e.length < this._minEntries) {
                    for (var t = 0, r = e.length; t < r; t++) this.insert(e[t]);
                    return this;
                  }
                  var i = this._build(e.slice(), 0, e.length - 1, 0);
                  if (this.data.children.length)
                    if (this.data.height === i.height)
                      this._splitRoot(this.data, i);
                    else {
                      if (this.data.height < i.height) {
                        var n = this.data;
                        (this.data = i), (i = n);
                      }
                      this._insert(i, this.data.height - i.height - 1, !0);
                    }
                  else this.data = i;
                  return this;
                },
                insert: function(e) {
                  return e && this._insert(e, this.data.height - 1), this;
                },
                clear: function() {
                  return (this.data = d([])), this;
                },
                remove: function(e, t) {
                  if (!e) return this;
                  for (
                    var i,
                      n,
                      s,
                      o,
                      a = this.data,
                      u = this.toBBox(e),
                      l = [],
                      h = [];
                    a || l.length;

                  ) {
                    if (
                      (a ||
                        ((a = l.pop()),
                        (n = l[l.length - 1]),
                        (i = h.pop()),
                        (o = !0)),
                      a.leaf && -1 !== (s = r(e, a.children, t)))
                    )
                      return (
                        a.children.splice(s, 1),
                        l.push(a),
                        this._condense(l),
                        this
                      );
                    o || a.leaf || !f(a, u)
                      ? n
                        ? (i++, (a = n.children[i]), (o = !1))
                        : (a = null)
                      : (l.push(a),
                        h.push(i),
                        (i = 0),
                        (n = a),
                        (a = a.children[0]));
                  }
                  return this;
                },
                toBBox: function(e) {
                  return e;
                },
                compareMinX: o,
                compareMinY: a,
                toJSON: function() {
                  return this.data;
                },
                fromJSON: function(e) {
                  return (this.data = e), this;
                },
                _all: function(e, t) {
                  for (var r = []; e; )
                    e.leaf
                      ? t.push.apply(t, e.children)
                      : r.push.apply(r, e.children),
                      (e = r.pop());
                  return t;
                },
                _build: function(e, t, r, n) {
                  var s,
                    o = r - t + 1,
                    a = this._maxEntries;
                  if (o <= a)
                    return i((s = d(e.slice(t, r + 1))), this.toBBox), s;
                  n ||
                    ((n = Math.ceil(Math.log(o) / Math.log(a))),
                    (a = Math.ceil(o / Math.pow(a, n - 1)))),
                    ((s = d([])).leaf = !1),
                    (s.height = n);
                  var u,
                    l,
                    h,
                    c,
                    f = Math.ceil(o / a),
                    p = f * Math.ceil(Math.sqrt(a));
                  for (y(e, t, r, p, this.compareMinX), u = t; u <= r; u += p)
                    for (
                      y(
                        e,
                        u,
                        (h = Math.min(u + p - 1, r)),
                        f,
                        this.compareMinY
                      ),
                        l = u;
                      l <= h;
                      l += f
                    )
                      (c = Math.min(l + f - 1, h)),
                        s.children.push(this._build(e, l, c, n - 1));
                  return i(s, this.toBBox), s;
                },
                _chooseSubtree: function(e, t, r, i) {
                  for (
                    var n, s, o, a, l, c, f, p;
                    i.push(t), !t.leaf && i.length - 1 !== r;

                  ) {
                    for (
                      f = p = 1 / 0, n = 0, s = t.children.length;
                      n < s;
                      n++
                    )
                      (l = u((o = t.children[n]))),
                        (c = h(e, o) - l) < p
                          ? ((p = c), (f = l < f ? l : f), (a = o))
                          : c === p && l < f && ((f = l), (a = o));
                    t = a || t.children[0];
                  }
                  return t;
                },
                _insert: function(e, t, r) {
                  var i = this.toBBox,
                    n = r ? e : i(e),
                    o = [],
                    a = this._chooseSubtree(n, this.data, t, o);
                  for (
                    a.children.push(e), s(a, n);
                    t >= 0 && o[t].children.length > this._maxEntries;

                  )
                    this._split(o, t), t--;
                  this._adjustParentBBoxes(n, o, t);
                },
                _split: function(e, t) {
                  var r = e[t],
                    n = r.children.length,
                    s = this._minEntries;
                  this._chooseSplitAxis(r, s, n);
                  var o = this._chooseSplitIndex(r, s, n),
                    a = d(r.children.splice(o, r.children.length - o));
                  (a.height = r.height),
                    (a.leaf = r.leaf),
                    i(r, this.toBBox),
                    i(a, this.toBBox),
                    t ? e[t - 1].children.push(a) : this._splitRoot(r, a);
                },
                _splitRoot: function(e, t) {
                  (this.data = d([e, t])),
                    (this.data.height = e.height + 1),
                    (this.data.leaf = !1),
                    i(this.data, this.toBBox);
                },
                _chooseSplitIndex: function(e, t, r) {
                  var i, s, o, a, l, h, f, p;
                  for (h = f = 1 / 0, i = t; i <= r - t; i++)
                    (a = c(
                      (s = n(e, 0, i, this.toBBox)),
                      (o = n(e, i, r, this.toBBox))
                    )),
                      (l = u(s) + u(o)),
                      a < h
                        ? ((h = a), (p = i), (f = l < f ? l : f))
                        : a === h && l < f && ((f = l), (p = i));
                  return p;
                },
                _chooseSplitAxis: function(e, t, r) {
                  var i = e.leaf ? this.compareMinX : o,
                    n = e.leaf ? this.compareMinY : a;
                  this._allDistMargin(e, t, r, i) <
                    this._allDistMargin(e, t, r, n) && e.children.sort(i);
                },
                _allDistMargin: function(e, t, r, i) {
                  e.children.sort(i);
                  var o,
                    a,
                    u = this.toBBox,
                    h = n(e, 0, t, u),
                    c = n(e, r - t, r, u),
                    f = l(h) + l(c);
                  for (o = t; o < r - t; o++)
                    (a = e.children[o]), s(h, e.leaf ? u(a) : a), (f += l(h));
                  for (o = r - t - 1; o >= t; o--)
                    (a = e.children[o]), s(c, e.leaf ? u(a) : a), (f += l(c));
                  return f;
                },
                _adjustParentBBoxes: function(e, t, r) {
                  for (var i = r; i >= 0; i--) s(t[i], e);
                },
                _condense: function(e) {
                  for (var t, r = e.length - 1; r >= 0; r--)
                    0 === e[r].children.length
                      ? r > 0
                        ? (t = e[r - 1].children).splice(t.indexOf(e[r]), 1)
                        : this.clear()
                      : i(e[r], this.toBBox);
                },
                _initFormat: function(e) {
                  var t = ["return a", " - b", ";"];
                  (this.compareMinX = new Function("a", "b", t.join(e[0]))),
                    (this.compareMinY = new Function("a", "b", t.join(e[1]))),
                    (this.toBBox = new Function(
                      "a",
                      "return {minX: a" +
                        e[0] +
                        ", minY: a" +
                        e[1] +
                        ", maxX: a" +
                        e[2] +
                        ", maxY: a" +
                        e[3] +
                        "};"
                    ));
                }
              }),
              t
            );
          }.apply(null, i)) || (e.exports = n);
    },
    2129: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(2168),
        r(421),
        r(2026),
        r(15),
        r(38),
        r(10),
        r(11),
        r(9),
        r(2128),
        r(783),
        r(35),
        r(129),
        r(84),
        r(98),
        r(98),
        r(2090),
        r(810),
        r(2131),
        r(2173),
        r(2132),
        r(2176),
        r(2177),
        r(135)
      ]),
        void 0 ===
          (n = function(
            e,
            t,
            r,
            i,
            n,
            s,
            o,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            y,
            m,
            g,
            v,
            _,
            x,
            b,
            M,
            w,
            S
          ) {
            function I(e, t) {
              return (
                (R.minX = t[0]),
                (R.minY = t[1]),
                (R.maxX = t[2]),
                (R.maxY = t[3]),
                e.search(R)
              );
            }
            function F(e) {
              return e
                ? JSON.parse(JSON.stringify(e, ["latestWkid", "wkid", "wkt"]))
                : e;
            }
            function N(e, t, r, i, n, s) {
              if (n && !i)
                for (var o = 0, a = r; o < a.length; o++) {
                  var u = a[o];
                  e.push({
                    attributes: u.getAttributes(),
                    centroid: u.getCentroidQuantized(s)
                  });
                }
              else if (i && !n)
                for (var l = 0, h = r; l < h.length; l++) {
                  u = h[l];
                  t.add(u.oid),
                    e.push(new j(u.getAttributes(), u.getGeometryQuantized(s)));
                }
              else
                for (var c = 0, f = r; c < f.length; c++) {
                  u = f[c];
                  t.add(u.oid),
                    e.push(
                      new j(
                        u.getAttributes(),
                        u.getGeometryQuantized(s),
                        u.getCentroidQuantized(s)
                      )
                    );
                }
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var P = u.getLogger("esri.layers.graphics.data.FeatureStore"),
              T = [],
              R = { minX: 0, minY: 0, maxX: 0, maxY: 0 },
              j = (function() {
                return function(e, t, r) {
                  (this.attributes = e),
                    (this.geometry = t),
                    (this.centroid = r);
                };
              })(),
              Q = {},
              z = new n.default(),
              k = (function() {
                function e(e) {
                  var t = this;
                  (this._itemsMap = new i.default()),
                    (this._index = h(
                      9,
                      s("csp-restrictions")
                        ? function(e) {
                            return {
                              minX: e.bounds[0],
                              minY: e.bounds[1],
                              maxX: e.bounds[2],
                              maxY: e.bounds[3]
                            };
                          }
                        : [
                            ".bounds[0]",
                            ".bounds[1]",
                            ".bounds[2]",
                            ".bounds[3]"
                          ]
                    )),
                    (this.capabilities = { query: v.queryCapabilities }),
                    (this.fieldsMap = new i.default()),
                    (this.geometryType = e.geometryType),
                    (this.hasM = e.hasM),
                    (this.hasZ = e.hasZ),
                    (this.objectIdField = e.objectIdField),
                    (this.spatialReference = e.spatialReference),
                    (this.definitionExpression = e.definitionExpression),
                    (this.cacheSpatialQueries = e.cacheSpatialQueries || !1),
                    (this.gdbVersion = e.gdbVersion),
                    (this.historicMoment = e.historicMoment),
                    this.cacheSpatialQueries &&
                      (this._geometryQueryCache = new M.default()),
                    e.fields.forEach(function(e) {
                      t.fieldsMap.set(e.name.trim(), e),
                        t.fieldsMap.set(e.name.trim().toLowerCase(), e);
                    });
                }
                return (
                  (e.prototype.destroy = function() {
                    this.clear(), this.fieldsMap.clear();
                  }),
                  (e.prototype.clear = function() {
                    this._itemsMap.forEach(function(e) {
                      _.default.release(e);
                    }),
                      this._itemsMap.clear(),
                      this._index.clear(),
                      this._clearCache();
                  }),
                  Object.defineProperty(e.prototype, "size", {
                    get: function() {
                      return this._itemsMap.size;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.load = function(e) {
                    var t = y.getInfo(this.spatialReference),
                      r = this._itemsMap,
                      i = this.objectIdField;
                    this._clearCache();
                    for (var n = 0, s = e; n < s.length; n++) {
                      var o = s[n];
                      if (o.geometry.coords.length) {
                        var u = o.attributes[i];
                        if (null != u) {
                          var l = void 0;
                          r.has(u)
                            ? ((l = r.get(u)), this._index.remove(l), l.set(o))
                            : ((l = _.default.acquire(o, this)), r.set(u, l)),
                            t &&
                            (l.bounds[0] < t.valid[0] ||
                              l.bounds[2] > t.valid[1])
                              ? P.error(
                                  new a(
                                    "load:invalid-bounds",
                                    "The feature has bounds outside of the valid coordinate range",
                                    { valid: t.valid, feature: o }
                                  )
                                )
                              : T.push(l);
                        } else
                          P.error(
                            new a(
                              "featurestore:invalid-feature",
                              "feature id is invalid, " + i + " is missing",
                              { feature: o }
                            )
                          );
                      }
                    }
                    T.length && this._index.load(T), (T.length = 0);
                  }),
                  (e.prototype.delete = function(e) {
                    for (
                      var t = this._index, r = this._itemsMap, i = 0, n = e;
                      i < n.length;
                      i++
                    ) {
                      var s = n[i],
                        o = this._itemsMap.get(s);
                      o && (t.remove(o), r.delete(s), _.default.release(o));
                    }
                    this._clearCache();
                  }),
                  (e.prototype.searchBounds = function(e) {
                    return I(this._index, e);
                  }),
                  (e.prototype.executeQuery = function(e) {
                    var t = this;
                    void 0 === e && (e = new S());
                    var r = e.clone();
                    return this._normalizeQuery(r)
                      .then(function(e) {
                        return t._checkQuerySupport(e);
                      })
                      .then(function(e) {
                        return t._executeGeometryQuery(e);
                      })
                      .then(function(e) {
                        return e.executeObjectIdsQuery(r);
                      })
                      .then(function(e) {
                        return e.executeAttributesQuery(r);
                      })
                      .catch(function(e) {
                        if (e === Q) return new x.default([], t);
                        throw e;
                      })
                      .then(function(e) {
                        return e.createQueryResponse(r);
                      });
                  }),
                  (e.prototype.executeQueryForCount = function(e) {
                    var t = this;
                    void 0 === e && (e = new S());
                    var r = e.clone();
                    return this._normalizeQuery(r)
                      .then(function(e) {
                        return t._checkQuerySupport(e);
                      })
                      .then(function(e) {
                        return t._executeGeometryQuery(e);
                      })
                      .then(function(e) {
                        return e.executeObjectIdsQuery(r);
                      })
                      .then(function(e) {
                        return e.executeAttributesQuery(r);
                      })
                      .then(function(e) {
                        return e.size;
                      })
                      .catch(function(e) {
                        if (e === Q) return 0;
                        throw e;
                      });
                  }),
                  (e.prototype.executeQueryForExtent = function(e) {
                    var t = this;
                    void 0 === e && (e = new S());
                    var r = e.clone();
                    return this._normalizeQuery(r)
                      .then(function(e) {
                        return t._checkQuerySupport(e);
                      })
                      .then(function(e) {
                        return t._executeGeometryQuery(e);
                      })
                      .then(function(e) {
                        return e.executeObjectIdsQuery(r);
                      })
                      .then(function(e) {
                        return e.executeAttributesQuery(r);
                      })
                      .then(function(e) {
                        var i = e.size;
                        if (!i) return { count: i, extent: null };
                        for (
                          var n = {
                              xmin: Number.POSITIVE_INFINITY,
                              ymin: Number.POSITIVE_INFINITY,
                              xmax: Number.NEGATIVE_INFINITY,
                              ymax: Number.NEGATIVE_INFINITY,
                              spatialReference: F(t.spatialReference)
                            },
                            s = 0,
                            o = e.items;
                          s < o.length;
                          s++
                        ) {
                          var a = o[s].bounds;
                          a &&
                            ((n.xmin = Math.min(a[0], n.xmin)),
                            (n.ymin = Math.min(a[1], n.ymin)),
                            (n.xmax = Math.max(a[2], n.xmax)),
                            (n.ymax = Math.max(a[3], n.ymax)));
                        }
                        var u = b.project(
                          n,
                          e.spatialReference,
                          r.outSpatialReference
                        );
                        if (
                          ((u.spatialReference = F(
                            (r.outSpatialReference &&
                              r.outSpatialReference.toJSON()) ||
                              t.spatialReference
                          )),
                          u.xmax - u.xmin == 0)
                        ) {
                          var l = d.getMetersPerUnitForSR(u.spatialReference);
                          (u.xmin -= l), (u.xmax += l);
                        }
                        if (u.ymax - u.ymin == 0) {
                          l = d.getMetersPerUnitForSR(u.spatialReference);
                          (u.ymin -= l), (u.ymax += l);
                        }
                        return { count: i, extent: u };
                      })
                      .catch(function(e) {
                        if (e === Q) return { count: 0, extent: null };
                        throw e;
                      });
                  }),
                  (e.prototype.executeQueryForIds = function(e) {
                    var t = this;
                    void 0 === e && (e = new S());
                    var r = e.clone();
                    return this._normalizeQuery(r)
                      .then(function(e) {
                        return t._checkQuerySupport(e);
                      })
                      .then(function(e) {
                        return t._executeGeometryQuery(e);
                      })
                      .then(function(e) {
                        return e.executeObjectIdsQuery(r);
                      })
                      .then(function(e) {
                        return e.executeAttributesQuery(r);
                      })
                      .then(function(e) {
                        for (var t = e.items, r = [], i = 0; i < t.length; i++)
                          r[i] = t[i].oid;
                        return r;
                      })
                      .catch(function(e) {
                        if (e === Q) return [];
                        throw e;
                      });
                  }),
                  (e.prototype.executeTileQuery = function(e, t) {
                    var r,
                      i = t.returnGeometry,
                      s = t.returnCentroid,
                      o = t.pixelBuffer,
                      a = new n.default(),
                      u = [],
                      l = o * e.resolution,
                      h = f.pad(e.bounds, l, f.create());
                    if (
                      ((r = I(this._index, h)).sort(function(e, t) {
                        return e.oid - t.oid;
                      }),
                      N(u, a, r, i, s, {
                        originPosition: "upperLeft",
                        scale: [e.resolution, e.resolution],
                        translate: [e.bounds[0], e.bounds[3]]
                      }),
                      "esriGeometryPoint" === this.geometryType || s)
                    ) {
                      var c = y.getInfo(this.spatialReference);
                      if (c) {
                        var p = c.valid,
                          d = p[0],
                          m = p[1];
                        if (h[0] < d) {
                          var g = f.fromValues(m - l, h[1], m, h[3]);
                          (r = I(this._index, g)).sort(function(e, t) {
                            return e.oid - t.oid;
                          }),
                            N(u, a, r, i, s, {
                              originPosition: "upperLeft",
                              scale: [e.resolution, e.resolution],
                              translate: [m, e.bounds[3]]
                            });
                        }
                        if (h[2] > m) {
                          var v = f.fromValues(d, h[1], d + l, h[3]);
                          (r = I(this._index, v)).sort(function(e, t) {
                            return e.oid - t.oid;
                          }),
                            N(u, a, r, i, s, {
                              originPosition: "upperLeft",
                              scale: [e.resolution, e.resolution],
                              translate: [d - m + e.bounds[0], e.bounds[3]]
                            });
                        }
                      }
                    }
                    return { features: u, objectIds: a };
                  }),
                  (e.prototype._clearCache = function() {
                    this._geometryQueryCache &&
                      this._geometryQueryCache.clear(),
                      (this._allItems = null);
                  }),
                  (e.prototype._getAll = function() {
                    return (
                      this._allItems ||
                        (this._allItems = new x.default(
                          r.from(this._itemsMap, function(e) {
                            return e[0], e[1];
                          }),
                          this
                        )),
                      this._allItems
                    );
                  }),
                  (e.prototype._normalizeQuery = function(e) {
                    var t = this,
                      r = this.definitionExpression,
                      i = e.where,
                      n = e.geometry,
                      s = e.outFields,
                      o = e.orderByFields,
                      a = e.groupByFieldsForStatistics,
                      u = e.outStatistics;
                    if (
                      ((e.where = i = i && i.trim()),
                      (!i || /^1 *= *1$/.test(i) || (r && r === i)) &&
                        (e.where = null),
                      s)
                    )
                      for (var h = 0; h < s.length; h++) s[h] = s[h].trim();
                    if (o) for (h = 0; h < o.length; h++) o[h] = o[h].trim();
                    if (a) for (h = 0; h < a.length; h++) a[h] = a[h].trim();
                    if (u)
                      for (h = 0; h < u.length; h++)
                        u[h].onStatisticField = u[h].onStatisticField.trim();
                    return n
                      ? (e.outSpatialReference ||
                          (e.outSpatialReference = n.spatialReference),
                        this._getInputGeometry(e)
                          .then(function(t) {
                            return (e.geometry = t);
                          })
                          .then(function(r) {
                            return b.checkProjectionSupport(
                              e,
                              r.spatialReference,
                              t.spatialReference
                            );
                          })
                          .then(function() {
                            return p.normalizeCentralMeridian(e.geometry);
                          })
                          .then(function(e) {
                            return b.project(
                              e[0].toJSON(),
                              e[0].spatialReference,
                              t.spatialReference
                            );
                          })
                          .then(function(r) {
                            if (!r) throw Q;
                            return (
                              (r.spatialReference = t.spatialReference),
                              e.read({ geometry: r })
                            );
                          }))
                      : l.resolve(e);
                  }),
                  (e.prototype._executeGeometryQuery = function(e) {
                    var t = this,
                      r = e.geometry,
                      i = e.outSpatialReference,
                      n = e.spatialRelationship,
                      s = i && !m.equals(this.spatialReference, i),
                      o = s
                        ? JSON.stringify({
                            geometry: r,
                            spatialRelationship: n,
                            outSpatialReference: i
                          })
                        : JSON.stringify({
                            geometry: r,
                            spatialRelationship: n
                          });
                    if (
                      this.cacheSpatialQueries &&
                      this._geometryQueryCache.size &&
                      this._geometryQueryCache.has(o)
                    )
                      return l.resolve(this._geometryQueryCache.get(o));
                    var a = null;
                    if (r) {
                      var u = this._searchSpatialIndex(this._getQueryBBoxes(r));
                      if (!u.length) {
                        var h = new x.default([], this);
                        return (
                          this.cacheSpatialQueries &&
                            this._geometryQueryCache.set(o, h),
                          l.resolve(h)
                        );
                      }
                      a =
                        "envelope-intersects" === e.spatialRelationship ||
                        ("esriGeometryPoint" === this.geometryType &&
                          w.canQueryWithRBush(r))
                          ? l.resolve(new x.default(u, this))
                          : w
                              .getSpatialQueryOperator(n, r, this.geometryType)
                              .then(function(e) {
                                if (e) {
                                  var r = u.filter(function(t) {
                                    return e(t.getGeometry());
                                  });
                                  return new x.default(r, t);
                                }
                              });
                    } else a = l.resolve(this._getAll());
                    return a.then(function(r) {
                      return s && (e.returnGeometry || e.returnCentroid)
                        ? r.project(i).then(function(e) {
                            return (
                              t.cacheSpatialQueries &&
                                t._geometryQueryCache.set(o, e),
                              e
                            );
                          })
                        : (t.cacheSpatialQueries &&
                            t._geometryQueryCache.set(o, r),
                          r);
                    });
                  }),
                  (e.prototype._getInputGeometry = function(e) {
                    var t = e.geometry,
                      r = e.distance,
                      i = e.units;
                    if (null == r) return l.resolve(t);
                    var n = t.spatialReference,
                      s = i || d.getUnitString(n);
                    return (n && (n.isGeographic || n.isWebMercator)
                      ? l.resolve(t)
                      : b
                          .checkProjectionSupport(
                            e,
                            n,
                            o.SpatialReference.WGS84
                          )
                          .then(function() {
                            return c.project(t, o.SpatialReference.WGS84);
                          })
                    ).then(function(e) {
                      return w.getGeodesicBufferOperator().then(function(t) {
                        return t(e, r, s);
                      });
                    });
                  }),
                  (e.prototype._getQueryBBoxes = function(e) {
                    if ("point" === e.type)
                      return [f.fromValues(e.x, e.y, e.x, e.y)];
                    var t = w.canQueryWithRBush(e) ? e : e.extent;
                    switch (t.type) {
                      case "extent":
                        return [f.fromExtent(t)];
                      case "polygon":
                        return t.rings.map(function(e) {
                          return f.fromValues(
                            e[0][0],
                            e[0][1],
                            e[2][0],
                            e[2][1]
                          );
                        });
                    }
                  }),
                  (e.prototype._searchSpatialIndex = function(e) {
                    for (var t = [], r = 0, i = e; r < i.length; r++)
                      for (
                        var n = i[r], s = 0, o = I(this._index, n);
                        s < o.length;
                        s++
                      ) {
                        var a = o[s];
                        z.has(a) || (t.push(a), z.add(a));
                      }
                    return z.clear(), t;
                  }),
                  (e.prototype._checkQuerySupport = function(e) {
                    return e.distance < 0 ||
                      null != e.geometryPrecision ||
                      null != e.maxAllowableOffset ||
                      e.multipatchOption ||
                      e.pixelSize ||
                      e.relationParameter ||
                      e.text ||
                      e.timeExtent
                      ? l.reject(
                          new a(
                            "feature-store:unsupported-query",
                            "Unsupported query options",
                            { query: e }
                          )
                        )
                      : l
                          .all([
                            this._checkAttributesQuerySupport(e),
                            this._checkStatisticsQuerySupport(e),
                            w.checkSpatialQuerySupport(
                              e,
                              this.geometryType,
                              this.spatialReference
                            ),
                            b.checkProjectionSupport(
                              e,
                              this.spatialReference,
                              e.outSpatialReference
                            )
                          ])
                          .then(function() {
                            return e;
                          });
                  }),
                  (e.prototype._checkAttributesQuerySupport = function(e) {
                    var t = e.outFields,
                      r = e.orderByFields,
                      i = e.returnDistinctValues;
                    if (r && r.length > 0) {
                      var n = r.map(function(e) {
                        return e.indexOf(" ASC") > -1
                          ? e.split(" ASC")[0]
                          : e.indexOf(" DESC") > -1
                            ? e.split(" DESC")[0]
                            : e;
                      });
                      g.validateFields(
                        this.fieldsMap,
                        n,
                        "orderByFields contains missing fields",
                        !1
                      );
                    }
                    if (t && t.length > 0)
                      g.validateFields(
                        this.fieldsMap,
                        t,
                        "outFields contains missing fields"
                      );
                    else if (i)
                      throw new a(
                        "feature-store:unsupported-query",
                        "outFields should be specified for returnDistinctValues",
                        { query: e }
                      );
                    g.validateWhere(this.fieldsMap, e.where);
                  }),
                  (e.prototype._checkStatisticsQuerySupport = function(e) {
                    var t = e.outStatistics,
                      r = e.groupByFieldsForStatistics;
                    if (t && t.length) {
                      var i = t.map(function(e) {
                        return e.onStatisticField.trim();
                      });
                      g.validateFields(
                        this.fieldsMap,
                        i,
                        "onStatisticFields contains missing fields"
                      );
                      for (var n = 0, s = i; n < s.length; n++) {
                        var o = s[n];
                        if (
                          (!r || !r.length) &&
                          g.hasInvalidFieldType(o, this.fieldsMap)
                        )
                          return l.reject(
                            new a(
                              "feature-store:unsupported-query",
                              "outStatistics contains non-numeric fields",
                              { fieldName: o, query: e }
                            )
                          );
                      }
                    }
                  }),
                  e
                );
              })();
            t.default = k;
          }.apply(null, i)) || (e.exports = n);
    },
    2131: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2026), r(35), r(780)]),
        void 0 ===
          (n = function(e, t, r, i, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = {
                esriGeometryPoint: n.convertToPoint,
                esriGeometryPolyline: n.convertToPolyline,
                esriGeometryPolygon: n.convertToPolygon,
                esriGeometryMultipoint: n.convertToMultipoint
              },
              o = new n.OptimizedGeometry(),
              a = (function() {
                function e() {
                  (this.service = null),
                    (this.oid = null),
                    (this.bounds = i.create()),
                    (this.feature = null);
                }
                return (
                  (e.acquire = function(t, r) {
                    var i;
                    return (
                      void 0 === t && (t = null),
                      void 0 === r && (r = null),
                      0 === e._pool.length
                        ? (i = new e())
                        : ((i = e._pool.pop()), this._set.delete(i)),
                      i.acquire(t, r),
                      i
                    );
                  }),
                  (e.release = function(e) {
                    e &&
                      !this._set.has(e) &&
                      (e.release(), this._pool.push(e), this._set.add(e));
                  }),
                  (e.prototype.acquire = function(e, t) {
                    void 0 === e && (e = null),
                      void 0 === t && (t = null),
                      (this.service = t),
                      e && t && this.set(e);
                  }),
                  (e.prototype.release = function() {
                    this.oid = this.feature = this.service = null;
                  }),
                  (e.prototype.set = function(e) {
                    (this.feature = e),
                      (this.oid = e.attributes[this.service.objectIdField]),
                      n.getBoundsOptimizedGeometry(
                        this.bounds,
                        e.geometry,
                        this.service.hasZ,
                        this.service.hasM
                      );
                  }),
                  (e.prototype.getCentroid = function() {
                    var e = this.service,
                      t = e.geometryType,
                      r = e.hasZ,
                      i = e.hasM;
                    return "esriGeometryPolygon" !== t
                      ? null
                      : (this.feature.centroid ||
                          (this.feature.centroid = n.getCentroidOptimizedGeometry(
                            new n.OptimizedGeometry(),
                            this.feature.geometry,
                            r,
                            i
                          )),
                        n.convertToPoint(this.feature.centroid, r, i));
                  }),
                  (e.prototype.getCentroidQuantized = function(e) {
                    var t = this.service,
                      r = t.hasZ,
                      i = t.hasM;
                    return (
                      this.feature.centroid ||
                        (this.feature.centroid = n.getCentroidOptimizedGeometry(
                          new n.OptimizedGeometry(),
                          this.feature.geometry,
                          r,
                          i
                        )),
                      n.quantizeOptimizedGeometry(
                        o,
                        this.feature.centroid,
                        r,
                        i,
                        "esriGeometryPoint",
                        e
                      ),
                      n.convertToPoint(o, r, i)
                    );
                  }),
                  (e.prototype.getGeometry = function() {
                    var e = this.service,
                      t = e.geometryType,
                      r = e.hasZ,
                      i = e.hasM;
                    return s[t](this.feature.geometry, r, i);
                  }),
                  (e.prototype.getGeometryQuantized = function(e) {
                    var t = this.service,
                      r = t.geometryType,
                      i = t.hasZ,
                      a = t.hasM;
                    return (
                      n.quantizeOptimizedGeometry(
                        o,
                        this.feature.geometry,
                        i,
                        a,
                        r,
                        e
                      ),
                      s[r](o, i, a)
                    );
                  }),
                  (e.prototype.getAttributes = function() {
                    return this.feature.attributes;
                  }),
                  (e._pool = []),
                  (e._set = new r.default()),
                  e
                );
              })();
            t.default = a;
          }.apply(null, i)) || (e.exports = n);
    },
    2132: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(10), r(9), r(783), r(98), r(37)]),
        void 0 ===
          (n = function(e, t, r, i, n, s, o) {
            function a(e, t) {
              var r, i, n;
              if (!t) return null;
              if ("x" in t) {
                var s = { x: 0, y: 0 };
                return (
                  (r = e(t.x, t.y, c, 0)),
                  (s.x = r[0]),
                  (s.y = r[1]),
                  null != t.z && (s.z = t.z),
                  null != t.m && (s.m = t.m),
                  s
                );
              }
              if ("xmin" in t) {
                s = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
                return (
                  (i = e(t.xmin, t.ymin, c, 0)),
                  (s.xmin = i[0]),
                  (s.ymin = i[1]),
                  (n = e(t.xmax, t.ymax, c, 0)),
                  (s.xmax = n[0]),
                  (s.ymax = n[1]),
                  t.hasZ &&
                    ((s.zmin = t.zmin), (s.zmax = t.zmax), (s.hasZ = !0)),
                  t.hasM &&
                    ((s.mmin = t.mmin), (s.mmax = t.mmax), (s.hasM = !0)),
                  s
                );
              }
              return "rings" in t
                ? { rings: u(t.rings, e), hasM: t.hasM, hasZ: t.hasZ }
                : "paths" in t
                  ? { paths: u(t.paths, e), hasM: t.hasM, hasZ: t.hasZ }
                  : "points" in t
                    ? { points: l(t.points, e), hasM: t.hasM, hasZ: t.hasZ }
                    : void 0;
            }
            function u(e, t) {
              for (var r = [], i = 0, n = e; i < n.length; i++) {
                var s = n[i];
                r.push(l(s, t));
              }
              return r;
            }
            function l(e, t) {
              for (var r = [], i = 0, n = e; i < n.length; i++) {
                var s = n[i],
                  o = t(s[0], s[1], [0, 0], 0);
                r.push(o),
                  s.length > 2 && o.push(s[2]),
                  s.length > 3 && o.push(s[3]);
              }
              return r;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var h = "feature-store:unsupported-query",
              c = [0, 0];
            t.checkProjectionSupport = function(e, t, a) {
              return !t || !a || s.equals(t, a) || o.canProject(t, a)
                ? i.resolve()
                : n.isSupported()
                  ? n.load()
                  : i.reject(
                      new r(h, "projection not supported", { query: e })
                    );
            };
            var f = a.bind(null, o.lngLatToXY),
              p = a.bind(null, o.xyToLngLat);
            t.project = function(e, t, r) {
              return t && r && !s.equals(t, r)
                ? o.canProject(t, r)
                  ? s.isWebMercator(r)
                    ? f(e)
                    : p(e)
                  : n.projectMany([e], t, r, null, !0)[0]
                : e;
            };
            var d = new ((function() {
              function e() {
                (this._jobs = []),
                  (this._timer = null),
                  (this._process = this._process.bind(this));
              }
              return (
                (e.prototype.push = function(e, t, r) {
                  var n = this;
                  (e && e.length && t && r && !s.equals(t, r)) || i.resolve(e);
                  var o = {
                    geometries: e,
                    inSpatialReference: t,
                    outSpatialReference: r,
                    resolve: null
                  };
                  return (
                    this._jobs.push(o),
                    i.create(
                      function(e) {
                        (o.resolve = e),
                          null === n._timer &&
                            (n._timer = setTimeout(n._process, 10));
                      },
                      function() {
                        var e = n._jobs.indexOf(o);
                        e > -1 && n._jobs.splice(e, 1);
                      }
                    )
                  );
                }),
                (e.prototype._process = function() {
                  this._timer = null;
                  var e = this._jobs.shift();
                  if (e) {
                    var t = e.geometries,
                      r = e.inSpatialReference,
                      i = e.outSpatialReference;
                    (0, e.resolve)(
                      o.canProject(r, i)
                        ? s.isWebMercator(i)
                          ? t.map(f)
                          : t.map(p)
                        : n.projectMany(t, r, i, null, !0)
                    ),
                      this._jobs.length > 0 &&
                        (this._timer = setTimeout(this._process, 10));
                  }
                }),
                e
              );
            })())();
            t.projectMany = function(e, t, r) {
              return d.push(e, t, r);
            };
          }.apply(null, i)) || (e.exports = n);
    },
    2168: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(321),
        n = r(223),
        s = r(785),
        o = r(2169),
        a = r(266),
        u = r(441);
      if (a.default("es6-array") && a.default("es6-array-fill"))
        (t.from = n.default.Array.from),
          (t.of = n.default.Array.of),
          (t.copyWithin = u.wrapNative(n.default.Array.prototype.copyWithin)),
          (t.fill = u.wrapNative(n.default.Array.prototype.fill)),
          (t.find = u.wrapNative(n.default.Array.prototype.find)),
          (t.findIndex = u.wrapNative(n.default.Array.prototype.findIndex));
      else {
        var l = function(e) {
            return isNaN(e)
              ? 0
              : ((e = Number(e)),
                isFinite(e) && (e = Math.floor(e)),
                Math.min(Math.max(e, 0), o.MAX_SAFE_INTEGER));
          },
          h = function(e) {
            return (
              (e = Number(e)),
              isNaN(e)
                ? 0
                : 0 !== e && isFinite(e)
                  ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e))
                  : e
            );
          },
          c = function(e, t) {
            return e < 0 ? Math.max(t + e, 0) : Math.min(e, t);
          };
        (t.from = function(e, t, r) {
          if (null == e)
            throw new TypeError("from: requires an array-like object");
          t && r && (t = t.bind(r));
          var n,
            o,
            a = l(e.length),
            u = "function" == typeof this ? Object(new this(a)) : new Array(a);
          if (!s.isArrayLike(e) && !s.isIterable(e)) return u;
          if (s.isArrayLike(e)) {
            if (0 === a) return [];
            for (var h = 0; h < e.length; h++) u[h] = t ? t(e[h], h) : e[h];
          } else {
            h = 0;
            try {
              for (var c = i.__values(e), f = c.next(); !f.done; f = c.next()) {
                var p = f.value;
                (u[h] = t ? t(p, h) : p), h++;
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                f && !f.done && (o = c.return) && o.call(c);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          return void 0 !== e.length && (u.length = a), u;
        }),
          (t.of = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return Array.prototype.slice.call(e);
          }),
          (t.copyWithin = function(e, t, r, i) {
            if (null == e)
              throw new TypeError(
                "copyWithin: target must be an array-like object"
              );
            var n = l(e.length);
            (t = c(h(t), n)),
              (r = c(h(r), n)),
              (i = c(void 0 === i ? n : h(i), n));
            var s = Math.min(i - r, n - t),
              o = 1;
            for (
              t > r && t < r + s && ((o = -1), (r += s - 1), (t += s - 1));
              s > 0;

            )
              r in e ? (e[t] = e[r]) : delete e[t], (t += o), (r += o), s--;
            return e;
          }),
          (t.fill = function(e, t, r, i) {
            var n = l(e.length),
              s = c(h(r), n);
            for (i = c(void 0 === i ? n : h(i), n); s < i; ) e[s++] = t;
            return e;
          }),
          (t.find = function(e, r, i) {
            var n = t.findIndex(e, r, i);
            return -1 !== n ? e[n] : void 0;
          }),
          (t.findIndex = function(e, t, r) {
            var i = l(e.length);
            if (!t)
              throw new TypeError("find: second argument must be a function");
            r && (t = t.bind(r));
            for (var n = 0; n < i; n++) if (t(e[n], n, e)) return n;
            return -1;
          });
      }
      if (a.default("es7-array"))
        t.includes = u.wrapNative(n.default.Array.prototype.includes);
      else {
        t.includes = function(e, t, r) {
          void 0 === r && (r = 0);
          for (
            var i = (function(e) {
                return (
                  (e = Number(e)),
                  isNaN(e)
                    ? 0
                    : (isFinite(e) && (e = Math.floor(e)),
                      Math.min(Math.max(e, 0), o.MAX_SAFE_INTEGER))
                );
              })(e.length),
              n = r;
            n < i;
            ++n
          ) {
            var s = e[n];
            if (t === s || (t != t && s != s)) return !0;
          }
          return !1;
        };
      }
    },
    2169: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(223);
      function n(e) {
        return "number" == typeof e && i.default.isFinite(e);
      }
      function s(e) {
        return n(e) && Math.floor(e) === e;
      }
      (t.EPSILON = 1),
        (t.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1),
        (t.MIN_SAFE_INTEGER = -t.MAX_SAFE_INTEGER),
        (t.isNaN = function(e) {
          return "number" == typeof e && i.default.isNaN(e);
        }),
        (t.isFinite = n),
        (t.isInteger = s),
        (t.isSafeInteger = function(e) {
          return s(e) && Math.abs(e) <= t.MAX_SAFE_INTEGER;
        });
    },
    2173: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(2026),
        r(9),
        r(2174),
        r(98),
        r(780),
        r(2175),
        r(2090),
        r(2131),
        r(2132)
      ]),
        void 0 ===
          (n = function(e, t, r, i, n, s, o, a, u, l, h) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var c = (function() {
              function e(e, t) {
                (this.items = e),
                  (this.definitionExpression = t.definitionExpression),
                  (this.geometryType = t.geometryType),
                  (this.hasM = t.hasM),
                  (this.hasZ = t.hasZ),
                  (this.objectIdField = t.objectIdField),
                  (this.spatialReference = t.spatialReference),
                  (this.fieldsMap = t.fieldsMap);
              }
              return (
                Object.defineProperty(e.prototype, "size", {
                  get: function() {
                    return this.items.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.createQueryResponse = function(e) {
                  return e.outStatistics
                    ? this._createStatisticsQueryResponse(e)
                    : this._createFeatureQueryResponse(e);
                }),
                (e.prototype.executeAttributesQuery = function(e) {
                  var t = u.getWhereClause(e.where);
                  if (!t) return i.resolve(this);
                  if (t.isStandardized()) {
                    for (
                      var r = 0, n = [], s = 0, o = this.items;
                      s < o.length;
                      s++
                    ) {
                      var a = o[s];
                      t.testFeature(a.getAttributes()) && (n[r++] = a);
                    }
                    var l = this._createNew(n);
                    return (l.definitionExpression = e.where), i.resolve(l);
                  }
                  return i.reject(
                    new TypeError("Where clause is not standardized")
                  );
                }),
                (e.prototype.executeObjectIdsQuery = function(e) {
                  if (!e.objectIds || !e.objectIds.length)
                    return i.resolve(this);
                  var t = new r.default(e.objectIds);
                  return i.resolve(
                    this._createNew(
                      this.items.filter(function(e) {
                        return t.has(e.oid);
                      })
                    )
                  );
                }),
                (e.prototype.project = function(t) {
                  var r = this;
                  return !t || s.equals(this.spatialReference, t)
                    ? i.resolve(this)
                    : h
                        .projectMany(
                          this.items.map(function(e) {
                            return e.getGeometry();
                          }),
                          this.spatialReference,
                          t
                        )
                        .then(function(i) {
                          for (var n = [], s = 0; s < r.items.length; s++)
                            n[s] = {
                              attributes: r.items[s].getAttributes(),
                              geometry: i[s]
                            };
                          for (
                            var a = [],
                              u = 0,
                              h = o.convertFromFeatures(
                                n,
                                r.geometryType,
                                r.hasZ,
                                r.hasM
                              );
                            u < h.length;
                            u++
                          ) {
                            var c = h[u];
                            a.push(l.default.acquire(c, r));
                          }
                          return new e(a, {
                            definitionExpression: r.definitionExpression,
                            geometryType: r.geometryType,
                            hasM: r.hasM,
                            hasZ: r.hasZ,
                            objectIdField: r.objectIdField,
                            spatialReference: t,
                            fieldsMap: r.fieldsMap
                          });
                        });
                }),
                (e.prototype._createFeatureQueryResponse = function(e) {
                  var t = this,
                    r = this.items,
                    i = this,
                    s = i.geometryType,
                    o = i.hasM,
                    a = i.hasZ,
                    u = i.objectIdField,
                    l = i.spatialReference,
                    h = e.outFields,
                    c = e.outSpatialReference,
                    f = e.quantizationParameters,
                    p = !1;
                  if (null != e.num && null != e.start) {
                    var d = e.start + e.num;
                    (p = r.length > d),
                      (r = r.slice(e.start, Math.min(r.length, d)));
                  }
                  return {
                    exceededTransferLimit: p,
                    features: this._createFeatures(e, r),
                    fields:
                      h &&
                      h.map(function(e) {
                        return t.fieldsMap.get(e);
                      }),
                    geometryType: s,
                    hasM: o,
                    hasZ: a,
                    objectIdFieldName: u,
                    spatialReference: (function(e) {
                      return e
                        ? JSON.parse(
                            JSON.stringify(e, ["latestWkid", "wkid", "wkt"])
                          )
                        : e;
                    })(c ? c.toJSON() : l),
                    transform: f && n.toTransform(f)
                  };
                }),
                (e.prototype._createFeatures = function(e, t) {
                  var r = new a.default(e, this.fieldsMap),
                    i = e.quantizationParameters,
                    s = e.returnGeometry,
                    o = e.returnCentroid,
                    u = e.orderByFields,
                    l = [],
                    h = 0;
                  if (t.length && u && u.length) {
                    var c = u[0].split(" "),
                      f = c[0],
                      p = "DESC" === c[1];
                    t.sort(function(e, t) {
                      var i = r.getFieldAttribute(e, f),
                        n = r.getFieldAttribute(t, f);
                      if ("number" == typeof i && "number" == typeof n)
                        return p ? n - i : i - n;
                      if ("string" == typeof i && "string" == typeof n) {
                        var s = i.toUpperCase(),
                          o = n.toUpperCase();
                        return (p
                        ? s > o
                        : s < o)
                          ? -1
                          : (p
                            ? s < o
                            : s > o)
                            ? 1
                            : 0;
                      }
                    });
                  }
                  if (s || o)
                    if (i) {
                      var d = n.toTransform(i);
                      if (s && !o)
                        for (var y = 0, m = t; y < m.length; y++) {
                          var g = m[y];
                          l[h++] = {
                            attributes: r.getAttributes(g),
                            geometry: g.getGeometryQuantized(d)
                          };
                        }
                      else if (!s && o)
                        for (var v = 0, _ = t; v < _.length; v++) {
                          g = _[v];
                          l[h++] = {
                            attributes: r.getAttributes(g),
                            centroid: g.getCentroidQuantized(d)
                          };
                        }
                      else
                        for (var x = 0, b = t; x < b.length; x++) {
                          g = b[x];
                          l[h++] = {
                            attributes: r.getAttributes(g),
                            centroid: g.getCentroidQuantized(d),
                            geometry: g.getGeometryQuantized(d)
                          };
                        }
                    } else if (s && !o)
                      for (var M = 0, w = t; M < w.length; M++) {
                        g = w[M];
                        l[h++] = {
                          attributes: r.getAttributes(g),
                          geometry: g.getGeometry()
                        };
                      }
                    else if (!s && o)
                      for (var S = 0, I = t; S < I.length; S++) {
                        g = I[S];
                        l[h++] = {
                          attributes: r.getAttributes(g),
                          centroid: g.getCentroid()
                        };
                      }
                    else
                      for (var F = 0, N = t; F < N.length; F++) {
                        g = N[F];
                        l[h++] = {
                          attributes: r.getAttributes(g),
                          centroid: g.getCentroid(),
                          geometry: g.getGeometry()
                        };
                      }
                  else
                    for (var P = 0, T = t; P < T.length; P++) {
                      g = T[P];
                      var R = r.getAttributes(g);
                      R && (l[h++] = { attributes: R });
                    }
                  return l;
                }),
                (e.prototype._createNew = function(t) {
                  return new e(t, this);
                }),
                (e.prototype._createStatisticsQueryResponse = function(e) {
                  var t = new a.default(e, this.fieldsMap),
                    r = e.outStatistics,
                    i = [],
                    n = [];
                  if (
                    e.groupByFieldsForStatistics &&
                    e.groupByFieldsForStatistics.length
                  )
                    for (var s = {}, o = 0, u = r; o < u.length; o++) {
                      var l = u[o],
                        h = l.onStatisticField,
                        c = l.outStatisticFieldName;
                      if ("count" === (b = l.statisticType)) {
                        s[h] || (s[h] = this._calculateUniqueValues(t, h));
                        var f = s[h];
                        for (var p in f) {
                          var d = f[p],
                            y = { attributes: {} };
                          (y.attributes[c] = d.count),
                            (y.attributes[h] = d.data),
                            i.push(y);
                        }
                        n.push({
                          name: c,
                          alias: c,
                          type: "esriFieldTypeString"
                        });
                      }
                    }
                  else {
                    for (
                      var m = {}, g = { attributes: {} }, v = 0, _ = r;
                      v < _.length;
                      v++
                    ) {
                      var x = _[v],
                        b = ((h = x.onStatisticField),
                        (c = x.outStatisticFieldName),
                        x.statisticType);
                      m[h] || (m[h] = this._calculateStatistics(t, h));
                      var M = m[h],
                        w = "var" === b ? "variance" : b;
                      (g.attributes[c] = M[w]),
                        n.push({
                          name: c,
                          alias: c,
                          type: "esriFieldTypeDouble"
                        });
                    }
                    i.push(g);
                  }
                  return { fields: n, features: i };
                }),
                (e.prototype._calculateStatistics = function(e, t) {
                  for (
                    var r = this.items,
                      i = r.length,
                      n = Number.POSITIVE_INFINITY,
                      s = Number.NEGATIVE_INFINITY,
                      o = null,
                      a = null,
                      u = null,
                      l = null,
                      h = [],
                      c = 0;
                    c < i;
                    c++
                  ) {
                    (o += y = h[c] = e.getFieldAttribute(r[c], t)),
                      (n = Math.min(n, y)),
                      (s = Math.max(s, y));
                  }
                  if (i) {
                    a = o / i;
                    for (var f = 0, p = 0, d = h; p < d.length; p++) {
                      var y = d[p];
                      f += Math.pow(y - a, 2);
                    }
                    (l = i > 1 ? f / (i - 1) : 0), (u = Math.sqrt(l));
                  } else (n = null), (s = null);
                  return {
                    avg: a,
                    count: i,
                    max: s,
                    min: n,
                    stddev: u,
                    sum: o,
                    variance: l
                  };
                }),
                (e.prototype._calculateUniqueValues = function(e, t) {
                  for (var r = {}, i = 0, n = this.items; i < n.length; i++) {
                    var s = n[i],
                      o = e.getFieldAttribute(s, t);
                    (null == o || ("string" == typeof o && "" === o.trim())) &&
                      (o = null),
                      null == r[o]
                        ? (r[o] = { count: 1, data: o })
                        : r[o].count++;
                  }
                  return r;
                }),
                e
              );
            })();
            t.default = c;
          }.apply(null, i)) || (e.exports = n);
    },
    2174: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            function r(e) {
              return e && "upperLeft" === e.originPosition;
            }
            function i(e, t) {
              var r = e.scale,
                i = e.translate;
              return Math.round((t - i[0]) / r[0]);
            }
            function n(e, t) {
              var r = e.scale,
                i = e.translate;
              return Math.round((i[1] - t) / r[1]);
            }
            function s(e, t, r) {
              for (var s, o, a, u, l = [], h = 0; h < r.length; h++) {
                var c = r[h];
                h > 0
                  ? ((a = i(e, c[0])),
                    (u = n(e, c[1])),
                    (a === s && u === o) ||
                      (l.push(t(c, a - s, u - o)), (s = a), (o = u)))
                  : ((s = i(e, c[0])), (o = n(e, c[1])), l.push(t(c, s, o)));
              }
              return l.length > 0 ? l : null;
            }
            function o(e, t, r, i) {
              return s(e, r ? (i ? x : _) : i ? _ : v, t);
            }
            function a(e, t, r, i) {
              for (
                var n = [], o = r ? (i ? x : _) : i ? _ : v, a = 0;
                a < t.length;
                a++
              ) {
                var u = s(e, o, t[a]);
                u && u.length >= 3 && n.push(u);
              }
              return n.length ? n : null;
            }
            function u(e, t, r, i) {
              for (
                var n = [], o = r ? (i ? x : _) : i ? _ : v, a = 0;
                a < t.length;
                a++
              ) {
                var u = s(e, o, t[a]);
                u && u.length >= 2 && n.push(u);
              }
              return n.length ? n : null;
            }
            function l(e, t) {
              var r = e.scale,
                i = e.translate;
              return t * r[0] + i[0];
            }
            function h(e, t) {
              var r = e.scale;
              return e.translate[1] - t * r[1];
            }
            function c(e, t, r) {
              var i = new Array(r.length);
              if (!r.length) return i;
              var n = e.scale,
                s = n[0],
                o = n[1],
                a = l(e, r[0][0]),
                u = h(e, r[0][1]);
              i[0] = t(r[0], a, u);
              for (var c = 1; c < r.length; c++) {
                var f = r[c];
                (a += f[0] * s), (u -= f[1] * o), (i[c] = t(f, a, u));
              }
              return i;
            }
            function f(e, t, r) {
              for (var i = new Array(r.length), n = 0; n < r.length; n++)
                i[n] = c(e, t, r[n]);
              return i;
            }
            function p(e, t, r, i) {
              return c(e, r ? (i ? x : _) : i ? _ : v, t);
            }
            function d(e, t, r, i) {
              return f(e, r ? (i ? x : _) : i ? _ : v, t);
            }
            function y(e, t, r, i) {
              return f(e, r ? (i ? x : _) : i ? _ : v, t);
            }
            function m(e, t, r) {
              for (
                var i = r[0],
                  n = i[0],
                  s = i[1],
                  o = Math.min(n, t[0]),
                  a = Math.min(s, t[1]),
                  u = Math.max(n, t[2]),
                  l = Math.max(s, t[3]),
                  h = 1;
                h < r.length;
                h++
              ) {
                var c = r[h],
                  f = c[0],
                  p = c[1];
                (n += f),
                  (s += p),
                  f < 0 && (o = Math.min(o, n)),
                  f > 0 && (u = Math.max(u, n)),
                  p < 0 ? (a = Math.min(a, s)) : p > 0 && (l = Math.max(l, s));
              }
              return (e[0] = o), (e[1] = a), (e[2] = u), (e[3] = l), e;
            }
            function g(e, t) {
              if (!t.length) return null;
              (e[0] = e[1] = Number.POSITIVE_INFINITY),
                (e[2] = e[3] = Number.NEGATIVE_INFINITY);
              for (var r = 0; r < t.length; r++) m(e, e, t[r]);
              return e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var v = function(e, t, r) {
                return [t, r];
              },
              _ = function(e, t, r) {
                return [t, r, e[2]];
              },
              x = function(e, t, r) {
                return [t, r, e[2], e[3]];
              };
            (t.toTransform = function(e) {
              return {
                originPosition: "upperLeft",
                scale: [e.tolerance, e.tolerance],
                translate: [e.extent.xmin, e.extent.ymax]
              };
            }),
              (t.equals = function(e, t) {
                return (
                  e === t ||
                  (null == e && null == t) ||
                  (null != e &&
                    null != t &&
                    (r(e)
                      ? ((i = e.translate[0]),
                        (n = e.translate[1]),
                        (s = e.scale[0]))
                      : ((i = e.extent.xmin),
                        (n = e.extent.ymax),
                        (s = e.tolerance)),
                    r(t)
                      ? ((o = t.translate[0]),
                        (a = t.translate[1]),
                        (u = t.scale[0]))
                      : ((o = t.extent.xmin),
                        (a = t.extent.ymax),
                        (u = t.tolerance)),
                    i === o && n === a && s === u))
                );
                var i, n, s, o, a, u;
              }),
              (t.quantizeX = i),
              (t.quantizeY = n),
              (t.quantizeBounds = function(e, t, r) {
                return (
                  (t[0] = i(e, r[0])),
                  (t[3] = n(e, r[1])),
                  (t[2] = i(e, r[2])),
                  (t[1] = n(e, r[3])),
                  t
                );
              }),
              (t.quantizePoints = o),
              (t.quantizeRings = a),
              (t.quantizePaths = u),
              (t.hydrateX = l),
              (t.hydrateY = h),
              (t.hydrateCoordsArray = c),
              (t.hydrateCoordsArrayArray = f),
              (t.hydrateBounds = function(e, t, r) {
                return r
                  ? ((t[0] = l(e, r[0])),
                    (t[1] = h(e, r[3])),
                    (t[2] = l(e, r[2])),
                    (t[3] = h(e, r[1])),
                    t)
                  : [l(e, t[0]), h(e, t[3]), l(e, t[2]), h(e, t[1])];
              }),
              (t.hydratePoints = p),
              (t.hydratePaths = d),
              (t.hydrateRings = y),
              (t.getQuantizedBoundsCoordsArray = m),
              (t.getQuantizedBoundsCoordsArrayArray = g),
              (t.getQuantizedBoundsPoints = function(e) {
                var t = [
                  Number.POSITIVE_INFINITY,
                  Number.POSITIVE_INFINITY,
                  Number.NEGATIVE_INFINITY,
                  Number.NEGATIVE_INFINITY
                ];
                return m(t, t, e);
              }),
              (t.getQuantizedBoundsPaths = function(e) {
                return g([0, 0, 0, 0], e);
              }),
              (t.getQuantizedBoundsRings = function(e) {
                return g([0, 0, 0, 0], e);
              }),
              (t.quantizeExtent = function(e, t, r, s, o) {
                return (
                  (t.xmin = i(e, r.xmin)),
                  (t.ymin = n(e, r.ymin)),
                  (t.xmax = i(e, r.xmax)),
                  (t.ymax = n(e, r.ymax)),
                  t !== r &&
                    (s && ((t.zmin = r.zmin), (t.zmax = r.zmax)),
                    o && ((t.mmin = r.mmin), (t.mmax = r.mmax))),
                  t
                );
              }),
              (t.quantizeMultipoint = function(e, t, r, i, n) {
                return (t.points = o(e, r.points, i, n)), t;
              }),
              (t.quantizePoint = function(e, t, r, s, o) {
                return (
                  (t.x = i(e, r.x)),
                  (t.y = n(e, r.y)),
                  t !== r && (s && (t.z = r.z), o && (t.m = r.m)),
                  t
                );
              }),
              (t.quantizePolygon = function(e, t, r, i, n) {
                var s = a(e, r.rings, i, n);
                return s ? ((t.rings = s), t) : null;
              }),
              (t.quantizePolyline = function(e, t, r, i, n) {
                var s = u(e, r.paths, i, n);
                return s ? ((t.paths = s), t) : null;
              }),
              (t.hydrateExtent = function(e, t, r, i, n) {
                return (
                  (t.xmin = l(e, r.xmin)),
                  (t.ymin = h(e, r.ymin)),
                  (t.xmax = l(e, r.xmax)),
                  (t.ymax = h(e, r.ymax)),
                  t !== r &&
                    (i && ((t.zmin = r.zmin), (t.zmax = r.zmax)),
                    n && ((t.mmin = r.mmin), (t.mmax = r.mmax))),
                  t
                );
              }),
              (t.hydrateMultipoint = function(e, t, r, i, n) {
                return (t.points = p(e, r.points, i, n)), t;
              }),
              (t.hydratePoint = function(e, t, r, i, n) {
                return (
                  (t.x = l(e, r.x)),
                  (t.y = h(e, r.y)),
                  t !== r && (i && (t.z = r.z), n && (t.m = r.m)),
                  t
                );
              }),
              (t.hydratePolygon = function(e, t, r, i, n) {
                return (t.rings = y(e, r.rings, i, n)), t;
              }),
              (t.hydratePolyline = function(e, t, r, i, n) {
                return (t.paths = d(e, r.paths, i, n)), t;
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2175: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(421), r(2090)]),
        void 0 ===
          (n = function(e, t, r, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
              function e(e, t) {
                (this._fieldDataCache = new r.default()),
                  (this._returnDistinctMap = new r.default()),
                  (this.returnDistinctValues = e.returnDistinctValues),
                  (this.fieldsMap = t);
                var n = e.outFields;
                if (n && -1 === n.indexOf("*")) {
                  this.outFields = n;
                  for (var s = 0, o = 0, a = n; o < a.length; o++) {
                    var u = a[o],
                      l = i.getExpressionFromFieldName(u),
                      h = this.fieldsMap.has(l),
                      c = h ? null : i.getWhereClause(l),
                      f = h
                        ? this.fieldsMap.get(u).name
                        : i.getAliasFromFieldName(u) || "FIELD_EXP_" + s++;
                    this._fieldDataCache.set(u, { alias: f, clause: c });
                  }
                }
              }
              return (
                (e.prototype.getAttributes = function(e) {
                  var t = e.getAttributes();
                  return (
                    (t = this._processAttributesForOutFields(t)),
                    this._processAttributesForDistinctValues(t)
                  );
                }),
                (e.prototype.getFieldAttribute = function(e, t) {
                  var r = e.getAttributes(),
                    n = this.fieldsMap.has(t),
                    s = n ? null : i.getWhereClause(t),
                    o = n ? this.fieldsMap.get(t).name : t;
                  return (
                    this._fieldDataCache.set(o, { alias: o, clause: s }),
                    n ? r[o] : s.calculateValue(r)
                  );
                }),
                (e.prototype._processAttributesForOutFields = function(e) {
                  var t = this.outFields;
                  if (!e || !t || !t.length) return e;
                  for (var r = {}, i = 0, n = t; i < n.length; i++) {
                    var s = n[i],
                      o = this._fieldDataCache.get(s),
                      a = o.alias,
                      u = o.clause;
                    r[a] = u ? u.calculateValue(e) : e[a];
                  }
                  return r;
                }),
                (e.prototype._processAttributesForDistinctValues = function(e) {
                  if (!e || !this.returnDistinctValues) return e;
                  var t = this.outFields,
                    r = [];
                  if (t)
                    for (var i = 0, n = t; i < n.length; i++) {
                      var s = n[i],
                        o = this._fieldDataCache.get(s).alias;
                      r.push(e[o]);
                    }
                  else for (var o in e) r.push(e[o]);
                  var a = (t || ["*"]).join(",") + "=" + r.join(","),
                    u = this._returnDistinctMap.get(a) || 0;
                  return this._returnDistinctMap.set(a, ++u), u > 1 ? null : e;
                }),
                e
              );
            })();
            t.default = n;
          }.apply(null, i)) || (e.exports = n);
    },
    2176: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(785), r(424)]),
        void 0 ===
          (n = function(e, t, r, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
                return function(e, t, r) {
                  (this.cache = e), (this.key = t), (this.result = r);
                };
              })(),
              s = new i(2e6, {
                disposeFunction: function(e, t) {
                  t.cache.has(t.key) && t.cache.delete(t.key);
                },
                sizeOfFunction: function(e) {
                  return e.result.size;
                }
              }),
              o = (function() {
                function e() {
                  (this._id = e.id_gen++ + "$$"), (this._keys = new Set());
                }
                return (
                  Object.defineProperty(e.prototype, "size", {
                    get: function() {
                      return this._keys.size;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype.clear = function() {
                    var e = this;
                    0 !== this._keys.size &&
                      (r.forOf(this._keys, function(t) {
                        s.delete(e._getGlobalKey(t));
                      }),
                      this._keys.clear());
                  }),
                  (e.prototype.delete = function(e) {
                    return (
                      this._keys.delete(e), s.delete(this._getGlobalKey(e))
                    );
                  }),
                  (e.prototype.get = function(e) {
                    var t = s.get(this._getGlobalKey(e));
                    return t && t.result;
                  }),
                  (e.prototype.has = function(e) {
                    return s.has(this._getGlobalKey(e));
                  }),
                  (e.prototype.set = function(e, t) {
                    return (
                      this._keys.add(e),
                      s.set(this._getGlobalKey(e), new n(this, e, t)),
                      this
                    );
                  }),
                  (e.prototype._getGlobalKey = function(e) {
                    return this._id + e;
                  }),
                  (e.id_gen = 0),
                  e
                );
              })();
            t.default = o;
          }.apply(null, i)) || (e.exports = n);
    },
    2177: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(10), r(9), r(264), r(431), r(37)]),
        void 0 ===
          (n = function(e, t, i, n, s, o, a) {
            function u() {
              return n.create(function(e) {
                return Promise.resolve()
                  .then(
                    function() {
                      var t = [r(325)];
                      e.apply(null, t);
                    }.bind(this)
                  )
                  .catch(r.oe);
              });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = "feature-store:unsupported-query",
              h = {
                spatialRelationship: {
                  intersects: !0,
                  contains: !0,
                  within: !0,
                  crosses: !0,
                  touches: !0,
                  overlaps: !0,
                  "envelope-intersects": !0
                },
                queryGeometry: {
                  point: !0,
                  multipoint: !0,
                  polyline: !0,
                  polygon: !0,
                  extent: !0
                },
                layerGeometry: {
                  esriGeometryPoint: !0,
                  esriGeometryMultipoint: !0,
                  esriGeometryPolyline: !0,
                  esriGeometryPolygon: !0
                }
              };
            (t.importGeometryEngine = u),
              (t.getGeodesicBufferOperator = function() {
                return u().then(function(e) {
                  return e.geodesicBuffer;
                });
              }),
              (t.getSpatialQueryOperator = function(e, t, r) {
                if ("intersects" === e) {
                  if ("polygon" === t.type && "esriGeometryPoint" === r)
                    return n.resolve(
                      s.polygonContainsPoint.bind(null, t.toJSON())
                    );
                  if ("extent" === t.type)
                    return n.resolve(o.getExtentIntersector(r).bind(null, t));
                }
                return u().then(function(r) {
                  return r[e].bind(null, t.toJSON());
                });
              }),
              (t.checkSpatialQuerySupport = function(e, t, r) {
                var s = e.spatialRelationship,
                  o = e.geometry;
                return o
                  ? (function(e) {
                      return !0 === h.spatialRelationship[e];
                    })(s)
                    ? (function(e) {
                        return !0 === h.queryGeometry[e];
                      })(o.type)
                      ? (function(e) {
                          return !0 === h.layerGeometry[e];
                        })(t)
                        ? a.canProject(o.spatialReference, r)
                          ? (o.hasZ, n.resolve())
                          : n.reject(
                              new i(
                                l,
                                "Unsupported geometry spatialReference",
                                { query: e }
                              )
                            )
                        : n.reject(
                            new i(l, "Unsupported layer geometry type", {
                              query: e
                            })
                          )
                      : n.reject(
                          new i(l, "Unsupported query geometry type", {
                            query: e
                          })
                        )
                    : n.reject(
                        new i(l, "Unsupported query spatial relationship", {
                          query: e
                        })
                      )
                  : null;
              }),
              (t.canQueryWithRBush = function(e) {
                switch (e.type) {
                  case "extent":
                    return !0;
                  case "polygon":
                    return e.rings.every(function(e) {
                      return (
                        5 === e.length &&
                        e[0][0] === e[1][0] &&
                        e[0][0] === e[4][0] &&
                        e[2][0] === e[3][0] &&
                        e[0][1] === e[3][1] &&
                        e[0][1] === e[4][1] &&
                        e[1][1] === e[2][1]
                      );
                    });
                  default:
                    return !1;
                }
              });
          }.apply(null, i)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/tiling/TileQueue": 2014,
      "esri/core/QueueProcessor": 2015,
      "esri/core/Queue": 2016,
      "@dojo/shim/Set": 2026,
      "esri/views/2d/tiling": 2052,
      "esri/views/2d/layers/features/support/Tile": 2086,
      "esri/layers/graphics/data/attributeSupport": 2090,
      "esri/core/LRUCache": 2091,
      "esri/core/libs/rbush/rbush": 2128,
      "esri/layers/graphics/data/FeatureStore": 2129,
      "esri/layers/graphics/data/FeatureStoreItem": 2131,
      "esri/layers/graphics/data/projectionSupport": 2132,
      "@dojo/shim/array": 2168,
      "esri/layers/graphics/data/FeatureStoreResult": 2173,
      "esri/geometry/support/quantizationUtils": 2174,
      "esri/layers/graphics/data/AttributesBuilder": 2175,
      "esri/layers/graphics/data/SpatialQueryCache": 2176,
      "esri/layers/graphics/data/spatialQuerySupport": 2177
    });
  })();
