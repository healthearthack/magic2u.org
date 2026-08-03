// ------------------------------------------------------------
// TimeSavedChart Component
// ------------------------------------------------------------
// This component presents a high‑level summary of engineering
// hours saved over a 12‑month period. While the current version
// displays static text, the structure is intentionally simple
// and ready to evolve into a richer visualization.
//
// In an enterprise analytics context, “time saved” is one of the
// most powerful metrics you can surface. It communicates:
//   - efficiency gains
//   - ROI of automation
//   - engineering impact at scale
//
// This component acts as a narrative anchor — a place where
// stakeholders immediately understand the value of Magic2U.
// ------------------------------------------------------------
export function TimeSavedChart() {
  return (
    // --------------------------------------------------------
    // Container
    // --------------------------------------------------------
    // A simple wrapper <div> groups the metric into a cohesive
    // block. In a more advanced dashboard, this might be replaced
    // with a Card, MetricTile, or ChartContainer component.
    // --------------------------------------------------------
    <div>
      {/* ----------------------------------------------
          Section Heading
          ----------------------------------------------
          <h3> establishes a mid‑level heading appropriate
          for dashboard sub‑sections. It signals that this
          block represents a specific KPI (time saved).
      */}
      <h3>Time Saved Over 12 Months</h3>

      {/* ----------------------------------------------
          Metric Display
          ----------------------------------------------
          This paragraph communicates the total engineering
          hours saved. The value is intentionally large and
          human‑readable — a storytelling technique often used
          in executive dashboards.
          
          In a future version, this might be:
            - dynamically calculated
            - pulled from telemetry
            - visualized as a line or bar chart
            - compared against previous periods
      */}
      <p>240,000 engineering hours saved</p>
    </div>
  );
}

