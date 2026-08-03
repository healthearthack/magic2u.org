// ------------------------------------------------------------
// AdoptionGraph Component
// ------------------------------------------------------------
// This component presents a simple, narrative‑driven snapshot of
// design‑system adoption over a three‑year period. While the
// current implementation uses static text, the structure is
// intentionally shaped like a data visualization component.
//
// In a real design‑system analytics dashboard, adoption metrics
// are among the most important indicators of system health.
// They communicate:
//
//   - organizational trust
//   - cross‑team engagement
//   - maturity and stability of the system
//   - ROI of design‑system investment
//
// This component acts as a storytelling anchor — a place where
// readers can immediately understand the growth trajectory of
// Magic2U across the organization.
// ------------------------------------------------------------
export function AdoptionGraph() {
  return (
    // --------------------------------------------------------
    // Container
    // --------------------------------------------------------
    // A simple wrapper <div> groups the adoption metrics into a
    // cohesive block. In a more advanced version, this might be
    // replaced with a chart container, card, or visualization
    // wrapper from the Magic2U design system.
    // --------------------------------------------------------
    <div>
      {/* ----------------------------------------------
          Section Heading
          ----------------------------------------------
          <h2> establishes a strong visual hierarchy and
          signals that this block represents a major category
          of system analytics: adoption growth.
      */}
      <h2>Adoption Growth</h2>

      {/* ----------------------------------------------
          Adoption Metrics
          ----------------------------------------------
          These values represent the number of teams adopting
          the design system over three years. The progression
          (3 → 12 → 38) communicates exponential growth, which
          is typical of successful design‑system rollouts.
          
          In a future version, this might be visualized as:
            - a line chart
            - a bar chart
            - a cumulative adoption curve
            - a heatmap of team engagement
      */}
      <p>Year 1: 3 teams</p>
      <p>Year 2: 12 teams</p>
      <p>Year 3: 38 teams</p>
    </div>
  );
}

