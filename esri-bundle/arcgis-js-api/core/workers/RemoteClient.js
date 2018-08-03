define([
  "require",
  "exports",
  "dojo/Deferred",
  "../Error",
  "../promiseUtils",
  "./utils"
], function(e, t, r, h, _, u) {
  function l(e, t) {
    e.delete(t);
  }
  var o = u.MessageType.CLOSE,
    p = u.MessageType.CANCEL,
    a = u.MessageType.INVOKE,
    d = u.MessageType.RESPONSE,
    n = u.MessageType.OPEN_PORT,
    i = (function() {
      function e(e) {
        (this._timer = null),
          (this._cancelledJobIds = new Set()),
          (this._invokeMessages = []),
          (this._invoke = e),
          (this._timer = null),
          (this._process = this._process.bind(this));
      }
      return (
        (e.prototype.push = function(e) {
          e.type === u.MessageType.CANCEL
            ? this._cancelledJobIds.add(e.jobId)
            : (this._invokeMessages.push(e),
              null === this._timer &&
                (this._timer = setTimeout(this._process, 0)));
        }),
        (e.prototype.clear = function() {
          (this._invokeMessages.length = 0),
            this._cancelledJobIds.clear(),
            (this._timer = null);
        }),
        (e.prototype._process = function() {
          this._timer = null;
          for (var e = 0, t = this._invokeMessages; e < t.length; e++) {
            var o = t[e];
            this._cancelledJobIds.has(o.jobId) || this._invoke(o);
          }
          this._cancelledJobIds.clear(), (this._invokeMessages.length = 0);
        }),
        e
      );
    })();
  return (function() {
    function s(e, t, o) {
      (this._outJobs = new Map()),
        (this._inJobs = new Map()),
        (this._queue = new i(this._onInvoke.bind(this))),
        (this._onMessage = this._onMessage.bind(this)),
        (this._client = t),
        (this._port = e),
        this._port.addEventListener("message", this._onMessage),
        this._port.start(),
        (this._channel = o);
    }
    return (
      (s.connect = function(e) {
        var t,
          o = new MessageChannel();
        return (
          ((t =
            "function" == typeof e
              ? new e()
              : "default" in e && "function" == typeof e.default
                ? new e.default()
                : e).remoteClient = new s(o.port1, t, o)),
          o.port2
        );
      }),
      (s.prototype.close = function() {
        this._post({ type: o }), this._close();
      }),
      (s.prototype.isBusy = function() {
        return 0 < this._outJobs.size;
      }),
      (s.prototype.invoke = function(e, t, o) {
        var s = this;
        if (!this._port)
          return _.reject(
            new h("remote-client:port-closed", "Can't invoke(), port is closed")
          );
        var n = u.newJobId(),
          i = new r(function() {
            l(s._outJobs, n), s._post({ type: p, jobId: n });
          });
        return (
          this._outJobs.set(n, i),
          this._post({ type: a, jobId: n, methodName: e }, t, o),
          i.promise
        );
      }),
      (s.prototype.openPort = function() {
        var e = this,
          t = u.newJobId(),
          o = new r(function() {
            l(e._outJobs, t), e._post({ type: p, jobId: t });
          });
        return (
          this._outJobs.set(t, o), this._post({ type: n, jobId: t }), o.promise
        );
      }),
      (s.prototype._close = function() {
        this._channel && (this._channel = null),
          this._port.removeEventListener("message", this._onMessage),
          this._port.close(),
          this._outJobs.forEach(function(e) {
            e.cancel();
          }),
          this._inJobs.clear(),
          this._outJobs.clear(),
          this._queue.clear(),
          (this._port = this._client = null);
      }),
      (s.prototype._onMessage = function(e) {
        var t = u.receiveMessage(e);
        if (t)
          switch (t.type) {
            case d:
              this._onResponse(t);
              break;
            case a:
              this._queue.push(t);
              break;
            case p:
              this._onCancel(t);
              break;
            case o:
              this._close();
              break;
            case n:
              this._onOpenPort(t);
          }
      }),
      (s.prototype._onCancel = function(e) {
        var t = this._inJobs,
          o = e.jobId,
          s = t.get(o);
        this._queue.push(e), s && (l(t, o), s.cancel());
      }),
      (s.prototype._onInvoke = function(e) {
        var t,
          o = this,
          s = e.methodName,
          n = e.jobId,
          i = e.data,
          r = this._inJobs,
          h = this._client,
          p = h[s];
        try {
          if (!p && s && -1 !== s.indexOf("."))
            for (var a = s.split("."), c = 0; c < a.length - 1; c++)
              p = (h = h[a[c]])[a[c + 1]];
          if ("function" != typeof p)
            throw new TypeError(s + " is not a function");
          t = p.call(h, i, this);
        } catch (e) {
          return void this._post({
            type: d,
            jobId: n,
            error: u.toInvokeError(e)
          });
        }
        _.isThenable(t)
          ? (r.set(n, t),
            t
              .then(function(e) {
                r.has(n) && (l(r, n), o._post({ type: d, jobId: n }, e));
              })
              .catch(function(e) {
                r.has(n) &&
                  (l(r, n),
                  (e && "cancel" === e.dojoType) ||
                    o._post({
                      type: d,
                      jobId: n,
                      error: u.toInvokeError(
                        e || { message: "Error encountered at method " + s }
                      )
                    }));
              }))
          : this._post({ type: d, jobId: n }, t);
      }),
      (s.prototype._onOpenPort = function(e) {
        var t = new MessageChannel();
        new s(t.port1, this._client),
          this._post({ type: d, jobId: e.jobId }, t.port2, [t.port2]);
      }),
      (s.prototype._onResponse = function(e) {
        var t = e.jobId,
          o = e.error,
          s = e.data,
          n = this._outJobs;
        if (n.has(t)) {
          var i = n.get(t);
          l(n, t), o ? i.reject(h.fromJSON(JSON.parse(o))) : i.resolve(s);
        }
      }),
      (s.prototype._post = function(e, t, o) {
        return u.postMessage(this._port, e, t, o);
      }),
      s
    );
  })();
});
