// ------------------------------------------------------------
// This file defines bundle size limits for specific build
// artifacts inside the Magic2U monorepo.
//
// Tools like size‑limit, bundle‑analyzer, or custom CI checks
// can read this file to enforce performance budgets.
//
// Why this matters:
// - Ensures UI components stay lightweight
// - Prevents regressions when adding dependencies
// - Helps maintain a fast, responsive design system
// ------------------------------------------------------------

module.exports = [
  {
    // --------------------------------------------------------
    // path
    // --------------------------------------------------------
    // The exact file whose size we want to monitor.
    // In this case, the compiled entry point of the UI package.
    //
    // After building:
    //   packages/ui/dist/index.js
    //
    // This is the file consumers import when using:
    //   import { Button } from "@magic2u/ui"
    //
    // Keeping this small ensures fast load times for apps
    // that depend on the design system.
    path: "packages/ui/dist/index.js",

    // --------------------------------------------------------
    // limit
    // --------------------------------------------------------
    // The maximum allowed size for the file.
    // If the file grows beyond this threshold, CI can fail
    // and alert the team.
    //
    // 50 KB is a healthy, strict budget for a design system
    // entry point — it encourages tree‑shaking and modularity.
    limit: "50 KB"
  }
];
