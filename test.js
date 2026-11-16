"use strict";
const out = document.getElementById("result");
const ctrl = new AbortController();
setTimeout(() => ctrl.abort(), 8000);
fetch("https://localhost:8443/ping", { signal: ctrl.signal, targetAddressSpace: "loopback" })
  .then((r) => r.json())
  .then((d) => { out.className = "ok"; out.textContent = "✅ B works: reached the laptop program (" + d.time + ")."; })
  .catch((e) => { out.className = "bad"; out.textContent = "❌ B blocked: " + e.name + ": " + e.message; });
