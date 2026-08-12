# 📊 Magic2U Hooks — Telemetry & Metrics

Magic2U provides a set of lightweight, declarative React hooks that encapsulate core application behaviors such as telemetry tracking and metrics retrieval. These hooks keep components clean, maintainable, and focused on presentation rather than logic.

This document covers two foundational hooks:

- **useTelemetry** — for tracking analytics events  
- **useMetrics** — for retrieving normalized enterprise metrics  

---

# 📡 1. useTelemetry

`useTelemetry` provides a simple, semantic API for tracking analytics events throughout the application.

### **Purpose**

- Centralizes all telemetry logic  
- Wraps the low-level `logEvent` transport  
- Keeps components free of analytics details  
- Enables future expansion (session IDs, batching, retries)  

### **Usage**

```ts
const { track } = useTelemetry();
track("page_view", { route: "/dashboard" });

