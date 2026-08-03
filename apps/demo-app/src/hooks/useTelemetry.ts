// ------------------------------------------------------------
// Import: logEvent
// ------------------------------------------------------------
// The logEvent function is your low-level telemetry transport.
// It handles:
//   - console logging for local debugging
//   - POSTing analytics events to your backend endpoint
//   - safe, non-blocking error handling
//
// By importing it here, this hook becomes a thin abstraction
// layer that exposes a clean, semantic API for tracking events.
// ------------------------------------------------------------
import { logEvent } from "../telemetry/telemetry";


// ------------------------------------------------------------
// useTelemetry Hook
// ------------------------------------------------------------
// This custom hook provides a simple, declarative interface
// for tracking analytics events throughout your application.
//
// Why a hook?
//   - Hooks integrate naturally into React components
//   - They allow future expansion (session IDs, batching,
//     user context, feature flags, etc.)
//   - They keep telemetry logic centralized and consistent
//
// The hook currently exposes a single method: track()
// but is intentionally structured to grow as your analytics
// pipeline becomes more sophisticated.
// ------------------------------------------------------------
export function useTelemetry() {

  // ----------------------------------------------------------
  // track()
  // ----------------------------------------------------------
  // A wrapper around logEvent that provides a clean, semantic
  // API for components to call.
  //
  // Instead of components calling:
  //     logEvent("button_clicked", { id: 123 })
  //
  // They call:
  //     track("button_clicked", { id: 123 })
  //
  // This abstraction allows you to:
  //   - inject metadata automatically (user ID, session ID)
  //   - add batching or throttling
  //   - add environment-based routing (dev vs prod endpoints)
  //   - add feature-flagged instrumentation
  //
  // …without changing any component code.
  // ----------------------------------------------------------
  function track(event: string, payload?: any) {
    logEvent(event, payload);
  }


  // ----------------------------------------------------------
  // Return API
  // ----------------------------------------------------------
  // The hook returns an object containing the track() function.
  // This pattern makes the API extensible:
  //
  //   return { track, identify, flush, session, ... }
  //
  // As your telemetry system grows, this hook becomes the
  // single source of truth for all analytics interactions.
  // ----------------------------------------------------------
  return { track };
}
