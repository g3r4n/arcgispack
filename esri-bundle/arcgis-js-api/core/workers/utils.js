define(["require", "exports", "dojo/has"], function(e, t, n) {
  function a(e) {
    return e && "object" == typeof e && ("result" in e || "transferList" in e);
  }
  var r;
  Object.defineProperty(t, "__esModule", { value: !0 }),
    ((r = t.MessageType || (t.MessageType = {}))[(r.HANDSHAKE = 0)] =
      "HANDSHAKE"),
    (r[(r.CONFIGURE = 1)] = "CONFIGURE"),
    (r[(r.CONFIGURED = 2)] = "CONFIGURED"),
    (r[(r.OPEN = 3)] = "OPEN"),
    (r[(r.OPENED = 4)] = "OPENED"),
    (r[(r.RESPONSE = 5)] = "RESPONSE"),
    (r[(r.INVOKE = 6)] = "INVOKE"),
    (r[(r.CANCEL = 7)] = "CANCEL"),
    (r[(r.CLOSE = 8)] = "CLOSE"),
    (r[(r.OPEN_PORT = 9)] = "OPEN_PORT");
  var s = 0;
  (t.newJobId = function() {
    return s++;
  }),
    (t.isTranferableResult = a),
    (t.toInvokeError = function(e) {
      return e
        ? e.toJSON
          ? JSON.stringify(e)
          : JSON.stringify({
              name: e.name,
              message: e.message,
              details: e.details,
              stack: e.stack
            })
        : null;
    }),
    (t.postMessage = function(e, t, r, s) {
      2 === arguments.length || (void 0 === r && void 0 === s)
        ? e.postMessage(t)
        : (n("esri-workers-supports-transfer-arraybuffer") ||
            (s
              ? (s = s.filter(function(e) {
                  return !(e instanceof ArrayBuffer);
                })).length || (s = null)
              : a(r) &&
                r.transferList &&
                ((r.transferList = r.transferList.filter(function(e) {
                  return !(e instanceof ArrayBuffer);
                })),
                r.transferList.length || (r.transferList = null))),
          s
            ? ((t.data = r), e.postMessage(t, s))
            : a(r)
              ? ((t.data = r.result),
                r.transferList
                  ? e.postMessage(t, r.transferList)
                  : e.postMessage(t))
              : ((t.data = r), e.postMessage(t)));
    }),
    (t.receiveMessage = function(e) {
      if (!e) return null;
      var t = e.data;
      return t ? ("string" == typeof t ? JSON.parse(t) : t) : null;
    });
});
