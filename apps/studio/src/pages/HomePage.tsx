// ------------------------------------------------------------
// Import: DashboardPage
// ------------------------------------------------------------
// This import brings in the full enterprise dashboard page,
// which itself composes multiple sections such as:
//
//   - CompanyOverview
//   - MetricsPanel
//   - StatCard grids
//
// By importing DashboardPage here, HomePage becomes a thin
// routing-level wrapper. This keeps your routing structure clean,
// modular, and easy to expand as the application grows.
//
// In a real application, this file would sit inside a router
// (React Router, Next.js, Remix, etc.) and represent the root
// landing page of the product.
import { DashboardPage } from "../features/dashboard/DashboardPage";


// ------------------------------------------------------------
// HomePage Component
// ------------------------------------------------------------
// This component acts as the top-level "page" for the root route
// ("/"). It does not contain logic, state, or layout — it simply
// delegates to DashboardPage.
//
// Why this is good architecture:
//   - Keeps routing concerns separate from UI concerns
//   - Allows DashboardPage to be reused in other contexts
//   - Makes HomePage a clean, predictable entry point
//   - Supports future expansion (e.g., authentication wrappers,
//     layout shells, feature flags, or A/B testing)
//
// This is a textbook example of the "Page → Section → Component"
// hierarchy that makes Magic2U scalable and maintainable.
// ------------------------------------------------------------
export function HomePage() {
  // ----------------------------------------------------------
  // Render
  // ----------------------------------------------------------
  // Returning DashboardPage directly keeps HomePage intentionally
  // minimal. This is ideal for routing layers, which should avoid
  // business logic and instead focus on composition.
  //
  // If you later introduce:
  //   - global layout wrappers
  //   - navigation shells
  //   - breadcrumb systems
  //   - authentication guards
  //
  // …HomePage is the perfect place to integrate them.
  // ----------------------------------------------------------
  return <DashboardPage />;
}

