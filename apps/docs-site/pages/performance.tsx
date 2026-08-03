// ------------------------------------------------------------
// Import: PerformanceDashboard
// ------------------------------------------------------------
// This import brings in the actual UI component responsible for
// rendering performance metrics such as bundle size, first paint,
// and Lighthouse score.
//
// By isolating the dashboard into its own feature module
// (`../performance-dashboard/PerformanceDashboard`), this file
// becomes a clean, routing‑level wrapper. It keeps the page layer
// intentionally minimal and focused on composition rather than logic.
//
// This separation mirrors the Page → Feature → Component hierarchy
// used throughout Magic2U, ensuring scalability and clarity.
import { PerformanceDashboard } from "../performance-dashboard/PerformanceDashboard";


// ------------------------------------------------------------
// Performance Page Component
// ------------------------------------------------------------
// This component represents the *page-level* surface for the
// performance dashboard. In a routing system, this would map to
// a route such as:
//
//     /performance
//
// The page itself contains no logic, no state, and no layout
// complexity. Instead, it delegates all rendering to the
// PerformanceDashboard component.
//
// Why this is good architecture:
//   - Pages stay clean and declarative
//   - Features remain reusable and self-contained
//   - Routing concerns never leak into feature modules
//   - Future enhancements (layouts, guards, shells) can be added
//     here without touching the dashboard logic
//
// This is textbook separation of concerns.
export default function Performance() {
  // ----------------------------------------------------------
  // Render
  // ----------------------------------------------------------
  // Returning <PerformanceDashboard /> directly keeps the page
  // intentionally minimal. This is ideal for routing layers,
  // which should focus on composition rather than business logic.
  //
  // If you later introduce:
  //   - global layout wrappers
  //   - navigation shells
  //   - breadcrumb systems
  //   - authentication guards
  //
  // …this page component is the perfect place to integrate them.
  // ----------------------------------------------------------
  return <PerformanceDashboard />;
}



