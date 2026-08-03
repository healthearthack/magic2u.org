// ------------------------------------------------------------
// CompanyOverview Component
// ------------------------------------------------------------
// This component provides the introductory, narrative context
// for the dashboard. While the MetricsPanel and StatCard
// components focus on quantitative KPIs, CompanyOverview
// establishes *meaning* and *framing* for the data.
//
// In a well‑designed enterprise dashboard, this kind of
// contextual section is essential because:
//   - It orients the user before they interpret metrics
//   - It communicates purpose and scope
//   - It reinforces the brand and narrative of the system
//
// This component is intentionally simple and purely presentational.
// It contains no state, no side effects, and no logic — making it
// easy to reuse, test, and evolve.
// ------------------------------------------------------------
export function CompanyOverview() {
  return (
    // --------------------------------------------------------
    // Container
    // --------------------------------------------------------
    // marginBottom: Adds spacing between this section and the
    // next (MetricsPanel). In a design system, this would be
    // replaced with spacing tokens or layout primitives.
    //
    // The container groups the heading and paragraph into a
    // cohesive block of content.
    // --------------------------------------------------------
    <div style={{ marginBottom: 30 }}>

      {/* ----------------------------------------------
          Heading
          ----------------------------------------------
          <h1> establishes the primary title for the page.
          This sets the tone and communicates the purpose
          of the dashboard: showcasing the impact of the
          Magic2U design system at enterprise scale.
      */}
      <h1>Enterprise Design System Impact</h1>

      {/* ----------------------------------------------
          Description
          ----------------------------------------------
          A short explanatory paragraph that reinforces
          the narrative. This is where you articulate the
          value proposition of the dashboard and the design
          system behind it.
          
          In a real enterprise dashboard, this section might
          expand to include:
            - mission statements
            - product summaries
            - high‑level insights
            - contextual framing for KPIs
      */}
      <p>
        Demonstration of Magic2U components applied at enterprise scale.
      </p>
    </div>
  );
}
