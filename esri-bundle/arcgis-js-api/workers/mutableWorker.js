!(function(a) {
  var m = self;
  m.__mutable ||
    m.addEventListener(
      "message",
      function(a) {
        var s,
          e,
          t,
          r = a.data;
        if (r.action) {
          switch (r.action) {
            case "import-script":
              try {
                Array.isArray(r.url) || (r.url = [r.url]),
                  m.importScripts.apply(m, r.url),
                  (e = !0);
              } catch (a) {
                (s = a),
                  postMessage({
                    msgId: r.msgId,
                    urls: r.url,
                    status: "debug",
                    message: "import failed - " + a.message
                  });
              }
              break;
            case "add-callback":
              try {
                m.importScripts(r.url);
                var c = m[r.cbName || "main"];
                if (!c) {
                  s = {
                    message: (r.cbName || "main") + " was not found in " + r.url
                  };
                  break;
                }
                (m.postMessage = ((t = m.postMessage),
                function(a, s) {
                  !1 !== c(a) && (s ? t(a, s) : t(a));
                })),
                  (e = !0);
              } catch (a) {
                s = a;
              }
          }
          if (e) {
            var i = {
              msgId: r.msgId,
              success: !0,
              action: r.action,
              actionUrl: r.url
            };
            "add-callback" == r.action && (i.cbName = r.cbName || "main"),
              postMessage(i);
          } else
            s &&
              postMessage({
                status: "error",
                msgId: r.msgId,
                message: s.message,
                action: r.action
              });
        }
      },
      !1
    ),
    (m.__mutable = !0);
})();
