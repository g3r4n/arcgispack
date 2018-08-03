function mapDelete(e, o) {
  e.delete(o);
}
function receiveMessage(e) {
  return e && e.data
    ? "string" == typeof e.data
      ? JSON.parse(e.data)
      : e.data
    : null;
}
function invokeStaticMessage(o, e) {
  var r = require("dojo/Deferred"),
    t = globalId++,
    a = new r(function(e) {
      self.postMessage({ type: CANCEL, methodName: o, jobId: t }),
        mapDelete(outgoing, t);
    });
  return (
    outgoing.set(t, a),
    self.postMessage({ type: INVOKE, methodName: o, jobId: t, data: e }),
    a.promise
  );
}
function messageHandler(e) {
  var o = receiveMessage(e);
  if (o) {
    var t = o.jobId;
    switch (o.type) {
      case CONFIGURE:
        var r = o.configure;
        if (configured) return;
        (self.dojoConfig = r.loaderConfig),
          self.importScripts(r.loaderUrl),
          "function" == typeof require.config && require.config(r.loaderConfig),
          require(["esri/config"], function(e) {
            for (var o in r.esriConfig)
              Object.prototype.hasOwnProperty.call(r.esriConfig, o) &&
                (e[o] = r.esriConfig[o]);
            self.postMessage({ type: CONFIGURED });
          });
        break;
      case OPEN:
        var a = o.modulePath;
        require(["esri/core/workers/RemoteClient", a], function(e, o) {
          var r = e.connect(o);
          self.postMessage({ type: OPENED, jobId: t, data: r }, [r]);
        });
        break;
      case RESPONSE:
        if (outgoing.has(t)) {
          var s = outgoing.get(t);
          mapDelete(outgoing, t),
            o.error ? s.reject(JSON.parse(o.error)) : s.resolve(o.data);
        }
    }
  }
}
var globalId = 0,
  outgoing = new Map(),
  configured = !1,
  HANDSHAKE = 0,
  CONFIGURE = 1,
  CONFIGURED = 2,
  OPEN = 3,
  OPENED = 4,
  RESPONSE = 5,
  INVOKE = 6,
  CANCEL = 7;
self.addEventListener("message", messageHandler),
  self.postMessage({ type: HANDSHAKE });
