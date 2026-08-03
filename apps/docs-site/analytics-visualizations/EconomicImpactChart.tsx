// ------------------------------------------------------------
// EconomicImpactChart Component
// ------------------------------------------------------------
// This component communicates one of the most compelling
// high‑level KPIs in any enterprise design‑system or automation
// initiative: *annual engineering savings*.
//
// While the current implementation is intentionally simple and
// static, it represents a narrative anchor in your analytics
// storytelling. Stakeholders often care less about raw metrics
// and more about *economic impact*, and this component surfaces
// that value clearly and immediately.
//
// In a future, more advanced version, this component could:
//   - visualize savings over time
//   - compare projected vs. actual savings
//   - break down savings by team or initiative
//   - integrate with telemetry or build‑time analytics
//
// For now, it provides a clean, readable KPI block that fits
// naturally into dashboards, reports, and executive summaries.
// ------------------------------------------------------------
export function EconomicImpactChart() {
  return (
    // --------------------------------------------------------
    // Container
    // --------------------------------------------------------
    // A simple wrapper <div> groups the KPI into a cohesive
    // block. This mirrors the structure used in TimeSavedChart
    // and other KPI components, maintaining visual consistency
    // across your analytics surfaces.
    // --------------------------------------------------------
    <div>
      {/* ----------------------------------------------
          Section Heading
          ----------------------------------------------
          <h3> is used to establish a mid‑level heading
          appropriate for dashboard subsections. It signals
          that this block represents a specific KPI category:
          economic impact.
      */}
      <h3>Economic Impact</h3>

      {/* ----------------------------------------------
          KPI Display
          ----------------------------------------------
          The metric is intentionally formatted in a
          human‑readable, executive‑friendly style:
          
              "$7.2M Annual Engineering Savings"
          
          This communicates value quickly without requiring
          interpretation or context. It’s a storytelling
          technique commonly used in enterprise dashboards.
      */}
      <p>$7.2M Annual Engineering Savings</p>
    </div>
  );
}
