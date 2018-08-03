define([
  "require",
  "exports",
  "dojo/Deferred",
  "../../kernel",
  "../Error",
  "../Logger",
  "../promiseUtils",
  "./utils",
  "./workerFactory"
], function(e, t, n, p, s, o, c, u, r) {
  function h(e, t) {
    e.delete(t);
  }
  var i = o.getLogger("esri.core.workers"),
    a = u.MessageType.CANCEL,
    d = u.MessageType.INVOKE,
    f = u.MessageType.OPEN,
    y = u.MessageType.OPENED,
    _ = u.MessageType.RESPONSE;
  return (function() {
    function o(e, t) {
      (this._outJobs = new Map()),
        (this._inJobs = new Map()),
        (this.worker = e),
        (this.id = t),
        e.addEventListener("message", this._onMessage.bind(this)),
        e.addEventListener("error", function(e) {
          e.preventDefault(), i.error(e);
        });
    }
    return (
      (o.create = function(t) {
        return r.createWorker().then(function(e) {
          return new o(e, t);
        });
      }),
      (o.prototype.terminate = function() {
        this.worker.terminate();
      }),
      (o.prototype.open = function(e) {
        var t = this,
          o = u.newJobId(),
          r = new n(function(e) {
            h(t._outJobs, o), t._post({ type: a, jobId: o });
          });
        return (
          this._outJobs.set(o, r),
          this._post({ type: f, jobId: o, modulePath: e }),
          r.promise
        );
      }),
      (o.prototype._onMessage = function(e) {
        var t = u.receiveMessage(e);
        if (t)
          switch (t.type) {
            case y:
            case _:
              this._onResponse(t);
              break;
            case a:
              this._onCancel(t);
              break;
            case d:
              this._onInvoke(t);
          }
      }),
      (o.prototype._onCancel = function(e) {
        var t = this._inJobs.get(e.jobId);
        t && t.cancel();
      }),
      (o.prototype._onInvoke = function(e) {
        var t,
          o = this,
          r = e.methodName,
          n = e.jobId,
          s = e.data,
          i = this._inJobs,
          a = p.workerMessages[r];
        try {
          if ("function" != typeof a)
            throw new TypeError(r + " is not a function");
          t = a.call(null, s);
        } catch (e) {
          return void this._post({
            type: _,
            jobId: n,
            error: u.toInvokeError(e)
          });
        }
        c.isThenable(t)
          ? (i.set(n, t),
            t
              .then(function(e) {
                h(i, n), o._post({ type: _, jobId: n }, e);
              })
              .catch(function(e) {
                h(i, n),
                  e || (e = { message: "Error encountered at method" + r }),
                  (e.dojoType && "cancel" === e.dojoType) ||
                    o._post({ type: _, jobId: n, error: u.toInvokeError(e) });
              }))
          : this._post({ type: _, jobId: n }, t);
      }),
      (o.prototype._onResponse = function(e) {
        var t = e.jobId,
          o = e.error,
          r = e.data,
          n = this._outJobs.get(t);
        n &&
          (h(this._outJobs, t),
          o ? n.reject(s.fromJSON(JSON.parse(o))) : n.resolve(r));
      }),
      (o.prototype._post = function(e, t, o) {
        return u.postMessage(this.worker, e, t, o);
      }),
      o
    );
  })();
});
