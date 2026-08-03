// ------------------------------------------------------------
// logEvent
// ------------------------------------------------------------
// A lightweight telemetry helper responsible for sending
// client‑side analytics events to your backend or Cloudflare
// Worker endpoint.
//
// This function abstracts away the details of:
//   - console logging for local debugging
//   - network transport (POST request)
//   - payload formatting
//
// By centralizing telemetry logic here, the rest of your app
// can track events with a simple, consistent API:
//
//     logEvent("button_clicked", { id: 123 })
//
// This keeps analytics instrumentation clean, maintainable,
// and easy to evolve (e.g., batching, retries, auth tokens,
// session IDs, etc.).
// ------------------------------------------------------------
export function logEvent(event: string, payload?: any) {

  // ----------------------------------------------------------
  // Local Debug Logging
  // ----------------------------------------------------------
  // Logs the event to the browser console for visibility during
  // development. This is extremely helpful when validating that
  // instrumentation is firing correctly before wiring up the
  // backend pipeline.
  //
  // Prefixing with "[Telemetry]" makes logs easy to filter.
  // ----------------------------------------------------------
  console.log("[Telemetry]", event, payload);


  // ----------------------------------------------------------
  // Network Request
  // ----------------------------------------------------------
  // Sends the telemetry event to your backend endpoint.
  //
  // fetch("/telemetry-endpoint", { ... })
  //   - Uses a POST request to send structured analytics data
  //   - JSON.stringify ensures consistent formatting
  //   - Content-Type header tells the server to parse JSON
  //
  // The payload structure:
  //   {
  //     event: string,
  //     payload: any
  //   }
  //
  // This is intentionally generic so the backend can evolve
  // without requiring UI changes.
  // ----------------------------------------------------------
  fetch("/telemetry-endpoint", {
    method: "POST",
    body: JSON.stringify({ event, payload }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  // ----------------------------------------------------------
  // Error Handling
  // ----------------------------------------------------------
  // The catch block is intentionally empty.
  //
  // Why?
  //   - Telemetry should NEVER break the user experience
  //   - If the analytics endpoint fails, the UI must continue
  //   - Silent failure avoids noisy console errors in production
  //
  // In a more advanced system, you might:
  //   - batch failed events
  //   - retry with exponential backoff
  //   - store events in localStorage
  //   - send failures to a fallback endpoint
  //
  // But for now, silent failure is the safest default.
  // ----------------------------------------------------------
  .catch(() => {});
}
