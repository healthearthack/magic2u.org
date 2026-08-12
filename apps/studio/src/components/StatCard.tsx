// ------------------------------------------------------------
// Props Definition
// ------------------------------------------------------------
// The Props type defines the shape of the data expected by the
// StatCard component. This ensures that any consumer of the
// component provides the correct structure.
//
// label: A short, human-readable descriptor for the metric.
// value: The formatted metric value to display (stringified
//        number, currency, percentage, etc.).
//
// In a design system context, keeping props simple and explicit
// makes the component easy to reuse across dashboards, analytics
// views, and reporting surfaces.
// ------------------------------------------------------------
type Props = {
  label: string;
  value: string;
};


// ------------------------------------------------------------
// StatCard Component
// ------------------------------------------------------------
// A small, focused presentational component responsible for
// rendering a single KPI (Key Performance Indicator).
//
// This component is intentionally minimal:
//   - No internal state
//   - No side effects
//   - Purely visual
//
// This makes it ideal for dashboards, analytics summaries,
// and anywhere you need a clean, consistent metric tile.
// ------------------------------------------------------------
export function StatCard({ label, value }: Props) {
  return (
    // --------------------------------------------------------
    // Card Container
    // --------------------------------------------------------
    // Inline styles are used here for simplicity, but in a
    // production design system you'd replace these with:
//      - design tokens
//      - theme variables
//      - reusable layout primitives
//
// The styling choices:
//   background: Dark slate tone for contrast
//   padding: Comfortable spacing around content
//   borderRadius: Soft, modern rounding
//   color: White text for readability
// --------------------------------------------------------
    <div style={{
      background: "#1e293b",
      padding: 24,
      borderRadius: 12,
      color: "white"
    }}>
      {/* ----------------------------------------------
          Label
          ----------------------------------------------
          The label is intentionally low‑contrast (opacity 0.6)
          to create a visual hierarchy where the metric value
          stands out more prominently.
      */}
      <p style={{ opacity: 0.6 }}>{label}</p>

      {/* ----------------------------------------------
          Value
          ----------------------------------------------
          The metric value is the focal point of the card.
          Using <h2> gives it semantic weight and visual
          prominence.
      */}
      <h2>{value}</h2>
    </div>
  );
}


