# 📡 Magic2U Telemetry & Event Logging

Magic2U includes a lightweight client‑side telemetry helper that enables components and applications to send analytics events to a backend endpoint (e.g., Cloudflare Worker, serverless function, or custom API).

This system is intentionally simple, extensible, and safe — designed to support enterprise‑grade analytics without introducing friction or risk to the user experience.

---

## 🎯 Purpose

The telemetry helper provides:

- A consistent API for logging events  
- Local console visibility during development  
- A safe, non‑blocking network transport  
- A flexible payload structure for future expansion  

This ensures that analytics instrumentation remains clean, maintainable, and decoupled from UI components.

---

## 🧩 The `logEvent` Function

```ts
export function logEvent(event: string, payload?: any) {
  console.log("[Telemetry]", event, payload);

  fetch("/telemetry-endpoint", {
    method: "POST",
    body: JSON.stringify({ event, payload }),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(() => {});
}

